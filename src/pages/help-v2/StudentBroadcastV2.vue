<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.student.broadcast.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="broadcast" :size="24" />{{ t('help_v2.student.broadcast.title') }}</h1>
      <p class="muted">{{ t('help_v2.student.broadcast.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.broadcast.where_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.broadcast.where_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.broadcast.actions_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.broadcast.actions_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.broadcast.screen_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.broadcast.screen_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.broadcast.limits_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.broadcast.limits_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.student.broadcast.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.student.broadcast.know_items')" :key="item">{{ item }}</li>
      </ul>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student/join-academy">{{ t('help_v2.student.broadcast.join_link') }}</router-link>
        <router-link class="btn" to="/help-v2/student/system-alerts">{{ t('help_v2.student.broadcast.alerts_link') }}</router-link>
      </div>
    </section>

    <V2SupportCallout />
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
