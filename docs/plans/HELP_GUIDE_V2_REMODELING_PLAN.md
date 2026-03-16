# Help Guide v2 Remodeling Plan

## Goal

Build a new `v2` help guide as a separate wiki experience without overwriting `v1`.

`v1` remains the literal, manual-style guide.

`v2` becomes:

- task-based
- user-centered
- easier to scan on mobile
- more visual
- less system-written in tone

This plan is intended to be worked in stages and paused safely at any time.

## Current foundation

- [x] Keep public `/help` as the stable entrypoint
- [x] Move current guide to `/help-v1`
- [x] Preserve old `/help/...` deep links by redirecting to `v1`
- [x] Add `/help-v2` shell route
- [ ] Add first real `v2` page set
- [ ] Decide final `v2` public rollout timing

Related references:

- [Expo visual/icon handoff](./HELP_GUIDE_V2_EXPO_ICON_HANDOFF.md)

## v2 theme

`v1` is a manual.

`v2` should feel like a practical guide for real users trying to finish tasks.

Core mental model:

- `v1` explains the software
- `v2` helps the user run their academy

Another way to frame it:

- `v1` answers: `What does this screen contain?`
- `v2` answers: `What am I trying to do, and what should I do next?`

Target qualities:

- outcome-first
- calm and clear
- shorter paragraphs
- fewer internal terms
- better for owners/admins on phones
- helpful without sounding technical

What `v2` is not:

- not a rewrite of every `v1` sentence
- not a copy edit pass
- not a developer changelog
- not a second manual with nicer wording

## Experience model

`v2` should be designed around how a person thinks while trying to complete a task.

That means:

- start from the user goal, not the app screen
- explain what the page is for before describing taps
- help the user confirm they are in the right place
- point out common confusion early
- suggest the next likely step

`v2` should feel like:

- a calm operations guide
- a practical assistant
- a workflow companion

`v2` should not feel like:

- screen documentation
- release notes
- backend or entitlement commentary
- developer-facing explanation

## Structural shift from v1 to v2

`v1` structure:

- page-by-page
- literal
- system-perspective
- field and feature description

`v2` structure:

- task-by-task
- outcome-focused
- user-perspective
- action, clarification, next step

Examples of the shift:

- instead of `Add Instructors`
  write toward `Choose Who Can Teach`
- instead of `Staff Access`
  write toward `Choose Who Can Manage the Academy`
- instead of `Analytics Overview`
  write toward `Track Pay, Time, and Performance`

The actual UI labels should still appear in the body copy and steps.
The page framing should be written around the user’s job.

## Writing model for v2

Each `v2` page should follow this general structure:

1. Outcome-first title
2. One-line purpose statement
3. Short numbered steps
4. `What to know` section
5. `Common mistakes` section when useful
6. `Next step` or related links

Example pattern:

```md
## Choose Who Can Teach

Use `Business -> Instructors` to decide who can be assigned to lessons.

1. Open `Business -> Instructors`.
2. Select a member.
3. Add them to staff.
4. Turn on instructor status if they should teach.

What to know:
- Changing compensation does not make someone an instructor.
- Admin access is managed separately.

Next step:
- Set admin access
```

## Information architecture direction

`v2` should not mirror `v1` page-for-page unless that still helps the user.

Likely `v2` organization:

- Getting Started
- Running Your Academy
- Managing Your Team
- Membership Cards
- Lessons and Scheduling
- Reports and Pay
- Troubleshooting

This structure can change, but `v2` should be grouped by user goals, not by internal menu only.

## Page behavior standard

Every `v2` page should help the reader answer these questions quickly:

- Am I on the right page?
- What is this page for?
- What do I do first?
- What do people often confuse this with?
- What should I do next?

If a page does not answer those clearly, it is drifting back toward `v1`.

## Priority order

Build `v2` in high-confusion, high-value areas first.

Recommended page order:

1. Business overview
2. Instructors
3. Staff Access
4. Analytics
5. Create Lesson
6. Membership Cards overview
7. Quick Enrollment / Applications
8. Timetable / other paid tools

## Phase 1: Define the shell

- [ ] Decide `v2` navigation sections
- [ ] Decide whether `v2` uses a sidebar TOC, landing cards, or both
- [ ] Decide title style
- [ ] Decide screenshot style
- [ ] Decide callout styles:
  - `What to know`
  - `Common mistake`
  - `Next step`
- [ ] Decide if `v2` should have page tags such as `Owner`, `Admin`, `Paid Tool`

## Phase 2: Build the first real v2 pages

### 2.1 Business overview

- [ ] Define page goal
- [ ] Draft user-facing title
- [ ] Explain the Business area in plain language
- [ ] Add simple comparison between:
  - Instructors
  - Staff Access
  - Analytics
- [ ] Add links to the three detailed pages
- [ ] Add screenshot or visual block
- [ ] Review for plain-language tone

### 2.2 Instructors page

- [ ] Explain what Instructors is for
- [ ] Explain who should be added first
- [ ] Explain instructor vs assistant instructor
- [ ] Add short warning about compensation not changing instructor status
- [ ] Add next-step link to Staff Access or Analytics
- [ ] Add screenshot
- [ ] QA route and mobile layout

### 2.3 Staff Access page

- [ ] Explain that this is where admin access is granted
- [ ] Use current UI terms: `Member`, `Admin`, `Remove Admin`
- [ ] Explain the current access toggles clearly
- [ ] Avoid unverified backend behavior claims
- [ ] Add screenshot of the access flow
- [ ] QA route and mobile layout

### 2.4 Analytics page

- [ ] Explain the purpose in user terms
- [ ] Separate reports, compensation, and timesheets clearly
- [ ] Explain what Analytics does not do
- [ ] Link back to Instructors and Staff Access
- [ ] Add screenshot
- [ ] QA route and mobile layout

### 2.5 Create Lesson page

- [ ] Rewrite around the job to be done
- [ ] Keep field descriptions short
- [ ] Add instructor/assistant explanation
- [ ] Add `before you start` checklist
- [ ] Add screenshot
- [ ] QA route and mobile layout

## Phase 3: Visual upgrade

- [ ] Review Expo visual/icon handoff before building page visuals
- [ ] Decide screenshot dimensions and file format
- [ ] Decide annotation style
- [ ] Create reusable image frame or card style
- [ ] Add icons for major guide sections
- [ ] Add small comparison cards where confusion is common
- [ ] Improve spacing and scanning behavior for mobile

## Phase 4: UX improvements

- [ ] Add `Getting Started` landing page for new owners
- [ ] Add related-links blocks between v2 pages
- [ ] Add better search keywords for common alternate terms
- [ ] Consider small glossary for confusing terms
- [ ] Consider `popular tasks` shortcuts on the v2 home page

## Page inventory tracker

Use this section as the running checklist for actual `v2` page production.

### Core pages

- [ ] `v2` home
- [ ] Business overview
- [ ] Instructors
- [ ] Staff Access
- [ ] Analytics
- [ ] Create Lesson
- [ ] Edit / Cancel Lesson
- [ ] Booking for Students
- [ ] Membership Cards overview
- [ ] Quick Enrollment
- [ ] Academy Applications

### Secondary pages

- [ ] Create Academy
- [ ] Academy Basics
- [ ] Academy QR
- [ ] Delete Academy
- [ ] Timetable
- [ ] Pause Cards
- [ ] Reports and Timesheets
- [ ] Card templates
- [ ] Card records

### Lower-priority / later

- [ ] Affiliate Portal overview
- [ ] Portal members
- [ ] Portal cards
- [ ] Portal ranks
- [ ] Portal reports
- [ ] Settings pages
- [ ] Profile pages
- [ ] Account pages

## Content QA checklist

Before marking any page done:

- [ ] Uses user-facing title, not internal-only wording
- [ ] Opens with what the page is for
- [ ] Uses actual UI labels correctly
- [ ] Avoids unverified backend claims
- [ ] Includes at least one next-step pointer
- [ ] Reads well on mobile
- [ ] Does not duplicate unnecessary `v1` detail
- [ ] Has screenshots if the page would benefit from them

## Technical implementation checklist

- [ ] Decide `v2` route structure
- [ ] Add `v2` TOC/search system separate from `v1`
- [ ] Add `v2` components/pages
- [ ] Add screenshot asset location
- [ ] Add any reusable callout components
- [ ] Keep `/help` pointing to `v1` until `v2` is ready
- [ ] Add route mapping plan for future `/help` -> `v2` switch

## Rollout checklist

- [ ] Internal review of first `v2` pages
- [ ] Compare `v1` vs `v2` for clarity and completeness
- [ ] Decide missing pages required before launch
- [ ] Build route mapping table for old deep links
- [ ] Switch `/help` resolver to `v2`
- [ ] Keep `v1` live as fallback for a period
- [ ] Decide when to retire `v1`

## Notes

- Keep `v1` untouched except for factual maintenance.
- Use `v2` for the human-oriented remodel.
- Do not let `v2` become another exhaustive manual.
