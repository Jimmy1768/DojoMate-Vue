<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.settings.currency.title') }}</h1>
    <p>{{ t('help.settings.currency.intro') }}</p>
    <p>{{ t('help.settings.currency.members') }}</p>
    <p>{{ t('help.settings.currency.owners') }}</p>
  </section>
</template>