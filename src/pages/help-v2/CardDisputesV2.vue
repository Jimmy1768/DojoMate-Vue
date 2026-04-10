<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.cards.disputes.badge') }}</span>
      <h1>{{ t('help_v2.cards.disputes.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.cards.disputes.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.disputes.review_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.cards.disputes.review_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.disputes.when_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.cards.disputes.when_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.disputes.know_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.cards.disputes.know_body') }}
      </p>
    </section>
  </section>
</template>
