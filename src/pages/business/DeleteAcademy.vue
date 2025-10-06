<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.business.delete_academy.title') }}</h1>
    <p>{{ t('help.business.delete_academy.preconditions') }}</p>
    <p>{{ t('help.business.delete_academy.members') }}</p>
    <p>{{ t('help.business.delete_academy.success') }}</p>
  </section>
</template>