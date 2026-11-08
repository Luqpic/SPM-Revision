# SPM Mastery

Offline SPM (KSSM) revision app: notes, question bank, practice/timed/mock modes, mistake notebook, smart revision and a progress dashboard for Sejarah, Bahasa Melayu, English, Sains and Matematik.

## Run
Open `index.html` in a browser (no build, no server needed). Progress is saved in that browser's localStorage; use **Settings → Back up your progress** to copy it elsewhere.

## Files
- `index.html` — layout and styles
- `app.js` — views, routing, sessions, persistence
- `engine.js` — pure grading / mastery / recommendation logic (`node tests/engine.test.js`)
- `data/<subject>.js` — all content for one subject (format in `SCHEMA.md`)
- `tools/validate.js` — `node tools/validate.js data/*.js` checks every content file

## Adding content
Add chapters or questions to the subject's `data/*.js` following `SCHEMA.md`, then run the validator. Question ids must stay unique and stable (progress is keyed by id).

To add a new subject: create `data/<id>.js`, add a `<script>` tag in `index.html`, add the id to `ORDER`/`LABEL` in `app.js`, and add a `--c-<id>` colour (light + both dark blocks) in `index.html`.
