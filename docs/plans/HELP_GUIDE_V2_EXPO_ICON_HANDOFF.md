# Help Guide v2 Expo Icon Handoff

## Purpose

Use this note as the visual reference for `Help Guide v2`.

The wiki should match the current Expo icon language instead of inventing a separate website-specific icon system.

## Current Expo icon references

The app mainly uses `@expo/vector-icons`, especially:

- `MaterialCommunityIcons`
- `FontAwesome`
- `FontAwesome6`

## Recommended icons to keep

- Business: `gear`
- Instructors: `account-tie`
- Permissions: `people-group`
- Analytics: `home-analytics`
- Cards: `id-card-o` at dashboard level, then card-specific icons inside the Cards area
- Members: `user-circle` at dashboard level, `users` inside the Members area
- Schedule: `calendar`
- System Alerts / notifications: `message-alert`
- Timetable: `timetable`

## Current source references

- Business dashboard entry: `FontAwesome gear`
  Source: `AdminDashboard.js`
- Instructors: `MaterialCommunityIcons account-tie`
  Source: `BusinessMenu.js`
- Permissions / admin access: `FontAwesome6 people-group`
  Source: `BusinessMenu.js`
- Analytics: `MaterialCommunityIcons home-analytics`
  Source: `BusinessMenu.js`
- Cards dashboard entry: `FontAwesome id-card-o`
  Source: `AdminDashboard.js`
- Members dashboard entry: `FontAwesome user-circle`
  Source: `AdminDashboard.js`
- Members main area: `FontAwesome users`
  Source: `MembersMenu.js`
- Schedule: `FontAwesome calendar`
  Source: `AdminDashboard.js`
- Notifications / system alerts: `MaterialCommunityIcons message-alert`
  Sources: `BusinessMenu.js`, `AcademyMenu.js`
- Timetable dashboard entry: `MaterialCommunityIcons timetable`
  Source: `AdminDashboard.js`

## Cards submenu references

Use these if `v2` adds card-specific visual navigation:

- active cards: `card-search`
- assign cards: `card-account-details`
- templates: `card-multiple`
- create: `card-plus`
- delete: `card-remove`
- records: `card-off`

Source: `CardsMenu.js`

## Important workflow note

There is no separate `Messages` surface in Expo right now.

The app currently uses `System Alerts` with the `message-alert` icon rather than a distinct messages screen.

If the website still reflects an older standalone `Messages` concept, `v2` should refactor that toward `System Alerts`.

## Best screenshots to capture

- Admin dashboard
- Business menu
- Members menu
- Cards menu
- Member academy menu, if `v2` also covers member-side navigation

## Visual patterns to reuse from Expo

- large icon-first menu buttons
- simple black icons
- single-icon + single-label tiles
- consistent reuse of the same icon for the same concept across surfaces

Avoid:

- decorative icons that do not exist in the app
- mixed icon styles across one page
- replacing known app concepts with arbitrary new symbols

## Biggest workflow alignment points

- Instructors, Permissions, and Analytics are separate Business surfaces
- System Alerts should be shown as alerts/notifications, not as a chat/messages tool
- Timetable wording should stay aligned with the app, even if some backend keys still say lessons

## How to use this in v2

When building `v2` pages:

- reuse Expo icon choices for the same concepts
- prefer app-faithful screenshots over invented illustrations
- keep visual terminology aligned with current app labels
- treat this note as a parity reference, not a final design system
