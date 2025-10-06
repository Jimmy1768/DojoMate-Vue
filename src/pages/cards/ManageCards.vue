<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.manage_cards.title') }}</h1>
    <p>{{ t('help.cards.manage_cards.intro_paths') }}</p>
    <p>{{ t('help.cards.manage_cards.actions') }}</p>
    <p>{{ t('help.cards.manage_cards.input_rules') }}</p>
    <p class="muted">{{ t('help.cards.manage_cards.expiry_rule_note') }}</p>
  </section>
</template>