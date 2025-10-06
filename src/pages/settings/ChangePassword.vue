<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.settings.change_password.title') }}</h1>
    <p>{{ t('help.settings.change_password.intro') }}</p>
    <p class="muted">{{ t('help.settings.change_password.note') }}</p>
  </section>
</template>