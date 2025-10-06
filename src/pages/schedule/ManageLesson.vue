<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.schedule.manage.title') }}</h1>

    <p>{{ t('help.schedule.manage.intro') }}</p>
    <p>{{ t('help.schedule.manage.edit') }}</p>
    <p>{{ t('help.schedule.manage.cancel') }}</p>
    <p>{{ t('help.schedule.manage.delete') }}</p>

    <ul>
      <li>{{ t('help.schedule.manage.cutoff_rule') }}</li>
      <li>{{ t('help.schedule.manage.started_rule') }}</li>
    </ul>
  </section>
</template>