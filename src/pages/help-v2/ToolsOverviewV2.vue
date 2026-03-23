<script setup>
import V2Icon from '../../components/V2Icon.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.tools.overview.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="tools" :size="24" />{{ t('help_v2.tools.overview.title') }}</h1>
      <p class="muted">{{ t('help_v2.tools.overview.intro') }}</p>
    </div>

    <section class="card stack tight">
      <div class="v2-meta-row">
        <span class="badge badge--premium">{{ t('help_v2.tools.overview.start_badge') }}</span>
      </div>
      <h2>{{ t('help_v2.tools.overview.start_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <div class="v2-meta-row">
            <h3>{{ t('help_v2.tools.overview.timetable_title') }}</h3>
            <span class="badge badge--premium">Paid</span>
          </div>
          <p class="muted">
            {{ t('help_v2.tools.overview.timetable_body') }}
          </p>
          <router-link class="link" to="/help-v2/tools/timetable">
            {{ t('help_v2.tools.overview.timetable_link') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <div class="v2-meta-row">
            <h3>{{ t('help_v2.tools.overview.pause_title') }}</h3>
            <span class="badge badge--premium">Paid</span>
          </div>
          <p class="muted">
            {{ t('help_v2.tools.overview.pause_body') }}
          </p>
          <router-link class="link" to="/help-v2/tools/pause-cards">
            {{ t('help_v2.tools.overview.pause_link') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <div class="v2-meta-row">
            <h3>{{ t('help_v2.tools.overview.broadcast_title') }}</h3>
            <span class="badge badge--premium">Paid</span>
          </div>
          <p class="muted">
            {{ t('help_v2.tools.overview.broadcast_body') }}
          </p>
          <router-link class="link" to="/help-v2/tools/broadcast">
            {{ t('help_v2.tools.overview.broadcast_link') }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.overview.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.overview.know_items')" :key="item">{{ item }}</li>
      </ul>
      <div>
        <router-link class="btn" to="/help-v2/tools/activate">
          {{ t('help_v2.tools.overview.activate_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
  margin-bottom: 0;
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
