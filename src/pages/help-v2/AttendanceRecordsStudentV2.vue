<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.student.attendance.badge') }}</span>
      <h1>{{ t('help_v2.student.attendance.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.student.attendance.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.attendance.help_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.attendance.help_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.attendance.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.attendance.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>
  </section>
</template>
