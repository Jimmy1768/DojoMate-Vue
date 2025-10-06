<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.profile.edit_profile.title') }}</h1>
    <p>{{ t('help.profile.edit_profile.intro') }}</p>
    <p>{{ t('help.profile.edit_profile.admin_role') }}</p>
    <p>{{ t('help.profile.edit_profile.submit') }}</p>
  </section>
</template>