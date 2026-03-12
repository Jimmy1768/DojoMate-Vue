<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.portal.members.title') }}</h1>
    <p>{{ t('help.members.portal.members.intro') }}</p>
    <p>{{ t('help.members.portal.members.add_email') }}</p>
    <p>{{ t('help.members.portal.members.accept_reject') }}</p>
    <p>{{ t('help.members.portal.members.recently_accepted') }}</p>
    <p>{{ t('help.members.portal.members.sections') }}</p>
    <p>{{ t('help.members.portal.members.parents') }}</p>
    <p>{{ t('help.members.portal.members.adults') }}</p>
  </section>
</template>
