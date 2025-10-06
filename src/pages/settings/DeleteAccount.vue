<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.settings.delete_account.title') }}</h1>

    <p>{{ t('help.settings.delete_account.intro') }}</p>
    <p>{{ t('help.settings.delete_account.validations') }}</p>
    <p>{{ t('help.settings.delete_account.failures') }}</p>
    <p>{{ t('help.settings.delete_account.children') }}</p>
    <p>{{ t('help.settings.delete_account.child_cards') }}</p>
  </section>
</template>