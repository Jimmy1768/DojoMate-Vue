<script setup>
import { useI18n } from 'vue-i18n'
import V2Icon from '../../components/V2Icon.vue'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.business.compare.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="business" :size="24" />{{ t('help_v2.business.compare.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.business.compare.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.compare.pick_title') }}</h2>
      <div class="v2-grid">
        <article v-for="card in tm('help_v2.business.compare.cards')" :key="card.link" class="v2-panel">
          <div class="v2-meta-row" v-if="card.paid">
            <h3>{{ card.title }}</h3>
            <span class="badge badge--premium">{{ t('help_v2.business.compare.paid_badge') }}</span>
          </div>
          <h3 v-else>{{ card.title }}</h3>
          <p class="muted">
            {{ card.body }}
          </p>
          <ul>
            <li v-for="item in card.items" :key="item">{{ item }}</li>
          </ul>
          <router-link class="link" :to="card.link">
            {{ card.cta }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.compare.rules_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.compare.rules_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.compare.start_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.compare.start_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          {{ t('help_v2.business.compare.instructors_link') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/staff-access">
          {{ t('help_v2.business.compare.staff_access_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/business/analytics">
          {{ t('help_v2.business.compare.analytics_link') }}
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

.v2-meta-row h3 {
  margin: 0;
}

.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 720px) {
  .v2-grid {
    grid-template-columns: 1fr;
  }
}
</style>
