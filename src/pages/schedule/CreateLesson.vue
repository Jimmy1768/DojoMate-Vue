<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.schedule.create.title') }}</h1>

    <p>{{ t('help.schedule.create.intro') }}</p>

    <ul class="stack">
      <li>{{ t('help.schedule.create.lesson_name') }}</li>
      <li>{{ t('help.schedule.create.lesson_type') }}</li>
      <p class="muted">{{ t('help.schedule.create.lesson_type_note') }}</p>
      <li>{{ t('help.schedule.create.date') }}</li>
      <li>{{ t('help.schedule.create.time') }}</li>
      <li>{{ t('help.schedule.create.classroom') }}</li>
      <li>{{ t('help.schedule.create.max_capacity') }}</li>
      <li>{{ t('help.schedule.create.min_capacity') }}</li>
      <li>{{ t('help.schedule.create.cutoff') }}</li>
      <li>{{ t('help.schedule.create.content') }}</li>
      <li>{{ t('help.schedule.create.sessions_deduct') }}</li>
      <li>{{ t('help.schedule.create.usable_cards') }}</li>
      <li>{{ t('help.schedule.create.instructors') }}</li>
      <li>{{ t('help.schedule.create.assistants') }}</li>
      <p><strong>{{ t('help.schedule.create.action') }}</strong></p>
    </ul>
    
  </section>
</template>