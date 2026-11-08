// Pure logic: grading, mastery, mistakes, recommendations, question picking.
// No DOM access, so it runs in node too (see tests/engine.test.js).
(function (root) {
  const round = x => Math.round(x * 100) / 100;
  const norm = s => String(s ?? '').toLowerCase().normalize('NFKC')
    .replace(/[‘’`]/g, "'").replace(/\s+/g, ' ').replace(/^[\s"']+|[\s.,;:!?"']+$/g, '');

  // "RM 1,250.50" → 1250.5, "3/4" → 0.75, "−2" → -2, "12 cm" → 12
  function parseNum(v) {
    if (v == null) return null;
    let s = String(v).trim().replace(/[−–]/g, '-').replace(/^rm\s*/i, '').replace(/,/g, '').replace(/\s+/g, '');
    s = s.replace(/[a-z%²³°]+$/i, '');
    const f = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
    if (f) return +f[2] ? +f[1] / +f[2] : null;
    return s !== '' && isFinite(+s) ? +s : null;
  }

  // Returns { score, max, pending } — pending = open answer not self-marked yet.
  function grade(q, r) {
    const max = q.marks || 1;
    switch (q.type) {
      case 'mcq': return { score: r === q.answer ? max : 0, max };
      case 'fill': {
        const ok = q.blanks.filter((acc, i) => r && r[i] != null && acc.some(a => norm(a) === norm(r[i]))).length;
        return { score: round(max * ok / q.blanks.length), max };
      }
      case 'match': {
        const ok = q.pairs.filter((p, i) => r && r[i] === p[1]).length;
        return { score: round(max * ok / q.pairs.length), max };
      }
      case 'numeric': {
        const v = parseNum(r);
        return { score: v != null && Math.abs(v - q.answer) <= (q.tol ?? 0.01) + 1e-9 ? max : 0, max };
      }
      case 'open': // blank answers score 0 straight away; written ones wait for self-marking
        if (!r || (r.self == null && !String(r.text || '').trim())) return { score: 0, max };
        return r.self != null ? { score: Math.min(max, Math.max(0, +r.self)), max } : { score: 0, max, pending: true };
      case 'struct': {
        const parts = q.parts.map((p, i) => grade(p, r && r[i]));
        return { score: round(parts.reduce((a, p) => a + p.score, 0)), max, pending: parts.some(p => p.pending), parts };
      }
    }
    return { score: 0, max };
  }

  // Flatten every finished session into graded items, oldest first.
  function items(state) {
    const out = [];
    for (const s of state.sessions) for (const it of s.items || []) if (it.done) out.push({ ...it, ts: it.ts || s.ts });
    return out.sort((a, b) => a.ts - b.ts);
  }

  // Mastery per chapter key "sid:ch" from the last `window` graded attempts.
  function chapterStats(list, window = 10) {
    const by = {};
    for (const it of list) if (!it.pending) (by[it.sid + ':' + it.ch] ||= []).push(it);
    const out = {};
    for (const [k, arr] of Object.entries(by)) {
      const recent = arr.slice(-window), score = recent.reduce((a, x) => a + x.score, 0), max = recent.reduce((a, x) => a + x.max, 0);
      out[k] = { pct: max ? score / max : 0, n: arr.length, last: arr[arr.length - 1].ts };
    }
    return out;
  }

  // A question is a mistake while its latest graded attempt is below full marks.
  function mistakes(list) {
    const latest = {}, wrongCount = {};
    for (const it of list) {
      if (it.pending) continue;
      latest[it.qid] = it;
      if (it.score < it.max) wrongCount[it.qid] = (wrongCount[it.qid] || 0) + 1;
    }
    const open = [], resolved = [];
    for (const it of Object.values(latest)) {
      if (!wrongCount[it.qid]) continue;
      (it.score < it.max ? open : resolved).push({ ...it, times: wrongCount[it.qid] });
    }
    return { open: open.sort((a, b) => b.ts - a.ts), resolved: resolved.sort((a, b) => b.ts - a.ts) };
  }

  const WEIGHT = { high: 3, med: 2, low: 1 };
  const DAY = 864e5;
  // Ranked chapters to revise next, each with a human-readable reason.
  function recommend(subjects, state, stats, now = Date.now(), limit = 6) {
    const recs = [];
    for (const s of subjects) for (const c of s.chapters) {
      const k = s.id + ':' + c.id, st = stats[k], read = state.read[k], w = WEIGHT[c.weight] || 1;
      let score, reason;
      if (st && st.n >= 3 && st.pct < 0.6) { score = 10 + w * (1 - st.pct) * 3; reason = `Weak: ${Math.round(st.pct * 100)}% on recent questions`; }
      else if (!st && !read) { score = 4 + w; reason = c.weight === 'high' ? 'High-priority chapter, not started' : 'Not started yet'; }
      else if (!st) { score = 3 + w; reason = 'Revised but not practised yet'; }
      else if (now - st.last > 14 * DAY) { score = 2 + w + (1 - st.pct) * 2; reason = `Last practised ${Math.floor((now - st.last) / DAY)} days ago`; }
      else if (st.pct < 0.8) { score = 1 + w * (1 - st.pct); reason = `Improving: ${Math.round(st.pct * 100)}%, not yet mastered`; }
      else continue;
      recs.push({ sid: s.id, ch: c.id, score, reason });
    }
    return recs.sort((a, b) => b.score - a.score).slice(0, limit);
  }

  function shuffle(a, rnd = Math.random) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // Pick n questions: previous mistakes first, then unseen, then the rest (random within each group).
  function pick(pool, n, list, rnd) {
    const seen = new Set(list.map(i => i.qid)), wrong = new Set(mistakes(list).open.map(i => i.qid));
    const g = [[], [], []];
    for (const q of pool) g[wrong.has(q.id) ? 0 : seen.has(q.id) ? 2 : 1].push(q);
    return g.flatMap(x => shuffle(x, rnd)).slice(0, n);
  }

  // Consecutive active days ending today or yesterday.
  function streak(days, now = Date.now()) {
    const set = new Set(days.map(d => new Date(d).toDateString()));
    let n = 0, t = now;
    if (!set.has(new Date(t).toDateString())) t -= DAY;
    while (set.has(new Date(t).toDateString())) { n++; t -= DAY; }
    return n;
  }

  const Engine = { norm, parseNum, grade, items, chapterStats, mistakes, recommend, shuffle, pick, streak, round };
  if (typeof module !== 'undefined') module.exports = Engine; else root.Engine = Engine;
})(this);
