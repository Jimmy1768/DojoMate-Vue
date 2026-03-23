<script setup>
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.portal.ranks.badge') }}</span>
      <h1>{{ t('help_v2.portal.ranks.title') }}</h1>
      <p class="muted">{{ t('help_v2.portal.ranks.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.ranks.jobs_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.ranks.jobs_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.ranks.labels_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.ranks.labels_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.ranks.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.ranks.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.ranks.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/portal/members">{{ t('help_v2.portal.ranks.members_link') }}</router-link>
        <router-link class="btn" to="/help-v2/business/analytics">{{ t('help_v2.portal.ranks.analytics_link') }}</router-link>
      </div>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.portal.ranks.support_desc')"
      :button-label="t('help_v2.portal.ranks.support_button')"
    />
  </section>
</template>
