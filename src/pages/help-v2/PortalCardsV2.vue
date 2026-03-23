<script setup>
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.portal.cards.badge') }}</span>
      <h1>{{ t('help_v2.portal.cards.title') }}</h1>
      <p class="muted">{{ t('help_v2.portal.cards.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.cards.areas_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.cards.areas_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.cards.labels_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.cards.labels_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.cards.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.cards.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.cards.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/portal/members">{{ t('help_v2.portal.cards.members_link') }}</router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/pause-cards">{{ t('help_v2.portal.cards.pause_link') }}</router-link>
        <router-link class="btn" to="/help-v2/cards">{{ t('help_v2.portal.cards.app_cards_link') }}</router-link>
      </div>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.portal.cards.support_desc')"
      :button-label="t('help_v2.portal.cards.support_button')"
    />
  </section>
</template>
