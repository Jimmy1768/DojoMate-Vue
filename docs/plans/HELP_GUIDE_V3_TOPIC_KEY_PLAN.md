# Help Guide v3 Topic / Key Plan

## Purpose

Define the canonical v3 help-guide structure for `DojoMate-Vue` using `DojoMate-Expo/docs/reference/*.md` as the workflow source of truth.

This plan is for:

- Vue help-guide implementation
- locale-key planning
- search/index planning
- future AppRelay / assistant ingestion

This plan is not final user-facing copy.

## Source Of Truth

Primary reference:

- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/user-action-workflow-map.md`

Behavioral references to consult before writing page copy:

- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/hardening-and-regressions.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/business-admin-role-model.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/admin-onboarding-reference.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/anonymous-booking-reference.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/client-issues-booking-reference.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/broadcast-authoring-reference.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/online-subsystem-runtime.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/push-notification-routing.md`
- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/cache-payload-contracts.md`

Secondary engineering reference only:

- `/Users/jimmy1768/Projects/DojoMate-Expo/docs/reference/api-endpoint-catalog.md`

## v3 Content Rules

- Write around user goals and visible actions, not API endpoints.
- Keep one canonical locale key family per topic.
- Avoid duplicate topic blocks in locale files.
- Prefer nested locale objects only.
- Search entries must point to real routes and real locale keys only.
- Do not preserve obsolete v1 or pre-refactor workflows just for historical completeness.
- Cross-product flows may mention AFL / Source Combatives where the user actually leaves DojoMate or depends on owner web setup.

## Canonical v3 Namespace

Use a new top-level namespace:

- `help_v3`

Recommended top-level structure:

```js
help_v3: {
  welcome: {},
  member: {
    home: {},
    join_academy: {},
    memberships: {},
    cards: {},
    card_disputes: {},
    booking: {},
    attendance_records: {},
    system_alerts: {},
    broadcasts: {},
    online_learning: {},
    events: {}
  },
  admin: {
    home: {},
    academy_context: {},
    members: {},
    cards: {},
    session_debt: {},
    lessons: {},
    schedule: {},
    admin_booking: {},
    broadcasts: {},
    alerts_qr: {}
  },
  owner: {
    home: {},
    create_academy: {},
    onboarding: {},
    business_management: {},
    instructors: {},
    access: {},
    operations_analytics: {},
    timesheets_salaries: {},
    oversight: {},
    tools: {}
  },
  account: {
    sign_in: {},
    create_account: {},
    reset_password: {},
    change_password: {},
    profile: {},
    child_accounts: {},
    privacy_progression: {},
    preferences: {},
    delete_account: {},
    logout: {}
  }
}
```

## Route Plan

Recommended new route root:

- `/help-v3`

Recommended hubs:

- `/help-v3`
- `/help-v3/member`
- `/help-v3/admin`
- `/help-v3/owner`
- `/help-v3/account`

Recommended topic routes:

### Member

- `/help-v3/member/join-academy`
- `/help-v3/member/memberships`
- `/help-v3/member/cards`
- `/help-v3/member/card-disputes`
- `/help-v3/member/booking`
- `/help-v3/member/attendance-records`
- `/help-v3/member/system-alerts`
- `/help-v3/member/broadcasts`
- `/help-v3/member/online-learning`
- `/help-v3/member/events`

### Admin / Staff

- `/help-v3/admin/academy-context`
- `/help-v3/admin/members`
- `/help-v3/admin/cards`
- `/help-v3/admin/session-debt`
- `/help-v3/admin/lessons`
- `/help-v3/admin/schedule`
- `/help-v3/admin/admin-booking`
- `/help-v3/admin/broadcasts`
- `/help-v3/admin/alerts-qr`

### Owner / Operations

- `/help-v3/owner/create-academy`
- `/help-v3/owner/onboarding`
- `/help-v3/owner/business-management`
- `/help-v3/owner/instructors`
- `/help-v3/owner/access`
- `/help-v3/owner/operations-analytics`
- `/help-v3/owner/timesheets-salaries`
- `/help-v3/owner/oversight`
- `/help-v3/owner/tools`

### Account / Settings

- `/help-v3/account/sign-in`
- `/help-v3/account/create-account`
- `/help-v3/account/reset-password`
- `/help-v3/account/change-password`
- `/help-v3/account/profile`
- `/help-v3/account/child-accounts`
- `/help-v3/account/privacy-progression`
- `/help-v3/account/preferences`
- `/help-v3/account/delete-account`
- `/help-v3/account/logout`

## Canonical Per-Topic Key Shape

Each topic should use one predictable shape.

Minimum:

```js
topic_name: {
  badge: '...',
  title: '...',
  intro: '...',
  what_title: '...',
  what_items: ['...'],
  where_title: '...',
  where_items: ['...'],
  limits_title: '...',
  limits_items: ['...'],
  results_title: '...',
  results_items: ['...'],
  next_title: '...',
  next_links: [
    { label: '...', to: '/help-v3/...' }
  ]
}
```

Allowed simplifications:

- If a topic needs one paragraph instead of a list, use `*_body`.
- If a topic has no good `next` links yet, omit the `next_*` block.
- If a topic needs workflow steps, use:
  - `steps_title`
  - `steps_items`

Avoid:

- mixed schemas for the same role/topic
- duplicate fallback topic blocks
- flat dotted translation keys

## Search Manifest Shape

Create a new search manifest similar to `src/help-v2/search.js`.

Recommended file:

- `src/help-v3/search.js`

Recommended record shape:

```js
{
  path: '/help-v3/member/booking',
  titleKey: 'help_v3.member.booking.title',
  bodyKeys: [
    'help_v3.member.booking.intro',
    'help_v3.member.booking.what_items',
    'help_v3.member.booking.limits_items'
  ],
  role: 'member',
  topic: 'booking'
}
```

Rules:

- `path` must be a real route.
- `titleKey` must exist in all locales.
- `bodyKeys` should pull only user-meaningful text, not decorative labels.
- Include `role` and `topic` metadata for later AppRelay filtering.

## v3 Topic Plan

### Welcome

#### `help_v3.welcome`
- Route: `/help-v3`
- Goal:
  - explain the four help areas
  - direct users into the correct dashboard/role path
- Must clarify:
  - `Member`
  - `Admin`
  - `Owner / Operations`
  - `Account / Settings`

### Member Hub

#### `help_v3.member.home`
- Route: `/help-v3/member`
- Goal:
  - orient member users to academy joining, cards, booking, alerts, broadcasts, online, and events

#### `help_v3.member.join_academy`
- Route: `/help-v3/member/join-academy`
- Source docs:
  - `user-action-workflow-map.md`
  - `navigation-and-screen-flow.md`
- Must cover:
  - discover
  - search
  - QR scan
  - academy details before joining
  - approval may still be required

#### `help_v3.member.memberships`
- Route: `/help-v3/member/memberships`
- Must cover:
  - joined academy list
  - selected academy context
  - why wrong academy selection makes cards/booking look missing

#### `help_v3.member.cards`
- Route: `/help-v3/member/cards`
- Must cover:
  - active cards
  - pending payment cards
  - where member sees card state
- Must not cover:
  - owner/admin audit workflows

#### `help_v3.member.card_disputes`
- Route: `/help-v3/member/card-disputes`
- Must cover:
  - when to raise a dispute
  - where disputes live
  - disputes create follow-up, not instant correction

#### `help_v3.member.booking`
- Route: `/help-v3/member/booking`
- Source docs:
  - `anonymous-booking-reference.md`
  - `client-issues-booking-reference.md`
  - `hardening-and-regressions.md`
- Must cover:
  - schedule -> class detail -> card selection -> confirm booking
  - unbooking
  - anonymous attendance option
  - card eligibility and lesson guard limits
- Must clarify:
  - canceled/processed lesson detail may remain readable even when booking action is blocked

#### `help_v3.member.attendance_records`
- Route: `/help-v3/member/attendance-records`
- Must cover:
  - review attendance history
  - confirm whether a class was recorded

#### `help_v3.member.system_alerts`
- Route: `/help-v3/member/system-alerts`
- Source docs:
  - `push-notification-routing.md`
- Must cover:
  - account/academy alerts
  - read state
  - alerts are not chat
  - unsupported push tap routes may land here safely

#### `help_v3.member.broadcasts`
- Route: `/help-v3/member/broadcasts`
- Source docs:
  - `broadcast-authoring-reference.md`
- Must cover:
  - read-only feed
  - `Updates` vs `Training`
  - academy-selected scope
  - image viewing
- Must not imply:
  - member posting
  - comments/replies/likes

#### `help_v3.member.online_learning`
- Route: `/help-v3/member/online-learning`
- Source docs:
  - `online-subsystem-runtime.md`
- Must cover:
  - dashboard tile gating
  - curriculum -> catalog -> lesson -> video -> homework
  - member-consumer-only shape

#### `help_v3.member.events`
- Route: `/help-v3/member/events`
- Must cover:
  - event browsing
  - event profile
  - registration management
  - external-provider handoff

### Admin Hub

#### `help_v3.admin.home`
- Route: `/help-v3/admin`
- Goal:
  - explain the admin dashboard as academy-scoped staff work
  - distinguish it from owner-only `Business` and `Operations`

#### `help_v3.admin.academy_context`
- Route: `/help-v3/admin/academy-context`
- Source docs:
  - `business-admin-role-model.md`
  - `admin-onboarding-reference.md`
- Must cover:
  - selected academy matters
  - admin vs owner context
  - shared academy switcher behavior

#### `help_v3.admin.members`
- Route: `/help-v3/admin/members`
- Must cover:
  - pending / accepted / rejected / banned
  - member review
  - role split between member, instructor, and admin

#### `help_v3.admin.cards`
- Route: `/help-v3/admin/cards`
- Must cover:
  - template creation
  - assigning active cards
  - active card review
  - pause/unpause where exposed

#### `help_v3.admin.session_debt`
- Route: `/help-v3/admin/session-debt`
- Must cover:
  - debt review and settlement
  - this is separate from disputes

#### `help_v3.admin.lessons`
- Route: `/help-v3/admin/lessons`
- Must cover:
  - lesson templates
  - edit/delete template responsibilities

#### `help_v3.admin.schedule`
- Route: `/help-v3/admin/schedule`
- Must cover:
  - publish/edit/cancel/delete scheduled lessons
  - canceled lessons remain reviewable

#### `help_v3.admin.admin_booking`
- Route: `/help-v3/admin/admin-booking`
- Source docs:
  - `client-issues-booking-reference.md`
  - `hardening-and-regressions.md`
- Must cover:
  - book/unbook for a member
  - card selection rules
  - admin cannot create anonymous bookings

#### `help_v3.admin.broadcasts`
- Route: `/help-v3/admin/broadcasts`
- Source docs:
  - `broadcast-authoring-reference.md`
- Must cover:
  - authoring inside `Members`
  - text + image or text + one MP4
  - immediate publish
  - selected-academy scope

#### `help_v3.admin.alerts_qr`
- Route: `/help-v3/admin/alerts-qr`
- Must cover:
  - admin alerts
  - QR tools
  - recovery/switcher style actions when relevant

### Owner / Operations Hub

#### `help_v3.owner.home`
- Route: `/help-v3/owner`
- Goal:
  - orient owner users to academy creation, onboarding, business management, access, operations, and tools

#### `help_v3.owner.create_academy`
- Route: `/help-v3/owner/create-academy`
- Source docs:
  - `admin-onboarding-reference.md`
- Must cover:
  - first-academy creation
  - additional-academy creation when allowed
  - cancel creation when entered from admin bootstrap

#### `help_v3.owner.onboarding`
- Route: `/help-v3/owner/onboarding`
- Must cover:
  - milestone-driven tutorial flow
  - instructor -> card template -> active card -> scheduled lesson -> first admin booking
  - onboarding is not proof that billing/payments are configured

#### `help_v3.owner.business_management`
- Route: `/help-v3/owner/business-management`
- Must cover:
  - edit academy
  - delete academy
  - logo/banner/gallery/training media

#### `help_v3.owner.instructors`
- Route: `/help-v3/owner/instructors`
- Source docs:
  - `business-admin-role-model.md`
- Must cover:
  - instructors are teaching identity
  - not the same as permissions/admin access

#### `help_v3.owner.access`
- Route: `/help-v3/owner/access`
- Must cover:
  - academy admin access management
  - compact button label may say `Access`
  - one academy permission removal does not necessarily remove broader admin role

#### `help_v3.owner.operations_analytics`
- Route: `/help-v3/owner/operations-analytics`
- Must cover:
  - realtime stats
  - insights
  - trends
  - monthly reporting
- Must clarify:
  - this is owner / operations territory, not ordinary admin

#### `help_v3.owner.timesheets_salaries`
- Route: `/help-v3/owner/timesheets-salaries`
- Must cover:
  - timesheets
  - clock-in/out
  - salaries / compensation

#### `help_v3.owner.oversight`
- Route: `/help-v3/owner/oversight`
- Must cover:
  - issue records
  - delete records
  - audit logs
- Must clarify:
  - these are owner-only oversight surfaces
  - not part of general admin cards help

#### `help_v3.owner.tools`
- Route: `/help-v3/owner/tools`
- Must cover:
  - tool purpose and gated workflows
  - operational meaning of unlock/access
- Must avoid:
  - stale purchase mechanics
  - obsolete bundle claims

### Account / Settings Hub

#### `help_v3.account.sign_in`
- Route: `/help-v3/account/sign-in`
- Source docs:
  - `hardening-and-regressions.md`
- Must cover:
  - sign in
  - session start
  - wrong-credential vs account-integrity style support outcomes at a high level

#### `help_v3.account.create_account`
- Route: `/help-v3/account/create-account`
- Must cover:
  - create account
  - choose member vs admin journey correctly

#### `help_v3.account.reset_password`
- Route: `/help-v3/account/reset-password`
- Must cover:
  - request reset email
  - retry / inbox troubleshooting

#### `help_v3.account.change_password`
- Route: `/help-v3/account/change-password`
- Must cover:
  - current password required
  - other sessions may be revoked
  - current device may stay signed in

#### `help_v3.account.profile`
- Route: `/help-v3/account/profile`
- Must cover:
  - view/edit adult profile

#### `help_v3.account.child_accounts`
- Route: `/help-v3/account/child-accounts`
- Must cover:
  - create/edit/delete child accounts
  - child account relationships affect academy membership flows

#### `help_v3.account.privacy_progression`
- Route: `/help-v3/account/privacy-progression`
- Must cover:
  - privacy settings
  - progression/ranking visibility
- Must clarify:
  - anonymous attendance booking is not part of privacy settings

#### `help_v3.account.preferences`
- Route: `/help-v3/account/preferences`
- Must cover:
  - language
  - currency
  - theme

#### `help_v3.account.delete_account`
- Route: `/help-v3/account/delete-account`
- Must cover:
  - deleting the account is not the same as leaving one academy

#### `help_v3.account.logout`
- Route: `/help-v3/account/logout`
- Must cover:
  - local sign-out / session end

## AppRelay Extraction Mapping

Recommended future artifact naming:

- `member_join_academy_help` -> `help_v3.member.join_academy.*`
- `member_memberships_help` -> `help_v3.member.memberships.*`
- `member_cards_help` -> `help_v3.member.cards.*`
- `member_card_disputes_help` -> `help_v3.member.card_disputes.*`
- `member_booking_help` -> `help_v3.member.booking.*`
- `member_attendance_help` -> `help_v3.member.attendance_records.*`
- `member_system_alerts_help` -> `help_v3.member.system_alerts.*`
- `member_broadcasts_help` -> `help_v3.member.broadcasts.*`
- `member_online_learning_help` -> `help_v3.member.online_learning.*`
- `member_events_help` -> `help_v3.member.events.*`
- `admin_members_help` -> `help_v3.admin.members.*`
- `admin_cards_help` -> `help_v3.admin.cards.*`
- `admin_booking_help` -> `help_v3.admin.admin_booking.*`
- `admin_broadcasts_help` -> `help_v3.admin.broadcasts.*`
- `owner_onboarding_help` -> `help_v3.owner.onboarding.*`
- `owner_access_help` -> `help_v3.owner.access.*`
- `owner_operations_help` -> `help_v3.owner.operations_analytics.*`
- `account_sign_in_help` -> `help_v3.account.sign_in.*`

## Implementation Order

Recommended order:

1. create `help_v3` locale skeleton in English only
2. add `search.js` manifest for v3
3. add route shell and role hubs
4. implement member topics first
5. implement admin topics second
6. implement owner / operations topics third
7. implement account/settings topics last
8. run locale/search sanity checks before adding other locales

## Validation Rules

Before calling v3 ready for ingestion:

- every route in the search manifest exists
- every `titleKey` exists in all shipped locales
- no duplicate top-level `member`, `admin`, `owner`, or `account` blocks
- no obsolete route names remain in v3 pages
- no page copy depends on raw API endpoint wording
- booking pages reflect:
  - `POST /api/v1/scheduled_lessons/:id/bookings`
  - `DELETE /api/v1/scheduled_lessons/:id/bookings`
- auth/session pages reflect:
  - `POST /api/v1/tokens/refresh` only
- broadcast authoring pages reflect:
  - `/api/v1/academy_lists/:id/broadcast_uploads`
  - `/api/v1/academy_lists/:id/broadcasts`
  - but user-facing copy should describe publish flow, not endpoint mechanics

## Notes

- v3 should retire the mixed mental model of app help plus portal help as one flat tree.
- Where AFL / Source Combatives pages are part of the user-visible workflow, v3 can reference them explicitly, but the DojoMate repo should still own only DojoMate help source copy.
- The best long-term shape is one canonical topic per workflow, with cross-links instead of duplicate explanations.
