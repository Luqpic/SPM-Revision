# SPM Mastery — content schema

Each subject lives in ONE classic-script file `data/<id>.js` (no imports/exports):

```js
SPM.add({ ...subject object... });
```

Use JS object literals. Template literals (backticks) are fine for long markdown strings — but do NOT use `${` inside them.
Validate with: `node tools/validate.js data/<id>.js` (must print OK with zero errors).

## Markdown subset (all `md` fields)
The app renders a small subset only:
- `## Heading`, `### Subheading`
- paragraphs (blank line between)
- `- item` bullet lists, `1. item` numbered lists (one level, no nesting)
- `**bold**`, `*italic*`, `` `code` ``
- tables: `| a | b |` rows, second row `|---|---|`
- `> text` = highlighted callout box
- raw HTML block: any line starting with `<` is passed through untouched until a blank line (use for inline `<svg>` diagrams/graphs, `<sup>`, `<sub>`). SVGs: use `viewBox`, `width="100%"`, `style="max-width:420px"`, stroke/fill `currentColor` so they work in dark mode.
- Maths: plain Unicode (x², √, ÷, ×, ≤, ≥, π, θ, ½). No LaTeX.

## Subject object
```js
{
  id: 'math',                   // sejarah | bm | bi | sains | math
  name: 'Matematik',            // display name
  code: '1449',                 // SPM subject code
  lang: 'ms',                   // 'ms' or 'en' (language of content)
  formats: { objektif: 'Objektif (Kertas 1)', struktur: 'Struktur', ... },  // every question.format must be a key here
  coverage: `md`,               // HONEST statement: what is covered, what is not, what is thin
  sources: [{ title: '...', url: 'https://...' }],   // sources actually consulted
  exam: {
    verified: `md`,             // what about the format was verified, against which source, what is uncertain
    overview: `md`,             // exam technique / general answering strategy for the subject
    papers: [{
      id: 'k1', name: 'Kertas 1', duration: 90 /*minutes*/, marks: 40,
      desc: `md`,
      sections: [{ name: 'Bahagian A', questions: '40 soalan objektif', marks: 40, desc: 'jawab semua' }],
      mock: { formats: ['objektif'], n: 40, minutes: 90 } // how the app builds a mock paper: n questions drawn from these formats; omit mock if not practisable in-app (e.g. speaking/listening)
    }]
  },
  trends: {
    disclaimer: `md`,           // predictions are not guarantees; how trends were derived
    years: [{ year: 2021, confidence: 'verified'|'reported'|'unverified', summary: `md`, sources: [{title,url}] }],
    recurring: [{ topic: '...', ch: '<chapter id>', level: 'high'|'med'|'low', basis: 'why (e.g. appeared 2021, 2022, 2024 per X)' }],
    changes: `md`               // how the paper changed (e.g. KBSM→KSSM in SPM 2021)
  },
  chapters: [ chapter, ... ],
  questions: [ question, ... ]
}
```

## Chapter
```js
{
  id: 'm4c1', form: 4, num: 1,          // id unique within subject; form 4 or 5 (or 0 = applies to both, e.g. BM Rumusan skill)
  title: 'Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah',
  weight: 'high'|'med'|'low',           // exam priority (derived from trends; justify in trends.recurring)
  summary: 'one line',
  notes: `md`,                          // the main revision notes: explanations, definitions, tables, worked examples, diagrams
  keyPoints: ['...'],                   // must-know facts / definitions (short)
  formulas: ['...'],                    // optional; key formulas/techniques
  mistakes: ['...'],                    // common student mistakes
  tips: ['...'],                        // exam tips for this chapter
  modelAnswer: `md`                     // optional: how to build a high-scoring answer, with an annotated example
}
```

## Question (common fields)
```js
{
  id: 'math-001',        // unique, prefix with subject id
  ch: 'm4c1',            // chapter id
  type: 'mcq'|'fill'|'match'|'numeric'|'open'|'struct',
  format: 'objektif',    // key of subject.formats
  diff: 1|2|3,           // 1 easy (TP1-2), 2 medium (TP3-4), 3 hard (TP5-6)
  kbat: true,            // optional, Higher Order Thinking
  marks: 1,              // total marks (struct: sum of parts)
  stimulus: `md`,        // optional: passage/source/table/diagram shown above the question
  q: `md`,               // the question
  explain: `md`,         // explanation / step-by-step working (required except 'open' and 'struct')
  source: 'SPM-style (original)'  // default; never claim a question is from an actual SPM paper
}
```
Type-specific:
- `mcq`: `options: ['...','...','...','...']` (4 options; SPM uses A–D), `answer: 0..3`
- `fill`: q contains `___` once per blank; `blanks: [['accepted', 'alt spelling'], ['second blank']]` (case/space-insensitive match)
- `match`: `pairs: [['left','right'], ...]` (3–6 pairs; right side is shuffled in-app)
- `numeric`: `answer: 12.5`, `tol: 0.01` (absolute, optional), `unit: 'cm'` (optional). explain = full step-by-step solution
- `open` (structured written answer, essay, karangan, rumusan, writing): `model: md` (model answer), plus EITHER
  `rubric: [{ p: 'marking point', m: 1 }, ...]` (checklist; sum ≥ marks allowed) OR `bands: [{ band: 'Cemerlang', range: '25–30', desc: '...' }]` for holistic marking. May have both.
- `struct`: shared `stimulus` + `parts: [{ label: '(a)', type: mcq|fill|match|numeric|open, marks, q, ...type fields, explain }]`; top-level `marks` = sum of part marks.
