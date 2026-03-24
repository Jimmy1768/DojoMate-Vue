<script setup>
import V2Icon from '../../components/V2Icon.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">{{ t('help_v2.tools.pause.badge') }}</span>
        <span class="badge badge--premium">{{ t('help_v2.tools.pause.paid_badge') }}</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="pause-cards" :size="24" />{{ t('help_v2.tools.pause.title') }}</h1>
      <p class="muted">{{ t('help_v2.tools.pause.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.pause.modes_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.pause.modes_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.pause.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.tools.pause.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.pause.common_title') }}</h2>
      <p class="muted">{{ t('help_v2.tools.pause.common_body') }}</p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.tools.pause.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/tools">
          {{ t('help_v2.tools.pause.back_tools') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          {{ t('help_v2.tools.pause.activate_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          {{ t('help_v2.tools.pause.back_cards') }}
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
