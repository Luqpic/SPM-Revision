// SPM Mastery — English 1119 (CEFR-aligned format, SPM 2021 onwards)
// All passages and questions are original (SPM-style). No past-year question is reproduced.
(function () {
// Writing bands: four criteria (Content, Communicative Achievement, Organisation, Language), each 0-5 = 20 marks.
// Descriptors paraphrase the SPM writing assessment scales; mark ranges are approximate totals for self-checking.
const BANDS_P1 = [
  { band: 'Score 5 on most criteria', range: '18–20', desc: 'Every point answered; reader fully informed. Email conventions (greeting, friendly tone, closing) used well. Well linked with a variety of cohesive devices. Everyday vocabulary and simple plus some complex grammar with good control.' },
  { band: 'Score 4 on most criteria', range: '14–17', desc: 'Features of 3 and 5: all points covered but one is thin, or a few noticeable errors.' },
  { band: 'Score 3 on most criteria', range: '10–13', desc: 'Minor omission or irrelevance; reader on the whole informed. Conventions used reasonably. Simple connectors (and, because, so). Basic vocabulary; errors noticeable but meaning clear.' },
  { band: 'Score 2 on most criteria', range: '6–9', desc: 'Features of 1 and 3: a point missing and frequent errors.' },
  { band: 'Score 1 on most criteria', range: '2–5', desc: 'Irrelevance or misinterpretation; reader minimally informed. Simple ideas in simple ways; basic connectors; errors may impede meaning.' },
  { band: 'Score 0', range: '0–1', desc: 'Content totally irrelevant or too little to assess.' }
];
const BANDS_P2 = [
  { band: 'Score 5 on most criteria', range: '18–20', desc: 'All notes covered and developed; reader fully informed. Essay conventions (intro, paragraphs, conclusion) hold the reader\'s attention. Generally well organised with a variety of cohesive devices. Everyday vocabulary with some less common lexis; simple and some complex forms with good control.' },
  { band: 'Score 4 on most criteria', range: '14–17', desc: 'Features of 3 and 5: all notes present but one only briefly explained.' },
  { band: 'Score 3 on most criteria', range: '10–13', desc: 'Minor omissions (e.g. third note weak); conventions reasonably appropriate; simple connectors and limited cohesive devices; basic vocabulary, errors noticeable but meaning clear.' },
  { band: 'Score 2 on most criteria', range: '6–9', desc: 'Features of 1 and 3: a note missing, one-paragraph answer, frequent errors.' },
  { band: 'Score 1 on most criteria', range: '2–5', desc: 'Irrelevance or misreading of the notes; reader minimally informed; very basic linking; errors impede meaning at times.' },
  { band: 'Score 0', range: '0–1', desc: 'Totally irrelevant or too little to assess.' }
];
const BANDS_P3 = [
  { band: 'Score 5 on most criteria', range: '18–20', desc: 'All prompts covered and well developed. Genre conventions (story / article / report / review) used effectively to hold the reader\'s attention. Well organised and coherent, varied cohesive devices with good effect. Range of vocabulary incl. less common lexis used appropriately; simple and complex forms with control and flexibility; only occasional slips.' },
  { band: 'Score 4 on most criteria', range: '14–17', desc: 'Features of 3 and 5: genre clear, minor lapses in tone or development.' },
  { band: 'Score 3 on most criteria', range: '10–13', desc: 'Minor irrelevances/omissions; conventions used to communicate straightforward ideas; generally organised; everyday vocabulary with occasional misuse of less common words; errors do not impede.' },
  { band: 'Score 2 on most criteria', range: '6–9', desc: 'Features of 1 and 3: e.g. a report that reads like a story, or a missing prompt.' },
  { band: 'Score 1 on most criteria', range: '2–5', desc: 'Irrelevance or misinterpretation; reader minimally informed; simple connectors only; noticeable errors.' },
  { band: 'Score 0', range: '0–1', desc: 'Totally irrelevant or too little to assess.' }
];

SPM.add({
  id: 'bi',
  name: 'English (Bahasa Inggeris)',
  code: '1119',
  lang: 'en',
  formats: {
    p1: 'Paper 1 Reading (objective)',
    p1s: 'Paper 1 Reading (short answer)',
    gram: 'Grammar & vocabulary drill',
    p2s: 'Paper 2 Part 1 – Short communicative message',
    p2g: 'Paper 2 Part 2 – Guided writing',
    p2e: 'Paper 2 Part 3 – Extended writing',
    p4: 'Paper 4 Listening (transcript practice)',
    p3: 'Paper 3 Speaking (preparation)'
  },

  coverage: `## What this pack covers

- **Paper 1 Reading and Use of English** — one chapter per part (Parts 1–5), each with strategy notes and original SPM-style passages, notices, cloze texts, gapped texts and matching texts.
- **Grammar** (3 chapters) and **vocabulary / word formation** (1 chapter) — the language behind Paper 1 Part 2 and the *Language* criterion in Paper 2.
- **Paper 2 Writing** — Part 1 short communicative message (email), Part 2 guided writing (essay from notes), Part 3 extended writing split into *story* and *article / report / review*. Each has annotated model answers at the expected word count and band descriptors based on the four SPM writing criteria.
- **Paper 4 Listening** — strategy notes plus practice using **written transcripts only** (no audio in this app).
- **Paper 3 Speaking** — strategy notes and written preparation tasks only. **Speaking cannot be practised or marked in-app**; practise aloud with a partner or teacher.

## What is not covered / thin

- **No audio**: listening practice is reading a transcript, which is easier than the real test (each recording is heard twice in the exam, at natural speed).
- **Literature**: under KSSM, literature is taught through *Literature in Action* lessons in class. The official 2021–2024 examiners' reports for Paper 2 show no literature-based question in Part 3 (choices were story / article / report / review), so no set-text notes are included. Prescribed Form 4–5 literary texts were **not verified** and are not summarised here.
- **Paper 1 trends**: no official examiners' report for Paper 1 was found, so text genres per year are unverified; structure is taken from trial papers built on the official format.
- **Word counts for Part 2** (125–150 words) are widely reported by teachers and trial papers but were not seen in an official LP document; Part 1 (about 80 words) and Part 3 (about 200–250 words) were confirmed in LP examiners' reports.
- Marks bands (e.g. 17–20) shown on writing questions are *approximate* conversions of the four 0–5 criteria, for self-checking only.`,

  sources: [
    { title: 'Lembaga Peperiksaan — Kupasan Mutu Jawapan SPM 2024, Bahasa Inggeris 1119/2 (mirror)', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2024%20SPM%20English%20K2%20KMJ.pdf' },
    { title: 'Lembaga Peperiksaan — Kupasan Mutu Jawapan SPM 2023, 1119/2 (mirror)', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2023%20SPM%20English%20K2%20KMJ.pdf' },
    { title: 'Lembaga Peperiksaan — Kupasan Mutu Jawapan SPM 2022, 1119/2 (mirror)', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2022%20SPM%20English%20K2%20KMJ.pdf' },
    { title: 'Lembaga Peperiksaan — Kupasan Mutu Jawapan SPM 2021, 1119/2 (mirror)', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2021%20SPM%20English%20K2%20KMJ.pdf' },
    { title: 'StudyMalaysia — SPM English 1119 paper tips (format table, weighting)', url: 'https://studymalaysia.com/education/top-stories/spm-english-1119-paper-tips-on-how-to-get-a-good-grade' },
    { title: 'JPN Terengganu — MPP3 SPM 2021 trial, 1119/1 Reading (structure of Parts 1–5)', url: 'https://trial.spmpaper.me/2021/Bahasa%20Inggeris%20(English)/Terengganu%20MPP3/2021%20Terengganu_MPP3%20Bahasa_Inggeris%20K1.pdf' },
    { title: 'Penang SPU Trial 2025 — Paper 1 & 2 answer scheme (SPM writing assessment scales, Part 5 answer types)', url: 'https://gurubesar.my/wp-content/uploads/2025/09/Penang-SPU-Trial-2025-P1-Reading-Answer-Scheme.pdf' },
    { title: 'Form 4 English Scheme of Work (KSSM) — Full Blast Plus 4, Literature in Action lessons', url: 'https://www.scribd.com/document/441936153/SOW-FORM-4' },
    { title: 'Form 5 English Scheme of Work (2020 version) — textbook named', url: 'https://www.scribd.com/document/492763750/Form-5-Scheme-of-Work' }
  ],

  exam: {
    verified: `## What was verified, and how

| Item | Status | Basis |
|---|---|---|
| Four papers: 1119/1 Reading & Use of English, 1119/2 Writing, 1119/3 Speaking, 1119/4 Listening, CEFR-aligned, from SPM 2021 | **Verified** | LP format table (secondary copies), LP examiners' reports |
| Paper 2: 60 marks, 1 h 30 min, Part 1 Short Communicative Message (20), Part 2 Guided Writing (20), Part 3 Extended Writing, 3 questions choose 1 (20) | **Verified** | LP *Kupasan Mutu Jawapan* (KMJ) 2021–2024, section 1.0 |
| Part 1 targets A2, Part 2 targets B1, Part 3 targets B2 | **Verified** | KMJ 2021–2024 |
| Part 1 about 80 words; Part 3 about 200–250 words | **Verified** | KMJ 2024 (Part 1), KMJ 2021 & 2023 (Part 3) |
| Part 2 about 125–150 words | Reported | Teacher guides, trial papers |
| Writing marked on Content, Communicative Achievement, Organisation, Language, each 0–5 (total 20 per part) | **Verified** (criteria) / reported (0–5 scale) | KMJ 2021–2024 use the four criteria; 0–5 scale from state trial answer schemes |
| Paper 1: 40 items, 40 marks, 1 h 30 min, five parts (8 / 10 / 8 / 6 / 8 items) | Reported | Trial papers 2021 & 2025 built on the official format; StudyMalaysia |
| Paper 3 Speaking: paired, 3 parts, about 11–13 min, 24 marks | Reported | StudyMalaysia; trial speaking packs |
| Paper 4 Listening: 4 parts (7 / 8 / 5 / 10 items), 30 marks, about 40 min, each recording heard twice | Reported | StudyMalaysia; teacher sites |
| Each paper weighted 25% | Reported | StudyMalaysia |

**Uncertain:** exact Paper 3 and Paper 4 timings, and whether any minor change was made for SPM 2025 (no official 2025 report found). Always check your school's latest LP circular.`,

    overview: `## How to approach SPM English 1119

The paper is **skill-based**, not chapter-based. You cannot "spot topics" — you train skills: reading for gist and detail, using grammar accurately, and writing in the right *genre* for the right *reader*.

### Time plan (Paper 1, 90 minutes, 40 marks)

| Part | Items | Suggested time |
|---|---|---|
| 1 Short texts (A/B/C) | 8 | 12 min |
| 2 Cloze (A–D) | 10 | 12 min |
| 3 Long text (A–D) | 8 | 22 min |
| 4 Gapped text (A–H) | 6 | 18 min |
| 5 Matching + notes | 8 | 20 min |
| Check answer sheet | – | 6 min |

### Time plan (Paper 2, 90 minutes, 60 marks)

| Part | Words | Suggested time |
|---|---|---|
| 1 Email / message | about 80 | 15–20 min |
| 2 Guided essay from notes | about 125–150 | 25–30 min |
| 3 Story / article / report / review | about 200–250 | 40–45 min |

### Golden rules

1. **Every part is worth the same in Paper 2 (20 marks)** — never leave Part 1 short or Part 3 unfinished.
2. **Cover every content point.** Examiners' reports every year (2021–2024) note marks lost for a missing note or an ignored opening sentence.
3. **Genre and tone = Communicative Achievement.** A report written like a story loses marks even with perfect grammar (KMJ 2023, 2024).
4. **Avoid contractions** in Parts 2 and 3 (KMJ 2024 advice). Informal emails in Part 1 may use them.
5. In Paper 1, **answer every item** — there is no penalty for a wrong answer.
6. For short-answer items in Paper 1 Part 5, **copy the word exactly from the text** and spell it correctly.`,

    papers: [
      {
        id: 'k1', name: 'Paper 1 – Reading and Use of English (1119/1)', duration: 90, marks: 40,
        desc: `Five parts, 40 items, 1 mark each. Objective items (A–C, A–D, A–H) plus a few one-word answers in Part 5. Reported CEFR target: B1–B2. Structure below is from trial papers that follow the official format — **reported**, not seen in an LP specimen.`,
        sections: [
          { name: 'Part 1 (Q1–8)', questions: '8 short texts (notices, messages, adverts), one 3-option question each', marks: 8, desc: 'Gist / main message' },
          { name: 'Part 2 (Q9–18)', questions: '1 text with 10 gaps, 4-option multiple-choice cloze', marks: 10, desc: 'Grammar and vocabulary in context' },
          { name: 'Part 3 (Q19–26)', questions: '1 longer text (article or narrative extract), 8 four-option questions', marks: 8, desc: 'Detail, inference, attitude, vocabulary, reference' },
          { name: 'Part 4 (Q27–32)', questions: '1 text with 6 sentences removed; choose from A–H (2 extra)', marks: 6, desc: 'Text structure and cohesion' },
          { name: 'Part 5 (Q33–40)', questions: '4 matching items (which text/person) + 4 note-completion items (one word from the text)', marks: 8, desc: 'Scanning several short texts; information transfer' }
        ],
        mock: { formats: ['p1', 'p1s', 'gram'], n: 20, minutes: 60 }
      },
      {
        id: 'k2', name: 'Paper 2 – Writing (1119/2)', duration: 90, marks: 60,
        desc: `Three parts, 20 marks each, marked on Content, Communicative Achievement, Organisation and Language (0–5 each). **Verified** from LP examiners' reports 2021–2024.`,
        sections: [
          { name: 'Part 1', questions: 'Short communicative message — so far always an email (about 80 words), responding to 3–4 points', marks: 20, desc: 'Target A2' },
          { name: 'Part 2', questions: 'Guided writing — an essay using all the notes given (about 125–150 words, reported)', marks: 20, desc: 'Target B1' },
          { name: 'Part 3', questions: 'Extended writing — choose 1 of 3 (story / article / report / review), about 200–250 words', marks: 20, desc: 'Target B2' }
        ],
        mock: { formats: ['p2s', 'p2g', 'p2e'], n: 3, minutes: 90 }
      },
      {
        id: 'k3', name: 'Paper 3 – Speaking (1119/3)', duration: 13, marks: 24,
        desc: `Paired test with an interlocutor and an assessor (reported). Part 1 short personal questions; Part 2 individual long turn (short preparation, about 1 minute talk) with a follow-up question to the partner; Part 3 paired discussion of a mind map leading to a decision. **Not practisable in this app** — see the Speaking chapter for preparation only.`,
        sections: [
          { name: 'Part 1', questions: 'Interview: personal questions', desc: 'Reported' },
          { name: 'Part 2', questions: 'Individual long turn', desc: 'Reported' },
          { name: 'Part 3', questions: 'Collaborative task (discuss, then decide)', desc: 'Reported; 24 marks in total for the paper' }
        ]
      },
      {
        id: 'k4', name: 'Paper 4 – Listening (1119/4)', duration: 40, marks: 30,
        desc: `Four parts, 30 items, each recording heard twice (reported). This app has **no audio**; practise with the transcript questions in the Listening chapter and with real audio from your teacher.`,
        sections: [
          { name: 'Part 1', questions: '7 short recordings in different situations, multiple choice', marks: 7, desc: 'Reported' },
          { name: 'Part 2', questions: '8 items on one longer conversation / talk', marks: 8, desc: 'Reported' },
          { name: 'Part 3', questions: '5 short extracts from different speakers (matching)', marks: 5, desc: 'Reported' },
          { name: 'Part 4', questions: '10 gaps to complete with words heard', marks: 10, desc: 'Reported' }
        ]
      }
    ]
  },

  trends: {
    disclaimer: `**Read this first.** Trends describe what has been set before; they are **not predictions of what will be set**. Writing topics change every year and are never repeated in a predictable way. Use trends to decide which *genres* to practise most, not to memorise essays.

Years marked **verified** were checked against the official LP *Kupasan Mutu Jawapan* (examiners' report) for Paper 2. Topics are summarised in our own words. No Paper 1 examiners' report was found, so Paper 1 text types per year are not claimed.`,
    years: [
      { year: 2021, confidence: 'verified', summary: `First CEFR-aligned KSSM paper. **Part 1:** email reply to a cousin recommending a sports club (which club, why suitable, what she can learn). **Part 2:** essay on kindness (an act of kindness experienced, why be kind, how to encourage others). **Part 3:** one of the three options was a story beginning with given opening words, about three wishes and their impact — the report calls it the hardest option. The other two Part 3 options are not described in the report (unverified).`, sources: [{ title: 'KMJ SPM 2021 1119/2', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2021%20SPM%20English%20K2%20KMJ.pdf' }] },
      { year: 2022, confidence: 'verified', summary: `**Part 1:** email planning with a friend how to help another friend (where and when to meet, how to help, what to bring). **Part 2:** essay on cultural traditions (traditions still practised, why appreciate them, how to keep young people interested). **Part 3:** article on online gaming (most popular), story starting with given words about a discovery that changed a character's view of a place, report on a museum visit (least attempted).`, sources: [{ title: 'KMJ SPM 2022 1119/2', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2022%20SPM%20English%20K2%20KMJ.pdf' }] },
      { year: 2023, confidence: 'verified', summary: `**Part 1:** email about choosing between two holiday jobs, giving a reason and holiday plans. **Part 2:** essay on advertisements (an advert you saw, what made it attractive, how adverts influence buying). **Part 3:** story about a character and a mysterious black object; article on a memorable photograph (many wrote it like a story — penalised); report on reducing plastic use in school (many used the wrong tone).`, sources: [{ title: 'KMJ SPM 2023 1119/2', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2023%20SPM%20English%20K2%20KMJ.pdf' }] },
      { year: 2024, confidence: 'verified', summary: `**Part 1:** email to a friend (about 80 words) about buying a watch — why, its price, online or in a shop and why. **Part 2:** essay on music (type you like, why, its importance in your life). **Part 3:** story opening with an announcement to passengers (why the journey was interrupted, how the character still arrived on time); report on a talent show incident run by a language club (what went wrong, lessons, improvements) — most used the wrong tone; review of the official school website (some wrongly reviewed other websites).`, sources: [{ title: 'KMJ SPM 2024 1119/2', url: 'https://trial.spmpaper.me/SPM%20Sebenar%20Jawapan%20Top%20Student/Bahasa%20Inggeris%20(English)/2024%20SPM%20English%20K2%20KMJ.pdf' }] },
      { year: 2025, confidence: 'unverified', summary: `No official examiners' report was found at the time of writing. Teacher and forum sources report the format was unchanged (Paper 2 still 60 marks, 90 minutes). Task topics are **not** recorded here.`, sources: [] }
    ],
    recurring: [
      { topic: 'Part 1 email to a friend/relative answering 3–4 points', ch: 'w1', level: 'high', basis: 'An email in every year 2021, 2022, 2023, 2024 (KMJ)' },
      { topic: 'Part 2 essay built from three notes (experience + opinion + suggestion)', ch: 'w2', level: 'high', basis: 'Same three-note essay pattern 2021–2024 (KMJ): kindness, traditions, advertisements, music' },
      { topic: 'Part 3 story that must start with given words', ch: 'w3', level: 'high', basis: 'A story option in 2021, 2022, 2023, 2024 (KMJ)' },
      { topic: 'Part 3 report', ch: 'w4', level: 'high', basis: 'Report option 2022, 2023, 2024; tone problems noted each time (KMJ)' },
      { topic: 'Part 3 article', ch: 'w4', level: 'med', basis: 'Article option 2022 and 2023 (KMJ)' },
      { topic: 'Part 3 review', ch: 'w4', level: 'med', basis: 'Review option 2024 (KMJ); listed as a possible genre by teacher guides' },
      { topic: 'Paper 1 Part 2 grammar cloze', ch: 'r2', level: 'high', basis: 'Fixed part of the format: 10 marks every paper (trial papers)' },
      { topic: 'Paper 1 Part 5 note completion (one word)', ch: 'r5', level: 'high', basis: 'Fixed part of the format (trial papers 2021, 2025)' },
      { topic: 'Tenses and subject–verb agreement', ch: 'g1', level: 'high', basis: 'Needed for Paper 1 Part 2 and the Language criterion in every writing task' }
    ],
    changes: `## From KBSM (to 2020) to KSSM CEFR-aligned (2021 onwards)

| Before (to SPM 2020) | Now (SPM 2021 onwards) |
|---|---|
| 2 written papers (1119/1 Writing: directed + continuous writing; 1119/2 Reading, summary, literature) | 4 papers: Reading & Use of English, Writing, Speaking, Listening |
| Literature section (poems, short stories, novel) in Paper 2 | No literature section in the exam papers; literature taught via *Literature in Action* lessons |
| Summary writing | Removed |
| Continuous writing 350+ words | Extended writing about 200–250 words, genre-based (story/article/report/review) |
| Speaking assessed in school (ULBS) | Speaking and Listening are SPM papers, each weighted 25% (reported) |
| Holistic band marking of whole essays | Four criteria (Content, Communicative Achievement, Organisation, Language) on a 0–5 scale |

The KSSM English curriculum is aligned to the CEFR. Form 4 uses the imported textbook *Full Blast Plus 4* (per the Form 4 Scheme of Work). The Form 5 textbook could not be confirmed (one 2020 scheme of work names *English Download*); check with your teacher.`
  },

  chapters: [
    {
      id: 'r1', form: 0, num: 1, weight: 'high',
      title: 'Reading Part 1 — Short Texts: Gist, Skimming and Scanning',
      summary: 'Eight short real-world texts (notices, messages, adverts), one 3-option question each.',
      notes: `## What Part 1 tests

Paper 1 Part 1 (Questions 1–8) gives you **eight short texts** — notices, signs, text messages, emails, adverts, labels, social media posts or short news items. Each text has **one question with three options (A, B or C)**. Each correct answer is 1 mark (8 marks in total).

The question usually checks the **main message** or **purpose**: what the writer wants, what is allowed, what will happen, or which statement is true.

> Part 1 is the quickest place to collect marks. Aim for about 1½ minutes per text.

## Skimming vs scanning

| Skill | What you do | When to use it |
|---|---|---|
| **Skimming** | Read quickly for the overall idea: title, first line, last line, bold words | "What is the purpose of…", "What is this notice about?" |
| **Scanning** | Hunt for a specific detail: a date, price, name, condition | "When must…", "Who can…", "How much…" |
| **Careful reading** | Read every word of one or two sentences | Choosing between two close options |

## Common text types and what they want from you

| Text type | Usual purpose | Look for |
|---|---|---|
| Notice / sign | Rule, warning, instruction | *must, do not, only, strictly, from…to…* |
| Text message / note | Request, change of plan, reminder | *Can you…, Don't forget…, instead* |
| Advert | Persuade; give offer details | price, *free, discount, valid until, terms apply* |
| Email | Inform, invite, ask, apologise | the request near the end |
| Label / instructions | How to use safely | *before, after, keep away from* |

## Question stems you will meet

- What is the **purpose** of the message? (inform / remind / invite / complain / warn)
- What does Mei Ling **want** Arif to do?
- Which of the following is **true**?
- Who is this notice **for**?

## Step-by-step method

1. **Read the question first**, then the three options. Underline the key word in each option.
2. **Read the text once quickly** to get its purpose (skim).
3. **Find the exact sentence** that each option refers to (scan).
4. **Eliminate**: an option is wrong if it is (a) the opposite of the text, (b) *partly* true but adds something not stated, or (c) uses a word from the text with a different meaning.
5. Choose the option that **paraphrases** the text — the correct answer rarely copies the text word for word.

## Traps the setters use

- **Word-matching trap**: an option repeats words from the text but changes the meaning. *Text: "The pool will not close early on Friday." Wrong option: "The pool closes early on Friday."*
- **Absolute words**: *all, only, always, never, every* in an option often make it false unless the text says so.
- **Time and condition qualifiers**: "valid **from 3 p.m.**", "only **if** you bring your receipt".
- **True but not stated**: an option may sound sensible in real life but the text does not say it. Answer from the text only.

## Worked example

> **NOTICE — Library Makerspace**
> From Monday, the 3D printer may only be used by students who have completed the 20-minute safety briefing. Briefings are held every Tuesday at 2.30 p.m. Sign up at the counter.

Which is true? A Anyone may use the 3D printer from Monday. B Students must attend a briefing before using the 3D printer. C Briefings are held daily at the counter.

**Answer B.** A ignores "only… who have completed". C changes *every Tuesday* to *daily* and confuses where you sign up with where the briefing happens.`,
      keyPoints: [
        'Part 1 = 8 short texts, one question each, options A–C, 1 mark each',
        'Read the question and options before the text',
        'Correct options paraphrase; wrong options often copy words',
        'Watch absolute words (all, only, never) and time/condition limits',
        'Answer only from what the text says, not general knowledge'
      ],
      mistakes: [
        'Choosing the option that repeats the most words from the text',
        'Ignoring small words like only, not, until, except',
        'Using real-life logic instead of the text',
        'Spending too long on one text and rushing Part 3 later'
      ],
      tips: [
        'Identify the text type first — it tells you the likely purpose',
        'Cross out wrong options on the question paper so you can see what is left',
        'If two options look right, find the exact words that make one of them too strong or too narrow',
        'Transfer answers to the answer sheet carefully (2B pencil, one box per item)'
      ]
    },
    {
      id: 'r2', form: 0, num: 2, weight: 'high',
      title: 'Reading Part 2 — Multiple-Choice Cloze',
      summary: 'One text with 10 gaps; choose the best word (A–D) — grammar and vocabulary in context.',
      notes: `## What Part 2 tests

Part 2 (Questions 9–18) is **one text with ten gaps**. For each gap you choose the best word or phrase from **four options (A–D)**. It tests **grammar and vocabulary in context** — the same knowledge you need for the Language criterion in Paper 2.

## What usually fills the gaps

| Gap type | Example options | What decides it |
|---|---|---|
| **Connector** | although / because / however / unless | Logic between the two ideas (contrast, reason, condition) |
| **Preposition** | in / on / at / for | Fixed phrase or time/place rule (*interested in, at night, on Monday*) |
| **Tense / verb form** | has grown / grew / grows / growing | Time words (*since, ago, by next year*) and sentence structure |
| **Collocation** | make / do / take / have (*a decision*) | Words that naturally go together |
| **Word meaning** | affect / effect / infect / reflect | Meaning in the sentence |
| **Pronoun / determiner** | their / its / whose / which | What the word refers back to |
| **Quantifier** | few / a few / little / much | Countable vs uncountable; positive vs negative meaning |

## Method

1. **Read the whole text first** (about 1 minute) — the topic helps you choose meaning words.
2. For each gap, read the **whole sentence**, plus the sentence before and after.
3. Ask: *What part of speech is missing?* (noun, verb, adjective, adverb, preposition, connector)
4. Eliminate options that are the **wrong part of speech** or **wrong form**.
5. Among the rest, choose by **meaning** and **collocation**.
6. **Re-read the sentence with your answer** — it must sound complete and natural.

## Connector logic (very common)

| Relationship | Connectors |
|---|---|
| Contrast | although, though, even though, however, despite, in spite of, whereas, while |
| Reason | because, since, as, due to, because of |
| Result | so, therefore, as a result, consequently |
| Addition | moreover, furthermore, in addition, besides, also |
| Condition | if, unless, provided that, as long as |
| Purpose | to, in order to, so that |

> Grammar point: **despite / in spite of / due to / because of** are followed by a **noun or -ing**, not a full clause. *Despite the rain…* ✓ *Despite it was raining…* ✗

## Collocations worth memorising

- **make**: a decision, a mistake, an effort, progress, a difference, money
- **do**: homework, research, your best, damage, a favour
- **take**: part in, place, a photo, care of, action, a break
- **pay**: attention to, a visit, a compliment
- **raise**: awareness, funds, a question; **rise** (no object): prices rise

## Worked example

*Many teenagers spend hours online. ___, few of them know how to protect their personal data.*
A Therefore B However C Because D Moreover

The second sentence **contrasts** with the first (lots of time online, but little knowledge) → **B However**. *Therefore* = result, *Moreover* = addition, *Because* cannot start a sentence followed by a comma and a main clause like this.`,
      keyPoints: [
        'Part 2 = 1 text, 10 gaps, options A–D',
        'Identify the part of speech needed before looking at meaning',
        'Connectors are chosen by logic: contrast, reason, result, addition, condition',
        'despite / due to / because of + noun or -ing',
        'Learn common collocations with make, do, take, pay, raise'
      ],
      mistakes: [
        'Reading only the words around the gap and missing the sentence logic',
        'Confusing however (contrast) with moreover (addition)',
        'Using despite + full clause',
        'Mixing rise (no object) and raise (needs an object)',
        'Choosing a word that "sounds familiar" without checking the form'
      ],
      tips: [
        'Read the whole text before answering any gap',
        'Say the sentence silently with each option — the wrong ones usually sound broken',
        'Look for time markers (since, ago, by, already, yet) to decide tense',
        'If stuck, answer and move on — there is no penalty for a wrong answer'
      ]
    },
    {
      id: 'r3', form: 0, num: 3, weight: 'high',
      title: 'Reading Part 3 — Long Text: Detail, Inference and Vocabulary',
      summary: 'One longer article or narrative extract with eight 4-option questions.',
      notes: `## What Part 3 tests

Part 3 (Questions 19–26) is **one longer text** — trial papers use article extracts and first-person narratives — followed by **eight questions with four options (A–D)**. Questions follow the order of the text and test:

| Question type | Typical stem | Skill |
|---|---|---|
| Detail | "According to paragraph 2, why did…?" | Locate and paraphrase |
| Inference | "What can we infer about the writer's mother?" | Read between the lines |
| Attitude / feeling | "How did the writer feel when…?" | Tone words, actions, reactions |
| Vocabulary in context | "The word *reluctant* in line 14 is closest in meaning to…" | Use surrounding clues |
| Reference | "What does *it* in line 20 refer to?" | Track pronouns back |
| Purpose / main idea | "What is the main purpose of paragraph 4?" | Function of a paragraph |
| Whole text | "Which would be the best title?" | Overall message |

## Method

1. **Skim the whole text first** (2–3 minutes): who, where, what happens, how it ends.
2. Questions are **in text order** — the answer to Q21 will be after the answer to Q20.
3. Read the stem, **find the paragraph/line**, then read **two sentences before and after**.
4. **Predict the answer** in your own words before reading the options.
5. Eliminate options that are: not mentioned, too extreme, about the wrong person, or true in the text but **not answering this question**.

## Inference: what it really means

An inference is something the text **strongly suggests** but does not state. It must be supported by evidence.

*Text: "Farah checked the clock for the fifth time and tapped her foot."* → She was **impatient / anxious**. She was not necessarily "angry" or "late".

> A good inference = **evidence in the text + a small logical step**. A bad inference = a big jump or your own opinion.

## Vocabulary in context

1. Find the word and read the **whole sentence**.
2. Decide if it is **positive or negative**, and what **part of speech** it is.
3. Look for **clues**: synonyms nearby, contrast words (*but, although*), examples.
4. Put each option **into the sentence** — the right one keeps the meaning.

*"Although he was **reluctant** at first, Hakim finally agreed to sing."* — *although… finally agreed* shows contrast → reluctant = **unwilling**.

## Reference questions

Pronouns (*it, they, this, these, such*) usually refer to the **nearest suitable noun before them**. Check by replacing the pronoun with your answer.

## Attitude and tone words

| Positive | Negative | Neutral / mixed |
|---|---|---|
| grateful, relieved, enthusiastic, proud | resentful, anxious, frustrated, sceptical | curious, uncertain, nostalgic, ambivalent |`,
      keyPoints: [
        'Part 3 = 1 long text, 8 questions A–D, in text order',
        'Find the line, read around it, predict, then match',
        'Inference = evidence + small logical step',
        'Vocabulary: test each option in the sentence',
        'Pronoun reference = nearest suitable noun before'
      ],
      mistakes: [
        'Choosing an option that is true in the text but answers a different question',
        'Over-inferring (taking a big jump the text does not support)',
        'Using dictionary meaning instead of the meaning in context',
        'Not reading the sentence after the quoted line, where the clue often is'
      ],
      tips: [
        'Number the paragraphs on the question paper',
        'Underline the evidence for each answer — it stops you from guessing',
        'For "best title" questions, choose the option that covers the whole text, not one paragraph',
        'Spend most of your Paper 1 time here and in Part 4'
      ]
    },
    {
      id: 'r4', form: 0, num: 4, weight: 'high',
      title: 'Reading Part 4 — Gapped Text (Missing Sentences)',
      summary: 'Six sentences removed from a text; choose from A–H (two extra) using cohesion clues.',
      notes: `## What Part 4 tests

Part 4 (Questions 27–32) is a text with **six sentences removed**. You choose the right sentence for each gap from **eight options (A–H)** — **two are extra** and not used. It tests **text organisation and cohesion**: how sentences link to what comes before and after.

## Cohesion clues: your toolkit

| Clue type | Examples | How it helps |
|---|---|---|
| **Pronouns** | it, they, this, these, those, he, she | The sentence must come **after** the noun it refers to |
| **Demonstratives + noun** | *This idea*, *Such problems*, *These students* | Points back to something just mentioned |
| **Connectors** | However, As a result, For example, In addition, Instead | Shows the logic with the **previous** sentence |
| **Time / sequence words** | First, Then, Later, By the end, Two weeks later | Fits the order of events |
| **Repeated or related words** | *volunteers… the helpers*; *drought… the dry spell* | Topic chain |
| **Comparatives** | *even better*, *another*, *also*, *the other* | Needs an earlier item to compare with |

## Method

1. **Read the whole text with gaps** first to understand its structure.
2. **Read all eight sentences** and underline the clue words in each (pronouns, connectors, time words).
3. For each gap, read the sentence **before AND after** the gap.
4. Choose a sentence whose **start** links to the sentence before and whose **content** leads into the sentence after.
5. **Do the easiest gaps first.** Cross out sentences you have used.
6. Re-read the full text at the end — every gap must flow naturally in both directions.

## Why the two extra sentences are wrong

Distractors are usually **on topic** but:
- refer to something not mentioned (*"This second visit…"* when there is no first visit),
- have the wrong connector (*However* where there is no contrast), or
- would fit only in a different position.

## Worked mini-example

*Our class started a herb garden behind the canteen. ___ Within a month, we were harvesting mint and lemongrass for the canteen's drinks.*

A **It was hard work at first, as the soil was full of rubble.**
B However, nobody wanted to join.

**A fits**: *It* refers to starting the garden; "hard work at first" leads into the success "within a month". B contradicts *Our class started*.

> Check BOTH directions: the sentence must link back and lead forward.

## Time management

Part 4 is worth only 6 marks but is often the slowest part. Give it about **18 minutes**. If two gaps remain and you are unsure, place the option that fits best in each and move on to Part 5 — an empty answer cannot score, and there is no penalty for a wrong one.

| Step | Time |
|---|---|
| Read gapped text | 4 min |
| Read and annotate A–H | 4 min |
| Fill gaps (easy first) | 8 min |
| Re-read whole text | 2 min |`,
      keyPoints: [
        'Part 4 = 6 gaps, choose from 8 sentences A–H, 2 extra',
        'Underline pronouns, connectors, time words and repeated nouns',
        'The chosen sentence must link to the sentence before AND after',
        'Do easy gaps first; cross out used sentences',
        'Distractors are on-topic but break the logic'
      ],
      mistakes: [
        'Checking only the sentence before the gap',
        'Ignoring the pronoun at the start of an option',
        'Using the same option twice',
        'Placing a "However…" sentence where there is no contrast'
      ],
      tips: [
        'Circle every pronoun in options A–H and ask "what does it refer to?"',
        'Look at the first word of the sentence AFTER the gap — it often refers back to the missing sentence',
        'Leave the hardest gap for last; by elimination it is often obvious'
      ]
    },
    {
      id: 'r5', form: 0, num: 5, weight: 'high',
      title: 'Reading Part 5 — Multiple Matching and Note Completion (Information Transfer)',
      summary: 'Several short texts by different people: match statements to texts, then complete notes with words from the text.',
      notes: `## What Part 5 tests

Part 5 (Questions 33–40) gives you **several short texts** — for example opinions from different teenagers, short reviews, or profiles labelled A, B, C… Trial papers built on the official format use two tasks:

| Task | Items | What you do |
|---|---|---|
| **Multiple matching** | about 4 | Decide which text (A–F) matches each statement |
| **Note completion / information transfer** | about 4 | Complete notes or a summary with **words taken from the text** (often "no more than one word") |

This is the only part of Paper 1 where you **write** answers, so **spelling counts**.

## Multiple matching: method

1. Read the statements first and underline the **key idea** (not just key words).
2. Read text A and ask: *Which statements does this text match?* Then B, and so on.
3. The text will **paraphrase** the statement. *Statement: "I prefer privacy to popularity."* → *Text: "I'd rather keep my account private than have thousands of followers."*
4. Beware of texts that mention the same **topic** but a different **opinion**.

## Note completion: method

1. Read the notes and decide **what kind of word** fits each gap (noun? verb? adjective? number?).
2. Check the **word limit** — "NO MORE THAN ONE WORD" means exactly one word; hyphenated words count as one.
3. Scan the text for the **paraphrased idea**, then copy the word **exactly** as spelt.
4. Make sure the completed note is **grammatical** (singular/plural, verb form).

> If the notes say "Students should ___ their passwords regularly", the gap needs a **base verb** (change), not *changing* or *changed*.

## Information transfer skills (also useful in Listening Part 4)

| Gap before… | Likely word |
|---|---|
| *a / an / the* ___ | noun (or adjective + noun) |
| *to* ___ | base verb |
| *very / quite* ___ | adjective |
| ___ *per cent*, ___ *minutes* | number |
| *should / must / can* ___ | base verb |

## Common errors

- Writing two words when one is allowed.
- Changing the word's form (text says *protection*, notes need *protect* — only if the text itself contains *protect*).
- Misspelling a word that is printed correctly in the text.
- Answering from general knowledge instead of the text.

## Worked mini-example

> **C — Nurul:** I used to post every day, but now I only share photos with a small group of close friends. I'd rather keep things private than chase likes.

Statement: *"I have become more selective about who sees my posts."* → **matches Nurul** (*used to post every day… now only… close friends*). The statement never uses the words *private* or *likes* — it paraphrases the change.

Note completion: *"Nurul now shares photos only with a small group of close ___."* (ONE word) → **friends** — copied exactly from the text, and plural because of *a small group of*.`,
      keyPoints: [
        'Part 5 = matching (which text?) + note completion (words from text)',
        'Statements paraphrase the texts — match ideas, not words',
        'Obey the word limit exactly',
        'Copy the word from the text with correct spelling',
        'Check the completed note is grammatical'
      ],
      mistakes: [
        'Matching on a repeated word rather than the same meaning',
        'Writing more words than allowed',
        'Spelling errors in copied words',
        'Wrong word form (verb vs noun) for the gap'
      ],
      tips: [
        'Predict the part of speech for each gap before scanning',
        'Underline in the text where each answer came from',
        'One text may match more than one statement, or none — read the instructions'
      ]
    },
    {
      id: 'g1', form: 0, num: 6, weight: 'high',
      title: 'Grammar 1 — Tenses and Subject–Verb Agreement',
      summary: 'Choosing the right tense from time clues, and making verbs agree with their subjects.',
      notes: `## The tenses you must control

| Tense | Form | Use | Time clues |
|---|---|---|---|
| Present simple | *She walks* | Habits, facts, timetables | every day, usually, always |
| Present continuous | *She is walking* | Happening now / temporary | now, at the moment, this week |
| Present perfect | *She has walked* | Past action linked to now; experience; unfinished time | since, for, already, yet, ever, just, so far |
| Present perfect continuous | *She has been walking* | Activity from past until now (duration) | for two hours, since morning |
| Past simple | *She walked* | Finished action at a stated past time | yesterday, ago, last year, in 2019 |
| Past continuous | *She was walking* | Action in progress in the past / interrupted | while, when (+ past simple) |
| Past perfect | *She had walked* | Earlier past (before another past action) | before, after, by the time, already |
| Future | *She will walk / is going to walk* | Predictions, decisions, plans | tomorrow, next week, soon |

## Key contrasts

**Present perfect vs past simple**
- *I **have lost** my keys.* (I still can't find them — linked to now.)
- *I **lost** my keys yesterday.* (Finished time — "yesterday" needs past simple.)
- ✗ *I have lost my keys yesterday.*

**Past continuous + past simple**
- *I **was revising** when the lights **went** out.* (Long action interrupted by a short one.)

**Past perfect**
- *By the time we **arrived**, the bus **had left**.* (Leaving happened first.)

## Tense in time clauses

After *when, after, before, as soon as, until, if* referring to the **future**, use the **present simple**, not *will*:
- *I will call you when I **arrive**.* ✓ — *when I will arrive* ✗

## Subject–verb agreement (SVA)

| Rule | Example |
|---|---|
| Singular subject → singular verb | *The **list** of names **is** on the board.* (subject = list) |
| Two subjects joined by *and* → plural | *Ali and Siti **are** prefects.* |
| *Each, every, either, neither, everyone, nobody* → singular | *Everyone **has** a role.* / *Each of the boys **has** a bag.* |
| *Either… or / neither… nor* → verb agrees with the **nearer** subject | *Neither the teacher nor the students **were** ready.* |
| *One of the + plural noun* → singular verb | *One of my friends **lives** in Ipoh.* |
| *The number of* → singular; *a number of* → plural | *The number of cases **has** fallen.* / *A number of cases **have** been reported.* |
| Uncountable nouns → singular | *The information **is** useful.* / *The furniture **was** new.* |
| *There is / There are* agrees with the noun after it | *There **are** three reasons.* |
| *Along with, as well as, together with* do not change the subject | *The principal, as well as the teachers, **was** present.* |

## Typical Malaysian-learner errors

- Missing **-s** in third person: *He go to school* ✗ → *He goes* ✓
- Using *is* with past meaning: *Yesterday I am sick* ✗ → *I was sick* ✓
- Present perfect with finished time: *I have went there last year* ✗ → *I went there last year* ✓
- Wrong past participle: *I have ate* ✗ → *I have eaten* ✓
- Double past: *I didn't went* ✗ → *I didn't go* ✓ (after *did/didn't* use the base verb)
- Informations / furnitures / equipments ✗ — these are **uncountable**.

> In a story (Paper 2 Part 3), stay in the **past tenses**. Switching to present halfway is one of the most common language errors.`,
      keyPoints: [
        'Finished past time (yesterday, ago, last…) → past simple, never present perfect',
        'since/for/already/yet/ever → usually present perfect',
        'Earlier past → past perfect (had + past participle)',
        'Future time clauses: when/if/after + present simple',
        'Each/every/everyone/one of → singular verb',
        'Neither…nor / either…or → verb agrees with nearer subject'
      ],
      formulas: [
        'Present perfect = has/have + past participle',
        'Past perfect = had + past participle',
        'did / didn\'t / does / doesn\'t + BASE verb',
        'Modal (can, will, should…) + BASE verb'
      ],
      mistakes: [
        'He go / she like (missing third-person -s)',
        'I have seen him yesterday',
        'I didn\'t went / did you saw',
        'Tense switching in narratives',
        'Plural verbs after "one of the…" or "each of…"',
        'informations, equipments, furnitures, advices'
      ],
      tips: [
        'Circle the time expression first — it usually decides the tense',
        'Find the real subject by crossing out phrases like "of the students" or "as well as…"',
        'When proofreading writing, check every verb once for tense and once for agreement'
      ]
    },
    {
      id: 'g2', form: 0, num: 7, weight: 'high',
      title: 'Grammar 2 — Articles, Prepositions, Pronouns and Quantifiers',
      summary: 'The small words that cost many marks: a/an/the, in/on/at, pronoun reference, few/little.',
      notes: `## Articles: a, an, the, or nothing (Ø)

| Use | Rule | Example |
|---|---|---|
| **a / an** | First mention of a singular countable noun; one of many; jobs | *I saw **a** cat.* / *She is **an** engineer.* |
| **a vs an** | Depends on the **sound**, not the letter | ***an** hour, **an** honest man, **a** university, **a** European, **an** MP* |
| **the** | Already mentioned / known; unique things; superlatives; ordinals | *The cat was hungry.* / *the sun* / *the best* / *the first* |
| **the** | Rivers, seas, oceans, plural countries, ranges | *the Pahang River, the Pacific, the Philippines, the Titiwangsa Range* |
| **Ø** | Plural or uncountable nouns in general | *Ø Cats are independent.* / *Ø Water is precious.* |
| **Ø** | Most countries, cities, meals, sports, languages, school subjects | *Malaysia, Ø breakfast, Ø football, Ø English* |
| **Ø** | Fixed phrases | *go to Ø school / Ø bed / Ø hospital* (for the usual purpose); *by Ø bus* |

## Prepositions of time and place

| | in | on | at |
|---|---|---|---|
| **Time** | months, years, seasons, parts of the day (*in March, in 2025, in the morning*) | days, dates (*on Friday, on 31 August, on my birthday*) | clock times, short points (*at 7 a.m., at night, at the weekend* — Br.) |
| **Place** | enclosed spaces, cities, countries (*in the hall, in Kuching*) | surfaces, floors (*on the table, on the second floor*) | points, addresses, events (*at the bus stop, at 12 Jalan Mawar, at the concert*) |

## Dependent prepositions (fixed — learn them)

- interested **in**, good **at**, afraid **of**, proud **of**, responsible **for**, similar **to**, different **from**, aware **of**, keen **on**, famous **for**
- depend **on**, apologise **for**, insist **on**, consist **of**, belong **to**, succeed **in**, concentrate **on**, participate **in**
- discuss ✗ *about* → *discuss the problem*; enter ✗ *into the room* → *enter the room*; *emphasise* ✗ *on* (but *put emphasis **on***)

## Pronouns

| Type | Forms | Watch out |
|---|---|---|
| Subject / object | I–me, he–him, she–her, we–us, they–them | *between you and **me*** ✓ (not *I*) |
| Possessive | my/mine, your/yours, its, their/theirs | ***its*** (possessive) vs ***it's*** (it is) |
| Reflexive | myself, themselves | *They enjoyed **themselves**.* (✗ theirselves) |
| Relative | who, which, that, whose, where | see Grammar 3 |

**Pronoun–antecedent agreement:** *Every student must bring **his or her** / **their** own laptop* (singular *their* is now widely accepted). *The committee made **its** decision.*

## Quantifiers

| Countable (plural) | Uncountable | Meaning |
|---|---|---|
| many, a few, few, several, a number of | much, a little, little, a great deal of, an amount of | |
| **a few** friends (some — positive) | **a little** time (some — positive) | enough to be useful |
| **few** friends (almost none — negative) | **little** time (almost none — negative) | not enough |
| fewer people | less sugar | comparatives |

*a lot of / lots of / some / any / plenty of* work with both.

## Typical Malaysian-learner errors

- *I go to the school by the bus* → *I go to school by bus*
- *She is a honest girl* → *an honest girl*
- *I am good in Maths* → *good at Maths*
- *We discussed about the issue* → *We discussed the issue*
- *I will see you on next Monday* → *next Monday* (no preposition before *next, last, this, every*)
- *Less students* → *fewer students*`,
      keyPoints: [
        'a/an depends on the first SOUND: an hour, a university',
        'in (months/years), on (days/dates), at (clock times)',
        'No preposition before next / last / this / every + time',
        'discuss, enter, emphasise take no preposition',
        'few/little = almost none; a few/a little = some',
        'fewer + countable plural; less + uncountable'
      ],
      mistakes: [
        'a honest / an university',
        'good in, interested about, married with (→ married to)',
        'discuss about, return back, revert back',
        'its vs it\'s confusion',
        'less people (→ fewer people)'
      ],
      tips: [
        'Make a personal list of dependent prepositions from your own marked essays',
        'Say a/an aloud with the next word — your ear hears the vowel sound',
        'In cloze tests, a preposition gap usually depends on the word BEFORE it (adjective/verb + preposition)'
      ]
    },
    {
      id: 'g3', form: 0, num: 8, weight: 'med',
      title: 'Grammar 3 — Conditionals, Passive, Reported Speech, Relative Clauses and Modals',
      summary: 'Complex grammatical forms that lift the Language score in Paper 2 and appear in Paper 1.',
      notes: `## Why these matter

The Part 3 writing scale rewards "a range of **simple and complex** grammatical forms with control and flexibility". Conditionals, passives, relative clauses and reported speech are the easiest complex forms to use correctly.

## Conditionals

| Type | Form | Use | Example |
|---|---|---|---|
| Zero | If + present, present | General truths | *If you heat ice, it melts.* |
| First | If + present, **will** + base | Real/likely future | *If it rains, we **will** postpone the match.* |
| Second | If + past, **would** + base | Unreal/unlikely present or future | *If I **had** more time, I **would** learn Japanese.* / *If I **were** you, I **would** apologise.* |
| Third | If + **had** + p.p., **would have** + p.p. | Unreal past (regret) | *If we **had left** earlier, we **would have caught** the train.* |

**Unless** = if… not: *Unless you hurry, you will miss the bus.*

## Passive voice

Form: **be (in the right tense) + past participle**. Use it when the action matters more than who did it (reports, notices, processes).

| Tense | Active | Passive |
|---|---|---|
| Present simple | They **clean** the hall daily. | The hall **is cleaned** daily. |
| Past simple | The prefects **organised** the event. | The event **was organised** by the prefects. |
| Present perfect | Someone **has stolen** my bicycle. | My bicycle **has been stolen**. |
| Future | They **will announce** the results. | The results **will be announced**. |
| Modal | You **must submit** the form. | The form **must be submitted**. |

> Reports (Paper 2 Part 3) often use the passive: *"A talk **was given** by…", "Several suggestions **were made**."*

## Reported speech

Backshift the tense one step when the reporting verb is past:

| Direct | Reported |
|---|---|
| "I **am** tired." | She said (that) she **was** tired. |
| "I **have finished**." | He said he **had finished**. |
| "We **will** come." | They said they **would** come. |
| "**Can** you help?" | She asked if I **could** help. |
| "Where **do** you **live**?" | He asked where I **lived**. (✗ where did I live) |
| "Don't touch it." | She told me **not to touch** it. |

Also change time and place words: *today → that day, tomorrow → the next day / the following day, here → there, ago → before*.

## Relative clauses

| Pronoun | For | Example |
|---|---|---|
| who | people | *The girl **who** won the quiz is my cousin.* |
| which | things/animals | *The phone **which** I bought is faulty.* |
| that | people or things (defining only) | *The book **that** you lent me…* |
| whose | possession | *The boy **whose** bag was lost…* |
| where | places | *The town **where** I grew up…* |
| when | times | *The day **when** we met…* |

**Defining** (no commas) identifies which one. **Non-defining** (commas) adds extra information and **cannot use *that***: *My father, **who** is a nurse, works night shifts.* ✓

## Modals

| Meaning | Modal | Example |
|---|---|---|
| Ability | can, could, be able to | *She **can** swim.* |
| Obligation | must, have to | *You **must** wear a helmet.* |
| No obligation | don't have to, needn't | *You **don't have to** bring food.* |
| Prohibition | mustn't, cannot | *You **mustn't** use phones in the lab.* |
| Advice | should, ought to | *You **should** rest.* |
| Possibility | may, might, could | *It **might** rain.* |
| Deduction | must (sure yes), can't (sure no) | *He **must** be tired. / That **can't** be true.* |
| Past regret/advice | should have + p.p. | *I **should have** studied harder.* |

Modal + **base verb** always: *She can **swim*** ✓ — *She can swims* ✗, *She must to go* ✗.`,
      keyPoints: [
        'First conditional: If + present, will + base',
        'Second: If + past, would + base (If I were…)',
        'Third: If + had + p.p., would have + p.p.',
        'Passive = be + past participle; tense shown by "be"',
        'Reported questions use statement word order',
        'Non-defining relative clauses: commas, never "that"',
        'mustn\'t = not allowed; don\'t have to = not necessary'
      ],
      formulas: [
        'If + had + p.p. → would have + p.p.',
        'Passive: am/is/are/was/were/been/be + p.p.',
        'tell + object + (not) to + base verb',
        'should have / could have / would have + p.p.'
      ],
      mistakes: [
        'If I will see him, I will tell him',
        'If I would have known… (→ If I had known)',
        'The event was organise by… (missing -d)',
        'He asked me where was I going (→ where I was going)',
        'My mother, that is a teacher, … (→ who)',
        'should of / could of (→ should have)'
      ],
      tips: [
        'Use one passive, one conditional and one relative clause in every Part 3 essay — accurately',
        'In reports, the passive makes your tone more formal',
        'Check that every modal is followed by a base verb'
      ]
    },
    {
      id: 'v1', form: 0, num: 9, weight: 'med',
      title: 'Vocabulary — Word Formation, Collocations and Confusable Words',
      summary: 'Building words with prefixes and suffixes, using natural collocations, and avoiding commonly confused pairs.',
      notes: `## Why vocabulary matters

- **Paper 1** Parts 2 and 3 test word meaning, collocation and word form directly.
- **Paper 2** Language criterion: Part 3 top score needs "a range of vocabulary, **including less common lexis**, appropriately". Examiners' reports (2022–2024) list examples like *crucial, fortify, coordinated* — accurate, not show-off.

## Word formation: suffixes decide part of speech

| Part of speech | Common suffixes | Examples |
|---|---|---|
| Noun | -tion, -ment, -ness, -ity, -ance/-ence, -er/-or, -ship | decision, improvement, kindness, ability, importance, friendship |
| Verb | -ise/-ize, -en, -ify | modernise, strengthen, simplify |
| Adjective | -ful, -less, -ous, -ive, -able/-ible, -al, -ic | helpful, careless, dangerous, creative, reliable, cultural, energetic |
| Adverb | -ly | carefully, responsibly |

**Word family example:** *decide* (v) → *decision* (n) → *decisive* (adj) → *decisively* (adv); *indecisive* (opposite).

## Prefixes change meaning

| Prefix | Meaning | Examples |
|---|---|---|
| un-, in-, im-, il-, ir-, dis- | not / opposite | unfair, inaccurate, impossible, illegal, irresponsible, dishonest |
| mis- | wrongly | misunderstand, misuse |
| re- | again | rewrite, recycle |
| over- / under- | too much / too little | overcrowded, underestimate |
| pre- / post- | before / after | preview, postpone |

*im-* before **b, m, p** (impolite, immature); *il-* before **l** (illogical); *ir-* before **r** (irregular).

## Collocations for SPM themes

| Theme | Useful collocations |
|---|---|
| Environment | reduce plastic waste, raise awareness, take drastic measures, carbon footprint, single-use plastic |
| Technology | screen time, cyberbullying, digital footprint, user-friendly interface, access information |
| Health | lead a healthy lifestyle, balanced diet, mental well-being, sedentary lifestyle |
| Community | lend a helping hand, foster unity, give back to society, sense of belonging |
| Education | broaden your horizons, hands-on experience, lifelong learning, excel in |

## Commonly confused words

| Pair | Difference |
|---|---|
| affect / effect | *affect* = verb (influence); *effect* = noun (result) |
| advice / advise | *advice* = noun (uncountable); *advise* = verb |
| lose / loose | *lose* = fail to keep; *loose* = not tight |
| borrow / lend | borrow **from**; lend **to** |
| bring / take | bring = towards speaker; take = away |
| economic / economical | economic = about the economy; economical = saves money |
| sensible / sensitive | sensible = practical; sensitive = easily affected/hurt |
| historic / historical | historic = important in history; historical = about the past |

## Malaysian English (Manglish) to avoid in formal writing

| Avoid | Use |
|---|---|
| *on / off the light* | switch **on** / **off** the light |
| *open the fan* | switch on the fan |
| *I very like it* | I **really** like it / I like it **very much** |
| *Can or not?* | Is it possible? / Can you…? |
| *last time* (meaning "in the past") | in the past / formerly |
| *already* at the end (*I eat already*) | I have eaten |
| *follow* (*Can I follow you?* = come along) | Can I come with you? |
`,
      keyPoints: [
        'Suffix tells you the part of speech: -tion (n), -ise (v), -ous (adj), -ly (adv)',
        'Negative prefixes: un-, in-, im- (b/m/p), il- (l), ir- (r), dis-',
        'affect = verb, effect = noun; advice = noun, advise = verb',
        'Learn collocations by theme for writing',
        'Use less common words only when you are sure of their meaning'
      ],
      mistakes: [
        'Using a noun where an adjective is needed (a success event → a successful event)',
        'irresponsible spelled unresponsible',
        'borrow / lend confusion: Can you borrow me your pen?',
        'Manglish expressions in formal writing (open the light)',
        'Memorised "bombastic" words used wrongly'
      ],
      tips: [
        'Keep a word-family notebook: verb – noun – adjective – adverb',
        'When you learn a word, learn the words it collocates with',
        'Use one precise word instead of "very + adjective" (very tired → exhausted)'
      ]
    },
    {
      id: 'w1', form: 0, num: 10, weight: 'high',
      title: 'Writing Part 1 — Short Communicative Message (Email)',
      summary: 'About 80 words replying to a friend or relative; cover every point in an informal, friendly tone.',
      notes: `## The task

Paper 2 Part 1 is a **short communicative message** worth **20 marks**, targeted at **A2 level**. In every SPM paper from 2021 to 2024 it was an **email** to a friend or relative, usually a **reply** to an email or chat that asks you **3–4 things** (verified in LP examiners' reports). The 2024 rubric asked for "about 80 words".

| Year | What the email had to cover (summarised) |
|---|---|
| 2021 | Recommend a sports club to a cousin; why suitable; what she can learn |
| 2022 | Where and when to meet; how to help a friend; what to bring |
| 2023 | Choose one of two holiday jobs; why; holiday plans |
| 2024 | Why you bought a watch; its price; online or shop, and why |

## How it is marked (0–5 each, total 20)

| Criterion | What earns a 5 in Part 1 |
|---|---|
| **Content** | All content relevant; **target reader fully informed** (every point answered) |
| **Communicative Achievement** | Uses email conventions (greeting, friendly tone, closing) to communicate straightforward ideas |
| **Organisation** | Generally well organised, variety of cohesive devices (*because, so, also, besides, that's why*) |
| **Language** | Everyday vocabulary, simple and some complex forms with good control; errors don't impede |

> Examiners' advice repeated every year: **number the tasks in the stimulus**, identify the **target reader**, and keep it **short and concise**.

## Structure (about 80 words)

1. **Greeting**: *Hi Aiman,* / *Dear Kak Ros,*
2. **Opening line** (1 sentence) linking to their message: *Thanks for your email — great to hear from you!*
3. **Body** (3–5 sentences): answer **each point in order**, adding a reason or detail to each.
4. **Closing line**: *Let me know what you think. / Can't wait to see you!*
5. **Sign-off**: *Take care, / See you soon,* + your name.

## Language for each function

| Function | Useful phrases |
|---|---|
| Suggesting | *Why don't you…? / I think you should… / How about…?* |
| Giving reasons | *because… / since… / That's why… / The main reason is…* |
| Choosing | *I'd go for… / I've decided to…* |
| Arranging | *Shall we meet at… ? / … works best for me.* |
| Thanking / apologising | *Thanks so much for… / Sorry I couldn't…* |

## Tone

- **Informal but correct**: contractions (*I'm, can't*) are fine in a friendly email.
- No slang, emojis or SMS spelling (*u, gonna, tq*).
- Don't write a formal letter (*I am writing to inform you…*) to a friend — wrong register.

## Common mistakes

- Missing one point (Content drops to 3 or lower).
- Writing 150+ words: wastes time you need for Part 3 and adds errors.
- Forgetting greeting or closing.
- Copying whole sentences from the stimulus.`,
      keyPoints: [
        'Part 1 = 20 marks, A2 target, about 80 words',
        'An email every year 2021–2024',
        'Answer every point, in order, with a short reason',
        'Greeting + opening line + body + closing line + sign-off',
        'Friendly, informal register; no slang or SMS spelling'
      ],
      mistakes: [
        'Omitting one of the 3–4 points',
        'Formal letter style to a friend',
        'Too long — runs into Part 3 time',
        'No sign-off or name',
        'SMS spelling: u, ur, tq, pls'
      ],
      tips: [
        'Number the points on the question paper and tick each one as you write it',
        'Give every point a "because" — it shows development cheaply',
        'Spend no more than 15–20 minutes'
      ],
      modelAnswer: `## Sample task (original)

Your friend Dinesh emailed: *"I heard your school started a Green Club. What do you do there? When do you meet? Do you think I should join one at my school?"* Write an email to Dinesh in about 80 words.

## Model answer (about 75 words)

> Hi Dinesh,
>
> Thanks for your email! Yes, I joined the Green Club last month and I love it. We collect recyclables every week and we've started a small herb garden behind the canteen. We meet every Wednesday after school, from 3 to 4.30 p.m. I definitely think you should join one too, because it's fun and you'll make new friends while helping the environment. Let me know if you sign up!
>
> Take care,
> Hafiz

## Why it scores well

- **Content 5**: all three questions answered (activities ✔, when ✔, should he join + reason ✔).
- **Communicative Achievement 5**: greeting, friendly opening, closing question, sign-off; informal tone.
- **Organisation 5**: follows the order of the questions; linkers *and, because, while*.
- **Language 5**: accurate tenses (*joined*, *we've started*, *you'll make*), everyday vocabulary used precisely.`
    },
    {
      id: 'w2', form: 0, num: 11, weight: 'high',
      title: 'Writing Part 2 — Guided Writing (Essay from Notes)',
      summary: 'A short essay (about 125–150 words) that uses ALL the notes given and gives your view.',
      notes: `## The task

Paper 2 Part 2 is **guided writing**, worth **20 marks**, targeted at **B1**. From 2021 to 2024 it was a short **essay** (often for a teacher or school magazine) built on **three notes** — usually one about your **experience**, one asking **why**, and one asking **how** (verified in LP examiners' reports). Word length is reported as **about 125–150 words** (teacher guides and trial papers).

| Year | Notes (summarised) |
|---|---|
| 2021 | An act of kindness you experienced · why be kind · how to encourage kindness |
| 2022 | Cultural traditions still practised · why appreciate them · how to keep young people interested |
| 2023 | An advert you saw · what made it attractive · how adverts influence people |
| 2024 | Music you like · why · how important music is in your life |

## Marking focus (0–5 each)

| Criterion | What examiners looked for (from KMJ comments) |
|---|---|
| **Content** | **All notes** addressed and explained; average scripts lost marks by missing the third note |
| **Communicative Achievement** | Conventions of an **essay** (title optional, introduction, body, conclusion), clear straightforward ideas |
| **Organisation** | **Paragraphs** — a one-paragraph answer was marked down (KMJ 2024); variety of linkers |
| **Language** | Everyday vocabulary plus some less common words; simple and some complex forms |

## Structure: Introduction – one paragraph per note – Conclusion

| Paragraph | Words | Content |
|---|---|---|
| Introduction | 20–30 | Hook + state the topic / your general view |
| Body 1 | 30–35 | Note 1 + detail/example |
| Body 2 | 30–35 | Note 2 + reason |
| Body 3 | 30–35 | Note 3 + suggestion/explanation |
| Conclusion | 15–20 | Sum up / final thought |

## Developing a point: P–E–E

- **Point**: *Reading improves our vocabulary.*
- **Explain**: *When we meet new words in context, we remember them more easily.*
- **Example**: *After reading a mystery series, I started using words like "suspicious" and "vanished" in my own essays.*

## Useful language

| Function | Phrases |
|---|---|
| Opening | *In today's fast-paced world, … / Many people believe that…* |
| Giving opinion | *In my opinion, … / I strongly believe that… / Personally, …* |
| Adding | *Furthermore, … / Apart from that, … / In addition, …* |
| Reason / result | *This is because… / As a result, … / Hence, …* |
| Suggesting | *One way to… is to… / Schools could… / Parents should…* |
| Concluding | *In conclusion, … / All in all, … / To sum up, …* |

## Examiners' tips (KMJ 2021–2024)

- Read and **number the notes**; plan before writing.
- **Avoid contractions** in essays.
- Use a variety of **cohesive devices** — but correctly (KMJ 2024 noted *On the other hand* used wrongly).
- Express and **justify your opinion**.`,
      keyPoints: [
        'Part 2 = 20 marks, B1 target, about 125–150 words (reported)',
        'Essay on three notes: experience + why + how (pattern 2021–2024)',
        'Use ALL notes — a missing note lowers Content',
        'Five short paragraphs: intro, 3 body, conclusion',
        'No contractions; justify opinions'
      ],
      mistakes: [
        'Writing one long paragraph',
        'Listing notes without explaining them',
        'Ignoring the third ("how") note',
        'Using memorised introductions that do not fit the topic',
        'Overusing "Firstly, Secondly, Lastly" only'
      ],
      tips: [
        'One paragraph per note is the safest organisation',
        'Give a personal example for the experience note — it makes Content vivid',
        'Aim for about 140 words; quality over length'
      ],
      modelAnswer: `## Sample task (original)

Your English teacher has asked you to write an essay about **reading habits** among teenagers. In your essay, write about:
- what you like to read
- why reading is important
- how teenagers can be encouraged to read more

## Model answer (about 145 words)

> **Turning Pages in a Digital Age**
>
> Many teenagers today spend more time scrolling than reading. However, I believe reading is still one of the most rewarding habits we can have.
>
> Personally, I enjoy mystery novels because they keep me guessing until the final chapter. I also read online articles about science and space.
>
> Reading is important because it improves our language. When we meet new words in context, we remember them more easily. Furthermore, a good story allows us to understand people whose lives are very different from ours.
>
> To encourage teenagers to read more, schools could set up reading corners with comfortable seats and popular titles. Parents can also set an example by reading at home instead of watching television.
>
> In conclusion, reading is not old-fashioned. If we make books more accessible, more teenagers will discover how enjoyable it can be.

## Annotation

- **Content**: note 1 (mystery novels, science articles) ✔, note 2 (vocabulary, empathy) ✔, note 3 (reading corners, parents) ✔.
- **Organisation**: five paragraphs; linkers *However, Personally, Furthermore, In conclusion*.
- **Language**: complex forms — relative clause (*whose lives*), first conditional (*If we make…, … will discover*), *allows us to understand*.
- **Communicative Achievement**: essay conventions with a title, formal-neutral tone, no contractions.`
    },
    {
      id: 'w3', form: 0, num: 12, weight: 'high',
      title: 'Writing Part 3 — Extended Writing: The Story',
      summary: 'A 200–250-word story that starts with the given words and covers every prompt.',
      notes: `## The task

Part 3 gives **three choices** — you write **one** in **about 200–250 words** for **20 marks** (target **B2**). A **story** option appeared every year from 2021 to 2024 (verified, KMJ), and each time the story had to **begin with given opening words** and cover specific prompts (e.g. *why the journey was interrupted* and *what he did to arrive on time*, 2024).

> KMJ 2021–2024: "Some candidates do not even start with the opening line" and "do not fully address the task". Both cost **Content** marks.

## Content checklist for any story question

1. **Start with the exact words given** (copy them correctly, punctuation included).
2. Underline **every bullet** in the task — each one is a content point.
3. Keep the **same character and point of view** as the opening (if the opening says *Henry*, write in third person about Henry; if it says *I*, use first person).
4. Make sure the story has a clear **ending**.

## Story structure (about 220 words)

| Stage | Words | What happens |
|---|---|---|
| **Opening** | 40–50 | Given words + setting (where, when, who) + mood |
| **Rising action** | 60–70 | Problem / complication (often prompt 1) |
| **Climax** | 50–60 | Most tense moment; key decision (often prompt 2) |
| **Resolution** | 30–40 | How it ends; feeling or lesson |

## Techniques that lift Communicative Achievement (hold the reader's attention)

| Technique | Example |
|---|---|
| **Show, don't tell** | *His hands trembled as he tore open the envelope.* (instead of *He was nervous.*) |
| **Varied sentence openings** | *Without warning, … / Clutching her bag, … / Moments later, …* |
| **Short sentence for impact** | *Then the lights went out.* |
| **Dialogue (a little)** | *"Stay calm," whispered the conductor.* |
| **Senses** | *The smell of burning rubber filled the air.* |
| **Time connectors** | *As soon as, Meanwhile, Just then, Eventually, By the time* |

## Language: narrative tenses

- Main events: **past simple** (*She opened the door*).
- Background: **past continuous** (*Rain was pouring down*).
- Earlier events: **past perfect** (*She had never seen him before*).
- Do not slip into the present tense.

## Punctuating dialogue

*"Where are you going?" asked Mum.* — comma or question mark **inside** the quotation marks; new speaker = new line.

## Mistakes examiners noted

- Ignoring the opening words or changing them.
- Covering only one of the prompts.
- Stories that never end ("…and then I woke up" endings are weak).
- Long, irrelevant introductions about waking up and brushing teeth.`,
      keyPoints: [
        'Story option appeared every year 2021–2024',
        'Start with the given words exactly',
        'Cover every bullet prompt',
        'Opening – complication – climax – resolution',
        'Past tenses throughout; show, don\'t tell'
      ],
      mistakes: [
        'Not using the opening words',
        'Changing the point of view given in the opening',
        'Missing a prompt (e.g. how the problem was solved)',
        'Tense switching to present',
        'Over-long dialogue without punctuation'
      ],
      tips: [
        'Plan in 3 minutes: four boxes for the four stages',
        'Use one or two less common words per paragraph, accurately',
        'Finish with a short reflective sentence that links back to the opening'
      ],
      modelAnswer: `## Sample task (original)

Write a story for your school magazine. Your story must begin with: *"The moment Mira opened the old biscuit tin, she knew her afternoon had changed."* In your story, you must explain **what was in the tin** and describe **what Mira did next**.

## Model answer (about 220 words)

> The moment Mira opened the old biscuit tin, she knew her afternoon had changed. Instead of biscuits, there was a bundle of yellowed letters tied with a faded red ribbon, and a black-and-white photograph of a young man standing beside a bicycle.
>
> Mira had been helping her grandmother clear the storeroom. She carried the tin to the kitchen, where Nenek was peeling onions. When Nenek saw the photograph, the knife slipped from her fingers.
>
> "That is your grandfather," she whispered. "I thought these letters were lost in the flood."
>
> For the next hour, Mira read the letters aloud. Each one had been written while her grandfather was working in Singapore in 1968. He described the crowded streets, the noisy harbour and, in every letter, how much he missed the paddy fields of home. Nenek laughed at some lines and wiped her eyes at others.
>
> Mira realised that this was a treasure no one else in the family had seen. That evening, she carefully scanned every letter and the photograph, then shared them in the family chat group. Within minutes, her uncles and cousins were replying with memories she had never heard.
>
> Later, as she tied the ribbon back around the bundle, Mira smiled. She had opened a biscuit tin expecting nothing, but she had found her family's story.

## Annotation

- **Content**: opening words exact ✔; what was in the tin (letters, photo) ✔; what Mira did next (read them to Nenek, scanned and shared) ✔.
- **Communicative Achievement**: shows emotion through action (*the knife slipped*), dialogue, a satisfying circular ending.
- **Organisation**: six paragraphs; time connectors *For the next hour, That evening, Within minutes, Later*.
- **Language**: past perfect (*had been helping*, *had been written*), passive, relative clause (*where Nenek was peeling onions*), less common lexis (*yellowed, faded, harbour*).`
    },
    {
      id: 'w4', form: 0, num: 13, weight: 'high',
      title: 'Writing Part 3 — Extended Writing: Article, Report and Review',
      summary: 'Genre conventions, tone and structure for the three non-narrative Part 3 options.',
      notes: `## Why genre matters most here

From 2022 to 2024 the LP examiners' reports repeatedly say candidates lost marks because their **article or report "leans towards a story"** or uses the **wrong tone**. In Part 3 the **Communicative Achievement** score depends on using the *conventions* of the genre.

| Year | Non-story options (verified, KMJ) |
|---|---|
| 2022 | Article (online gaming) · Report (museum visit) |
| 2023 | Article (a memorable photograph) · Report (reducing plastic use in school) |
| 2024 | Report (talent show incident) · Review (official school website) |

## Genre comparison

| Feature | **Article** | **Report** | **Review** |
|---|---|---|---|
| Reader | Magazine / website readers | Teacher, principal, club advisor | People deciding whether to use/watch/visit |
| Purpose | Interest, inform, give opinion | Inform factually, evaluate, recommend | Describe and evaluate, recommend or not |
| Title | Catchy title (question, pun) | Clear heading: *Report on…* + To / From / Date (or a heading line) | Name of the thing reviewed |
| Tone | Lively, personal, can address reader (*Have you ever…?*) | Formal, objective, impersonal; **passive** common | Semi-formal, personal opinion with reasons |
| Organisation | Intro hook → paragraphs → memorable ending | **Sub-headings**: Introduction / Findings / Problems / Recommendations / Conclusion | Intro → what it is → good points → weaker points → verdict |
| Typical language | Rhetorical questions, *you*, vivid adjectives | *was organised, it was found that, it is recommended that* | *user-friendly, worth…, the highlight is, I would recommend… to…* |

## Article: tips

- Start with a **hook**: a question, surprising fact or short scene.
- Talk **to the reader**: *Imagine… / You might think…*
- Each paragraph = one idea; end with a **memorable final line**.
- **Not a story**: if the task is a memorable photograph, *describe and explain why it matters*, don't narrate a whole adventure.

## Report: tips

- Begin with purpose: *The purpose of this report is to…*
- Use **headings** that match the task bullets.
- **Past tense + passive** for events: *The talent show was held on…*
- Recommendations: *It is recommended that the club **appoint** / **should appoint**…*
- No dialogue, no emotional storytelling, no contractions.

## Review: tips

- Review exactly **what the task names** (2024: the *school* website, not YouTube — KMJ).
- Balance **positives and negatives**, each with a reason.
- Finish with a clear **recommendation** and who it suits.

## Useful phrases bank

| Article | Report | Review |
|---|---|---|
| *Have you ever wondered…?* | *This report outlines…* | *What impressed me most was…* |
| *Believe it or not, …* | *It was observed that…* | *One drawback is that…* |
| *So, next time you…* | *In light of this, it is recommended that…* | *Overall, I would give it four out of five stars.* |`,
      keyPoints: [
        'Communicative Achievement = right genre conventions and tone',
        'Article: catchy title, hook, address the reader, memorable end',
        'Report: headings, formal, passive, findings + recommendations',
        'Review: describe, evaluate (pros and cons), recommend',
        'Never let an article or report turn into a story'
      ],
      formulas: [
        'Report: Introduction → Findings → Problems → Recommendations → Conclusion',
        'Review: Intro → Description → Strengths → Weaknesses → Verdict',
        'Article: Hook → Point 1 → Point 2 → Point 3 → Call to action'
      ],
      mistakes: [
        'Writing a report as a narrative ("I woke up early that day…")',
        'Article on a photo that becomes a long story',
        'Reviewing the wrong thing (any website instead of the school website)',
        'Report without headings or recommendations',
        'Contractions and slang in a report'
      ],
      tips: [
        'Choose the Part 3 option whose GENRE you know best, not just the topic you like',
        'Turn each bullet in the task into a heading (report) or paragraph (article/review)',
        'Spend 5 minutes planning; Part 3 is worth as much as Parts 1 and 2'
      ],
      modelAnswer: `## Sample task (original)

The Science Society organised a **Recycling Week** at your school. As secretary, write a **report** for the Society's advisor. Include: **what activities were held**, **problems faced**, and **suggestions for next year**.

## Model answer (about 215 words, excluding headings)

> **Report on the Science Society Recycling Week 2025**
>
> **Introduction**
> The purpose of this report is to review the Recycling Week held from 14 to 18 July and to suggest improvements for next year.
>
> **Activities**
> Three main activities were carried out. Firstly, collection bins for paper, plastic and aluminium cans were placed at every block, and recyclables were weighed daily. Secondly, a poster competition on the theme "Waste Less, Live More" attracted 46 entries. Finally, a talk on composting was given by an officer from the local council, which was attended by about 200 students.
>
> **Problems**
> Although 380 kilograms of recyclables were collected, several problems were observed. Many bins were contaminated with food waste, so some items could not be recycled. In addition, the talk clashed with co-curricular activities, which meant that a number of interested students were unable to attend.
>
> **Recommendations**
> It is recommended that clear picture labels be placed on every bin and that prefects be stationed near the canteen bins during recess. Furthermore, the talk should be scheduled during the weekly assembly so that all students can benefit.
>
> **Conclusion**
> Overall, Recycling Week was a success and raised awareness of waste separation. With better planning, next year's event could double the amount collected.
>
> Prepared by: Nur Aisyah binti Rahman, Secretary

## Annotation

- **Content**: activities ✔, problems ✔, suggestions ✔ — each under its own heading.
- **Communicative Achievement**: title, purpose statement, headings, objective tone, sign-off with role.
- **Organisation**: logical headings; linkers *Firstly, Secondly, Finally, Although, In addition, Furthermore, Overall*.
- **Language**: passives (*were placed, was given, be placed*), subjunctive recommendation (*It is recommended that… be placed*), relative clause (*which meant that*), precise lexis (*contaminated, awareness, scheduled*).`
    },
    {
      id: 'l1', form: 0, num: 14, weight: 'med',
      title: 'Paper 4 Listening — Strategies (Transcript Practice)',
      summary: 'Four parts, 30 items, each recording heard twice: prediction, distractors and note completion.',
      notes: `## The paper (reported format)

Paper 4 Listening carries **30 marks** (reported weighting 25% of the subject) and lasts **about 40 minutes**. Each recording is **played twice**.

| Part | Items | Recording | Task (reported) |
|---|---|---|---|
| 1 | 7 | Seven short, separate situations | Multiple choice (one question per situation) |
| 2 | 8 | One longer conversation or talk | Questions in order of the recording |
| 3 | 5 | Five short extracts by different speakers | Match each speaker to a statement / opinion |
| 4 | 10 | One talk or interview | Complete sentences / notes with words you hear |

> This app has **no audio**. The questions in this chapter use **written transcripts**, which is easier than the exam. Use them to learn *how* distractors work, then practise with real recordings in class.

## Before the recording: predict

- Read the questions and options in the reading time. **Underline the key words**.
- Ask: *What kind of information is needed?* (a time, a place, a reason, a feeling, a number)
- For gap-fill (Part 4), decide the **part of speech** and whether a **number** or **name** is likely.

## How distractors work in listening

| Trick | Example |
|---|---|
| **Change of mind** | "Let's meet at 3… no, wait, make it **half past three**." |
| **All options mentioned** | Speaker mentions the bus, the train **and** the car, but only took one |
| **Negative** | "It **wasn't** the price that put me off, it was the **colour**." |
| **Correction by other speaker** | A: "It's on Friday." B: "**Actually**, they moved it to **Thursday**." |
| **Paraphrase** | Option: *disappointed* — Recording: *"It didn't live up to what I'd expected."* |

> Signal words to listen for: **but, actually, in fact, however, instead, unfortunately, in the end, finally**.

## First and second listening

1. **First listening**: answer what you can; mark doubtful ones lightly.
2. **Second listening**: confirm answers, focus on the **gaps** and doubtful items.
3. Never leave a blank — guess intelligently.

## Part 4 (note completion) rules

- Write the **exact words** you hear; spelling counts if the word is common (check your school's guidance).
- Keep within the word limit.
- Numbers can be written as figures (*15*, *3.30 p.m.*).
- Check grammar: *a ___* needs a singular noun.

## Part 3 (matching speakers)

- Read all statements first; they **paraphrase** what speakers say.
- One speaker often **mentions** several statements but **means** only one — listen for the speaker's *main* feeling or reason.`,
      keyPoints: [
        '4 parts, 30 items, each recording played twice (reported)',
        'Predict the type of answer before listening',
        'Distractors: change of mind, corrections, negatives, all options mentioned',
        'Signal words: but, actually, instead, in the end',
        'Part 4: exact words, within word limit, grammatical'
      ],
      mistakes: [
        'Choosing the first option you hear mentioned',
        'Missing a correction ("actually…")',
        'Writing too many words in Part 4',
        'Panicking after missing one item and losing the next'
      ],
      tips: [
        'Use the reading time fully — underline key words in options',
        'Listen to English podcasts, news and vlogs daily; transcripts help you check',
        'If you miss an answer, move on immediately; you will hear it again'
      ]
    },
    {
      id: 's1', form: 0, num: 15, weight: 'med',
      title: 'Paper 3 Speaking — Preparation (Not Practisable In-App)',
      summary: 'Paired test in three parts; how to extend answers, organise a long turn and negotiate a decision.',
      notes: `## The test (reported format)

Paper 3 Speaking is a **paired test** (two candidates) with an **interlocutor** (asks questions) and an **assessor** (marks). It carries **24 marks** and lasts roughly **11–13 minutes**. Weighting is reported as 25% of the subject.

| Part | What happens | Approx. time |
|---|---|---|
| **1 Interview** | Short personal questions to each candidate (school, hobbies, daily life) | 2–4 min |
| **2 Long turn** | Each candidate speaks alone for about **1 minute** on a topic/prompt after brief preparation; partner answers a short follow-up question | 3–4 min |
| **3 Collaborative task** | Both discuss a mind map of options for about 2 minutes, then agree on a decision; follow-up questions may be asked | 4–5 min |

> **This app cannot assess speaking.** Use this chapter to prepare ideas and phrases, then practise aloud with a friend, timing yourselves.

## What is assessed (reported)

Typical CEFR-style speaking criteria cover **grammar and vocabulary**, **discourse management** (extended, relevant, organised speech), **pronunciation** and **interactive communication**, plus a **global** impression by the interlocutor. Check with your teacher for the current mark scheme.

## Part 1: extend every answer

Use **A–R–E**: **A**nswer → **R**eason → **E**xample.

*Q: Do you prefer studying alone or with friends?*
*A: I prefer studying with friends. **R:** Because we can explain difficult topics to each other. **E:** For example, my friend helped me understand chemical bonding last week.*

## Part 2: one-minute long turn

| Section | Time | Language |
|---|---|---|
| Opening | 5–10 s | *I'd like to talk about…* |
| Point 1 + detail | 20 s | *First of all, … because…* |
| Point 2 + detail | 20 s | *Another thing is that…* |
| Wrap-up | 10 s | *So overall, …* |

## Part 3: collaborate, don't compete

| Function | Phrases |
|---|---|
| Starting | *Shall we start with this one?* |
| Inviting | *What do you think about…? / Do you agree?* |
| Agreeing | *That's a good point. / I couldn't agree more.* |
| Disagreeing politely | *I see what you mean, but… / That's true, however…* |
| Deciding | *So, shall we go for…? / I think we both agree that…* |

## Common problems

- One-word answers in Part 1.
- Memorised speeches that ignore the actual question.
- Dominating the partner in Part 3, or not speaking at all.
- Long silences: use fillers like *Let me think… / That's an interesting question…*`,
      keyPoints: [
        'Paired test, 3 parts, 24 marks (reported)',
        'Part 1: Answer + Reason + Example',
        'Part 2: about 1 minute, organised with an opening and wrap-up',
        'Part 3: discuss, invite partner, agree/disagree politely, reach a decision',
        'Cannot be practised in-app — practise aloud'
      ],
      mistakes: [
        'One-word or one-sentence answers',
        'Reciting memorised paragraphs',
        'Ignoring the partner in Part 3',
        'Not reaching a decision at the end of Part 3'
      ],
      tips: [
        'Record yourself on your phone and listen back for -s and -ed endings',
        'Practise with a timer: 1 minute feels short once you have a structure',
        'Look at and respond to your partner, not only the examiner'
      ]
    }
  ],

  questions: [
    // ---------- r1: Part 1 short texts (3 options, as in the exam) ----------
    {
      id: 'bi-001', ch: 'r1', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      stimulus: `> **SUNRISE AQUATIC CENTRE**
> Due to maintenance work, the children's pool will be closed from 2 to 9 June. The main pool remains open as usual. Members who have booked swimming lessons for children during this period may choose a free make-up class or a full refund at the front desk.`,
      q: 'What does the notice say?',
      options: ['The whole aquatic centre will close for a week.', 'Members can get their money back for affected children\'s lessons.', 'Children\'s lessons will be moved to the main pool.'],
      answer: 1,
      explain: '"Full refund at the front desk" = get their money back. A is wrong: only the children\'s pool closes. C is never stated — the choice is a make-up class or a refund.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-002', ch: 'r1', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      stimulus: `> **Kak Lina:** Hi Danish, Mak says the Hari Raya open house is now at Pak Long's house, not ours, because our kitchen is still being repaired. Same date and time. Can you bring the extra folding chairs from our store room? Thanks!`,
      q: 'Why did Kak Lina send this message?',
      options: ['To invite Danish to an open house for the first time', 'To tell Danish about a change of venue and ask for his help', 'To ask Danish to repair the kitchen'],
      answer: 1,
      explain: 'The message gives new information (the open house "is now at Pak Long\'s house") and a request ("Can you bring the extra folding chairs"). A is wrong — "now" shows Danish already knew about the open house. C misuses the word "repaired".',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-003', ch: 'r1', type: 'mcq', format: 'p1', diff: 2, marks: 1,
      stimulus: `> **BOOKFEST CLEARANCE — Saturday only**
> Buy any two paperbacks and get a third free (the cheapest item is free). Members enjoy an extra 10% off the total bill. Offer not valid on textbooks or magazines.`,
      q: 'Which statement is true?',
      options: ['Members buying three paperbacks pay for two and get a further discount.', 'Textbooks are included in the "buy two, get one free" offer.', 'The most expensive of the three paperbacks is free.'],
      answer: 0,
      explain: 'Everyone gets the third paperback free; members also get "an extra 10% off". B contradicts "not valid on textbooks". C reverses "the cheapest item is free".',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-004', ch: 'r1', type: 'mcq', format: 'p1', diff: 2, marks: 1,
      stimulus: `> **Subject: Debate training**
> Dear team, this Thursday's training is cancelled as Puan Tan is attending a course. Instead, please use the time to research the motion for the zone competition. We will meet as usual next week, when each of you must present at least three arguments.
> — Adam (Captain)`,
      q: 'What must team members do before next week\'s training?',
      options: ['Attend a course with Puan Tan', 'Prepare arguments on the competition motion', 'Meet on Thursday to do research together'],
      answer: 1,
      explain: 'They must "research the motion" and "present at least three arguments" next week. A: only Puan Tan attends the course. C: training is cancelled — they research on their own.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-005', ch: 'r1', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      stimulus: `> **Directions:** Take 1 tablet twice daily after meals. Complete the full course even if you feel better. May cause drowsiness — do not drive or operate machinery.`,
      q: 'What does the label advise?',
      options: ['Stop taking the tablets when you feel better.', 'Take the tablets on an empty stomach.', 'Avoid driving after taking the tablets.'],
      answer: 2,
      explain: '"Do not drive or operate machinery" because the tablets may cause drowsiness. A contradicts "complete the full course"; B contradicts "after meals".',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-006', ch: 'r1', type: 'mcq', format: 'p1', diff: 2, kbat: true, marks: 1,
      stimulus: `> Finally finished my first 10 km run! Two months ago I couldn't jog for five minutes without stopping. Huge thanks to Coach Raj for the early-morning sessions — even on the days I wanted to quit. #NeverGiveUp`,
      q: 'What can be inferred about the writer?',
      options: ['The writer has always been a strong runner.', 'The writer\'s fitness improved through regular coached training.', 'The writer trained alone every morning.'],
      answer: 1,
      explain: 'From "couldn\'t jog for five minutes" two months ago to finishing 10 km, with thanks to a coach for "sessions" → improvement through regular training. A contradicts the post; C contradicts "Coach Raj".',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-007', ch: 'r1', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      stimulus: `> **LOST & FOUND**
> A blue water bottle with a name sticker was found in the library on Monday. The owner may collect it from the General Office between 7.30 a.m. and 1.00 p.m. by stating the name on the sticker. Unclaimed items will be donated after 30 June.`,
      q: 'To get the bottle back, the owner must',
      options: ['go to the library before 1 p.m.', 'tell the office staff the name on the bottle.', 'collect it on Monday.'],
      answer: 1,
      explain: '"By stating the name on the sticker" at the General Office. A confuses where it was found with where to collect it; C: Monday is when it was found.',
      source: 'SPM-style (original)'
    },

    // ---------- r2: Part 2 cloze ----------
    {
      id: 'bi-008', ch: 'r2', type: 'struct', format: 'p1', diff: 2, marks: 5,
      stimulus: `Read the text and choose the best answer for each gap.

Homestay programmes have become increasingly popular **(1)** ___ foreign tourists who want to experience village life. Visitors stay with local families and take **(2)** ___ in daily activities such as rubber tapping and cooking. **(3)** ___ the facilities are simple, most guests say the experience is unforgettable. Many host families **(4)** ___ visitors since 2012. The programme also benefits the community, **(5)** ___ the income helps villagers repair roads and community halls.`,
      q: 'Choose the best word for gaps (1)–(5).',
      parts: [
        { label: '(1)', type: 'mcq', marks: 1, q: 'Gap (1)', options: ['with', 'at', 'by', 'on'], answer: 0, explain: 'Fixed collocation: *popular with* someone.' },
        { label: '(2)', type: 'mcq', marks: 1, q: 'Gap (2)', options: ['place', 'part', 'action', 'note'], answer: 1, explain: '*Take part in* = participate. *Take place* means "happen" and cannot have visitors as its subject.' },
        { label: '(3)', type: 'mcq', marks: 1, q: 'Gap (3)', options: ['Despite', 'Because', 'Although', 'However'], answer: 2, explain: 'Contrast + full clause → *Although*. *Despite* needs a noun/-ing; *However* cannot join two clauses like this; *Because* is illogical.' },
        { label: '(4)', type: 'mcq', marks: 1, q: 'Gap (4)', options: ['welcome', 'welcomed', 'have welcomed', 'are welcoming'], answer: 2, explain: '*Since 2012* = from a past point until now → present perfect *have welcomed*.' },
        { label: '(5)', type: 'mcq', marks: 1, q: 'Gap (5)', options: ['as', 'although', 'unless', 'despite'], answer: 0, explain: 'The second clause gives the reason the programme benefits the community → *as* (= because).' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-009', ch: 'r2', type: 'struct', format: 'p1', diff: 2, marks: 5,
      stimulus: `Read the text and choose the best answer for each gap.

Last month, our class **(1)** ___ a "digital detox" challenge. For seven days, we were not allowed to use social media **(2)** ___ for schoolwork. At first, most of us found it difficult, and a **(3)** ___ students gave up after two days. However, those who continued noticed that they slept better and had **(4)** ___ time for hobbies. By the end of the week, I **(5)** ___ two novels and started learning the guitar.`,
      q: 'Choose the best word or phrase for gaps (1)–(5).',
      parts: [
        { label: '(1)', type: 'mcq', marks: 1, q: 'Gap (1)', options: ['took part', 'took part in', 'participated', 'took place in'], answer: 1, explain: '*Take part in* + noun. *Participated* would also need *in*; *took place* means "happened".' },
        { label: '(2)', type: 'mcq', marks: 1, q: 'Gap (2)', options: ['except', 'besides', 'beside', 'despite'], answer: 0, explain: '*Except for* = with the exception of. *Beside* = next to; *besides* = in addition to.' },
        { label: '(3)', type: 'mcq', marks: 1, q: 'Gap (3)', options: ['few', 'little', 'lot', 'many'], answer: 0, explain: '*A few* + plural countable noun (students). *A little* is for uncountables; *a lot* would need *of*.' },
        { label: '(4)', type: 'mcq', marks: 1, q: 'Gap (4)', options: ['more', 'most', 'many', 'fewer'], answer: 0, explain: 'Comparison with before the challenge → *more time*. *Time* is uncountable, so *many/fewer* are wrong.' },
        { label: '(5)', type: 'mcq', marks: 1, q: 'Gap (5)', options: ['read', 'had read', 'have read', 'was reading'], answer: 1, explain: '*By the end of the week* (a past point) → past perfect *had read*.' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-010', ch: 'r2', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      q: 'The students were reminded to ___ attention to the safety briefing.',
      options: ['pay', 'make', 'take', 'do'],
      answer: 0,
      explain: 'Collocation: *pay attention to*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-011', ch: 'r2', type: 'mcq', format: 'p1', diff: 2, marks: 1,
      q: '___ the heavy traffic, we arrived at the stadium on time.',
      options: ['Although', 'Despite', 'Because of', 'However'],
      answer: 1,
      explain: 'Contrast + noun phrase (*the heavy traffic*) → *Despite*. *Although* needs a clause; *Because of* gives the opposite logic; *However* cannot introduce a noun phrase.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-012', ch: 'r2', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      q: 'The new reading corner has ___ improved students\' interest in books.',
      options: ['significant', 'significance', 'significantly', 'signify'],
      answer: 2,
      explain: 'An adverb is needed to modify the verb *improved* → *significantly*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-013', ch: 'r2', type: 'mcq', format: 'p1', diff: 2, marks: 1,
      q: 'If the committee ___ more volunteers, the carnival would run more smoothly.',
      options: ['has', 'had', 'will have', 'would have'],
      answer: 1,
      explain: 'Second conditional (unreal present): *If* + past simple, *would* + base verb.',
      source: 'SPM-style (original)'
    },

    // ---------- r3: Part 3 long text ----------
    {
      id: 'bi-014', ch: 'r3', type: 'struct', format: 'p1', diff: 2, kbat: true, marks: 7,
      stimulus: `**The Thursday Grill**

(1) When my uncle broke his leg two weeks before the school holidays, everyone assumed his satay stall at the Thursday night market would simply close for a month. Nobody expected him to hand the business to me.

(2) "You've watched me for years," he said, propped up on the sofa with his plaster cast resting on a cushion. "You know the marinade. You know the customers. All you need is confidence."

(3) Confidence was exactly what I lacked. On the first Thursday, I arrived late because I had forgotten the charcoal, and by the time the grill was hot, a queue had formed. My hands shook as I turned the skewers. Several sticks were burnt black on one side and raw on the other. A man in an office shirt sighed loudly and walked away.

(4) Then Mak Cik Rosnah, who ran the drinks stall next to ours, leaned over. "Fan the fire, don't fight it," she said quietly, handing me a bamboo fan. "And smile. People forgive slow food. They don't forgive a sour face."

(5) It sounded too simple to be useful, but I tried it. I slowed down, fanned the coals evenly and greeted every customer by name if I knew it. Gradually the queue began to move. By ten o'clock, we had sold out.

(6) Over the next four Thursdays, I learnt more than how to grill satay. I learnt to count change quickly, to apologise without making excuses, and to keep going when things went wrong. When my uncle finally returned, leaning on a crutch, he counted the takings and raised his eyebrows.

(7) "Not bad," he said. Coming from him, that was the highest praise possible.

(8) Now, whenever I feel nervous before an exam or a performance, I remember the heat of the grill and Mak Cik Rosnah's advice. I may not be able to control everything, but I can control how I face it.`,
      q: 'Answer the questions based on the text.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Why was the writer put in charge of the stall?', options: ['The uncle wanted to retire.', 'The uncle was injured and believed the writer knew the business.', 'Nobody else in the family was free.', 'The night market organisers asked the writer.'], answer: 1, explain: 'Para 1–2: the uncle broke his leg and said "You\'ve watched me for years… You know the marinade."' },
        { label: '(b)', type: 'mcq', marks: 1, q: '"Confidence was exactly what I lacked" (paragraph 3) shows that the writer', options: ['felt unsure of his or her ability.', 'disagreed with the uncle about the marinade.', 'was angry about having to work.', 'did not know any customers.'], answer: 0, explain: '*Lacked* = did not have. The writer did not feel confident.' },
        { label: '(c)', type: 'mcq', marks: 1, q: 'What went wrong on the first Thursday?', options: ['The writer forgot the charcoal and grilled the satay unevenly.', 'Mak Cik Rosnah closed her stall early.', 'It rained heavily.', 'The uncle came to supervise.'], answer: 0, explain: 'Para 3: "I had forgotten the charcoal… burnt black on one side and raw on the other."' },
        { label: '(d)', type: 'mcq', marks: 1, q: 'Mak Cik Rosnah\'s advice suggests that customers care most about', options: ['how fast the food is served.', 'the price of the food.', 'the seller\'s attitude.', 'the size of the portions.'], answer: 2, explain: 'Inference: "People forgive slow food. They don\'t forgive a sour face." — attitude matters more than speed.' },
        { label: '(e)', type: 'mcq', marks: 1, q: '"Coming from him, that was the highest praise possible" (paragraph 7) suggests that the uncle', options: ['was disappointed with the writer.', 'rarely praises people.', 'praises everyone generously.', 'was joking.'], answer: 1, explain: 'If "Not bad" is his highest praise, he must seldom give compliments.' },
        { label: '(f)', type: 'fill', marks: 1, q: 'Find ONE word in paragraph 6 that means "money received from sales": ___', blanks: [['takings']], explain: '"He counted the takings" — the money the stall earned.' },
        { label: '(g)', type: 'mcq', marks: 1, q: 'Which is the best title for the text?', options: ['A Broken Leg', 'Learning Under Fire', 'Night Market Recipes', 'My Uncle\'s Satay'], answer: 1, explain: 'The text is about what the writer learnt in a difficult situation (with a pun on the grill fire). The others cover only one detail.' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-015', ch: 'r3', type: 'struct', format: 'p1', diff: 3, kbat: true, marks: 7,
      stimulus: `**Why Boredom Might Be Good for You**

(1) Most of us treat boredom as a problem to be solved immediately. The moment we are left waiting for a bus or standing in a queue, we reach for our phones. Yet a growing number of psychologists argue that these empty moments are not wasted at all.

(2) When the brain is not focused on a task, certain networks become more active. Researchers believe this "resting" activity helps us connect memories, imagine the future and come up with original ideas. In other words, daydreaming may be the brain's way of tidying up and making sense of what it has learnt.

(3) In one well-known type of experiment, volunteers are first given a dull task, such as copying numbers from a list, and then asked to think of as many uses as possible for an everyday object. Those who have been bored often produce more creative answers than those who go straight to the second task.

(4) This does not mean that we should seek out boredom all day. Long periods of it, especially when combined with loneliness, can lower mood and motivation. The key, experts say, is balance: allowing short, unplanned breaks rather than filling every second with entertainment.

(5) For teenagers, this may be particularly important. Constant notifications train the brain to expect a reward every few seconds, which makes it harder to concentrate on longer tasks such as reading or revision. Leaving the phone in another room for an hour, or walking home without earphones, are simple ways to give the mind some space.

(6) So the next time you feel bored, resist the urge to scroll. You might be surprised at what your mind comes up with when it is finally left alone.`,
      q: 'Answer the questions based on the text.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'In paragraph 1, the writer suggests that most people', options: ['enjoy waiting in queues.', 'escape boredom by using their phones.', 'agree with psychologists about boredom.', 'read while waiting for buses.'], answer: 1, explain: '"The moment we are left waiting… we reach for our phones."' },
        { label: '(b)', type: 'mcq', marks: 1, q: 'According to paragraph 2, when the brain is not focused on a task it', options: ['stops working.', 'helps link memories and form new ideas.', 'forgets what it has learnt.', 'becomes tired.'], answer: 1, explain: '"…helps us connect memories, imagine the future and come up with original ideas."' },
        { label: '(c)', type: 'fill', marks: 1, q: 'In paragraph 2, "what **it** has learnt" — the word "it" refers to the ___.', blanks: [['brain', 'the brain']], explain: 'The nearest suitable noun before *it* is *the brain* ("the brain\'s way of tidying up…").' },
        { label: '(d)', type: 'mcq', marks: 1, q: 'Paragraph 3 is mainly used to', options: ['describe a boring job.', 'give evidence that boredom can boost creativity.', 'explain how to copy numbers quickly.', 'criticise the volunteers.'], answer: 1, explain: 'The experiment supports the claim in paragraph 2 that empty moments help produce original ideas.' },
        { label: '(e)', type: 'mcq', marks: 1, q: 'What is the writer\'s view of boredom in paragraph 4?', options: ['It should be avoided completely.', 'It is helpful only in moderation.', 'It always causes loneliness.', 'It should fill most of the day.'], answer: 1, explain: '"This does not mean that we should seek out boredom all day… The key… is balance."' },
        { label: '(f)', type: 'mcq', marks: 1, q: 'Why are constant notifications a problem for teenagers, according to the writer?', options: ['They are expensive.', 'They make it harder to focus on longer tasks.', 'They cause bad dreams.', 'They stop people from using earphones.'], answer: 1, explain: 'Para 5: they train the brain to expect a quick reward, "which makes it harder to concentrate on longer tasks".' },
        { label: '(g)', type: 'fill', marks: 1, q: 'Find ONE word in paragraph 6 that means "a strong sudden desire": ___', blanks: [['urge']], explain: '"Resist the **urge** to scroll."' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-016', ch: 'r3', type: 'mcq', format: 'p1', diff: 2, marks: 1,
      stimulus: `> The villagers were initially **sceptical** about the solar panels, but their doubts vanished once their electricity bills fell.`,
      q: 'The word "sceptical" is closest in meaning to',
      options: ['doubtful', 'excited', 'angry', 'careless'],
      answer: 0,
      explain: 'The clue is "their doubts vanished" — they had doubts at first → doubtful.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-017', ch: 'r3', type: 'mcq', format: 'p1', diff: 2, kbat: true, marks: 1,
      stimulus: `> Aunt Mei glanced at the clock, then at the untouched plate of noodles, and sighed. "He said he'd be home by seven," she murmured, reaching for her phone for the third time.`,
      q: 'How does Aunt Mei most probably feel?',
      options: ['Relieved', 'Worried', 'Bored', 'Amused'],
      answer: 1,
      explain: 'Show-don\'t-tell clues: checking the clock, sighing, reaching for the phone repeatedly, someone late → worried.',
      source: 'SPM-style (original)'
    },

    // ---------- r4: Part 4 gapped text ----------
    {
      id: 'bi-018', ch: 'r4', type: 'struct', format: 'p1', diff: 2, marks: 6,
      stimulus: `Six sentences have been removed from the article. Choose from sentences **A–H** the one which fits each gap. There are **two extra** sentences.

**Our Mini Forest**

Last year, our school decided to turn an empty field behind the science block into a mini forest. **(1)** ___ The idea came from a Form 4 student who had read about a method in which native trees are planted very close together so that they grow quickly.

The first challenge was the soil. **(2)** ___ We therefore spent two weekends mixing in compost and dried leaves donated by a nearby farm.

Next, we had to choose the right species. **(3)** ___ With help from a forestry officer, we selected thirty-five native species, including some that attract birds and butterflies.

On planting day, more than two hundred students, teachers and parents turned up. **(4)** ___ By the end of the afternoon, over 1,500 seedlings were in the ground.

Looking after the young trees was harder than planting them. **(5)** ___ A roster was drawn up so that each class took turns to water and weed the plot.

Today, just eighteen months later, some of the trees are taller than the classroom windows. **(6)** ___ For many of us, the project has shown that even a small group of people can make a visible difference.

**A** It was hard and compacted, and almost nothing grew in it.
**B** Each of them was given a seedling, a small spade and a short demonstration.
**C** Many people doubted that a forest could grow on such a small piece of land.
**D** During the dry months, the seedlings needed water every day.
**E** Birds have returned, and the field is now a favourite spot for nature lessons.
**F** Exotic ornamental plants were chosen because they were cheaper.
**G** This was important because not every tree suits the local climate.
**H** The canteen was also renovated in the same year.`,
      q: 'Choose the correct sentence (A–H) for each gap.',
      parts: [
        { label: '(1)', type: 'mcq', marks: 1, q: 'Gap (1)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 2, explain: 'C introduces doubts about a forest on "such a small piece of land"; the next sentence explains the fast-growing method that answers those doubts.' },
        { label: '(2)', type: 'mcq', marks: 1, q: 'Gap (2)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 0, explain: '*It* = the soil. "Hard and compacted" explains why they "therefore" added compost.' },
        { label: '(3)', type: 'mcq', marks: 1, q: 'Gap (3)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 6, explain: '*This* = choosing the right species; "not every tree suits the local climate" leads to selecting native species. F contradicts "native".' },
        { label: '(4)', type: 'mcq', marks: 1, q: 'Gap (4)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 1, explain: '*Each of them* = the 200 students, teachers and parents; seedlings and spades lead to "1,500 seedlings were in the ground".' },
        { label: '(5)', type: 'mcq', marks: 1, q: 'Gap (5)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 3, explain: 'Daily watering in dry months explains why a watering roster was needed.' },
        { label: '(6)', type: 'mcq', marks: 1, q: 'Gap (6)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 4, explain: 'E describes the present result (*have returned*, *is now*), matching "Today, just eighteen months later". H is unrelated.' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-019', ch: 'r4', type: 'struct', format: 'p1', diff: 3, kbat: true, marks: 6,
      stimulus: `Six sentences have been removed from the article. Choose from **A–H** the one which fits each gap. There are **two extra** sentences.

**How I Got Hooked on Coding**

I wrote my first line of code when I was sixteen, mostly because I was bored during the school holidays. **(1)** ___

I started with free online lessons that taught the basics through small puzzles. **(2)** ___ Instead of giving up, I joined an online forum where beginners could post their questions.

The members there were surprisingly patient. **(3)** ___ Within a month, I had built a simple quiz game about Malaysian history for my younger brother.

**(4)** ___ He played it every evening and even asked me to add a scoreboard, which meant learning something completely new.

Encouraged, I entered a state-level hackathon the following year. **(5)** ___ What mattered more was what I took away: how to work in a team under pressure.

**(6)** ___ If you are curious about coding, my advice is simple: start small, ask questions and do not be afraid of mistakes.

**A** Our team did not win, but we were placed fourth out of thirty.
**B** To my surprise, he loved it.
**C** At first, I did not expect it to become a passion.
**D** However, after a week, I got stuck on a problem I simply could not solve.
**E** Rather than giving me answers, they showed me how to find the mistakes myself.
**F** Today, I am studying computer science at university.
**G** My parents bought me an expensive laptop as a reward.
**H** The forum charged a monthly fee that I could not afford.`,
      q: 'Choose the correct sentence (A–H) for each gap.',
      parts: [
        { label: '(1)', type: 'mcq', marks: 1, q: 'Gap (1)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 2, explain: 'C contrasts "bored" beginnings with later passion; *it* = coding.' },
        { label: '(2)', type: 'mcq', marks: 1, q: 'Gap (2)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 3, explain: 'Getting stuck explains "Instead of giving up".' },
        { label: '(3)', type: 'mcq', marks: 1, q: 'Gap (3)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 4, explain: '*They* = the members; showing how to find mistakes illustrates "surprisingly patient". H contradicts the writer joining and benefiting.' },
        { label: '(4)', type: 'mcq', marks: 1, q: 'Gap (4)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 1, explain: '*He/it* = the brother and the quiz game; the next sentence continues "He played it every evening".' },
        { label: '(5)', type: 'mcq', marks: 1, q: 'Gap (5)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 0, explain: 'The result of the hackathon; "What mattered more" contrasts with not winning.' },
        { label: '(6)', type: 'mcq', marks: 1, q: 'Gap (6)', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], answer: 5, explain: 'F brings the story to the present before the advice. G has no link to the paragraph before or after.' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-020', ch: 'r4', type: 'mcq', format: 'p1', diff: 1, marks: 1,
      stimulus: `> The school canteen has started selling fruit instead of fried snacks. ___`,
      q: 'Which sentence best follows?',
      options: ['As a result, fewer students now buy unhealthy food during recess.', 'However, the canteen has been selling fruit.', 'These snacks have been sold since last year.', 'For example, the canteen is closed.'],
      answer: 0,
      explain: '*As a result* signals a consequence of the change. B repeats the idea with a wrong contrast; C contradicts "instead of"; D is not an example.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-021', ch: 'r4', type: 'mcq', format: 'p1', diff: 2, marks: 1,
      q: 'In a gapped-text task, one option begins: "This second attempt was far more successful." What must come BEFORE this sentence in the text?',
      options: ['A description of a first attempt', 'The conclusion of the article', 'A list of reasons for success', 'The introduction of a new character'],
      answer: 0,
      explain: '*This second attempt* points back to an attempt already mentioned, and *second* requires a first one.',
      source: 'SPM-style (original)'
    },

    // ---------- r5: Part 5 matching + note completion ----------
    {
      id: 'bi-022', ch: 'r5', type: 'struct', format: 'p1s', diff: 2, marks: 8,
      stimulus: `Five teenagers talk about how they spend their free time.

**A — Aisyah, 17:** I volunteer at an animal shelter every Saturday. Cleaning cages isn't glamorous, but seeing a rescued cat adopted makes it worthwhile. I've also learnt to stay calm with frightened animals, which has made me more patient with my little sisters!

**B — Ken, 16:** I help at my parents' printing shop during the holidays. I mostly handle orders on the computer. The best part is designing banners — some customers now ask for me by name. The downside is that I rarely get a proper break.

**C — Priya, 17:** I tutor two primary pupils in Mathematics online. Preparing lessons takes longer than the lessons themselves! It has made me realise how much I enjoy explaining things, so I'm considering a career in teaching.

**D — Farid, 16:** I deliver newspapers on my bicycle before school. Waking up at 5.30 a.m. is tough, but I'm saving for a laptop. Managing my own money has taught me to think twice before buying snacks.

**E — Mei, 17:** I joined a beach clean-up group last year. We record every piece of rubbish we collect and send the data to a university researcher. Knowing our work helps real research keeps me motivated.`,
      q: 'Questions (a)–(d): Which person (A–E)…? Questions (e)–(h): Complete the notes with ONE word from the texts.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Who is thinking about a future job because of the experience?', options: ['A (Aisyah)', 'B (Ken)', 'C (Priya)', 'D (Farid)', 'E (Mei)'], answer: 2, explain: 'Priya: "I\'m considering a career in teaching."' },
        { label: '(b)', type: 'mcq', marks: 1, q: 'Who mentions that customers now recognise his or her skills?', options: ['A (Aisyah)', 'B (Ken)', 'C (Priya)', 'D (Farid)', 'E (Mei)'], answer: 1, explain: 'Ken: "some customers now ask for me by name."' },
        { label: '(c)', type: 'mcq', marks: 1, q: 'Who has become more careful with spending?', options: ['A (Aisyah)', 'B (Ken)', 'C (Priya)', 'D (Farid)', 'E (Mei)'], answer: 3, explain: 'Farid: "taught me to think twice before buying snacks."' },
        { label: '(d)', type: 'mcq', marks: 1, q: 'Who says the activity contributes to scientific study?', options: ['A (Aisyah)', 'B (Ken)', 'C (Priya)', 'D (Farid)', 'E (Mei)'], answer: 4, explain: 'Mei: data sent "to a university researcher… helps real research".' },
        { label: '(e)', type: 'fill', marks: 1, q: 'Working with frightened animals has made Aisyah more ___.', blanks: [['patient']], explain: '"…made me more patient with my little sisters".' },
        { label: '(f)', type: 'fill', marks: 1, q: 'Ken\'s favourite task is designing ___.', blanks: [['banners']], explain: '"The best part is designing banners." Plural, as in the text.' },
        { label: '(g)', type: 'fill', marks: 1, q: 'Priya spends more time ___ lessons than teaching them.', blanks: [['preparing']], explain: '"Preparing lessons takes longer than the lessons themselves." The gap after *spends more time* needs an -ing form.' },
        { label: '(h)', type: 'fill', marks: 1, q: 'Mei\'s group sends the ___ it collects to a researcher.', blanks: [['data']], explain: '"…send the data to a university researcher."' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-023', ch: 'r5', type: 'struct', format: 'p1s', diff: 3, kbat: true, marks: 6,
      stimulus: `Four students review revision apps.

**A — FlashBuddy:** FlashBuddy turns my notes into flashcards automatically. The free version limits you to 50 cards a day, which is enough for me. My only complaint is the bright colours, which strain my eyes at night.

**B — QuizRush:** QuizRush lets you compete against friends in live quizzes. It's addictive — maybe too addictive. I once spent an hour "revising" and then realised I'd only answered questions I already knew.

**C — Focusly:** Focusly isn't really a study app; it locks your phone for a set time. Every completed session grows a virtual tree. I've finished more homework this month than in the whole of last term.

**D — NoteNest:** NoteNest syncs between my phone and laptop, so I never lose my notes. Unfortunately, it needs an internet connection to open files, which is a problem on the bus home.`,
      q: 'Questions (a)–(c): Which app (A–D)…? Questions (d)–(f): Complete with ONE word from the texts.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Which app helps the user avoid distractions?', options: ['A FlashBuddy', 'B QuizRush', 'C Focusly', 'D NoteNest'], answer: 2, explain: 'Focusly "locks your phone for a set time".' },
        { label: '(b)', type: 'mcq', marks: 1, q: 'Which app may give users a false sense of progress?', options: ['A FlashBuddy', 'B QuizRush', 'C Focusly', 'D NoteNest'], answer: 1, explain: 'Inference: an hour of "revising" spent only on questions already known — it felt like studying but taught nothing new.' },
        { label: '(c)', type: 'mcq', marks: 1, q: 'Which app does not work well offline?', options: ['A FlashBuddy', 'B QuizRush', 'C Focusly', 'D NoteNest'], answer: 3, explain: 'NoteNest "needs an internet connection to open files".' },
        { label: '(d)', type: 'fill', marks: 1, q: 'FlashBuddy uses bright ___ that are uncomfortable at night.', blanks: [['colours', 'colors']], explain: '"…the bright colours, which strain my eyes at night."' },
        { label: '(e)', type: 'fill', marks: 1, q: 'In Focusly, each finished session grows a virtual ___.', blanks: [['tree']], explain: '"Every completed session grows a virtual tree."' },
        { label: '(f)', type: 'fill', marks: 1, q: 'NoteNest ___ notes between a phone and a laptop.', blanks: [['syncs', 'synchronises', 'synchronizes']], explain: '"NoteNest syncs between my phone and laptop." Third-person -s is needed.' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-024', ch: 'r5', type: 'fill', format: 'p1s', diff: 1, marks: 3,
      stimulus: `> **SMK SERI MUTIARA PHOTOGRAPHY CLUB — PHOTO WALK**
> Heritage Streets of George Town
> **Date:** Saturday, 16 August **Meet:** Main gate, 7.00 a.m.
> **Bring:** camera or phone, water bottle, hat
> **Fee:** RM10 (includes bus and breakfast)
> Register with Cikgu Lim by 8 August.`,
      q: 'Complete the notes with ONE word or number from the poster.\n\nThe fee covers transport and ___.\n\nParticipants gather at the main ___ at 7 a.m.\n\nStudents must sign up with Cikgu ___.',
      blanks: [['breakfast'], ['gate'], ['Lim']],
      explain: 'Fee "includes bus and breakfast"; "Meet: Main gate"; "Register with Cikgu Lim". Copy spelling exactly.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-025', ch: 'r5', type: 'match', format: 'p1', diff: 2, marks: 5,
      q: 'Matching tasks depend on paraphrase. Match what each speaker SAYS to what the speaker MEANS.',
      pairs: [
        ['"I\'d rather keep my account private than have thousands of followers."', 'prefers privacy to popularity'],
        ['"It didn\'t live up to what I\'d expected."', 'was disappointed'],
        ['"Once I start it, I just can\'t put it down."', 'finds it very engaging'],
        ['"Honestly, it isn\'t worth what they charge."', 'thinks it is overpriced'],
        ['"I\'m in two minds about joining."', 'is undecided']
      ],
      explain: 'Statements in Part 5 (and Listening Part 3) rarely repeat the text\'s words. Learn common idioms: *live up to* (meet expectations), *can\'t put it down* (very engaging), *in two minds* (undecided).',
      source: 'SPM-style (original)'
    },

    // ---------- g1: tenses & SVA ----------
    {
      id: 'bi-026', ch: 'g1', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'My grandparents ___ in Kuantan since 1995.',
      options: ['live', 'are living', 'have lived', 'lived'],
      answer: 2,
      explain: '*Since 1995* = from a past point up to now → present perfect.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-027', ch: 'g1', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'I ___ my homework when the power suddenly went off.',
      options: ['was doing', 'did', 'have done', 'am doing'],
      answer: 0,
      explain: 'A longer action in progress (past continuous) interrupted by a short one (past simple *went off*).',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-028', ch: 'g1', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'By the time the ambulance arrived, the crowd ___.',
      options: ['has left', 'had left', 'leaves', 'was leave'],
      answer: 1,
      explain: 'The crowd left BEFORE the ambulance arrived → past perfect *had left*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-029', ch: 'g1', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'Neither the coach nor the players ___ happy with the result.',
      options: ['was', 'were', 'is', 'has been'],
      answer: 1,
      explain: 'With *neither… nor*, the verb agrees with the nearer subject: *the players* (plural) → *were*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-030', ch: 'g1', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'One of the students on the trip ___ lost his passport.',
      options: ['have', 'has', 'are', 'were'],
      answer: 1,
      explain: 'The subject is *One* (singular) — *of the students on the trip* only describes it → *has*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-031', ch: 'g1', type: 'fill', format: 'gram', diff: 2, marks: 1,
      q: 'Every member of the choir ___ (be) expected to attend tomorrow\'s rehearsal.',
      blanks: [['is']],
      explain: '*Every member* is singular → *is*. Ignore *of the choir*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-032', ch: 'g1', type: 'fill', format: 'gram', diff: 2, marks: 1,
      q: 'I will text you as soon as I ___ (reach) the station.',
      blanks: [['reach']],
      explain: 'In future time clauses after *as soon as / when / after / if*, use the present simple, not *will reach*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-033', ch: 'g1', type: 'fill', format: 'gram', diff: 1, marks: 1,
      q: 'Correct the error: "Last Sunday, my family and I goes to the zoo." The correct verb is ___.',
      blanks: [['went']],
      explain: '*Last Sunday* = finished past time → past simple *went*. (Also, *my family and I* is plural, so *goes* is wrong twice over.)',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-034', ch: 'g1', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'The information you gave me ___ very useful.',
      options: ['were', 'are', 'was', 'have'],
      answer: 2,
      explain: '*Information* is uncountable → singular verb. Past context (*gave*) → *was*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-035', ch: 'g1', type: 'mcq', format: 'gram', diff: 2, kbat: true, marks: 1,
      q: 'Which sentence is grammatically correct?',
      options: ['She has visited Melaka last year.', 'She visited Melaka last year.', 'She has visit Melaka last year.', 'She was visited Melaka last year.'],
      answer: 1,
      explain: '*Last year* is a finished time → past simple. The present perfect cannot be used with a finished time expression; *has visit* has the wrong participle; *was visited* is passive and makes no sense here.',
      source: 'SPM-style (original)'
    },

    // ---------- g2: articles, prepositions, pronouns, quantifiers ----------
    {
      id: 'bi-036', ch: 'g2', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'She hopes to become ___ engineer after graduating from ___ university in Johor.',
      options: ['a … an', 'an … a', 'an … an', 'a … a'],
      answer: 1,
      explain: '*An* before the vowel sound /e/ in *engineer*; *a* before *university*, which begins with the consonant sound /j/ ("you").',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-037', ch: 'g2', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'Our sports day will be held ___ Saturday, 12 July, ___ 8 a.m.',
      options: ['on … at', 'in … at', 'at … on', 'on … in'],
      answer: 0,
      explain: '*On* + days/dates; *at* + clock times.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-038', ch: 'g2', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'Hakim is very good ___ solving puzzles.',
      options: ['in', 'at', 'on', 'with'],
      answer: 1,
      explain: 'Dependent preposition: *good at* (an activity). "Good in" is a common Malaysian-learner error.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-039', ch: 'g2', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'The committee members discussed ___ for over an hour.',
      options: ['about the problem', 'the problem', 'on the problem', 'regarding about the problem'],
      answer: 1,
      explain: '*Discuss* takes a direct object — no preposition. (Compare: *have a discussion **about** the problem*.)',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-040', ch: 'g2', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'There is very ___ milk left, so please buy some on your way home.',
      options: ['little', 'few', 'many', 'a few'],
      answer: 0,
      explain: '*Milk* is uncountable → *little* (almost none). *Few/many/a few* are for countable plurals; "very a few" is not possible.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-041', ch: 'g2', type: 'fill', format: 'gram', diff: 2, marks: 1,
      q: '___ (few) students attended the talk this year than last year because it clashed with the exams.',
      blanks: [['Fewer']],
      explain: 'Comparative of *few* is *fewer* (countable: students). *Less students* is incorrect in formal English.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-042', ch: 'g2', type: 'fill', format: 'gram', diff: 1, marks: 1,
      q: 'The kitten licked ___ paw clean. (it / its / it\'s)',
      blanks: [['its']],
      explain: '*Its* = possessive (belonging to it). *It\'s* = it is / it has.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-043', ch: 'g2', type: 'fill', format: 'gram', diff: 1, marks: 1,
      q: 'The children really enjoyed ___ at the beach party. (reflexive pronoun)',
      blanks: [['themselves']],
      explain: '*Enjoy oneself* → *themselves* for *the children*. "Theirselves" is not a word.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-044', ch: 'g2', type: 'mcq', format: 'gram', diff: 2, kbat: true, marks: 1,
      q: 'Which sentence is correct?',
      options: ['I go to the school by the bus every day.', 'I go to school by bus every day.', 'I go to a school by a bus every day.', 'I go to school by the bus everyday.'],
      answer: 1,
      explain: '*Go to school* (for its usual purpose) and *by bus* take no article. *Everyday* (one word) is an adjective (*everyday life*); the adverb phrase is *every day*.',
      source: 'SPM-style (original)'
    },

    // ---------- g3: conditionals, passive, reported speech, relatives, modals ----------
    {
      id: 'bi-045', ch: 'g3', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'If I ___ you, I would apologise to her immediately.',
      options: ['were', 'am', 'will be', 'would be'],
      answer: 0,
      explain: 'Second conditional for advice: *If I were you…* (formal standard uses *were* for all persons).',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-046', ch: 'g3', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'If we ___ earlier, we would have caught the last train.',
      options: ['left', 'had left', 'have left', 'would leave'],
      answer: 1,
      explain: 'Third conditional (unreal past): *If* + past perfect, *would have* + past participle.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-047', ch: 'g3', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'The results of the competition ___ next Monday.',
      options: ['will announce', 'will be announced', 'are announcing', 'announced'],
      answer: 1,
      explain: 'Results cannot announce themselves → passive. Future: *will be* + past participle.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-048', ch: 'g3', type: 'fill', format: 'gram', diff: 2, marks: 1,
      q: 'The new hall ___ (open) by the State Education Director last week.',
      blanks: [['was opened']],
      explain: 'Past passive: *was* + past participle. *Last week* → past.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-049', ch: 'g3', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      stimulus: '> "Where do you live?" the officer asked me.',
      q: 'The officer asked me ___.',
      options: ['where did I live', 'where I lived', 'where do I live', 'where I live did'],
      answer: 1,
      explain: 'Reported questions use statement word order (subject + verb) and no *do/did*; tense backshifts present → past.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-050', ch: 'g3', type: 'fill', format: 'gram', diff: 2, marks: 1,
      stimulus: '> "Don\'t touch the wires," the technician said to us.',
      q: 'The technician told us ___ the wires.',
      blanks: [['not to touch']],
      explain: 'Reported commands: *tell* + object + *(not) to* + base verb.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-051', ch: 'g3', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'My father, ___ is a nurse, often works night shifts.',
      options: ['that', 'who', 'which', 'whose'],
      answer: 1,
      explain: 'Non-defining relative clause (between commas) about a person → *who*. *That* cannot be used in non-defining clauses.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-052', ch: 'g3', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'That is the boy ___ bicycle was stolen yesterday.',
      options: ['who', 'whose', 'whom', 'which'],
      answer: 1,
      explain: 'Possession (the boy\'s bicycle) → *whose*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-053', ch: 'g3', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'You ___ bring food to the camp because all meals will be provided.',
      options: ['mustn\'t', 'don\'t have to', 'can\'t', 'shouldn\'t'],
      answer: 1,
      explain: 'The reason (meals provided) shows it is NOT NECESSARY → *don\'t have to*. *Mustn\'t / can\'t* mean it is forbidden.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-054', ch: 'g3', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'The lights are off and nobody is answering the door. They ___ be out.',
      options: ['must', 'can\'t', 'should', 'needn\'t'],
      answer: 0,
      explain: 'Logical deduction (we are almost sure it is true) → *must*.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-055', ch: 'g3', type: 'mcq', format: 'gram', diff: 2, kbat: true, marks: 1,
      q: 'Which sentence uses the passive voice correctly?',
      options: ['The posters were design by the art club.', 'The posters were designed by the art club.', 'The posters was designed by the art club.', 'The posters designed by the art club yesterday.'],
      answer: 1,
      explain: 'Passive = *be* (agreeing with *posters* → *were*) + past participle (*designed*). D has no main verb.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-056', ch: 'g3', type: 'fill', format: 'gram', diff: 3, marks: 1,
      q: 'I failed the quiz. I ___ (should / study) harder.',
      blanks: [['should have studied']],
      explain: 'Past regret: *should have* + past participle. Never "should of".',
      source: 'SPM-style (original)'
    },

    // ---------- v1: vocabulary ----------
    {
      id: 'bi-057', ch: 'v1', type: 'match', format: 'gram', diff: 1, marks: 5,
      q: 'Match each word to its NOUN form.',
      pairs: [['decide', 'decision'], ['improve', 'improvement'], ['able', 'ability'], ['kind', 'kindness'], ['succeed', 'success']],
      explain: 'Common noun suffixes: -sion/-tion, -ment, -ity, -ness. *Succeed* (v) → *success* (n) → *successful* (adj).',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-058', ch: 'v1', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'The fireworks display was ___. Everyone cheered and clapped.',
      options: ['breathtaking', 'breathtaken', 'breathtakingly', 'breathtaker'],
      answer: 0,
      explain: 'After *was* we need an adjective → *breathtaking* (= amazing). The others are an invented form, an adverb and a noun-like non-word.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-059', ch: 'v1', type: 'fill', format: 'gram', diff: 1, marks: 1,
      q: 'Throwing rubbish into rivers is ___ (legal) and can lead to a heavy fine.',
      blanks: [['illegal']],
      explain: '*Il-* is used before words starting with *l*: illegal, illogical, illiterate.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-060', ch: 'v1', type: 'fill', format: 'gram', diff: 2, marks: 1,
      q: 'It was ___ (responsible) of him to leave the laboratory door unlocked.',
      blanks: [['irresponsible']],
      explain: '*Ir-* before *r*: irresponsible, irregular, irrelevant. "Unresponsible" is not a word.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-061', ch: 'v1', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'Too much screen time at night can ___ your sleep.',
      options: ['affect', 'effect', 'infect', 'reflect'],
      answer: 0,
      explain: 'A verb meaning "influence" is needed → *affect*. *Effect* is normally a noun (*a harmful effect*).',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-062', ch: 'v1', type: 'mcq', format: 'gram', diff: 1, marks: 1,
      q: 'Could you ___ me your calculator for the test?',
      options: ['borrow', 'lend', 'rent', 'take'],
      answer: 1,
      explain: 'You *lend* something **to** someone; you *borrow* something **from** someone. "Borrow me" is a common error.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-063', ch: 'v1', type: 'mcq', format: 'gram', diff: 2, marks: 1,
      q: 'Our club organised a charity run to ___ funds for the orphanage.',
      options: ['raise', 'rise', 'arise', 'grow'],
      answer: 0,
      explain: 'Collocation *raise funds*. *Raise* takes an object; *rise* and *arise* do not.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-064', ch: 'v1', type: 'match', format: 'gram', diff: 2, marks: 4,
      q: 'Match each Malaysian-English (informal) sentence to its standard English version for formal writing.',
      pairs: [
        ['Open the light, please.', 'Switch on the light, please.'],
        ['I very like this song.', 'I really like this song.'],
        ['Can or not?', 'Is that possible?'],
        ['I eat already.', 'I have already eaten.']
      ],
      explain: 'These are fine in casual Malaysian conversation but count as errors in SPM writing.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-065', ch: 'v1', type: 'fill', format: 'gram', diff: 3, kbat: true, marks: 1,
      q: 'The success of the carnival was due to the ___ (coordinate) efforts of the whole team.',
      blanks: [['coordinated', 'co-ordinated']],
      explain: 'An adjective is needed before the noun *efforts* → *coordinated* (organised to work together).',
      source: 'SPM-style (original)'
    },

    // ---------- w1: Paper 2 Part 1 email ----------
    {
      id: 'bi-066', ch: 'w1', type: 'open', format: 'p2s', diff: 1, marks: 20,
      stimulus: `> **From:** Sara
> Hi! How's your new school? How do you get there every day? What's your favourite subject, and why? I'm thinking of joining a club next year — which one would you recommend?`,
      q: 'Write a reply to Sara in about **80 words**.',
      bands: BANDS_P1,
      model: `Hi Sara,

Thanks for your message! I'm settling in well at my new school. I usually cycle there with my neighbour because it's only ten minutes away. My favourite subject is Biology, since our teacher does lots of experiments and makes every topic interesting. If you want to join a club, I'd recommend the Debate Club. It has helped me become more confident when I speak in public. Tell me about your school too!

Love,
Aina

*All three questions answered (transport, subject + reason, club + reason); friendly tone; linkers because, since, if.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-067', ch: 'w1', type: 'open', format: 'p2s', diff: 1, marks: 20,
      stimulus: `> **From:** Wei Jie
> Let's go cycling around the lake this Saturday! Where should we meet? What time is best? And what should we bring?`,
      q: 'Write a reply to Wei Jie in about **80 words**.',
      bands: BANDS_P1,
      model: `Hi Wei Jie,

Great idea — count me in for Saturday! Let's meet at the car park near the lake, because it's easy for everyone to find. Is 7 a.m. okay? It'll still be cool then, so we won't get too tired. Remember to bring a water bottle, your helmet and some light snacks. I'll bring a small first-aid kit, just in case. If it rains, we can have breakfast at the café by the lake instead. Can't wait!

Cheers,
Hakim

*Where ✔ (+ reason), when ✔ (+ reason), what to bring ✔ (+ an extra offer). Contractions are fine in an informal email.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-068', ch: 'w1', type: 'open', format: 'p2s', diff: 2, kbat: true, marks: 20,
      stimulus: `> **From:** Kumar
> Mei Ling's birthday is next week! Should we buy her a book or a phone case? Why? And how should we share the cost?`,
      q: 'Write a reply to Kumar in about **80 words**. You must make a choice and justify it.',
      bands: BANDS_P1,
      model: `Hi Kumar,

Thanks for reminding me about Mei Ling's birthday! I think we should get her a book. She has just finished the last novel in her favourite fantasy series, so a new one by the same author would be perfect. A phone case is nice, but she bought a new one last month. The book costs about RM40, so let's split it equally. I can pay first and you can pass me your share at school.

See you,
Daniel

*Choice ✔, reason ✔ plus a reason for rejecting the other option (shows evaluation), cost-sharing plan ✔.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-069', ch: 'w1', type: 'open', format: 'p2s', diff: 1, marks: 20,
      stimulus: `Your aunt, Mak Ngah, sent you a power bank for your birthday. Write an email to her. In your email:
- thank her for the gift
- tell her how you have used it
- invite her to visit during the school holidays`,
      q: 'Write your email in about **80 words**.',
      bands: BANDS_P1,
      model: `Dear Mak Ngah,

Thank you so much for the power bank you sent for my birthday. It has already been really useful! Last week, during our school trip to Cameron Highlands, my phone battery ran out, and I used it to charge my phone so I could take photos of the tea plantations. Would you like to visit us during the December holidays? Mak says you can stay with us as long as you like.

Love,
Irfan

*Slightly more polite register for an older relative (Dear…, Thank you so much), but still warm and informal.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-070', ch: 'w1', type: 'mcq', format: 'p2s', diff: 1, marks: 1,
      q: 'Which is the most suitable opening for a Part 1 email to a close friend?',
      options: ['Dear Sir/Madam, I am writing to complain about…', 'Hi Farah, thanks for your message — it was great to hear from you!', 'To whom it may concern,', 'Yo Farah, wassup?'],
      answer: 1,
      explain: 'Friendly but correct register. A and C are formal letter openings (wrong register); D is slang.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-071', ch: 'w1', type: 'mcq', format: 'p2s', diff: 2, marks: 1,
      q: 'The Part 1 task asks for four points. A student answers three of them very well with excellent grammar. Which criterion is MOST affected?',
      options: ['Content', 'Organisation', 'Language', 'None — the language makes up for it'],
      answer: 0,
      explain: 'A missing point means the target reader is not fully informed → Content score drops. Each criterion is marked separately, so good language cannot compensate.',
      source: 'SPM-style (original)'
    },

    // ---------- w2: Paper 2 Part 2 guided writing ----------
    {
      id: 'bi-072', ch: 'w2', type: 'open', format: 'p2g', diff: 2, marks: 20,
      stimulus: `Your English teacher has asked you to write an essay about **public transport**. In your essay, write about:
- how you usually travel to school
- why public transport is important
- how more people can be encouraged to use it`,
      q: 'Write your essay in about **125–150 words**. Use all the notes and give reasons for your point of view.',
      bands: BANDS_P2,
      model: `**Getting Around the Smart Way**

Every morning, our roads are packed with cars carrying only one person. Public transport offers a better way to travel.

I usually take the bus to school with my friends. It is cheap, and I can revise or chat during the journey instead of sitting in a traffic jam.

Public transport is important because it reduces traffic congestion and air pollution. One bus can replace dozens of cars, which means fewer harmful emissions and shorter journeys for everyone.

To encourage more people to use it, the authorities could make fares more affordable and run buses and trains more frequently. Bus stops should also be safe, sheltered and well lit so that people feel comfortable waiting there.

In conclusion, if public transport becomes more convenient, more people will choose it, and our cities will be cleaner and less congested.

*Five paragraphs; all notes ✔; complex forms: relative clause (which means), first conditional, purpose clause (so that); no contractions.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-073', ch: 'w2', type: 'open', format: 'p2g', diff: 2, marks: 20,
      stimulus: `Your school magazine is publishing essays on **friendship**. In your essay, write about:
- a good friend you have and what he or she is like
- why friends are important to teenagers
- how to keep a friendship strong`,
      q: 'Write your essay in about **125–150 words**.',
      bands: BANDS_P2,
      model: `**The Value of True Friends**

The teenage years can be exciting but also stressful. Having good friends makes this stage of life much easier.

My best friend, Nadia, is cheerful, honest and always willing to listen. When I was struggling with Additional Mathematics last year, she spent her recess explaining difficult topics to me.

Friends are important to teenagers because they provide emotional support. We often feel more comfortable sharing our worries with people of our own age. Good friends also encourage us to try new things, such as joining a club or entering a competition.

To keep a friendship strong, we should communicate openly and respect each other's differences. It is also important to make time for each other, even when we are busy with schoolwork.

In short, true friends are a treasure, and they deserve our time and effort.

*Note 1 is developed with a specific example (P–E–E); notes 2 and 3 each have two ideas.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-074', ch: 'w2', type: 'open', format: 'p2g', diff: 2, kbat: true, marks: 20,
      stimulus: `Your teacher has asked you to write an essay on **healthy eating at school**. In your essay, write about:
- what you usually eat during recess
- why healthy eating is important for students
- how the school canteen can help`,
      q: 'Write your essay in about **125–150 words**.',
      bands: BANDS_P2,
      model: `**Eating Well at School**

Recess is short, but what we eat during those twenty minutes affects how we feel for the rest of the day.

I usually eat nasi lemak or fried noodles at recess because they are cheap and filling. However, I often feel sleepy during the next lesson.

Healthy eating is important because it gives us steady energy and helps us concentrate in class. In the long run, a balanced diet also reduces the risk of obesity and diabetes.

The school canteen can help by offering more fruit, vegetables and wholemeal options at affordable prices. It could also sell fewer sugary drinks and display simple posters about balanced meals.

To sum up, small changes at the canteen can lead to healthier and more alert students.

*Honest personal answer to note 1 is fine — Content rewards relevance, not "perfect" behaviour. The link "However, I often feel sleepy" sets up note 2 naturally.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-075', ch: 'w2', type: 'mcq', format: 'p2g', diff: 1, marks: 1,
      q: 'A student answers all three Part 2 notes in ONE long paragraph. Which advice is most relevant?',
      options: ['Add more difficult vocabulary.', 'Use paragraphs: an introduction, one paragraph per note and a conclusion.', 'Write at least 300 words.', 'Use more contractions to sound natural.'],
      answer: 1,
      explain: 'The 2024 examiners\' report described an average script that used only one paragraph for all three contents — this limits the Organisation score.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-076', ch: 'w2', type: 'mcq', format: 'p2g', diff: 2, kbat: true, marks: 1,
      q: 'In which sentence is the linker used WRONGLY?',
      options: ['Reading is fun. Furthermore, it improves our vocabulary.', 'Music relaxes me. On the other hand, it helps me focus when I study.', 'I was exhausted; however, I finished the essay.', 'It rained heavily, so the match was postponed.'],
      answer: 1,
      explain: '*On the other hand* introduces a CONTRASTING point. "Relaxes me" and "helps me focus" are both positive → use *Furthermore / In addition*. The 2024 examiners\' report noted this exact misuse.',
      source: 'SPM-style (original)'
    },

    // ---------- w3: Part 3 story ----------
    {
      id: 'bi-077', ch: 'w3', type: 'open', format: 'p2e', diff: 2, marks: 20,
      stimulus: `Your teacher has asked you to write a story for the school magazine. Your story must begin with:

*"Nobody noticed when the lift stopped between the fourth and fifth floors — nobody except Arjun."*

In your story, you must:
- explain why Arjun was in the lift
- describe how he got out`,
      q: 'Write your story in about **200–250 words**.',
      bands: BANDS_P3,
      model: `Nobody noticed when the lift stopped between the fourth and fifth floors — nobody except Arjun. He was alone, holding a birthday cake for his grandmother, who lived on the ninth floor of the old block of flats.

At first, he pressed every button. Nothing happened. The single bulb above him flickered, and the air grew warm and heavy. His phone showed no signal.

Then he remembered his father's advice: "If you are ever stuck, stay calm and make yourself heard." Arjun took a deep breath and pressed the alarm button. A faint bell rang somewhere below, but nobody came.

Gathering his courage, he knocked on the metal door in a steady rhythm — three knocks, a pause, three more. After what felt like hours, a voice called out, "Is someone in there?" It was Encik Zul, the caretaker, who had been sweeping the stairs.

Twenty minutes later, a technician arrived and carefully lowered the lift to the fourth floor. When the doors finally slid open, Arjun stepped out, sweaty but smiling. The cake was slightly squashed, yet his grandmother hugged him as if he had brought her treasure.

That evening, as the family sang "Happy Birthday", Arjun realised that staying calm had been the best gift he could give himself.

*Opening words exact ✔; why in the lift (cake for grandmother) ✔; how he got out (alarm, knocking, caretaker, technician) ✔; past perfect, relative clauses, show-don't-tell.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-078', ch: 'w3', type: 'open', format: 'p2e', diff: 3, kbat: true, marks: 20,
      stimulus: `Write a story for an online youth magazine. Your story must begin with:

*"I should never have opened that message."*

In your story, you must:
- describe what the message said
- explain what happened as a result`,
      q: 'Write your story in about **200–250 words**.',
      bands: BANDS_P3,
      model: `I should never have opened that message. It arrived late on a Sunday night from an unknown number, with a bright red heading: "Congratulations! You have won RM5,000!"

Below it was a link and a request to enter bank details to "claim the prize". I was tired and excited, and for a moment I imagined buying a new laptop. Without thinking, I clicked the link and began typing the number of the card my mother let me use for online classes.

Just as I was about to press "Submit", a warning popped up: "This site may be unsafe." My stomach dropped. I closed the page and ran to my mother.

Instead of scolding me, she calmly called the bank's hotline. The officer explained that it was a common scam and blocked the card as a precaution. Fortunately, no money had been taken. However, Mak had to wait a week for a new card, and I had to explain to my younger brother why his football boots could not be ordered yet.

Since then, I have never clicked on a link from a stranger. I have even shown my classmates how to recognise fake messages: unbelievable prizes, urgent deadlines and requests for personal details. That single message taught me that if something seems too good to be true, it usually is.

*First-person point of view kept from the opening; both prompts covered; a clear lesson at the end without preaching.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-079', ch: 'w3', type: 'open', format: 'p2e', diff: 2, marks: 20,
      stimulus: `Write a story with the title **"A Helping Hand"** for your school magazine. In your story, you must:
- describe a time when you needed help
- explain what you learnt from the experience`,
      q: 'Write your story in about **200–250 words**.',
      bands: BANDS_P3,
      model: `**A Helping Hand**

The rain was so heavy that I could barely see the road. I was cycling home from tuition when my front tyre hit a pothole and burst with a loud bang. I tumbled onto the wet tarmac, scraping my knee and sending my books into a muddy puddle.

Cars rushed past, splashing water over me. Nobody stopped. I sat on the roadside, shivering, wondering how I would push a broken bicycle three kilometres home in the dark.

Then a small lorry pulled over. An elderly man with a grey beard climbed out, holding an umbrella. "You are hurt," he said gently. "Where do you live?" He lifted my bicycle onto the back of the lorry, handed me a clean towel and drove me to my doorstep. When my mother tried to give him some money, he simply shook his head. "Just help someone else one day," he said, and drove off before we could even ask his name.

I never saw him again, but I have never forgotten him. That evening taught me that kindness does not need to be big or planned. Now, whenever I see someone struggling, whether it is a classmate carrying heavy boxes or a stranger who is lost, I remember the man with the grey beard and stop to help.

*Setting and problem in paragraph 1–2, turning point in 3, lesson in 4 — both prompts covered.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-080', ch: 'w3', type: 'mcq', format: 'p2e', diff: 1, marks: 1,
      q: 'The task says: "Your story must begin with: *Siti looked at the sky and knew the storm was coming.*" Which opening is acceptable?',
      options: ['The storm came. Siti looked at the sky.', 'Siti looked at the sky and knew the storm was coming. She grabbed her brother\'s hand and ran.', 'I looked at the sky and knew the storm was coming.', 'Siti looked at the clouds and guessed a storm might come.'],
      answer: 1,
      explain: 'The given words must be used exactly, at the very start, with the same character and point of view. C changes the point of view; A and D change the words.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-081', ch: 'w3', type: 'mcq', format: 'p2e', diff: 1, marks: 1,
      q: 'Which sentence SHOWS (rather than tells) that a character is nervous?',
      options: ['She was very nervous.', 'Her fingers fumbled with the zip as she glanced at the door again.', 'She felt nervousness.', 'Nervous was what she felt.'],
      answer: 1,
      explain: 'Showing uses actions and details (fumbling fingers, repeated glances) so the reader infers the feeling.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-082', ch: 'w3', type: 'fill', format: 'p2e', diff: 2, marks: 1,
      q: 'When we finally reached the summit, the sun ___ (already / rise).',
      blanks: [['had already risen']],
      explain: 'The sunrise happened before we reached the summit → past perfect *had already risen* (*rise – rose – risen*).',
      source: 'SPM-style (original)'
    },

    // ---------- w4: Part 3 article / report / review ----------
    {
      id: 'bi-083', ch: 'w4', type: 'open', format: 'p2e', diff: 2, marks: 20,
      stimulus: `Your school magazine is running a health feature. Write an **article** about teenagers and sleep. In your article, include:
- why many teenagers do not get enough sleep
- the effects of lack of sleep
- tips for sleeping better`,
      q: 'Write your article in about **200–250 words**.',
      bands: BANDS_P3,
      model: `**Are You Running on Empty?**

Do you find yourself yawning through the first lesson of the day? If so, you are not alone. Many teenagers get far less sleep than they need.

**Why are we so tired?**
Health experts generally recommend that teenagers sleep eight to ten hours a night, yet many of us manage only six. Late-night scrolling is a major culprit: one more video easily becomes twenty. Heavy homework loads and early starts make the problem worse.

**What does it do to us?**
Lack of sleep affects more than our mood. It makes it harder to concentrate and to remember what we have learnt, which can pull down our grades. Tired teenagers are also more likely to feel irritable and less motivated to exercise.

**How can we sleep better?**
Fortunately, small changes can make a big difference. Try to go to bed and wake up at the same time every day, even at weekends. Put your phone away at least thirty minutes before bedtime, or better still, charge it outside your bedroom. Finally, avoid sugary or caffeinated drinks in the evening. A short afternoon nap can help too, but keep it under twenty minutes or it may keep you awake at night.

Sleep is not a waste of time; it is when your body and brain recharge. So tonight, switch off early and give yourself the rest you deserve.

*Article conventions: catchy title, rhetorical question hook, addresses the reader (you), sub-headings, call to action at the end.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-084', ch: 'w4', type: 'open', format: 'p2e', diff: 2, marks: 20,
      stimulus: `Your English Society is collecting **reviews** of places in school. Write a review of your **school library**. In your review, include:
- what you like most about it
- whether it is a good place to study, and why
- what could be improved`,
      q: 'Write your review in about **200–250 words**.',
      bands: BANDS_P3,
      model: `**Review: SMK Taman Indah Resource Centre** — ★★★★☆

Since its renovation last year, our school library has become one of the most popular spots in school. But is it really a good place to study?

**What I like most**
The best feature is the new reading corner. Bean bags, warm lighting and shelves of recent novels make it feel more like a café than a library. The collection of SPM revision books is also impressive, and the librarian updates it every year.

**A place to study?**
For the most part, yes. The air-conditioning works well, the tables are spacious and there are power points for laptops. The quiet zone at the back is ideal for serious revision. However, during recess the room can become noisy, as some students treat it as a place to chat.

**What could be improved**
The library closes at 2.30 p.m., which is too early for students who stay back for co-curricular activities. Extending the opening hours to 5 p.m. would help. A few more computers would also be welcome, since there are only four and there is often a queue.

**Verdict**
Overall, the library is comfortable, well stocked and worth visiting. With longer hours and a stricter quiet policy, it could easily earn five stars. I would recommend it to anyone looking for a peaceful place to read or revise.

*Review conventions: names the thing reviewed, rating, balanced strengths/weaknesses with reasons, clear recommendation. It reviews exactly what the task names.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-085', ch: 'w4', type: 'open', format: 'p2e', diff: 3, marks: 20,
      stimulus: `Your school held a **Career Day** last month. As secretary of the Counselling Club, write a **report** for the senior assistant. In your report, include:
- the activities that were held
- the response from students
- suggestions for future Career Days`,
      q: 'Write your report in about **200–250 words**.',
      bands: BANDS_P3,
      model: `**Report on Career Day 2025**

**Introduction**
This report summarises the Career Day held in the school hall on 20 May and suggests improvements for future events.

**Activities**
The programme was officially opened by the principal at 8 a.m. Representatives from twelve organisations, including two universities, the fire and rescue department and a technology company, set up booths in the hall. In addition, three talks were given by former students who now work as an engineer, a nurse and a chef. Each talk was followed by a question-and-answer session.

**Response from students**
Overall, the response was very positive. More than 300 Form 4 and Form 5 students attended, and the chef's talk was particularly popular. However, according to a short survey, some students felt that the booths were too crowded and that there was not enough time to ask questions.

**Recommendations**
Firstly, it is recommended that the event be held over two days so that each form has more time at the booths. Secondly, a wider range of careers, such as those in the creative and agricultural sectors, should be represented. Finally, students could be given a list of questions beforehand to make the most of each visit.

**Conclusion**
Career Day was a useful and well-received event. With these improvements, next year's programme could be even more beneficial.

Prepared by: Lim Jia Hui, Secretary, Counselling Club

*Report conventions: title, purpose statement, headings matching the task, passives, impersonal tone, evidence (survey), sign-off.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-086', ch: 'w4', type: 'open', format: 'p2e', diff: 3, kbat: true, marks: 20,
      stimulus: `A youth website has asked readers: **"Should homework be banned?"** Write an **article** for the website. In your article, include:
- reasons why some people want homework banned
- reasons why homework is useful
- your own opinion`,
      q: 'Write your article in about **200–250 words**.',
      bands: BANDS_P3,
      model: `**Homework: Help or Headache?**

It is ten o'clock at night, and you are still staring at a pile of worksheets. Should homework be banned altogether? The answer is not as simple as it seems.

**The case against homework**
Critics argue that too much homework leaves students exhausted and stressed. After a full day of lessons and co-curricular activities, many teenagers have little time left for rest, hobbies or family. Some also point out that not every student has a quiet place to study or reliable internet at home, which makes homework unfair.

**The case for homework**
On the other hand, homework gives us the chance to practise what we have learnt. Formulas and grammar rules are easily forgotten unless we use them again. Homework also builds independence and time management, skills that will be essential at university and at work.

**My view**
In my opinion, homework should not be banned, but it should be smarter. Teachers could set fewer but more meaningful tasks, such as short projects or reading, and coordinate with one another so that students are not overloaded on the same day.

So, the next time you groan at your homework, remember that the real problem may not be homework itself, but how much of it we are given. Perhaps it is time for students and teachers to talk about the right balance.

*Balanced argument (here "On the other hand" is correct — it introduces the opposing side), clear personal view, engaging opening scene and final line.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-087', ch: 'w4', type: 'match', format: 'p2e', diff: 1, marks: 4,
      q: 'Match each feature to the Part 3 genre it belongs to.',
      pairs: [
        ['Sub-headings such as "Findings" and "Recommendations"', 'Report'],
        ['A rating and a recommendation for potential users', 'Review'],
        ['A catchy title and a question addressed to readers', 'Article'],
        ['Given opening words that must be used exactly', 'Story']
      ],
      explain: 'Using the conventions of the genre is what the Communicative Achievement criterion rewards.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-088', ch: 'w4', type: 'mcq', format: 'p2e', diff: 2, marks: 1,
      q: 'Which sentence is most appropriate in a REPORT on a talent show?',
      options: ['OMG, the talent show was a total disaster!', 'The sound system failed twenty minutes into the event.', 'My heart pounded as the lights suddenly went out.', 'Have you ever been to a talent show, dear readers?'],
      answer: 1,
      explain: 'Reports are factual and impersonal. A is slang; C is narrative (story-like — the problem examiners noted in 2023 and 2024); D is an article technique.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-089', ch: 'w4', type: 'mcq', format: 'p2e', diff: 2, kbat: true, marks: 1,
      q: 'You are writing a review of your **official school website**. Which sentence is IRRELEVANT?',
      options: ['The homepage loads quickly and the timetable is easy to find.', 'I wish YouTube had fewer advertisements.', 'Adding an online lost-and-found page would be useful.', 'The colour scheme matches our school badge.'],
      answer: 1,
      explain: 'The review must be about the school website only. The 2024 examiners\' report noted candidates who wrongly reviewed YouTube, Facebook or Google Classroom.',
      source: 'SPM-style (original)'
    },

    // ---------- l1: Listening (transcripts) ----------
    {
      id: 'bi-090', ch: 'l1', type: 'struct', format: 'p4', diff: 2, marks: 3,
      stimulus: `*Transcripts — in the real exam you hear these twice.*

**Situation 1** — *Girl:* Shall we take the 4.15 bus? *Boy:* It's always packed. Let's get the 4.30 — no, wait, the match starts at five, so the 4.15 is better after all. *Girl:* Fine.

**Situation 2** — *Man:* I'd like to return this shirt. I ordered the blue one online, and it came in green. Actually, the colour's fine — it's the size that's the problem. It's far too tight.

**Situation 3** — *Teacher:* Just a reminder: the trip to the science centre is still on Friday. But instead of meeting in the school hall, we'll meet at the bus bay next to the canteen.`,
      q: 'Choose the correct answer for each situation.',
      parts: [
        { label: '(1)', type: 'mcq', marks: 1, q: 'Which bus will they take?', options: ['4.15', '4.30', '5.00'], answer: 0, explain: 'Change of mind: "no, wait… the 4.15 is better after all".' },
        { label: '(2)', type: 'mcq', marks: 1, q: 'Why does the man want to return the shirt?', options: ['It is the wrong colour.', 'It is the wrong size.', 'It arrived late.'], answer: 1, explain: '"Actually, the colour\'s fine — it\'s the size that\'s the problem." *Actually* signals the correction.' },
        { label: '(3)', type: 'mcq', marks: 1, q: 'What has changed about the trip?', options: ['The day', 'The destination', 'The meeting place'], answer: 2, explain: '"Still on Friday" (day unchanged); "instead of… the school hall… the bus bay" (place changed).' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-091', ch: 'l1', type: 'struct', format: 'p4', diff: 2, marks: 4,
      stimulus: `*Transcript — a talk at assembly.*

"Good morning, everyone. Our coastal clean-up will take place on the twenty-third of March at Teluk Cempedak. Please be there by seven-thirty. Gloves and rubbish bags will be provided, but bring your own reusable water bottle — we're trying to avoid plastic altogether. Last year, volunteers collected over four hundred kilograms of rubbish. The most common item was cigarette butts, followed by plastic straws. After the clean-up, a marine biologist will give a short talk on sea turtles."`,
      q: 'Complete the notes with ONE word or number.',
      parts: [
        { label: '(1)', type: 'fill', marks: 1, q: 'Date of clean-up: ___ March', blanks: [['23', '23rd', 'twenty-third']], explain: '"the twenty-third of March" — figures are acceptable.' },
        { label: '(2)', type: 'fill', marks: 1, q: 'Volunteers must bring a reusable water ___.', blanks: [['bottle']], explain: 'Gloves and bags are provided; volunteers bring "your own reusable water bottle".' },
        { label: '(3)', type: 'fill', marks: 1, q: 'Most common item found last year: cigarette ___', blanks: [['butts']], explain: '"The most common item was cigarette butts, followed by plastic straws" — straws are the distractor.' },
        { label: '(4)', type: 'fill', marks: 1, q: 'The talk will be about sea ___.', blanks: [['turtles']], explain: '"a short talk on sea turtles".' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-092', ch: 'l1', type: 'struct', format: 'p4', diff: 3, kbat: true, marks: 3,
      stimulus: `*Transcripts — three students talk about their activities.*

**Speaker 1:** I joined the drama club mainly because my best friend was in it. I wasn't keen on acting at all, but I've ended up loving the backstage work — lighting, props, all of it.

**Speaker 2:** People assume I play football to keep fit, and sure, it helps. But honestly, what I love is the strategy — planning moves, reading the other team, like a game of chess.

**Speaker 3:** I took up the violin because my parents insisted. I hated practising at first. These days, though, I practise because I want to, not because I have to.

**Statements:** A — My attitude changed from feeling forced to enjoying it. B — I enjoy the thinking side of the activity. C — I joined because of a friend. D — I want to become a professional.`,
      q: 'Match each speaker to the correct statement (A–D). One statement is not used.',
      parts: [
        { label: 'Speaker 1', type: 'mcq', marks: 1, q: 'Speaker 1', options: ['A', 'B', 'C', 'D'], answer: 2, explain: '"I joined… mainly because my best friend was in it."' },
        { label: 'Speaker 2', type: 'mcq', marks: 1, q: 'Speaker 2', options: ['A', 'B', 'C', 'D'], answer: 1, explain: 'Fitness is mentioned, but "what I love is the strategy" — the thinking side.' },
        { label: 'Speaker 3', type: 'mcq', marks: 1, q: 'Speaker 3', options: ['A', 'B', 'C', 'D'], answer: 0, explain: 'From "my parents insisted" to "I practise because I want to" — attitude changed. Nobody mentions becoming a professional (D).' }
      ],
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-093', ch: 'l1', type: 'mcq', format: 'p4', diff: 1, marks: 1,
      stimulus: '> *Recording:* "The meeting was going to be on Tuesday, but the principal moved it to Wednesday."',
      q: 'The question asks when the meeting is. Which word signals where the correct answer comes?',
      options: ['going', 'but', 'principal', 'meeting'],
      answer: 1,
      explain: '*But* introduces the correction → Wednesday. Signal words: but, actually, instead, in the end.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-094', ch: 'l1', type: 'mcq', format: 'p4', diff: 1, marks: 1,
      q: 'Before listening, you read the gap: "The museum opens at ___ on weekends." What kind of answer should you listen for?',
      options: ['A time', 'A person\'s name', 'An adjective', 'A plural noun'],
      answer: 0,
      explain: '*Opens at ___* + *on weekends* → a clock time (e.g. 9.30 a.m.). Predicting the type of answer helps you catch it.',
      source: 'SPM-style (original)'
    },

    // ---------- s1: Speaking (preparation only) ----------
    {
      id: 'bi-095', ch: 's1', type: 'open', format: 'p3', diff: 1, marks: 6,
      q: 'Speaking Part 1 practice (write, then SAY your answers aloud). Give an extended answer (Answer + Reason + Example) to each question:\n\n(a) What do you usually do at weekends?\n\n(b) Which school subject do you find most useful?\n\n(c) Would you like to live in a big city in the future?',
      rubric: [
        { p: '(a) Direct answer + reason + example', m: 2 },
        { p: '(b) Direct answer + reason + example', m: 2 },
        { p: '(c) Direct answer + reason + example', m: 2 }
      ],
      model: `**(a)** At weekends I usually help my parents at our stall in the morning. I enjoy it because I get to chat with regular customers. For example, last Saturday an old customer taught me how to make teh tarik properly.

**(b)** I find English the most useful subject, because it opens doors to information and jobs. For instance, most of the coding tutorials I watch online are in English.

**(c)** Yes, I would, mainly because there are more job opportunities in a big city. My cousin moved to Kuala Lumpur after university and found a good job within a month. However, I would miss the quiet of my hometown.

*Self-check: did each answer go beyond one sentence?*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-096', ch: 's1', type: 'open', format: 'p3', diff: 2, marks: 6,
      q: 'Speaking Part 2 practice: Plan and write a script for a **one-minute talk** (about 120–140 words) on **"A place you enjoy visiting"**. Then time yourself saying it aloud without reading.',
      rubric: [
        { p: 'Clear opening that names the place', m: 1 },
        { p: 'At least two developed points (what you do there, why you like it)', m: 2 },
        { p: 'Signposting language (First of all, Another thing, So overall)', m: 1 },
        { p: 'Wrap-up sentence', m: 1 },
        { p: 'Fits roughly one minute when spoken', m: 1 }
      ],
      model: `I'd like to talk about the night market near my house, which I visit almost every Friday.

First of all, I love the atmosphere. As soon as the sun sets, the street fills with bright lights, the smell of grilled food and the sound of sellers calling out to customers. It feels completely different from the quiet road it is during the day.

Another thing I enjoy is trying new food. Last week I tasted a durian pancake for the first time — it was strange at first but delicious in the end.

Finally, it's a place where I meet friends and neighbours without planning to, so it always feels friendly.

So overall, the night market is my favourite place because it combines food, fun and community in one evening.

*About 130 words ≈ one minute at a natural pace.*`,
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-097', ch: 's1', type: 'mcq', format: 'p3', diff: 1, marks: 1,
      q: 'In Speaking Part 3, your partner suggests an idea you disagree with. What is the best response?',
      options: ['No. That is wrong.', 'I see your point, but I think a sports day might involve more students.', 'Whatever you say.', '(Stay silent and let your partner decide.)'],
      answer: 1,
      explain: 'Acknowledge, then disagree politely with a reason. Interactive communication rewards responding to and building on your partner\'s ideas.',
      source: 'SPM-style (original)'
    },
    {
      id: 'bi-098', ch: 's1', type: 'mcq', format: 'p3', diff: 1, marks: 1,
      q: 'You do not understand the interlocutor\'s question. What should you do?',
      options: ['Guess and talk about something else.', 'Ask: "Sorry, could you repeat the question, please?"', 'Answer in Bahasa Melayu.', 'Say nothing and wait for the next question.'],
      answer: 1,
      explain: 'Asking for repetition politely is natural communication and is better than an irrelevant answer or silence.',
      source: 'SPM-style (original)'
    }
  ]
});
})();
