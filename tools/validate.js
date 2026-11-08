// Validates data/<subject>.js files against SCHEMA.md. Usage: node tools/validate.js data/*.js
const fs = require('fs'), vm = require('vm');
const TYPES = ['mcq', 'fill', 'match', 'numeric', 'open', 'struct'];
let failed = false;

for (const file of process.argv.slice(2)) {
  const errs = [], warn = [];
  const ctx = { SPM: { subjects: [], add(s) { this.subjects.push(s); } } };
  try { vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }
  catch (e) { console.log(`${file}: PARSE ERROR ${e.message}`); failed = true; continue; }
  const s = ctx.SPM.subjects[0];
  if (!s) { console.log(`${file}: no SPM.add() call`); failed = true; continue; }
  const E = m => errs.push(m);
  for (const k of ['id', 'name', 'code', 'lang', 'formats', 'coverage', 'exam', 'trends', 'chapters', 'questions'])
    if (s[k] == null) E(`subject.${k} missing`);
  (s.exam?.papers || []).forEach(p => {
    if (!p.id || !p.name || !p.duration || !p.marks) E(`paper ${p.id || '?'} needs id,name,duration,marks`);
    if (p.mock) p.mock.formats.forEach(f => { if (!s.formats[f]) E(`paper ${p.id} mock format "${f}" not in formats`); });
  });
  const chIds = new Set();
  (s.chapters || []).forEach(c => {
    if (chIds.has(c.id)) E(`duplicate chapter ${c.id}`); chIds.add(c.id);
    for (const k of ['id', 'title', 'notes', 'summary']) if (!c[k]) E(`chapter ${c.id}: ${k} missing`);
    if (![0, 4, 5].includes(c.form)) E(`chapter ${c.id}: form must be 0/4/5`);
    if (!['high', 'med', 'low'].includes(c.weight)) E(`chapter ${c.id}: weight`);
    if ((c.notes || '').length < 600) warn.push(`chapter ${c.id}: notes short (${(c.notes || '').length} chars)`);
  });
  (s.trends?.recurring || []).forEach(r => { if (r.ch && !chIds.has(r.ch)) E(`trends.recurring "${r.topic}" bad ch ${r.ch}`); });

  const qIds = new Set(), perCh = {};
  const checkPart = (q, where) => {
    if (!TYPES.includes(q.type) || (q.type === 'struct' && where.includes('.'))) return E(`${where}: bad type ${q.type}`);
    if (!q.q) E(`${where}: q missing`);
    if (!(q.marks > 0)) E(`${where}: marks must be > 0`);
    const needExplain = !['open', 'struct'].includes(q.type);
    if (needExplain && !q.explain) E(`${where}: explain missing`);
    switch (q.type) {
      case 'mcq':
        if (!Array.isArray(q.options) || q.options.length < 2) E(`${where}: options`);
        if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < (q.options || []).length)) E(`${where}: answer index`);
        if (new Set(q.options).size !== (q.options || []).length) E(`${where}: duplicate options`);
        break;
      case 'fill': {
        const n = (q.q.match(/___/g) || []).length;
        if (!Array.isArray(q.blanks) || q.blanks.length !== n || n === 0) E(`${where}: blanks (${q.blanks?.length}) must match ___ count (${n})`);
        else q.blanks.forEach((b, i) => { if (!Array.isArray(b) || !b.length || b.some(x => typeof x !== 'string' || !x.trim())) E(`${where}: blank ${i} must be non-empty string array`); });
        break;
      }
      case 'match':
        if (!Array.isArray(q.pairs) || q.pairs.length < 3) E(`${where}: pairs >= 3`);
        else if (new Set(q.pairs.map(p => p[1])).size !== q.pairs.length) E(`${where}: duplicate right-hand values`);
        break;
      case 'numeric':
        if (typeof q.answer !== 'number' || !isFinite(q.answer)) E(`${where}: numeric answer`);
        break;
      case 'open':
        if (!q.model) E(`${where}: model answer missing`);
        if (!q.rubric && !q.bands) E(`${where}: rubric or bands required`);
        if (q.rubric && q.rubric.some(r => !r.p || !(r.m > 0))) E(`${where}: rubric items need p and m>0`);
        break;
      case 'struct':
        if (!Array.isArray(q.parts) || !q.parts.length) { E(`${where}: parts`); break; }
        q.parts.forEach((p, i) => checkPart(p, `${where}.${p.label || i}`));
        { const sum = q.parts.reduce((a, p) => a + (p.marks || 0), 0); if (sum !== q.marks) E(`${where}: marks ${q.marks} != parts sum ${sum}`); }
        break;
    }
  };
  (s.questions || []).forEach((q, i) => {
    const where = `question ${q.id || '#' + i}`;
    if (!q.id || qIds.has(q.id)) E(`${where}: missing/duplicate id`); qIds.add(q.id);
    if (!chIds.has(q.ch)) E(`${where}: unknown chapter ${q.ch}`);
    if (!s.formats?.[q.format]) E(`${where}: format "${q.format}" not in formats`);
    if (![1, 2, 3].includes(q.diff)) E(`${where}: diff must be 1/2/3`);
    if (/\bSPM\s*20\d\d\b/.test(q.source || '') && !/style|gaya|based|berdasarkan/i.test(q.source)) warn.push(`${where}: source claims an actual SPM paper — make sure this is verified`);
    perCh[q.ch] = (perCh[q.ch] || 0) + 1;
    checkPart(q, where);
  });
  chIds.forEach(id => { if (!perCh[id]) warn.push(`chapter ${id}: no questions`); });

  const types = {}; (s.questions || []).forEach(q => types[q.type] = (types[q.type] || 0) + 1);
  console.log(`${file}: ${s.chapters?.length} chapters, ${s.questions?.length} questions ${JSON.stringify(types)}`);
  warn.forEach(w => console.log('  warn: ' + w));
  errs.forEach(e => console.log('  ERROR: ' + e));
  console.log(errs.length ? `  FAIL (${errs.length} errors)` : '  OK');
  if (errs.length) failed = true;
}
process.exit(failed ? 1 : 0);
