<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section class="stack">
    <h1>{{ t('help.cards.create_template.title') }}</h1>
    <p>{{ t('help.cards.create_template.intro') }}</p>
    <ul class="stack tight">
      <li>{{ t('help.cards.create_template.fields_name') }}</li>
      <li>{{ t('help.cards.create_template.fields_fee') }}</li>
      <li>{{ t('help.cards.create_template.fields_desc') }}</li>
      <li>{{ t('help.cards.create_template.fields_sessions') }}</li>
      <li>{{ t('help.cards.create_template.fields_expire_days') }}</li>
      <li>{{ t('help.cards.create_template.fields_type') }}</li>
    </ul>
  </section>
</template>