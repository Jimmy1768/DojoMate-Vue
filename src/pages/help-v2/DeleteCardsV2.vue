<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.cards.delete_card.badge') }}</span>
      <h1>{{ t('help_v2.cards.delete_card.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.cards.delete_card.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.delete_card.use_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.cards.delete_card.use_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.delete_card.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.cards.delete_card.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.delete_card.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.cards.delete_card.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards/issue-cards">
          {{ t('help_v2.cards.delete_card.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          {{ t('help_v2.cards.delete_card.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
