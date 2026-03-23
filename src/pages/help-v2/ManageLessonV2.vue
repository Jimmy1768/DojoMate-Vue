<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.schedule.manage.badge') }}</span>
      <h1>{{ t('help_v2.schedule.manage.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.schedule.manage.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.manage.open_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.schedule.manage.open_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.manage.actions_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.schedule.manage.actions_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.manage.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.schedule.manage.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.manage.mistake_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.schedule.manage.mistake_body') }}
      </p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.manage.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.schedule.manage.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/schedule/create-lesson">
          {{ t('help_v2.schedule.manage.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/schedule/book-for-students">
          {{ t('help_v2.schedule.manage.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
