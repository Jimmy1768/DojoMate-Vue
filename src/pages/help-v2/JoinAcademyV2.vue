<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.student.join.badge') }}</span>
      <h1>{{ t('help_v2.student.join.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.student.join.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.join.find_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.join.find_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.join.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.student.join.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.join.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.join.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.join.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student">
          {{ t('help_v2.student.join.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/student/memberships">
          {{ t('help_v2.student.join.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
