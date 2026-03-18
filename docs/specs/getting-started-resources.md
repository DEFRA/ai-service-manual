# Feature Specification: Getting Started Resources Page

## Overview

Add a new one-pager at `/getting-started-resources` — a warm, friendly signposting hub for people who are new to AI at Defra. The page does not teach; it points people to the right places with a short, reassuring introduction. It is linked from the existing Getting Started with AI page.

---

## User need

> As someone new to AI at Defra, I want a single page that tells me where to start, what tools I'm allowed to use, and how to learn more — so I do not have to search around or wonder if I'm doing things correctly.

---

## URL and routing

| Property         | Value                                                      |
| ---------------- | ---------------------------------------------------------- |
| URL slug         | `/getting-started-resources`                               |
| Page title       | `Getting started resources`                                |
| Breadcrumb trail | Home › Getting started with AI › Getting started resources |

Add to `contentRoutes` in `src/server/content/controller.js`:

```js
'getting-started-resources': 'getting-started-resources.md',
```

---

## Page structure

### 1. Opening blurb

Two or three short sentences. Warm and welcoming — the reader may feel uncertain. Acknowledge that they are in the right place. Mention the **Ask Ace Slack channel** as the place to get support from the team.

Example opening:

> If you're just getting started with AI, you're in the right place. This page brings together the most useful resources to help you begin safely and confidently. If you ever get stuck or have a question, the team is on the **Ask Ace** channel in Slack and happy to help.

---

### 2. Section: Start here — using AI safely at Defra

The most important message on the page. New starters must understand safe and responsible AI use before anything else.

Content:

- One sentence framing: the most important thing when using AI at Defra is doing so safely and securely.
- Signpost to the **Civil Service learning courses** via the Defra AI unit SharePoint as the right starting point.
- Signpost to the **AI Governance page** for understanding policy.
- Signpost to the **Getting Started guides** on this service manual for practical guidance.

Links:
| Label | URL |
|---|---|
| AI Training & Guidance (Defra SharePoint) | `https://defra.sharepoint.com/teams/Team4303/SitePages/AI-Training-&-Guidance.aspx` |
| AI Governance (Defra SharePoint) | `https://defra.sharepoint.com/teams/Team4303/SitePages/AI-Governance.aspx` |
| Getting started with AI (this service manual) | `/getting-started-with-ai` |

---

### 3. Section: Tools available at Defra

Visual separator before this section (horizontal rule or `<hr>`) to signal a change of focus.

Content:

- One sentence framing: the ACE team maintains a curated list of the tools found most effective.
- Link to the **Tools Radar** on this service manual.

Links:
| Label | URL |
|---|---|
| Tools Radar | `/tech-radar` |

---

### 4. Section: Learning resources from the main AI providers

Short intro sentence: "For up-to-date getting started guides from the main AI providers, we recommend:"

One link per provider, in this order: **Microsoft, Claude (Anthropic), AWS, Google, OpenAI**. Each link is presented as a short list item with a one-sentence description — no deep detail needed.

| Provider           | Link text                                | URL                                                                          | One-line description                                                  |
| ------------------ | ---------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Microsoft          | Microsoft Copilot learning hub           | `https://learn.microsoft.com/en-us/copilot/`                                 | Central home for all Copilot training, organised by product.          |
| Claude (Anthropic) | Getting started with Claude              | `https://support.claude.com/en/articles/8114491-getting-started-with-claude` | How to use Claude's chat interface, with tips for better results.     |
| AWS                | AWS AI training                          | `https://aws.amazon.com/training/learn-about/ai/`                            | Free courses covering AI fundamentals, for all roles and levels.      |
| Google             | Gemini Prompt Guide for Google Workspace | `https://workspace.google.com/learning/content/gemini-prompt-guide`          | Role-based prompting guide with concrete examples for everyday tasks. |
| OpenAI             | OpenAI Academy content hub               | `https://academy.openai.com/public/content`                                  | Videos, articles, and prompt packs organised by role and use case.    |

---

### 5. Section: Advanced AI patterns at Defra

Content:

- One sentence: for more advanced AI patterns in use at Defra, see:
  - **Prompt library** → `/prompt-sharing`
  - **Proof of Concepts** → `/proofs-of-concept`

---

### 6. Closing call to action

Final line or inset text:

> If you need support understanding any of these tools, or how to apply them within your project, reach out to us on the **Ask Ace** channel in Slack.

---

## Content format

- A single Markdown file: `src/content/getting-started-resources.md`
- Uses the standard `content/index.njk` template (the existing prose layout)
- Front matter: `title: Getting started resources`
- Use standard Markdown: `##` headings, bullet lists, and `[link text](url)` for all links
- Use a horizontal rule `---` before the "Tools available at Defra" section to create visual separation
- No custom components or macros required

---

## Tone guidance

- Plain English, GDS-style — short sentences, active voice
- Warm and reassuring — readers may feel overwhelmed; the page should reduce anxiety
- Do not be preachy about safety — one clear sentence is enough
- Do not pad with explanatory text — this is a signposting page, not a learning resource
- No jargon — spell out acronyms on first use (e.g. ACE = AI Capabilities and Enablement)

---

## Navigation and discoverability

- Add a link from the existing `getting-started-with-ai.md` page, in the "Where to start" section, pointing to `/getting-started-resources`
- No change to the top-level service navigation (`build-navigation.js`) required

---

## Out of scope

- No new Hapi feature plugin required — this uses the existing `content` feature and Markdown pipeline
- No dynamic data, no server-side logic beyond what `contentController` already provides
- No new GOV.UK Design System components — standard prose layout is sufficient
