<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.academy.booking.title') }}</h1>
    <p>{{ t('help.academy.booking.intro') }}</p>
    <p>{{ t('help.academy.booking.schedule') }}</p>
    <p>{{ t('help.academy.booking.book') }}</p>
    <p>{{ t('help.academy.booking.confirm') }}</p>
    <p>{{ t('help.academy.booking.eligibility') }}</p>
    <p>{{ t('help.academy.booking.select_card') }}</p>
    <p>{{ t('help.academy.booking.unbook') }}</p>
  </section>
</template>