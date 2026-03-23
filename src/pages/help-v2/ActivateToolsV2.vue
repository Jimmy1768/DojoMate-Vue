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
        <span class="badge">{{ t('help_v2.tools.activate.badge') }}</span>
        <span class="badge badge--premium">{{ t('help_v2.tools.activate.paid_badge') }}</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="tools" :size="24" />{{ t('help_v2.tools.activate.title') }}</h1>
      <p class="muted">{{ t('help_v2.tools.activate.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.activate.where_title') }}</h2>
      <p class="muted">{{ t('help_v2.tools.activate.where_body') }}</p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.activate.organized_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.activate.organized_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.activate.groups_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.tools.activate.essential_title') }}</h3>
          <ul>
            <li v-for="item in tm('help_v2.tools.activate.essential_items')" :key="item">{{ item }}</li>
          </ul>
        </article>
        <article class="v2-panel">
          <h3>{{ t('help_v2.tools.activate.advanced_title') }}</h3>
          <ul>
            <li v-for="item in tm('help_v2.tools.activate.advanced_items')" :key="item">{{ item }}</li>
          </ul>
        </article>
        <article class="v2-panel">
          <h3>{{ t('help_v2.tools.activate.packages_title') }}</h3>
          <p class="muted">{{ t('help_v2.tools.activate.packages_body') }}</p>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.activate.features_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.activate.features_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.activate.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.activate.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.activate.guides_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/tools/timetable">
          {{ t('help_v2.layout.nav.timetable') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/pause-cards">
          {{ t('help_v2.layout.nav.pause_cards') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/staff-access">
          {{ t('help_v2.tools.activate.staff_access') }}
        </router-link>
        <router-link class="btn" to="/help-v2/business/analytics">
          {{ t('help_v2.tools.activate.analytics') }}
        </router-link>
      </div>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.tools.activate.support_desc')"
      :button-label="t('help_v2.tools.activate.support_button')"
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
