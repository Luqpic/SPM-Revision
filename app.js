// SPM Mastery — views, routing, sessions and persistence. Pure logic lives in engine.js.
(() => {
  const E = window.Engine;
  const ORDER = ['sejarah', 'bm', 'bi', 'sains', 'math'];
  const LABEL = { sejarah: 'Sejarah', bm: 'Bahasa Melayu', bi: 'English', sains: 'Science', math: 'Mathematics' };
  const SUBJ = ORDER.map(id => SPM.subjects.find(s => s.id === id)).filter(Boolean);
  const MISSING = ORDER.filter(id => !SUBJ.some(s => s.id === id));
  const bySid = Object.fromEntries(SUBJ.map(s => [s.id, s]));
  const Q = {}, QSID = {};
  SUBJ.forEach(s => s.questions.forEach(q => { Q[q.id] = q; QSID[q.id] = s.id; }));
  const chap = (sid, ch) => bySid[sid]?.chapters.find(c => c.id === ch);
  const EN_QUESTIONS = new Set(['bi', 'math', 'sains']); // questions written in English (DLP)
  const DIFF = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };
  const WEIGHT = { high: 'High priority', med: 'Medium priority', low: 'Lower priority' };
  const FORM = { 4: 'Form 4', 5: 'Form 5', 0: 'Skills (Form 4 & 5)' };
  const sc = sid => `--sc:var(--c-${sid})`;

  // ---------- storage ----------
  const KEY = 'spm-mastery-v1';
  const blank = () => ({ v: 1, name: '', examDate: '', theme: 'system', read: {}, sessions: [], active: null });
  let storageOk = true;
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return { ...blank(), ...s }; }
    catch { storageOk = false; }
    return blank();
  }
  let state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); storageOk = true; }
    catch { if (storageOk) toast('Progress could not be saved in this browser. Copy a backup from Settings.'); storageOk = false; }
  }
  let saveTimer;
  const saveSoon = () => { clearTimeout(saveTimer); saveTimer = setTimeout(save, 400); };

  // ---------- helpers ----------
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = x => Math.round(x * 100) + '%';
  const fmtDate = ts => new Date(ts).toLocaleDateString('en-MY', { day: 'numeric', month: 'short' });
  const fmtNum = n => (Math.round(n * 100) / 100).toString();
  const plain = s => String(s || '').replace(/<[^>]+>/g, ' ').replace(/[#*>|`]/g, '').replace(/___/g, '____').replace(/\s+/g, ' ').trim();
  const clip = (s, n = 150) => s.length > n ? s.slice(0, n - 1) + '…' : s;
  const letter = i => 'ABCDEFGH'[i];
  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t); setTimeout(() => t.remove(), 2800);
  }
  const go = h => { if (location.hash === '#' + h) render(); else location.hash = h; };

  // ---------- markdown subset (see SCHEMA.md) ----------
  const inline = s => s
    .replace(/<(?![a-zA-Z\/!])/g, '&lt;')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>');
  const isBlock = l => /^\s*(#{1,4}\s|>|\||[-*]\s+|\d+[.)]\s+|<[a-zA-Z!\/])/.test(l);
  function table(rows) {
    const cells = r => r.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());
    const sep = rows[1] && /^[\s|:\-]+$/.test(rows[1]);
    const head = sep ? `<thead><tr>${cells(rows[0]).map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead>` : '';
    const body = rows.slice(sep ? 2 : 0).map(r => `<tr>${cells(r).map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('');
    return `<div class="scroll-x"><table>${head}<tbody>${body}</tbody></table></div>`;
  }
  function md(src) {
    if (!src) return '';
    const L = String(src).replace(/\r/g, '').split('\n'), out = [];
    let i = 0, m;
    while (i < L.length) {
      const l = L[i];
      if (!l.trim()) { i++; continue; }
      if (/^\s*<[a-zA-Z!\/]/.test(l)) { const b = []; while (i < L.length && L[i].trim()) b.push(L[i++]); out.push(b.join('\n')); continue; }
      if ((m = l.match(/^\s*(#{1,4})\s+(.*)/))) { const n = Math.min(4, Math.max(2, m[1].length)); out.push(`<h${n}>${inline(m[2])}</h${n}>`); i++; continue; }
      if (/^\s*>/.test(l)) { const b = []; while (i < L.length && /^\s*>/.test(L[i])) b.push(L[i++].replace(/^\s*>\s?/, '')); out.push(`<blockquote>${md(b.join('\n'))}</blockquote>`); continue; }
      if (/^\s*\|/.test(l)) { const b = []; while (i < L.length && /^\s*\|/.test(L[i])) b.push(L[i++]); out.push(table(b)); continue; }
      if ((m = l.match(/^\s*([-*]|\d+[.)])\s+/))) {
        const ordered = /\d/.test(m[1]), re = ordered ? /^\s*\d+[.)]\s+/ : /^\s*[-*]\s+/, b = [];
        while (i < L.length && re.test(L[i])) b.push(`<li>${inline(L[i++].replace(re, ''))}</li>`);
        out.push(ordered ? `<ol start="${parseInt(m[1])}">${b.join('')}</ol>` : `<ul>${b.join('')}</ul>`); continue;
      }
      const b = [l]; i++;
      while (i < L.length && L[i].trim() && !isBlock(L[i])) b.push(L[i++]);
      out.push(`<p>${b.map(inline).join('<br>')}</p>`);
    }
    return out.join('\n');
  }

  // ---------- derived progress ----------
  let cache = null;
  const derived = () => {
    if (cache) return cache;
    const items = E.items(state), stats = E.chapterStats(items);
    return (cache = { items, stats, mist: E.mistakes(items), recs: E.recommend(SUBJ, state, stats) });
  };
  const changed = () => { cache = null; saveSoon(); };
  const mastered = st => st && st.n >= 5 && st.pct >= 0.8;
  function subjectProgress(s) {
    const { stats } = derived(), n = s.chapters.length;
    const read = s.chapters.filter(c => state.read[s.id + ':' + c.id]).length;
    const practised = s.chapters.map(c => stats[s.id + ':' + c.id]).filter(Boolean);
    const avg = practised.length ? practised.reduce((a, x) => a + x.pct, 0) / practised.length : null;
    return { n, read, mastered: s.chapters.filter(c => mastered(stats[s.id + ':' + c.id])).length, practised: practised.length, avg };
  }
  const sessionPct = s => { const it = (s.items || []).filter(i => i.done && !i.pending); const m = it.reduce((a, i) => a + i.max, 0); return m ? it.reduce((a, i) => a + i.score, 0) / m : null; };

  // ---------- charts ----------
  function ring(p, color, label, size = 92) {
    const r = 38, c = 2 * Math.PI * r, v = Math.max(0, Math.min(1, p || 0));
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="${esc(label)} ${pct(v)}">
      <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="11"/>
      <circle cx="50" cy="50" r="${r}" fill="none" stroke="${color}" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c * v} ${c}" transform="rotate(-90 50 50)"/>
      <text x="50" y="57" text-anchor="middle" font-size="22">${pct(v)}</text></svg>`;
  }
  function lineChart(points) {
    if (points.length < 2) return `<div class="empty small">Finish at least two practice sessions to see your score trend.</div>`;
    const W = 600, H = 190, l = 36, r = 14, t = 12, b = 26, x = i => l + i * (W - l - r) / (points.length - 1), y = v => t + (1 - v) * (H - t - b);
    const pts = points.map((p, i) => `${x(i).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ');
    const grid = [0, .5, 1].map(v => `<line x1="${l}" x2="${W - r}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)"/><text x="${l - 6}" y="${y(v) + 4}" text-anchor="end">${v * 100}</text>`).join('');
    const last = points[points.length - 1];
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Score trend over the last ${points.length} sessions">${grid}
      <polygon points="${l},${y(0)} ${pts} ${x(points.length - 1)},${y(0)}" fill="var(--accent)" opacity=".1"/>
      <polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linejoin="round"/>
      ${points.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.v)}" r="${i === points.length - 1 ? 5 : 3}" fill="${p.color}"><title>${esc(p.label)}: ${pct(p.v)}</title></circle>`).join('')}
      <text x="${l}" y="${H - 6}">${fmtDate(points[0].ts)}</text><text x="${W - r}" y="${H - 6}" text-anchor="end">${fmtDate(last.ts)}</text></svg>`;
  }
  const meter = (p, sid) => p == null ? `<span class="muted small">Not practised</span>` :
    `<div class="row small" style="gap:8px;flex-wrap:nowrap;${sc(sid)}"><div class="bar" style="flex:1"><i style="width:${pct(p)}"></i></div><span class="mono">${pct(p)}</span></div>`;

  // ---------- rail ----------
  function rail(route) {
    const { mist } = derived(), active = activeSession();
    const link = (h, label, extra = '', style = '') => `<a href="#${h}" ${route === h || route.startsWith(h + '/') ? 'aria-current="page"' : ''} style="${style}">${label}${extra}</a>`;
    document.getElementById('rail').innerHTML = `
      <a class="brand" href="#home"><b>SPM Mastery</b><span>KSSM</span></a>
      ${active ? `<a class="btn primary" href="#run">Resume: ${esc(clip(active.title, 26))}</a>` : ''}
      <nav class="nav" aria-label="Main">${link('home', 'Dashboard')}</nav>
      <div class="stack" style="gap:4px"><div class="eyebrow" style="padding:0 10px">Subjects</div>
        <nav class="nav">${ORDER.map(id => bySid[id]
          ? link('s/' + id, `<span class="dot"></span>${LABEL[id]}`, `<span class="count">${pct(subjectProgress(bySid[id]).read / bySid[id].chapters.length)}</span>`, sc(id))
          : `<a aria-disabled="true" style="${sc(id)};opacity:.5"><span class="dot"></span>${LABEL[id]}<span class="count">missing</span></a>`).join('')}</nav></div>
      <div class="stack" style="gap:4px"><div class="eyebrow" style="padding:0 10px">Practise</div>
        <nav class="nav">${link('practice', 'Custom practice')}${link('mock', 'Mock exams')}${link('smart', 'Smart revision')}
        ${link('mistakes', 'Mistake notebook', mist.open.length ? `<span class="count">${mist.open.length}</span>` : '')}</nav></div>
      <div class="stack" style="gap:4px"><div class="eyebrow" style="padding:0 10px">Review</div>
        <nav class="nav">${link('analysis', 'Past-year analysis')}${link('history', 'History')}${link('settings', 'Settings')}</nav></div>`;
  }

  // ---------- views ----------
  const V = {};

  V.home = () => {
    const { items, stats, mist, recs } = derived();
    const total = SUBJ.reduce((a, s) => a + s.chapters.length, 0), read = Object.keys(state.read).length;
    const done = state.sessions.filter(s => s.end), recent = done.slice(-20);
    const avg = recent.map(sessionPct).filter(x => x != null);
    const days = [...items.map(i => i.ts), ...Object.values(state.read)];
    const daysLeft = state.examDate ? Math.ceil((new Date(state.examDate + 'T08:00') - Date.now()) / 864e5) : null;
    const chList = Object.entries(stats).filter(([, s]) => s.n >= 3).map(([k, s]) => { const [sid, ch] = k.split(':'); return { sid, ch, ...s }; }).filter(x => chap(x.sid, x.ch));
    const weak = chList.filter(x => x.pct < 0.6).sort((a, b) => a.pct - b.pct).slice(0, 5);
    const strong = chList.filter(x => x.pct >= 0.75).sort((a, b) => b.pct - a.pct).slice(0, 5);
    const chLine = x => `<li><div class="row" style="${sc(x.sid)}"><span class="chip">${LABEL[x.sid]}</span><a href="#c/${x.sid}/${x.ch}">${esc(chap(x.sid, x.ch).title)}</a><span class="spacer"></span><span class="mono small">${pct(x.pct)}</span></div></li>`;
    const activity = [
      ...done.map(s => ({ ts: s.end, html: `<a href="#result/${s.id}">${esc(s.title)}</a> <span class="muted">· ${sessionPct(s) == null ? 'awaiting self-marking' : pct(sessionPct(s))}</span>` })),
      ...Object.entries(state.read).map(([k, ts]) => { const [sid, ch] = k.split(':'), c = chap(sid, ch); return c && { ts, html: `Revised notes: <a href="#c/${sid}/${ch}">${esc(c.title)}</a>` }; }).filter(Boolean),
    ].sort((a, b) => b.ts - a.ts).slice(0, 7);
    const mocks = done.filter(s => s.paper).slice(-6).reverse();
    const fresh = !items.length && !read;
    return `<div class="wrap">
      <header class="row" style="align-items:flex-end">
        <div class="stack" style="gap:4px"><div class="eyebrow">${new Date().toLocaleDateString('en-MY', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
          <h1>${state.name ? `Hi ${esc(state.name)}, ready to revise?` : 'Your SPM revision dashboard'}</h1></div>
        <span class="spacer"></span>
        ${daysLeft != null ? `<div class="card" style="padding:10px 16px"><div class="eyebrow">SPM starts in</div><b class="mono" style="font-size:1.4rem">${daysLeft > 0 ? daysLeft + ' days' : 'Exam period'}</b></div>`
          : `<a class="btn" href="#settings">Set your exam date</a>`}
      </header>
      ${MISSING.length ? `<div class="notice">Content for ${MISSING.map(m => LABEL[m]).join(', ')} failed to load. Check that the data files are present.</div>` : ''}
      ${fresh ? `<div class="card stack"><h2>Start here</h2><p class="prose">Pick a subject, read a chapter's notes and mark it as revised, then practise questions on it. Your weak chapters, mistakes and recommendations will appear here as you go. Progress is saved in this browser.</p>
        <div class="row"><a class="btn primary" href="#s/${SUBJ[0]?.id}">Open ${LABEL[SUBJ[0]?.id] || 'a subject'}</a><a class="btn" href="#smart">Try a mixed smart quiz</a><a class="btn" href="#analysis">See past-year analysis</a></div></div>` : ''}
      <section class="grid stats" aria-label="Summary">
        <div class="card stat"><div class="eyebrow">Chapters revised</div><b>${read}<span class="muted" style="font-size:1rem"> / ${total}</span></b></div>
        <div class="card stat"><div class="eyebrow">Questions answered</div><b>${items.length}</b></div>
        <div class="card stat"><div class="eyebrow">Avg score (last 20)</div><b>${avg.length ? pct(avg.reduce((a, b) => a + b, 0) / avg.length) : '–'}</b></div>
        <div class="card stat"><div class="eyebrow">Day streak</div><b>${E.streak(days)}</b></div>
        <a class="card stat" href="#mistakes" style="text-decoration:none;color:inherit"><div class="eyebrow">Open mistakes</div><b>${mist.open.length}</b></a>
      </section>
      <section class="stack"><h2>Subjects</h2><div class="grid">${SUBJ.map(s => { const p = subjectProgress(s); return `
        <a class="card stack" href="#s/${s.id}" style="${sc(s.id)};text-decoration:none;color:inherit;gap:12px;border-top:4px solid var(--sc)">
          <div class="row"><div class="stack" style="gap:0"><span class="mono small" style="color:var(--sc)">${esc(s.code)}</span><h3>${LABEL[s.id]}</h3></div><span class="spacer"></span>${ring(p.avg ?? 0, 'var(--sc)', 'Average mastery', 64)}</div>
          <div class="stack small" style="gap:6px"><div class="row"><span>Revised</span><span class="spacer"></span><span class="mono">${p.read}/${p.n}</span></div><div class="bar"><i style="width:${pct(p.read / p.n)}"></i></div>
          <div class="row muted"><span>Practised ${p.practised}/${p.n}</span><span class="spacer"></span><span>Mastered ${p.mastered}</span></div></div></a>`; }).join('')}</div></section>
      <div class="grid-2">
        <section class="card stack"><div class="row"><h2>Recommended next</h2><span class="spacer"></span><a class="btn primary" href="#smart">Smart revision</a></div>
          ${recs.length ? `<ul class="list-plain">${recs.map(r => { const c = chap(r.sid, r.ch); return `<li style="${sc(r.sid)}"><div class="row"><span class="chip" style="color:var(--sc)">${LABEL[r.sid]}</span><a href="#c/${r.sid}/${r.ch}"><b>${esc(c.title)}</b></a></div>
            <div class="row small" style="margin-top:4px"><span class="muted">${esc(r.reason)}</span><span class="spacer"></span><button class="btn" data-action="practise-ch" data-sid="${r.sid}" data-ch="${r.ch}">Practise</button></div></li>`; }).join('')}</ul>`
          : `<div class="empty">Everything practised is at 80% or above. Try a mock exam.</div>`}</section>
        <section class="card stack"><h2>Score trend</h2>${lineChart(recent.map(s => ({ v: sessionPct(s), ts: s.end, label: s.title, color: s.sid in bySid ? `var(--c-${s.sid})` : 'var(--accent)' })).filter(p => p.v != null))}
          <p class="small muted">Each dot is one finished session. Self-marked written answers count once you mark them.</p></section>
        <section class="card stack"><h2>Weakest chapters</h2>${weak.length ? `<ul class="list-plain">${weak.map(chLine).join('')}</ul>` : `<div class="empty small">Chapters below 60% (after at least 3 questions) show up here.</div>`}</section>
        <section class="card stack"><h2>Strongest chapters</h2>${strong.length ? `<ul class="list-plain">${strong.map(chLine).join('')}</ul>` : `<div class="empty small">Chapters at 75% or more (after at least 3 questions) show up here.</div>`}</section>
        <section class="card stack"><h2>Recent activity</h2>${activity.length ? `<ul class="list-plain small">${activity.map(a => `<li><span class="mono muted">${fmtDate(a.ts)}</span> · ${a.html}</li>`).join('')}</ul>` : `<div class="empty small">Nothing yet. Revise a chapter or answer some questions.</div>`}</section>
        <section class="card stack"><div class="row"><h2>Mock exam results</h2><span class="spacer"></span><a class="btn" href="#mock">Take a mock</a></div>${mocks.length ? `<div class="scroll-x"><table><thead><tr><th>Date</th><th>Paper</th><th>Score</th></tr></thead><tbody>${mocks.map(s => `<tr><td class="mono">${fmtDate(s.end)}</td><td><a href="#result/${s.id}">${esc(s.title)}</a></td><td class="mono">${sessionPct(s) == null ? 'pending' : pct(sessionPct(s))}</td></tr>`).join('')}</tbody></table></div>` : `<div class="empty small">No mock exams yet.</div>`}</section>
      </div></div>`;
  };

  function subjectHead(s, tab) {
    const p = subjectProgress(s), t = (h, l) => `<a href="#s/${s.id}${h}" ${tab === h ? 'aria-current="page"' : ''}>${l}</a>`;
    return `<header class="subject-head stack" style="gap:14px">
      <div class="row"><div class="stack" style="gap:2px"><span class="code">SPM ${esc(s.code)}</span><h1>${LABEL[s.id]}</h1>
        <span class="muted">${s.chapters.length} topics · ${s.questions.length} practice questions · ${p.read} revised · ${p.mastered} mastered</span></div>
        <span class="spacer"></span><div class="row"><button class="btn subject" data-action="smart" data-sid="${s.id}">Smart revision</button><a class="btn" href="#practice/${s.id}">Custom practice</a><a class="btn" href="#mock/${s.id}">Mock exam</a></div></div>
      <nav class="tabs">${t('', 'Topics')}${t('/exam', 'Exam format')}${t('/trends', 'Past-year analysis')}${t('/coverage', 'Coverage & sources')}</nav></header>`;
  }

  V.s = ([sid, tab = '']) => {
    const s = bySid[sid];
    if (!s) return notFound(MISSING.includes(sid) ? `${LABEL[sid]} content failed to load.` : 'That subject does not exist.');
    const { stats } = derived();
    let body;
    if (tab === 'exam') body = examView(s);
    else if (tab === 'trends') body = trendsView(s);
    else if (tab === 'coverage') body = `<section class="card md prose">${md(s.coverage)}</section>${sourcesView(s.sources)}`;
    else body = [4, 5, 0].map(f => {
      const chs = s.chapters.filter(c => c.form === f);
      if (!chs.length) return '';
      return `<section class="card"><h2 style="margin-bottom:6px">${FORM[f]}</h2>${chs.map(c => {
        const k = s.id + ':' + c.id, st = stats[k], nq = s.questions.filter(q => q.ch === c.id).length;
        return `<a class="chapter-row" href="#c/${s.id}/${c.id}"><span class="num">${f ? f + '.' : ''}${c.num ?? ''}</span>
          <span class="stack" style="gap:3px;min-width:0"><b>${esc(c.title)}</b><span class="small muted">${esc(c.summary)}</span>
          <span class="row" style="gap:6px"><span class="chip ${c.weight}">${WEIGHT[c.weight]}</span>${state.read[k] ? '<span class="chip good">✓ Revised</span>' : ''}${mastered(st) ? '<span class="chip good">Mastered</span>' : ''}<span class="chip">${nq} questions</span></span></span>
          <span class="meter">${meter(st?.pct, s.id)}</span></a>`;
      }).join('')}</section>`;
    }).join('');
    return `<div class="wrap" style="${sc(sid)}">${subjectHead(s, tab ? '/' + tab : '')}${body}</div>`;
  };

  function examView(s) {
    const ex = s.exam || {};
    return `${ex.verified ? `<div class="notice info md">${md(ex.verified)}</div>` : ''}
      <div class="grid-2">${(ex.papers || []).map(p => `<section class="card stack">
        <div class="row"><h2>${esc(p.name)}</h2><span class="spacer"></span><span class="chip mono">${p.duration} min</span><span class="chip mono">${p.marks} marks</span></div>
        <div class="md">${md(p.desc)}</div>
        ${p.sections?.length ? `<div class="scroll-x"><table><thead><tr><th>Section</th><th>Questions</th><th>Marks</th></tr></thead><tbody>${p.sections.map(x => `<tr><td><b>${esc(x.name)}</b>${x.desc ? `<div class="small muted">${esc(x.desc)}</div>` : ''}</td><td>${esc(x.questions)}</td><td class="mono">${esc(x.marks)}</td></tr>`).join('')}</tbody></table></div>` : ''}
        ${p.mock ? `<div class="row"><a class="btn subject" href="#mock/${s.id}">Practise this paper</a></div>` : '<p class="small muted">Not practisable in this app.</p>'}
      </section>`).join('')}</div>
      ${ex.overview ? `<section class="card md prose"><h2>Answering technique</h2>${md(ex.overview)}</section>` : ''}`;
  }

  function trendsView(s) {
    const t = s.trends || {};
    return `${t.disclaimer ? `<div class="notice md">${md(t.disclaimer)}</div>` : ''}
      <section class="card stack"><h2>Year by year</h2>${(t.years || []).length ? `<div class="stack">${t.years.map(y => `
        <div style="border-bottom:1px solid var(--line);padding-bottom:12px"><div class="row"><h3 class="mono">SPM ${y.year}</h3><span class="chip ${y.confidence}">${y.confidence}</span></div>
        <div class="md small" style="margin-top:6px">${md(y.summary)}</div>${y.sources?.length ? `<div class="small muted" style="margin-top:4px">Source: ${y.sources.map(x => `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a>`).join(', ')}</div>` : ''}</div>`).join('')}</div>` : '<div class="empty">No year data.</div>'}
        <p class="small muted"><span class="chip verified">verified</span> official or the paper itself · <span class="chip reported">reported</span> reputable teacher/education analysis · <span class="chip unverified">unverified</span> could not be confirmed</p></section>
      <section class="card stack"><h2>Recurring topics and priorities</h2>${(t.recurring || []).length ? `<div class="scroll-x"><table><thead><tr><th>Topic</th><th>Priority</th><th>Basis</th></tr></thead><tbody>${t.recurring.map(r => `<tr><td>${r.ch && chap(s.id, r.ch) ? `<a href="#c/${s.id}/${r.ch}">${esc(r.topic)}</a>` : esc(r.topic)}</td><td><span class="chip ${r.level}">${WEIGHT[r.level] || r.level}</span></td><td class="small">${esc(r.basis)}</td></tr>`).join('')}</tbody></table></div>` : '<div class="empty">No trend data.</div>'}</section>
      ${t.changes ? `<section class="card md prose"><h2>How the paper has changed</h2>${md(t.changes)}</section>` : ''}`;
  }
  const sourcesView = src => src?.length ? `<section class="card stack"><h2>Sources consulted</h2><ul class="small">${src.map(x => `<li><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a></li>`).join('')}</ul></section>` : '';

  V.c = ([sid, ch]) => {
    const s = bySid[sid], c = chap(sid, ch);
    if (!c) return notFound('Chapter not found.');
    const k = sid + ':' + ch, st = derived().stats[k], i = s.chapters.indexOf(c), prev = s.chapters[i - 1], next = s.chapters[i + 1];
    const list = (title, arr) => arr?.length ? `<section class="card stack"><h2>${title}</h2><ul class="md">${arr.map(x => `<li>${inline(x)}</li>`).join('')}</ul></section>` : '';
    const nq = s.questions.filter(q => q.ch === ch).length;
    return `<div class="wrap narrow" style="${sc(sid)}">
      <nav class="small"><a href="#s/${sid}">${LABEL[sid]}</a> › ${FORM[c.form]}</nav>
      <header class="subject-head stack">
        <span class="code">${!c.form ? 'Skill' : EN_QUESTIONS.has(sid) ? `Chapter ${c.num} · Form ${c.form}` : `Bab ${c.num} · Tingkatan ${c.form}`}</span><h1>${esc(c.title)}</h1><p class="muted" style="margin:0">${esc(c.summary)}</p>
        <div class="row"><span class="chip ${c.weight}">${WEIGHT[c.weight]}</span>${st ? `<span class="chip">Mastery ${pct(st.pct)} over ${st.n} questions</span>` : ''}</div>
        <div class="row"><button class="btn ${state.read[k] ? '' : 'subject'}" data-action="toggle-read" data-key="${k}">${state.read[k] ? '✓ Revised · undo' : 'Mark as revised'}</button>
          <button class="btn" data-action="practise-ch" data-sid="${sid}" data-ch="${ch}" ${nq ? '' : 'disabled'}>Practise ${nq} questions</button></div></header>
      <article class="card md prose">${md(c.notes)}</article>
      ${list('Key points', c.keyPoints)}${list('Key formulas & techniques', c.formulas)}${list('Common mistakes', c.mistakes)}${list('Exam tips', c.tips)}
      ${c.modelAnswer ? `<section class="card md prose"><h2>Building a high-scoring answer</h2>${md(c.modelAnswer)}</section>` : ''}
      <div class="row">${prev ? `<a class="btn" href="#c/${sid}/${prev.id}">← ${esc(clip(prev.title, 40))}</a>` : ''}<span class="spacer"></span>${next ? `<a class="btn" href="#c/${sid}/${next.id}">${esc(clip(next.title, 40))} →</a>` : ''}</div>
    </div>`;
  };

  // ----- practice builder -----
  let draft = null;
  function newDraft(sid, ch) {
    const s = bySid[sid] || SUBJ[0];
    return { sid: s.id, chs: new Set(ch ? [ch] : s.chapters.map(c => c.id)), formats: new Set(Object.keys(s.formats)), diffs: new Set([1, 2, 3]), kbat: false, n: 10, mode: 'practice', minutes: 20 };
  }
  const draftPool = d => bySid[d.sid].questions.filter(q => d.chs.has(q.ch) && d.formats.has(q.format) && d.diffs.has(q.diff) && (!d.kbat || q.kbat));
  V.practice = ([sid, ch]) => {
    if (!SUBJ.length) return notFound('No subject content loaded.');
    if (!draft || (sid && (draft.sid !== sid || ch))) draft = newDraft(sid || draft?.sid, ch);
    const s = bySid[draft.sid], pool = draftPool(draft), d = draft;
    const cb = (name, val, on, label) => `<label><input type="checkbox" data-draft="${name}" value="${esc(val)}" ${on ? 'checked' : ''}>${label}</label>`;
    return `<div class="wrap narrow" style="${sc(d.sid)}"><h1>Custom practice</h1>
      <div class="card stack" style="gap:16px">
        <div class="row"><label for="d-sid"><b>Subject</b></label><select id="d-sid" data-draft="sid">${SUBJ.map(x => `<option value="${x.id}" ${x.id === d.sid ? 'selected' : ''}>${LABEL[x.id]}</option>`).join('')}</select></div>
        <fieldset><legend>Chapters</legend><div class="row small" style="margin-bottom:8px"><button class="btn ghost" data-action="draft-all" data-on="1">Select all</button><button class="btn ghost" data-action="draft-all" data-on="0">Clear</button></div>
          <div class="stack" style="gap:6px">${s.chapters.map(c => `<label class="check"><input type="checkbox" data-draft="chs" value="${c.id}" ${d.chs.has(c.id) ? 'checked' : ''}><span>${c.form ? `<span class="mono muted">T${c.form}.${c.num}</span> ` : ''}${esc(c.title)}</span></label>`).join('')}</div></fieldset>
        <fieldset><legend>Question formats</legend><div class="chips-input">${Object.entries(s.formats).map(([k, v]) => cb('formats', k, d.formats.has(k), esc(v))).join('')}</div></fieldset>
        <fieldset><legend>Difficulty</legend><div class="chips-input">${[1, 2, 3].map(x => cb('diffs', x, d.diffs.has(x), DIFF[x])).join('')}${cb('kbat', 1, d.kbat, 'KBAT only')}</div></fieldset>
        <fieldset><legend>Mode</legend><div class="stack">
          <label class="check"><input type="radio" name="d-mode" data-draft="mode" value="practice" ${d.mode === 'practice' ? 'checked' : ''}><span><b>Practice</b> — check each answer as you go, with explanations</span></label>
          <label class="check"><input type="radio" name="d-mode" data-draft="mode" value="exam" ${d.mode === 'exam' ? 'checked' : ''}><span><b>Timed test</b> — answers and explanations at the end</span></label>
          ${d.mode === 'exam' ? `<label class="row small">Time limit <input type="number" id="d-min" data-draft="minutes" min="1" max="240" value="${d.minutes}" style="width:90px"> minutes</label>` : ''}</div></fieldset>
        <div class="row"><label for="d-n"><b>Number of questions</b></label><input id="d-n" type="number" min="1" max="60" data-draft="n" value="${d.n}" style="width:90px"><span class="muted small">${pool.length} questions match your filters</span></div>
        ${pool.length ? '' : `<div class="empty">No questions match. Add more chapters, formats or difficulty levels.</div>`}
        <div class="row"><button class="btn primary" data-action="start-draft" ${pool.length ? '' : 'disabled'}>Start ${Math.min(d.n, pool.length) || ''} questions</button></div>
      </div></div>`;
  };

  V.mock = ([sid]) => {
    const list = sid && bySid[sid] ? [bySid[sid]] : SUBJ;
    return `<div class="wrap"><h1>Mock exams</h1>
      <p class="prose muted" style="margin:0">Each mock follows the paper's real structure and timing, drawn from this app's question bank. Where the bank has fewer questions than the real paper, the mock is shortened and the time is scaled to match, and the page says so. Written answers are self-marked against the marking guide; this is not official examiner marking.</p>
      ${list.map(s => `<section class="stack" style="${sc(s.id)}"><h2>${LABEL[s.id]} <span class="mono small muted">${esc(s.code)}</span></h2><div class="grid">${(s.exam?.papers || []).map(p => {
        if (!p.mock) return `<div class="card stack"><h3>${esc(p.name)}</h3><p class="small muted">Not practisable in this app (${p.duration} min, ${p.marks} marks).</p><a class="small" href="#s/${s.id}/exam">See format</a></div>`;
        const avail = s.questions.filter(q => p.mock.formats.includes(q.format)).length, n = Math.min(avail, p.mock.n);
        const mins = n === p.mock.n ? p.mock.minutes : Math.max(5, Math.round(p.mock.minutes * n / p.mock.n));
        return `<div class="card stack" style="border-top:4px solid var(--sc)"><h3>${esc(p.name)}</h3>
          <div class="small">Real paper: ${p.duration} min · ${p.marks} marks</div>
          <div class="small muted">${n} of ${p.mock.n} questions available${n < p.mock.n ? ` — shortened mock, ${mins} min` : `, ${mins} min`}</div>
          <button class="btn subject" data-action="start-mock" data-sid="${s.id}" data-paper="${p.id}" ${n ? '' : 'disabled'}>Start mock</button></div>`;
      }).join('')}</div></section>`).join('')}</div>`;
  };

  V.mistakes = ([sid]) => {
    const { mist } = derived(), f = x => !sid || x.sid === sid;
    const open = mist.open.filter(f).filter(x => Q[x.qid]), resolved = mist.resolved.filter(f).filter(x => Q[x.qid]).slice(0, 30);
    const row = x => { const q = Q[x.qid], c = chap(x.sid, x.ch), s = state.sessions.find(z => z.id === x.sess);
      return `<li style="${sc(x.sid)}"><details><summary><span class="row" style="display:inline-flex"><span class="chip" style="color:var(--sc)">${LABEL[x.sid]}</span><span class="small muted">${esc(c?.title || '')}</span></span>
        <div style="margin:6px 0 0 18px">${esc(clip(plain(q.q || q.stimulus), 170))}</div>
        <div class="small muted" style="margin-left:18px">Wrong ${x.times}× · last ${fmtNum(x.score)}/${x.max} on ${fmtDate(x.ts)}</div></summary>
        <div style="margin-top:12px">${questionBlock(q, s?.resp[q.id], { sess: s?.id || '', reveal: true, locked: true })}</div></details></li>`; };
    return `<div class="wrap narrow"><div class="row"><h1>Mistake notebook</h1><span class="spacer"></span>
        <button class="btn primary" data-action="retry-mistakes" data-sid="${sid || ''}" ${open.length ? '' : 'disabled'}>Retry ${open.length} mistakes</button></div>
      <p class="muted" style="margin:0">Every question you didn't get full marks on lands here. It moves to "Fixed" once you answer it correctly. Smart revision also mixes these back in.</p>
      <div class="row">${['', ...SUBJ.map(s => s.id)].map(x => `<a class="btn ${x === (sid || '') ? 'primary' : ''}" href="#mistakes${x ? '/' + x : ''}">${x ? LABEL[x] : 'All'}</a>`).join('')}</div>
      <section class="card">${open.length ? `<ul class="list-plain">${open.map(row).join('')}</ul>` : `<div class="empty">No open mistakes${sid ? ' in ' + LABEL[sid] : ''}. Practise to fill your notebook, or celebrate.</div>`}</section>
      ${resolved.length ? `<details class="card"><summary>Fixed (${resolved.length})</summary><ul class="list-plain">${resolved.map(row).join('')}</ul></details>` : ''}</div>`;
  };

  V.analysis = ([sid]) => {
    const s = bySid[sid] || SUBJ[0];
    if (!s) return notFound('No subject content loaded.');
    return `<div class="wrap" style="${sc(s.id)}"><h1>Past-year analysis</h1>
      <p class="prose muted" style="margin:0">Topic patterns from SPM 2021–2025 (the KSSM papers), with how confident each claim is. Trends help you prioritise; they are not predictions of what will come out.</p>
      <nav class="tabs">${SUBJ.map(x => `<a href="#analysis/${x.id}" ${x.id === s.id ? 'aria-current="page"' : ''} style="${sc(x.id)}">${LABEL[x.id]}</a>`).join('')}</nav>
      ${trendsView(s)}${sourcesView(s.sources)}</div>`;
  };

  V.history = () => {
    const done = state.sessions.filter(s => s.end).slice().reverse();
    return `<div class="wrap narrow"><h1>History</h1><section class="card">${done.length ? `<div class="scroll-x"><table><thead><tr><th>Date</th><th>Session</th><th>Mode</th><th>Score</th></tr></thead><tbody>${done.map(s => {
      const p = sessionPct(s), pend = (s.items || []).some(i => i.pending);
      return `<tr><td class="mono">${fmtDate(s.end)}</td><td><a href="#result/${s.id}">${esc(s.title)}</a></td><td>${s.paper ? 'Mock' : s.mode === 'exam' ? 'Timed' : 'Practice'}</td><td class="mono">${p == null ? '–' : pct(p)}${pend ? ' <span class="chip med">self-mark</span>' : ''}</td></tr>`; }).join('')}</tbody></table></div>`
      : `<div class="empty">No finished sessions yet.</div>`}</section></div>`;
  };

  V.settings = () => `<div class="wrap narrow"><h1>Settings</h1>
    <section class="card stack"><h2>Profile</h2>
      <label class="stack" style="gap:4px"><b>Your name</b><input type="text" id="set-name" data-setting="name" value="${esc(state.name)}" maxlength="40" placeholder="e.g. Adam"></label>
      <label class="stack" style="gap:4px"><b>First SPM paper date</b><input type="date" id="set-date" data-setting="examDate" value="${esc(state.examDate)}"><span class="small muted">Check the official timetable from Lembaga Peperiksaan; the app only counts down to the date you enter.</span></label>
      <label class="stack" style="gap:4px"><b>Theme</b><select id="set-theme" data-setting="theme">${['system', 'light', 'dark'].map(t => `<option value="${t}" ${state.theme === t ? 'selected' : ''}>${t[0].toUpperCase() + t.slice(1)}</option>`).join('')}</select></label></section>
    <section class="card stack"><h2>Back up your progress</h2>
      <p class="small muted" style="margin:0">Progress is stored in this browser only${storageOk ? '' : ' — <b>and saving is currently failing here</b>'}. Copy this backup code and keep it somewhere safe, or use it to move to another device.</p>
      <textarea id="backup-out" readonly rows="4">${esc(JSON.stringify(state))}</textarea>
      <div class="row"><button class="btn" data-action="copy-backup">Copy backup code</button></div>
      <h3>Restore</h3>
      <textarea id="backup-in" rows="3" placeholder="Paste a backup code here"></textarea>
      <div class="row"><button class="btn" data-action="import">Restore from code</button><label class="btn">Restore from file<input type="file" id="backup-file" accept=".json,.txt,application/json,text/plain" hidden></label></div></section>
    <section class="card stack"><h2>Reset</h2><p class="small muted" style="margin:0">Deletes all progress, sessions and mistakes in this browser. Copy a backup first.</p>
      <div class="row"><button class="btn danger" data-action="reset">Reset all progress</button></div></section>
    <section class="card small muted md">${md(`**About the content.** Notes and questions are original SPM-style material written against the KSSM syllabus and SPM formats; no real past-year questions are reproduced. Each subject's *Coverage & sources* tab says what was verified and what is thin. Self-marking of essays and structured answers is a study aid, not official examiner marking.`)}</section></div>`;

  // ---------- question rendering ----------
  // opts: { sess, reveal (show correctness), locked (disable answer inputs) }
  function partInput(q, r, path, o) {
    const dis = o.locked ? 'disabled' : '', base = `data-sess="${o.sess}" data-q="${path.qid}" data-p="${path.p}"`;
    switch (q.type) {
      case 'mcq': return `<div class="opts" role="radiogroup">${q.options.map((opt, i) => {
        const cls = o.reveal ? (i === q.answer ? 'correct' : r === i ? 'wrong' : '') : '';
        return `<label class="opt ${cls}"><input type="radio" name="${o.sess}-${path.qid}-${path.p}" ${base} data-kind="mcq" value="${i}" ${r === i ? 'checked' : ''} ${dis}><span class="key">${letter(i)}</span><span class="md">${inline(String(opt))}</span></label>`; }).join('')}</div>`;
      case 'fill': return ''; // blanks are inline in the question text
      case 'match': {
        const order = sessionOrder(o.sess, path) || q.pairs.map(p => p[1]).sort();
        return `<div style="margin-top:10px">${q.pairs.map((p, i) => `<div class="match-row"><div class="md">${inline(String(p[0]))}</div>
          <select ${base} data-kind="match" data-i="${i}" ${dis} aria-label="Match for item ${i + 1}"><option value="">Choose…</option>${order.map(v => `<option ${r?.[i] === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select></div>`).join('')}</div>`;
      }
      case 'numeric': return `<div class="row" style="margin-top:10px"><label class="small muted" for="n-${o.sess}-${path.qid}-${path.p}">Answer</label><input type="text" inputmode="decimal" id="n-${o.sess}-${path.qid}-${path.p}" ${base} data-kind="numeric" value="${esc(r ?? '')}" ${dis} style="width:160px">${q.unit ? `<span>${esc(q.unit)}</span>` : ''}</div>`;
      case 'open': {
        const t = r?.text || '', words = t.trim() ? t.trim().split(/\s+/).length : 0;
        return `<textarea ${base} data-kind="open" ${dis} aria-label="Your answer" placeholder="Write your answer here">${esc(t)}</textarea><div class="small muted wc">${words} words</div>`;
      }
    }
    return '';
  }
  function questionText(q, r, path, o) {
    let h = md(q.q);
    if (q.type === 'fill') {
      let i = 0;
      h = h.replace(/___/g, () => { const k = i++, ok = o.reveal ? q.blanks[k].some(a => E.norm(a) === E.norm(r?.[k])) : null;
        return `<input type="text" class="blank-input" data-sess="${o.sess}" data-q="${path.qid}" data-p="${path.p}" data-kind="fill" data-i="${k}" value="${esc(r?.[k] ?? '')}" ${o.locked ? 'disabled' : ''} aria-label="Blank ${k + 1}" style="${ok == null ? '' : `border-color:var(--${ok ? 'good' : 'bad'})`}">`; });
    }
    return `<div class="md">${h}</div>`;
  }
  function feedback(q, r, path, o) {
    const g = E.grade(q, r);
    if (q.type === 'open') {
      const ticks = r?.ticks || [];
      return `<div class="feedback self stack"><div class="row"><span class="verdict">Self-mark</span><span class="spacer"></span><span class="mono">${g.pending ? `– / ${g.max}` : `${fmtNum(g.score)} / ${g.max}`}</span></div>
        <details open><summary>Model answer</summary><div class="md" style="margin-top:8px">${md(q.model)}</div></details>
        ${q.rubric ? `<div><b>Marking guide</b> <span class="small muted">— tick each point your answer makes clearly</span><ul class="list-plain rubric">${q.rubric.map((x, i) => `<li><input type="checkbox" id="t-${o.sess}-${path.qid}-${path.p}-${i}" data-sess="${o.sess}" data-q="${path.qid}" data-p="${path.p}" data-kind="tick" data-i="${i}" ${ticks.includes(i) ? 'checked' : ''}><label for="t-${o.sess}-${path.qid}-${path.p}-${i}" class="md small">${inline(x.p)} <span class="mono muted">[${x.m}]</span></label></li>`).join('')}</ul></div>` : ''}
        ${q.bands ? `<div><b>Band descriptors</b><div class="scroll-x"><table class="small"><thead><tr><th>Band</th><th>Marks</th><th>What it looks like</th></tr></thead><tbody>${q.bands.map(b => `<tr><td><b>${esc(b.band)}</b></td><td class="mono">${esc(b.range)}</td><td>${inline(esc(b.desc))}</td></tr>`).join('')}</tbody></table></div>
          <label class="row small">Your mark <input type="number" min="0" max="${g.max}" step="0.5" data-sess="${o.sess}" data-q="${path.qid}" data-p="${path.p}" data-kind="self" value="${r?.self ?? ''}" style="width:90px"> / ${g.max}</label></div>` : ''}
        ${q.explain ? `<div class="md small">${md(q.explain)}</div>` : ''}
        <p class="small muted" style="margin:0">Self-marking is a study aid. Real SPM examiners mark holistically and may award differently.</p></div>`;
    }
    const full = g.score >= g.max, cls = full ? 'ok' : 'no';
    let ans = '';
    if (q.type === 'mcq') ans = `<b>Answer: ${letter(q.answer)}</b> — ${inline(String(q.options[q.answer]))}`;
    if (q.type === 'fill') ans = `<b>Answer:</b> ${q.blanks.map((b, i) => `(${i + 1}) ${esc(b.join(' / '))}`).join(' · ')}`;
    if (q.type === 'numeric') ans = `<b>Answer:</b> <span class="mono">${esc(q.answer)}${q.unit ? ' ' + esc(q.unit) : ''}</span>`;
    if (q.type === 'match') ans = `<b>Correct matches:</b><ul>${q.pairs.map(p => `<li>${inline(String(p[0]))} → ${inline(String(p[1]))}</li>`).join('')}</ul>`;
    return `<div class="feedback ${cls} stack"><div class="row"><span class="verdict">${full ? 'Correct' : g.score > 0 ? 'Partly correct' : 'Not quite'}</span><span class="spacer"></span><span class="mono">${fmtNum(g.score)} / ${g.max}</span></div>
      <div class="md">${ans}</div><div class="md">${md(q.explain)}</div></div>`;
  }
  // Whole question: stimulus + text + inputs (+ feedback when revealed)
  function questionBlock(q, r, o, num) {
    const fmt = bySid[QSID[q.id]]?.formats[q.format] || q.format, en = EN_QUESTIONS.has(QSID[q.id]);
    const head = `<div class="qhead"><span class="qn">${en ? 'Question' : 'Soalan'}${num ? ' ' + num : ''}</span><span class="chip">${esc(fmt)}</span><span class="chip">${DIFF[q.diff]}</span>${q.kbat ? '<span class="chip kbat">KBAT</span>' : ''}<span class="marks">[${q.marks} ${q.marks === 1 ? 'mark' : 'marks'}]</span></div>`;
    const stim = q.stimulus ? `<div class="stimulus"><div class="eyebrow">${en ? 'Source' : 'Bahan'}</div><div class="md">${md(q.stimulus)}</div></div>` : '';
    const one = (part, rr, p, label) => `${label ? `<div class="part">` : '<div style="margin-top:12px">'}
      <div class="row" style="align-items:flex-start;flex-wrap:nowrap">${label ? `<span class="part-label">${esc(label)}</span>` : ''}<div style="flex:1;min-width:0">${questionText(part, rr, { qid: q.id, p }, o)}</div>${label ? `<span class="marks" style="margin-left:8px">[${part.marks}]</span>` : ''}</div>
      ${partInput(part, rr, { qid: q.id, p }, o)}${o.reveal ? feedback(part, rr, { qid: q.id, p }, o) : ''}</div>`;
    const body = q.type === 'struct' ? q.parts.map((p, i) => one(p, r?.[i], i, p.label || `(${String.fromCharCode(97 + i)})`)).join('') : one(q, r, '', '');
    return `<div class="paper" style="${sc(QSID[q.id])}">${head}${stim}${body}</div>`;
  }

  // ---------- sessions ----------
  const sessById = id => state.sessions.find(s => s.id === id);
  const activeSession = () => state.active && sessById(state.active);
  const sessionOrder = (sid, path) => sessById(sid)?.order?.[path.qid + ':' + path.p];
  function startSession({ sid, title, mode, minutes = 0, questions, paper }) {
    if (!questions.length) return toast('No questions available for that selection.');
    const old = activeSession();
    if (old) finish(old, true);
    const s = { id: 's' + Date.now().toString(36), sid, title, mode, minutes, paper, ts: Date.now(), qids: questions.map(q => q.id), resp: {}, checked: {}, flags: {}, order: {}, cur: 0, items: [] };
    for (const q of questions) (q.type === 'struct' ? q.parts.map((p, i) => [p, i]) : [[q, '']]).forEach(([p, i]) => {
      if (p.type === 'match') s.order[q.id + ':' + i] = E.shuffle(p.pairs.map(x => x[1]));
    });
    state.sessions.push(s);
    if (state.sessions.length > 400) state.sessions.splice(0, state.sessions.length - 400);
    state.active = s.id; changed(); save(); go('run');
  }
  function gradeInto(s, qid) {
    const q = Q[qid], g = E.grade(q, s.resp[qid]);
    const item = { qid, sid: QSID[qid], ch: q.ch, score: g.score, max: g.max, pending: !!g.pending, done: true, ts: Date.now(), sess: s.id };
    const i = s.items.findIndex(x => x.qid === qid);
    if (i >= 0) s.items[i] = { ...item, ts: s.items[i].ts }; else s.items.push(item);
  }
  function finish(s, silent) {
    // exam: everything counts; practice: answered-but-unchecked questions count too
    s.qids.forEach(id => { if (Q[id] && (s.mode === 'exam' || (hasAnswer(s.resp[id]) && !s.items.some(x => x.qid === id)))) gradeInto(s, id); });
    s.end = Date.now();
    if (state.active === s.id) state.active = null;
    if (!s.items.length) { state.sessions = state.sessions.filter(x => x !== s); changed(); save(); if (!silent) { toast('Session closed — nothing was checked, so nothing was saved.'); go('home'); } return; }
    changed(); save();
    if (!silent) go('result/' + s.id);
  }
  const hasAnswer = v => v != null && v !== '' && (typeof v !== 'object' || (Array.isArray(v) ? v.some(hasAnswer) : hasAnswer(v.text)));
  const remaining = s => s.mode === 'exam' && s.minutes ? s.ts + s.minutes * 60e3 - Date.now() : null;
  const clock = ms => { const t = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };

  V.run = () => {
    const s = activeSession();
    if (!s) return `<div class="wrap narrow"><div class="empty stack"><h2>No session in progress</h2><div class="row" style="justify-content:center"><a class="btn primary" href="#practice">Custom practice</a><a class="btn" href="#mock">Mock exam</a><a class="btn" href="#smart">Smart revision</a></div></div></div>`;
    s.qids = s.qids.filter(id => Q[id]);
    const q = Q[s.qids[s.cur]], checked = !!s.checked[q.id], practice = s.mode === 'practice', rem = remaining(s);
    const answered = id => hasAnswer(s.resp[id]);
    const itemOf = id => s.items.find(x => x.qid === id);
    return `<div class="wrap narrow" style="${sc(s.sid in bySid ? s.sid : QSID[q.id])}">
      <div class="runbar stack" style="gap:8px"><div class="row"><b>${esc(s.title)}</b><span class="chip">${practice ? 'Practice' : 'Timed test'}</span><span class="spacer"></span>
        ${rem != null ? `<span class="timer ${rem < 5 * 60e3 ? 'low' : ''}" id="timer" aria-live="off">${clock(rem)}</span>` : ''}
        <button class="btn ${practice ? '' : 'primary'}" data-action="finish">${practice ? 'End session' : 'Submit paper'}</button></div>
        <div class="navgrid" aria-label="Question navigator">${s.qids.map((id, i) => { const it = practice && itemOf(id);
          const cls = [i === s.cur && 'cur', answered(id) && 'answered', s.flags[id] && 'flag', it && !it.pending && (it.score >= it.max ? 'right' : 'wrongq')].filter(Boolean).join(' ');
          return `<button class="${cls}" data-action="goto" data-i="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`; }).join('')}</div></div>
      ${questionBlock(q, s.resp[q.id], { sess: s.id, reveal: practice && checked, locked: practice && checked }, s.cur + 1)}
      <div class="row"><button class="btn" data-action="goto" data-i="${s.cur - 1}" ${s.cur ? '' : 'disabled'}>← Previous</button>
        ${!practice ? `<button class="btn ghost" data-action="flag">${s.flags[q.id] ? '★ Flagged' : '☆ Flag for review'}</button>` : ''}
        <span class="spacer"></span>
        ${practice && !checked ? `<button class="btn primary" data-action="check">Check answer</button>` : ''}
        ${s.cur < s.qids.length - 1 ? `<button class="btn ${practice && !checked ? '' : 'primary'}" data-action="goto" data-i="${s.cur + 1}">Next →</button>`
          : `<button class="btn primary" data-action="finish">${practice ? 'Finish' : 'Submit paper'}</button>`}</div>
      <p class="small muted">Question ${s.cur + 1} of ${s.qids.length}${practice ? '' : ' · answers and explanations appear after you submit'}. Your answers save automatically.</p></div>`;
  };

  V.result = ([id]) => {
    const s = sessById(id);
    if (!s || !s.end) return notFound('That session was not found.');
    const graded = s.items.filter(i => !i.pending), score = graded.reduce((a, i) => a + i.score, 0), max = graded.reduce((a, i) => a + i.max, 0);
    const pending = s.items.filter(i => i.pending).length, p = sessionPct(s);
    const byCh = {};
    s.items.filter(i => !i.pending).forEach(i => { const k = i.sid + ':' + i.ch; (byCh[k] ||= { s: 0, m: 0, sid: i.sid, ch: i.ch }); byCh[k].s += i.score; byCh[k].m += i.max; });
    const qs = s.qids.filter(qid => Q[qid] && s.items.some(i => i.qid === qid));
    const dur = Math.round((s.end - s.ts) / 60e3);
    return `<div class="wrap narrow">
      <header class="card stack"><div class="eyebrow">${s.paper ? 'Mock exam' : s.mode === 'exam' ? 'Timed test' : 'Practice'} · ${fmtDate(s.end)} · ${dur} min</div><h1>${esc(s.title)}</h1>
        <div class="row" style="gap:20px">${ring(p ?? 0, 'var(--accent)', 'Score', 104)}<div class="stack" style="gap:2px"><b class="mono" style="font-size:1.4rem">${fmtNum(score)} / ${max} marks</b>
          <span class="muted">${qs.length} questions${pending ? ` · <b>${pending} written answer${pending > 1 ? 's' : ''} waiting for your self-mark</b> (scroll down)` : ''}</span>
          ${s.paper && p != null ? `<span class="small muted">Shown as a percentage of marks attempted in this app. It is not an SPM grade.</span>` : ''}</div></div>
        ${Object.keys(byCh).length ? `<div class="scroll-x"><table class="small"><thead><tr><th>Chapter</th><th>Score</th></tr></thead><tbody>${Object.values(byCh).map(c => `<tr><td><a href="#c/${c.sid}/${c.ch}">${esc(chap(c.sid, c.ch)?.title || c.ch)}</a></td><td class="mono">${fmtNum(c.s)}/${c.m} (${pct(c.s / c.m)})</td></tr>`).join('')}</tbody></table></div>` : ''}
        <div class="row"><a class="btn primary" href="#mistakes">Mistake notebook</a><button class="btn" data-action="redo" data-id="${s.id}">Retry wrong answers</button><a class="btn" href="#home">Dashboard</a></div></header>
      <h2>Review</h2>
      ${qs.map((qid, i) => questionBlock(Q[qid], s.resp[qid], { sess: s.id, reveal: true, locked: true }, i + 1)).join('')}</div>`;
  };

  function notFound(msg) { return `<div class="wrap narrow"><div class="empty stack"><h2>${esc(msg)}</h2><a class="btn" href="#home">Back to dashboard</a></div></div>`; }

  // ---------- session builders ----------
  function smartQuestions(sid, n = 12) {
    const { items, mist, stats } = derived();
    const subs = sid ? [bySid[sid]] : SUBJ, inScope = q => !sid || QSID[q.id] === sid;
    const mistakeQs = mist.open.map(x => Q[x.qid]).filter(q => q && inScope(q)).slice(0, Math.ceil(n / 2));
    const recs = E.recommend(subs, state, stats, Date.now(), 4);
    const chosen = new Set(mistakeQs.map(q => q.id));
    const fromRecs = recs.flatMap(r => bySid[r.sid].questions.filter(q => q.ch === r.ch && !chosen.has(q.id)));
    let rest = E.pick(fromRecs, n - mistakeQs.length, items);
    if (mistakeQs.length + rest.length < n) {
      const used = new Set([...chosen, ...rest.map(q => q.id)]);
      rest = rest.concat(E.pick(subs.flatMap(s => s.questions).filter(q => !used.has(q.id) && bySid[QSID[q.id]].chapters.find(c => c.id === q.ch)?.weight === 'high'), n - mistakeQs.length - rest.length, items));
    }
    return E.shuffle([...mistakeQs, ...rest]);
  }
  function startSmart(sid) {
    startSession({ sid: sid || 'mixed', title: `Smart revision${sid ? ' · ' + LABEL[sid] : ''}`, mode: 'practice', questions: smartQuestions(sid) });
  }
  function startMock(sid, paperId) {
    const s = bySid[sid], p = s.exam.papers.find(x => x.id === paperId), m = p.mock;
    const pool = s.questions.filter(q => m.formats.includes(q.format)), qs = E.pick(pool, m.n, derived().items);
    const minutes = qs.length === m.n ? m.minutes : Math.max(5, Math.round(m.minutes * qs.length / m.n));
    // keep paper order: objective first, then by format order in the spec
    qs.sort((a, b) => m.formats.indexOf(a.format) - m.formats.indexOf(b.format));
    startSession({ sid, title: `${LABEL[sid]} · ${p.name} (mock)`, mode: 'exam', minutes, questions: qs, paper: p.id });
  }

  // ---------- events ----------
  const actions = {
    menu: () => document.getElementById('app').classList.toggle('open'),
    'toggle-read': el => { const k = el.dataset.key; if (state.read[k]) delete state.read[k]; else state.read[k] = Date.now(); changed(); render(); },
    'practise-ch': el => { const s = bySid[el.dataset.sid], c = chap(s.id, el.dataset.ch);
      startSession({ sid: s.id, title: `${LABEL[s.id]} · ${c.title}`, mode: 'practice', questions: E.pick(s.questions.filter(q => q.ch === c.id), 10, derived().items) }); },
    smart: el => startSmart(el.dataset.sid),
    'draft-all': el => { draft.chs = new Set(el.dataset.on === '1' ? bySid[draft.sid].chapters.map(c => c.id) : []); render(); },
    'start-draft': () => { const d = draft, qs = E.pick(draftPool(d), Math.max(1, d.n), derived().items);
      startSession({ sid: d.sid, title: `${LABEL[d.sid]} · ${d.chs.size === 1 ? chap(d.sid, [...d.chs][0]).title : 'Custom practice'}`, mode: d.mode, minutes: d.mode === 'exam' ? d.minutes : 0, questions: qs }); },
    'start-mock': el => startMock(el.dataset.sid, el.dataset.paper),
    'retry-mistakes': el => { const sid = el.dataset.sid; const qs = derived().mist.open.map(x => Q[x.qid]).filter(q => q && (!sid || QSID[q.id] === sid)).slice(0, 30);
      startSession({ sid: sid || 'mixed', title: `Mistake retry${sid ? ' · ' + LABEL[sid] : ''}`, mode: 'practice', questions: E.shuffle(qs) }); },
    redo: el => { const s = sessById(el.dataset.id), qs = s.items.filter(i => !i.pending && i.score < i.max).map(i => Q[i.qid]).filter(Boolean);
      if (!qs.length) return toast('No wrong answers in this session.');
      startSession({ sid: s.sid, title: `Retry · ${s.title}`, mode: 'practice', questions: qs }); },
    goto: el => { const s = activeSession(), i = +el.dataset.i; if (s && i >= 0 && i < s.qids.length) { s.cur = i; saveSoon(); render(); window.scrollTo(0, 0); } },
    flag: () => { const s = activeSession(), id = s.qids[s.cur]; s.flags[id] = !s.flags[id]; saveSoon(); render(); },
    check: () => { const s = activeSession(), id = s.qids[s.cur]; s.checked[id] = true; gradeInto(s, id); changed(); render(); },
    finish: el => {
      const s = activeSession(); if (!s) return;
      if (s.mode === 'exam' && el.dataset.confirm !== '1') {
        const left = s.qids.filter(id => !hasAnswer(s.resp[id])).length;
        el.dataset.confirm = '1'; el.textContent = left ? `${left} unanswered — submit anyway?` : 'Confirm submit'; return;
      }
      finish(s);
    },
    'copy-backup': () => { const t = document.getElementById('backup-out');
      navigator.clipboard?.writeText(t.value).then(() => toast('Backup code copied'), () => { t.select(); toast('Select-all done — press Ctrl/Cmd+C to copy'); }) ?? (t.select(), toast('Press Ctrl/Cmd+C to copy')); },
    import: () => importBackup(document.getElementById('backup-in').value),
    reset: el => { if (el.dataset.confirm !== '1') { el.dataset.confirm = '1'; el.textContent = 'This cannot be undone — click again to reset'; return; }
      state = blank(); changed(); save(); applyTheme(); toast('All progress reset'); go('home'); },
  };
  function importBackup(text) {
    try {
      const s = JSON.parse(text);
      if (!s || s.v !== 1 || !Array.isArray(s.sessions) || typeof s.read !== 'object') throw new Error('shape');
      state = { ...blank(), ...s }; changed(); save(); applyTheme(); toast('Progress restored'); go('home');
    } catch { toast('That backup code is not valid. Paste the whole code exactly as copied.'); }
  }

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-action]');
    if (a && !a.disabled) { e.preventDefault(); actions[a.dataset.action]?.(a, e); return; }
    const app = document.getElementById('app');
    if (app.classList.contains('open') && (!e.target.closest('#rail') || e.target.closest('a[href]'))) app.classList.remove('open');
  });

  function setResp(el, value) {
    const s = sessById(el.dataset.sess); if (!s) return;
    const qid = el.dataset.q, p = el.dataset.p, kind = el.dataset.kind, i = +el.dataset.i;
    const q = Q[qid], part = p === '' ? q : q.parts[+p];
    const upd = cur => {
      switch (kind) {
        case 'mcq': return +value;
        case 'numeric': return value;
        case 'fill': case 'match': { const a = Array.isArray(cur) ? cur.slice() : []; a[i] = value; return a; }
        case 'open': return { ...(cur || {}), text: value };
        case 'tick': { const t = new Set(cur?.ticks || []); value ? t.add(i) : t.delete(i);
          const self = Math.min(part.marks, [...t].reduce((a, k) => a + part.rubric[k].m, 0));
          return { ...(cur || {}), ticks: [...t], self }; }
        case 'self': return { ...(cur || {}), self: value === '' ? null : Math.min(part.marks, Math.max(0, +value)) };
      }
    };
    if (p === '') s.resp[qid] = upd(s.resp[qid]);
    else { const arr = Array.isArray(s.resp[qid]) ? s.resp[qid].slice() : []; arr[+p] = upd(arr[+p]); s.resp[qid] = arr; }
    if (kind === 'tick' || kind === 'self') { if (s.items.some(x => x.qid === qid)) gradeInto(s, qid); changed(); render(); }
    else saveSoon();
  }
  document.addEventListener('input', e => {
    const el = e.target;
    if (el.dataset.kind && ['open', 'numeric', 'fill'].includes(el.dataset.kind)) {
      setResp(el, el.value);
      if (el.dataset.kind === 'open') { const w = el.value.trim() ? el.value.trim().split(/\s+/).length : 0; const wc = el.parentElement.querySelector('.wc'); if (wc) wc.textContent = w + ' words'; }
    }
    if (el.dataset.setting === 'name') { state.name = el.value.slice(0, 40); saveSoon(); }
  });
  document.addEventListener('change', e => {
    const el = e.target;
    if (el.dataset.kind && ['mcq', 'match', 'tick', 'self'].includes(el.dataset.kind)) {
      setResp(el, el.dataset.kind === 'tick' ? el.checked : el.value);
      if (el.dataset.kind !== 'tick' && el.dataset.kind !== 'self') render();
      return;
    }
    if (el.dataset.draft) {
      const k = el.dataset.draft;
      if (k === 'sid') draft = newDraft(el.value);
      else if (k === 'mode') draft.mode = el.value;
      else if (k === 'n') draft.n = Math.max(1, Math.min(60, +el.value || 10));
      else if (k === 'minutes') draft.minutes = Math.max(1, Math.min(240, +el.value || 20));
      else if (k === 'kbat') draft.kbat = el.checked;
      else { const v = k === 'diffs' ? +el.value : el.value; el.checked ? draft[k].add(v) : draft[k].delete(v); }
      render(); return;
    }
    if (el.dataset.setting) { state[el.dataset.setting] = el.value; save(); if (el.dataset.setting === 'theme') applyTheme(); toast('Saved'); return; }
    if (el.id === 'backup-file' && el.files[0]) { const fr = new FileReader(); fr.onload = () => importBackup(fr.result); fr.readAsText(el.files[0]); }
  });

  // ---------- routing ----------
  function applyTheme() { if (state.theme === 'system') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = state.theme; }
  function render() {
    const route = decodeURIComponent(location.hash.slice(1)) || 'home';
    const [name, ...args] = route.split('/');
    if (name === 'smart') { history.replaceState(null, '', '#run'); return startSmart(args[0]); }
    const view = V[name] || V.home;
    let html;
    try { html = view(args); }
    catch (err) { console.error(err); html = notFound('Something went wrong showing this page. Your progress is safe.'); }
    rail(name === 's' || name === 'c' ? 's/' + args[0] : name === 'result' ? 'history' : route);
    const main = document.getElementById('main'), y = window.scrollY, same = main.dataset.route === route;
    main.innerHTML = html; main.dataset.route = route;
    window.scrollTo(0, same ? y : 0);
    document.title = 'SPM Mastery';
  }
  // timer: keep the clock fresh and auto-submit when time runs out, on any page
  setInterval(() => {
    const s = activeSession(), rem = s && remaining(s);
    if (rem == null) return;
    if (rem <= 0) { toast('Time is up — paper submitted'); finish(s); return; }
    const t = document.getElementById('timer');
    if (t) { t.textContent = clock(rem); t.classList.toggle('low', rem < 5 * 60e3); }
  }, 1000);
  window.addEventListener('hashchange', render);
  window.addEventListener('pagehide', save);
  applyTheme();
  render();
})();
