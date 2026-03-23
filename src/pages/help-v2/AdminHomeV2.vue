<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.admin_home.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="access" :size="24" />{{ t('help_v2.admin_home.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.admin_home.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.admin_home.jobs_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.admin_home.schedule_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.admin_home.schedule_body') }}
          </p>
          <router-link class="link" to="/help-v2/schedule">
            {{ t('help_v2.admin_home.schedule_link') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.admin_home.members_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.admin_home.members_body') }}
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

        <article class="v2-panel">
          <h3>{{ t('help_v2.admin_home.delegated_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.admin_home.delegated_body') }}
          </p>
          <router-link class="link" to="/help-v2/business/staff-access">
            {{ t('help_v2.admin_home.delegated_link') }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.admin_home.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.admin_home.know_items')" :key="item">{{ item }}</li>
      </ul>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          {{ t('help_v2.admin_home.compare_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/tools/activate">
          {{ t('help_v2.admin_home.tools_link') }}
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
