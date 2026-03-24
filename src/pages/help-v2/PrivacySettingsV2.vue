<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.settings.privacy.badge') }}</span>
      <h1>{{ t('help_v2.settings.privacy.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.settings.privacy.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.settings.privacy.main_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.settings.privacy.main_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.settings.privacy.progression_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.settings.privacy.progression_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.settings.privacy.child_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.settings.privacy.child_body') }}
      </p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.settings.privacy.know_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.settings.privacy.know_body') }}
      </p>
    </section>
  </section>
</template>
