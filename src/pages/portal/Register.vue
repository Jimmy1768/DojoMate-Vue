<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.portal.register.title') }}</h1>
    <p>{{ t('help.members.portal.register.intro') }}</p>
    <p>{{ t('help.members.portal.register.role') }}</p>
    <p>{{ t('help.members.portal.register.parent_flow') }}</p>
    <p>{{ t('help.members.portal.register.student_flow') }}</p>
    <p>{{ t('help.members.portal.register.review') }}</p>
    <p>{{ t('help.members.portal.register.result') }}</p>
    <p>{{ t('help.members.portal.register.resume') }}</p>
  </section>
</template>
