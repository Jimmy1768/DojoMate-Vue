<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.prologue.title') }}</h1>

    <p>
      {{ t('help.tools.prologue.intro_1') }}
      <a href="https://sourcecombatives.com" target="_blank" rel="noopener">
        {{ t('help.tools.prologue.intro_link') }}
      </a>
      {{ t('help.tools.prologue.intro_2') }}
    </p>

    <p>{{ t('help.tools.prologue.available') }}</p>
    <p>{{ t('help.tools.prologue.pricing') }}</p>
  </section>
</template>