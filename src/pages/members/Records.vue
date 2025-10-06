<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.records.title') }}</h1>

    <p>{{ t('help.members.records.intro') }}</p>
    <p>{{ t('help.members.records.instructions') }}</p>
    <p>{{ t('help.members.records.date_range') }}</p>
    <p>{{ t('help.members.records.clear_field') }}</p>
    <p>{{ t('help.members.records.member_search') }}</p>
    <p>{{ t('help.members.records.view_records') }}</p>
  </section>
</template>