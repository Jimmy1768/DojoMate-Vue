<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main class="stack">
    <h1>{{ t('privacy.title') }}</h1>
    <p class="muted">{{ t('privacy.effective_date') }}</p>

    <p>{{ t('privacy.intro') }}</p>

    <h2>{{ t('privacy.info_collect_title') }}</h2>
    <p>{{ t('privacy.info_collect_text') }}</p>

    <h2>{{ t('privacy.third_party_title') }}</h2>
    <p>{{ t('privacy.third_party_text') }}</p>

    <h2>{{ t('privacy.children_title') }}</h2>
    <p>{{ t('privacy.children_text') }}</p>

    <h2>{{ t('privacy.changes_title') }}</h2>
    <p>{{ t('privacy.changes_text') }}</p>

    <hr />
    <p class="muted">{{ t('privacy.manage_prefs') }}</p>
  </main>
</template>