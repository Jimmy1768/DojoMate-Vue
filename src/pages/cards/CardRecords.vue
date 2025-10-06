<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.card_records.title') }}</h1>
    <p>{{ t('help.cards.card_records.intro') }}</p>
    <p class="muted">{{ t('help.cards.card_records.empty_state') }}</p>

    <h2>Types</h2>
    <ul class="stack tight">
      <li>{{ t('help.cards.card_records.items_current') }}</li>
      <li>{{ t('help.cards.card_records.items_issued') }}</li>
      <li>{{ t('help.cards.card_records.items_canceled') }}</li>
      <li>{{ t('help.cards.card_records.items_debt') }}</li>
    </ul>

    <h2>Debt Handling</h2>
    <p>{{ t('help.cards.card_records.debt_policy') }}</p>
    <p class="muted">{{ t('help.cards.card_records.settlement_edge') }}</p>
    <p>{{ t('help.cards.card_records.manual_resolve') }}</p>
    <p class="muted">{{ t('help.cards.card_records.cleared_visibility') }}</p>
  </section>
</template>