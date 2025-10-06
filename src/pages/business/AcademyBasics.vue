<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.business.academy_basics.title') }}</h1>
    <p>{{ t('help.business.academy_basics.edit') }}</p>
    <p>{{ t('help.business.academy_basics.messages') }}</p>
  </section>
</template>