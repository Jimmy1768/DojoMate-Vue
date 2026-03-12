<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.portal.ranks.title') }}</h1>
    <p>{{ t('help.members.portal.ranks.intro') }}</p>
    <p>{{ t('help.members.portal.ranks.programs') }}</p>
    <p>{{ t('help.members.portal.ranks.first_program') }}</p>
    <p>{{ t('help.members.portal.ranks.later_members') }}</p>
    <p>{{ t('help.members.portal.ranks.additional_programs') }}</p>
    <p>{{ t('help.members.portal.ranks.roster_view') }}</p>
    <p>{{ t('help.members.portal.ranks.roster_actions') }}</p>
    <p>{{ t('help.members.portal.ranks.save_direct') }}</p>
    <p>{{ t('help.members.portal.ranks.forward_rule') }}</p>
    <p>{{ t('help.members.portal.ranks.review_needed') }}</p>
    <p>{{ t('help.members.portal.ranks.review_modal') }}</p>
    <p>{{ t('help.members.portal.ranks.guardrails') }}</p>
    <p>{{ t('help.members.portal.ranks.history') }}</p>
    <p>{{ t('help.members.portal.ranks.bootstrap_note') }}</p>
  </section>
</template>
