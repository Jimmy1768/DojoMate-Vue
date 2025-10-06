<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.pause_cards.title') }}</h1>

    <p>{{ t('help.tools.pause_cards.intro') }}</p>
    <p>{{ t('help.tools.pause_cards.individual') }}</p>
    <p>{{ t('help.tools.pause_cards.academy_wide') }}</p>
    <p>{{ t('help.tools.pause_cards.template_toggle') }}</p>

    <ul class="stack tight">
      <li>{{ t('help.tools.pause_cards.no_booking') }}</li>
      <li>{{ t('help.tools.pause_cards.independence') }}</li>
    </ul>
  </section>
</template>