<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.owner_setup.delete.badge') }}</span>
      <h1>{{ t('help_v2.owner_setup.delete.title') }}</h1>
      <p class="muted">{{ t('help_v2.owner_setup.delete.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.delete.before_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.owner_setup.delete.before_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.delete.meaning_title') }}</h2>
      <p class="muted">{{ t('help_v2.owner_setup.delete.meaning_body') }}</p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.owner_setup.delete.help_title') }}</h2>
      <p class="muted">{{ t('help_v2.owner_setup.delete.help_body') }}</p>
      <div class="row">
        <a
          class="btn btn--ghost"
          href="https://sourcecombatives.com/forum/dojomate-questions"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('help_v2.owner_setup.delete.help_link') }}
        </a>
        <router-link class="btn" to="/help-v2/owner">
          {{ t('help_v2.owner_setup.delete.back_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
