<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.settings.logout.badge') }}</span>
      <h1>{{ t('help_v2.settings.logout.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.settings.logout.intro') }}
      </p>
    </div>
  </section>
</template>
