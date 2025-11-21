// src/help/toc/member.js
// Member-facing sections (Account, Profile, Academy, Settings)

export const memberSections = [
  {
    id: 'account',
    sectionKey: 'help.sections.account',
    items: [
      { path: '/help/account/sign-in', labelKey: 'help.toc.account.sign_in', titleKey: 'help.account.sign_in.title', bodyKeys: ['help.account.sign_in.intro'] },
      { path: '/help/account/create-account', labelKey: 'help.toc.account.create_account', titleKey: 'help.account.create.title', bodyKeys: ['help.account.create.intro'] },
      { path: '/help/account/reset-password', labelKey: 'help.toc.account.reset_password', titleKey: 'help.account.reset.title', bodyKeys: ['help.account.reset.intro'] },
      { path: '/help/account/troubleshooting', labelKey: 'help.toc.account.troubleshooting', titleKey: 'help.account.troubleshooting.title', bodyKeys: ['help.account.troubleshooting.cannot_sign_in'] },
      // Also surface Delete Account here for findability (canonical page under Settings)
      { path: '/help/settings/delete-account', labelKey: 'help.toc.settings.delete_account', titleKey: 'help.settings.delete_account.title', bodyKeys: ['help.settings.delete_account.intro'] }
    ]
  },

  {
    id: 'profile',
    sectionKey: 'help.sections.profile',
    items: [
      { path: '/help/profile/edit-profile',   labelKey: 'help.toc.profile.edit_profile',   titleKey: 'help.profile.edit_profile.title',   bodyKeys: ['help.profile.edit_profile.intro', 'help.profile.edit_profile.admin_role', 'help.profile.edit_profile.submit'] },
      { path: '/help/profile/child-accounts', labelKey: 'help.toc.profile.child_accounts', titleKey: 'help.profile.child_accounts.title', bodyKeys: ['help.profile.child_accounts.intro', 'help.profile.child_accounts.parent_role', 'help.profile.child_accounts.create', 'help.profile.child_accounts.edit', 'help.profile.child_accounts.delete'] }
    ]
  },

  {
    id: 'academy',
    sectionKey: 'help.sections.academy',
    items: [
      { path: '/help/academy/join-academy', labelKey: 'help.toc.academy.join',         titleKey: 'help.academy.join.title',         bodyKeys: ['help.academy.join.intro', 'help.academy.join.qr', 'help.academy.join.search', 'help.academy.join.verify', 'help.academy.join.apply', 'help.academy.join.children'] },
      { path: '/help/academy/memberships',  labelKey: 'help.toc.academy.memberships',  titleKey: 'help.academy.memberships.title',  bodyKeys: ['help.academy.memberships.intro', 'help.academy.memberships.multi', 'help.academy.memberships.select'] },
      { path: '/help/academy/booking',      labelKey: 'help.toc.academy.booking',      titleKey: 'help.academy.booking.title',      bodyKeys: ['help.academy.booking.intro', 'help.academy.booking.schedule', 'help.academy.booking.book', 'help.academy.booking.confirm', 'help.academy.booking.eligibility', 'help.academy.booking.select_card', 'help.academy.booking.unbook'] },
      { path: '/help/academy/messages',     labelKey: 'help.toc.academy.messages',     titleKey: 'help.academy.messages.title',     bodyKeys: ['help.academy.messages.intro', 'help.academy.messages.examples'] },
      { path: '/help/academy/records',      labelKey: 'help.toc.academy.records',      titleKey: 'help.academy.records.title',      bodyKeys: ['help.academy.records.intro', 'help.academy.records.range', 'help.academy.records.quick'] }
    ]
  },

  {
    id: 'settings',
    sectionKey: 'help.sections.settings',
    items: [
      { path: '/help/settings/change-password',   labelKey: 'help.toc.settings.change_password',   titleKey: 'help.settings.change_password.title',   bodyKeys: ['help.settings.change_password.intro', 'help.settings.change_password.note'] },
      { path: '/help/settings/language',          labelKey: 'help.toc.settings.language',          titleKey: 'help.settings.language.title',          bodyKeys: ['help.settings.language.intro'] },
      { path: '/help/settings/currency',          labelKey: 'help.toc.settings.currency',          titleKey: 'help.settings.currency.title',          bodyKeys: ['help.settings.currency.intro', 'help.settings.currency.members', 'help.settings.currency.owners'] },
      { path: '/help/settings/privacy-settings',  labelKey: 'help.toc.settings.privacy',           titleKey: 'help.settings.privacy.title',           bodyKeys: ['help.settings.privacy.intro', 'help.settings.privacy.notifications', 'help.settings.privacy.marketing', 'help.settings.privacy.booking', 'help.settings.privacy.analytics_attendance', 'help.settings.privacy.analytics_aggregate'] },
      { path: '/help/settings/delete-account',    labelKey: 'help.toc.settings.delete_account',     titleKey: 'help.settings.delete_account.title',    bodyKeys: ['help.settings.delete_account.intro', 'help.settings.delete_account.validations', 'help.settings.delete_account.failures', 'help.settings.delete_account.children', 'help.settings.delete_account.child_cards'] },
      { path: '/help/settings/logout',            labelKey: 'help.toc.settings.logout',             titleKey: 'help.settings.logout.title',            bodyKeys: ['help.settings.logout.intro'] }
    ]
  }
]
