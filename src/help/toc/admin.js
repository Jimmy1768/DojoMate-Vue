// src/help/toc/admin.js
// Cards (Admin) — canonical

export const adminSections = [
  {
    id: 'cards',
    sectionKey: 'help.sections.cards',
    items: [
      {
        path: '/help/cards/create-template',
        labelKey: 'help.toc.cards.create_template',
        titleKey: 'help.cards.create_template.title',
        bodyKeys: [
          'help.cards.create_template.intro',
          'help.cards.create_template.fields_name',
          'help.cards.create_template.fields_fee',
          'help.cards.create_template.fields_desc',
          'help.cards.create_template.fields_sessions',
          'help.cards.create_template.fields_expire_days',
          'help.cards.create_template.fields_type'
        ]
      },
      {
        path: '/help/cards/edit-templates',
        labelKey: 'help.toc.cards.edit_templates',
        titleKey: 'help.cards.edit_templates.title',
        bodyKeys: [
          'help.cards.edit_templates.intro',
          'help.cards.edit_templates.name_locked',
          'help.cards.edit_templates.save',
          'help.cards.edit_templates.effects_note'
        ]
      },
      {
        path: '/help/cards/delete-templates',
        labelKey: 'help.toc.cards.delete_templates',
        titleKey: 'help.cards.delete_templates.title',
        bodyKeys: [
          'help.cards.delete_templates.intro',
          'help.cards.delete_templates.cannot_delete_active'
        ]
      },
      {
        path: '/help/cards/issue-cards',
        labelKey: 'help.toc.cards.issue_cards',
        titleKey: 'help.cards.issue_cards.title',
        bodyKeys: [
          'help.cards.issue_cards.intro',
          'help.cards.issue_cards.choose_template',
          'help.cards.issue_cards.select_members',
          'help.cards.issue_cards.already_issued_note',
          'help.cards.issue_cards.cannot_revoke_here'
        ]
      },
      {
        path: '/help/cards/manage-cards',
        labelKey: 'help.toc.cards.manage_cards',
        titleKey: 'help.cards.manage_cards.title',
        bodyKeys: [
          'help.cards.manage_cards.intro_paths',
          'help.cards.manage_cards.actions',
          'help.cards.manage_cards.input_rules',
          'help.cards.manage_cards.expiry_rule_note'
        ]
      },
      {
        path: '/help/cards/delete-cards',
        labelKey: 'help.toc.cards.delete_cards',
        titleKey: 'help.cards.delete_cards.title',
        bodyKeys: [
          'help.cards.delete_cards.intro_paths',
          'help.cards.delete_cards.expired_default',
          'help.cards.delete_cards.no_duplicate_active',
          'help.cards.delete_cards.cancel_option',
          'help.cards.delete_cards.cancel_reason_required',
          'help.cards.delete_cards.records_visibility'
        ]
      },
      {
        path: '/help/cards/records',
        labelKey: 'help.toc.cards.card_records',
        titleKey: 'help.cards.card_records.title',
        bodyKeys: [
          'help.cards.card_records.intro',
          'help.cards.card_records.empty_state',
          'help.cards.card_records.items_current',
          'help.cards.card_records.items_issued',
          'help.cards.card_records.items_canceled',
          'help.cards.card_records.items_debt',
          'help.cards.card_records.debt_policy',
          'help.cards.card_records.settlement_edge',
          'help.cards.card_records.manual_resolve',
          'help.cards.card_records.cleared_visibility'
        ]
      }
    ]
  },
  {
    id: 'members',
    sectionKey: 'help.sections.members',
    items: [
      {
        path: '/help/members/enrollment',
        labelKey: 'help.toc.members.enrollment',
        titleKey: 'help.members.enrollment.title',
        bodyKeys: [
          'help.members.enrollment.intro',
          'help.members.enrollment.portal_link',
          'help.members.enrollment.portal_instructions',
          'help.members.enrollment.temp_password',
          'help.members.enrollment.roles_children',
          'help.members.enrollment.confirm',
          'help.members.enrollment.view_members',
          'help.members.enrollment.issue_cards',
          'help.members.enrollment.existing_account'
        ]
      },
      {
        path: '/help/members/applications',
        labelKey: 'help.toc.members.applications',
        titleKey: 'help.members.applications.title',
        bodyKeys: [
          'help.members.applications.intro',
          'help.members.applications.instructions',
          'help.members.applications.no_pending',
          'help.members.applications.accept_reject',
          'help.members.applications.child_accounts',
          'help.members.applications.refresh'
        ]
      },
      {
        path: '/help/members/rejection',
        labelKey: 'help.toc.members.rejection',
        titleKey: 'help.members.rejection.title',
        bodyKeys: [
          'help.members.rejection.intro',
          'help.members.rejection.reject',
          'help.members.rejection.rejected_list',
          'help.members.rejection.ban',
          'help.members.rejection.unban'
        ]
      },
      {
        path: '/help/members/records',
        labelKey: 'help.toc.members.records',
        titleKey: 'help.members.records.title',
        bodyKeys: [
          'help.members.records.intro',
          'help.members.records.instructions',
          'help.members.records.date_range',
          'help.members.records.clear_field',
          'help.members.records.member_search',
          'help.members.records.view_records'
        ]
      }
    ]
  }
  ,
  {
    id: 'schedule',
    sectionKey: 'help.sections.schedule',
    items: [
      {
        path: '/help/schedule/create-lesson',
        labelKey: 'help.toc.schedule.create',
        titleKey: 'help.schedule.create.title',
        bodyKeys: [
          'help.schedule.create.intro',
          'help.schedule.create.lesson_name',
          'help.schedule.create.lesson_type',
          'help.schedule.create.lesson_type_note',
          'help.schedule.create.date',
          'help.schedule.create.time',
          'help.schedule.create.classroom',
          'help.schedule.create.max_capacity',
          'help.schedule.create.min_capacity',
          'help.schedule.create.cutoff',
          'help.schedule.create.content',
          'help.schedule.create.sessions_deduct',
          'help.schedule.create.usable_cards',
          'help.schedule.create.instructors',
          'help.schedule.create.assistants',
          'help.schedule.create.action'
        ]
      },
      {
        path: '/help/schedule/manage-lesson',
        labelKey: 'help.toc.schedule.manage',
        titleKey: 'help.schedule.manage.title',
        bodyKeys: [
          'help.schedule.manage.intro',
          'help.schedule.manage.edit',
          'help.schedule.manage.cancel',
          'help.schedule.manage.delete',
          'help.schedule.manage.cutoff_rule',
          'help.schedule.manage.started_rule'
        ]
      },
      {
        path: '/help/schedule/book-for-students',
        labelKey: 'help.toc.schedule.book_for_students',
        titleKey: 'help.schedule.book.title',
        bodyKeys: [
          'help.schedule.book.intro',
          'help.schedule.book.open',
          'help.schedule.book.select_member',
          'help.schedule.book.choose_card',
          'help.schedule.book.unbook',
          'help.schedule.book.finished_rule'
        ]
      }
    ]
  }
]