<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.academy.records.title') }}</h1>
    <p>{{ t('help.academy.records.intro') }}</p>
    <p>{{ t('help.academy.records.range') }}</p>
    <p>{{ t('help.academy.records.quick') }}</p>
  </section>
</template>