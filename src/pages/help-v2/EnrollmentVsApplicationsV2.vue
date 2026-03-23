<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.members.compare.badge') }}</span>
      <h1>{{ t('help_v2.members.compare.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.members.compare.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.compare.quick_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.members.compare.quick_items')" :key="item">{{ item }}</li>
      </ul>
      <div>
        <router-link class="link" to="/help-v2/members/quick-enrollment">
          {{ t('help_v2.members.compare.quick_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.compare.apps_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.members.compare.apps_items')" :key="item">{{ item }}</li>
      </ul>
      <div>
        <router-link class="link" to="/help-v2/members/applications">
          {{ t('help_v2.members.compare.apps_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.compare.rule_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.members.compare.rule_body') }}
      </p>
    </section>
  </section>
</template>
