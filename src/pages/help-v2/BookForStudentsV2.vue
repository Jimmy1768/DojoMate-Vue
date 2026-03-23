<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.schedule.booking.badge') }}</span>
      <h1>{{ t('help_v2.schedule.booking.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.schedule.booking.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.booking.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.schedule.booking.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.booking.unbook_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.schedule.booking.unbook_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.booking.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.schedule.booking.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.booking.mistake_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.schedule.booking.mistake_body') }}
      </p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.schedule.booking.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.schedule.booking.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/schedule/create-lesson">
          {{ t('help_v2.schedule.booking.create_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/schedule/manage-lesson">
          {{ t('help_v2.schedule.booking.manage_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
