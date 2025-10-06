<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.account.reset.title') }}</h1>

    <p class="muted">{{ t('help.account.reset.intro') }}</p>

    <h2>{{ t('help.account.reset.notes') }}</h2>
    <div class="stack tight" role="list">
      <div role="listitem">{{ t('help.account.reset.note_where') }}</div>
      <div role="listitem">{{ t('help.account.reset.note_email_timing') }}</div>
    </div>

    <h2>{{ t('help.account.reset.not_received') }}</h2>
    <div class="stack tight" role="list">
      <div role="listitem">{{ t('help.account.reset.check_spam') }}</div>
      <div role="listitem">{{ t('help.account.reset.correct_email') }}</div>
      <div role="listitem">{{ t('help.account.reset.resend') }}</div>
    </div>
  </section>
</template>