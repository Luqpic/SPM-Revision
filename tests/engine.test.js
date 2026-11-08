// node tests/engine.test.js — smallest check that scoring/mastery logic holds.
const assert = require('assert');
const E = require('../engine.js');

assert.strictEqual(E.parseNum('RM 1,250.50'), 1250.5);
assert.strictEqual(E.parseNum('3/4'), 0.75);
assert.strictEqual(E.parseNum('−2'), -2);
assert.strictEqual(E.parseNum('12 cm'), 12);
assert.strictEqual(E.parseNum('abc'), null);
assert.strictEqual(E.parseNum(''), null);

const mcq = { type: 'mcq', marks: 1, options: ['a', 'b', 'c', 'd'], answer: 2 };
assert.deepStrictEqual(E.grade(mcq, 2), { score: 1, max: 1 });
assert.deepStrictEqual(E.grade(mcq, undefined), { score: 0, max: 1 });

const fill = { type: 'fill', marks: 2, q: '___ dan ___', blanks: [['Tunku Abdul Rahman', 'Tunku'], ['1957']] };
assert.strictEqual(E.grade(fill, ['  tunku abdul rahman. ', '1957']).score, 2);
assert.strictEqual(E.grade(fill, ['Tunku', '1963']).score, 1);

const match = { type: 'match', marks: 3, pairs: [['a', '1'], ['b', '2'], ['c', '3']] };
assert.strictEqual(E.grade(match, ['1', '3', '3']).score, 2);

const num = { type: 'numeric', marks: 2, answer: 12.5, tol: 0.05 };
assert.strictEqual(E.grade(num, '12.54').score, 2);
assert.strictEqual(E.grade(num, '12.6').score, 0);

const open = { type: 'open', marks: 4 };
assert.ok(E.grade(open, { text: 'x' }).pending);
assert.deepStrictEqual(E.grade(open, { text: '  ' }), { score: 0, max: 4 });
assert.strictEqual(E.grade(open, { text: 'x', self: 9 }).score, 4);

const struct = { type: 'struct', marks: 5, parts: [mcq, open] };
const g = E.grade(struct, [2, { self: 3 }]);
assert.strictEqual(g.score, 4); assert.ok(!g.pending);
assert.ok(E.grade(struct, [2, { text: 'answer' }]).pending);
assert.ok(!E.grade(struct, [2]).pending);

// mastery + mistakes
const state = { read: {}, sessions: [
  { ts: 1, items: [{ qid: 'q1', sid: 'math', ch: 'c1', score: 0, max: 1, done: true }, { qid: 'q2', sid: 'math', ch: 'c1', score: 1, max: 1, done: true }] },
  { ts: 2, items: [{ qid: 'q1', sid: 'math', ch: 'c1', score: 1, max: 1, done: true }, { qid: 'q3', sid: 'math', ch: 'c1', score: 0, max: 2, done: true }] },
] };
const list = E.items(state);
const st = E.chapterStats(list)['math:c1'];
assert.strictEqual(st.n, 4); assert.strictEqual(st.pct, 2 / 5);
const m = E.mistakes(list);
assert.deepStrictEqual(m.open.map(x => x.qid), ['q3']);
assert.deepStrictEqual(m.resolved.map(x => x.qid), ['q1']);

// pick puts open mistakes first
const picked = E.pick([{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }, { id: 'q4' }], 2, list, () => 0);
assert.deepStrictEqual(picked.map(q => q.id), ['q3', 'q4']);

// recommend flags weak chapter first
const subjects = [{ id: 'math', chapters: [{ id: 'c1', weight: 'high' }, { id: 'c2', weight: 'low' }] }];
const recs = E.recommend(subjects, state, E.chapterStats(list));
assert.strictEqual(recs[0].ch, 'c1'); assert.match(recs[0].reason, /Weak/);

const DAY = 864e5, now = Date.UTC(2026, 10, 8, 12);
assert.strictEqual(E.streak([now, now - DAY, now - 2 * DAY, now - 4 * DAY], now), 3);
assert.strictEqual(E.streak([now - DAY], now), 1);
assert.strictEqual(E.streak([], now), 0);

console.log('engine tests OK');
