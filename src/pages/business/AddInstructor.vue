<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.business.add_instructor.title') }}</h1>
    <p>{{ t('help.business.add_instructor.intro') }}</p>
    <p>{{ t('help.business.add_instructor.requirements') }}</p>
    <p>{{ t('help.business.add_instructor.owner_tip') }}</p>
    <p>{{ t('help.business.add_instructor.no_tool_needed') }}</p>
    <p>{{ t('help.business.add_instructor.next_steps') }}</p>
  </section>
</template>