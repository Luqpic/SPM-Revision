SPM.add({
  id: 'sains',
  name: 'Science (Sains)',
  code: '1511',
  lang: 'en',
  formats: {
    objektif: 'Objective (Paper 1)',
    struktur: 'Structured / Data Interpretation (Paper 2 Sections A & B)',
    eksperimen: 'Experiment / Scientific Investigation',
    pengiraan: 'Calculation',
    kbat: 'HOTS / Application (Paper 2 Section C)'
  },
  coverage: `## What is covered

- **All 21 KSSM Science chapters** — Form 4 (Chapters 1–12) and Form 5 (Chapters 1–9), using the chapter titles in the bilingual contents page of the Selangor PTRS 2024 SPM Science module, which follows the KSSM textbook/DSKP order. English titles follow the DLP (English) wording shown in that module, with the BM title in brackets.
- Every chapter has revision notes, key points, common mistakes, exam tips and a model answer (especially how to answer experiment questions).
- An **original** SPM-style question bank: objective, structured, experiment, calculation and HOTS (KBAT). Every question was written from scratch — **no** real SPM question was copied.

## What is NOT covered / thin

- These notes are a **revision summary**, not a replacement for the textbook. Some subtopics (e.g. 4.6 Green Technology and Life, 10.4 Health Products, 6.2 Human Movement and Growth) are only summarised.
- Terms and values follow common KSSM textbook usage, but the **official textbook could not be read in full** while preparing this — if a note differs from your textbook or teacher, follow the textbook/teacher.
- Formulas such as lens power (P = 1/f) are marked *enrichment* because we could not confirm they are in the Science DSKP (they are certainly in Physics).
- Diagrams in questions are simple SVG/tables. Real SPM papers may use photographs and more complex diagrams.
- Real practical work (handling apparatus) cannot be practised in the app.
- Topic predictions are based only on a secondary analysis of 2021–2023; **nothing is guaranteed** to come out.`,
  sources: [
    { title: 'Program Tuisyen Rakyat Selangor (PTRS) 2024 — SPM Science module (bilingual chapter list for F4 & F5, SPM 2021–2023 Paper 2 question analysis, Model Paper)', url: 'https://gurubesar.my/wp-content/uploads/2024/12/Sains-Modul-SPM_Soalan-PTRS-2024.pdf' },
    { title: 'Pandai — Sains Tingkatan 4 (chapter subtopics)', url: 'https://app.pandai.org/browse/sains-tingkatan-4-2024' },
    { title: 'Pandai — SPM Preparation Science (clone papers & state trial papers)', url: 'https://app.pandai.org/app/learn/kssm-f5/kssm-sc/exam-overview/spm-preparation1763220753' },
    { title: 'Utusan Malaysia (Feb 2025) — Panduan menjawab soalan Sains SPM', url: 'https://www.utusan.com.my/nasional/2025/02/panduan-menjawab-soalan-sains-spm/' },
    { title: 'MKCSPM 2024 Sains — Teacher module (item style only, not copied)', url: 'https://gurubesar.my/wp-content/uploads/2025/01/MKCSPM-2024-Sains-Modul-Guru.pdf' }
  ],
  exam: {
    verified: `## Format verification status

**Confirmed from secondary sources (not the official Examinations Syndicate / LP document):**

- **Paper 1 (1511/1):** 40 multiple-choice objective questions (A–D), 40 marks, **1 hour 15 minutes**. Supported by the PTRS 2024 model paper (40 questions) and summaries of state trial papers.
- **Paper 2 (1511/2):** 80 marks, **2 hours 30 minutes**. Structure in the PTRS 2024 Model Paper, which we read ourselves:
  - Section A (Bahagian A) — **20 marks**, "Answer all questions" (Questions 1–4; many are experiment / science process skills items).
  - Section B (Bahagian B) — **38 marks**, "Answer all questions" (Questions 5–10, structured).
  - Section C (Bahagian C) — **22 marks**, "Answer Question 11 and either Question 12 or Question 13". Question 11 (10 marks) is planning an investigation (problem statement, hypothesis, variables, labelled apparatus set-up…); Questions 12/13 (12 marks each) are HOTS/application questions.
- Total = 40 + 80 = 120 raw marks (the actual weighting in the grade is not confirmed).

**Could not be confirmed:**

- The official LP *Format Pentaksiran SPM 1511* booklet could not be reached online. The number of questions in Section B (5 or 6) differs between sources; the PTRS model paper has 6 (Q5–Q10).
- **Practical work / PEKA:** Commercial publishers (Pelangi) still publish "PEKA Sains SPM" material for KSSM, suggesting school-based practical assessment still exists, but we **could not confirm** whether or how it counts in the SPM result. Ask your teacher.
- Small format changes 2022–2025: none were reported in the sources we read, but this is not officially confirmed.`,
    overview: `## General strategy for SPM Science

**Paper 1 (75 minutes, 40 questions):** ≈ 1.5 minutes per question. Do the easy ones first, mark the doubtful ones, come back later. Never leave a blank — there are no negative marks.

**Paper 2 (150 minutes, 80 marks):** ≈ 1.8 minutes per mark.

1. **Read the command word.** *State* = short answer; *Explain* = fact + reason; *Justify* = choose + reason; *Predict* = expectation based on the data pattern; *Suggest* = a reasonable, relevant idea.
2. **Count marks = count points.** 2 marks usually means 2 points (or 1 fact + 1 explanation). Utusan (2025) recommends the P.E.A. method — *Point, Explanation, Example*.
3. **Use exact scientific terms** (e.g. *glucose*, not "sugar"; *manipulated variable*, not "the thing we changed").
4. **Calculations:** write the formula → substitute values with units → final answer + unit. Marks are often given for steps.
5. **Graphs:** labelled axes with units, uniform scale, accurate points, smooth curve or best straight line.

## Science Process Skills (Kemahiran Proses Sains) — asked almost every year

| Skill | Short meaning |
|---|---|
| Observing (memerhati) | Use the senses to collect information |
| Classifying (mengelas) | Group by similarities/differences |
| Measuring & using numbers | Quantitative observation with instruments & standard units |
| Making inferences (membuat inferens) | An early conclusion to *explain* an observation |
| Predicting (meramal) | An expectation based on a data pattern |
| Interpreting data (mentafsir data) | A rational explanation of a data pattern |
| Defining operationally (mendefinisi secara operasi) | Interpreting a concept by stating *what is done and what is observed* |
| Controlling variables (mengawal pemboleh ubah) | Identify manipulated, responding and constant variables |
| Making a hypothesis (membuat hipotesis) | A general, testable statement relating the manipulated and responding variables |

> Hypothesis template: "The **higher/greater** the [manipulated variable], the **higher/greater** the [responding variable]."`,
    papers: [
      {
        id: 'k1', name: 'Paper 1 (1511/1)', duration: 75, marks: 40,
        desc: `40 multiple-choice objective questions (A, B, C, D) covering Form 4 and Form 5. Answer all. Mixed levels, including interpreting diagrams and tables and some calculation.`,
        sections: [{ name: 'Objective', questions: '40 multiple-choice questions', marks: 40, desc: 'Answer all questions' }],
        mock: { formats: ['objektif'], n: 40, minutes: 75 }
      },
      {
        id: 'k2', name: 'Paper 2 (1511/2)', duration: 150, marks: 80,
        desc: `Structured and restricted-response subjective questions. Section A stresses science process skills/experiments; Section B is structured questions across chapters; Section C is planning an investigation (compulsory) plus one optional HOTS question.`,
        sections: [
          { name: 'Section A', questions: '4 structured questions (Q1–Q4)', marks: 20, desc: 'Answer all questions' },
          { name: 'Section B', questions: '5–6 structured questions (Q5–Q10 in the model paper)', marks: 38, desc: 'Answer all questions' },
          { name: 'Section C', questions: 'Q11 (10 marks) + Q12 or Q13 (12 marks)', marks: 22, desc: 'Answer Q11 and choose one of Q12/Q13' }
        ],
        mock: { formats: ['struktur', 'eksperimen', 'pengiraan', 'kbat'], n: 12, minutes: 150 }
      }
    ]
  },
  trends: {
    disclaimer: `**Predictions are NOT guarantees.** The trends below come from the *SPM 2021–2023 Science Paper 2 Question Analysis* table in the Selangor PTRS 2024 module (a secondary source; we did not see the real SPM papers). It covers **Paper 2 only** — Paper 1 tests every chapter. Years were assigned from the column positions in the PDF table; the question numbers (Q1–Q13) for each year are internally consistent (each year has a complete Q1–Q13), so we are fairly confident in the mapping, but it is still **reported**, not officially confirmed. For 2024 and 2025 we **found no** reliable topic analysis. **Every chapter can be examined.**`,
    years: [
      { year: 2021, confidence: 'reported', summary: `Paper 2 (per PTRS 2024): Q1 plant growth patterns; Q2 ticker tape; Q3 factors affecting microorganism growth (humidity); Q4 rate of reaction — surface area; Q5 fats & palm oil; Q6 disruption of body coordination; Q7 food processing & supplements; Q8 BMI; Q9 inertia; Q10 water pollution; Q11 pulse rate (physical activity); Q12 solid waste management & agriculture (green technology); Q13 hydraulics & Bernoulli.`, sources: [{ title: 'PTRS Selangor 2024 SPM Science module, pp. iv–v', url: 'https://gurubesar.my/wp-content/uploads/2024/12/Sains-Modul-SPM_Soalan-PTRS-2024.pdf' }] },
      { year: 2022, confidence: 'reported', summary: `Paper 2 (per PTRS 2024): Q1 pulse rate; Q2 rate of reaction — concentration; Q3 image formation by lenses; Q4 simple cell; Q5 waste & wastewater management; Q6 satellites; Q7 alloys; Q8 palm oil; Q10 environmental pollution; Q11 plant nutrient requirements; Q12 personal protective equipment & traditional/modern/complementary medicine; Q13 mutation & GMOs. (Q9 not listed in the table.)`, sources: [{ title: 'PTRS Selangor 2024 SPM Science module, pp. iv–v', url: 'https://gurubesar.my/wp-content/uploads/2024/12/Sains-Modul-SPM_Soalan-PTRS-2024.pdf' }] },
      { year: 2023, confidence: 'reported', summary: `Paper 2 (per PTRS 2024): Q1 plant growth patterns; Q2 calorific value of food; Q3 pure metals & alloys; Q4 inertia; Q5 mitosis; Q6 Periodic Table; Q7 environmental pollution; Q8 steel & rubber; Q9 green technology — building sector; Q10 space technology (satellites/GPS); Q11 factors affecting microorganism growth; Q12 nuclear energy; Q13 fats.`, sources: [{ title: 'PTRS Selangor 2024 SPM Science module, pp. iv–v', url: 'https://gurubesar.my/wp-content/uploads/2024/12/Sains-Modul-SPM_Soalan-PTRS-2024.pdf' }] },
      { year: 2024, confidence: 'unverified', summary: `No reliable topic analysis of SPM 2024 Paper 2 was found (only state trial papers). We make **no claims** about 2024 topics.`, sources: [] },
      { year: 2025, confidence: 'unverified', summary: `No topic analysis of SPM 2025 was found. State trial papers for 2025 (e.g. Kelantan, Putrajaya, Pulau Pinang) exist but they are not the real SPM paper.`, sources: [] }
    ],
    recurring: [
      { topic: 'Environmental pollution', ch: 's5c3', level: 'high', basis: 'Reported in 2021 (Q10), 2022 (Q10), 2023 (Q7) — 3 of 3 years' },
      { topic: 'Fats and palm oil', ch: 's5c5', level: 'high', basis: 'Reported 2021 (Q5), 2022 (Q8), 2023 (Q13)' },
      { topic: 'Alloys / steel / polymers (rubber)', ch: 's4c9', level: 'high', basis: 'Reported 2022 (Q7), 2023 (Q3, Q8)' },
      { topic: 'Pulse rate & BMI', ch: 's4c3', level: 'high', basis: 'Reported 2021 (Q8, Q11), 2022 (Q1)' },
      { topic: 'Green technology (waste, agriculture, buildings)', ch: 's4c4', level: 'high', basis: 'Reported 2021 (Q12), 2022 (Q5), 2023 (Q9)' },
      { topic: 'Inertia / ticker tape', ch: 's4c11', level: 'high', basis: 'Reported 2021 (Q2, Q9), 2023 (Q4)' },
      { topic: 'Factors affecting microorganism growth', ch: 's5c1', level: 'high', basis: 'Reported 2021 (Q3), 2023 (Q11)' },
      { topic: 'Satellites & GPS', ch: 's5c9', level: 'high', basis: 'Reported 2022 (Q6), 2023 (Q10)' },
      { topic: 'Factors affecting rate of reaction', ch: 's5c4', level: 'high', basis: 'Reported 2021 (Q4 surface area), 2022 (Q2 concentration)' },
      { topic: 'Nutrition & food technology (calories, plant nutrients, processing)', ch: 's5c2', level: 'high', basis: 'Reported 2021 (Q7), 2022 (Q11), 2023 (Q2)' },
      { topic: 'Plant growth patterns', ch: 's4c6', level: 'med', basis: 'Reported 2021 (Q1), 2023 (Q1)' },
      { topic: 'Genetics — mitosis, mutation, GMOs', ch: 's4c5', level: 'med', basis: 'Reported 2022 (Q13), 2023 (Q5)' },
      { topic: 'Nuclear energy', ch: 's4c12', level: 'med', basis: 'Reported 2023 (Q12) only' },
      { topic: 'Periodic Table of Elements', ch: 's4c8', level: 'med', basis: 'Reported 2023 (Q6)' },
      { topic: 'Disruption of body coordination', ch: 's4c7', level: 'med', basis: 'Reported 2021 (Q6)' },
      { topic: 'Traditional/modern/complementary medicine', ch: 's4c10', level: 'med', basis: 'Reported 2022 (Q12)' },
      { topic: 'Personal protective equipment', ch: 's4c1', level: 'med', basis: 'Reported 2022 (Q12)' },
      { topic: 'Simple (chemical) cell', ch: 's5c6', level: 'med', basis: 'Reported 2022 (Q4)' },
      { topic: 'Image formation by lenses', ch: 's5c7', level: 'med', basis: 'Reported 2022 (Q3)' },
      { topic: 'Hydraulics & Bernoulli principle', ch: 's5c8', level: 'med', basis: 'Reported 2021 (Q13); also in the PTRS model paper' },
      { topic: 'Emergency help (CPR, Heimlich)', ch: 's4c2', level: 'low', basis: 'Not in the 2021–2023 Paper 2 table, but common in Paper 1 and model papers' }
    ],
    changes: `## Format changes

- **SPM 2021** was the first **KSSM** cohort (Science 1511). KSSM content differs greatly from KBSM: new topics such as *Emergency Help*, *Techniques of Measuring the Parameters of Body Health*, *Green Technology*, *Chemicals in Medicine and Health*, *Nuclear Energy* and *Space Technology*.
- KSSM format (per model/trial papers): P1 40 objective (1 h 15 min); P2 Sections A/B/C (20/38/22 marks, 2 h 30 min) with a Q12/Q13 choice in Section C.
- 2022–2025: no format change was reported in the sources we read (not officially confirmed).
- Teaching from 2020/21 was disrupted by home-based learning (COVID-19); that affected the early cohorts, not the format.`
  },
  chapters: [
    {
      id: 's4c1', form: 4, num: 1,
      title: 'Safety Measures in the Laboratory (Langkah Keselamatan dalam Makmal)',
      weight: 'med',
      summary: 'Personal protective equipment (PPE), disposal of waste and fire extinguishers.',
      notes: `## 1.1 Personal Protective Equipment (PPE)

**Personal protective equipment** (*peralatan perlindungan diri*) is equipment worn to protect yourself from hazards in the laboratory.

| PPE | Function |
|---|---|
| Safety goggles | Protect the eyes from chemical splashes/fragments |
| Face mask | Prevent inhaling fumes, dust or microorganisms |
| Gloves (rubber/nitrile) | Protect the hands from chemicals and microbes |
| Lab coat | Protect skin and clothing from spills |
| Covered shoes / safety shoes | Protect the feet from spills and broken glass |

**Safety equipment in the laboratory:**

| Equipment | Use |
|---|---|
| **Laminar air flow cabinet** (*kabinet aliran laminar*) | Sterile space for microbiology work — air is filtered (HEPA filter) so cultures are not contaminated |
| **Fume chamber** (*kebuk wasap*) | Handling volatile, toxic, flammable, corrosive or smelly substances — fumes are sucked out |
| **Eye wash** (*pembilas mata*) | Rinse eyes splashed with chemicals immediately |
| **Emergency shower** (*pancuran kecemasan*) | Rinse the body or clothing splashed with a lot of chemicals |

> The laminar air flow cabinet protects the **sample/culture**; the fume chamber protects the **user** from fumes.

## 1.2 Disposal of Waste

Laboratory waste must be separated by type so it does not pollute the environment or injure people.

| Type of waste | How to dispose |
|---|---|
| Neutral/dilute harmless solutions (e.g. dilute salt solution, distilled water) | Can be poured into the sink with plenty of water |
| Concentrated acids/alkalis | Neutralise/dilute first or put into a special waste bottle |
| Organic solvents, heavy metals (Hg, Pb, Cd), toxic substances | Special labelled waste bottle/container — **never** into the sink |
| Reactive metals (Na, K) | Special container; keep away from water |
| Biological waste (cultures, microbe-contaminated material) | Put in a **biohazard bag**, **autoclave** (sterilise) before disposal |
| Sharps (needles, syringes, broken glass) | Sharps bin |
| Radioactive substances | Special shielded container, handled by a licensed agency |

Why not throw waste anywhere? It pollutes water, damages pipes and harms aquatic life and humans.

## 1.3 Fire Extinguishers

**Fire triangle** (*segi tiga api*): fire needs **fuel**, **oxygen** and **heat**. Remove any one → the fire goes out.

<svg viewBox="0 0 300 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 40,180 260,180" fill="none" stroke="currentColor" stroke-width="3"/><text x="150" y="130" text-anchor="middle" font-size="16" fill="currentColor">FIRE</text><text x="60" y="95" font-size="13" fill="currentColor">Heat</text><text x="205" y="95" font-size="13" fill="currentColor">Oxygen</text><text x="150" y="198" text-anchor="middle" font-size="13" fill="currentColor">Fuel</text></svg>

| Class of fire | What burns | Suitable extinguisher |
|---|---|---|
| A | Ordinary solids: paper, wood, cloth | Water, foam, dry powder |
| B | Flammable liquids: petrol, oil, paint | Foam, dry powder, CO₂ — **not water** |
| C | Flammable gases: LPG, methane | Dry powder (shut off the gas source first) |
| D | Metals: sodium, magnesium | Special dry powder |
| Electrical | Electrical equipment | CO₂, dry powder — **not water** (electric shock) |

**Using an extinguisher (P.A.S.S.):** *Pull* the pin → *Aim* at the **base** of the fire → *Squeeze* the handle → *Sweep* from side to side.

Why is water unsuitable for an oil fire? Oil is less dense than water and does not dissolve — the oil floats and the fire spreads.`,
      keyPoints: [
        'Laminar air flow cabinet: sterile microbiology work (protects the culture).',
        'Fume chamber: volatile/toxic/smelly substances (protects the user).',
        'Biological waste → biohazard bag → autoclave.',
        'Fire triangle: fuel + oxygen + heat.',
        'Oil/electrical fires: never use water.',
        'P.A.S.S.: pull the pin, aim at the base, squeeze, sweep.'
      ],
      mistakes: [
        'Writing "fume chamber for bacteria work" — that is the laminar air flow cabinet.',
        'Aiming the extinguisher at the top of the flames instead of the base.',
        'Saying all acids can be poured into the sink.'
      ],
      tips: [
        'PPE questions usually ask for the function — name the body part protected AND the hazard.',
        'For classes of fire, memorise example materials for A, B, C and D.'
      ],
      modelAnswer: `**Question:** A student spills concentrated sulphuric acid on his hand. Explain the action that should be taken. [3 marks]

**Model answer:**
1. Rinse the hand immediately with **plenty of water / under running tap water** (1) — to dilute and remove the acid.
2. Remove contaminated clothing/gloves (1).
3. Report to the teacher and get medical treatment (1).

*A mark for each correct action in order. "Apply ointment" without rinsing is not accepted.*`
    },
    {
      id: 's4c2', form: 4, num: 2,
      title: 'Emergency Help (Bantuan Kecemasan)',
      weight: 'low',
      summary: 'Cardiopulmonary resuscitation (CPR) and the Heimlich manoeuvre.',
      notes: `## What is emergency help?

Emergency help is the first treatment given to a victim before professional medical help arrives. Its aims: **save life**, **stop the condition getting worse**, and **help recovery**.

## 2.1 Cardiopulmonary Resuscitation (CPR)

**CPR** (*resusitasi kardiopulmonari*) combines **chest compressions** and **rescue breaths** to keep oxygenated blood flowing to the brain and vital organs when the victim's heart or breathing has stopped.

When is CPR needed? The victim is **unconscious** and **not breathing or not breathing normally (gasping)** — e.g. drowning, electric shock, heart attack.

The brain can be permanently damaged without oxygen for about 4–6 minutes — that is why CPR must start immediately.

**CPR steps (adult) — short sequence:**

1. **Check for danger** — make sure you do not become a victim too.
2. **Check response** — tap the shoulders, call out loudly.
3. **Call for help** — dial 999, ask for an AED if available.
4. **Check breathing** (no more than 10 seconds).
5. **Chest compressions (C — compression)**: heel of the hand on the centre of the chest (lower half of the breastbone), arms straight, press **5–6 cm** deep at **100–120 compressions/minute**.
6. **Open the airway (A — airway)**: head tilt, chin lift.
7. **Rescue breaths (B — breathing)**: 2 breaths, watch the chest rise.
8. Repeat cycles of **30 compressions : 2 breaths** until help arrives or the victim recovers.

> Rescue breaths **supply oxygenated air** to the victim. Chest compressions **pump blood** to the brain and organs.

| Step | Purpose |
|---|---|
| Head tilt, chin lift | Opens the airway — the tongue does not block it |
| Chest compressions | Pump oxygenated blood to the brain |
| Breaths | Supply oxygen to the lungs |
| Use an AED | Electric shock to restore the heart rhythm |

## 2.2 Heimlich Manoeuvre

For a **choking** victim (airway blocked by food/an object).

Signs of choking: holding the throat, cannot speak/cough/breathe, face/lips turning bluish.

> If the victim **can still cough or speak**, encourage coughing — do not do the Heimlich yet.

**Steps (conscious adult, standing):**

1. Stand behind the victim, wrap your arms around the waist; lean the victim slightly forward.
2. Make a fist with one hand, place it **above the navel, below the breastbone**.
3. Grasp the fist with the other hand.
4. Thrust quickly **inwards and upwards** (abdominal thrust).
5. Repeat until the object comes out.

**Science principle:** the upward thrust pushes the diaphragm up → the volume of the thoracic cavity decreases → **air pressure in the lungs increases** → air is forced out and pushes the object out of the trachea.

| Victim | Modification |
|---|---|
| Baby under 1 year | 5 back blows + 5 chest thrusts (2 fingers), not abdominal thrusts |
| Pregnant woman / obese person | Thrusts on the **chest**, not the abdomen |
| Yourself | Push your abdomen against the edge of a chair/table |
| Victim becomes unconscious | Lay them down, start CPR |`,
      keyPoints: [
        'CPR = chest compressions + rescue breaths; ratio 30:2.',
        'Chest compressions 5–6 cm deep, 100–120 per minute.',
        'Head tilt–chin lift opens the airway.',
        'Heimlich: fist above the navel, thrust inwards and upwards.',
        'Heimlich raises the air pressure in the lungs to force the object out.',
        'A victim who can still cough — encourage coughing first.'
      ],
      mistakes: [
        'Saying rescue breaths "speed up breathing" — their function is to supply oxygen.',
        'Doing the Heimlich on a victim who is not breathing/has no heartbeat — that needs CPR.',
        'Placing the hands on the lower abdomen or on the ribs.'
      ],
      tips: [
        'Memorise the NUMBERS: 30:2, 5–6 cm, 100–120/min.',
        'For "explain the Heimlich principle", use the chain: volume ↓ → pressure ↑ → air out.'
      ],
      modelAnswer: `**Question:** Explain how the Heimlich manoeuvre removes food stuck in the trachea. [3 marks]

**Model answer:**
- The inward and upward thrust pushes the diaphragm upwards (1).
- The volume of the thoracic cavity/lungs decreases, so the air pressure in the lungs increases (1).
- High-pressure air rushes out through the trachea and pushes the food out (1).`
    },
    {
      id: 's4c3', form: 4, num: 3,
      title: 'Techniques of Measuring the Parameters of Body Health (Teknik Mengukur Parameter Kesihatan Badan)',
      weight: 'high',
      summary: 'Body temperature, pulse rate, blood pressure and Body Mass Index (BMI).',
      notes: `## Body health parameters

Health parameters are measurements that show a person's level of health: **body temperature**, **pulse rate**, **blood pressure** and **Body Mass Index (BMI)**.

## 3.1 Body temperature (suhu badan)

- Normal human body temperature ≈ **37 °C** (range roughly 36.1–37.2 °C).
- Measured with a **clinical/digital thermometer** in the mouth, armpit, ear or forehead (infrared thermometer).
- Temperature > 37.5 °C → **fever** (usually a sign of infection).
- Temperature is controlled by the **hypothalamus** (homeostasis): sweating & vasodilation when hot; shivering & vasoconstriction when cold.

## 3.2 Pulse rate (kadar denyutan nadi)

The **pulse** is the throbbing of an artery as the heart pumps blood. **Pulse rate** = number of beats in one minute.

- Normal adult at rest: **60–100 beats/minute** (average ≈ 72).
- Measured at the **radial artery** (wrist) or **carotid artery** (neck) using **two fingers** (index + middle finger) — **not the thumb** (the thumb has its own pulse).
- Count beats for 15 s and multiply by 4, or 30 s × 2, or a full 60 s.

| Factor | Effect on pulse rate |
|---|---|
| Physical activity/exercise | Increases (muscles need more O₂ and glucose; CO₂ must be removed) |
| Age | Babies > children > adults |
| Emotions (fear, anger) | Increases (adrenaline hormone) |
| Trained athletes | Lower resting rate (stronger heart, larger stroke volume) |
| High body temperature | Increases |

**Why does the pulse rate increase during exercise?** Muscles carry out cellular respiration faster to release energy → they need more **oxygen and glucose** → the heart pumps faster → pulse rate increases.

## 3.3 Blood pressure (tekanan darah)

**Blood pressure** is the force exerted by blood on the walls of the arteries. It is measured with a **sphygmomanometer** (manual or digital), in **mmHg**.

- Written as **systolic/diastolic**, e.g. **120/80 mmHg** (normal adult).
- **Systolic** — pressure when the ventricles **contract** (the higher value).
- **Diastolic** — pressure when the ventricles **relax** (the lower value).
- ≥ 140/90 mmHg → **high blood pressure (hypertension)**; risk of stroke and heart attack.

## 3.4 Body Mass Index (BMI / Indeks Jisim Badan)

**BMI = mass (kg) ÷ [height (m)]²** — unit kg/m².

| BMI (kg/m²) | Status (WHO classification) |
|---|---|
| < 18.5 | Underweight |
| 18.5 – 24.9 | Normal |
| 25.0 – 29.9 | Overweight |
| ≥ 30.0 | Obese |

> **Follow the table given in the question.** Malaysian guidelines for Asians use lower cut-offs (e.g. 23 and 27.5) — exam questions usually supply the table.

**Example:** mass 72 kg, height 1.60 m.
BMI = 72 ÷ (1.60)² = 72 ÷ 2.56 = **28.1 kg/m²** → overweight.

**Convert cm → m first!** 160 cm = 1.60 m. The most common mistake: 72 ÷ 160² = 0.0028.

**Limits of BMI:** it does not distinguish muscle from fat (a muscular athlete may get a high BMI while healthy) and does not show fat distribution.

**Keeping health parameters normal:** balanced diet, less salt/sugar/fat, at least 150 minutes of exercise a week, enough sleep, no smoking, regular health check-ups.`,
      keyPoints: [
        'Normal temperature ≈ 37 °C; controlled by the hypothalamus.',
        'Normal adult pulse 60–100 beats/minute; measure with 2 fingers, not the thumb.',
        'Normal blood pressure 120/80 mmHg = systolic/diastolic; instrument: sphygmomanometer.',
        'BMI = mass (kg) ÷ height² (m²).',
        'Exercise → pulse rate increases because muscles need more oxygen & glucose.'
      ],
      formulas: [
        'BMI = mass (kg) ÷ [height (m)]²   (kg/m²)',
        'Pulse rate (beats/min) = beats counted in t seconds × (60 ÷ t)'
      ],
      mistakes: [
        'Not converting height from cm to m before calculating BMI.',
        'Calculating BMI without squaring the height.',
        'Saying systolic is the pressure when the heart relaxes.',
        'Using the thumb to feel the pulse.'
      ],
      tips: [
        'Pulse experiment: manipulated variable = type/duration of activity; responding = pulse rate; constant = same person, counting time.',
        'Show the BMI working — formula, substitution, answer + unit.'
      ],
      modelAnswer: `**Experiment question:** A student counts her pulse after resting, walking and running for 3 minutes.

| Aspect | Model answer |
|---|---|
| Aim | To study the effect of the type of physical activity on pulse rate |
| Hypothesis | The more **vigorous** the physical activity, the **higher** the pulse rate |
| Manipulated variable | Type of physical activity |
| Responding variable | Pulse rate |
| Constant variable | Duration of activity (3 min), the same person |
| Inference | Vigorous activity needs more energy, so the heart pumps blood faster |
| Operational definition of pulse rate | The number of beats **felt with two fingers on the wrist in one minute** |

*An operational definition must state WHAT IS DONE and WHAT IS OBSERVED in that experiment — not the textbook definition.*`
    },
    {
      id: 's4c4', form: 4, num: 4,
      title: 'Green Technology for Environmental Sustainability (Teknologi Hijau dalam Melestarikan Alam)',
      weight: 'high',
      summary: 'Environmental sustainability and Green Technology in the energy, building, waste, agriculture and transport sectors.',
      notes: `## 4.1 Environmental sustainability (kelestarian alam sekitar)

**Sustainable development** — meeting the needs of the present generation **without compromising** the ability of future generations to meet their own needs.

**Green Technology** (*Teknologi Hijau*) is the development and application of products, equipment and systems that conserve the environment and minimise the negative impact of human activities. Criteria (Malaysian policy):

- Minimises environmental degradation
- **Zero or low** greenhouse gas emissions
- Safe to use, promotes a healthy environment
- **Saves energy and natural resources**
- Promotes renewable resources

**Socio-scientific issues** caused by human activities: global warming, acid rain, ozone depletion, pollution, habitat destruction.

## 4.2 Energy sector

| Non-renewable energy | Renewable energy |
|---|---|
| Coal, petroleum, natural gas, uranium | Solar, wind, hydro, biomass, biogas, geothermal, waves |
| Limited, will run out | Will not run out / can be replenished |
| Releases CO₂ (fossil fuels) | Low carbon emissions |

Examples: **photovoltaic solar panels**, biogas from farm waste/sewage, energy efficiency (LED lamps, 5-star rated appliances).

## 4.3 Waste and wastewater management sector

- **5R concept**: *Rethink*, *Reduce*, *Reuse*, *Repair*, *Recycle*.
- **Separating waste at source**.
- **Composting** organic waste → fertiliser.
- **Sanitary landfill** — lined to stop **leachate** (*air larut resap*) polluting groundwater; methane gas is collected.
- **Wastewater/sewage treatment**: screening → sludge settling → biological treatment (bacteria decompose organic matter) → treated water released.
- **Incinerator** — burns waste at high temperature; the heat can generate electricity.

## 4.4 Agriculture and forestry sector

- **Organic farming** — no synthetic chemical fertilisers/pesticides.
- **Biological control** — using natural enemies (e.g. barn owls control rats in oil palm estates).
- **Hydroponics/aeroponics**, **fertigation** — save water and fertiliser.
- **Reforestation**, selective/sustainable logging.

## 4.5 Transport sector

Electric/hybrid vehicles, **biodiesel** (e.g. B10/B20 from palm oil), public transport (LRT, MRT), car-pooling, fuel-efficient vehicles.

## Building sector

**Green buildings** — natural lighting, natural ventilation, **rainwater harvesting**, solar panels, green roofs, recycled building materials, heat insulation. Malaysian rating: **Green Building Index (GBI)**.

## 4.6 Green Technology and life

Individual practices: save electricity, use reusable bags, recycle, reduce single-use plastics, choose green-labelled products. Benefits: less pollution, lower energy costs, better quality of life, green jobs.

> **Carbon footprint** (*jejak karbon*) — the total greenhouse gases (as CO₂ equivalent) released by the activities of a person/organisation. Green technology reduces the carbon footprint.`,
      keyPoints: [
        'Green Technology: minimise degradation, zero/low GHG emissions, save energy & resources.',
        '5R: Rethink, Reduce, Reuse, Repair, Recycle.',
        'Sanitary landfill is lined — stops leachate polluting groundwater.',
        'Biological control: barn owls control rats.',
        'Green building: rainwater harvesting, natural light & ventilation.'
      ],
      mistakes: [
        'Giving nuclear energy as an example of renewable energy.',
        'Stating benefits without linking to the environment (e.g. only "saves money").'
      ],
      tips: [
        'Section C often asks for Green Technology suggestions for a situation — give the suggestion + how it helps.',
        'Use key phrases: reduces CO₂ / greenhouse gas emissions, saves energy, renewable resources.'
      ],
      modelAnswer: `**Question:** A school wants to become a "green school". Suggest and explain **three** Green Technology practices. [6 marks]

**Model answer (1 suggestion + 1 explanation = 2 marks):**
1. Install **solar panels** on the roof (1) — generates electricity from renewable energy, reducing the burning of fossil fuels and CO₂ emission (1).
2. **Rainwater harvesting** (1) — rainwater is stored to water plants/flush toilets, saving clean water (1).
3. **Waste-separation bins and composting** (1) — organic waste becomes fertiliser; less waste goes to landfill and less methane is released (1).`
    },
    {
      id: 's4c5', form: 4, num: 5,
      title: 'Genetics (Genetik)',
      weight: 'med',
      summary: 'Cell division (mitosis & meiosis), inheritance, mutation, genetic engineering and variation.',
      notes: `## Basic terms

| Term | Meaning |
|---|---|
| **Chromosome** (*kromosom*) | Thread-like structure in the nucleus made of DNA and protein |
| **Gene** | Basic unit of inheritance; a DNA segment on a chromosome that determines one trait |
| **Allele** (*alel*) | An alternative form of a gene (e.g. T tall, t short) |
| **Dominant** | Allele that shows its effect even with one copy (capital letter) |
| **Recessive** | Allele that shows its effect only when two copies are present (small letter) |
| **Genotype** | The gene combination (e.g. Tt) |
| **Phenotype** | The visible trait (e.g. tall) |
| **Homozygous / heterozygous** | TT or tt / Tt |

Human body cells: **46 chromosomes (23 pairs)** — diploid (2n). Gametes: **23 chromosomes** — haploid (n). The 23rd pair are sex chromosomes: **XX female, XY male**.

## 5.1 Cell division (pembahagian sel)

| Feature | Mitosis | Meiosis |
|---|---|---|
| Occurs in | Somatic (body) cells | Reproductive organs (testes, ovaries) |
| Number of divisions | 1 | 2 (meiosis I and II) |
| Daughter cells | 2 diploid cells (2n) | 4 haploid cells (n) |
| Genetics of daughter cells | **Identical** to the parent cell | **Different** (crossing over, independent assortment) |
| Importance | Growth, replacing damaged cells, asexual reproduction | Produces gametes; keeps chromosome number constant; variation |

Stages of mitosis: **Prophase → Metaphase → Anaphase → Telophase** (followed by cytokinesis). Metaphase: chromosomes line up at the equator. Anaphase: sister chromatids are pulled to opposite poles.

**Uncontrolled mitosis → cancer (tumour).**

## 5.2 Inheritance — monohybrid cross

Example: tall (T) is dominant over short (t). Cross Tt × Tt:

| Gametes | T | t |
|---|---|---|
| **T** | TT | Tt |
| **t** | Tt | tt |

Genotypic ratio **1 TT : 2 Tt : 1 tt**; phenotypic ratio **3 tall : 1 short**. Probability of a short offspring = 1/4 = 25%.

**Sex determination:** the mother (XX) produces only X gametes; the father (XY) produces X or Y → probability of a boy = 50%. **The father determines the sex of the child.**

## 5.3 Mutation (mutasi)

**Mutation** — a random change in the genetic material (gene or chromosome). **Mutagens**: radiation (UV, X-rays, gamma rays), chemicals (benzene, cigarette smoke, formaldehyde), some viruses.

| Type | Example disorders | Cause |
|---|---|---|
| Gene mutation | **Sickle-cell anaemia**, albinism, colour blindness, thalassaemia, haemophilia | Change in the structure of one gene |
| Chromosomal mutation | **Down syndrome** (47 chromosomes, trisomy 21), Turner syndrome (45, XO), Klinefelter syndrome (47, XXY) | Change in chromosome number/structure |

Not all mutations are harmful — some give useful variation (e.g. disease-resistant crops).

## 5.4 Genetic engineering technology

**Genetic engineering** — transferring a desired gene from one organism into another to produce a **genetically modified organism (GMO)**.

Examples: **bacteria that produce human insulin** (treating diabetes), Bt corn resistant to insects, golden rice (rich in vitamin A), drought-resistant crops.

| Advantages | Issues/disadvantages |
|---|---|
| High yield, pest/disease resistant | Long-term health effects not yet certain |
| Higher nutritional value | Genes may spread to wild species |
| Produce medicines (insulin, vaccines) | Less biodiversity; ethical & religious issues |

Also: **gene therapy**, **DNA fingerprinting** (forensics, paternity tests).

## 5.5 Variation (variasi)

| Continuous variation | Discontinuous variation |
|---|---|
| Continuous range of values | Clearly distinct traits, no intermediates |
| Height, mass, skin colour | ABO blood group, free/attached earlobes, tongue rolling |
| **Normal distribution** graph (bell-shaped) | **Bar chart** |
| Many genes + environment | One gene; little environmental effect |

Causes of variation: **genetic** (crossing over, independent assortment, random fertilisation, mutation) and **environmental**.`,
      keyPoints: [
        'Humans 46 chromosomes (2n); gametes 23 (n).',
        'Mitosis: 2 identical diploid daughter cells; meiosis: 4 different haploid cells.',
        'Tt × Tt → phenotypic ratio 3 : 1.',
        'Down syndrome: 47 chromosomes (trisomy 21) — chromosomal mutation.',
        'GMO: gene transfer; e.g. bacteria producing insulin.',
        'Continuous variation → normal distribution graph; discontinuous → bar chart.'
      ],
      mistakes: [
        'Confusing gene with allele.',
        'Saying the mother determines the sex of the child.',
        'Classifying blood group as continuous variation.',
        'Writing that meiosis produces 2 cells.'
      ],
      tips: [
        'In a cross diagram show: parental genotype → gametes → offspring genotype → phenotype + ratio. Each line can earn a mark.',
        'GMO issue questions: give both views (benefits + concerns) if asked to "justify".'
      ],
      modelAnswer: `**Question:** Parents who are both heterozygous for albinism (Aa) want to know the probability that their child is albino. Show a cross diagram. [4 marks]

| Step | Answer |
|---|---|
| Parental genotypes | Aa × Aa (1) |
| Gametes | A, a × A, a (1) |
| Offspring genotypes | AA, Aa, Aa, aa (1) |
| Phenotypes & probability | 3 normal : 1 albino; probability of albino = 1/4 = 25% (1) |`
    },
    {
      id: 's4c6', form: 4, num: 6,
      title: 'Support, Movement and Growth (Sokongan, Pergerakan dan Pertumbuhan)',
      weight: 'med',
      summary: 'Support in animals, human skeleton and muscles, growth curves, support and growth patterns in plants.',
      notes: `## 6.1 Support, movement and growth in animals

| Type of support | Example animals | Feature |
|---|---|---|
| **Hydrostatic skeleton** (*rangka hidrostatik*) | Earthworm, jellyfish | Pressurised fluid in the body cavity, controlled by muscles |
| **Exoskeleton** (*rangka luar*) | Insects, crabs, prawns | Hard cuticle (chitin); must undergo **ecdysis** (moulting) to grow |
| **Endoskeleton** (*rangka dalam*) | Fish, birds, mammals | Bones and cartilage; grows with the body |

Aquatic animals get extra support from the **buoyancy of water** (a huge whale can live in the sea but not on land).

**Growth of animals with exoskeletons** happens in stages — a **step-like** graph (size increases suddenly after ecdysis, then stays constant).

## 6.2 Human movement and growth

**Human skeleton** = axial skeleton (skull, vertebral column, rib cage) + appendicular skeleton (limbs, shoulder girdle, pelvic girdle).

Functions of the skeleton: support, protection of organs (the skull protects the brain), movement, producing blood cells (bone marrow), storing calcium.

**Joints:** hinge joints (elbow, knee — movement in one plane) and ball-and-socket joints (shoulder, hip — movement in many directions). Synovial fluid lubricates the joint; cartilage reduces friction.

**Antagonistic muscles:** the biceps and triceps work in pairs.

| Movement | Biceps | Triceps |
|---|---|---|
| Bending the arm | Contracts | Relaxes |
| Straightening the arm | Relaxes | Contracts |

**Tendons** join muscle to bone (not elastic); **ligaments** join bone to bone (elastic).

The **human growth curve** is **sigmoid (S-shaped)** with 2 rapid growth phases: **infancy** and **puberty/adolescence**.

<svg viewBox="0 0 320 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="170" x2="300" y2="170" stroke="currentColor" stroke-width="2"/><line x1="40" y1="170" x2="40" y2="15" stroke="currentColor" stroke-width="2"/><path d="M40,165 C70,160 80,150 110,145 S170,130 190,95 S240,40 295,35" fill="none" stroke="currentColor" stroke-width="3"/><text x="170" y="192" text-anchor="middle" font-size="12" fill="currentColor">Time / age</text><text x="14" y="95" font-size="12" fill="currentColor" transform="rotate(-90 14 95)">Size / height</text><text x="210" y="80" font-size="11" fill="currentColor">rapid phase</text><text x="245" y="30" font-size="11" fill="currentColor">mature</text></svg>

## 6.3 Support, growth and stability in plants

**Woody plants** — supported by **xylem** tissue containing lignin (wood), e.g. rubber tree, durian.
**Non-woody (herbaceous) plants** — supported by the **turgor pressure** of cells, e.g. spinach, yam. With too little water → cells become flaccid → the plant **wilts**.

Other support adaptations:

| Adaptation | Example |
|---|---|
| Tendrils | Bitter gourd, cucumber |
| Buttress roots | Rainforest trees (meranti) |
| Prop/stilt roots | Mangrove, maize |
| Thorns/hooks | Rattan, rose |
| Climbing/twining stems | Water spinach (kangkung), sweet potato |
| Air spaces (aerenchyma) to float | Water hyacinth |

**Plant growth patterns (based on life cycle):**

| Type | Life cycle | Examples |
|---|---|---|
| **Annual** (*semusim*) | Completed in one season/year; dies after flowering & producing seeds | Paddy, maize, spinach |
| **Biennial** (*dwimusim*) | 2 years: year 1 vegetative growth & food storage; year 2 flowers | Carrot, cabbage |
| **Perennial** (*saka*) | > 2 years; flowers repeatedly | Mango, durian, rubber tree |

- Annual plants: a **sigmoid** growth curve (dry mass rises then falls at the end when seeds are dispersed and the plant dies).
- Perennial plants: a series of small sigmoid curves each year (**annual rings** in the stem).

**Meristem** — tissue that actively divides: apical meristem (tips of shoots & roots → **primary** growth, increase in length) and vascular cambium (→ **secondary** growth, increase in girth).

Growth is measured using **dry mass** (most accurate — not affected by water content), length, height or leaf area.`,
      keyPoints: [
        'Three types of skeleton: hydrostatic, exoskeleton (chitin, ecdysis), endoskeleton.',
        'Biceps contracts + triceps relaxes → arm bends.',
        'Tendon: muscle–bone; ligament: bone–bone.',
        'Human growth curve is sigmoid; 2 rapid phases: infancy & adolescence.',
        'Herbaceous plants are supported by turgor pressure; woody plants by lignified xylem.',
        'Annual (paddy), biennial (carrot), perennial (mango).'
      ],
      mistakes: [
        'Saying both muscles contract at the same time.',
        'Confusing tendons with ligaments.',
        'Saying perennial plants flower only once.'
      ],
      tips: [
        'Growth pattern questions usually give a graph — identify the plant type from the curve shape and lifespan.',
        'State "dry mass" as the most accurate parameter for plant growth.'
      ],
      modelAnswer: `**Question:** Why does a yam plant wilt on a hot day, but a rubber tree does not? [3 marks]

**Model answer:**
- Yam is a non-woody plant, supported by the turgor pressure of its cells (1).
- On a hot day the rate of transpiration is high, cells lose water and become flaccid, so the plant wilts (1).
- The rubber tree is woody; it is supported by hard lignified xylem and does not depend on turgor pressure (1).`
    },
    {
      id: 's4c7', form: 4, num: 7,
      title: 'Body Coordination (Koordinasi Badan)',
      weight: 'med',
      summary: 'Human endocrine system, disruption of body coordination (hormone imbalance, drugs, alcohol) and a healthy mind.',
      notes: `## Two coordination systems

| Nervous system | Endocrine system |
|---|---|
| Electrical impulses along neurones | Hormones (chemicals) carried in the **bloodstream** |
| Very fast response | Slower response |
| Short-term effect | Longer-lasting effect |
| Precise, to a specific organ | Can affect many target organs |

## 7.1 Human endocrine system (sistem endokrin manusia)

**Endocrine glands** are **ductless** glands that secrete **hormones** directly into the blood. Hormones are carried to **target organs**.

| Gland | Hormone | Function |
|---|---|---|
| **Pituitary** ("master gland", at the base of the brain) | Growth hormone; TSH; FSH & LH; ADH | Growth; stimulates other glands; menstrual cycle; controls water in the body |
| **Thyroid** (neck) | **Thyroxine** | Controls metabolic rate, growth & development |
| **Adrenal** (above the kidneys) | **Adrenaline** | "Fight or flight" response: heart rate & breathing increase, blood glucose rises |
| **Pancreas** (islets of Langerhans) | **Insulin**, glucagon | Insulin **lowers** blood glucose level; glucagon raises it |
| **Ovaries** | Oestrogen, progesterone | Female secondary sexual characteristics; menstrual cycle; pregnancy |
| **Testes** | Testosterone | Male secondary sexual characteristics; sperm production |

## 7.2 Disruption of body coordination

**(a) Hormone imbalance**

| Hormone | Too much | Too little |
|---|---|---|
| Growth hormone | Gigantism (children), acromegaly (adults) | Dwarfism |
| Thyroxine | Hyperthyroidism — high metabolism, thin, restless, bulging eyes | Hypothyroidism; **goitre** (iodine deficiency) |
| Insulin | Hypoglycaemia | **Diabetes mellitus** — high blood glucose, glucose in urine |

**(b) Drug and substance abuse**

| Group | Examples | Effect on the nervous system |
|---|---|---|
| **Depressants** | Alcohol, heroin, morphine, barbiturates | Slow down the nervous system, drowsiness, longer reaction time |
| **Stimulants** | Amphetamines, cocaine, nicotine, caffeine | Stimulate, keep awake, restless, blood pressure rises |
| **Hallucinogens** | LSD, cannabis | Distorted perception/hallucinations |

**Alcohol** is a depressant: it slows the transmission of impulses and affects coordination, judgement and vision → **longer reaction time** → road accidents. Long-term: liver cirrhosis, brain damage, addiction.

**Reaction time** (*masa tindak balas*) — the time between receiving a stimulus and responding. Measured with the **ruler-drop test**: the shorter the distance the ruler falls before it is caught, the shorter the reaction time.

## 7.3 A healthy mind (minda yang sihat)

Mental health — a state in which a person realises their own abilities, can cope with normal life stresses, works productively and contributes to the community.

Causes of problems: long-term stress, family problems, bullying, drug abuse, chemical imbalance in the brain.

Warning signs: withdrawing from others, changes in sleep/appetite, loss of interest, irritability, thoughts of self-harm.

Ways to keep a healthy mind: exercise, enough sleep, balanced diet, hobbies, sharing problems with someone you trust, religious/moral practice, getting help from a counsellor (Talian Kasih 15999 / Befrienders).

> Mental illness is a real health problem and can be treated — it is not a personal weakness.`,
      keyPoints: [
        'Endocrine glands: ductless, hormones go into the blood.',
        'Pituitary = master gland.',
        'Insulin lowers blood glucose; too little → diabetes mellitus.',
        'Iodine deficiency → goitre (swollen thyroid).',
        'Alcohol & heroin: depressants; amphetamines & nicotine: stimulants.',
        'Alcohol lengthens reaction time.'
      ],
      mistakes: [
        'Saying hormones are carried by nerves.',
        'Saying insulin raises blood glucose.',
        'Classifying alcohol as a stimulant because drunk people seem "active".'
      ],
      tips: [
        'Memorise the gland–hormone–function table; objective questions often test matching.',
        'For questions on the effects of drugs/alcohol, link to reaction time and accident risk.'
      ],
      modelAnswer: `**Experiment:** Ruler-drop test before and after drinking coffee.

| Aspect | Model answer |
|---|---|
| Hypothesis | Taking caffeine shortens reaction time (the ruler falls a shorter distance) |
| Manipulated variable | Caffeine intake (before/after) |
| Responding variable | Distance the ruler falls before it is caught |
| Constant variable | Same person, same hand, starting position of the ruler |
| Operational definition of reaction time | Represented by **the distance the ruler falls before it is caught** by the student |

*Remember: an operational definition must refer to the actual measurement in the experiment.*`
    },
    {
      id: 's4c8', form: 4, num: 8,
      title: 'Elements and Substances (Unsur dan Bahan)',
      weight: 'med',
      summary: 'Basics of matter (atomic structure), the Modern Periodic Table and isotopes.',
      notes: `## 8.1 Basics of matter (asas jirim)

**Matter** — anything that has mass and occupies space. It is made of tiny particles: **atoms, molecules or ions**.

| Type | Meaning | Examples |
|---|---|---|
| **Element** (*unsur*) | A substance made of only one type of atom | Copper, oxygen, carbon |
| **Compound** (*sebatian*) | Two or more elements chemically combined | Water (H₂O), salt (NaCl) |
| **Mixture** (*campuran*) | Two or more substances physically mixed (can be separated physically) | Air, sea water |

**Atomic structure:**

| Subatomic particle | Charge | Relative mass | Location |
|---|---|---|---|
| Proton | +1 | 1 | Nucleus |
| Neutron | 0 | 1 | Nucleus |
| Electron | −1 | 1/1840 (≈ 0) | Shells around the nucleus |

- **Proton number (Z)** = number of protons (= number of electrons in a neutral atom).
- **Nucleon number (A)** = protons + neutrons.
- **Number of neutrons = A − Z.**
- An atom is neutral because the number of protons = number of electrons.

Notation: ²³₁₁Na → Z = 11, A = 23, neutrons = 23 − 11 = **12**.

## 8.2 The Modern Periodic Table of Elements

Elements are arranged in order of **increasing proton number**.

- **Groups** — vertical columns, **18 groups**. Elements in the same group have similar chemical properties (same number of valence electrons).
- **Periods** — horizontal rows, **7 periods**.

| Group | Name | Features |
|---|---|---|
| 1 | Alkali metals (Li, Na, K) | Very reactive, stored in paraffin oil; react with water to give an alkali + H₂ |
| 2 | Alkaline earth metals (Mg, Ca) | Reactive |
| 3–12 | Transition elements (Fe, Cu, Zn) | Coloured compounds, catalysts, hard |
| 17 | Halogens (F, Cl, Br, I) | Reactive non-metals |
| 18 | Noble gases (He, Ne, Ar) | **Inert** — stable electron arrangement; Ar in light bulbs, He in balloons |

Across a period from left to right: properties change from **metal → semi-metal (metalloid, e.g. Si, Ge) → non-metal**.

| Metals | Non-metals |
|---|---|
| Shiny, ductile, malleable | Dull, brittle (solids) |
| Good conductors of heat & electricity | Insulators (except graphite) |
| High melting & boiling points (usually) | Low melting & boiling points (usually) |
| High density | Low density |

**History:** Lavoisier, Döbereiner (triads), Newlands (law of octaves), **Mendeleev** (arranged by atomic mass, left gaps for undiscovered elements), **Moseley** (arranged by proton number — the basis of the modern table).

## 8.3 Isotopes (isotop)

**Isotopes** — atoms of the same element with the **same proton number** but **different nucleon numbers** (different numbers of neutrons). Same chemical properties, different physical properties.

Examples: ¹H, ²H (deuterium), ³H (tritium); ¹²C, ¹⁴C; ³⁵Cl, ³⁷Cl.

**Radioisotopes** — unstable isotopes that decay and emit radioactive radiation.

| Radioisotope | Use |
|---|---|
| **Carbon-14** | Finding the age of fossils/artefacts (carbon dating) |
| **Cobalt-60** | Cancer radiotherapy; sterilising medical tools; food preservation (irradiation) |
| **Iodine-131** | Detecting & treating thyroid disease |
| **Sodium-24** | Detecting leaks in underground pipes |
| **Phosphorus-32** | Studying fertiliser uptake by plants |
| **Uranium-235** | Fuel in nuclear reactors |
| Americium-241 | Smoke detectors |

Handling: store in lead containers, use long tongs, wear a film badge to monitor the dose.`,
      keyPoints: [
        'Neutrons = nucleon number − proton number.',
        'Periodic Table arranged by increasing proton number; 18 groups, 7 periods.',
        'Noble gases (Group 18) are inert.',
        'Isotopes: same protons, different neutrons.',
        'C-14: dating; Co-60: radiotherapy; I-131: thyroid; Na-24: pipe leaks.'
      ],
      formulas: ['Number of neutrons = A − Z', 'Number of electrons (neutral atom) = Z'],
      mistakes: [
        'Saying isotopes have different numbers of protons.',
        'Thinking nucleon number = number of neutrons.',
        'Saying the modern Periodic Table is arranged by atomic mass (that was Mendeleev).'
      ],
      tips: [
        'In the notation with A on top and Z at the bottom, the larger top number is the nucleon number.',
        'Memorise at least 5 uses of radioisotopes with the isotope names.'
      ],
      modelAnswer: `**Question:** Chlorine-35 and chlorine-37 are isotopes. Explain the meaning of isotopes using these two atoms. [2 marks]

**Model answer:** Both have **17 protons** (same proton number) (1), but chlorine-35 has 18 neutrons while chlorine-37 has 20 neutrons — different nucleon numbers (1).`
    },
    {
      id: 's4c9', form: 4, num: 9,
      title: 'Chemicals in Industry (Kimia Industri)',
      weight: 'high',
      summary: 'Alloys, glass and ceramics, and polymers (including natural rubber and vulcanisation).',
      notes: `## 9.1 Alloys (aloi)

**Alloy** — a mixture of two or more elements in which a **metal is the main component**. Purpose: increase **hardness and strength**, increase **resistance to corrosion**, improve **appearance** (shine).

**Why are pure metals soft?** Their atoms are the same size and arranged orderly in layers; when a force is applied the layers of atoms **slide easily** → ductile and malleable.

**Why are alloys harder?** Foreign atoms of **different sizes** disrupt the orderly arrangement of the layers → the layers **cannot slide easily**.

<svg viewBox="0 0 360 140" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="30" cy="30" r="12"/><circle cx="55" cy="30" r="12"/><circle cx="80" cy="30" r="12"/><circle cx="105" cy="30" r="12"/><circle cx="30" cy="55" r="12"/><circle cx="55" cy="55" r="12"/><circle cx="80" cy="55" r="12"/><circle cx="105" cy="55" r="12"/><circle cx="30" cy="80" r="12"/><circle cx="55" cy="80" r="12"/><circle cx="80" cy="80" r="12"/><circle cx="105" cy="80" r="12"/><circle cx="220" cy="30" r="12"/><circle cx="245" cy="30" r="12"/><circle cx="273" cy="32" r="17"/><circle cx="302" cy="30" r="12"/><circle cx="220" cy="57" r="12"/><circle cx="246" cy="60" r="12"/><circle cx="275" cy="64" r="12"/><circle cx="300" cy="58" r="12"/><circle cx="222" cy="85" r="12"/><circle cx="250" cy="88" r="17"/><circle cx="280" cy="90" r="12"/><circle cx="305" cy="86" r="12"/></g><text x="68" y="125" text-anchor="middle" font-size="13" fill="currentColor">Pure metal</text><text x="262" y="125" text-anchor="middle" font-size="13" fill="currentColor">Alloy (larger foreign atoms)</text></svg>

| Alloy | Composition | Properties | Uses |
|---|---|---|---|
| **Steel** | Iron + carbon | Hard, strong | Bridges, building frames, railway tracks |
| **Stainless steel** | Iron + carbon + chromium + nickel | Corrosion-resistant, shiny | Cutlery, sinks, surgical instruments |
| **Bronze** | Copper + tin | Hard, corrosion-resistant, shiny | Medals, statues, bells |
| **Brass** | Copper + zinc | Hard, shiny | Musical instruments, door knobs |
| **Duralumin** | Aluminium + copper + magnesium + manganese | **Light** and strong | Aircraft bodies, racing cars |
| **Pewter** | Tin + copper + antimony | Shiny, corrosion-resistant | Souvenirs |

**Corrosion resistance:** pure iron rusts (turns brown) when exposed to water + oxygen; stainless steel does not because chromium forms a protective oxide layer.

## 9.2 Glass and ceramics (kaca dan seramik)

The main component of glass and ceramics: **silica (silicon dioxide, SiO₂)**.

| Type of glass | Features | Uses |
|---|---|---|
| Fused silica glass | Withstands very high temperature, transparent to UV | Lenses, special lab apparatus |
| **Soda-lime glass** | Cheap, easy to shape, cracks easily with sudden temperature change | Bottles, windows, mirrors |
| **Borosilicate glass** | **Heat-resistant**, withstands sudden temperature change | Lab apparatus (beakers), oven dishes |
| Lead crystal glass | High refractive index, sparkling, heavy | Decorative glassware, lenses |

**Ceramics** — made from **clay** (aluminosilicate) that is shaped and **heated at very high temperature**. Properties: hard, strong but **brittle**, withstands high heat, heat and electrical insulator, resists chemical corrosion. Examples: vases, tiles, toilet bowls, electrical insulators. **Advanced ceramics**: brake discs, heat-shield tiles on spacecraft, superconductors.

## 9.3 Polymers (polimer)

**Polymer** — a long-chain molecule formed from many small repeating units called **monomers**. Process: **polymerisation**.

| Natural polymer | Monomer | Synthetic polymer | Monomer |
|---|---|---|---|
| Natural rubber | Isoprene | Polythene | Ethene |
| Starch, cellulose | Glucose | PVC | Chloroethene (vinyl chloride) |
| Protein | Amino acids | Nylon, perspex, polystyrene | (various) |

**Coagulation of latex:**
- Latex = rubber particles surrounded by a **negatively charged protein membrane** → particles repel one another, latex stays liquid.
- Add **acid** (e.g. ethanoic/formic acid), or bacteria produce lactic acid → hydrogen ions (H⁺) **neutralise the negative charges** → rubber particles collide, membranes break, rubber polymers combine → **latex coagulates**.
- Add **ammonia** (alkali) → OH⁻ ions neutralise the acid → **prevents coagulation**.

**Vulcanisation** (*pemvulkanan*) — rubber is heated with **sulphur** → **sulphur cross-links** form between rubber chains. Vulcanised rubber: more elastic, stronger, harder, heat-resistant and resistant to oxidation. Uses: tyres, gloves, hoses.

**Plastic issues:** non-biodegradable, burning releases toxic gases, microplastics in the sea. Solutions: biodegradable plastics, recycling, reducing single-use plastics.`,
      keyPoints: [
        'Alloys are harder because foreign atoms of different sizes stop the layers of atoms sliding.',
        'Steel = iron + carbon; stainless + chromium + nickel; bronze = Cu + Sn; brass = Cu + Zn; duralumin = light.',
        'Main component of glass & ceramics: silica (SiO₂).',
        'Borosilicate glass withstands temperature changes — lab apparatus.',
        'Acid coagulates latex; ammonia prevents coagulation.',
        'Vulcanisation: sulphur forms cross-links.'
      ],
      mistakes: [
        'Writing bronze = copper + zinc (that is brass).',
        'Saying alloys are harder because "there are more atoms".',
        'Saying ammonia coagulates latex.'
      ],
      tips: [
        'For "compare pure metal and alloy", use an atomic arrangement diagram and the key phrase "layers of atoms slide".',
        'Alloy hardness experiment: steel ball bearing + weight; measure the diameter of the dent. Smaller dent = harder.'
      ],
      modelAnswer: `**Experiment:** A steel ball bearing is placed on a copper block and a bronze block; a 1 kg weight is dropped from a height of 50 cm. The diameter of the dent is measured.

| Aspect | Model answer |
|---|---|
| Hypothesis | Bronze is harder than copper // The diameter of the dent on bronze is smaller |
| Manipulated variable | Type of material (pure copper / bronze) |
| Responding variable | Diameter of the dent |
| Constant variable | Mass of the weight, height of drop, size of the ball bearing |
| Inference | Tin atoms in bronze prevent the layers of copper atoms from sliding |
| Conclusion | An alloy is harder than its pure metal; hypothesis accepted |`
    },
    {
      id: 's4c10', form: 4, num: 10,
      title: 'Chemicals in Medicine and Health (Kimia dalam Perubatan dan Kesihatan)',
      weight: 'med',
      summary: 'Traditional, modern and complementary medicine; free radicals; antioxidants; health products.',
      notes: `## 10.1 Traditional, modern and complementary medicine

| Type | Features | Examples |
|---|---|---|
| **Traditional medicine** (*perubatan tradisional*) | Based on knowledge passed down generations; natural materials (plants, animals) | Tongkat ali, misai kucing, turmeric (antiseptic), ginger (relieves wind), aloe vera (burns), garlic |
| **Modern medicine** (*perubatan moden*) | Medicines produced scientifically, clinically tested, prescribed by doctors | Analgesics, antibiotics, psychotherapeutic medicines |
| **Complementary medicine** (*perubatan komplementari*) | Used **together with** modern treatment as a complement | Acupuncture, reflexology, homeopathy, massage, aromatherapy |

**Modern medicines:**

| Type | Function | Examples |
|---|---|---|
| **Analgesics** | Relieve pain | Paracetamol, aspirin (not suitable for children & gastric patients), codeine |
| **Antibiotics** | Kill / inhibit the growth of **bacteria** (not effective against viruses) | Penicillin, streptomycin |
| **Psychotherapeutic medicines** | Treat mental disorders | Stimulants, antidepressants, antipsychotics |

**Correct use of antibiotics:** finish the whole prescribed course even if you feel better. Otherwise the more resistant bacteria survive and multiply → **antibiotic-resistant bacteria** (*superbugs*).

**Using medicine wisely:** follow the dose and instructions, check the expiry date, never share prescription medicine, tell the doctor about allergies, make sure the product is registered (MAL number / KKM hologram sticker).

## 10.2 Free radicals (radikal bebas)

**Free radicals** — atoms or molecules with an **unpaired electron**; very **reactive** and unstable. They "steal" electrons from molecules in cells (DNA, proteins, membranes) → a chain reaction that damages cells.

**Sources:** UV radiation, cigarette smoke, air pollution, fried/burnt food, pesticides, stress, and normal body metabolism.

**Effects:** premature ageing (wrinkles), cancer, heart disease, cataracts, DNA damage.

## 10.3 Antioxidants (bahan antioksidan)

**Antioxidant** — a substance that **donates electrons to free radicals** to neutralise them, stopping the chain reaction.

Examples: **vitamin C** (guava, orange), **vitamin E** (nuts, palm oil — tocotrienols), **beta-carotene** (carrot), polyphenols (green tea), lycopene (tomato), selenium.

**Antioxidants in processed food:** stop fats/oils from being oxidised → prevent rancid smell. Examples: ascorbic acid, BHA, BHT, tocopherol.

**Common experiment:** apple/potato slices brushed with lime juice (vitamin C) do not turn brown, while untreated slices turn brown — vitamin C prevents oxidation.

## 10.4 Health products (produk kesihatan)

- Health products include **supplements** (vitamins, minerals), personal care products and cosmetics, fortified foods.
- Choose products **registered with KKM** (MAL number, hologram) and read the ingredient label.
- Dangers of unregistered products: may contain **mercury** (whitening creams), **steroids** or hidden medicines, heavy metals.
- Take in moderation — supplements do not replace a balanced diet; excess fat-soluble vitamins (A, D, E, K) can be toxic.`,
      keyPoints: [
        'Antibiotics kill bacteria, not viruses.',
        'Finish the antibiotic course to avoid resistant bacteria.',
        'Free radicals: unpaired electron, very reactive.',
        'Antioxidants donate electrons to free radicals.',
        'Vitamins C, E and beta-carotene are antioxidants.',
        'Choose KKM-registered products (MAL number, hologram).'
      ],
      mistakes: [
        'Taking antibiotics for a cold (virus).',
        'Saying antioxidants "kill" free radicals — they neutralise them by donating electrons.',
        'Confusing complementary medicine with alternative medicine that replaces modern treatment.'
      ],
      tips: [
        'Justify questions: compare the pros and cons of the three types of medicine.',
        'Operational definition of antioxidant in the apple experiment: a substance that stops the apple slice turning brown.'
      ],
      modelAnswer: `**Question:** The doctor gave Ali antibiotics for 7 days. After 3 days Ali felt well and stopped taking them. Explain the effect. [3 marks]

**Model answer:**
- Not all the bacteria were killed in 3 days (1).
- The surviving bacteria are the more resistant ones; they multiply (1).
- A population of antibiotic-resistant bacteria forms; the infection returns and is harder to treat (1).`
    },
    {
      id: 's4c11', form: 4, num: 11,
      title: 'Force and Motion (Daya dan Gerakan)',
      weight: 'high',
      summary: 'Linear motion, motion graphs, gravitational acceleration and free fall, mass and inertia.',
      notes: `## 11.1 Linear motion (gerakan linear)

| Quantity | Meaning | Formula | SI unit |
|---|---|---|---|
| **Distance** | Actual length of path travelled (scalar) | — | m |
| **Displacement** (*sesaran*) | Shortest distance from start to end point **in a specific direction** (vector) | — | m |
| **Speed** | Rate of change of distance | speed = distance ÷ time | m s⁻¹ |
| **Velocity** (*halaju*) | Rate of change of displacement | v = displacement ÷ time | m s⁻¹ |
| **Acceleration** (*pecutan*) | Rate of change of velocity | a = (v − u) ÷ t | m s⁻² |

- *u* = initial velocity, *v* = final velocity, *t* = time.
- Negative acceleration = **deceleration** (*nyahpecutan*).

**Example:** A car accelerates from 10 m s⁻¹ to 25 m s⁻¹ in 5 s. a = (25 − 10) ÷ 5 = **3 m s⁻²**.

**Displacement example:** Ali walks 4 m east, then 3 m north. Distance = 7 m; displacement = √(4² + 3²) = **5 m**.

## Ticker tape and ticker timer

A ticker timer (50 Hz) makes **50 dots per second** → **1 tick = 0.02 s**.

| Dot pattern | Motion |
|---|---|
| Equal spacing between dots | **Uniform velocity** |
| Spacing increasing | **Acceleration** |
| Spacing decreasing | **Deceleration** |

<svg viewBox="0 0 360 110" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><circle cx="20" cy="20" r="3"/><circle cx="50" cy="20" r="3"/><circle cx="80" cy="20" r="3"/><circle cx="110" cy="20" r="3"/><circle cx="140" cy="20" r="3"/><circle cx="20" cy="60" r="3"/><circle cx="30" cy="60" r="3"/><circle cx="48" cy="60" r="3"/><circle cx="76" cy="60" r="3"/><circle cx="116" cy="60" r="3"/><circle cx="168" cy="60" r="3"/></g><g fill="none" stroke="currentColor"><rect x="10" y="10" width="200" height="20"/><rect x="10" y="50" width="200" height="20"/></g><text x="220" y="25" font-size="12" fill="currentColor">uniform velocity</text><text x="220" y="65" font-size="12" fill="currentColor">acceleration</text><text x="10" y="100" font-size="11" fill="currentColor">Tape pulled this way →  (first dot on the left)</text></svg>

**Velocity from the tape:** v = length of one strip ÷ time of the strip. If one strip has 10 ticks and is 5 cm long: time = 10 × 0.02 = 0.2 s; v = 5 ÷ 0.2 = **25 cm s⁻¹**.

**Acceleration from the tape:** a = (v − u) ÷ t, where t = time **between the middle of the first strip and the middle of the last strip**.

## 11.2 Linear motion graphs

| Graph | Gradient gives | Area under the graph gives |
|---|---|---|
| Displacement–time (s–t) | **Velocity** | — |
| Velocity–time (v–t) | **Acceleration** | **Displacement** |

- s–t graph horizontal → the object is **stationary**.
- v–t graph horizontal → **uniform velocity**; sloping upwards → uniform acceleration.

<svg viewBox="0 0 320 190" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="2"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="2"/><polyline points="40,160 120,60 220,60 290,160" fill="none" stroke="currentColor" stroke-width="3"/><text x="62" y="100" font-size="11" fill="currentColor">acceleration</text><text x="125" y="52" font-size="11" fill="currentColor">uniform velocity</text><text x="240" y="100" font-size="11" fill="currentColor">deceleration</text><text x="170" y="182" text-anchor="middle" font-size="12" fill="currentColor">t / s</text><text x="12" y="90" font-size="12" fill="currentColor">v</text></svg>

## 11.3 Gravitational acceleration and free fall

- **Free fall** (*jatuh bebas*) — an object falling under the influence of **gravity only** (no air resistance).
- **Gravitational acceleration, g ≈ 9.81 m s⁻²** at the Earth's surface (questions sometimes use 10 m s⁻²; use the value given).
- In a vacuum, **a feather and a coin fall together** — gravitational acceleration does not depend on mass.
- In air, the feather falls slowly because **air resistance** is large compared with its weight.
- **Weight, W = mg** (unit newton, N). Mass 50 kg → W = 50 × 9.81 = 490.5 N. On the Moon (g ≈ 1.6 m s⁻²) the mass is still 50 kg but the weight ≈ 80 N.

## 11.4 Mass and inertia (jisim dan inersia)

**Inertia** — the tendency of an object to **resist a change in its original state**, whether at rest or moving with uniform velocity (Newton's First Law of Motion).

**The greater the mass, the greater the inertia.**

| Situation | Inertia explanation |
|---|---|
| Passengers thrown forward when a bus brakes suddenly | The body tends to keep moving forward |
| Passengers jerked backwards when a bus starts suddenly | The body tends to stay at rest |
| Tomato sauce comes out when the bottle is swung down then stopped | The sauce keeps moving downwards |
| An oil tanker is divided into several compartments | Reduces the inertia effect of liquid surging forward |

**Reducing the bad effects of inertia:** seat belts, airbags, headrests, compartments in tanker lorries, tying down loads on lorries.

**Inertia balance** — used to study the relationship between mass and inertia: the greater the mass of plasticine on the inertia balance, the **longer the period of oscillation** (greater inertia).`,
      keyPoints: [
        '1 tick = 0.02 s (50 Hz ticker timer).',
        'a = (v − u) ÷ t; unit m s⁻².',
        'Gradient of s–t = velocity; gradient of v–t = acceleration; area under v–t = displacement.',
        'g ≈ 9.81 m s⁻²; in a vacuum all objects fall together.',
        'Inertia increases with mass; seat belts reduce the effect of inertia.',
        'Inertia balance: larger mass → longer period of oscillation.'
      ],
      formulas: [
        'speed = distance ÷ time',
        'velocity = displacement ÷ time',
        'a = (v − u) ÷ t',
        'W = m × g',
        'ticker tape time = number of ticks × 0.02 s'
      ],
      mistakes: [
        'Treating distance and displacement as the same.',
        'Counting dots instead of ticks: the number of ticks = the number of spaces between dots.',
        'Saying heavy objects fall faster in a vacuum.',
        'Confusing mass (kg) with weight (N).'
      ],
      tips: [
        'Show the formula, substitution with units, and the final answer + unit.',
        'For inertia questions, use the phrase: "tends to maintain its original state (at rest/moving)".'
      ],
      modelAnswer: `**Inertia balance experiment:**

| Aspect | Model answer |
|---|---|
| Hypothesis | The greater the mass, the longer the period of oscillation of the inertia balance |
| Manipulated variable | Mass of plasticine |
| Responding variable | Period of oscillation (time for 10 oscillations ÷ 10) |
| Constant variable | Distance of the plasticine from the clamp, initial displacement of the blade |
| Operational definition of inertia | Inertia is shown by **the period of 10 oscillations of the hacksaw blade of the inertia balance** — the longer the period, the greater the inertia |
| Conclusion | The greater the mass, the greater the inertia; hypothesis accepted |`
    },
    {
      id: 's4c12', form: 4, num: 12,
      title: 'Nuclear Energy (Tenaga Nuklear)',
      weight: 'med',
      summary: 'Uses, production (fission & fusion), impacts and nuclear energy in Malaysia.',
      notes: `## 12.1 Uses of nuclear energy

**Nuclear energy** — energy released from the **nucleus of an atom** during a nuclear reaction.

Uses:
- **Generating electricity** (nuclear power stations).
- **Medicine** — radiotherapy, diagnostic imaging, sterilising tools.
- **Agriculture** — irradiation to produce new mutant varieties, insect control (sterile insect technique), food preservation.
- **Industry** — detecting leaks, measuring thickness of sheets.
- **Archaeology** — carbon-14 dating.
- Power for submarines and spacecraft.

## 12.2 Production of nuclear energy

| Feature | **Nuclear fission** (*pembelahan nukleus*) | **Nuclear fusion** (*pelakuran nukleus*) |
|---|---|---|
| Process | A heavy nucleus is **bombarded by a neutron** and splits into two lighter nuclei | Two light nuclei **combine** to form a heavier nucleus |
| Example | Uranium-235 + neutron → barium-141 + krypton-92 + 3 neutrons + energy | Deuterium + tritium → helium + neutron + energy |
| Conditions | Slow neutrons; critical mass | Extremely high temperature & pressure (millions of °C) |
| Where | Nuclear reactors, atomic bombs | **The Sun and stars**, hydrogen bombs |
| Waste | Radioactive waste | Little radioactive waste |

**Chain reaction:** each fission releases 2–3 neutrons that split other U-235 nuclei. In a reactor the chain reaction is **controlled**; in an atomic bomb it is not.

**Einstein's equation:** in a nuclear reaction the total mass of the products is slightly less than the mass of the reactants → the **mass defect** is converted into energy:

**E = mc²** — E = energy (J), m = mass defect (kg), c = speed of light = 3 × 10⁸ m s⁻¹.

Example: mass defect 2 × 10⁻²⁸ kg → E = 2 × 10⁻²⁸ × (3 × 10⁸)² = 2 × 10⁻²⁸ × 9 × 10¹⁶ = **1.8 × 10⁻¹¹ J**.

**Nuclear power station (fission reactor):**

| Component | Function |
|---|---|
| Fuel rods (uranium) | Where fission happens, releasing heat |
| **Moderator** (water/graphite) | **Slows down neutrons** so fission happens more easily |
| **Control rods** (boron/cadmium) | **Absorb neutrons** to control the rate of the chain reaction |
| Coolant (water) | Carries heat to the heat exchanger → steam |
| Thick concrete shield | Stops radiation escaping |

Energy chain: **nuclear energy → heat energy → (steam turns the turbine) kinetic energy → (generator) electrical energy**.

## 12.3 Impact of using nuclear energy

| Advantages | Disadvantages |
|---|---|
| A huge amount of energy from a little fuel | **Radioactive waste** stays dangerous for thousands of years |
| No CO₂ released during operation — does not add to global warming | Risk of accidents (Chernobyl 1986, Fukushima 2011) |
| Stable electricity supply | Very high construction and maintenance costs |
| | Radiation exposure → cancer, mutations, birth defects |

**Managing radioactive waste:** stored in thick steel/concrete containers, buried deep underground in geologically stable areas.

## 12.4 Nuclear energy in Malaysia

- Malaysia **does not have** a nuclear power station.
- The **Malaysian Nuclear Agency** (Agensi Nuklear Malaysia, Bangi) operates the **TRIGA PUSPATI research reactor** (low power) for research, radioisotope production, training and medical, agricultural & industrial applications.
- The use of radioactive materials is regulated under the **Atomic Energy Licensing Act 1984 (Act 304)**.
- The radiation warning symbol (trefoil) is used on containers of radioactive material.`,
      keyPoints: [
        'Fission: a heavy nucleus is split by a neutron (U-235). Fusion: light nuclei combine (the Sun).',
        'E = mc², c = 3 × 10⁸ m s⁻¹, m in kg.',
        'Moderator slows neutrons; control rods absorb neutrons.',
        'Nuclear → heat → kinetic → electrical energy.',
        'Malaysia has the TRIGA PUSPATI research reactor, not a power station.'
      ],
      formulas: ['E = mc²  (E in J, m in kg, c = 3 × 10⁸ m s⁻¹)'],
      mistakes: [
        'Saying control rods slow down neutrons (that is the moderator).',
        'Not squaring c in E = mc².',
        'Using mass in grams.',
        'Saying the Sun produces energy by fission.'
      ],
      tips: [
        'Justify building a nuclear plant in Malaysia — give advantages AND risks, then conclude with a reason.',
        'Write E = mc² with full units; 1 mark is often for correct substitution.'
      ],
      modelAnswer: `**Question:** Justify whether Malaysia should build a nuclear power station. [4 marks]

**Model answer (supporting, example):**
- Nuclear energy produces a huge amount of energy from a small amount of fuel (1).
- It releases no CO₂ during operation — helping to reduce global warming (1).
- However, radioactive waste and accident risks must be managed with shielding, a stable location and strict regulation (1).
- Conclusion: justified if safety and waste management are guaranteed, because it reduces dependence on fossil fuels (1).

*An opposing answer is also accepted if the science arguments are reasonable (high cost, earthquake risk in some areas, radioactive waste, solar energy as an alternative).*`
    },
    {
      id: 's5c1', form: 5, num: 1,
      title: 'Microorganisms (Mikroorganisma)',
      weight: 'high',
      summary: 'The world of microorganisms, factors affecting growth, useful microorganisms, prevention and treatment of diseases, immunity.',
      notes: `## 1.1 The World of Microorganisms

**Microorganisms (mikroorganisma)** — tiny organisms that can only be seen with a microscope.

| Group | Characteristics | Examples |
|---|---|---|
| **Bacteria (bakteria)** | Prokaryotic cells (no true nucleus); shapes: spherical (coccus), rod (bacillus), spiral (spirillum); reproduce by **binary fission (belahan dedua)** | *Lactobacillus*, *Rhizobium*, *Streptococcus* |
| **Fungi (kulat)** | Hyphae/mycelium or single cells (yeast); reproduce by **spores (spora)** or **budding (pertunasan)** (yeast); do not photosynthesise | Yeast, *Mucor*/*Rhizopus* (bread mould), *Penicillium* |
| **Protozoa (protozoa)** | Single-celled eukaryotes, live in damp places/water | *Amoeba*, *Paramecium*, *Plasmodium* (malaria) |
| **Algae (alga)** | Have chlorophyll, **carry out photosynthesis** | *Chlorella*, *Spirogyra* |
| **Virus (virus)** | **Not a cell**; nucleic acid inside a protein coat; **can only reproduce inside living host cells** | HIV, influenza, dengue, SARS-CoV-2 |

**Factors affecting the growth of microorganisms:**

| Factor | Effect |
|---|---|
| **Nutrients** | Source of energy and building materials; no nutrients, no growth |
| **Humidity (kelembapan)** | Most need water — moist bread grows mould faster than dry bread |
| **Temperature** | Optimum ≈ 35–40 °C for many bacteria; low temperature slows growth; high temperature kills (enzymes are denatured) |
| **pH** | Most prefer neutral pH; acidic conditions slow growth (that is why vinegar preserves pickles) |
| **Light** | Algae need light; UV rays kill many microbes |
| **Oxygen** | Aerobes need O₂; anaerobes do not (e.g. tetanus bacteria) |

## 1.2 Useful Microorganisms

| Field | Examples |
|---|---|
| Food | Yeast — bread (CO₂ makes the dough rise), tapai; *Lactobacillus* — yoghurt, cheese; *Rhizopus* fungus — tempeh |
| Medicine | Antibiotics (**penicillin from the fungus *Penicillium***); vaccines; GM bacteria produce insulin |
| Agriculture | *Rhizobium* in root nodules of legumes fixes nitrogen; decomposers produce compost |
| Environment | Sewage treatment; decomposition of organic matter; bioremediation of oil spills |
| Industry/energy | Biogas (methane) from waste; bioethanol |

## 1.3 Prevention and Treatment of Diseases

**Pathogen (patogen)** — a microorganism that causes disease.

| Mode of infection | Example diseases |
|---|---|
| Air/droplets (coughing, sneezing) | Tuberculosis (TB), influenza, COVID-19 |
| Contaminated food/water | Cholera, typhoid, food poisoning |
| Direct contact / body fluids | HIV/AIDS, ringworm |
| **Vector (vektor)** (animal carrier) | *Aedes* mosquito → dengue; *Anopheles* mosquito → malaria; houseflies → cholera, typhoid; rats → leptospirosis |

**Prevention:** personal hygiene (wash hands), cook food thoroughly, destroy vector breeding sites, immunisation/vaccines, quarantine, **aseptic technique (teknik aseptik)** and **sterilisation (pensterilan)** (autoclave — pressurised steam ≈ 121 °C, 15 minutes).

**Treatment:** antibiotics (**bacteria only**), antifungals, antivirals, antiserum.

**Immunity (keimunan)** — the ability of the body to fight infection using **antibodies (antibodi)** (produced by white blood cells/lymphocytes in response to **antigens (antigen)**).

| Type of immunity | How it is obtained | Duration |
|---|---|---|
| Natural active | Recovering from an infection; the body makes its own antibodies | Long |
| **Artificial active** | **Vaccine (vaksin)** (weakened/dead pathogen or part of it) | Long; may need a booster dose |
| Natural passive | Mother's antibodies through the placenta / breast milk | Temporary |
| **Artificial passive** | Injection of **antiserum (antiserum)** (ready-made antibodies) — e.g. snake venom, tetanus | Immediate but temporary |

**Important experiments:**
- Effect of humidity → dry bread vs moist bread in a closed container: the moist bread grows more mould.
- Effect of antibiotics → paper discs with antibiotic on bacterial agar: a **clear zone (zon jernih)** / zone of inhibition (no bacterial growth) forms; a larger clear zone diameter = a more effective antibiotic.`,
      keyPoints: [
        'A virus is not a cell; it only reproduces inside living host cells.',
        'Growth factors: nutrients, humidity, temperature, pH, light, oxygen.',
        'Penicillin is produced from the fungus Penicillium.',
        'Antibiotics do not work against viruses.',
        'Vaccine → artificial active immunity; antiserum → artificial passive immunity.',
        'Larger clear zone → more effective antibiotic.'
      ],
      mistakes: [
        'Stating that a vaccine contains antibodies (a vaccine contains antigens/weakened pathogens; antiserum contains antibodies).',
        'Saying that all microorganisms are harmful.',
        'Writing "high temperature kills microbes" without mentioning that enzymes are denatured when asked to explain.'
      ],
      tips: [
        'Humidity/temperature experiments come out often — master the hypothesis and the variables.',
        'For immunity questions, state the type + source of antibodies + duration.'
      ],
      modelAnswer: `**Experiment:** Two slices of bread — P (dry) and Q (moistened with water) — are kept in closed containers for 4 days.

| Aspect | Model answer |
|---|---|
| Problem statement | Does humidity affect the growth of mould on bread? |
| Hypothesis | Moist bread grows more mould than dry bread |
| Manipulated variable | Humidity of the bread (dry/moist) |
| Responding variable | Number/area of mould colonies |
| Constant (fixed) variable | Type & size of bread, temperature, time |
| Observation | Q grows a lot of mould; P has little/none |
| Inference | Mould needs moisture to grow |
| Conclusion | Humidity promotes the growth of microorganisms; the hypothesis is accepted |

*The inference explains the observation; the conclusion answers the hypothesis.*`
    },
    {
      id: 's5c2', form: 5, num: 2,
      title: 'Nutrition and Food Technology (Nutrisi dan Teknologi Makanan)',
      weight: 'high',
      summary: 'Balanced diet & calorific value, plant nutrient requirements, nitrogen cycle, food production & processing technology, supplements.',
      notes: `## 2.1 Balanced Diet and Calorific Value

**Balanced diet (gizi seimbang)** — a diet that contains **all the food classes** in the **correct amounts** according to the needs of the individual: carbohydrates, proteins, fats, vitamins, minerals, fibre (roughage) and water.

**Calorific value (nilai kalori)** — the amount of energy released when **1 g of food** is completely oxidised. Unit: **kJ g⁻¹** (or kcal g⁻¹; 1 kcal ≈ 4.2 kJ).

- **Fat** has the **highest** calorific value — about twice that of carbohydrates.
- Common values: carbohydrate ≈ 17 kJ g⁻¹, fat ≈ 37–38 kJ g⁻¹, protein ≈ 17–22 kJ g⁻¹ (books differ slightly — **use the values given in the question**).
- Vitamins, minerals, fibre and water do **not** supply energy.

**Calculating energy from a label/table:** Energy = mass × calorific value.
Example: 30 g carbohydrate × 17 kJ g⁻¹ = 510 kJ.

**Experiment to determine calorific value (simple method):** the food is burned under a boiling tube containing water.
Energy absorbed by water = **m c θ** (m = mass of water in g, c = 4.2 J g⁻¹ °C⁻¹, θ = rise in temperature).
Calorific value = energy ÷ mass of food burned.

Example: 20 g of water rises by 30 °C when 0.5 g of peanut is burned → 20 × 4.2 × 30 = 2 520 J → 2 520 ÷ 0.5 = 5 040 J g⁻¹ = **5.04 kJ g⁻¹**. This value is **lower** than the actual value because heat is lost to the surroundings and burning is incomplete.

**Daily energy requirement** depends on age, gender, body size, **activity/occupation**, climate and state of health (e.g. pregnant mothers need more).

## 2.2 Nutrient Requirements of Plants

| Macronutrients (makronutrien) (large amounts) | Micronutrients (mikronutrien) (small amounts) |
|---|---|
| C, H, O, **N, P, K**, Ca, Mg, S | Fe, Mn, Cu, Zn, B, Mo, Cl |

| Element | Function | Deficiency symptoms |
|---|---|---|
| **Nitrogen (N)** | Synthesis of proteins & chlorophyll | **Older leaves turn yellow (chlorosis / klorosis)**, stunted growth |
| **Phosphorus (P)** | Synthesis of nucleic acids, root growth | Purplish/red leaves, weak roots |
| **Potassium (K)** | Protein synthesis, carbohydrate metabolism | **Yellow/brown leaf edges**, spotted leaves |
| **Magnesium (Mg)** | Component of chlorophyll | Chlorosis between leaf veins |
| Calcium (Ca) | Formation of cell walls | Shoots/buds die |

Experiment: complete **culture solution (larutan kultur)** (Knop's solution) vs a solution lacking one element.

## 2.3 The Nitrogen Cycle

<svg viewBox="0 0 360 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="120" y="5" width="120" height="28" rx="6"/><rect x="5" y="85" width="105" height="28" rx="6"/><rect x="250" y="85" width="105" height="28" rx="6"/><rect x="120" y="165" width="120" height="28" rx="6"/><line x1="130" y1="33" x2="60" y2="85"/><line x1="230" y1="33" x2="300" y2="85"/><line x1="300" y1="113" x2="230" y2="165"/><line x1="130" y1="165" x2="60" y2="113"/><line x1="255" y1="95" x2="235" y2="30"/></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="180" y="23">Nitrogen in air (N₂)</text><text x="57" y="103">Plant/animal protein</text><text x="302" y="103">Nitrate (NO₃⁻)</text><text x="180" y="183">Ammonium (NH₄⁺)</text><text x="60" y="55">fixation</text><text x="300" y="55">lightning</text><text x="292" y="145">nitrification ↑</text><text x="70" y="145">decomposition ↓</text><text x="215" y="70">denitrification</text></g></svg>

| Process | Agent | Change |
|---|---|---|
| **Nitrogen fixation (pengikatan nitrogen)** | *Rhizobium* (root nodules of legumes), *Nostoc*; lightning | N₂ → nitrogen compounds (ammonium/nitrate) |
| **Decomposition (pereputan)** | Decomposing bacteria & fungi | Proteins of dead organisms/faeces → ammonium |
| **Nitrification (nitrifikasi)** | *Nitrosomonas* (NH₄⁺ → nitrite), *Nitrobacter* (nitrite → nitrate) | Ammonium → nitrate |
| **Denitrification (denitrifikasi)** | *Pseudomonas denitrificans* | Nitrate → N₂ released into the air |
| **Absorption** | Plant roots | Nitrate absorbed → protein |

## 2.4 Food Production Technology

Hybrid breeds (selective breeding), **tissue culture (kultur tisu)**, genetic engineering (GMO), **hydroponics (hidroponik)** (roots in nutrient solution), **aeroponics (aeroponik)** (roots sprayed with nutrient mist), **fertigation (fertigasi)** (fertiliser + water through a drip system), aquaculture, smart farming (IoT sensors, drones), farm management and biological control.

## 2.5 Food Processing Technology

| Method | Principle |
|---|---|
| **Pasteurisation (pempasteuran)** | Heat to 63 °C (30 min) or 72 °C (15 s), then cool quickly — kills pathogens, keeps taste & nutrients |
| **UHT** | ≈ 135–140 °C for a few seconds — lasts long without a refrigerator before opening |
| **Canning (pengetinan)** | Heated to sterilise, sealed airtight |
| **Drying (pengeringan)** | Removes water — microbes cannot live without water |
| **Freezing / cooling** | Low temperature slows enzyme activity and microbial growth |
| **Salting / sugaring** | Concentrated solution draws water out of microbial cells by **osmosis** |
| **Pickling (penjerukan)** | Vinegar (low pH) slows microbes |
| **Irradiation (penyinaran)** | Gamma rays kill microbes |
| **Vacuum packing (pembungkusan vakum)** | No oxygen for aerobic microbes |
| Preservatives | Sodium benzoate, sodium nitrite (use is limited) |

## 2.6 Health Food and Health Supplements

**Health food (makanan kesihatan)** — food that gives extra health benefits (e.g. fortified food, probiotics, whole grains). **Supplements (suplemen)** — products (pills/capsules/powder) to add nutrients lacking in the diet, e.g. vitamins, calcium, fish oil, iron for pregnant mothers.

Choose wisely: registered with the Ministry of Health (KKM), follow the dose, not a replacement for a balanced diet, consult a doctor.`,
      keyPoints: [
        'Calorific value = energy released by 1 g of food; fat is the highest.',
        'Energy to heat water = m × 4.2 × rise in temperature (J).',
        'N deficiency: older leaves yellow; Mg: chlorosis between veins; K: brown leaf edges.',
        'Rhizobium fixes nitrogen; Nitrosomonas & Nitrobacter: nitrification; Pseudomonas: denitrification.',
        'Pasteurisation 63 °C 30 min / 72 °C 15 s.',
        'Salting: osmosis draws water out of microbes.'
      ],
      formulas: [
        'Energy (J) = m(water, g) × 4.2 J g⁻¹ °C⁻¹ × θ (°C)',
        'Calorific value (J g⁻¹) = energy ÷ mass of food',
        'Food energy = mass × calorific value'
      ],
      mistakes: [
        'Calculating calorific value without dividing by the mass of food.',
        'Saying that vitamins supply energy.',
        'Confusing nitrification with denitrification.',
        'Stating that pasteurisation kills ALL microorganisms (that is sterilisation).'
      ],
      tips: [
        'For "why is the experimental value lower" questions, answer: heat is lost to the surroundings / incomplete burning.',
        'Food processing questions: state the method + the PRINCIPLE (how it stops microbes).'
      ],
      modelAnswer: `**Question:** Explain how salted fish can last a long time. [2 marks]

**Model answer:**
- Salt forms a concentrated solution on the surface of the fish; water leaves the cells of microorganisms by osmosis (1).
- The microorganisms become dehydrated and cannot live/reproduce, so the fish does not rot (1).`
    },
    {
      id: 's5c3', form: 5, num: 3,
      title: 'Sustainability of the Environment (Kelestarian Alam Sekitar)',
      weight: 'high',
      summary: 'Product life cycle, environmental pollution, and preservation & conservation.',
      notes: `## 3.1 Product Life Cycle

**Product life cycle (kitaran hayat produk)** — all the stages in the life of a product, "from cradle to grave":

1. **Extraction of raw materials** (mining, logging)
2. **Manufacturing/processing**
3. **Distribution/transport**
4. **Usage**
5. **Disposal** (landfill, incineration) — or **recycling** (back to stage 2 — "cradle to cradle")

Every stage uses energy and resources, and releases waste/pollutants. **Life cycle assessment** helps us choose products that are less harmful to the environment. Ways to reduce the impact: eco-friendly design, recycled materials, renewable energy, 5R.

## 3.2 Environmental Pollution

**Pollution (pencemaran)** — the presence of substances (pollutants) or energy in the environment that **harm** living things and property.

**(a) Air pollution**

| Pollutant | Source | Effect |
|---|---|---|
| Carbon monoxide (CO) | Vehicle exhaust, incomplete combustion | Combines with haemoglobin — less O₂ is transported |
| Sulphur dioxide (SO₂), nitrogen dioxide (NO₂) | Factories, power stations, vehicles | **Acid rain (hujan asid)** — corrodes buildings, makes soil & lakes acidic |
| Carbon dioxide (CO₂), methane | Burning fossil fuels, landfills | **Greenhouse effect (kesan rumah hijau) → global warming** |
| CFC | Old aerosol sprays, old refrigerators | **Ozone depletion (penipisan lapisan ozon)** → more UV rays → skin cancer |
| Particulate matter (PM2.5, PM10), haze | Open burning, forest fires | Asthma, respiratory diseases |

**Air Pollutant Index (API / IPU)** in Malaysia: 0–50 good; 51–100 moderate; 101–200 unhealthy; 201–300 very unhealthy; > 300 hazardous.

**(b) Water pollution**

Sources: sewage, factory waste (heavy metals — mercury, lead), fertilisers & pesticides from farms, oil spills, rubbish.

**Eutrophication (eutrofikasi)** (cause-and-effect chain — always asked):
1. Fertilisers (nitrates, phosphates) leach into rivers/lakes.
2. Algae grow rapidly (**algal bloom / ledakan alga**) and cover the water surface.
3. Light cannot pass through; aquatic plants and algae die.
4. Decomposing bacteria increase and use a lot of oxygen to decompose them.
5. **Biochemical oxygen demand (BOD / Keperluan Oksigen Biokimia) increases**; dissolved oxygen decreases.
6. Fish and aquatic life die.

**Measuring the level of water pollution:** **methylene blue (metilena biru)** test — the water sample is mixed with methylene blue and kept in the dark. **The faster the blue colour fades → the more microorganisms → the more polluted** the water (high BOD).

**(c) Soil pollution** — pesticides, solid waste, landfill leachate, heavy metals. **(d) Noise, thermal and radioactive pollution.**

**Thermal pollution:** hot water from factories/power stations flows into rivers → dissolved oxygen decreases (gases are less soluble in hot water) → aquatic life is affected.

## 3.3 Preservation and Conservation of the Environment

| Preservation (pemeliharaan) | Conservation (pemuliharaan) |
|---|---|
| Looking after and protecting the environment so that it **stays in its original state** | **Restoring** a damaged environment and managing the use of resources **wisely and sustainably** |
| Examples: gazetting national parks, forest reserves, marine parks | Examples: replanting forests and mangroves, captive breeding of endangered species, treating polluted rivers |

**Other steps:** laws (Environmental Quality Act 1974), Environmental Impact Assessment (EIA) before big projects, awareness campaigns, green technology, international agreements (Montreal Protocol — CFC; Paris Agreement — greenhouse gases).`,
      keyPoints: [
        'Product life cycle: extraction → manufacturing → distribution → usage → disposal/recycling.',
        'SO₂ & NO₂ → acid rain; CO₂ → global warming; CFC → ozone depletion.',
        'Eutrophication: fertiliser → algal bloom → plants die → bacteria use O₂ → BOD rises → fish die.',
        'Methylene blue fades quickly = more polluted water.',
        'Preservation = keep original; conservation = restore & use sustainably.'
      ],
      mistakes: [
        'Saying CO₂ causes ozone depletion.',
        'Stating that methylene blue fading quickly = clean water.',
        'Swapping the meanings of preservation and conservation.',
        'Answering eutrophication with "the water becomes dirty" without the BOD/oxygen chain.'
      ],
      tips: [
        'Pollution questions appear almost every year (reported 2021–2023) — master the cause-and-effect chains.',
        'When asked for suggestions, give a specific step + how it reduces the pollutant.'
      ],
      modelAnswer: `**Methylene blue experiment:** 3 water samples (P: tap water, Q: river water, R: drain water), 1 cm³ of methylene blue added, bottles kept in a dark cupboard.

| Sample | Time for methylene blue to fade (hours) |
|---|---|
| P | 48 |
| Q | 10 |
| R | 3 |

| Aspect | Model answer |
|---|---|
| Hypothesis | The more polluted the water sample, the shorter the time for methylene blue to fade |
| Manipulated variable | Type of water sample |
| Responding variable | Time for methylene blue to fade |
| Constant (fixed) variable | Volume of sample & methylene blue, temperature, kept in the dark |
| Inference (R) | R contains the most microorganisms that use up dissolved oxygen |
| Order of pollution level | R > Q > P |
| Why keep it in the dark? | To stop aquatic plants/algae from photosynthesising and producing oxygen, which would affect the results |`
    },
    {
      id: 's5c4', form: 5, num: 4,
      title: 'Rate of Reaction (Kadar Tindak Balas)',
      weight: 'high',
      summary: 'Introduction to rate of reaction, factors affecting it (size, concentration, temperature, catalyst), collision theory and applications.',
      notes: `## 4.1 Introduction to Rate of Reaction

**Rate of reaction (kadar tindak balas)** — the change in quantity of reactants or products **per unit time**.

**Rate of reaction = change in quantity ÷ time taken**

**Fast** reactions: combustion, fireworks exploding, sodium with water, precipitation.
**Slow** reactions: rusting of iron, photosynthesis, fermentation, decay.

Quantities that can be measured:
- Volume of gas released (e.g. CO₂ from CaCO₃ + acid) — using a **gas syringe (picagari gas)** or an inverted burette.
- Loss of mass (gas escapes).
- Time for a precipitate to form (e.g. the "X" mark disappears in the sodium thiosulphate + acid reaction).

**Average rate** = total change ÷ total time. **Rate at a given time** = **gradient of the tangent** to the graph at that time.

<svg viewBox="0 0 320 190" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="160" x2="300" y2="160" stroke="currentColor" stroke-width="2"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor" stroke-width="2"/><path d="M40,160 C70,70 110,45 170,40 L295,40" fill="none" stroke="currentColor" stroke-width="3"/><path d="M40,160 C100,105 170,55 250,42 L295,40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="170" y="182" text-anchor="middle" font-size="12" fill="currentColor">Time / s</text><text x="12" y="100" font-size="12" fill="currentColor" transform="rotate(-90 12 100)">Volume of gas / cm³</text><text x="180" y="33" font-size="11" fill="currentColor">I: powder (fast)</text><text x="150" y="100" font-size="11" fill="currentColor">II: chips (slow)</text></svg>

- The gradient of the graph is steepest at the start (highest concentration of reactants), then decreases.
- The graph levels off → the reaction is **complete** (reactants used up).

## 4.2 Factors Affecting the Rate of Reaction

| Factor | Effect on rate | Explanation (collision theory) |
|---|---|---|
| **Size of reactant** (total surface area) | Small size (powder) → **higher** rate | Larger total exposed surface area → higher frequency of collisions |
| **Concentration** | Higher concentration → higher rate | More particles per unit volume → higher frequency of collisions |
| **Temperature** | Higher temperature → higher rate | Particles move faster (higher kinetic energy) → more frequent collisions and more of them reach the activation energy |
| **Catalyst (mangkin)** | Presence of a catalyst → higher rate | A catalyst provides an alternative path with **lower activation energy**; the catalyst is chemically unchanged at the end of the reaction |

**Collision theory (teori perlanggaran):** a reaction happens when reactant particles **collide** with **enough energy (≥ activation energy / tenaga pengaktifan)** and the **correct orientation** — called **effective collisions (perlanggaran berkesan)**.

> Key phrase for marks: **"the frequency of effective collisions increases"**.

**Important:** If the mass/quantity of reactants is the same, **the final total volume of gas is the same** even though the rate is different — see graphs I and II above: different gradients, same final level.

## 4.3 Applications of Rate of Reaction

| Situation | Factor |
|---|---|
| Cutting meat into small pieces so it cooks faster | Size/surface area |
| **Pressure cooker** — higher boiling point of water | Temperature |
| Keeping food in a refrigerator | Low temperature → low rate of decay |
| Small pieces of charcoal burn faster; dust explosions in mines | Size |
| Haber process (ammonia) — **iron** catalyst | Catalyst |
| Contact process (sulphuric acid) — **vanadium(V) oxide** catalyst | Catalyst |
| Catalytic converter in car exhaust | Catalyst |
| Enzymes in the body (biological catalysts) | Catalyst |`,
      keyPoints: [
        'Rate = change in quantity ÷ time.',
        'Rate at a given time = gradient of the tangent.',
        'Factors: size, concentration, temperature, catalyst.',
        'Collision theory: effective collisions need energy ≥ activation energy + correct orientation.',
        'A catalyst lowers the activation energy; it is chemically unchanged.',
        'Same quantity of reactants → same final volume of gas.'
      ],
      formulas: ['Average rate = total change in quantity ÷ total time (e.g. cm³ s⁻¹, g s⁻¹)'],
      mistakes: [
        'Saying large size → large surface area.',
        'Stating that a catalyst increases the amount of product.',
        'Answering "particles collide more strongly" without mentioning the frequency of effective collisions.'
      ],
      tips: [
        'Graphs: steeper = higher rate. Compare the gradients, not the final height.',
        'In a concentration experiment, the volume and temperature of the solution must be kept constant.'
      ],
      modelAnswer: `**Experiment:** 5 g of marble chips and 5 g of marble powder are each reacted with 50 cm³ of 0.5 mol dm⁻³ hydrochloric acid. The volume of gas is recorded every 30 s.

| Aspect | Model answer |
|---|---|
| Hypothesis | The smaller the size of the marble, the higher the rate of reaction |
| Manipulated variable | Size of marble (chips/powder) |
| Responding variable | Rate of reaction // volume of gas in a given time |
| Constant (fixed) variable | Mass of marble, volume & concentration of acid, temperature |
| Inference | The powder has a larger total surface area, so the frequency of effective collisions is higher |
| Operational definition of rate | Volume of gas collected in the gas syringe per unit time |`
    },
    {
      id: 's5c5', form: 5, num: 5,
      title: 'Carbon Compounds (Sebatian Karbon)',
      weight: 'high',
      summary: 'Organic & inorganic compounds, hydrocarbons, alcohol, fats and palm oil.',
      notes: `## 5.1 Introduction to Carbon Compounds

| Organic compounds (sebatian organik) | Inorganic compounds (sebatian tak organik) |
|---|---|
| Come from living things; carbon is bonded to hydrogen (and O, N…) | Usually from non-living materials |
| Examples: glucose, protein, fat, ethanol, methane | Examples: CO₂, CO, calcium carbonate (CaCO₃), carbides |
| Burn to produce **CO₂ and H₂O** | |

## 5.2 Hydrocarbons

**Hydrocarbons (hidrokarbon)** — compounds that contain **carbon and hydrogen only**.

| | **Saturated** hydrocarbons (alkanes / alkana) | **Unsaturated** hydrocarbons (alkenes / alkena) |
|---|---|---|
| Carbon bonds | **Single bonds** only (C–C) | At least one **double bond** (C=C) |
| General formula | CₙH₂ₙ₊₂ | CₙH₂ₙ |
| Examples | Methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀ | Ethene C₂H₄, propene C₃H₆ |
| **Bromine water (brown)** | No change | **Decolourised** (brown → colourless) |

**Complete combustion:** CH₄ + 2O₂ → CO₂ + 2H₂O. Incomplete combustion (not enough O₂) → CO (poisonous) and soot.

**Petroleum** (crude oil) — a mixture of hydrocarbons; separated by **fractional distillation (penyulingan berperingkat)** based on different **boiling points**.

| Fraction (boiling point increases ↓) | Uses |
|---|---|
| Petroleum gas (LPG) | Cooking gas |
| Petrol | Fuel for cars |
| Naphtha | Raw material for the petrochemical industry (plastics) |
| Kerosene | Fuel for aeroplanes |
| Diesel | Fuel for lorries, buses |
| Lubricating oil | Lubricant for machines |
| Bitumen | Road surfacing, waterproofing roofs |

The higher the boiling point of a fraction: **bigger** molecules, **more viscous**, **less flammable**, more soot.

## 5.3 Alcohol

**Alcohol (alkohol)** — a carbon compound containing C, H and O with a **hydroxyl group (–OH)**; general formula CₙH₂ₙ₊₁OH. Examples: methanol CH₃OH, **ethanol C₂H₅OH**.

**Producing ethanol by fermentation (penapaian):** yeast (the enzyme zymase) breaks down glucose **without oxygen**, at a suitable temperature (≈ 30–40 °C):

C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂

Ethanol is separated from the mixture by **distillation** (boiling point of ethanol ≈ 78 °C). CO₂ is detected by **limewater turning cloudy**.

Properties of ethanol: colourless liquid, volatile, flammable (blue flame without soot), soluble in water.
Uses: solvent (perfume, medicine), fuel (bioethanol, gasohol), antiseptic/hand sanitiser, industrial raw material.
Effects of alcohol on the body: depressant of the nervous system, liver cirrhosis, addiction (see Chapter 7, Form 4).

## 5.4 Fats

**Fats (lemak)** — esters formed from **fatty acids + glycerol**.

| Saturated fats | Unsaturated fats |
|---|---|
| Fatty acids with **single** C–C bonds | Have C=C **double** bonds |
| **Solid** at room temperature | **Liquid** at room temperature (oils) |
| Animal sources: butter, meat fat, ghee | Plant sources: corn oil, olive oil, soya bean oil |
| Increase LDL cholesterol → risk of atherosclerosis | Healthier if taken in moderation |

**Hydrogenation (penghidrogenan):** unsaturated fat + hydrogen (**nickel** catalyst, ≈ 180 °C) → saturated/partly saturated fat (solid) — e.g. **margarine**.

## 5.5 Palm Oil

**Structure of the oil palm fruit:** exocarp (skin) → **mesocarp** (fibrous flesh → **palm oil**) → endocarp (shell) → **kernel** (→ palm kernel oil).

Varieties: **Dura** (thick shell, thin mesocarp) × **Pisifera** (no shell) → **Tenera** (thin shell, **thick mesocarp** → high oil yield).

**Palm oil extraction process:**

| Stage | Purpose |
|---|---|
| 1. **Sterilisation** (pressurised steam) | Kills microorganisms, **inactivates the lipase enzyme** (which produces free fatty acids → rancid oil), softens the fruit |
| 2. Stripping | Separates the fruits from the bunch |
| 3. Digestion | Mashes the mesocarp, breaks the oil cells |
| 4. Extraction (pressing) | Squeezes out the crude oil |
| 5. Clarification | Separates the oil from water and dirt (filtering, centrifuging) |

**Value of palm oil:** rich in **vitamin E (tocotrienol)** and **beta-carotene** (antioxidants), **no cholesterol**, a balanced mix of saturated and unsaturated fatty acids, stable at frying temperatures.

Uses: cooking oil, margarine, soap (**saponification / saponifikasi**: fat + sodium hydroxide → soap + glycerol), cosmetics, **biodiesel**, candles.`,
      keyPoints: [
        'Hydrocarbons = C and H only.',
        'Saturated alkanes (C–C) do not decolourise bromine water; unsaturated alkenes (C=C) do.',
        'Fractional distillation is based on boiling points.',
        'Fermentation: glucose → ethanol + CO₂ (yeast, no O₂).',
        'Saturated fats are solid (animal); unsaturated fats are liquid (plant).',
        'Sterilising palm fruit inactivates the lipase enzyme and kills microbes.',
        'Tenera = Dura × Pisifera; thick mesocarp.'
      ],
      mistakes: [
        'Stating that CO₂ is an organic compound.',
        'Saying ethanol contains only C and H (a hydrocarbon).',
        'Stating that palm oil contains cholesterol.',
        'Mixing up the function of sterilisation with stripping.'
      ],
      tips: [
        'Palm oil/fats reportedly came out in 2021, 2022 and 2023 — master the extraction process and the reasons for each step.',
        'For "justify a fraction as a fuel", use properties: low boiling point, flammable, less soot, less viscous.'
      ],
      modelAnswer: `**Question:** Why must oil palm fruit bunches be sterilised immediately after harvesting? [3 marks]

**Model answer:**
- To inactivate the lipase enzyme (1) which breaks down the oil into free fatty acids, causing low-quality/rancid oil (1).
- To kill microorganisms // to soften the fruit so it is easily stripped from the bunch (1).`
    },
    {
      id: 's5c6', form: 5, num: 6,
      title: 'Electrochemistry (Elektrokimia)',
      weight: 'med',
      summary: 'Electrolytic cells (electrolysis, electroplating, purification) and chemical cells (simple cell, electrochemical series, types of cells).',
      notes: `## Basic terms

- **Electrolyte** (*elektrolit*) — a compound in the **molten** or **aqueous** state that conducts electricity and is **decomposed** by an electric current (it has free-moving ions). Examples: sodium chloride solution, acids, molten lead(II) bromide.
- **Non-electrolyte** — does not conduct electricity (no free ions): sugar, ethanol, naphthalene.
- Solid ionic compounds (e.g. dry salt) do **not** conduct because the ions cannot move freely.

## 6.1 Electrolytic cell (sel elektrolitik)

**Electrolysis** — the decomposition of an electrolyte into its elements by an **electric current**. Energy change: **electrical → chemical**.

| Electrode | Charge | Attracts | Process |
|---|---|---|---|
| **Anode** | Positive (+), connected to the + terminal of the battery | **Anions** (negative ions) | Ions release electrons (oxidation) |
| **Cathode** | Negative (−) | **Cations** (positive ions) | Ions receive electrons (reduction) |

<svg viewBox="0 0 300 190" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M60,60 L60,170 L240,170 L240,60"/><line x1="105" y1="40" x2="105" y2="150"/><line x1="195" y1="40" x2="195" y2="150"/><line x1="105" y1="40" x2="105" y2="15"/><line x1="105" y1="15" x2="135" y2="15"/><line x1="165" y1="15" x2="195" y2="15"/><line x1="195" y1="15" x2="195" y2="40"/><line x1="140" y1="5" x2="140" y2="25"/><line x1="160" y1="10" x2="160" y2="20"/><line x1="60" y1="80" x2="240" y2="80" stroke-dasharray="4 4"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="105" y="185">Anode (+)</text><text x="195" y="185">Cathode (−)</text><text x="150" y="130">electrolyte</text><text x="150" y="40">battery</text><text x="128" y="10">+</text><text x="172" y="10">−</text></g></svg>

**Example 1 — molten lead(II) bromide (PbBr₂):**
- Cathode: Pb²⁺ receives electrons → **lead** (grey metal).
- Anode: Br⁻ releases electrons → **bromine** (brown gas).

**Applications of electrolysis:**

| Application | Anode | Cathode | Electrolyte |
|---|---|---|---|
| **Electroplating** a spoon with silver | **Silver** (plating metal) | **Spoon** (object to be plated) | **Silver nitrate** solution |
| **Purification of copper** | **Impure copper** (dissolves) | **Pure** copper (gets thicker) | Copper(II) sulphate solution |
| **Extraction of aluminium** | Carbon | Carbon (aluminium collects) | Molten aluminium oxide + cryolite |

> Electroplating: **the object is always the cathode**. Purpose: prevent corrosion, look attractive.

## 6.2 Chemical cell (sel kimia)

A **chemical cell** converts **chemical → electrical** energy.

**Simple cell:** two **different** metals dipped in an electrolyte and joined by a wire → a current flows.
- The **more electropositive** metal (higher in the electrochemical series) becomes the **negative terminal** (it releases electrons and corrodes/gets thinner).
- The less electropositive metal becomes the **positive terminal**.
- **The further apart the two metals are in the electrochemical series, the higher the voltage.**

**Electrochemical series (decreasing electropositivity):**

K, Na, Ca, Mg, Al, Zn, Fe, Sn, Pb, (H), Cu, Ag

Example: the Mg/Cu pair gives a higher voltage than Zn/Cu, and Zn/Cu gives a higher voltage than Fe/Cu.

**Kitchen electrolytes** that can be used: vinegar, lime juice, salt water (they contain free ions).

**Types of chemical cells:**

| Cell | Features | Uses |
|---|---|---|
| Dry cell (zinc–carbon) | Cheap, not rechargeable | Torchlights, wall clocks |
| Alkaline cell | Lasts longer than a dry cell | Remote controls, toys |
| **Lead-acid accumulator** | **Rechargeable**, large current, heavy | Car batteries |
| Lithium-ion cell | Light, rechargeable, high energy | Smartphones, laptops, electric cars |
| Nickel-cadmium cell | Rechargeable | Cordless power tools |
| Mercury / button cell | Small, steady voltage | Watches, hearing aids |

**Disposing of batteries:** never throw them out with ordinary rubbish — heavy metals (mercury, cadmium, lead) pollute soil and water; send them to e-waste recycling centres.

| Electrolytic cell | Chemical cell |
|---|---|
| Electrical → chemical | Chemical → electrical |
| Needs a battery/power supply | Produces its own current |
| Electrodes may be the same type | Two different metals |`,
      keyPoints: [
        'Electrolyte: molten/aqueous with free-moving ions.',
        'Anode (+) attracts anions; cathode (−) attracts cations.',
        'Electroplating: object at the cathode, plating metal at the anode, electrolyte contains ions of the plating metal.',
        'Chemical cell: the more electropositive metal = negative terminal.',
        'Further apart in the electrochemical series → higher voltage.',
        'Electrolytic: electrical → chemical; chemical cell: chemical → electrical.'
      ],
      mistakes: [
        'Putting the object to be plated at the anode.',
        'Saying solid NaCl conducts electricity.',
        'Saying copper is the negative terminal in a Zn/Cu cell.'
      ],
      tips: [
        'Simple cells were reported in 2022 — know how to increase the voltage (choose metals far apart in the series).',
        'Draw a labelled apparatus set-up: power supply, anode, cathode, electrolyte, ammeter/bulb.'
      ],
      modelAnswer: `**Question:** Plan how to electroplate an iron key with copper. [4 marks]

**Model answer:**
- Connect the iron key to the **negative terminal** (cathode) (1).
- A **copper** plate is the anode, connected to the positive terminal (1).
- Electrolyte: **copper(II) sulphate** solution (1).
- Pass a small current for a set time; Cu²⁺ ions receive electrons and are deposited as a copper layer on the key (1).`
    },
    {
      id: 's5c7', form: 5, num: 7,
      title: 'Light and Optics (Cahaya dan Optik)',
      weight: 'med',
      summary: 'Image formation by convex and concave lenses, and optical instruments.',
      notes: `## 7.1 Image formation by lenses (pembentukan imej oleh kanta)

| Convex lens (converging) | Concave lens (diverging) |
|---|---|
| Thicker at the centre | Thinner at the centre |
| **Converges** parallel rays to a real focal point | **Diverges** rays as if from a virtual focal point |

**Terms:**
- **Optical centre (O)** — the point at the centre of the lens; rays through it are not refracted.
- **Principal axis** — the line through the optical centre, perpendicular to the lens.
- **Focal point (F)** — where rays parallel to the principal axis converge (convex) or appear to diverge from (concave).
- **Focal length (f)** — distance between the optical centre and the focal point.

**A thicker/more curved lens → shorter focal length.**

**Estimating focal length:** focus the image of a distant object (e.g. a window/tree) on a screen; the lens-to-screen distance = focal length.

**Three rays for a ray diagram (convex lens):**
1. A ray parallel to the principal axis → refracted through F on the other side.
2. A ray through the optical centre → goes straight on.
3. A ray through F → leaves parallel to the principal axis.

<svg viewBox="0 0 360 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="100" x2="355" y2="100" stroke="currentColor" stroke-width="1"/><ellipse cx="180" cy="100" rx="8" ry="85" fill="none" stroke="currentColor" stroke-width="2"/><line x1="105" y1="100" x2="105" y2="60" stroke="currentColor" stroke-width="3"/><polyline points="99,68 105,60 111,68" fill="none" stroke="currentColor" stroke-width="2"/><line x1="330" y1="100" x2="330" y2="180" stroke="currentColor" stroke-width="3"/><polyline points="324,172 330,180 336,172" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="105,60 180,60 330,180" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="105" y1="60" x2="330" y2="180" stroke="currentColor" stroke-width="1.5"/><g font-size="11" fill="currentColor" text-anchor="middle"><text x="130" y="115">F</text><text x="80" y="115">2F</text><text x="230" y="115">F</text><text x="280" y="115">2F</text><text x="105" y="50">object</text><text x="330" y="195">image</text></g></svg>

*Diagram: object between F and 2F → real, inverted, magnified image beyond 2F (principle of a projector).*

**Image characteristics for a convex lens:**

| Object position (u) | Image characteristics | Application |
|---|---|---|
| Very far (infinity) | Real, inverted, very small, at F | Telescope (objective lens) |
| u > 2f | Real, inverted, **diminished** | **Camera**, eye |
| u = 2f | Real, inverted, same size, at 2F | Photocopier |
| f < u < 2f | Real, inverted, **magnified** | **Projector**, objective lens of a microscope |
| u = f | Image at infinity | Spotlight |
| u < f | **Virtual, upright, magnified** (same side as the object) | **Magnifying glass** |

**Concave lens:** the image is **always virtual, upright and diminished**, formed between F and the lens, on the same side as the object.

A **real image** can be captured on a screen; a **virtual image** cannot.

*Enrichment (may be outside the Science DSKP; it is in Physics):* lens power P = 1/f (f in metres, unit dioptre D); convex lens P positive, concave P negative. Short-sightedness is corrected with a concave lens; long-sightedness with a convex lens.

## 7.2 Optical instruments (peralatan optik)

| Instrument | Lenses/components | Image / principle |
|---|---|---|
| **Magnifying glass** | One convex lens | Object between F and the lens → virtual, upright, magnified image |
| **Camera** | Convex lens, aperture, shutter, sensor (CCD/CMOS) or film | Distant object (u > 2f) → real, inverted, diminished image on the sensor; **focus by moving the lens** |
| **Compound microscope** | 2 convex lenses: **objective lens (short f)** + eyepiece | Final image virtual, **inverted**, greatly magnified |
| **Astronomical telescope** | 2 convex lenses: **objective lens (long f)** + eyepiece (short f) | Final image virtual, inverted; distant objects look bigger |
| **Periscope** | Two plane mirrors / prisms at 45° | Seeing over obstacles (submarines) |
| Projector | Convex lens, object between F and 2F | Real, magnified image on a screen (slide placed upside down) |
| Smartphone camera | Small lenses + digital sensor; several lenses (wide angle, zoom) | Same principle as a camera |

**Care:** clean lenses with soft lens cloth/tissue, store in a dry place (prevents fungus on the lens).`,
      keyPoints: [
        'Convex lens converges; concave lens diverges.',
        'Thicker lens → shorter focal length.',
        'Camera: u > 2f → real, inverted, diminished image.',
        'Projector: f < u < 2f → real, inverted, magnified image.',
        'Magnifying glass: u < f → virtual, upright, magnified image.',
        'Concave lens: image always virtual, upright, diminished.'
      ],
      formulas: ['Enrichment: P = 1/f (f in m) — unit dioptre (D)'],
      mistakes: [
        'Saying a magnifying glass forms a real image.',
        'Forgetting arrowheads on rays in a ray diagram.',
        'Saying a virtual image can be captured on a screen.'
      ],
      tips: [
        'Memorise the object position–image–application table; objective questions often ask for the application.',
        'In ray diagrams: use a ruler, draw at least 2 rays, show arrow directions.'
      ],
      modelAnswer: `**Question:** A student wants to show a large image of a slide on a screen using a convex lens of focal length 10 cm. Where should the slide be placed? Explain. [3 marks]

**Model answer:**
- Place the slide between 10 cm and 20 cm from the lens // between F and 2F (1).
- The image formed is real (can be captured on a screen) and magnified (1).
- The slide is placed upside down because the image formed is inverted (1).`
    },
    {
      id: 's5c8', form: 5, num: 8,
      title: 'Force and Pressure (Daya dan Tekanan)',
      weight: 'med',
      summary: 'Pressure in fluids: liquid pressure, gas & atmospheric pressure, Pascal, Archimedes and Bernoulli principles.',
      notes: `## Pressure (tekanan)

**Pressure** — the force acting **normally (perpendicularly)** per unit surface area.

**P = F ÷ A** — unit **pascal (Pa) = N m⁻²**.

Small area → large pressure (sharp knife, high heels, nails). Large area → small pressure (snow shoes, wide tractor tyres, building foundations).

## 8.1 Pressure in fluids (tekanan dalam bendalir)

**Fluids** = liquids and gases.

**(a) Liquid pressure**

**P = hρg** — h = depth (m), ρ = density of liquid (kg m⁻³), g = 9.81 m s⁻².

- Increases with **depth** and **density** of the liquid.
- Does **not** depend on the shape of the container or the surface area.
- Acts in all directions.

Applications: **dam walls are thicker at the bottom**; water tanks are placed high; IV drip bags are placed higher than the patient's arm; submarines have thick walls.

Example: water pressure (ρ = 1000 kg m⁻³) at a depth of 5 m = 5 × 1000 × 9.81 = **49 050 Pa**.

**(b) Gas pressure and atmospheric pressure**

- Gas pressure is caused by **gas molecules colliding** with the walls of the container.
- Fixed volume: temperature rises → molecules move faster → more frequent collisions → pressure increases (that is why aerosol cans must not be heated).
- Fixed temperature: volume decreases → pressure increases.
- **Atmospheric pressure** — pressure caused by the weight of the air layer: ≈ **101 kPa** (76 cm Hg) at sea level; **decreases with altitude**.
- Applications: drinking with a straw, syringe, rubber sucker, vacuum cleaner.

**(c) Pascal's principle (prinsip Pascal)**

Pressure applied to a liquid in a **closed** system is transmitted **uniformly in all directions**.

**F₁ ÷ A₁ = F₂ ÷ A₂** → a small force on a small piston can lift a large load on a large piston.

<svg viewBox="0 0 340 170" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M40,40 L40,150 L300,150 L300,40"/><path d="M80,40 L80,120 L200,120 L200,40"/><rect x="42" y="55" width="36" height="10"/><rect x="202" y="70" width="96" height="10"/><line x1="60" y1="20" x2="60" y2="52"/><polyline points="54,44 60,52 66,44"/><rect x="225" y="40" width="50" height="30"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="60" y="15">F₁</text><text x="60" y="95">A₁</text><text x="250" y="60">load F₂</text><text x="250" y="105">A₂</text><text x="170" y="140">liquid (hydraulic oil)</text></g></svg>

Example: small piston A₁ = 0.002 m², large piston A₂ = 0.05 m², load 5 000 N.
F₁ = F₂ × A₁ ÷ A₂ = 5 000 × 0.002 ÷ 0.05 = **200 N**.

Applications: **hydraulic jack**, **hydraulic brakes** of cars, dentist's/barber's chairs, heavy machinery.

**Why oil, not water?** Oil does not rust metal parts, it lubricates and has a higher boiling point. **Air bubbles must be removed** — air can be compressed, so pressure is not fully transmitted.

**(d) Archimedes' principle (prinsip Archimedes)**

An object fully or partly immersed in a fluid experiences a **buoyant force** equal to the **weight of fluid displaced**.

- Floating object: buoyant force = weight of object.
- Sinking object: weight > maximum buoyant force.

Applications: **ships** (hollow hull displaces a lot of water; the **Plimsoll line** shows the safe load limit), **submarines** (ballast tanks filled with water to dive, air pumped in to rise), **hot-air balloons**, **hydrometer** (measures liquid density), life jackets.

**(e) Bernoulli's principle (prinsip Bernoulli)**

**The higher the speed of a fluid, the lower its pressure.**

Applications:
- **Aerofoil of an aeroplane wing** — air above the wing moves faster → lower pressure above → the pressure difference produces **lift**.
- **Insecticide sprayer** — fast air through a narrow tube → low pressure at the tube tip → atmospheric pressure pushes the insecticide up, out as a fine spray.
- Bunsen burner, carburettor.
- Two ships sailing close together tend to be pulled towards each other (fast water between them, low pressure).
- Roofs blown off in storms (fast air above the roof).`,
      keyPoints: [
        'P = F ÷ A (Pa).',
        'Liquid pressure P = hρg; increases with depth & density.',
        'Pascal: pressure in an enclosed liquid is transmitted uniformly in all directions; F₁/A₁ = F₂/A₂.',
        'Archimedes: buoyant force = weight of fluid displaced.',
        'Bernoulli: high speed → low pressure.',
        'Air bubbles in a hydraulic system reduce efficiency (air is compressible).'
      ],
      formulas: ['P = F ÷ A', 'P = hρg', 'F₁ ÷ A₁ = F₂ ÷ A₂'],
      mistakes: [
        'Not converting cm² to m² (1 cm² = 0.0001 m²).',
        'Saying liquid pressure depends on the shape of the container.',
        'Saying Bernoulli: high speed → high pressure.'
      ],
      tips: [
        'Hydraulics and Bernoulli were reported together in Section C (2021); also in the PTRS 2024 model paper.',
        'To explain a sprayer, follow the chain: fast air → low pressure → higher atmospheric pressure pushes the liquid up.'
      ],
      modelAnswer: `**Question:** Explain how an aeroplane wing produces lift. [3 marks]

**Model answer:**
- The wing has an aerofoil shape; air above the wing moves faster than air below (1).
- By Bernoulli's principle, the air pressure above the wing is lower than below (1).
- The pressure difference produces a resultant upward force, the lift (1).`
    },
    {
      id: 's5c9', form: 5, num: 9,
      title: 'Space Technology (Teknologi Angkasa Lepas)',
      weight: 'high',
      summary: 'Satellites (types of orbit, uses) and the Global Positioning System (GPS) — latitude, longitude, coordinate formats.',
      notes: `## 9.1 Satellites (satelit)

**Satellite** — an object that orbits a larger object in space.
- **Natural satellite**: the Moon (orbits the Earth).
- **Artificial satellite**: launched by humans using rockets.

A satellite stays in orbit because the **Earth's gravity** provides the centripetal force that keeps it moving in a circle; it moves at a very high speed so it does not fall.

**Satellite components:** solar panels (power), batteries, antenna/transponder (send & receive signals), thrusters (adjust position), sensors/cameras, control computer.

**Types of orbit:**

| Orbit | Approx. altitude | Orbital period | Features & uses |
|---|---|---|---|
| **Low Earth Orbit (LEO)** | 160 – 2 000 km | ≈ 90 minutes | Remote sensing, mapping, high-resolution images, International Space Station (≈ 400 km) |
| **Medium Earth Orbit (MEO)** | 2 000 – 35 786 km | ≈ 12 hours (GPS satellites ≈ 20 200 km) | Navigation (GPS) |
| **Geostationary orbit (GEO)** | **≈ 35 786 km** above the Equator | **24 hours** — same as Earth's rotation | Appears **stationary** from Earth; communication, TV broadcasting, weather |

> A **geostationary satellite** moves in the same direction as the Earth's rotation with a period of 24 hours → always above the same place → satellite dishes at home do not need to be adjusted.

**Polar orbit** — passes over the poles; the Earth rotates beneath it → the whole surface can be mapped.

**Uses of satellites:** communication & broadcasting, weather forecasting, **remote sensing** (monitoring forests, floods, haze, crops), navigation, military, scientific/astronomical research, disaster management.

**Malaysia and satellites:** the **MEASAT** series (communication & broadcasting, geostationary), **TiungSAT-1** (2000, experimental microsatellite), **RazakSAT** (2009, remote sensing, near-equatorial orbit). Agency: **Malaysian Space Agency (MYSA)**.

**Issues:** **space debris** (broken satellites, rocket fragments) may collide with working satellites; high cost; privacy issues.

## 9.2 Global Positioning System (GPS / Sistem Penentu Sejagat)

**GPS** — a satellite navigation system that determines an **exact location** (latitude, longitude, altitude) and time anywhere on Earth. GPS is owned by the USA; other systems: GLONASS (Russia), Galileo (European Union), BeiDou (China) — together called GNSS.

**How GPS works (trilateration):**
1. At least **24 satellites** orbit the Earth, transmitting signals containing time and position.
2. A GPS receiver calculates its **distance** to each satellite from the time the signal takes to arrive.
3. Signals from **3 satellites** → 2D position (latitude, longitude); **4 satellites** → 3D position (+ altitude) and correction of the receiver clock.

**Latitude and longitude:**

| | Latitude | Longitude |
|---|---|---|
| Reference line | **Equator** (0°) | **Prime Meridian** (Greenwich, 0°) |
| Range | 0° – 90° **N/S** | 0° – 180° **E/W** |
| Lines | Horizontal, parallel | Vertical, meet at the poles |

Malaysia lies at roughly 1°–7° N and 100°–119° E.

**Coordinate formats:**
- **DMS** (degrees, minutes, seconds): 3°08'22"N.
- **DD** (decimal degrees): 3.1394°.
- 1° = 60' (minutes); 1' = 60" (seconds).

**Converting DMS → DD:** DD = degrees + minutes/60 + seconds/3600.
Example: 2°11'24"N = 2 + 11/60 + 24/3600 = 2 + 0.1833 + 0.0067 = **2.19°**.

**Converting DD → DMS:** 101.75° → 101° + 0.75 × 60' = 101°45'00".

**Applications of GPS:** vehicle navigation (Waze, Google Maps), tracking vehicles/deliveries, smartwatches (running), precision farming, mapping & land surveying, rescue (emergency location), aviation & shipping, finding the qibla direction.`,
      keyPoints: [
        'Geostationary satellite: ≈ 35 786 km, period 24 h, appears stationary — communication.',
        'LEO: ≈ 90 minutes — remote sensing; ISS ≈ 400 km.',
        'GPS: needs 3 satellites (2D), 4 satellites (3D).',
        'Latitude from the Equator (0–90° N/S); longitude from the Prime Meridian (0–180° E/W).',
        'DD = degrees + minutes/60 + seconds/3600.',
        'Malaysian satellites: MEASAT, TiungSAT-1, RazakSAT.'
      ],
      formulas: ['DD = degrees + minutes ÷ 60 + seconds ÷ 3600', '1° = 60\' ; 1\' = 60"'],
      mistakes: [
        'Saying a geostationary satellite does not move (it moves, but in step with the Earth\'s rotation).',
        'Confusing latitude with longitude.',
        'Dividing seconds by 60 only when converting DMS to DD.'
      ],
      tips: [
        'Satellites/GPS were reported in 2022 and 2023 — know the types of orbit and how GPS works.',
        'For questions on the benefits of space technology, give specific examples (flood forecasting, navigation, live broadcasts).'
      ],
      modelAnswer: `**Question:** Explain why satellites for television broadcasting are placed in geostationary orbit. [3 marks]

**Model answer:**
- A geostationary satellite has an orbital period of 24 hours, the same as the Earth's rotation, and moves in the same direction (1).
- The satellite is always above the same area of the Earth / appears stationary (1).
- Satellite dishes at home need no adjustment and broadcasts are received continuously (1).`
    }
  ],
  questions: [
    // ---------- F4 Chapter 1 ----------
    { id: 'sains-001', ch: 's4c1', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'A student needs to measure out liquid bromine, which is volatile and toxic. Where is this work most suitably carried out?',
      options: ['Laminar air flow cabinet', 'Fume chamber', 'On a laboratory bench near a window', 'Inside an autoclave'],
      answer: 1,
      explain: 'A fume chamber (kebuk wasap) draws toxic/volatile fumes out and protects the user. A laminar air flow cabinet is a sterile space for microbiology work (it protects the culture), not for chemical fumes.',
      source: 'SPM-style (original)' },
    { id: 'sains-002', ch: 's4c1', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Oil in a pan catches fire during a demonstration in the laboratory. Which of the following is the most suitable to put out the fire?',
      options: ['Water fire extinguisher', 'Foam fire extinguisher', 'Pouring tap water on it', 'Opening the windows so air can flow'],
      answer: 1,
      explain: 'An oil fire is a Class B fire. Foam blankets the oil surface and cuts off the oxygen supply. Water is unsuitable because oil floats on water and the fire spreads. Opening windows adds oxygen.',
      source: 'SPM-style (original)' },
    { id: 'sains-003', ch: 's4c1', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'How should Petri dishes containing bacterial cultures be disposed of after an experiment?',
      options: ['Thrown straight into an ordinary rubbish bin', 'Rinsed into the sink with plenty of water', 'Placed in a biohazard bag and autoclaved before disposal', 'Kept in the laboratory refrigerator'],
      answer: 2,
      explain: 'Biological waste must be placed in a biohazard bag and sterilised (autoclaved) to kill the microorganisms before disposal so that it does not spread infection.',
      source: 'SPM-style (original)' },
    { id: 'sains-004', ch: 's4c1', type: 'struct', format: 'struktur', diff: 2, marks: 6,
      stimulus: `The following information shows three incidents in a school laboratory.

| Incident | Description |
|---|---|
| X | The wire of an electric heater catches fire |
| Y | Spilt petrol catches fire |
| Z | Paper and old rags in a rubbish bin catch fire |`,
      q: 'Answer the following questions based on the information above.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Incident Y is a fire of class',
          options: ['A', 'B', 'C', 'D'], answer: 1,
          explain: 'Class B involves flammable liquids such as petrol, oil and paint.' },
        { label: '(b)', type: 'open', marks: 2, q: 'Explain why a water fire extinguisher cannot be used for incident X.',
          model: 'Water is a conductor of electricity (1). The user may get an electric shock (1).',
          rubric: [{ p: 'Water conducts electricity', m: 1 }, { p: 'Risk of electric shock to the user', m: 1 }] },
        { label: '(c)', type: 'match', marks: 3, q: 'Match the personal protective equipment with its function.',
          pairs: [['Safety goggles', 'Protect the eyes from chemical splashes'], ['Face mask', 'Prevent inhaling fumes or dust'], ['Covered shoes', 'Protect the feet from spills and broken glass']],
          explain: 'Each item of PPE protects a particular part of the body from a particular hazard.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-005', ch: 's4c1', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A student will carry out an experiment using concentrated hydrochloric acid, which is corrosive and gives off fumes. Suggest **two** safety measures and justify each suggestion.',
      model: `1. Wear safety goggles and rubber gloves (1) — concentrated acid is corrosive and can injure the eyes and skin if splashed (1).
2. Carry out the experiment in a fume chamber (1) — the acid fumes are drawn out, so the student does not inhale fumes that irritate the respiratory tract (1).

*Other answers accepted: know the location of the eyewash/emergency shower; dilute acid waste before pouring it into a special waste bottle.*`,
      rubric: [{ p: 'Suitable suggestion 1 (e.g. goggles/gloves/lab coat)', m: 1 }, { p: 'Justification of suggestion 1', m: 1 }, { p: 'Suitable suggestion 2 (e.g. fume chamber)', m: 1 }, { p: 'Justification of suggestion 2', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 2 ----------
    { id: 'sains-006', ch: 's4c2', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'What is the ratio of chest compressions to rescue breaths during CPR for an adult?',
      options: ['5 : 1', '15 : 1', '30 : 2', '50 : 5'],
      answer: 2,
      explain: 'Adult CPR: 30 chest compressions followed by 2 rescue breaths, repeated continuously.',
      source: 'SPM-style (original)' },
    { id: 'sains-007', ch: 's4c2', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which of the following victims most needs the Heimlich manoeuvre?',
      options: ['A man who collapsed after an electric shock and is not breathing', 'A child who is clutching his neck and cannot speak after swallowing a sweet', 'A woman who is coughing hard after choking on water', 'A teenager who nearly drowned and has no heartbeat'],
      answer: 1,
      explain: 'The Heimlich manoeuvre is for an airway blocked by an object: the victim cannot speak/cough and clutches the neck. A victim who can still cough is encouraged to keep coughing. A victim who is not breathing/has no heartbeat needs CPR.',
      source: 'SPM-style (original)' },
    { id: 'sains-008', ch: 's4c2', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'During CPR, the victim\'s head is tilted back and the chin is lifted. What is the purpose of this step?',
      options: ['To speed up the heart rate', 'To open the airway so the tongue does not block the trachea', 'To remove food stuck in the oesophagus', 'To lower the victim\'s blood pressure'],
      answer: 1,
      explain: 'In an unconscious victim, the tongue can fall back and block the airway. The head tilt–chin lift opens the airway so that rescue breaths reach the lungs.',
      source: 'SPM-style (original)' },
    { id: 'sains-009', ch: 's4c2', type: 'struct', format: 'struktur', diff: 2, marks: 5,
      stimulus: `A rescuer finds an adult man who is unconscious and not breathing beside a swimming pool. After asking bystanders to call 999, he places the heel of his palm on the centre of the victim's chest and starts pressing. He performs **30 compressions in 16 seconds**.`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'fill', marks: 1, q: 'The procedure carried out by the rescuer is ___.',
          blanks: [['CPR', 'cardiopulmonary resuscitation', 'resusitasi kardiopulmonari']],
          explain: 'Chest compressions + rescue breaths = cardiopulmonary resuscitation (CPR).' },
        { label: '(b)', type: 'numeric', marks: 1, q: 'Calculate the rate of chest compressions performed, in compressions per minute.',
          answer: 112.5, tol: 0.5, unit: 'compressions/minute',
          explain: 'Rate = 30 ÷ 16 s × 60 s = 112.5 compressions per minute.' },
        { label: '(c)', type: 'mcq', marks: 1, q: 'Is this rate suitable?',
          options: ['Yes, because it is within the range of 100–120 compressions per minute', 'No, because it is too slow', 'No, because it is too fast', 'Yes, because the rate is not important'], answer: 0,
          explain: 'The recommended rate is 100–120 compressions per minute; 112.5 is within that range.' },
        { label: '(d)', type: 'open', marks: 2, q: 'Explain why CPR must be started immediately.',
          model: 'Without a flow of oxygenated blood, brain cells begin to die within a few minutes (about 4–6 minutes) (1). CPR pumps oxygenated blood to the brain/vital organs until medical help arrives (1).',
          rubric: [{ p: 'Brain/brain cells damaged/die without oxygen within a few minutes', m: 1 }, { p: 'CPR maintains the flow of oxygenated blood to the brain/vital organs', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-010', ch: 's4c2', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A heavily pregnant woman is choking on food in a restaurant. Explain how the Heimlich manoeuvre must be modified for her and explain the scientific principle that causes the food to be forced out.',
      model: `- Thrusts are made on the **chest** (middle of the breastbone), not on the abdomen (1), so as not to press on the uterus and injure the foetus (1).
- The thrusts push in the thoracic cavity and reduce the volume of the lungs (1); the air pressure in the lungs increases and air rushes out forcefully through the trachea, forcing the food out (1).`,
      rubric: [{ p: 'Thrusts on the chest, not the abdomen', m: 1 }, { p: 'Reason: avoid injuring the foetus/uterus', m: 1 }, { p: 'Volume of thoracic cavity/lungs decreases', m: 1 }, { p: 'Air pressure increases, air forces the food out', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 3 ----------
    { id: 'sains-011', ch: 's4c3', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which instrument is used to measure blood pressure?',
      options: ['Stethoscope', 'Sphygmomanometer', 'Clinical thermometer', 'Digital weighing scale'],
      answer: 1,
      explain: 'A sphygmomanometer (manual or digital) measures blood pressure in units of mmHg.',
      source: 'SPM-style (original)' },
    { id: 'sains-012', ch: 's4c3', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A patient\'s blood pressure reading is 135/85 mmHg. What does the value 135 represent?',
      options: ['The pressure when the ventricles relax', 'The pressure when the ventricles contract', 'The pulse rate per minute', 'The average blood pressure in the veins'],
      answer: 1,
      explain: 'The upper value is the systolic pressure — the blood pressure in the arteries when the ventricles contract. The lower value (85) is the diastolic pressure when the ventricles relax.',
      source: 'SPM-style (original)' },
    { id: 'sains-013', ch: 's4c3', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'Mei Ling has a mass of 58 kg and a height of 152 cm. Calculate her Body Mass Index (BMI). Give your answer to 1 decimal place.',
      answer: 25.1, tol: 0.1, unit: 'kg/m²',
      explain: `1. Convert height to metres: 152 cm = 1.52 m.
2. BMI = mass ÷ height² = 58 ÷ (1.52)² = 58 ÷ 2.3104
3. BMI = **25.1 kg/m²**

According to the WHO table (25.0–29.9), Mei Ling is classified as **overweight**.`,
      source: 'SPM-style (original)' },
    { id: 'sains-014', ch: 's4c3', type: 'struct', format: 'eksperimen', diff: 2, marks: 6,
      stimulus: `A student carries out an experiment to study the effect of physical activity on pulse rate. He feels the pulse at his wrist with two fingers and counts the number of beats in **15 seconds** after each activity, which is carried out for 3 minutes.

| Activity | Number of beats in 15 s | Pulse rate (beats/minute) |
|---|---|---|
| Resting | 18 | 72 |
| Walking | 24 | 96 |
| Running | 33 | ? |`,
      q: 'Answer the following questions based on the experiment above.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Calculate the pulse rate after running.',
          answer: 132, tol: 0, unit: 'beats/minute',
          explain: '33 beats in 15 s → 33 × (60 ÷ 15) = 33 × 4 = 132 beats/minute.' },
        { label: '(b)', type: 'open', marks: 1, q: 'State one hypothesis for this experiment.',
          model: 'The more vigorous the physical activity, the higher the pulse rate.',
          rubric: [{ p: 'Relates the activity (manipulated variable) to the pulse rate (responding variable) with the direction of the relationship', m: 1 }] },
        { label: '(c)', type: 'fill', marks: 1, q: 'The manipulated variable (pemboleh ubah dimanipulasikan) in this experiment is the ___.',
          blanks: [['type of activity', 'type of physical activity', 'physical activity', 'type of activity carried out']],
          explain: 'The student changes the type of activity (resting, walking, running).' },
        { label: '(d)', type: 'open', marks: 1, q: 'State one inference for the pulse rate after running.',
          model: 'The brain/muscles need more oxygen and glucose to produce energy while running, so the heart pumps blood faster.',
          rubric: [{ p: 'Relates to a higher need for oxygen/energy and the heart pumping faster', m: 1 }] },
        { label: '(e)', type: 'open', marks: 1, q: 'State the operational definition of pulse rate.',
          model: 'The number of beats felt with two fingers at the wrist in one minute.',
          rubric: [{ p: 'States what is done (feeling with fingers at the wrist) and what is observed (number of beats in one minute)', m: 1 }] },
        { label: '(f)', type: 'mcq', marks: 1, q: 'Predict the student\'s pulse rate if he rests for 10 minutes after running.',
          options: ['Remains at 132 beats/minute', 'Returns close to 72 beats/minute', 'Drops to 30 beats/minute', 'Rises above 150 beats/minute'], answer: 1,
          explain: 'After resting, the oxygen demand decreases and the pulse rate returns to the resting rate.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-015', ch: 's4c3', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'Encik Rahim, aged 45, has a BMI of 31 kg/m² and a blood pressure of 150/95 mmHg. He works in an office and rarely exercises. Suggest **two** lifestyle changes and explain how each one improves his health parameters.',
      model: `1. Exercise regularly, e.g. brisk walking for 30 minutes, 5 days a week (1) — burns more energy/fat, lowers body weight and BMI, and strengthens the heart (1).
2. Reduce intake of salt and fatty/sugary food; practise a balanced diet (1) — less salt helps to lower blood pressure; less excess energy prevents fat from being stored (1).`,
      rubric: [{ p: 'Suggestion of regular exercise', m: 1 }, { p: 'Explanation: burns fat/lowers BMI/strengthens the heart', m: 1 }, { p: 'Diet suggestion (less salt/fat/sugar)', m: 1 }, { p: 'Explanation: lowers blood pressure/less fat stored', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 4 ----------
    { id: 'sains-016', ch: 's4c4', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which of the following is a renewable energy source?',
      options: ['Coal', 'Natural gas', 'Biomass', 'Uranium'],
      answer: 2,
      explain: 'Biomass (plant waste, oil palm waste) is renewable. Coal and natural gas are fossil fuels; uranium is also limited.',
      source: 'SPM-style (original)' },
    { id: 'sains-017', ch: 's4c4', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Why is the base of a sanitary landfill lined with a waterproof layer?',
      options: ['So that the rubbish decomposes quickly', 'So that leachate does not pollute the groundwater', 'So that methane gas is not formed', 'So that more rubbish can be fitted in'],
      answer: 1,
      explain: 'Leachate (air larut resap) contains toxic substances and heavy metals. The waterproof lining prevents it from seeping into the soil and groundwater.',
      source: 'SPM-style (original)' },
    { id: 'sains-018', ch: 's4c4', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'An oil palm plantation manager builds nest boxes for barn owls on his plantation. This practice is an example of',
      options: ['biological control in the agriculture sector', 'waste management in the forestry sector', 'energy efficiency in the building sector', 'hydroponic farming'],
      answer: 0,
      explain: 'Barn owls eat the rats that damage oil palm fruits — a natural enemy is used in place of rat poison (biological control).',
      source: 'SPM-style (original)' },
    { id: 'sains-019', ch: 's4c4', type: 'struct', format: 'struktur', diff: 2, marks: 6,
      stimulus: `The following information describes the features of Building W.

- Solar panels on the roof
- Rainwater harvesting tank
- Roof planted with plants (green roof)
- Large windows and LED lights`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'fill', marks: 1, q: 'Building W is an example of a ___ building.',
          blanks: [['green', 'eco-friendly', 'environmentally friendly']],
          explain: 'These features are green technology practices in the building sector (green building).' },
        { label: '(b)', type: 'open', marks: 2, q: 'Explain how the large windows and LED lights help environmental sustainability.',
          model: 'Large windows let natural light in, reducing the use of lights; LEDs use less electrical energy (1). Less electricity is generated from fossil fuels, so less CO₂/greenhouse gas is released (1).',
          rubric: [{ p: 'Saves electrical energy (natural light/efficient LEDs)', m: 1 }, { p: 'Less burning of fossil fuels/CO₂ emission', m: 1 }] },
        { label: '(c)', type: 'match', marks: 3, q: 'Match the following practices with the correct 5R concept.',
          pairs: [['Using the same water bottle every day', 'Reuse'], ['Sending old newspapers to a recycling centre', 'Recycle'], ['Repairing a broken chair instead of buying a new one', 'Repair']],
          explain: 'Reuse = use the same item again; Recycle = reprocess materials into new products; Repair = fix an item to extend its life.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-020', ch: 's4c4', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 6,
      q: 'Residents of a small town burn rubbish in the open and throw food waste into the drains. The river in the town smells and haze often occurs. Suggest a Green Technology plan in the waste and wastewater management sector. Explain **three** steps.',
      model: `1. Separate waste at source (organic, recyclable, general) (1) — reduces the waste that is burnt/sent to landfill (1).
2. Compost food waste or produce biogas (1) — organic waste does not enter the drains/river; produces fertiliser/energy and reduces odour (1).
3. Build a wastewater treatment system / oil and grease traps (1) — organic matter is decomposed by bacteria before the water is released, so river water quality improves (1).

*Other answers: sanitary landfill, incinerator with filters, 5R campaign.*`,
      rubric: [{ p: 'Step 1 (e.g. waste separation)', m: 1 }, { p: 'Explanation of step 1', m: 1 }, { p: 'Step 2 (e.g. composting/biogas)', m: 1 }, { p: 'Explanation of step 2', m: 1 }, { p: 'Step 3 (e.g. wastewater treatment)', m: 1 }, { p: 'Explanation of step 3', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 5 ----------
    { id: 'sains-021', ch: 's4c5', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'How many chromosomes are there in one normal human sperm cell?',
      options: ['23', '44', '46', '92'],
      answer: 0,
      explain: 'Gametes (sperm/ovum) are haploid (n) with 23 chromosomes, produced by meiosis. Diploid somatic cells have 46.',
      source: 'SPM-style (original)' },
    { id: 'sains-022', ch: 's4c5', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A baby is diagnosed with Down syndrome. What is the cause of this condition?',
      options: ['A gene mutation that changes the shape of red blood cells', 'A lack of iodine in the mother\'s diet', 'The presence of one extra chromosome 21', 'A viral infection during birth'],
      answer: 2,
      explain: 'Down syndrome is a chromosomal mutation — trisomy 21, giving a total of 47 chromosomes. A change in the shape of red blood cells is sickle-cell anaemia (a gene mutation).',
      source: 'SPM-style (original)' },
    { id: 'sains-023', ch: 's4c5', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which of the following characteristics shows discontinuous variation?',
      options: ['Height of Form 5 students', 'Body mass', 'ABO blood group', 'Length of the palm'],
      answer: 2,
      explain: 'Blood groups have distinct categories (A, B, AB, O) with no intermediates — discontinuous, represented by a bar chart. Height, mass and length are continuous variation.',
      source: 'SPM-style (original)' },
    { id: 'sains-024', ch: 's4c5', type: 'mcq', format: 'objektif', diff: 3, marks: 1,
      q: 'In pea plants, the tall allele (T) is dominant over the short allele (t). What is the phenotypic ratio of the offspring of the cross Tt × tt?',
      options: ['3 tall : 1 short', '1 tall : 1 short', 'All tall', '1 tall : 3 short'],
      answer: 1,
      explain: 'Gametes: T, t × t, t → offspring: Tt, Tt, tt, tt → 2 tall : 2 short = 1 : 1.',
      source: 'SPM-style (original)' },
    { id: 'sains-025', ch: 's4c5', type: 'struct', format: 'struktur', diff: 2, marks: 4,
      stimulus: `The dimples trait is controlled by the dominant allele D; no dimples is controlled by the recessive allele d.

A father **with dimples (Dd)** marries a mother **without dimples (dd)**.`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'What gametes are produced by the father?',
          options: ['D only', 'd only', 'D and d', 'Dd'], answer: 2,
          explain: 'During meiosis, the allele pair Dd separates: half the gametes carry D, half carry d. A haploid gamete carries only one allele, so "Dd" is not a gamete.' },
        { label: '(b)', type: 'numeric', marks: 1, q: 'What is the percentage probability that their child has dimples?',
          answer: 50, tol: 0, unit: '%',
          explain: 'Dd × dd → Dd, Dd, dd, dd → 2/4 with dimples = 50%.' },
        { label: '(c)', type: 'open', marks: 2, q: 'State **two** differences between mitosis and meiosis.',
          model: 'Mitosis produces 2 daughter cells whereas meiosis produces 4 daughter cells (1). Daughter cells of mitosis are diploid and identical to the parent cell, whereas daughter cells of meiosis are haploid and genetically different (1).',
          rubric: [{ p: 'Difference in number of daughter cells (2 vs 4) / number of divisions', m: 1 }, { p: 'Difference in chromosome number (diploid/haploid) or genetic similarity or where it occurs', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-026', ch: 's4c5', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A company offers flood-tolerant genetically modified (GMO) rice seeds to farmers in an area that is frequently hit by floods. Justify whether the farmers should plant this rice.',
      model: `**For (example):**
- The flood-tolerant gene allows the rice to survive even when submerged in water for several days (1).
- Harvests are more stable, securing farmers\' income and the national food supply (1).
- However, the long-term effects on health/the ecosystem need to be monitored; the seeds must be approved by the authorities (1).
- Conclusion: it should be planted because the food security benefits are greater, with monitoring (1).

*Answers against are accepted if they argue: genes spreading to wild rice, less biodiversity, high seed cost, uncertain health effects — with a conclusion.*`,
      rubric: [{ p: 'Science-based advantage 1', m: 1 }, { p: 'Advantage 2 / effect on farmers', m: 1 }, { p: 'Acknowledges risks/disadvantages of GMO', m: 1 }, { p: 'Conclusion consistent with the argument', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 6 ----------
    { id: 'sains-027', ch: 's4c6', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which animal has an exoskeleton?',
      options: ['Earthworm', 'Crab', 'Fish', 'Jellyfish'],
      answer: 1,
      explain: 'A crab has a hard cuticle made of chitin. Earthworms and jellyfish have a hydrostatic skeleton; fish have an endoskeleton.',
      source: 'SPM-style (original)' },
    { id: 'sains-028', ch: 's4c6', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'What happens to the biceps and triceps when the arm is bent?',
      options: ['Biceps contracts, triceps relaxes', 'Biceps relaxes, triceps contracts', 'Both muscles contract', 'Both muscles relax'],
      answer: 0,
      explain: 'The biceps and triceps are antagonistic muscles. To bend the arm, the biceps contracts and pulls the forearm bone up; the triceps relaxes.',
      source: 'SPM-style (original)' },
    { id: 'sains-029', ch: 's4c6', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'In the first year, a carrot stores food in its root. In the second year it flowers, produces seeds and dies. A carrot is a',
      options: ['annual plant', 'biennial plant', 'perennial plant', 'woody plant'],
      answer: 1,
      explain: 'A biennial plant completes its life cycle in two years: year 1 vegetative growth & food storage, year 2 reproduction.',
      source: 'SPM-style (original)' },
    { id: 'sains-030', ch: 's4c6', type: 'struct', format: 'struktur', diff: 2, marks: 5,
      stimulus: `The graph shows the change in **dry mass** of plant P from seedling until death.

<svg viewBox="0 0 320 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="170" x2="305" y2="170" stroke="currentColor" stroke-width="2"/><line x1="40" y1="170" x2="40" y2="15" stroke="currentColor" stroke-width="2"/><path d="M40,165 C80,163 110,150 140,110 S200,40 240,38 C260,38 275,55 295,80" fill="none" stroke="currentColor" stroke-width="3"/><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="185">0</text><text x="105" y="185">4</text><text x="170" y="185">8</text><text x="235" y="185">12</text><text x="295" y="185">16</text><text x="170" y="198">Time / weeks</text></g><text x="14" y="100" font-size="11" fill="currentColor" transform="rotate(-90 14 100)">Dry mass / g</text></svg>`,
      q: 'Answer the following questions based on the graph.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Plant P is most likely',
          options: ['an annual, such as paddy', 'a perennial, such as a mango tree', 'a biennial, such as cabbage', 'a woody plant, such as a rubber tree'], answer: 0,
          explain: 'The life cycle is complete in about 16 weeks (one season) with a sigmoid curve that then falls — a characteristic of an annual plant.' },
        { label: '(b)', type: 'open', marks: 2, q: 'Explain why the dry mass decreases after week 12.',
          model: 'The plant has matured and produced seeds/fruits (1); the seeds are dispersed/leaves fall and the plant begins to die, so dry matter is lost (1).',
          rubric: [{ p: 'Plant matures/flowers/produces seeds', m: 1 }, { p: 'Seeds dispersed/leaves fall/plant dies — loss of dry matter', m: 1 }] },
        { label: '(c)', type: 'open', marks: 1, q: 'Why is dry mass used instead of fresh mass?',
          model: 'Fresh mass is affected by the water content, which varies; dry mass shows growth more accurately.',
          rubric: [{ p: 'Varying water content affects fresh mass', m: 1 }] },
        { label: '(d)', type: 'fill', marks: 1, q: 'Primary growth (increase in length) occurs in the ___ tissue at the tips of shoots and roots.',
          blanks: [['apical meristem', 'meristem', 'apical meristematic']],
          explain: 'The apical meristem divides actively to increase the length of shoots and roots.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-031', ch: 's4c6', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 3,
      q: 'The growth curve of a crab is "staircase"-shaped. Explain why, and state why a crab is easily preyed upon immediately after moulting.',
      model: `- A crab has a hard exoskeleton that cannot grow (1).
- It grows only after ecdysis (moulting) before the new exoskeleton hardens — size increases sharply, then stays constant until the next ecdysis, so the graph looks like a staircase (1).
- Immediately after ecdysis, the new exoskeleton is still soft, so the crab has less protection and is easily preyed upon (1).`,
      rubric: [{ p: 'Hard exoskeleton cannot grow', m: 1 }, { p: 'Growth occurs only after ecdysis (sharp then constant)', m: 1 }, { p: 'New exoskeleton is soft — less protection', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 7 ----------
    { id: 'sains-032', ch: 's4c7', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which hormone lowers the blood glucose level?',
      options: ['Adrenaline', 'Insulin', 'Thyroxine', 'Testosterone'],
      answer: 1,
      explain: 'Insulin is secreted by the pancreas and lowers the blood glucose level. Adrenaline raises the blood glucose level.',
      source: 'SPM-style (original)' },
    { id: 'sains-033', ch: 's4c7', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Villagers in a remote area have swollen necks because their diet lacks iodine. Which gland is affected?',
      options: ['Pituitary', 'Adrenal', 'Thyroid', 'Pancreas'],
      answer: 2,
      explain: 'Iodine is needed to make thyroxine. Iodine deficiency causes the thyroid gland to swell (goitre).',
      source: 'SPM-style (original)' },
    { id: 'sains-034', ch: 's4c7', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Alcohol is classified as a depressant because alcohol',
      options: ['stimulates the nervous system and keeps a person awake', 'slows down the transmission of impulses in the nervous system', 'causes hallucinations', 'increases the secretion of insulin'],
      answer: 1,
      explain: 'Depressants slow down the central nervous system — reaction time becomes longer and coordination is disrupted.',
      source: 'SPM-style (original)' },
    { id: 'sains-035', ch: 's4c7', type: 'struct', format: 'eksperimen', diff: 2, marks: 6,
      stimulus: `A student carries out a ruler-drop test to study the effect of sleep duration on reaction time. A friend releases a ruler and the student catches it as quickly as possible. The distance the ruler falls is recorded.

| Condition | Trial 1 (cm) | Trial 2 (cm) | Trial 3 (cm) | Average (cm) |
|---|---|---|---|---|
| 8 hours of sleep | 12.0 | 12.4 | 11.8 | 12.1 |
| 3 hours of sleep | 18.6 | 19.2 | 18.9 | ? |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Calculate the average distance the ruler falls after 3 hours of sleep.',
          answer: 18.9, tol: 0.05, unit: 'cm',
          explain: '(18.6 + 19.2 + 18.9) ÷ 3 = 56.7 ÷ 3 = 18.9 cm.' },
        { label: '(b)', type: 'open', marks: 1, q: 'State one hypothesis for this experiment.',
          model: 'The shorter the duration of sleep, the longer the reaction time // the longer the distance the ruler falls.',
          rubric: [{ p: 'Relates sleep duration to reaction time/distance fallen, with direction', m: 1 }] },
        { label: '(c)', type: 'open', marks: 2, q: 'State the manipulated variable and the responding variable.',
          model: 'Manipulated variable (pemboleh ubah dimanipulasikan): duration of sleep (1). Responding variable (pemboleh ubah bergerak balas): distance the ruler falls // reaction time (1).',
          rubric: [{ p: 'Manipulated: duration of sleep', m: 1 }, { p: 'Responding: distance the ruler falls / reaction time', m: 1 }] },
        { label: '(d)', type: 'open', marks: 1, q: 'State one inference for the result after 3 hours of sleep.',
          model: 'Lack of sleep makes the brain tired, so impulses are transmitted/processed more slowly.',
          rubric: [{ p: 'Tired brain/nervous system → impulses processed more slowly', m: 1 }] },
        { label: '(e)', type: 'open', marks: 1, q: 'State the operational definition of reaction time.',
          model: 'Reaction time is shown by the distance the ruler falls before it is caught by the student; the longer the distance, the longer the reaction time.',
          rubric: [{ p: 'Refers to the distance the ruler falls before it is caught', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-036', ch: 's4c7', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 3,
      q: 'Explain why driving after drinking alcohol increases the risk of road accidents.',
      model: `- Alcohol is a depressant that slows down the transmission of impulses in the nervous system (1).
- The driver's reaction time becomes longer — slow to brake when there is danger (1).
- Coordination, vision and judgement are impaired (e.g. misjudging distance/speed) (1).`,
      rubric: [{ p: 'Alcohol is a depressant, impulses slower', m: 1 }, { p: 'Longer reaction time', m: 1 }, { p: 'Coordination/vision/judgement impaired', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 8 ----------
    { id: 'sains-037', ch: 's4c8', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which subatomic particle has no charge?',
      options: ['Proton', 'Electron', 'Neutron', 'Ion'],
      answer: 2,
      explain: 'The neutron is neutral (charge 0). A proton is +1, an electron −1. An ion is not a subatomic particle.',
      source: 'SPM-style (original)' },
    { id: 'sains-038', ch: 's4c8', type: 'numeric', format: 'pengiraan', diff: 1, marks: 1,
      q: 'An iron atom is represented by the notation ⁵⁶₂₆Fe. How many neutrons does this atom have?',
      answer: 30, tol: 0,
      explain: 'Number of neutrons = nucleon number − proton number = 56 − 26 = **30**.',
      source: 'SPM-style (original)' },
    { id: 'sains-039', ch: 's4c8', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Element X is in Group 18 of the Periodic Table. Which of the following is true about X?',
      options: ['X is very reactive and is stored in paraffin oil', 'X is an inert gas and can be filled into light bulbs', 'X is a metal that conducts electricity', 'X forms coloured compounds'],
      answer: 1,
      explain: 'Group 18 are the noble gases — inert because of their stable electron arrangement. Argon is filled into bulbs so the filament is not oxidised.',
      source: 'SPM-style (original)' },
    { id: 'sains-040', ch: 's4c8', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which radioisotope is used to detect leaks in underground water pipes?',
      options: ['Carbon-14', 'Iodine-131', 'Sodium-24', 'Cobalt-60'],
      answer: 2,
      explain: 'Sodium-24 is added to the water; a high radiation reading at the ground surface shows the location of the leak.',
      source: 'SPM-style (original)' },
    { id: 'sains-041', ch: 's4c8', type: 'struct', format: 'struktur', diff: 2, marks: 4,
      stimulus: `The table shows information about three atoms, P, Q and R. (The letters are not the real symbols of the elements.)

| Atom | Proton number | Nucleon number |
|---|---|---|
| P | 6 | 12 |
| Q | 6 | 14 |
| R | 7 | 14 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'open', marks: 2, q: 'Which atoms are isotopes? Explain.',
          model: 'P and Q (1). Both have the same proton number (6) but different nucleon numbers/numbers of neutrons (1).',
          rubric: [{ p: 'P and Q', m: 1 }, { p: 'Same proton number, different nucleon number/neutrons', m: 1 }] },
        { label: '(b)', type: 'numeric', marks: 1, q: 'How many neutrons are in atom R?',
          answer: 7, tol: 0,
          explain: '14 − 7 = 7 neutrons.' },
        { label: '(c)', type: 'open', marks: 1, q: 'Q is a radioisotope of carbon. State one of its uses.',
          model: 'Finding the age of fossils/ancient artefacts (carbon-14 dating).',
          rubric: [{ p: 'Carbon dating / finding the age of fossils or artefacts', m: 1 }] }
      ],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 9 ----------
    { id: 'sains-042', ch: 's4c9', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Bronze is an alloy made of',
      options: ['copper and zinc', 'copper and tin', 'iron and carbon', 'aluminium and magnesium'],
      answer: 1,
      explain: 'Bronze = copper + tin. Copper + zinc = brass; iron + carbon = steel.',
      source: 'SPM-style (original)' },
    { id: 'sains-043', ch: 's4c9', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Why is duralumin used to build aircraft bodies?',
      options: ['Light and strong', 'Heavy and heat-resistant', 'Soft and easy to shape', 'Conducts electricity well'],
      answer: 0,
      explain: 'Duralumin (aluminium + copper + magnesium + manganese) has a low density but is strong — suitable for aircraft bodies.',
      source: 'SPM-style (original)' },
    { id: 'sains-044', ch: 's4c9', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A rubber tapper adds ammonia solution to the collected latex. What is the purpose?',
      options: ['To coagulate the latex quickly', 'To prevent the latex from coagulating', 'To vulcanise the rubber', 'To add colour to the latex'],
      answer: 1,
      explain: 'Ammonia (an alkali) neutralises the acid produced by bacteria, so the protein membrane stays negatively charged and the rubber particles repel each other — the latex does not coagulate.',
      source: 'SPM-style (original)' },
    { id: 'sains-045', ch: 's4c9', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Laboratory beakers are made of borosilicate glass because this glass',
      options: ['is cheap and easy to shape', 'withstands sudden changes in temperature', 'has a high refractive index', 'is biodegradable'],
      answer: 1,
      explain: 'Borosilicate glass is heat-resistant and does not crack easily when heated or cooled quickly.',
      source: 'SPM-style (original)' },
    { id: 'sains-046', ch: 's4c9', type: 'struct', format: 'eksperimen', diff: 2, marks: 7,
      stimulus: `An experiment is carried out to compare the hardness of copper and brass. A steel ball bearing is taped onto a block. A 1 kg weight is dropped from a height of 50 cm onto the ball bearing. The diameter of the dent formed is measured.

| Block | Dent diameter (mm) — Trial 1 | Trial 2 | Trial 3 |
|---|---|---|---|
| Copper | 3.0 | 3.2 | 3.1 |
| Brass | 2.0 | 2.1 | 1.9 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Calculate the average dent diameter on the copper block.',
          answer: 3.1, tol: 0.05, unit: 'mm',
          explain: '(3.0 + 3.2 + 3.1) ÷ 3 = 9.3 ÷ 3 = 3.1 mm.' },
        { label: '(b)', type: 'open', marks: 1, q: 'State one hypothesis.',
          model: 'Brass is harder than copper // The dent diameter on brass is smaller than on copper.',
          rubric: [{ p: 'Hypothesis comparing hardness/dent diameter of the alloy and the pure metal', m: 1 }] },
        { label: '(c)', type: 'open', marks: 3, q: 'State the manipulated, responding and constant variables.',
          model: 'Manipulated: type of material (copper/brass) (1). Responding: diameter of the dent (1). Constant: mass of the weight // height from which the weight is dropped // size of the ball bearing (1).',
          rubric: [{ p: 'Manipulated variable: type of material/block', m: 1 }, { p: 'Responding variable: diameter of the dent', m: 1 }, { p: 'One correct constant variable', m: 1 }] },
        { label: '(d)', type: 'open', marks: 1, q: 'State the inference for the result of the brass block.',
          model: 'Zinc atoms of a different size in brass stop the layers of copper atoms from sliding, so brass is harder.',
          rubric: [{ p: 'Foreign (zinc) atoms of different size stop layers of atoms sliding', m: 1 }] },
        { label: '(e)', type: 'mcq', marks: 1, q: 'Based on the results, which material is more suitable for making door knobs?',
          options: ['Copper, because it is softer', 'Brass, because it is harder and shiny', 'Copper, because its dent diameter is larger', 'Both are equally suitable'], answer: 1,
          explain: 'Brass is harder (smaller dent), durable and shiny — suitable for door knobs.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-047', ch: 's4c9', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 5,
      q: 'Latex left overnight coagulates. Explain this coagulation process, and explain why rubber gloves are made of vulcanised rubber.',
      model: `**Coagulation:**
- Rubber particles in latex are surrounded by a negatively charged protein membrane, so the particles repel each other (1).
- Bacteria from the air produce lactic acid; hydrogen ions neutralise the negative charges on the membrane (1).
- Rubber particles collide, the membranes break, and the rubber polymers combine → the latex coagulates (1).

**Vulcanisation:**
- Rubber is heated with sulphur; sulphur cross-links form between polymer chains (1).
- Vulcanised rubber is more elastic, stronger, heat-resistant and resistant to oxidation — gloves do not tear easily (1).`,
      rubric: [{ p: 'Negatively charged protein membrane — particles repel', m: 1 }, { p: 'Acid (from bacteria) neutralises the negative charge', m: 1 }, { p: 'Particles collide, membranes break, polymers combine', m: 1 }, { p: 'Vulcanisation: sulphur cross-links', m: 1 }, { p: 'Properties of vulcanised rubber suitable for gloves', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 10 ----------
    { id: 'sains-048', ch: 's4c10', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Antibiotics are effective for treating diseases caused by',
      options: ['viruses', 'bacteria', 'vitamin deficiency', 'gene mutation'],
      answer: 1,
      explain: 'Antibiotics kill or inhibit the growth of bacteria. They are not effective against viruses such as the common cold.',
      source: 'SPM-style (original)' },
    { id: 'sains-049', ch: 's4c10', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'How do antioxidants protect body cells?',
      options: ['By donating electrons to free radicals', 'By absorbing ultraviolet radiation', 'By killing bacteria', 'By producing more free radicals'],
      answer: 0,
      explain: 'Free radicals have an unpaired electron. Antioxidants donate electrons to neutralise them and stop the chain reaction that damages cells.',
      source: 'SPM-style (original)' },
    { id: 'sains-050', ch: 's4c10', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A cancer patient undergoing chemotherapy also receives acupuncture to reduce nausea. In this situation acupuncture is',
      options: ['modern medicine', 'traditional medicine that replaces chemotherapy', 'complementary medicine', 'antibiotic treatment'],
      answer: 2,
      explain: 'Complementary medicine is used together with (to complement) modern treatment, not to replace it.',
      source: 'SPM-style (original)' },
    { id: 'sains-051', ch: 's4c10', type: 'struct', format: 'eksperimen', diff: 2, marks: 5,
      stimulus: `Three apple slices of the same size are prepared.

| Slice | Treatment | Colour after 30 minutes |
|---|---|---|
| J | Brushed with lime juice | Stays pale yellow |
| K | Brushed with distilled water | Brown |
| L | No treatment | Brown |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'open', marks: 1, q: 'State one hypothesis.',
          model: 'Lime juice prevents apple slices from turning brown.',
          rubric: [{ p: 'Relates lime juice (antioxidant) to preventing the colour change', m: 1 }] },
        { label: '(b)', type: 'fill', marks: 1, q: 'The manipulated variable is the type of ___ brushed on the apple.',
          blanks: [['solution', 'substance', 'liquid', 'treatment']],
          explain: 'What is changed is the type of solution/substance (lime juice, distilled water, none).' },
        { label: '(c)', type: 'open', marks: 1, q: 'State the inference for slice J.',
          model: 'Lime juice contains vitamin C (an antioxidant) which prevents oxidation of the apple surface.',
          rubric: [{ p: 'Vitamin C/antioxidant in lime juice prevents oxidation', m: 1 }] },
        { label: '(d)', type: 'open', marks: 1, q: 'State the operational definition of an antioxidant.',
          model: 'An antioxidant is a substance which, when brushed on an apple slice, stops the apple turning brown after 30 minutes.',
          rubric: [{ p: 'Refers to the apple not turning brown after being brushed with the substance', m: 1 }] },
        { label: '(e)', type: 'mcq', marks: 1, q: 'Which substance could replace lime juice and give the same result?',
          options: ['Salt solution', 'Orange juice', 'Cooking oil', 'Tap water'], answer: 1,
          explain: 'Orange juice is rich in vitamin C, an antioxidant.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-052', ch: 's4c10', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'Your sister wants to buy a cheap face-whitening cream sold online without a KKM registration number. Advise her, giving scientific reasons.',
      model: `- Unregistered products may contain banned substances such as mercury or steroids (1).
- Mercury can be absorbed through the skin and damage the kidneys/nervous system; steroids thin the skin (1).
- Choose products with a KKM registration/notification number and a full ingredient label (1).
- Consult a pharmacist/doctor and read the label before use (1).`,
      rubric: [{ p: 'May contain harmful substances (mercury/steroids/heavy metals)', m: 1 }, { p: 'Effect of that substance on health', m: 1 }, { p: 'Choose KKM-registered products', m: 1 }, { p: 'Another wise step (read label/consult pharmacist)', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 11 ----------
    { id: 'sains-053', ch: 's4c11', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'What is the SI unit of acceleration?',
      options: ['m s⁻¹', 'm s⁻²', 'N', 'm'],
      answer: 1,
      explain: 'Acceleration = change in velocity (m s⁻¹) ÷ time (s) → m s⁻².',
      source: 'SPM-style (original)' },
    { id: 'sains-054', ch: 's4c11', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'A trolley pulls a ticker tape through a 50 Hz ticker timer. One strip of tape containing **5 ticks** is **4 cm** long. Calculate the velocity of the trolley.',
      answer: 40, tol: 0.5, unit: 'cm s⁻¹',
      explain: `1. Time for 1 tick = 1/50 = 0.02 s.
2. Time for 5 ticks = 5 × 0.02 = 0.1 s.
3. Velocity = 4 cm ÷ 0.1 s = **40 cm s⁻¹**.`,
      source: 'SPM-style (original)' },
    { id: 'sains-055', ch: 's4c11', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'A car is moving at 20 m s⁻¹. The driver brakes and the car stops in 4 s. Calculate the acceleration of the car (give a negative sign for deceleration).',
      answer: -5, tol: 0.01, unit: 'm s⁻²',
      explain: `a = (v − u) ÷ t = (0 − 20) ÷ 4 = **−5 m s⁻²**.
The negative sign shows a deceleration of 5 m s⁻².`,
      source: 'SPM-style (original)' },
    { id: 'sains-056', ch: 's4c11', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'The tank of an oil tanker lorry is divided into several small compartments. What is the purpose?',
      options: ['To increase the mass of oil carried', 'To reduce the effect of inertia of the oil when the lorry brakes suddenly', 'To increase the acceleration of the lorry', 'To make it easier to pump the oil out'],
      answer: 1,
      explain: 'When the lorry stops suddenly, the oil tends to keep moving forward (inertia). Small compartments reduce the mass of oil surging at once and its inertia effect.',
      source: 'SPM-style (original)' },
    { id: 'sains-057', ch: 's4c11', type: 'struct', format: 'struktur', diff: 2, marks: 6,
      stimulus: `The velocity–time graph shows the motion of a bus from one stop to the next.

<svg viewBox="0 0 340 210" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="170" x2="320" y2="170" stroke="currentColor" stroke-width="2"/><line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="2"/><polyline points="40,170 120,50 240,50 320,170" fill="none" stroke="currentColor" stroke-width="3"/><line x1="40" y1="50" x2="120" y2="50" stroke="currentColor" stroke-dasharray="3 3"/><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="185">0</text><text x="120" y="185">4</text><text x="240" y="185">10</text><text x="320" y="185">14</text><text x="180" y="203">Time / s</text><text x="28" y="54">12</text><text x="28" y="174">0</text></g><text x="14" y="110" font-size="11" fill="currentColor" transform="rotate(-90 14 110)">Velocity / m s⁻¹</text></svg>`,
      q: 'Answer the following questions based on the graph.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Calculate the acceleration of the bus from 0 s to 4 s.',
          answer: 3, tol: 0.01, unit: 'm s⁻²',
          explain: 'a = (12 − 0) ÷ 4 = 3 m s⁻² (gradient of the graph).' },
        { label: '(b)', type: 'mcq', marks: 1, q: 'What type of motion does the bus have from 4 s to 10 s?',
          options: ['Uniform acceleration', 'Uniform velocity', 'Deceleration', 'Stationary'], answer: 1,
          explain: 'A horizontal line on a v–t graph → constant velocity of 12 m s⁻¹.' },
        { label: '(c)', type: 'numeric', marks: 2, q: 'Calculate the total displacement of the bus from 0 s to 14 s.',
          answer: 120, tol: 0.5, unit: 'm',
          explain: `Displacement = area under the v–t graph:
- 0–4 s: ½ × 4 × 12 = 24 m
- 4–10 s: 6 × 12 = 72 m
- 10–14 s: ½ × 4 × 12 = 24 m
Total = 24 + 72 + 24 = **120 m**.` },
        { label: '(d)', type: 'open', marks: 2, q: 'Standing passengers are pushed forward between 10 s and 14 s. Explain.',
          model: 'The bus decelerates/brakes (1). Due to inertia, the passengers\' bodies tend to keep moving forward at the original velocity (1).',
          rubric: [{ p: 'Bus decelerates/stops', m: 1 }, { p: 'Inertia — body tends to keep moving forward', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-058', ch: 's4c11', type: 'struct', format: 'eksperimen', diff: 3, marks: 4,
      stimulus: `An experiment is carried out using an inertia balance. Plasticine of different masses is fixed to the end of a hacksaw blade; the blade is displaced and released. The time for 10 oscillations is recorded.

| Mass of plasticine (g) | 20 | 40 | 60 | 80 |
|---|---|---|---|---|
| Time for 10 oscillations (s) | 4.0 | 5.2 | 6.1 | 7.0 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Calculate the period of one oscillation for the 60 g plasticine.',
          answer: 0.61, tol: 0.005, unit: 's',
          explain: 'Period = 6.1 s ÷ 10 = 0.61 s.' },
        { label: '(b)', type: 'open', marks: 1, q: 'State the hypothesis for this experiment.',
          model: 'The greater the mass of plasticine, the longer the period of oscillation of the inertia balance.',
          rubric: [{ p: 'Mass increases → period of oscillation increases', m: 1 }] },
        { label: '(c)', type: 'open', marks: 1, q: 'What is the relationship between mass and inertia based on this experiment?',
          model: 'The greater the mass, the greater the inertia.',
          rubric: [{ p: 'Larger mass → larger inertia', m: 1 }] },
        { label: '(d)', type: 'mcq', marks: 1, q: 'Predict the time for 10 oscillations if 100 g of plasticine is used.',
          options: ['3.5 s', '6.5 s', '7.8 s', '14.0 s'], answer: 2,
          explain: 'The time increases by ≈ 0.9–1.2 s for every 20 g. From 7.0 s (80 g), a reasonable prediction is ≈ 7.8 s. 14.0 s is far too large; 6.5 s is less than the 80 g value.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-059', ch: 's4c11', type: 'numeric', format: 'pengiraan', diff: 1, marks: 2,
      q: 'Calculate the weight of a student of mass 45 kg on the Earth\'s surface. (g = 9.81 m s⁻²)',
      answer: 441.45, tol: 0.1, unit: 'N',
      explain: `W = m × g = 45 × 9.81 = **441.45 N** (≈ 441 N).
Mass (kg) is the same everywhere; weight (N) depends on g.`,
      source: 'SPM-style (original)' },

    // ---------- F4 Chapter 12 ----------
    { id: 'sains-060', ch: 's4c12', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'The Sun\'s energy is produced through',
      options: ['fission of uranium nuclei', 'fusion of hydrogen nuclei', 'burning of hydrogen gas in oxygen', 'decay of carbon-14'],
      answer: 1,
      explain: 'Inside the Sun, hydrogen nuclei (isotopes such as deuterium & tritium) combine to form helium — nuclear fusion — at extremely high temperature and pressure.',
      source: 'SPM-style (original)' },
    { id: 'sains-061', ch: 's4c12', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'What is the function of control rods (boron or cadmium) in a nuclear reactor?',
      options: ['To slow down neutrons', 'To absorb neutrons to control the rate of the chain reaction', 'To cool the reactor core', 'To supply uranium fuel'],
      answer: 1,
      explain: 'Control rods absorb neutrons; lowering them slows the reaction. The moderator (water/graphite) slows down neutrons.',
      source: 'SPM-style (original)' },
    { id: 'sains-062', ch: 's4c12', type: 'numeric', format: 'pengiraan', diff: 3, marks: 2,
      q: 'In a fission reaction the mass defect is 3.0 × 10⁻²⁸ kg. Calculate the energy released. Give the answer in units of **× 10⁻¹¹ J** (example: if the answer is 5.0 × 10⁻¹¹ J, type 5.0). (c = 3 × 10⁸ m s⁻¹)',
      answer: 2.7, tol: 0.05, unit: '× 10⁻¹¹ J',
      explain: `E = mc²
= 3.0 × 10⁻²⁸ × (3 × 10⁸)²
= 3.0 × 10⁻²⁸ × 9 × 10¹⁶
= 27 × 10⁻¹² = **2.7 × 10⁻¹¹ J**`,
      source: 'SPM-style (original)' },
    { id: 'sains-063', ch: 's4c12', type: 'struct', format: 'struktur', diff: 2, marks: 5,
      stimulus: `The equation below represents a nuclear reaction in a reactor.

²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + **x** ¹₀n + energy`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Determine the value of x.',
          answer: 3, tol: 0,
          explain: 'Nucleon numbers must balance: 235 + 1 = 141 + 92 + x → 236 = 233 + x → x = 3.' },
        { label: '(b)', type: 'open', marks: 2, q: 'Explain how a chain reaction happens.',
          model: 'Each fission releases 3 neutrons (1). These neutrons bombard other U-235 nuclei and cause more fissions continuously (1).',
          rubric: [{ p: 'Fission releases several new neutrons', m: 1 }, { p: 'These neutrons split other U-235 nuclei — continuously', m: 1 }] },
        { label: '(c)', type: 'mcq', marks: 1, q: 'What is the energy change in a nuclear power station?',
          options: ['Nuclear → heat → kinetic → electrical', 'Nuclear → electrical → heat → kinetic', 'Chemical → heat → electrical', 'Nuclear → light → electrical'], answer: 0,
          explain: 'Heat from fission produces steam → turns the turbine (kinetic) → the generator produces electricity.' },
        { label: '(d)', type: 'open', marks: 1, q: 'State one disadvantage of nuclear energy.',
          model: 'It produces radioactive waste that stays dangerous for a very long time // risk of accidents/radiation leaks.',
          rubric: [{ p: 'Radioactive waste / accident risk / high cost / dangerous radiation', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-064', ch: 's4c12', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'Residents near a proposed nuclear power station site are worried about their safety. Suggest **two** safety measures the station must have and explain each.',
      model: `1. A thick concrete shield around the reactor (1) — stops radioactive radiation escaping into the environment (1).
2. An automatic control-rod system that can be fully lowered in an emergency (1) — absorbs neutrons and stops the chain reaction immediately (1).

*Other answers: location away from earthquake zones/residents, continuous radiation monitoring, radioactive waste stored in special containers buried deep underground, workers wear film badges.*`,
      rubric: [{ p: 'Suitable measure 1', m: 1 }, { p: 'Explanation of measure 1', m: 1 }, { p: 'Suitable measure 2', m: 1 }, { p: 'Explanation of measure 2', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 1 ----------
    { id: 'sains-065', ch: 's5c1', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which microorganism is NOT a cell and can only reproduce inside a living host cell?',
      options: ['Bacterium', 'Yeast', 'Virus', 'Protozoan'],
      answer: 2,
      explain: 'A virus is made of nucleic acid in a protein coat. It has no cell structure and can only reproduce inside living host cells.',
      source: 'SPM-style (original)' },
    { id: 'sains-066', ch: 's5c1', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A baby receives the measles vaccine. What type of immunity does the baby gain?',
      options: ['Natural active immunity', 'Artificial active immunity', 'Natural passive immunity', 'Artificial passive immunity'],
      answer: 1,
      explain: 'A vaccine contains weakened/killed pathogens (antigens). The body makes its own antibodies — active immunity — obtained artificially through injection.',
      source: 'SPM-style (original)' },
    { id: 'sains-067', ch: 's5c1', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which vector spreads dengue fever?',
      options: ['Anopheles mosquito', 'Aedes mosquito', 'Housefly', 'Rat'],
      answer: 1,
      explain: 'The Aedes mosquito carries the dengue virus. Anopheles carries malaria (Plasmodium); houseflies spread cholera/typhoid; rats spread leptospirosis.',
      source: 'SPM-style (original)' },
    { id: 'sains-068', ch: 's5c1', type: 'struct', format: 'eksperimen', diff: 2, marks: 6,
      stimulus: `Three paper discs are placed on a nutrient agar plate that has been spread evenly with bacteria. Disc A is soaked in antibiotic A, disc B in antibiotic B and disc C in distilled water. The plate is incubated at 37 °C for 2 days.

| Disc | Diameter of clear zone (mm) |
|---|---|
| A | 12 |
| B | 25 |
| C | 0 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Which antibiotic is more effective?',
          options: ['Antibiotic A', 'Antibiotic B', 'Both are equally effective', 'Neither is effective'], answer: 1,
          explain: 'A larger clear zone means more bacteria were killed/inhibited — B (25 mm) is more effective.' },
        { label: '(b)', type: 'open', marks: 1, q: 'What is the purpose of disc C?',
          model: 'As a control — to show that the clear zone is caused by the antibiotic, not by the paper disc/water.',
          rubric: [{ p: 'Control; shows the clear zone is due to the antibiotic', m: 1 }] },
        { label: '(c)', type: 'open', marks: 1, q: 'State one hypothesis.',
          model: 'Different types of antibiotics have different effectiveness in killing bacteria // Antibiotics inhibit bacterial growth.',
          rubric: [{ p: 'Relates type/presence of antibiotic to bacterial growth or clear zone', m: 1 }] },
        { label: '(d)', type: 'open', marks: 2, q: 'State one step of aseptic technique in this experiment and its reason.',
          model: 'Flame the forceps/mouth of the bottle before use // sterilise the agar plate in an autoclave (1). To kill microorganisms from the surroundings so the plate is not contaminated (1).',
          rubric: [{ p: 'A correct aseptic step', m: 1 }, { p: 'Reason: prevent contamination by other microorganisms', m: 1 }] },
        { label: '(e)', type: 'open', marks: 1, q: 'State the operational definition of the effectiveness of an antibiotic.',
          model: 'The diameter of the clear zone formed around the paper disc on the agar; the larger the clear zone, the more effective the antibiotic.',
          rubric: [{ p: 'Refers to diameter of the clear zone around the disc', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-069', ch: 's5c1', type: 'struct', format: 'struktur', diff: 2, marks: 5,
      stimulus: `The graph shows the antibody level in the blood of two people, X and Y, after receiving an injection on day 0. Person X received a second injection on day 30.

<svg viewBox="0 0 340 200" width="100%" style="max-width:420px" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="170" x2="320" y2="170" stroke="currentColor" stroke-width="2"/><line x1="40" y1="170" x2="40" y2="15" stroke="currentColor" stroke-width="2"/><path d="M40,170 C70,170 80,135 110,130 C130,128 150,150 175,155 C185,156 190,60 215,40 C240,30 280,45 315,55" fill="none" stroke="currentColor" stroke-width="3"/><path d="M40,60 C80,70 120,130 170,155 C220,168 280,170 315,170" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><g font-size="11" fill="currentColor" text-anchor="middle"><text x="40" y="185">0</text><text x="175" y="185">30</text><text x="315" y="185">60</text><text x="180" y="198">Time / days</text><text x="250" y="28">X (solid line)</text><text x="95" y="55">Y (dashed line)</text></g><text x="14" y="110" font-size="11" fill="currentColor" transform="rotate(-90 14 110)">Antibody level</text></svg>`,
      q: 'Answer the following questions based on the graph.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Which person received antiserum?',
          options: ['X, because the antibody level rises slowly', 'Y, because the antibody level is high immediately then falls', 'X, because there are two injections', 'Y, because the antibody level increases with time'], answer: 1,
          explain: 'Antiserum contains ready-made antibodies, so the level is high immediately but falls as they are not replaced — artificial passive immunity.' },
        { label: '(b)', type: 'open', marks: 2, q: 'Explain why the antibody level of X after the second injection is higher than after the first.',
          model: 'The second injection is a booster dose (1). The body has memory cells/has been exposed to the antigen before, so it produces antibodies faster and in larger amounts (1).',
          rubric: [{ p: 'Second injection is a booster dose of vaccine', m: 1 }, { p: 'Faster/larger antibody response due to earlier exposure (memory)', m: 1 }] },
        { label: '(c)', type: 'open', marks: 2, q: 'A man is bitten by a venomous snake. Which type of injection should he receive? Explain.',
          model: 'Antiserum (antivenom) (1). It contains ready-made antibodies that act immediately to neutralise the venom; a vaccine would be too slow (1).',
          rubric: [{ p: 'Antiserum/antivenom', m: 1 }, { p: 'Ready-made antibodies act immediately', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-070', ch: 's5c1', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'There is a dengue outbreak in a housing area. Suggest **two** measures to control the outbreak and explain each one.',
      model: `1. Destroy breeding sites — remove stagnant water in containers, tyres and drains every week (1) — Aedes mosquitoes lay eggs in clean stagnant water, so fewer larvae develop into adults (1).
2. Fogging / using larvicide (e.g. abate) in water that cannot be removed (1) — kills adult mosquitoes/larvae and breaks the transmission cycle (1).

*Other answers: use mosquito repellent/nets, wear long sleeves, community gotong-royong, seek early treatment to stop mosquitoes biting infected people.*`,
      rubric: [{ p: 'Measure 1', m: 1 }, { p: 'Explanation linked to the vector life cycle/transmission', m: 1 }, { p: 'Measure 2', m: 1 }, { p: 'Explanation of measure 2', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 2 ----------
    { id: 'sains-071', ch: 's5c2', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which class of food has the highest calorific value?',
      options: ['Carbohydrate', 'Protein', 'Fat', 'Fibre'],
      answer: 2,
      explain: 'Fat releases about twice as much energy per gram as carbohydrate. Fibre provides no energy.',
      source: 'SPM-style (original)' },
    { id: 'sains-072', ch: 's5c2', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A plant grown in a culture solution has stunted growth and its older leaves turn yellow. Which element is the solution most likely lacking?',
      options: ['Nitrogen', 'Phosphorus', 'Calcium', 'Iron'],
      answer: 0,
      explain: 'Nitrogen is needed to make proteins and chlorophyll. Nitrogen deficiency causes yellowing (chlorosis) of older leaves and stunted growth.',
      source: 'SPM-style (original)' },
    { id: 'sains-073', ch: 's5c2', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which bacterium converts ammonium compounds into nitrites in the nitrogen cycle?',
      options: ['Rhizobium', 'Nitrosomonas', 'Nitrobacter', 'Pseudomonas denitrificans'],
      answer: 1,
      explain: 'Nitrosomonas: ammonium → nitrite; Nitrobacter: nitrite → nitrate (both nitrification). Rhizobium fixes nitrogen; Pseudomonas denitrificans carries out denitrification.',
      source: 'SPM-style (original)' },
    { id: 'sains-074', ch: 's5c2', type: 'numeric', format: 'pengiraan', diff: 2, marks: 3,
      q: 'A 0.6 g piece of bread is burnt completely under a boiling tube containing 25 g of water. The water temperature rises by 24 °C. Calculate the calorific value of the bread in kJ g⁻¹. (Specific heat capacity of water = 4.2 J g⁻¹ °C⁻¹)',
      answer: 4.2, tol: 0.05, unit: 'kJ g⁻¹',
      explain: `1. Energy absorbed by water = m × c × θ = 25 × 4.2 × 24 = 2 520 J
2. Calorific value = 2 520 J ÷ 0.6 g = 4 200 J g⁻¹
3. = **4.2 kJ g⁻¹**

The real value is higher, because heat is lost to the surroundings and burning may be incomplete.`,
      source: 'SPM-style (original)' },
    { id: 'sains-075', ch: 's5c2', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'One serving of a breakfast cereal contains 20 g of carbohydrate, 5 g of protein and 8 g of fat. Using the values carbohydrate 17 kJ g⁻¹, protein 17 kJ g⁻¹ and fat 37 kJ g⁻¹, calculate the total energy in one serving.',
      answer: 721, tol: 1, unit: 'kJ',
      explain: `- Carbohydrate: 20 × 17 = 340 kJ
- Protein: 5 × 17 = 85 kJ
- Fat: 8 × 37 = 296 kJ
- Total = 340 + 85 + 296 = **721 kJ**`,
      source: 'SPM-style (original)' },
    { id: 'sains-076', ch: 's5c2', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Fresh milk is heated to 72 °C for 15 seconds and then cooled quickly. What is the main purpose of this process?',
      options: ['To kill all microorganisms including spores', 'To kill pathogens while keeping the taste and nutrients', 'To remove water from the milk', 'To add vitamins to the milk'],
      answer: 1,
      explain: 'This is pasteurisation: it kills most pathogens without destroying the flavour and nutrients. It does not kill all microbes (that is sterilisation), so pasteurised milk must be refrigerated.',
      source: 'SPM-style (original)' },
    { id: 'sains-077', ch: 's5c2', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A family living in a city apartment wants to grow vegetables on their balcony. Justify why hydroponics is suitable for them.',
      model: `- Hydroponics does not need soil, so it is suitable for a small space such as a balcony (1).
- The roots get nutrients directly from a nutrient solution, so plants grow faster/give higher yield (1).
- Uses less water as the solution can be reused, and there are fewer soil pests/weeds (1).
- The vegetables are cleaner and can be grown without pesticides — fresh food at home (1).`,
      rubric: [{ p: 'No soil — suits limited space', m: 1 }, { p: 'Nutrients supplied directly — faster growth/higher yield', m: 1 }, { p: 'Saves water / fewer pests or weeds', m: 1 }, { p: 'Clean/fresh produce, less pesticide', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 3 ----------
    { id: 'sains-078', ch: 's5c3', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which gas released by factories is a main cause of acid rain?',
      options: ['Oxygen', 'Sulphur dioxide', 'Nitrogen', 'Helium'],
      answer: 1,
      explain: 'Sulphur dioxide (and nitrogen dioxide) dissolve in rainwater to form acids — acid rain.',
      source: 'SPM-style (original)' },
    { id: 'sains-079', ch: 's5c3', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'What is the effect of CFCs released into the atmosphere?',
      options: ['Acid rain', 'Thinning of the ozone layer', 'Eutrophication', 'Thermal pollution'],
      answer: 1,
      explain: 'CFCs break down ozone molecules. A thinner ozone layer lets more UV radiation reach the Earth, increasing the risk of skin cancer and cataracts.',
      source: 'SPM-style (original)' },
    { id: 'sains-080', ch: 's5c3', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which activity is an example of environmental conservation (pemuliharaan)?',
      options: ['Gazetting an area as a national park so it stays untouched', 'Replanting mangroves along an eroded coastline', 'Banning all visitors from a forest reserve', 'Building a dam in a forest'],
      answer: 1,
      explain: 'Conservation restores damaged environments and manages resources wisely, e.g. replanting mangroves. Gazetting/protecting an area to keep it in its original state is preservation (pemeliharaan).',
      source: 'SPM-style (original)' },
    { id: 'sains-081', ch: 's5c3', type: 'struct', format: 'struktur', diff: 2, marks: 6,
      stimulus: `After heavy rain, fertiliser from a farm flowed into a lake. The table shows data collected from the lake.

| Week | Algae population (relative units) | Dissolved oxygen (mg/L) | Number of fish |
|---|---|---|---|
| 0 | 10 | 8.0 | 100 |
| 2 | 60 | 7.5 | 98 |
| 4 | 90 | 4.0 | 60 |
| 6 | 40 | 1.5 | 12 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'open', marks: 2, q: 'Explain the change in the algae population from week 0 to week 4.',
          model: 'The fertiliser contains nitrates/phosphates (nutrients) (1), so the algae grow and multiply very quickly — an algal bloom (1).',
          rubric: [{ p: 'Fertiliser adds nutrients (nitrate/phosphate)', m: 1 }, { p: 'Rapid growth of algae / algal bloom', m: 1 }] },
        { label: '(b)', type: 'open', marks: 2, q: 'Explain why the dissolved oxygen falls sharply between week 4 and week 6.',
          model: 'Algae/aquatic plants die (light is blocked) (1). Decomposing bacteria increase and use a lot of oxygen to decompose them, so the biochemical oxygen demand (BOD) rises (1).',
          rubric: [{ p: 'Algae/plants die', m: 1 }, { p: 'Bacteria decompose them using oxygen / BOD increases', m: 1 }] },
        { label: '(c)', type: 'mcq', marks: 1, q: 'Compared with week 0, the BOD of the lake water at week 6 is',
          options: ['higher', 'lower', 'the same', 'zero'], answer: 0,
          explain: 'More decomposing microorganisms use more oxygen, so BOD is higher.' },
        { label: '(d)', type: 'open', marks: 1, q: 'Suggest one way to prevent this problem.',
          model: 'Use fertiliser in the correct amount / do not apply fertiliser before heavy rain / plant a buffer zone of vegetation between the farm and the lake / use organic fertiliser.',
          rubric: [{ p: 'Any reasonable measure that reduces fertiliser run-off', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-082', ch: 's5c3', type: 'struct', format: 'eksperimen', diff: 2, marks: 4,
      stimulus: `1 cm³ of methylene blue solution is added to 3 bottles each containing 50 cm³ of a water sample. The bottles are closed and kept in a dark cupboard. The time taken for the methylene blue to decolourise is recorded.

| Sample | Source | Time to decolourise (hours) |
|---|---|---|
| X | Pond water | 8 |
| Y | Rainwater | 40 |
| Z | Waste water from a food factory | 2 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'open', marks: 1, q: 'State one hypothesis.',
          model: 'The more polluted the water sample, the shorter the time for methylene blue to decolourise.',
          rubric: [{ p: 'Relates level of pollution to time taken to decolourise, with direction', m: 1 }] },
        { label: '(b)', type: 'mcq', marks: 1, q: 'Arrange the samples from the most polluted to the least polluted.',
          options: ['Y, X, Z', 'Z, X, Y', 'X, Z, Y', 'Z, Y, X'], answer: 1,
          explain: 'Shortest time = most microorganisms using oxygen = most polluted: Z (2 h) > X (8 h) > Y (40 h).' },
        { label: '(c)', type: 'open', marks: 1, q: 'Why are the bottles kept in the dark?',
          model: 'To stop algae/aquatic plants carrying out photosynthesis and releasing oxygen, which would affect the result.',
          rubric: [{ p: 'Prevent photosynthesis producing oxygen', m: 1 }] },
        { label: '(d)', type: 'open', marks: 1, q: 'State the operational definition of polluted water.',
          model: 'Polluted water is water that makes methylene blue decolourise in a short time.',
          rubric: [{ p: 'Refers to short time for methylene blue to decolourise', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-083', ch: 's5c3', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A company makes drinks in plastic bottles. Using the idea of the product life cycle, suggest how the company can reduce the environmental impact at **two** different stages. Explain each suggestion.',
      model: `1. Raw material/manufacturing stage: use recycled plastic (rPET) or biodegradable/plant-based plastic (1) — less petroleum is extracted and less energy used (1).
2. Disposal stage: set up bottle collection/deposit-refund schemes for recycling (1) — fewer bottles go to landfill or the sea, reducing pollution (1).

*Other answers: lighter bottles (less material), use renewable energy in the factory, efficient transport (distribution stage), refill stations (usage stage).*`,
      rubric: [{ p: 'Suggestion for stage 1, stage named', m: 1 }, { p: 'Explanation for stage 1', m: 1 }, { p: 'Suggestion for a different stage', m: 1 }, { p: 'Explanation for stage 2', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 4 ----------
    { id: 'sains-084', ch: 's5c4', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which reaction has the lowest rate?',
      options: ['Burning of magnesium', 'Rusting of iron', 'Explosion of fireworks', 'Precipitation of silver chloride'],
      answer: 1,
      explain: 'Rusting takes days or weeks — a slow reaction. The others happen in seconds.',
      source: 'SPM-style (original)' },
    { id: 'sains-085', ch: 's5c4', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'How does a catalyst increase the rate of reaction?',
      options: ['It increases the temperature of the reactants', 'It provides an alternative path with a lower activation energy', 'It increases the total amount of product', 'It increases the concentration of the reactants'],
      answer: 1,
      explain: 'A catalyst lowers the activation energy, so more collisions are effective. It does not change the amount of product and is chemically unchanged at the end.',
      source: 'SPM-style (original)' },
    { id: 'sains-086', ch: 's5c4', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'In a reaction between marble chips and hydrochloric acid, 48 cm³ of carbon dioxide is collected in 2 minutes. Calculate the average rate of reaction in cm³ s⁻¹.',
      answer: 0.4, tol: 0.01, unit: 'cm³ s⁻¹',
      explain: `1. Time = 2 min = 120 s.
2. Average rate = 48 cm³ ÷ 120 s = **0.4 cm³ s⁻¹**.`,
      source: 'SPM-style (original)' },
    { id: 'sains-087', ch: 's5c4', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Food cooks faster in a pressure cooker. Which factor affecting the rate of reaction is involved?',
      options: ['Size of particles', 'Concentration', 'Temperature', 'Catalyst'],
      answer: 2,
      explain: 'The high pressure raises the boiling point of water, so cooking takes place at a higher temperature — particles have more kinetic energy and react faster.',
      source: 'SPM-style (original)' },
    { id: 'sains-088', ch: 's5c4', type: 'struct', format: 'eksperimen', diff: 3, marks: 8,
      stimulus: `Sodium thiosulphate solutions of different concentrations (50 cm³ each) are reacted with 5 cm³ of dilute hydrochloric acid in a conical flask placed on a paper marked "X". The time for the "X" to disappear from view is recorded. The temperature is kept at room temperature.

| Concentration of sodium thiosulphate (mol dm⁻³) | 0.2 | 0.4 | 0.6 | 0.8 |
|---|---|---|---|---|
| Time for "X" to disappear (s) | 80 | 40 | 27 | 20 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'numeric', marks: 1, q: 'Calculate 1/time for the 0.4 mol dm⁻³ solution.',
          answer: 0.025, tol: 0.0005, unit: 's⁻¹',
          explain: '1/time = 1 ÷ 40 s = 0.025 s⁻¹. (1/time represents the rate of reaction.)' },
        { label: '(b)', type: 'open', marks: 1, q: 'State one hypothesis.',
          model: 'The higher the concentration of sodium thiosulphate, the higher the rate of reaction // the shorter the time for "X" to disappear.',
          rubric: [{ p: 'Concentration increases → rate increases / time decreases', m: 1 }] },
        { label: '(c)', type: 'open', marks: 3, q: 'State the manipulated, responding and constant variables.',
          model: 'Manipulated: concentration of sodium thiosulphate (1). Responding: time for "X" to disappear // rate of reaction (1). Constant: volume and concentration of hydrochloric acid // volume of sodium thiosulphate // temperature (1).',
          rubric: [{ p: 'Manipulated: concentration of sodium thiosulphate', m: 1 }, { p: 'Responding: time for X to disappear / rate', m: 1 }, { p: 'One correct constant variable', m: 1 }] },
        { label: '(d)', type: 'open', marks: 2, q: 'Explain the result using the collision theory.',
          model: 'At a higher concentration there are more particles per unit volume (1), so the frequency of effective collisions increases and the rate of reaction is higher (1).',
          rubric: [{ p: 'More particles per unit volume', m: 1 }, { p: 'Higher frequency of effective collisions', m: 1 }] },
        { label: '(e)', type: 'mcq', marks: 1, q: 'Predict the time for "X" to disappear if 1.0 mol dm⁻³ sodium thiosulphate is used.',
          options: ['10 s', '16 s', '24 s', '100 s'], answer: 1,
          explain: 'Concentration × time is constant (0.2 × 80 = 16; 0.4 × 40 = 16). So at 1.0 mol dm⁻³, time ≈ 16 ÷ 1.0 = 16 s.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-089', ch: 's5c4', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A restaurant owner wants to cook beef rendang faster, and keep leftover rendang overnight without it going bad. Using factors affecting the rate of reaction, give **two** suggestions and explain them.',
      model: `1. Cut the beef into small pieces (1) — larger total surface area exposed to heat, so it cooks faster (1).
2. Store the leftover rendang in a refrigerator (1) — low temperature lowers the rate of the reactions/enzyme activity of microorganisms that spoil food (1).

*Also accepted: use a pressure cooker (higher temperature).*`,
      rubric: [{ p: 'Suggestion to cook faster (small pieces / pressure cooker)', m: 1 }, { p: 'Explanation (surface area / temperature)', m: 1 }, { p: 'Suggestion to keep food (refrigerate)', m: 1 }, { p: 'Explanation: low temperature slows reactions/microbial activity', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 5 ----------
    { id: 'sains-090', ch: 's5c5', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'A hydrocarbon is a compound that contains',
      options: ['carbon and oxygen only', 'carbon and hydrogen only', 'carbon, hydrogen and oxygen', 'hydrogen and oxygen only'],
      answer: 1,
      explain: 'Hydrocarbons contain only carbon and hydrogen atoms, e.g. methane CH₄.',
      source: 'SPM-style (original)' },
    { id: 'sains-091', ch: 's5c5', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which compound decolourises brown bromine water?',
      options: ['Methane, CH₄', 'Ethane, C₂H₆', 'Ethene, C₂H₄', 'Propane, C₃H₈'],
      answer: 2,
      explain: 'Ethene is an unsaturated hydrocarbon with a C=C double bond, which reacts with bromine. Alkanes (saturated) do not.',
      source: 'SPM-style (original)' },
    { id: 'sains-092', ch: 's5c5', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'What are the products when yeast ferments glucose without oxygen?',
      options: ['Ethanol and carbon dioxide', 'Ethanol and oxygen', 'Water and carbon dioxide', 'Lactic acid and oxygen'],
      answer: 0,
      explain: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. The zymase enzyme in yeast catalyses the fermentation.',
      source: 'SPM-style (original)' },
    { id: 'sains-093', ch: 's5c5', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'In palm oil extraction, the fruit bunches are sterilised with steam. One purpose of this step is to',
      options: ['separate the fruits from the bunch', 'inactivate the lipase enzyme', 'squeeze out the oil', 'remove water from the oil'],
      answer: 1,
      explain: 'Sterilisation inactivates lipase (which forms free fatty acids and lowers oil quality), kills microorganisms and softens the fruit. Separating fruits is stripping; squeezing is extraction; removing water is clarification.',
      source: 'SPM-style (original)' },
    { id: 'sains-094', ch: 's5c5', type: 'struct', format: 'struktur', diff: 2, marks: 5,
      stimulus: `The table shows information about three oil palm varieties. (Values are simplified for practice.)

| Variety | Shell thickness | Mesocarp (% of fruit) |
|---|---|---|
| Dura | Thick | Low |
| Pisifera | No shell (often infertile) | High |
| Tenera | Thin | High |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Which part of the oil palm fruit produces palm oil?',
          options: ['Exocarp', 'Mesocarp', 'Endocarp', 'Kernel'], answer: 1,
          explain: 'Palm oil comes from the fibrous mesocarp. The kernel gives palm kernel oil.' },
        { label: '(b)', type: 'open', marks: 2, q: 'Which variety should a planter choose? Justify your answer.',
          model: 'Tenera (1). It has a thin shell and thick mesocarp, so it gives the highest oil yield, and it is fertile/produces fruit (1).',
          rubric: [{ p: 'Tenera', m: 1 }, { p: 'Thin shell, thick mesocarp → high oil yield', m: 1 }] },
        { label: '(c)', type: 'open', marks: 1, q: 'State one nutritional advantage of palm oil.',
          model: 'Contains vitamin E (tocotrienols) / beta-carotene (antioxidants) // contains no cholesterol.',
          rubric: [{ p: 'Vitamin E/beta-carotene/antioxidants/no cholesterol', m: 1 }] },
        { label: '(d)', type: 'fill', marks: 1, q: 'Palm oil is converted into margarine by a process called ___.',
          blanks: [['hydrogenation', 'hydrogenation process']],
          explain: 'Hydrogen is added to unsaturated fats (nickel catalyst, about 180 °C) to make them more saturated and solid.' }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-095', ch: 's5c5', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      stimulus: `| Petroleum fraction | Boiling point range (°C) | Viscosity | Soot when burnt |
|---|---|---|---|
| P | below 30 | Very low | Very little |
| Q | 160 – 250 | Low | Little |
| R | above 350 | Very high (semi-solid) | A lot |`,
      q: 'A camper needs a liquid fuel for a portable stove that is easy to pour and burns cleanly but is not a gas at room temperature (about 30 °C). Choose the most suitable fraction and justify your choice.',
      model: `- Fraction Q (1).
- Its boiling point (160–250 °C) is above room temperature, so it is a liquid and easy to store and pour, unlike P which is a gas (1).
- It has low viscosity, so it flows easily into the stove, unlike R which is semi-solid (1).
- It burns with little soot, so it is cleaner and does not blacken the pot (1).`,
      rubric: [{ p: 'Chooses Q', m: 1 }, { p: 'Liquid at room temperature (boiling point above 30 °C)', m: 1 }, { p: 'Low viscosity — flows easily', m: 1 }, { p: 'Little soot — burns cleanly', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 6 ----------
    { id: 'sains-096', ch: 's5c6', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'In electroplating a spoon with silver, where is the spoon placed?',
      options: ['At the anode', 'At the cathode', 'In the electrolyte without connection', 'At the positive terminal of the battery'],
      answer: 1,
      explain: 'The object to be plated is always the cathode (negative). Silver ions from the electrolyte receive electrons and are deposited on it.',
      source: 'SPM-style (original)' },
    { id: 'sains-097', ch: 's5c6', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which pair of metals in a simple cell produces the highest voltage?',
      options: ['Zinc and copper', 'Iron and copper', 'Magnesium and copper', 'Lead and copper'],
      answer: 2,
      explain: 'The further apart the metals are in the electrochemical series, the higher the voltage. Magnesium is highest above copper among these.',
      source: 'SPM-style (original)' },
    { id: 'sains-098', ch: 's5c6', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Molten lead(II) bromide is electrolysed using carbon electrodes. What is formed at the anode?',
      options: ['Lead', 'Bromine', 'Hydrogen', 'Oxygen'],
      answer: 1,
      explain: 'Bromide ions (Br⁻) move to the anode and release electrons, forming brown bromine gas. Lead forms at the cathode.',
      source: 'SPM-style (original)' },
    { id: 'sains-099', ch: 's5c6', type: 'struct', format: 'eksperimen', diff: 2, marks: 6,
      stimulus: `Four simple cells are set up. Each uses a copper plate and a plate of another metal dipped in dilute sodium chloride solution. The voltmeter reading is recorded. (Values are simplified for practice.)

| Metal paired with copper | Voltage (V) |
|---|---|
| Magnesium | 2.0 |
| Zinc | 1.0 |
| Iron | 0.6 |
| Lead | 0.4 |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'open', marks: 1, q: 'State one hypothesis.',
          model: 'The further apart the two metals are in the electrochemical series, the higher the voltage produced.',
          rubric: [{ p: 'Distance between metals in the electrochemical series related to voltage, with direction', m: 1 }] },
        { label: '(b)', type: 'open', marks: 2, q: 'State the manipulated variable and the responding variable.',
          model: 'Manipulated: type of metal paired with copper (1). Responding: voltage / voltmeter reading (1).',
          rubric: [{ p: 'Manipulated: type of metal paired with copper', m: 1 }, { p: 'Responding: voltage', m: 1 }] },
        { label: '(c)', type: 'mcq', marks: 1, q: 'In the zinc–copper cell, which metal is the negative terminal?',
          options: ['Zinc', 'Copper', 'Both', 'Neither'], answer: 0,
          explain: 'Zinc is more electropositive; it releases electrons and becomes the negative terminal.' },
        { label: '(d)', type: 'open', marks: 2, q: 'Suggest one substance from the kitchen that could replace the sodium chloride solution. Explain.',
          model: 'Vinegar / lime juice / salt water (1). It contains free-moving ions, so it can conduct electricity as an electrolyte (1).',
          rubric: [{ p: 'Suitable kitchen electrolyte (vinegar/lime juice/salt water)', m: 1 }, { p: 'Contains free-moving ions / conducts electricity', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-100', ch: 's5c6', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'Your family uses many disposable batteries in toys and remote controls, and throws them into the household rubbish bin. Give **two** pieces of advice with scientific reasons.',
      model: `1. Do not throw used batteries into the household bin; send them to an e-waste collection centre (1) — batteries contain heavy metals (mercury, cadmium, lead) that leach into soil and water and poison living things (1).
2. Switch to rechargeable batteries such as lithium-ion or nickel-metal hydride (1) — one battery can be used many times, reducing waste and the raw materials used (1).`,
      rubric: [{ p: 'Advice on proper disposal/e-waste', m: 1 }, { p: 'Reason: heavy metals pollute soil/water', m: 1 }, { p: 'Advice: rechargeable batteries / reduce use', m: 1 }, { p: 'Reason: less waste/resources', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 7 ----------
    { id: 'sains-101', ch: 's5c7', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which lens is used in a magnifying glass, and what image does it form?',
      options: ['Convex lens; virtual, upright, magnified', 'Concave lens; virtual, upright, diminished', 'Convex lens; real, inverted, diminished', 'Concave lens; real, inverted, magnified'],
      answer: 0,
      explain: 'A magnifying glass is a convex lens with the object closer than F (u < f), forming a virtual, upright, magnified image.',
      source: 'SPM-style (original)' },
    { id: 'sains-102', ch: 's5c7', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'A camera with a convex lens of focal length f takes a photo of a building far away. Where is the object relative to the lens?',
      options: ['u < f', 'u = f', 'f < u < 2f', 'u > 2f'],
      answer: 3,
      explain: 'For a camera the object is beyond 2F (u > 2f), giving a real, inverted, diminished image on the sensor.',
      source: 'SPM-style (original)' },
    { id: 'sains-103', ch: 's5c7', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'What are the characteristics of an image formed by a concave lens?',
      options: ['Real, inverted, magnified', 'Virtual, upright, diminished', 'Real, upright, diminished', 'Virtual, inverted, magnified'],
      answer: 1,
      explain: 'A concave (diverging) lens always forms a virtual, upright, diminished image on the same side as the object.',
      source: 'SPM-style (original)' },
    { id: 'sains-104', ch: 's5c7', type: 'struct', format: 'struktur', diff: 2, marks: 4,
      stimulus: `A convex lens has a focal length of 15 cm. An object is placed 20 cm from the lens.`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'What are the characteristics of the image formed?',
          options: ['Virtual, upright, magnified', 'Real, inverted, magnified', 'Real, inverted, diminished', 'Real, inverted, same size'], answer: 1,
          explain: 'The object is between F (15 cm) and 2F (30 cm), so the image is real, inverted and magnified, beyond 2F.' },
        { label: '(b)', type: 'fill', marks: 1, q: 'An optical instrument that uses this object position is the ___.',
          blanks: [['projector', 'slide projector', 'microscope', 'compound microscope']],
          explain: 'A projector (and the objective lens of a microscope) places the object between F and 2F to give a magnified real image.' },
        { label: '(c)', type: 'open', marks: 2, q: 'The object is moved to 10 cm from the lens. Explain why the image can no longer be captured on a screen.',
          model: 'The object is now closer than the focal length (u < f) (1). The refracted rays diverge and do not meet, so the image is virtual and cannot be formed on a screen (1).',
          rubric: [{ p: 'Object is within the focal length (u < f)', m: 1 }, { p: 'Rays diverge → virtual image, cannot be caught on a screen', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-105', ch: 's5c7', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 3,
      q: 'Both a compound microscope and an astronomical telescope use two convex lenses. Explain how the choice of objective lens differs between them and why.',
      model: `- A microscope uses an objective lens with a **short** focal length (1), because the specimen is very close and must be placed just beyond F to produce a large magnified real image (1).
- A telescope uses an objective lens with a **long** focal length because it collects light from very distant objects and forms a real image at its focal point, which the eyepiece then magnifies (1).`,
      rubric: [{ p: 'Microscope: short focal length objective', m: 1 }, { p: 'Reason for microscope (near object, large magnification)', m: 1 }, { p: 'Telescope: long focal length objective, for distant objects', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 8 ----------
    { id: 'sains-106', ch: 's5c8', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'In a hydraulic jack, the small piston has an area of 4 cm² and the large piston has an area of 200 cm². A force of 150 N is applied on the small piston. Calculate the force produced on the large piston.',
      answer: 7500, tol: 1, unit: 'N',
      explain: `Pascal's principle: F₁ ÷ A₁ = F₂ ÷ A₂
F₂ = F₁ × A₂ ÷ A₁ = 150 × 200 ÷ 4 = **7 500 N**

(The area units cancel, so cm² can be used for both pistons.)`,
      source: 'SPM-style (original)' },
    { id: 'sains-107', ch: 's5c8', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'A diver is 12 m below the surface of the sea. Calculate the pressure due to the sea water on the diver in kPa. (Density of sea water = 1030 kg m⁻³, g = 9.81 m s⁻²)',
      answer: 121.3, tol: 0.1, unit: 'kPa',
      explain: `P = hρg = 12 × 1030 × 9.81 = 121 255.6 Pa
= **121.3 kPa** (1 kPa = 1000 Pa)`,
      source: 'SPM-style (original)' },
    { id: 'sains-108', ch: 's5c8', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'Which statement describes Bernoulli\'s principle?',
      options: ['The higher the speed of a fluid, the higher its pressure', 'The higher the speed of a fluid, the lower its pressure', 'Pressure in an enclosed liquid is transmitted equally in all directions', 'The buoyant force equals the weight of fluid displaced'],
      answer: 1,
      explain: 'Bernoulli: faster-moving fluid has lower pressure. Option C is Pascal\'s principle; option D is Archimedes\' principle.',
      source: 'SPM-style (original)' },
    { id: 'sains-109', ch: 's5c8', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'How does a submarine dive?',
      options: ['Air is pumped into the ballast tanks so its weight decreases', 'Water fills the ballast tanks so its weight becomes greater than the buoyant force', 'The engine pushes water upwards', 'The submarine becomes less dense than sea water'],
      answer: 1,
      explain: 'Filling the ballast tanks with water increases the weight; when weight > buoyant force the submarine sinks. Air is pumped in to rise.',
      source: 'SPM-style (original)' },
    { id: 'sains-110', ch: 's5c8', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Why is the wall of a dam built thicker at the bottom?',
      options: ['Water pressure increases with depth', 'Water is denser at the surface', 'Atmospheric pressure is higher at the bottom', 'To reduce the buoyant force'],
      answer: 0,
      explain: 'Liquid pressure P = hρg increases with depth h, so the bottom of the wall must withstand the greatest pressure.',
      source: 'SPM-style (original)' },
    { id: 'sains-111', ch: 's5c8', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'During a storm, the zinc roof of a house was lifted off. Explain why this happened using a science principle, and suggest **one** way to reduce the problem.',
      model: `- Strong wind blows across the top of the roof at high speed (1).
- By Bernoulli's principle, the air pressure above the roof becomes lower than the air pressure inside the house (1).
- The higher pressure below pushes the roof upwards, producing a lifting force that tears the roof off (1).
- Suggestion: fix the roof firmly with more screws/hurricane straps // provide vents so pressure inside and outside can equalise (1).`,
      rubric: [{ p: 'High-speed wind above the roof', m: 1 }, { p: 'Lower pressure above (Bernoulli)', m: 1 }, { p: 'Higher pressure below pushes roof up', m: 1 }, { p: 'Reasonable suggestion', m: 1 }],
      source: 'SPM-style (original)' },

    // ---------- F5 Chapter 9 ----------
    { id: 'sains-112', ch: 's5c9', type: 'mcq', format: 'objektif', diff: 1, marks: 1,
      q: 'What is the orbital period of a geostationary satellite?',
      options: ['90 minutes', '12 hours', '24 hours', '365 days'],
      answer: 2,
      explain: 'A geostationary satellite orbits once every 24 hours, the same as the Earth\'s rotation, so it appears stationary.',
      source: 'SPM-style (original)' },
    { id: 'sains-113', ch: 's5c9', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'What is the minimum number of satellites a GPS receiver needs to find its 3D position (latitude, longitude and altitude)?',
      options: ['1', '2', '3', '4'],
      answer: 3,
      explain: 'Three satellites give a 2D position by trilateration; a fourth is needed for altitude and to correct the receiver clock.',
      source: 'SPM-style (original)' },
    { id: 'sains-114', ch: 's5c9', type: 'numeric', format: 'pengiraan', diff: 2, marks: 2,
      q: 'The latitude of a location is 4°35\'24"N. Convert it to decimal degrees (DD), correct to 2 decimal places.',
      answer: 4.59, tol: 0.005, unit: '°',
      explain: `DD = degrees + minutes/60 + seconds/3600
= 4 + 35/60 + 24/3600
= 4 + 0.5833 + 0.0067
= **4.59°** N`,
      source: 'SPM-style (original)' },
    { id: 'sains-115', ch: 's5c9', type: 'mcq', format: 'objektif', diff: 2, marks: 1,
      q: 'Which type of satellite orbit is most suitable for taking high-resolution images to monitor forest fires?',
      options: ['Geostationary orbit', 'Low Earth orbit', 'Medium Earth orbit', 'An orbit around the Moon'],
      answer: 1,
      explain: 'Low Earth orbit satellites are close to the Earth (160–2 000 km), so their cameras can take detailed (high-resolution) images.',
      source: 'SPM-style (original)' },
    { id: 'sains-116', ch: 's5c9', type: 'struct', format: 'struktur', diff: 2, marks: 4,
      stimulus: `The table shows information about three satellites. (Values are approximate.)

| Satellite | Altitude (km) | Orbital period |
|---|---|---|
| K | 550 | 95 minutes |
| L | 20 200 | 12 hours |
| M | 35 786 | 24 hours |`,
      q: 'Answer the following questions.',
      parts: [
        { label: '(a)', type: 'mcq', marks: 1, q: 'Which satellite is a geostationary satellite?',
          options: ['K', 'L', 'M', 'None of them'], answer: 2,
          explain: 'M has an altitude of about 35 786 km and a period of 24 hours.' },
        { label: '(b)', type: 'open', marks: 1, q: 'State one use of satellite L.',
          model: 'Navigation / Global Positioning System (GPS).',
          rubric: [{ p: 'Navigation/GPS', m: 1 }] },
        { label: '(c)', type: 'open', marks: 2, q: 'Space debris is increasing around the Earth. Explain one problem it causes and suggest one solution.',
          model: 'Debris travelling at high speed can collide with and damage working satellites or the space station (1). Solution: design satellites to de-orbit and burn up in the atmosphere at the end of their life // remove debris with capture technology // international regulations (1).',
          rubric: [{ p: 'Problem: collision/damage to satellites or astronauts', m: 1 }, { p: 'Reasonable solution', m: 1 }] }
      ],
      source: 'SPM-style (original)' },
    { id: 'sains-117', ch: 's5c9', type: 'open', format: 'kbat', diff: 3, kbat: true, marks: 4,
      q: 'A family is considering a GPS smartwatch for their grandfather who has dementia and sometimes gets lost. Justify the use of this device, including **one** limitation.',
      model: `- The watch receives signals from GPS satellites and determines his exact location (latitude and longitude) (1).
- Family members can track his location in real time on a phone and find him quickly if he gets lost (1).
- Some watches have an emergency button/geofence alert that warns the family when he leaves a safe area (1).
- Limitation: GPS signals are weak indoors/among tall buildings, and the watch needs charging — so it should be used together with other care measures (1).`,
      rubric: [{ p: 'Explains GPS gives exact location from satellites', m: 1 }, { p: 'Benefit: real-time tracking/find quickly', m: 1 }, { p: 'Another benefit (alert/emergency button)', m: 1 }, { p: 'One valid limitation', m: 1 }],
      source: 'SPM-style (original)' },
  ]
});
