# Help Guide v3 Chatbot Plan

## Goal

Add a simple chatbot to the website after `v2` has enough high-quality content to support it.

This is a scoped help assistant, not a full support bot.

The first version should answer documentation questions only.

## Scope for v3

Included:

- answer help-guide questions
- point users to relevant pages
- summarize steps from the guide
- suggest next links or related tasks

Not included in v3:

- account-specific support
- live academy data
- billing support
- full customer service flows
- agent handoff workflows
- advanced analytics or feedback loops

Future chatbot upgrades belong in later plans, not this one.

## Why this comes after v2

The chatbot will only be as good as the underlying help content.

`v2` should provide:

- clearer task-based pages
- better headings
- cleaner terminology
- stronger search phrases
- fewer stale claims

Without that, the chatbot will mostly repeat weak help content.

## Recommended v3 shape

Start with a retrieval-style help assistant:

- user asks a question
- system finds relevant help content
- model answers using only that content
- answer includes links to the source page(s)

This is better than a fully open-ended chatbot for an early release.

## User experience goals

The assistant should feel like:

- a help guide companion
- concise
- grounded in docs
- safe when unsure

The assistant should not feel like:

- it has account access
- it knows private user data
- it can perform actions
- it can answer anything about the business

## MVP recommendation

### Assistant behavior

- [ ] Answer from help content only
- [ ] Return short answers first
- [ ] Show 1-3 relevant page links
- [ ] Say when it is unsure
- [ ] Refuse to guess when docs are missing
- [ ] Encourage the user to open the linked guide page

### Assistant UI

- [ ] Small launcher button on the help site
- [ ] Slide-over or modal chat panel
- [ ] Input box
- [ ] Response area
- [ ] Suggested starter prompts
- [ ] Link chips to source pages
- [ ] Clear label such as `Help Assistant`

## Suggested starter prompts

- [ ] How do I add an instructor?
- [ ] Where do I give admin access?
- [ ] What is Analytics used for?
- [ ] How do I create a lesson?
- [ ] How do I issue a membership card?

## Architecture direction

### Preferred MVP architecture

Frontend:

- chat widget on website
- sends question to backend endpoint

Backend:

- receives question
- searches indexed help content
- selects top matching sections
- builds constrained prompt
- calls LLM
- returns answer plus source links

Content source:

- initially derived from the website help content itself
- ideally based on structured `v2` page content, titles, summaries, and keywords

## Retrieval strategy

MVP retrieval can be simple.

Possible first approach:

- build a flat index from help page titles + body text
- use keyword or lightweight semantic retrieval
- send top relevant chunks to model

Later improvements can happen in future plans.

## Safety rules

These are important even for a simple MVP.

- [ ] Do not claim to access user accounts
- [ ] Do not provide live business data
- [ ] Do not invent steps not in the docs
- [ ] Prefer direct, sourced answers
- [ ] Say `I’m not sure` when the docs do not support an answer
- [ ] Always include source links when possible

## Cost and complexity expectations

### Difficulty

Frontend widget:

- low to medium

Backend retrieval + model call:

- medium

Content tuning and safety:

- medium

### Cost

Infrastructure:

- low for an MVP

LLM usage:

- low to medium depending on traffic and model choice

Main ongoing cost:

- content maintenance
- prompt tuning
- QA

## Phase 1: Prerequisites

- [ ] Finish enough `v2` pages to support the top user questions
- [ ] Decide whether chatbot lives on all pages or help pages only
- [ ] Decide assistant name and UI placement
- [ ] Decide data privacy copy
- [ ] Decide source-link presentation

## Phase 2: Content preparation

- [ ] Identify top 10-20 user questions
- [ ] Map each question to one or more `v2` pages
- [ ] Ensure `v2` pages contain plain-language wording for those questions
- [ ] Add synonyms users may search for
- [ ] Add short summary blocks to important pages

## Phase 3: MVP implementation

### Frontend

- [ ] Add chat launcher
- [ ] Add chat panel
- [ ] Add starter prompts
- [ ] Add loading / error states
- [ ] Add source-link rendering
- [ ] Add mobile-friendly layout

### Backend

- [ ] Create chatbot endpoint
- [ ] Create help-content retrieval index
- [ ] Retrieve relevant snippets
- [ ] Build constrained prompt
- [ ] Return answer + citations

### Prompt behavior

- [ ] Answer briefly
- [ ] Stay within provided docs
- [ ] Link the user to relevant page(s)
- [ ] Avoid unsupported claims

## Phase 4: QA

- [ ] Test top 20 expected questions
- [ ] Test ambiguous questions
- [ ] Test unsupported questions
- [ ] Test inaccurate assumptions
- [ ] Test mobile UI
- [ ] Test long answers and truncation behavior
- [ ] Review for hallucination risk

## MVP success criteria

- [ ] Users can ask natural-language help questions
- [ ] Answers are usually short and useful
- [ ] Relevant guide links are included
- [ ] Bot does not pretend to know account-specific data
- [ ] Wrong answers are rare and obvious uncertainty is handled well

## Questions to resolve before implementation

- [ ] Help pages only, or entire site?
- [ ] LLM provider choice
- [ ] Static index vs server-side generated index
- [ ] Whether to log questions for future content improvement
- [ ] Whether to expose thumbs up / thumbs down feedback in MVP

## Deferred to future chatbot plans

Do not pull these into v3 unless priorities change:

- handoff to human support
- multilingual answer strategy beyond current site behavior
- account-aware support
- analytics dashboard for chatbot performance
- conversation memory across sessions
- voice input/output
- proactive suggestions outside the help area

## Notes

- Keep `v3` narrow.
- A small, trustworthy assistant is better than a broad unreliable bot.
- Build on top of strong `v2` content, not in parallel with weak content.
