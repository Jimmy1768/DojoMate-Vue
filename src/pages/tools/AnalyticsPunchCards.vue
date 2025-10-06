<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.analytics.punch_cards.title') }}</h1>

    <p>{{ t('help.tools.analytics.punch_cards.intro') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.usage') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.rules') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.instructors_note') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.current_limit') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.audit_intro') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.audit_steps') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.inspect') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.problems') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.actions') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.approval') }}</p>
    <p>{{ t('help.tools.analytics.punch_cards.summary') }}</p>
  </section>
</template>