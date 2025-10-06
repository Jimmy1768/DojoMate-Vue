<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.schedule.book.title') }}</h1>

    <p>{{ t('help.schedule.book.intro') }}</p>
    <p>{{ t('help.schedule.book.open') }}</p>
    <p>{{ t('help.schedule.book.select_member') }}</p>
    <p>{{ t('help.schedule.book.choose_card') }}</p>
    <p>{{ t('help.schedule.book.unbook') }}</p>
    <p>{{ t('help.schedule.book.finished_rule') }}</p>

  </section>
</template>