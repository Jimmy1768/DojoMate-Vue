<script setup>
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.portal.payouts.badge') }}</span>
      <h1>{{ t('help_v2.portal.payouts.title') }}</h1>
      <p class="muted">{{ t('help_v2.portal.payouts.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.payouts.setup_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.payouts.setup_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.payouts.readiness_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.payouts.readiness_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.payouts.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.payouts.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.portal.payouts.support_desc')"
      :button-label="t('help_v2.portal.payouts.support_button')"
    />
  </section>
</template>
