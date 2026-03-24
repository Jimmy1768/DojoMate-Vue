<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.owner_setup.basics.badge') }}</span>
      <h1>{{ t('help_v2.owner_setup.basics.title') }}</h1>
      <p class="muted">{{ t('help_v2.owner_setup.basics.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.basics.use_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.owner_setup.basics.use_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.basics.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.owner_setup.basics.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.basics.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/create-academy">
          {{ t('help_v2.owner_setup.basics.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/business/academy-qr">
          {{ t('help_v2.owner_setup.basics.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
