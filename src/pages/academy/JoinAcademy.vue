<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.academy.join.title') }}</h1>
    <p>{{ t('help.academy.join.intro') }}</p>
    <p>{{ t('help.academy.join.qr') }}</p>
    <p>{{ t('help.academy.join.search') }}</p>
    <p>{{ t('help.academy.join.verify') }}</p>
    <p>{{ t('help.academy.join.apply') }}</p>
    <p>{{ t('help.academy.join.children') }}</p>
  </section>
</template>