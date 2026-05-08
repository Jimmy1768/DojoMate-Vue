<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import V2Icon from './V2Icon.vue'
import { getV3SearchIndex } from '../help-v3/search'

const { t } = useI18n()
const query = ref('')
const index = computed(() => getV3SearchIndex(t))
const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  const seen = new Set()
  return index.value
    .filter((item) => item.text.includes(q))
    .filter((item) => {
      if (seen.has(item.path)) return false
      seen.add(item.path)
      return true
    })
    .slice(0, 20)
})

const navGroups = [
  {
    titleKey: 'help_v3.layout.nav.start_here',
    items: [
      { to: '/help-v3', labelKey: 'help_v3.layout.nav.home', icon: 'home' },
      { to: '/help-v3/member', labelKey: 'help_v3.layout.nav.member_home', icon: 'members' },
      { to: '/help-v3/admin', labelKey: 'help_v3.layout.nav.admin_home', icon: 'access' },
      { to: '/help-v3/owner', labelKey: 'help_v3.layout.nav.owner_home', icon: 'business' },
      { to: '/help-v3/account', labelKey: 'help_v3.layout.nav.account_home', icon: 'members' }
    ]
  },
  {
    titleKey: 'help_v3.layout.nav.member',
    items: [
      { to: '/help-v3/member/join-academy', labelKey: 'help_v3.layout.nav.join_academy', icon: 'members' },
      { to: '/help-v3/member/memberships', labelKey: 'help_v3.layout.nav.memberships', icon: 'members' },
      { to: '/help-v3/member/cards', labelKey: 'help_v3.layout.nav.member_cards', icon: 'cards' },
      { to: '/help-v3/member/card-disputes', labelKey: 'help_v3.layout.nav.card_disputes', icon: 'cards' },
      { to: '/help-v3/member/booking', labelKey: 'help_v3.layout.nav.booking', icon: 'schedule' },
      { to: '/help-v3/member/attendance-records', labelKey: 'help_v3.layout.nav.attendance_records', icon: 'members' },
      { to: '/help-v3/member/system-alerts', labelKey: 'help_v3.layout.nav.system_alerts', icon: 'members' },
      { to: '/help-v3/member/broadcasts', labelKey: 'help_v3.layout.nav.broadcasts', icon: 'broadcast' },
      { to: '/help-v3/member/online-learning', labelKey: 'help_v3.layout.nav.online_learning', icon: 'tools' },
      { to: '/help-v3/member/events', labelKey: 'help_v3.layout.nav.events', icon: 'schedule' }
    ]
  },
  {
    titleKey: 'help_v3.layout.nav.admin',
    items: [
      { to: '/help-v3/admin/academy-context', labelKey: 'help_v3.layout.nav.academy_context', icon: 'access' },
      { to: '/help-v3/admin/members', labelKey: 'help_v3.layout.nav.admin_members', icon: 'members' },
      { to: '/help-v3/admin/cards', labelKey: 'help_v3.layout.nav.admin_cards', icon: 'cards' },
      { to: '/help-v3/admin/session-debt', labelKey: 'help_v3.layout.nav.session_debt', icon: 'cards' },
      { to: '/help-v3/admin/lessons', labelKey: 'help_v3.layout.nav.lessons', icon: 'schedule' },
      { to: '/help-v3/admin/schedule', labelKey: 'help_v3.layout.nav.schedule', icon: 'schedule' },
      { to: '/help-v3/admin/admin-booking', labelKey: 'help_v3.layout.nav.admin_booking', icon: 'schedule' },
      { to: '/help-v3/admin/broadcasts', labelKey: 'help_v3.layout.nav.admin_broadcasts', icon: 'broadcast' },
      { to: '/help-v3/admin/alerts-qr', labelKey: 'help_v3.layout.nav.alerts_qr', icon: 'members' }
    ]
  },
  {
    titleKey: 'help_v3.layout.nav.owner',
    items: [
      { to: '/help-v3/owner/create-academy', labelKey: 'help_v3.layout.nav.create_academy', icon: 'business' },
      { to: '/help-v3/owner/onboarding', labelKey: 'help_v3.layout.nav.onboarding', icon: 'getting-started' },
      { to: '/help-v3/owner/business-management', labelKey: 'help_v3.layout.nav.business_management', icon: 'business' },
      { to: '/help-v3/owner/instructors', labelKey: 'help_v3.layout.nav.instructors', icon: 'instructors' },
      { to: '/help-v3/owner/access', labelKey: 'help_v3.layout.nav.access', icon: 'access' },
      { to: '/help-v3/owner/operations-analytics', labelKey: 'help_v3.layout.nav.operations_analytics', icon: 'analytics' },
      { to: '/help-v3/owner/timesheets-salaries', labelKey: 'help_v3.layout.nav.timesheets_salaries', icon: 'analytics' },
      { to: '/help-v3/owner/oversight', labelKey: 'help_v3.layout.nav.oversight', icon: 'cards' },
      { to: '/help-v3/owner/tools', labelKey: 'help_v3.layout.nav.owner_tools', icon: 'tools' }
    ]
  },
  {
    titleKey: 'help_v3.layout.nav.account',
    items: [
      { to: '/help-v3/account/sign-in', labelKey: 'help_v3.layout.nav.sign_in', icon: 'members' },
      { to: '/help-v3/account/create-account', labelKey: 'help_v3.layout.nav.create_account', icon: 'members' },
      { to: '/help-v3/account/reset-password', labelKey: 'help_v3.layout.nav.reset_password', icon: 'members' },
      { to: '/help-v3/account/change-password', labelKey: 'help_v3.layout.nav.change_password', icon: 'members' },
      { to: '/help-v3/account/profile', labelKey: 'help_v3.layout.nav.profile', icon: 'members' },
      { to: '/help-v3/account/child-accounts', labelKey: 'help_v3.layout.nav.child_accounts', icon: 'members' },
      { to: '/help-v3/account/privacy-progression', labelKey: 'help_v3.layout.nav.privacy_progression', icon: 'members' },
      { to: '/help-v3/account/preferences', labelKey: 'help_v3.layout.nav.preferences', icon: 'members' },
      { to: '/help-v3/account/delete-account', labelKey: 'help_v3.layout.nav.delete_account', icon: 'members' },
      { to: '/help-v3/account/logout', labelKey: 'help_v3.layout.nav.logout', icon: 'members' }
    ]
  }
]
</script>

<template>
  <div class="help-wrap">
    <div class="split fill">
      <aside class="help-sidebar">
        <div class="stack gap-3">
          <div class="card stack tight">
            <div class="badge">{{ t('help_v3.layout.badge') }}</div>
            <p class="muted">{{ t('help_v3.layout.intro') }}</p>
            <router-link class="btn btn--ghost" to="/help-v2">
              {{ t('help_v3.layout.open_v2') }}
            </router-link>
          </div>

          <div class="card stack tight search-card">
            <input
              v-model="query"
              type="text"
              :placeholder="t('help_v3.layout.search_placeholder')"
            />
            <div v-if="query" class="stack tight">
              <div v-if="results.length === 0" class="muted">
                {{ t('help_v3.layout.search_no_results') }}
              </div>
              <div v-else class="stack tight" role="list">
                <router-link
                  v-for="r in results"
                  :key="r.path"
                  :to="r.path"
                  class="link"
                  role="listitem"
                >
                  {{ r.title }}
                </router-link>
              </div>
            </div>
          </div>

          <nav class="card stack tight" aria-label="Help v3 navigation">
            <template v-for="group in navGroups" :key="group.titleKey">
              <h3 class="v2-nav-title">{{ t(group.titleKey) }}</h3>
              <router-link
                v-for="item in group.items"
                :key="item.to"
                class="v2-nav-link"
                :to="item.to"
              >
                <V2Icon :name="item.icon" :size="16" />
                {{ t(item.labelKey) }}
              </router-link>
            </template>
          </nav>
        </div>
      </aside>

      <main class="help-main">
        <router-view />
      </main>
    </div>
  </div>
</template>
