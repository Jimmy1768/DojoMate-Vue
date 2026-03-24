<script setup>
import V2Icon from '../../components/V2Icon.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.owner_setup.getting_started.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="getting-started" :size="24" />{{ t('help_v2.owner_setup.getting_started.title') }}</h1>
      <p class="muted">{{ t('help_v2.owner_setup.getting_started.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.getting_started.order_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.owner_setup.getting_started.order_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.getting_started.why_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.owner_setup.getting_started.why_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.getting_started.start_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/create-academy">
          {{ t('help_v2.owner_setup.getting_started.create_link') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/members">
          {{ t('help_v2.owner_setup.getting_started.members_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          {{ t('help_v2.owner_setup.getting_started.cards_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
