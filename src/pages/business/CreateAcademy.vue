<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.business.create_academy.title') }}</h1>
    <p>{{ t('help.business.create_academy.intro') }}</p>
    <p>{{ t('help.business.create_academy.duplicates') }}</p>
    <p>{{ t('help.business.create_academy.currency') }}</p>
    <p>{{ t('help.business.create_academy.action') }}</p>
  </section>
</template>