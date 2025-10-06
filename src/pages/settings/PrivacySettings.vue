<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.settings.privacy.title') }}</h1>

    <p>{{ t('help.settings.privacy.intro') }}</p>
    <p>{{ t('help.settings.privacy.notifications') }}</p>
    <p>{{ t('help.settings.privacy.marketing') }}</p>
    <p>{{ t('help.settings.privacy.booking') }}</p>
    <p>{{ t('help.settings.privacy.analytics_attendance') }}</p>
    <p>{{ t('help.settings.privacy.analytics_aggregate') }}</p>
  </section>
</template>