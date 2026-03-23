<script setup>
import { useI18n } from 'vue-i18n'
import V2Icon from '../../components/V2Icon.vue'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.business.overview.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="business" :size="24" />{{ t('help_v2.business.overview.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.business.overview.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.overview.start_title') }}</h2>
      <div class="v2-grid">
        <article v-for="card in tm('help_v2.business.overview.cards')" :key="card.link" class="v2-panel">
          <div class="v2-meta-row" v-if="card.paid">
            <h3>{{ card.title }}</h3>
            <span class="badge badge--premium">{{ t('help_v2.business.overview.paid_badge') }}</span>
          </div>
          <h3 v-else>{{ card.title }}</h3>
          <p class="muted">
            {{ card.body }}
          </p>
          <router-link class="link" :to="card.link">
            {{ card.cta }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.overview.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.overview.know_items')" :key="item">{{ item }}</li>
      </ul>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          {{ t('help_v2.business.overview.compare_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.overview.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.overview.next_body') }}
      </p>
      <div>
        <router-link class="btn" to="/help-v2/business/instructors">
          {{ t('help_v2.business.overview.next_link') }}
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
