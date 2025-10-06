<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.account.create.title') }}</h1>

    <p class="muted">{{ t('help.account.create.intro') }}</p>

    <h2>{{ t('help.account.create.choices') }}</h2>
    <div class="stack tight" role="list">
      <div role="listitem">{{ t('help.account.create.member') }}</div>
      <div role="listitem">{{ t('help.account.create.admin') }}</div>
    </div>

    <h2>{{ t('help.account.create.requirements') }}</h2>
    <div class="stack tight" role="list">
      <div role="listitem">{{ t('help.account.create.email') }}</div>
      <div role="listitem">{{ t('help.account.create.password_rules') }}</div>
    </div>

    <h2>{{ t('help.account.create.next') }}</h2>
    <div class="stack tight" role="list">
      <div role="listitem">{{ t('help.account.create.next_member') }}</div>
      <div role="listitem">{{ t('help.account.create.next_admin') }}</div>
    </div>
  </section>
</template>