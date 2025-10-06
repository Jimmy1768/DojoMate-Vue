<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.rejection.title') }}</h1>

    <p>{{ t('help.members.rejection.intro') }}</p>
    <p>{{ t('help.members.rejection.reject') }}</p>
    <p>{{ t('help.members.rejection.rejected_list') }}</p>
    <p>{{ t('help.members.rejection.ban') }}</p>
    <p>{{ t('help.members.rejection.unban') }}</p>
  </section>
</template>