<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.account.troubleshooting.title') }}</h1>

    <h2>{{ t('help.account.troubleshooting.cannot_sign_in') }}</h2>
    <ul>
      <li>{{ t('help.account.troubleshooting.check_email_pw') }}</li>
      <li>{{ t('help.account.troubleshooting.reset_pw') }}</li>
      <li>{{ t('help.account.troubleshooting.online') }}</li>
    </ul>

    <h2>{{ t('help.account.troubleshooting.email_in_use') }}</h2>
    <ul>
      <li>{{ t('help.account.troubleshooting.already_registered') }}</li>
    </ul>

    <h2>{{ t('help.account.troubleshooting.role_change') }}</h2>
    <ul>
      <li>{{ t('help.account.troubleshooting.role_change_steps') }}</li>
    </ul>
  </section>
</template>