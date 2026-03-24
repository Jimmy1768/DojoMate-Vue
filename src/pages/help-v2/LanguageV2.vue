<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.settings.language.badge') }}</span>
      <h1>{{ t('help_v2.settings.language.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.settings.language.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.settings.language.know_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.settings.language.know_body') }}
      </p>
    </section>
  </section>
</template>
