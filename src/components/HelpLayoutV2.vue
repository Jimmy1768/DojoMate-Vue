<script setup>
import { computed, ref } from 'vue'
import V2Icon from './V2Icon.vue'
import { useI18n } from 'vue-i18n'
import { getV2SearchIndex } from '../help-v2/search'

const { t } = useI18n()
const query = ref('')
const index = computed(() => getV2SearchIndex(t))
const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  const seen = new Set()
  return index.value
    .filter(item => item.text.includes(q))
    .filter(item => {
      if (seen.has(item.path)) return false
      seen.add(item.path)
      return true
    })
    .slice(0, 20)
})
</script>

<template>
  <div class="help-wrap">
    <div class="split fill">
      <aside class="help-sidebar">
        <div class="stack gap-3">
          <div class="card stack tight">
            <div class="badge">{{ t('help_v2.layout.preview_badge') }}</div>
            <p class="muted">
              {{ t('help_v2.layout.intro') }}
            </p>
            <router-link class="btn btn--ghost" to="/help-v1">
              {{ t('help_v2.layout.open_v1') }}
            </router-link>
          </div>

          <div class="card stack tight search-card">
            <input
              v-model="query"
              type="text"
              :placeholder="t('help_v2.layout.search_placeholder')"
            />
            <div v-if="query" class="stack tight">
              <div v-if="results.length === 0" class="muted">
                {{ t('help_v2.layout.search_no_results') }}
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

          <nav class="card stack tight" aria-label="Help v2 navigation">
            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.start_here') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2">
              <V2Icon name="home" :size="16" />
              {{ t('help_v2.layout.nav.home') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/owner">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.owner') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/admin">
              <V2Icon name="access" :size="16" />
              {{ t('help_v2.layout.nav.admin') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.student_home') }}
            </router-link>

            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.owner_setup') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/getting-started-owner">
              <V2Icon name="getting-started" :size="16" />
              {{ t('help_v2.layout.nav.getting_started_owner') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/create-academy">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.create_academy') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/academy-basics">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.academy_basics') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/academy-qr">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.academy_qr') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/delete-academy">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.delete_academy') }}
            </router-link>

            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.student') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/student/join-academy">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.join_academy') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/memberships">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.memberships') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/booking">
              <V2Icon name="schedule" :size="16" />
              {{ t('help_v2.layout.nav.booking') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/system-alerts">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.system_alerts') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/broadcast">
              <V2Icon name="broadcast" :size="16" />
              {{ t('help_v2.layout.nav.broadcast') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/attendance-records">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.attendance_records') }}
            </router-link>

            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.account_profile') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/account/sign-in">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.sign_in') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/account/create-account">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.create_account') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/account/reset-password">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.reset_password') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/account/troubleshooting">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.account_troubleshooting') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/settings/change-password">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.change_password') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/settings/language">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.language') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/settings/currency">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.currency') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/settings/privacy-settings">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.privacy') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/settings/delete-account">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.delete_account') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/settings/logout">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.logout') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/profile/edit-profile">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.edit_profile') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/profile/child-accounts">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.child_accounts') }}
            </router-link>

            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.business') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/business">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.business_overview') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/compare-pages">
              <V2Icon name="business" :size="16" />
              {{ t('help_v2.layout.nav.compare_business_pages') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/instructors">
              <V2Icon name="instructors" :size="16" />
              {{ t('help_v2.layout.nav.choose_who_can_teach') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/staff-access">
              <V2Icon name="access" :size="16" />
              {{ t('help_v2.layout.nav.choose_who_can_manage') }}
              <span class="badge badge--premium">{{ t('help_v2.business.overview.paid_badge') }}</span>
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/analytics">
              <V2Icon name="analytics" :size="16" />
              {{ t('help_v2.layout.nav.track_pay_and_performance') }}
              <span class="badge badge--premium">{{ t('help_v2.business.overview.paid_badge') }}</span>
            </router-link>

            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.portal') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/portal">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.affiliate_portal') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/portal/register">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.portal_register') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/portal/members">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.portal_members') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/portal/ranks">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.portal_ranks') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/portal/cards">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.portal_cards') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/portal/reports">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.portal_reports') }}
            </router-link>
            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.schedule') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/schedule">
              <V2Icon name="schedule" :size="16" />
              {{ t('help_v2.layout.nav.schedule_overview') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/create-lesson">
              <V2Icon name="schedule" :size="16" />
              {{ t('help_v2.layout.nav.create_a_lesson') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/manage-lesson">
              <V2Icon name="schedule" :size="16" />
              {{ t('help_v2.layout.nav.edit_or_cancel_a_lesson') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/book-for-students">
              <V2Icon name="schedule" :size="16" />
              {{ t('help_v2.layout.nav.book_for_students') }}
            </router-link>
            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.cards') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/cards">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.cards_overview') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/how-booking-works">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.how_cards_work') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/create-template">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.create_a_card_template') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/issue-cards">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.issue_cards') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/edit-templates">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.edit_templates') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/delete-templates">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.delete_templates') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/delete-cards">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.delete_cards') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/records">
              <V2Icon name="cards" :size="16" />
              {{ t('help_v2.layout.nav.card_records') }}
            </router-link>
            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.members') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/members">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.members_overview') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/quick-enrollment">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.add_a_member_directly') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/quick-enrollment-vs-applications">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.enrollment_vs_applications') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/applications">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.review_applications') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/reject-or-ban">
              <V2Icon name="members" :size="16" />
              {{ t('help_v2.layout.nav.reject_or_ban_members') }}
            </router-link>
            <h3 class="v2-nav-title">{{ t('help_v2.layout.nav.tools') }}</h3>
            <router-link class="v2-nav-link" to="/help-v2/tools">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.tools_overview') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/activate">
              <V2Icon name="tools" :size="16" />
              {{ t('help_v2.layout.nav.activate_tools_and_premium') }}
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/timetable">
              <V2Icon name="timetable" :size="16" />
              {{ t('help_v2.layout.nav.timetable') }}
              <span class="badge badge--premium">{{ t('help_v2.tools.overview.start_badge') }}</span>
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/pause-cards">
              <V2Icon name="pause-cards" :size="16" />
              {{ t('help_v2.layout.nav.pause_cards') }}
              <span class="badge badge--premium">{{ t('help_v2.tools.overview.start_badge') }}</span>
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/broadcast">
              <V2Icon name="broadcast" :size="16" />
              {{ t('help_v2.layout.nav.broadcast') }}
              <span class="badge badge--premium">{{ t('help_v2.tools.overview.start_badge') }}</span>
            </router-link>
          </nav>
        </div>
      </aside>

      <main class="help-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.help-wrap {
  height: 68vh;
  max-height: 78vh;
  width: min(1056px, 100%);
  margin: 0 auto;
}

.fill {
  height: 100%;
  overflow: hidden;
}

.help-sidebar {
  height: 100%;
  overflow: auto;
}

.help-content {
  height: 100%;
  overflow: auto;
  padding-right: 2px;
}

.v2-nav-title {
  margin: 18px 0 0;
}

.v2-nav-title:first-of-type {
  margin-top: 0;
}

.v2-nav-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-fg);
  background: var(--color-bg);
  font-weight: var(--font-weight-semibold);
}

.v2-nav-link .badge {
  margin-left: auto;
}

.v2-nav-link:hover {
  background: var(--color-bg-alt);
  text-decoration: none;
}

.router-link-active.v2-nav-link {
  border-color: rgba(10, 99, 209, 0.35);
  background: rgba(10, 99, 209, 0.08);
  color: var(--color-primary);
}

.search-card input {
  width: 100%;
  padding: 4px 6px;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 6px;
  font-size: 0.9rem;
}

@media (max-width: 720px) {
  .help-wrap { height: auto; max-height: none; }
  .fill { height: auto; overflow: visible; }
  .help-sidebar { height: auto; overflow: visible; }
  .help-content { height: auto; overflow: visible; padding-right: 0; }
}
</style>
