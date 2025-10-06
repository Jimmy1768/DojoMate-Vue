<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.analytics.wages.title') }}</h1>

    <p>{{ t('help.tools.analytics.wages.intro') }}</p>
    <p>{{ t('help.tools.analytics.wages.access') }}</p>
    <p>{{ t('help.tools.analytics.wages.roles') }}</p>
    <p>{{ t('help.tools.analytics.wages.contract_types') }}</p>
    <p>{{ t('help.tools.analytics.wages.fields') }}</p>
    <p>{{ t('help.tools.analytics.wages.private_rate') }}</p>
    <p>{{ t('help.tools.analytics.wages.tiered_intro') }}</p>
    <p>{{ t('help.tools.analytics.wages.tiered_example') }}</p>
    <p>{{ t('help.tools.analytics.wages.tiered_behavior') }}</p>
    <p>{{ t('help.tools.analytics.wages.minute_calculation') }}</p>
  </section>
</template>