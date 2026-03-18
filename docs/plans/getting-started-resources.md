# Implementation Plan: Getting Started Resources Page

Source spec: `docs/specs/getting-started-resources.md`

---

## Overview

Two files to create, two files to edit. No new Hapi plugin, no new template, no new dependencies.

---

## Steps

### Step 1 — Create the content file

**File to create:** `src/content/getting-started-resources.md`

Write the full Markdown content for the page. Structure:

1. Front matter: `title: Getting started resources`
2. Opening blurb (2–3 sentences, warm welcome + Ask Ace mention)
3. `## Start here — using AI safely at Defra` — framing sentence + 3 links (Training & Guidance SharePoint, AI Governance SharePoint, `/getting-started-with-ai`)
4. `---` horizontal rule
5. `## Tools available at Defra` — one sentence + link to `/tech-radar`
6. `## Learning resources from the main AI providers` — intro sentence + ordered list (Microsoft, Claude, AWS, Google, OpenAI), one link and one-line description each
7. `## Advanced AI patterns at Defra` — one sentence + links to `/prompt-sharing` and `/proofs-of-concept`
8. Closing inset / final paragraph pointing to Ask Ace Slack channel

---

### Step 2 — Register the route

**File to edit:** `src/server/content/controller.js`

Add one entry to `contentRoutes`:

```js
'getting-started-resources': 'getting-started-resources.md',
```

Place it after the `getting-started-with-ai` entry for readability.

---

### Step 3 — Link from the existing Getting Started page

**File to edit:** `src/content/getting-started-with-ai.md`

Add a link to the new page in the "Where to start" section, after the existing link to `/using-ai-effectively`. For example:

```md
You can also browse our [getting started resources](/getting-started-resources) — a curated list of external learning materials and Defra-specific guidance.
```

---

### Step 4 — Update the spec to fix the Tools Radar URL

**File to edit:** `docs/specs/getting-started-resources.md`

Change the Tools Radar URL in the spec table from `/tools-radar` to `/tech-radar` to match the confirmed route. (Already confirmed with user.)

---

## Files changed

| Action | File                                       |
| ------ | ------------------------------------------ |
| Create | `src/content/getting-started-resources.md` |
| Edit   | `src/server/content/controller.js`         |
| Edit   | `src/content/getting-started-with-ai.md`   |
| Edit   | `docs/specs/getting-started-resources.md`  |

---

## No changes needed to

- `src/server/content/index.js` — existing routes already handle `/{slug}` pattern
- `src/server/common/templates/content/index.njk` — existing prose layout is sufficient
- `src/config/nunjucks/context/build-navigation.js` — no new top-level nav item
- Any test files at this stage (tests are a separate task)

---

## Risks and notes

- The SharePoint URLs contain query parameters (`?csf=1&web=1&e=eFeBE4`). Strip these from the Markdown links — they are tracking parameters and the base URL is sufficient.
- External links do not need `target="_blank"` — GDS pattern is to let the user decide.
- The `/proofs-of-concept` route exists as a tile-grid feature, not a content route, so it will resolve correctly without any controller change.
