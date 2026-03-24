<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.owner_setup.create.badge') }}</span>
      <h1>{{ t('help_v2.owner_setup.create.title') }}</h1>
      <p class="muted">{{ t('help_v2.owner_setup.create.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.create.before_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.owner_setup.create.before_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.create.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.owner_setup.create.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.create.next_title') }}</h2>
      <p class="muted">{{ t('help_v2.owner_setup.create.next_body') }}</p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/owner">
          {{ t('help_v2.owner_setup.create.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/business/academy-basics">
          {{ t('help_v2.owner_setup.create.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
