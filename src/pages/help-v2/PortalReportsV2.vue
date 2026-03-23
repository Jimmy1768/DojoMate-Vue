<script setup>
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.portal.reports.badge') }}</span>
      <h1>{{ t('help_v2.portal.reports.title') }}</h1>
      <p class="muted">{{ t('help_v2.portal.reports.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.reports.flow_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.reports.flow_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.reports.access_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.reports.access_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.reports.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.reports.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.portal.reports.support_desc')"
      :button-label="t('help_v2.portal.reports.support_button')"
    />
  </section>
</template>
