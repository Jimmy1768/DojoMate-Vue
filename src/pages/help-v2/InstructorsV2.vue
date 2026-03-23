<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.business.instructors.badge') }}</span>
      <h1>{{ t('help_v2.business.instructors.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.business.instructors.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.instructors.before_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.instructors.before_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.instructors.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.business.instructors.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.instructors.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.instructors.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.instructors.mistake_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.instructors.mistake_body') }}
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          {{ t('help_v2.business.instructors.compare_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.instructors.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.instructors.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business">
          {{ t('help_v2.business.instructors.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/business/staff-access">
          {{ t('help_v2.business.instructors.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
