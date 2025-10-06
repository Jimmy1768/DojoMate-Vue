<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.title') }}</h1>
    <p class="muted">{{ t('help.text_1') }}</p>
    <p class="muted">{{ t('help.text_2') }}</p>
  </section>
</template>