<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.portal.prologue.title') }}</h1>

    <p>
      {{ t('help.members.portal.prologue.intro_1') }}
      <a href="https://sourcecombatives.com/afl" target="_blank" rel="noopener noreferrer">
        {{ t('help.members.portal.prologue.intro_link') }}
      </a>
      {{ t('help.members.portal.prologue.intro_2') }}
    </p>

    <p>{{ t('help.members.portal.prologue.requirement') }}</p>
    <p>{{ t('help.members.portal.prologue.available') }}</p>
  </section>
</template>
