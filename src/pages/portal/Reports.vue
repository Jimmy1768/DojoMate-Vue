<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.portal.reports.title') }}</h1>
    <p>{{ t('help.members.portal.reports.intro') }}</p>
    <p>{{ t('help.members.portal.reports.items') }}</p>
    <p>{{ t('help.members.portal.reports.active_only') }}</p>
    <p>{{ t('help.members.portal.reports.inactive_missing') }}</p>
    <p>{{ t('help.members.portal.reports.future_note') }}</p>
  </section>
</template>
