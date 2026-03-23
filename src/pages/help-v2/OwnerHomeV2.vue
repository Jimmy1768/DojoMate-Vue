<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.owner_home.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="business" :size="24" />{{ t('help_v2.owner_home.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.owner_home.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_home.start_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.owner_home.start_body') }}
      </p>
      <div class="row">
        <router-link class="btn" to="/help-v2/getting-started-owner">
          {{ t('help_v2.owner_home.start_primary') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/create-academy">
          {{ t('help_v2.owner_home.start_secondary') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_home.setup_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.owner_home.setup_create_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.owner_home.setup_create_body') }}
          </p>
          <router-link class="link" to="/help-v2/business/create-academy">
            {{ t('help_v2.layout.nav.create_academy') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.owner_home.setup_review_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.owner_home.setup_review_body') }}
          </p>
          <div class="row">
            <router-link class="link" to="/help-v2/business/academy-basics">
              {{ t('help_v2.layout.nav.academy_basics') }}
            </router-link>
            <router-link class="link" to="/help-v2/business/academy-qr">
              {{ t('help_v2.layout.nav.academy_qr') }}
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.owner_home.setup_lifecycle_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.owner_home.setup_lifecycle_body') }}
          </p>
          <router-link class="link" to="/help-v2/business/delete-academy">
            {{ t('help_v2.layout.nav.delete_academy') }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_home.jobs_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.owner_home.jobs_team_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.owner_home.jobs_team_body') }}
          </p>
          <router-link class="link" to="/help-v2/business">
            {{ t('help_v2.owner_home.jobs_team_link') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.owner_home.jobs_schedule_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.owner_home.jobs_schedule_body') }}
          </p>
          <router-link class="link" to="/help-v2/schedule">
            {{ t('help_v2.owner_home.jobs_schedule_link') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.owner_home.jobs_cards_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.owner_home.jobs_cards_body') }}
          </p>
          <div class="row">
            <router-link class="link" to="/help-v2/members">
              {{ t('help_v2.layout.nav.members') }}
            </router-link>
            <router-link class="link" to="/help-v2/cards">
              {{ t('help_v2.layout.nav.cards') }}
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_home.portal_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.owner_home.portal_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/portal">
          {{ t('help_v2.owner_home.portal_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_home.paid_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.owner_home.paid_body') }}
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          {{ t('help_v2.owner_home.paid_link') }}
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
