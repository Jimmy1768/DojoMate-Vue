<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.applications.title') }}</h1>

    <p>{{ t('help.members.applications.intro') }}</p>
    <p>{{ t('help.members.applications.instructions') }}</p>
    <p>{{ t('help.members.applications.no_pending') }}</p>
    <p>{{ t('help.members.applications.accept_reject') }}</p>
    <p>{{ t('help.members.applications.child_accounts') }}</p>
    <p>{{ t('help.members.applications.refresh') }}</p>
  </section>
</template>