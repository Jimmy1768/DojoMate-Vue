<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.settings.logout.title') }}</h1>
    <p>{{ t('help.settings.logout.intro') }}</p>
  </section>
</template>