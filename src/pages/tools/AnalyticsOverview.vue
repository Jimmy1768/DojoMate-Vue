<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.analytics.overview.title') }}</h1>

    <p>{{ t('help.tools.analytics.overview.intro') }}</p>
    <p>{{ t('help.tools.analytics.overview.realtime') }}</p>
    <p>{{ t('help.tools.analytics.overview.weekly_reports') }}</p>
    <p>{{ t('help.tools.analytics.overview.weekly_items') }}</p>
    <p>{{ t('help.tools.analytics.overview.financial_reports') }}</p>
    <p>{{ t('help.tools.analytics.overview.monthly_reports') }}</p>
    <p>{{ t('help.tools.analytics.overview.notes') }}</p>
  </section>
</template>