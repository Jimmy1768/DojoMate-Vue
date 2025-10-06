<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <!-- Outer container -->
  <section class="stack">

    <!-- Page title -->
    <h1>{{ t('help.account.sign_in.title') }}</h1>

    <!-- Intro paragraph -->
    <p class="muted">
      {{ t('help.account.sign_in.intro') }}
    </p>

    <!-- Section group -->
    <section class="stack">
      <h2>{{ t('help.account.sign_in.fields') }}</h2>
      <div class="stack tight" role="list">
        <div role="listitem">{{ t('help.account.sign_in.field_email') }}</div>
        <div role="listitem">{{ t('help.account.sign_in.field_password') }}</div>
      </div>
    </section>

    <section class="stack">
      <h2>{{ t('help.account.sign_in.actions') }}</h2>
      <div class="stack tight" role="list">
        <div role="listitem">{{ t('help.account.sign_in.action_sign_in') }}</div>
        <div role="listitem">{{ t('help.account.sign_in.action_reset_password') }}</div>
      </div>
    </section>

    <section class="stack">
      <h2>{{ t('help.account.sign_in.tips') }}</h2>
      <div class="stack tight" role="list">
        <div role="listitem">{{ t('help.account.sign_in.tip_wrong_credentials') }}</div>
        <div role="listitem">{{ t('help.account.sign_in.tip_language_selector') }}</div>
      </div>
    </section>

  </section>
</template>