<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.academy.messages.title') }}</h1>
    <p>{{ t('help.academy.messages.intro') }}</p>
    <p class="muted">{{ t('help.academy.messages.examples') }}</p>
  </section>
</template>