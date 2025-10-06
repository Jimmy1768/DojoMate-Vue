// src/help/toc/tools.js
// Paid Tools — shared by Owner/Admin; page content should note role differences.

export const toolsSections = [
  {
    id: 'tools',
    sectionKey: 'help.sections.tools',
    items: [
      {
        path: '/help/tools/prologue',
        labelKey: 'help.toc.tools.prologue',
        titleKey: 'help.tools.prologue.title',
        bodyKeys: [
          'help.tools.prologue.intro',
          'help.tools.prologue.available',
          'help.tools.prologue.pricing'
        ]
      },
      {
        path: '/help/tools/timetable',
        labelKey: 'help.toc.tools.timetable',
        titleKey: 'help.tools.timetable.title',
        bodyKeys: ['help.tools.timetable.intro']
      },
      {
        path: '/help/tools/pause-cards',
        labelKey: 'help.toc.tools.pause_cards',
        titleKey: 'help.tools.pause_cards.title',
        bodyKeys: ['help.tools.pause_cards.intro']
      },
      {
        path: '/help/tools/staff-permissions',
        labelKey: 'help.toc.tools.staff_permissions',
        titleKey: 'help.tools.staff_permissions.title',
        bodyKeys: ['help.tools.staff_permissions.intro']
      },
      // Analytics split into 3 pages:
      {
        path: '/help/tools/analytics-overview',
        labelKey: 'help.toc.tools.analytics_overview',
        titleKey: 'help.tools.analytics.overview.title',
        bodyKeys: ['help.tools.analytics.overview.intro']
        },
        {
        path: '/help/tools/analytics-wages',
        labelKey: 'help.toc.tools.analytics_wages',
        titleKey: 'help.tools.analytics.wages.title',
        bodyKeys: ['help.tools.analytics.wages.intro']
        },
        {
        path: '/help/tools/analytics-punch-cards',
        labelKey: 'help.toc.tools.analytics_reports',
        titleKey: 'help.tools.analytics.punch_cards.title',
        bodyKeys: ['help.tools.analytics.punch_cards.intro']
        }
    ]
  }
]