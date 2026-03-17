---
title: AI assistant
---

## The problem

Getting AI tools into people's hands at Defra is slow and expensive. Procurement takes time, subscription costs add up, and teams risk becoming locked into a single vendor. Each tool has different strengths, weaknesses and levels of security. It is not always clear whether staff can safely upload sensitive files to these services.

Many people across Defra want to use AI but cannot access the most capable tools when they need them.

## The hypothesis

By building our own AI stack, we can give teams a flexible platform that swaps between leading AI providers such as Anthropic, OpenAI and Microsoft. It can also run locally hosted models. Hosting the platform ourselves means we meet higher standards for data sovereignty and security than many third-party tools can offer.

This approach also gives us controls to monitor usage, apply guardrails and enforce safe practices. As Defra's use of AI grows, this platform scales with it.

## What we found

Getting this type of tool through governance is new for Defra. AI tools need access to large volumes of data, and that data is often sensitive. We cannot fully control what users input, so the service must assume that sensitive information could be submitted at any time. There is no fast-track process for obtaining the right data access permissions, such as a DPIA.

We are learning how to help Defra build systems that support this type of AI safely. We are also evaluating off-the-shelf alternatives such as Open WebUI to see whether existing tools can move us forward faster.

## Project details

- **Duration**: October 2025 to present
- **Status**: In progress
- [View the AI assistant project on GitHub](https://github.com/DEFRA/ai-defra-search-frontend)

[← Back to Proofs of Concept](/proofs-of-concept)
