<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.issue_cards.title') }}</h1>
    <p>{{ t('help.cards.issue_cards.intro') }}</p>
    <p>{{ t('help.cards.issue_cards.choose_template') }}</p>
    <p>{{ t('help.cards.issue_cards.select_members') }}</p>
    <p class="muted">{{ t('help.cards.issue_cards.already_issued_note') }}</p>
    <p class="muted">{{ t('help.cards.issue_cards.cannot_revoke_here') }}</p>
  </section>
</template>