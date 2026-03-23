<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.student.home.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="members" :size="24" />{{ t('help_v2.student.home.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.student.home.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.welcome.who_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.student.home.section_1') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/student/join-academy">
              {{ t('help_v2.student.home.join_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/student/memberships">
              {{ t('help_v2.student.home.memberships_link') }}
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.student.home.section_2') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/student/booking">
              {{ t('help_v2.student.home.booking_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/student/attendance-records">
              {{ t('help_v2.student.home.attendance_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/student/broadcast">
              {{ t('help_v2.student.home.broadcast_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/student/system-alerts">
              {{ t('help_v2.student.home.alerts_link') }}
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.student.home.section_3') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/account/sign-in">
              {{ t('help_v2.student.home.sign_in_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/account/create-account">
              {{ t('help_v2.student.home.create_account_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/account/reset-password">
              {{ t('help_v2.student.home.reset_password_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/account/troubleshooting">
              {{ t('help_v2.student.home.troubleshooting_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/settings/change-password">
              {{ t('help_v2.student.home.change_password_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/profile/child-accounts">
              {{ t('help_v2.student.home.child_accounts_link') }}
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.home.still_need_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.student.home.still_need_body') }}
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v1">
          {{ t('help_v2.student.home.still_need_link') }}
        </router-link>
      </div>
    </section>

    <V2SupportCallout />
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.v2-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
}

.v2-panel {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v2-panel h3 {
  margin-top: 0;
}

@media (max-width: 720px) {
  .v2-grid {
    grid-template-columns: 1fr;
  }
}
</style>
