<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">{{ t('help_v2.portal.overview.badge') }}</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="tools" :size="24" />{{ t('help_v2.portal.overview.title') }}</h1>
      <p class="muted">{{ t('help_v2.portal.overview.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.overview.workflows_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.portal.overview.register_title') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/register">
              {{ t('help_v2.layout.nav.portal_register') }}
            </router-link>
            <p class="muted">{{ t('help_v2.portal.overview.register_body') }}</p>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.portal.overview.members_title') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/members">
              {{ t('help_v2.layout.nav.portal_members') }}
            </router-link>
            <p class="muted">{{ t('help_v2.portal.overview.members_body') }}</p>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.portal.overview.ranks_title') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/ranks">
              {{ t('help_v2.layout.nav.portal_ranks') }}
            </router-link>
            <p class="muted">{{ t('help_v2.portal.overview.ranks_body') }}</p>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.portal.overview.cards_title') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/cards">
              {{ t('help_v2.layout.nav.portal_cards') }}
            </router-link>
            <p class="muted">{{ t('help_v2.portal.overview.cards_body') }}</p>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.portal.overview.reports_title') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/reports">
              {{ t('help_v2.layout.nav.portal_reports') }}
            </router-link>
            <router-link class="link" to="/help-v2/tools/activate">
              Features
            </router-link>
            <p class="muted">{{ t('help_v2.portal.overview.reports_body') }}</p>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.portal.overview.capability_title') }}</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/cloud-usage">
              {{ t('help_v2.portal.overview.capability_cloud_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/portal/payouts">
              {{ t('help_v2.portal.overview.capability_payouts_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/tools/activate">
              Features
            </router-link>
            <p class="muted">{{ t('help_v2.portal.overview.capability_body') }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.overview.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.overview.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.portal.overview.support_desc')"
      :button-label="t('help_v2.portal.overview.support_button')"
    />
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
