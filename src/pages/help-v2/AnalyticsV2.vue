<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">{{ t('help_v2.business.analytics.badge') }}</span>
        <span class="badge badge--premium">{{ t('help_v2.business.analytics.paid_badge') }}</span>
      </div>
      <h1>{{ t('help_v2.business.analytics.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.business.analytics.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.analytics.use_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.analytics.use_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.analytics.covers_title') }}</h2>
      <div class="v2-grid">
        <article v-for="card in tm('help_v2.business.analytics.cards')" :key="card.title" class="v2-panel">
          <h3>{{ card.title }}</h3>
          <p class="muted">
            {{ card.body }}
          </p>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.analytics.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.analytics.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.analytics.mistake_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.analytics.mistake_body') }}
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          {{ t('help_v2.business.analytics.compare_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.analytics.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.analytics.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          {{ t('help_v2.business.analytics.activate_link') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          {{ t('help_v2.business.analytics.instructors_link') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/staff-access">
          {{ t('help_v2.business.analytics.staff_access_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/schedule">
          {{ t('help_v2.business.analytics.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
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
