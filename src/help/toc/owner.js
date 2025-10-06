// src/help/toc/owner.js
// Owner-only: Business (academy setup & lifecycle)

export const ownerSections = [
  {
    id: 'business',
    sectionKey: 'help.sections.business',
    items: [
      {
        path: '/help/business/create-academy',
        labelKey: 'help.toc.business.create_academy',
        titleKey: 'help.business.create_academy.title',
        bodyKeys: [
          'help.business.create_academy.intro',
          'help.business.create_academy.duplicates',
          'help.business.create_academy.currency',
          'help.business.create_academy.action'
        ]
      },
      {
        path: '/help/business/academy-basics',
        labelKey: 'help.toc.business.academy_basics',
        titleKey: 'help.business.academy_basics.title',
        bodyKeys: [
          'help.business.academy_basics.edit',
          'help.business.academy_basics.messages'
        ]
      },
      {
        path: '/help/business/academy-qr',
        labelKey: 'help.toc.business.academy_qr',
        titleKey: 'help.business.academy_qr.title',
        bodyKeys: [
          'help.business.academy_qr.intro',
          'help.business.academy_qr.multiple'
        ]
      },
      {
        path: '/help/business/delete-academy',
        labelKey: 'help.toc.business.delete_academy',
        titleKey: 'help.business.delete_academy.title',
        bodyKeys: [
          'help.business.delete_academy.preconditions',
          'help.business.delete_academy.members',
          'help.business.delete_academy.success'
        ]
      },
      {
        path: '/help/business/add-instructor',
        labelKey: 'help.toc.business.add_instructor',
        titleKey: 'help.business.add_instructor.title',
        bodyKeys: [
          'help.business.add_instructor.intro',
          'help.business.add_instructor.requirements',
          'help.business.add_instructor.owner_tip'
        ]
      },
    ]
  }
]