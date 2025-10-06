<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.delete_templates.title') }}</h1>
    <p>{{ t('help.cards.delete_templates.intro') }}</p>
    <p class="muted">{{ t('help.cards.delete_templates.cannot_delete_active') }}</p>
  </section>
</template>