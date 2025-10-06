<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.academy.memberships.title') }}</h1>
    <p>{{ t('help.academy.memberships.intro') }}</p>
    <p>{{ t('help.academy.memberships.multi') }}</p>
    <p>{{ t('help.academy.memberships.select') }}</p>
  </section>
</template>