<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main class="stack">
    <h1>{{ t('progression.title') }}</h1>
    <p class="muted">{{ t('progression.effective_date') }}</p>

    <p>{{ t('progression.intro') }}</p>

    <h2>{{ t('progression.fairness_title') }}</h2>
    <p>{{ t('progression.fairness_text') }}</p>

    <h2>{{ t('progression.payments_title') }}</h2>
    <p>{{ t('progression.payments_text') }}</p>

    <h2>{{ t('progression.xp_title') }}</h2>
    <p>{{ t('progression.xp_text_1') }}</p>
    <ul class="stack">
      <li>{{ t('progression.xp_list_watch') }}</li>
      <li>{{ t('progression.xp_list_catalog') }}</li>
      <li>{{ t('progression.xp_list_homework') }}</li>
      <li>{{ t('progression.xp_list_attend') }}</li>
      <li>{{ t('progression.xp_list_tests') }}</li>
      <li>{{ t('progression.xp_list_compete') }}</li>
    </ul>
    <p class="muted">{{ t('progression.xp_text_caps') }}</p>

    <h2>{{ t('progression.extras_title') }}</h2>
    <p>{{ t('progression.extras_text') }}</p>

    <h2>{{ t('progression.homework_title') }}</h2>
    <p>{{ t('progression.homework_text') }}</p>

    <h2>{{ t('progression.ranks_title') }}</h2>
    <p>{{ t('progression.ranks_text') }}</p>

    <h2>{{ t('progression.competitions_title') }}</h2>
    <p>{{ t('progression.competitions_text') }}</p>

    <h2>{{ t('progression.streaks_title') }}</h2>
    <p>{{ t('progression.streaks_text') }}</p>

    <h2>{{ t('progression.integrity_title') }}</h2>
    <p>{{ t('progression.integrity_text') }}</p>

    <h2>{{ t('progression.privacy_title') }}</h2>
    <p>{{ t('progression.privacy_text') }}</p>

    <hr />
    <p class="muted">{{ t('progression.appeals_text') }}</p>
  </main>
</template>