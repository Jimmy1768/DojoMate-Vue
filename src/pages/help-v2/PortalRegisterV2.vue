<script setup>
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.portal.register.badge') }}</span>
      <h1>{{ t('help_v2.portal.register.title') }}</h1>
      <p class="muted">{{ t('help_v2.portal.register.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.register.flow_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.portal.register.flow_steps')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.register.labels_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.register.labels_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.register.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.portal.register.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.portal.register.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/portal/members">{{ t('help_v2.portal.register.members_link') }}</router-link>
        <router-link class="btn" to="/help-v2/portal/cards">{{ t('help_v2.portal.register.cards_link') }}</router-link>
      </div>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.portal.register.support_desc')"
      :button-label="t('help_v2.portal.register.support_button')"
    />
  </section>
</template>
