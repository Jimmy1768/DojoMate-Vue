<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.profile.child_accounts.title') }}</h1>
    <p>{{ t('help.profile.child_accounts.intro') }}</p>
    <p>{{ t('help.profile.child_accounts.parent_role') }}</p>
    <p>{{ t('help.profile.child_accounts.create') }}</p>
    <p>{{ t('help.profile.child_accounts.edit') }}</p>
    <p>{{ t('help.profile.child_accounts.delete') }}</p>
  </section>
</template>