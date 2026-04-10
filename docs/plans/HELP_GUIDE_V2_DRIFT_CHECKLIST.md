# Help Guide V2 Drift Checklist

Purpose: capture first-pass workflow drift between DojoMate Vue Help v2 and the current source-of-truth behavior documented or implemented in `DojoMate-Expo` and `Combatives-Rails`.

Status: working checklist for the second pass. This is intentionally broader than a final edit plan.

## Scope

- Primary help source under review:
  - `src/locales/v2/en.js`
- Upstream references reviewed:
  - `DojoMate-Expo/docs/reference/*`
  - `Combatives-Rails/ops/docs/reference/*`
  - selected live AFL views/controllers/routes

## Confidence Levels

- `High`: current help copy is clearly outdated or materially incomplete.
- `Medium`: likely drift; needs focused product confirmation before editing.
- `Low`: possible terminology or framing mismatch worth re-checking later.

## High-Confidence Drift

- [ ] Paid tools / package model is outdated in Help v2.
  - Vue help currently says:
    - Premium trial unlocks all tools
    - Premium includes the four productivity tools
    - Broadcast is grouped alongside those older assumptions
  - Current AFL Features model now includes:
    - Essential Tools
    - Advanced Tools
    - Pro Tools
    - Premium Package
    - Pro Package
    - Add-ons such as academy slots
  - Vue source:
    - `src/locales/v2/en.js` owner and tools sections
  - Upstream sources:
    - `Combatives-Rails/app/presenters/features_page.rb`
    - `Combatives-Rails/app/views/afl/features/index.html.erb`
  - Notes:
    - likely requires rewriting both owner-setup onboarding copy and the tools activation page

- [ ] Portal Cards help is missing the live lesson-booking adjustments area.
  - Vue help still describes portal cards as:
    - Templates
    - Assign
    - Active
    - History
  - AFL cards nav now includes:
    - Templates
    - Assign
    - Active
    - Adjustments
    - History
  - Vue source:
    - `src/locales/v2/en.js` portal cards section
  - Upstream sources:
    - `Combatives-Rails/app/controllers/afl/cards/base_controller.rb`
    - `Combatives-Rails/config/routes.rb`
    - `Combatives-Rails/ops/docs/reference/scheduled_lesson_booking_reference.md`
  - Notes:
    - may need a dedicated Help v2 page rather than a one-line mention

- [ ] Quick Enrollment / Portal Register copy is inaccurate about pending vs accepted behavior.
  - Vue help currently says quick enrollment skips the normal pending/accepted flow.
  - Current AFL registration behavior says:
    - parent-role onboarding creates a pending parent member row immediately
    - student-role onboarding creates an accepted parent row immediately
    - pending parents are visible in Members and expose Resume Onboarding
  - Vue source:
    - `src/locales/v2/en.js` quick enrollment and portal register sections
  - Upstream sources:
    - `Combatives-Rails/ops/docs/reference/afl_registration_reference.md`
    - `Combatives-Rails/app/controllers/afl/register_controller.rb`
    - `Combatives-Rails/app/views/afl/register/review.html.erb`
    - `Combatives-Rails/app/views/afl/register/success.html.erb`
  - Notes:
    - likely needs stronger distinction between:
      - adult student flow
      - parent-role flow
      - interrupted onboarding recovery

- [ ] Members / Applications help still uses older navigation language and under-describes the current AFL members surface.
  - Vue help still points people to `Members -> Add/Reject Members`.
  - Live AFL Members is now a status-driven moderation and recovery screen with:
    - Pending Users
    - Recently Accepted
    - Accepted Parents
    - Accepted Adults
    - Rejected Users
    - Banned Users
    - Add Member by Email
    - Resume Onboarding
  - Vue source:
    - `src/locales/v2/en.js` applications and portal members sections
  - Upstream sources:
    - `Combatives-Rails/app/views/afl/members/index.html.erb`
    - `Combatives-Rails/config/routes.rb`
  - Notes:
    - application review copy should probably stop describing one older list name as the main entry point

- [ ] Student Broadcast help is outdated about Expo authoring status.
  - Vue help says the Expo admin-side create screen is still staged and should not be treated as the main live workflow.
  - Expo reference now documents Broadcast authoring in Expo as shipped for owner/staff.
  - Vue source:
    - `src/locales/v2/en.js` student broadcast section
  - Upstream sources:
    - `DojoMate-Expo/docs/reference/broadcast-authoring-reference.md`
  - Notes:
    - member-facing read-only help is still mostly right, but the “admin create is staged” warning appears stale

## Medium-Confidence Drift

- [ ] Portal Reports help should be updated to reflect Academy Access Grants / Shareholders.
  - Current help says non-owner staff can access Reports if granted report access.
  - That is directionally true, but the actual runtime model now flows through:
    - academy access grants
    - Shareholders management screen
    - analytics entitlement
    - user-scoped generated SystemMessage rows
  - Vue source:
    - `src/locales/v2/en.js` portal reports section
  - Upstream sources:
    - `Combatives-Rails/ops/docs/reference/analytics_reports_reference.md`
    - `Combatives-Rails/app/views/afl/academy_access_grants/index.html.erb`
    - `Combatives-Rails/app/views/afl/monthly_reports/index.html.erb`
    - `Combatives-Rails/config/routes.rb`
  - Questions for second pass:
    - should Help v2 mention Shareholders explicitly?
    - should the portal overview page list it as a separate workflow?

- [ ] Portal overview is incomplete relative to the live AFL surface area.
  - Current help focuses on:
    - Register
    - Members
    - Ranks
    - Cards
    - Reports
    - package activation
  - Live AFL also exposes or strongly depends on:
    - Features
    - Broadcasts
    - Shareholders
    - Cloud Usage
    - Payouts
    - owner billing issues
  - Vue source:
    - `src/locales/v2/en.js` portal overview section
  - Upstream sources:
    - `Combatives-Rails/app/views/afl/*`
    - `Combatives-Rails/config/routes.rb`
  - Notes:
    - not every AFL page needs Help v2 coverage, but the overview likely needs to acknowledge the broader portal role

- [ ] Portal Cards delete semantics need stronger version-aware wording.
  - Current help says:
    - you cannot delete a template that still has active cards
    - deleting a card has expire/cancel behavior
  - Current backend contract is more specific:
    - `v1` active-card delete is lifecycle transition, not hard delete
    - `v1` template delete archives the template
    - template deletion blocks only on open-lifecycle cards in `v1`
  - Vue source:
    - `src/locales/v2/en.js` portal cards section
  - Upstream sources:
    - `Combatives-Rails/ops/docs/reference/card_lifecycle_versioning_reference.md`
    - `Combatives-Rails/app/controllers/api/v1/active_cards_controller.rb`
    - `Combatives-Rails/app/controllers/api/v1/card_templates_controller.rb`
  - Questions for second pass:
    - how much of this should be exposed in user-facing help versus kept internal?

- [ ] App Cards help likely overstates hard-delete style cleanup.
  - Multiple Help v2 cards pages still describe the normal renewal flow as:
    - delete the active card
    - then issue the next one
  - Current backend behavior is more lifecycle-oriented:
    - active-card removal becomes `expired` or `canceled`
    - template removal in `v1` archives the template
  - Vue source:
    - `src/locales/v2/en.js` cards overview, booking flow, delete template, and delete card sections
  - Upstream sources:
    - `Combatives-Rails/ops/docs/reference/card_lifecycle_versioning_reference.md`
    - `Combatives-Rails/app/controllers/api/v1/active_cards_controller.rb`
  - Notes:
    - probably a wording refinement, but repeated enough that it can mis-teach the mental model

- [ ] Pause Cards help may understate entitlement downgrade behavior and academy-wide normalization.
  - User-facing help currently focuses on manual pause/unpause behavior.
  - Backend reference now includes automatic normalization when an owner loses the pause entitlement.
  - Vue source:
    - `src/locales/v2/en.js` pause cards section
  - Upstream sources:
    - `Combatives-Rails/ops/docs/reference/pause_cards_entitlement_reference.md`
  - Notes:
    - this may matter more for troubleshooting/help than for the main happy path

- [ ] Timetable help may need refinement around visibility and publishing rules.
  - Current help says unpublished lessons appear on Schedule and members can still see them as future plans but cannot book.
  - Backend booking reference is mostly about API/entitlement boundaries, not full user wording.
  - Expo schedule behavior may need a focused re-check before rewriting this section.
  - Vue source:
    - `src/locales/v2/en.js` timetable section
  - Upstream sources:
    - `Combatives-Rails/ops/docs/reference/scheduled_lesson_booking_reference.md`
    - `DojoMate-Expo/src/screens/admin/schedule/*`
  - Questions for second pass:
    - is current member visibility wording still accurate in 1.9.9?

## Low-Confidence / Terminology Drift

- [ ] Business terminology may need an `Access` vs `Permissions` pass.
  - Expo references now explicitly preserve compact `Access` wording in some places.
  - Vue help still leans on `Permissions` / `Staff Access`.
  - Vue source:
    - `src/locales/v2/en.js` business sections
  - Upstream sources:
    - `DojoMate-Expo/docs/reference/business-admin-role-model.md`
    - `DojoMate-Expo/docs/reference/repo-conventions.md`
    - `DojoMate-Expo/docs/reference/hardening-and-regressions.md`

- [ ] Owner setup guidance may need to reflect the newer Expo onboarding contract more directly.
  - Current help uses a generic setup order.
  - Expo onboarding reference now has stronger milestone-driven behavior:
    - first instructor
    - first card template
    - first active card
    - first scheduled lesson
    - first admin booking
    - completion held until academy reaches 10 scheduled lessons
  - Vue source:
    - `src/locales/v2/en.js` owner setup sections
  - Upstream sources:
    - `DojoMate-Expo/docs/reference/admin-onboarding-reference.md`
  - Notes:
    - may be a refinement issue rather than a strict bug

- [ ] Business role split may need stronger wording around teaching vs admin vs analytics identity.
  - Current Help v2 business pages are mostly directionally correct, but Expo now documents a stricter role split:
    - Instructors manages teaching identity
    - Permissions manages admin access only
    - Analytics manages compensation/reports only
  - Vue source:
    - `src/locales/v2/en.js` business overview, compare, instructors, staff access, analytics sections
  - Upstream sources:
    - `DojoMate-Expo/docs/reference/business-admin-role-model.md`
  - Notes:
    - likely less a factual bug and more a place to reduce future confusion

- [ ] Rank help may need a later pass for program-aware display language outside the portal ranks page.
  - Portal ranks help already acknowledges multi-program workflow.
  - Expo rank rendering is now explicitly academy-scoped and program-aware, with no global highest-rank guessing.
  - Vue source:
    - current obvious impact is low, but any help text that implies one universal rank should be rechecked later
  - Upstream sources:
    - `DojoMate-Expo/docs/reference/rank-display-api-reference.md`
    - `Combatives-Rails/ops/docs/reference/rank_progression_api_contract.md`
  - Notes:
    - mostly a future consistency sweep unless we find user-facing copy that still teaches single-rank assumptions

- [ ] Booking help may need a troubleshooting pass around backend guard-code-driven behavior.
  - Current help teaches the main flow, but Expo booking now explicitly keys off backend guard codes and has stronger admin/member mutation boundaries.
  - Vue source:
    - `src/locales/v2/en.js` schedule create/manage/booking sections
  - Upstream sources:
    - `DojoMate-Expo/docs/reference/hardening-and-regressions.md`
    - `DojoMate-Expo/docs/reference/client-issues-booking-reference.md`
    - `DojoMate-Expo/docs/reference/mutation-validation-v1-reference.md`
    - `Combatives-Rails/ops/docs/reference/scheduled_lesson_booking_reference.md`
  - Questions for second pass:
    - are there any user-facing Help v2 pages that should explicitly mention current admin vs member booking limits more carefully?

## Areas To Re-Scan In Second Pass

- [ ] Broadcast terminology and entitlement copy across all locales
- [ ] Tools / Features / Premium / Pro naming consistency
- [ ] Cards wording around:
  - active vs archived vs expired vs canceled
  - app cards vs portal cards
- [ ] Members wording around:
  - pending parents
  - dependent moderation
  - attach existing account by email
- [ ] Ranks wording around:
  - multi-program enrollment
  - review modal for non-forward changes
- [ ] Reports wording around:
  - access grants
  - entitlement lock state
  - read-only generated reports

## Suggested Edit Order

- [ ] Rewrite Tools / Features / package model first
- [ ] Rewrite Portal Register + Quick Enrollment together
- [ ] Rewrite Portal Members + Applications together
- [ ] Update Portal Cards with adjustments and lifecycle caveats
- [ ] Fix Student Broadcast wording about Expo authoring
- [ ] Revisit Portal Reports / Shareholders
- [ ] Do terminology sweep last

## Open Questions For Product Memory-Jogging

- [ ] Which package and trial statements should be user-facing in 1.9.9:
  - Premium only?
  - Pro only?
  - both?
  - trial scope exactly?
- [ ] Should Help v2 teach Expo Broadcast authoring at all, or still point owners primarily to AFL Broadcasts?
- [ ] For timetable-derived unpublished lessons, what exactly should members see today?
- [ ] Should Shareholders be presented as a standalone portal workflow in Help v2, or just mentioned under Reports?
- [ ] Do we want Help v2 to mention Cloud Usage / media gating where Broadcasts depend on it?

## File Targets Likely Affected Later

- `src/locales/v2/en.js`
- translated `src/locales/v2/*` files after English is finalized
- possibly TOC or route labels if section names change

## Chunk 1 Working Notes: Tools / Features

This is the first refinement chunk because it affects multiple other help pages.

### Current Help V2 Claims That Look Drifted

- [ ] Help still frames the paid-tool world as mostly:
  - Timetable
  - Pause Cards
  - Staff Access
  - Analytics
  - Premium trial / Premium package as the main umbrella
- [ ] Help still implies the 90-day trial unlocks all tools.
- [ ] Help says Premium includes the four productivity tools.
- [ ] Help treats Broadcast as a paid-tool concept in a way that may no longer match the actual package grouping.

Relevant Vue copy clusters:
- `src/locales/v2/en.js`
  - owner home `paid_body`
  - owner setup `getting_started.order_items`
  - tools overview
  - tools activate
  - tools broadcast

### Current AFL / Source-Of-Truth Shape

- [ ] Features page now has explicit sections:
  - Essential Tools
  - Advanced Tools
  - Pro Tools
  - Premium Package
  - Pro Package
  - Add-ons
- [ ] Current presenter groups tools as:
  - Essential
    - `timetables`
    - `pause_cards`
  - Advanced
    - `staff_permissions`
    - `analytics`
  - Pro Tools
    - `check_in`
- [ ] There is also an add-on:
  - academy slot
- [ ] Both Premium and Pro bundles currently exist in AFL code.

Primary upstream sources:
- `Combatives-Rails/app/presenters/features_page.rb`
- `Combatives-Rails/app/views/afl/features/index.html.erb`

### Likely Rewrite Direction

- [ ] Stop teaching Premium as the single mental model.
- [ ] Teach `Features` as the entry point, with package/bundle language secondary.
- [ ] Describe tool groupings in current AFL terms:
  - Essential Tools
  - Advanced Tools
  - Pro Tools
  - bundles / packages
  - add-ons
- [ ] Avoid saying the trial unlocks “all tools” unless that is still explicitly true in product terms.
- [ ] Re-check whether Broadcast belongs in this page as:
  - a separately entitled tool
  - a Pro tool
  - a portal workflow that should be linked but not grouped with the old four-tool set

### Affected Help Pages

- [ ] Owner home
- [ ] Owner getting started
- [ ] Tools overview
- [ ] Activate Tools and Premium
- [ ] Broadcast
- [ ] Any cross-links that mention Premium as the umbrella answer

### Focus Questions For Second Pass

- [x] In user-facing 1.9.9 language, what should we say the free trial unlocks exactly?
  - Product guidance:
    - do not teach the current unlock path
    - 1.9.9 still has IAP locked
    - 2.0.0 is planned to use simple in-app purchase flow
    - help guides may still describe all tools/workflows
- [ ] Should Help v2 present both `Premium` and `Pro`, or just say “packages” unless the distinction matters?
- [ ] Is Broadcast currently best taught as:
  - part of Pro
  - separately entitled
  - both
- [ ] Should `Check-In` appear in Help v2 yet, or is it still too early for user-facing guidance here?

### Product Direction Confirmed

- [x] Help v2 can document all tool workflows even before unlock/purchase UX is finalized.
- [x] Help v2 should avoid explaining how to unlock/buy tools in 1.9.9.
- [x] Do not anchor help copy to the current locked 1.9.9 IAP state.
- [x] Future-friendly direction:
  - 2.0.0 purchase/unlock should be described simply as in-app purchase when that release lands

### Rewrite Rule For This Chunk

- [ ] Remove or soften current copy that teaches:
  - free-trial specifics
  - package unlock instructions
  - portal-based purchase steps as the core user guidance
- [ ] Keep workflow guides for:
  - Timetable
  - Pause Cards
  - Staff Access
  - Analytics
  - Broadcast
  - other live tool workflows we intentionally want documented
- [ ] Reframe `Features` help as:
  - a place to review tool/package status
  - not the main instructional path for how to buy/unlock in user-facing help

### Proposed Output From This Chunk

- [ ] Rewrite the English Help v2 tools/package copy to match current AFL structure.
- [ ] Leave translated locales alone until English is approved.
- [ ] Update the checklist after rewrite to mark downstream pages still needing follow-up.

## Chunk 2 Working Notes: Business / Access / Operations

This is the next refinement chunk because Expo navigation and menu structure have moved beyond the older Help v2 mental model.

### Current Help V2 Claims That Look Drifted

- [ ] Help still teaches `Analytics` as a `Business` page inside the admin dashboard.
- [ ] Help still frames `Business` as the place for:
  - instructors
  - permissions / staff access
  - analytics
- [ ] Help still uses `Staff Access` / `Permissions` wording as the main navigation language, even though the compact shipped button label is now `Access`.
- [ ] Help does not yet explain the third `operations` dashboard as the owner/pro oversight space.
- [ ] Admin help may overstate that delegated staff daily work includes the same tool/dashboard structure owners see.

Relevant Vue copy clusters:
- `src/locales/v2/en.js`
  - `admin_home`
  - `business.overview`
  - `business.compare`
  - `business.staff_access`
  - `business.analytics`
  - cross-links from tools pages

### Current Expo / Source-Of-Truth Shape

- [ ] Admin dashboard stack currently owns:
  - Business
  - Broadcast
  - Members
  - Cards
  - Schedule
  - Lessons
  - purchase screens
- [ ] Analytics is no longer in the admin stack; it lives in the `operations` dashboard.
- [ ] Operations dashboard currently owns:
  - `OperationsAnalytics`
  - `OperationsPermissions`
  - `OperationsHome`
- [ ] Operations access rule is now:
  - owner only
  - active Pro access required
- [ ] Compact button/menu wording intentionally uses `Access` in constrained menu contexts.

Primary upstream sources:
- `DojoMate-Expo/src/navigation/AdminStack.js`
- `DojoMate-Expo/src/navigation/OperationStack.js`
- `DojoMate-Expo/src/utils/dashboardEntryModel.js`
- `DojoMate-Expo/src/utils/operationsDashboardAccess.js`
- `DojoMate-Expo/src/screens/admin/business/components/BusinessMenu.js`
- `DojoMate-Expo/src/screens/ops/PermissionsLayout.js`
- `DojoMate-Expo/src/screens/ops/components/PermissionsMenu.js`
- `DojoMate-Expo/src/screens/ops/AnalyticsLayout.js`

### Concrete Drift To Resolve

- [ ] Help should stop implying that Analytics is simply `Business -> Analytics`.
- [ ] Help should distinguish:
  - admin dashboard work
  - owner/pro operations dashboard work
- [ ] Help should explain `Access` as the shorter navigation label where needed, while still allowing fuller `Permissions` wording in explanatory text if helpful.
- [ ] Business role split should stay clear:
  - Instructors = teaching identity
  - Access / Permissions = admin access
  - Analytics / Operations = owner/pro metrics, reports, oversight tools

### Likely Rewrite Direction

- [ ] Reframe Business pages around team setup and academy management, not full analytics ownership.
- [ ] Keep the `Staff Access` help topic, but explain that the compact in-app button may be labeled `Access`.
- [ ] Move Analytics guidance conceptually into an owner/pro operations area.
- [ ] Add a simple explanation that some advanced owner tools now live in a separate dashboard from the main admin workflow.
- [ ] Keep staff/admin expectations narrower than owner expectations.

### Affected Help Pages

- [ ] `admin_home`
- [ ] `business.overview`
- [ ] `business.compare`
- [ ] `business.staff_access`
- [ ] `business.analytics`
- [ ] potentially `owner_home` if it should point to Operations instead of Business for analytics/reporting

### Focus Questions For Second Pass

- [ ] In Help v2, do we want to expose the user-facing word `Operations`, or use a softer phrase like:
  - owner dashboard
  - advanced owner tools
  - oversight dashboard
- [ ] Should the Analytics help page stay under the Business section for convenience, but explain that the live screen is in the third dashboard?
- [ ] Do we want a dedicated Help v2 page for the `Operations` dashboard as a concept?
- [ ] For compact navigation wording, should Help v2 say:
  - “Access (Permissions)”
  - “Access”
  - or keep “Staff Access” as the guide title but mention the shorter in-app button?

### Proposed Output From This Chunk

- [ ] Update the checklist-backed Help v2 mental model for:
  - Business
  - Access
  - Analytics / Operations
- [ ] Rewrite English copy only after the terminology decision is settled.

## Chunk 3 Working Notes: Cards Owner/Admin Split And Disputes

This chunk is now high priority because the cards area has a newer ownership split plus a brand-new dispute workflow.

### Product Direction Confirmed

- [x] Admins should no longer be taught that the general admin cards area includes the older review surfaces for:
  - issue records
  - delete records
  - audit logs
- [x] Those review surfaces now belong with the owner-side Operations -> Oversight model.
- [x] A new `Disputes` system now exists and should be treated as a first-class current workflow.
- [x] General admin Help v2 sections must not refer to issue/delete/audit record workflows.
- [x] `Card Records` no longer exists as a current product surface.
- [x] The old historical record model has been refactored into owner-side buttons under Operations -> Oversight:
  - issue records
  - delete records
  - audit logs

### Current Help V2 Claims That Look Drifted

- [x] Help still teaches `Card Records` as a normal admin-side support workflow.
- [ ] Help still describes historical card review in a broad way without distinguishing owner-only record views from newer dispute handling.
- [ ] Help does not mention the new `Disputes` flow at all.

Relevant Vue copy clusters:
- `src/locales/v2/en.js`
  - cards overview
  - delete card
  - records
  - portal cards
  - any links or support copy that still point to generic card history / records

### Current Expo / Source-Of-Truth Shape

- [ ] Admin cards menu now includes:
  - Active
  - Assign
  - Edit
  - Create
  - Delete
  - Session Debt
  - Disputes
  - optional Pause
- [ ] `Disputes` exists as a dedicated admin cards screen.
- [ ] Member academy area also has a dedicated disputes screen.
- [ ] Card disputes have API support for:
  - list
  - create
  - update
- [ ] Dispute affordances are exposed from:
  - active cards
  - recent card delete records

Primary upstream sources:
- `DojoMate-Expo/src/utils/cardsMenuPhase.js`
- `DojoMate-Expo/src/screens/admin/cards/components/CardsMenu.js`
- `DojoMate-Expo/src/screens/admin/cards/components/CardsContent.js`
- `DojoMate-Expo/src/screens/admin/cards/CardsDispute.js`
- `DojoMate-Expo/src/screens/member/academy/AcademyDisputes.js`
- `DojoMate-Expo/src/screens/member/academy/components/AcademyMenu.js`
- `DojoMate-Expo/src/services/api/apiQuery.js`
- `DojoMate-Expo/src/services/api/apiMutation.js`
- `Combatives-Rails/app/controllers/api/card_disputes_controller.rb`
- `Combatives-Rails/app/controllers/api/v1/card_disputes_controller.rb`
- `Combatives-Rails/config/routes.rb`

### Important Drift / Cleanup Notes

- [x] The owner-side record review surfaces still exist as intended product surfaces:
  - `Issue Records`
  - `Delete Records`
  - `Audit Logs`
- [x] These belong under Operations -> Oversight, not the general admin cards area.
- [ ] Help rewrite should follow this ownership split clearly and avoid flattening them back into generic admin cards help.

### Likely Rewrite Direction

- [x] Remove `Card Records` as a current Help v2 concept.
- [ ] Teach the current admin cards support model as:
  - Session Debt
  - Disputes
  - Active-card management
- [x] Remove issue/delete/audit record language from general admin-facing help.
- [x] If older record-review workflows need mention, describe them only as owner-side Operations -> Oversight actions.
- [x] Add a dedicated Help v2 page or section for `Disputes`.
- [ ] Clarify member-side dispute flow separately from admin dispute review flow if both should be documented.

### Affected Help Pages

- [x] cards overview
- [x] card records
- [ ] delete/cancel card
- [x] portal cards
- [ ] admin path summaries that mention cards support workflows
- [ ] potentially student/member help if member disputes should be documented in v2

### Focus Questions For Second Pass

- [x] Should `Card Records` be removed from Help v2 entirely, or retained as owner-only reference language?
  - Remove as a current product surface, but keep the owner-side Operations -> Oversight review buttons understood as:
    - issue records
    - delete records
    - audit logs
- [x] Should `Disputes` replace `Card Records` as the main support/audit workflow in Help v2?
  - Yes, for the current admin cards support model.
- [ ] Do we want:
  - one disputes guide
  - or separate admin-review and member-reporting guides?
- [ ] Should Session Debt stay grouped with cards support workflows, or be described as a separate owner/admin cleanup tool?

### Proposed Output From This Chunk

- [x] Rewrite cards support/help copy around the new owner/admin split.
- [x] Add dispute coverage to the checklist-backed Help v2 plan.
- [ ] Flag stale Expo owner-only record surfaces for separate product/code cleanup if they are no longer intended to ship.

## Chunk 4 Working Notes: Owner Guided Onboarding And Tools

### Confirmed Drift

- [x] Help v2 owner onboarding still taught the older setup order and ended in package/trial language.
- [x] Expo now has a guided owner onboarding/tutorial path that stages setup instead of treating tools/packages as the main next step.
- [x] Help v2 Tools/Features copy still taught older package, trial, and Broadcast entitlement assumptions.

### Current Product Direction

- [x] New academy owners are guided through staged setup in Expo.
- [x] The guided path prioritizes:
  - first instructor setup
  - first card template
  - first active card
  - first scheduled lessons / booking
- [x] Help v2 should describe tool workflows without teaching old unlock/trial steps.
- [x] Broadcast should be described separately from the older normal package-tool model.

### Source References

- `DojoMate-Expo/src/utils/adminOnboardingLanding.js`
- `DojoMate-Expo/src/utils/adminOnboardingState.js`
- `DojoMate-Expo/src/screens/admin/business/BusinessLayout.js`
- `DojoMate-Expo/src/screens/admin/business/BusinessAdminGate.js`
- `DojoMate-Expo/src/screens/admin/business/BusinessInstructorSetup.js`
- `DojoMate-Vue/src/locales/v2/en.js`

### First-Pass Output

- [x] Rewrite owner Getting Started copy around the guided setup path.
- [x] Remove old free-trial / Premium-teaching language from the owner onboarding sequence.
- [x] Rewrite Tools / Features help to focus on workflow meaning instead of package purchase instructions.
- [ ] Second-pass product decisions still needed for the final 2.0.0 tool wording once Expo and Rails monetization surfaces are fully aligned.

## Chunk 5 Working Notes: Portal Register, Portal Members, And Quick Enrollment

### Confirmed Drift

- [x] Help v2 Quick Enrollment said the flow skips normal pending/accepted handling.
- [x] Rails reference confirms parent-role onboarding creates a pending parent member row immediately.
- [x] Portal Register needed stronger wording about pending parent creation and resume behavior.
- [x] Portal Members wording was close, but still understated the status-driven split now used by the live Members UI.

### Current Product Direction

- [x] Parent-role registration creates a pending parent row immediately.
- [x] Student-role registration creates an accepted student row immediately.
- [x] Resume Onboarding is recovered from Members and currently returns to the children step.
- [x] Members is organized by status areas:
  - Pending Users
  - Recently Accepted
  - Accepted Parents
  - Accepted Adults
  - Rejected Users
  - Banned Users

### Source References

- `Combatives-Rails/ops/docs/reference/afl_registration_reference.md`
- `Combatives-Rails/app/views/afl/members/index.html.erb`
- `DojoMate-Vue/src/locales/v2/en.js`

### First-Pass Output

- [x] Rewrite Quick Enrollment help to stop saying parent registration skips pending flow.
- [x] Tighten Applications wording around the status-driven Members surface.
- [x] Tighten Portal Register wording around pending parent creation and resume behavior.
- [x] Tighten Portal Members wording around the current status buckets and labels.

## Chunk 6 Working Notes: Portal Reports And Shareholders

### Confirmed Drift

- [x] Help v2 described Portal Reports too generically.
- [x] Help v2 did not clearly teach the owner-side Shareholders surface for report access grants.
- [x] The live reporting model is grant-driven, not automatic for admins.

### Current Product Direction

- [x] Monthly Reports is read-only and entitlement-gated.
- [x] Reports are delivered from generated `SystemMessage` insight rows, not live report computation.
- [x] Non-owner staff do not automatically receive financial or operational report visibility.
- [x] Owners manage report viewers through AFL Shareholders.
- [x] Shareholders currently exposes:
  - Financial
  - Operational
  - Advice as a disabled coming-soon placeholder

### Source References

- `Combatives-Rails/ops/docs/reference/analytics_reports_reference.md`
- `Combatives-Rails/app/views/afl/academy_access_grants/index.html.erb`
- `DojoMate-Vue/src/locales/v2/en.js`

### First-Pass Output

- [x] Tighten Portal overview language around reports and report access.
- [x] Rewrite Portal Reports to explain entitlement + grant-based visibility.
- [x] Add Shareholders/report-access grant wording to Help v2.

## Chunk 7 Working Notes: Terminology Sweep

### Confirmed Drift

- [x] Help v2 still had older labels such as `Activate Tools and Premium`, `paid tools`, and `Paid Tool`.
- [x] Some tool and portal wording still leaned on older package-era naming even after workflow copy was updated.

### First-Pass Output

- [x] Rename user-facing help labels toward lighter `optional tools / tool status` wording.
- [x] Remove obvious leftover `paid tools` / `Paid Tool` / `Activate Tools and Premium` terminology from Help v2 English where it was just label drift.
- [ ] Second-pass polish may still be needed once Expo/Rails naming settles fully for 2.0.0.

## Chunk 8 Working Notes: Owner Web Capabilities

### Confirmed Drift

- [x] Help v2 still underrepresents owner-only web surfaces beyond the core portal pages.
- [x] `Cloud Usage` is now a real owner workflow for academy media billing readiness, billing-method onboarding, and statement disputes.
- [x] `Billing Payments` / `Payouts` is a real owner workflow for academy payment-collection readiness and payout onboarding.
- [x] AFL nav exposes these owner surfaces directly, but Help v2 barely mentions them.

### Current Product Direction

- [x] `Features` is not the whole owner capability story anymore.
- [x] `Cloud Usage` controls academy media/broadcast billing readiness.
- [x] `Payouts` / `Billing Payments` controls academy payment-collection onboarding/readiness.
- [x] These are owner-side web workflows, not normal admin/mobile flows.

### Source References

- `Combatives-Rails/app/views/layouts/afl.html.erb`
- `Combatives-Rails/app/controllers/afl/cloud_usage_controller.rb`
- `Combatives-Rails/app/views/afl/cloud_usage/show.html.erb`
- `Combatives-Rails/app/controllers/afl/payouts_controller.rb`
- `DojoMate-Vue/src/locales/v2/en.js`

### First-Pass Output

- [x] Expand Portal Overview to mention owner-side capability pages beyond the old core sections.
- [ ] Decide whether Help v2 should add dedicated first-pass pages for:
  - Cloud Usage
  - Billing Payments / Payouts
- [ ] Second-pass refine how Broadcast, Features, Cloud Usage, and Payouts cross-link as one owner capability model.

## Chunk 9 Working Notes: Academy Switching And Creation Mode

### Confirmed Drift

- [x] Help v2 treated `Create Academy` like a simple standalone page, but Expo now uses a Business bootstrap flow that can switch users into academy-creation mode.
- [x] Admin users without a selected academy can hit a Business gate that offers a create-academy path or a work-as-admin path.
- [x] Full-screen creation mode now has an explicit `Cancel Creation` action that returns the user to the admin/staff gate instead of leaving them inside owner setup.
- [x] `Academy QR` is no longer only about sharing a join code; it also acts as an academy-switching surface when the account can access more than one academy.
- [x] Once already inside an academy, Admin Settings can pop the user back out to academy selection or academy creation bootstrap flow.

### Current Product Direction

- [x] Business can enter a bootstrap state before an academy is selected.
- [x] The correct active academy matters before admins change members, cards, or schedule data.
- [x] Switching academies is part of normal admin/owner workflow when the account has more than one academy available.
- [x] Creation-mode entry and exit should be documented as mode changes, not just page links.
- [x] Operations access is stricter than general admin access: it is owner-only and currently Pro-gated.

### Source References

- `DojoMate-Expo/src/screens/admin/business/BusinessLayout.js`
- `DojoMate-Expo/src/screens/admin/business/BusinessAdminGate.js`
- `DojoMate-Expo/src/screens/admin/business/BusinessCreate.js`
- `DojoMate-Expo/src/screens/admin/business/BusinessQR.js`
- `DojoMate-Expo/src/screens/admin/admin/AdminSettings.js`
- `DojoMate-Vue/src/locales/v2/en.js`

### First-Pass Output

- [x] Update `Getting Started` to mention Business bootstrap / creation mode.
- [x] Update `Create Academy` to explain gate entry, full-screen creation mode, and cancel behavior.
- [x] Update `Academy QR` to explain academy switching as well as QR sharing.
- [x] Update `Business Overview` and `Admin Home` to remind users to confirm the currently loaded academy.
- [x] Add first-pass wording that Admin Settings can pop users back out into the Business bootstrap flow.
- [x] Tighten `Analytics` / `Operations` wording so Help does not imply ordinary admins can access that dashboard.
