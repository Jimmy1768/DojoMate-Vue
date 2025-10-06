<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.timetable.title') }}</h1>

    <p>{{ t('help.tools.timetable.intro') }}</p>
    <p>{{ t('help.tools.timetable.create') }}</p>
    <p>{{ t('help.tools.timetable.end_date') }}</p>
    <p>{{ t('help.tools.timetable.edit') }}</p>
    <p>{{ t('help.tools.timetable.publish') }}</p>
    <p>{{ t('help.tools.timetable.holidays') }}</p>
  </section>
</template>