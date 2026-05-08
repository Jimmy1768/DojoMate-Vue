export const v3RoleHubs = [
  { path: 'member', icon: 'members', baseKey: 'help_v3.member.home' },
  { path: 'admin', icon: 'access', baseKey: 'help_v3.admin.home' },
  { path: 'owner', icon: 'business', baseKey: 'help_v3.owner.home' },
  { path: 'account', icon: 'members', baseKey: 'help_v3.account.home' }
]

export const v3TopicRoutes = [
  { path: 'member/join-academy', icon: 'members', baseKey: 'help_v3.member.join_academy' },
  { path: 'member/memberships', icon: 'members', baseKey: 'help_v3.member.memberships' },
  { path: 'member/cards', icon: 'cards', baseKey: 'help_v3.member.cards' },
  { path: 'member/card-disputes', icon: 'cards', baseKey: 'help_v3.member.card_disputes' },
  { path: 'member/booking', icon: 'schedule', baseKey: 'help_v3.member.booking' },
  { path: 'member/attendance-records', icon: 'members', baseKey: 'help_v3.member.attendance_records' },
  { path: 'member/system-alerts', icon: 'members', baseKey: 'help_v3.member.system_alerts' },
  { path: 'member/broadcasts', icon: 'broadcast', baseKey: 'help_v3.member.broadcasts' },
  { path: 'member/online-learning', icon: 'tools', baseKey: 'help_v3.member.online_learning' },
  { path: 'member/events', icon: 'schedule', baseKey: 'help_v3.member.events' },
  { path: 'admin/academy-context', icon: 'access', baseKey: 'help_v3.admin.academy_context' },
  { path: 'admin/members', icon: 'members', baseKey: 'help_v3.admin.members' },
  { path: 'admin/cards', icon: 'cards', baseKey: 'help_v3.admin.cards' },
  { path: 'admin/session-debt', icon: 'cards', baseKey: 'help_v3.admin.session_debt' },
  { path: 'admin/lessons', icon: 'schedule', baseKey: 'help_v3.admin.lessons' },
  { path: 'admin/schedule', icon: 'schedule', baseKey: 'help_v3.admin.schedule' },
  { path: 'admin/admin-booking', icon: 'schedule', baseKey: 'help_v3.admin.admin_booking' },
  { path: 'admin/broadcasts', icon: 'broadcast', baseKey: 'help_v3.admin.broadcasts' },
  { path: 'admin/alerts-qr', icon: 'members', baseKey: 'help_v3.admin.alerts_qr' },
  { path: 'owner/create-academy', icon: 'business', baseKey: 'help_v3.owner.create_academy' },
  { path: 'owner/onboarding', icon: 'getting-started', baseKey: 'help_v3.owner.onboarding' },
  { path: 'owner/business-management', icon: 'business', baseKey: 'help_v3.owner.business_management' },
  { path: 'owner/instructors', icon: 'instructors', baseKey: 'help_v3.owner.instructors' },
  { path: 'owner/access', icon: 'access', baseKey: 'help_v3.owner.access' },
  { path: 'owner/operations-analytics', icon: 'analytics', baseKey: 'help_v3.owner.operations_analytics' },
  { path: 'owner/timesheets-salaries', icon: 'analytics', baseKey: 'help_v3.owner.timesheets_salaries' },
  { path: 'owner/oversight', icon: 'cards', baseKey: 'help_v3.owner.oversight' },
  { path: 'owner/tools', icon: 'tools', baseKey: 'help_v3.owner.tools' },
  { path: 'account/sign-in', icon: 'members', baseKey: 'help_v3.account.sign_in' },
  { path: 'account/create-account', icon: 'members', baseKey: 'help_v3.account.create_account' },
  { path: 'account/reset-password', icon: 'members', baseKey: 'help_v3.account.reset_password' },
  { path: 'account/change-password', icon: 'members', baseKey: 'help_v3.account.change_password' },
  { path: 'account/profile', icon: 'members', baseKey: 'help_v3.account.profile' },
  { path: 'account/child-accounts', icon: 'members', baseKey: 'help_v3.account.child_accounts' },
  { path: 'account/privacy-progression', icon: 'members', baseKey: 'help_v3.account.privacy_progression' },
  { path: 'account/preferences', icon: 'members', baseKey: 'help_v3.account.preferences' },
  { path: 'account/delete-account', icon: 'members', baseKey: 'help_v3.account.delete_account' },
  { path: 'account/logout', icon: 'members', baseKey: 'help_v3.account.logout' }
]

export const v3AllPaths = [
  '/help-v3',
  ...v3RoleHubs.map((route) => `/help-v3/${route.path}`),
  ...v3TopicRoutes.map((route) => `/help-v3/${route.path}`)
]
