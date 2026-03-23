<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">{{ t('help_v2.tools.broadcast.badge') }}</span>
        <span class="badge badge--premium">{{ t('help_v2.tools.broadcast.paid_badge') }}</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="broadcast" :size="24" />{{ t('help_v2.tools.broadcast.title') }}</h1>
      <p class="muted">{{ t('help_v2.tools.broadcast.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.broadcast.where_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.broadcast.where_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.broadcast.flow_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.tools.broadcast.flow_steps')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.broadcast.labels_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.broadcast.labels_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.broadcast.lifecycle_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.broadcast.lifecycle_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.broadcast.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.broadcast.know_items')" :key="item">{{ item }}</li>
      </ul>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">{{ t('help_v2.tools.broadcast.features_link') }}</router-link>
        <router-link class="btn" to="/help-v2/student/broadcast">{{ t('help_v2.tools.broadcast.student_link') }}</router-link>
      </div>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      :description="t('help_v2.tools.broadcast.support_desc')"
      :button-label="t('help_v2.tools.broadcast.support_button')"
    />
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
