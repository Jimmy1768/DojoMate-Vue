<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.portal.cards.title') }}</h1>
    <p>{{ t('help.members.portal.cards.intro') }}</p>
    <p>{{ t('help.members.portal.cards.tabs') }}</p>
    <p>{{ t('help.members.portal.cards.cards_tab') }}</p>
    <p>{{ t('help.members.portal.cards.assign_tab') }}</p>
    <p>{{ t('help.members.portal.cards.active_tab') }}</p>
    <p>{{ t('help.members.portal.cards.history_tab') }}</p>
    <p>{{ t('help.members.portal.cards.history_search') }}</p>
    <p>{{ t('help.members.portal.cards.history_lists') }}</p>
  </section>
</template>
