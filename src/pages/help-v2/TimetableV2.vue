<script setup>
import V2Icon from '../../components/V2Icon.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">{{ t('help_v2.tools.timetable.badge') }}</span>
        <span class="badge badge--premium">{{ t('help_v2.tools.timetable.paid_badge') }}</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="timetable" :size="24" />{{ t('help_v2.tools.timetable.title') }}</h1>
      <p class="muted">{{ t('help_v2.tools.timetable.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.timetable.use_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.timetable.use_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.timetable.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.tools.timetable.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.timetable.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.timetable.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.timetable.publish_title') }}</h2>
      <p class="muted">{{ t('help_v2.tools.timetable.publish_body_1') }}</p>
      <p class="muted">{{ t('help_v2.tools.timetable.publish_body_2') }}</p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.timetable.mistake_title') }}</h2>
      <p class="muted">{{ t('help_v2.tools.timetable.mistake_body') }}</p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          {{ t('help_v2.tools.timetable.activate_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
