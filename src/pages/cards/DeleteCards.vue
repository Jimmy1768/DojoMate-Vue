<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.delete_cards.title') }}</h1>
    <p>{{ t('help.cards.delete_cards.intro_paths') }}</p>
    <ul class="stack tight">
      <li>{{ t('help.cards.delete_cards.expired_default') }}</li>
      <li>{{ t('help.cards.delete_cards.no_duplicate_active') }}</li>
      <li>{{ t('help.cards.delete_cards.cancel_option') }}</li>
      <li>{{ t('help.cards.delete_cards.cancel_reason_required') }}</li>
      <li>{{ t('help.cards.delete_cards.records_visibility') }}</li>
    </ul>
  </section>
</template>