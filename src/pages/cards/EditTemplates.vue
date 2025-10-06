<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.edit_templates.title') }}</h1>
    <p>{{ t('help.cards.edit_templates.intro') }}</p>
    <p>{{ t('help.cards.edit_templates.name_locked') }}</p>
    <p>{{ t('help.cards.edit_templates.save') }}</p>
    <p class="muted">{{ t('help.cards.edit_templates.effects_note') }}</p>
  </section>
</template>