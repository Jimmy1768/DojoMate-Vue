<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.account.troubleshooting.badge') }}</span>
      <h1>{{ t('help_v2.account.troubleshooting.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.account.troubleshooting.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.account.troubleshooting.signin_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.account.troubleshooting.signin_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.account.troubleshooting.email_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.account.troubleshooting.email_body') }}
      </p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.account.troubleshooting.role_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.account.troubleshooting.role_body') }}
      </p>
    </section>
  </section>
</template>
