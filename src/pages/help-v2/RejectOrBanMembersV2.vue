<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.members.reject.badge') }}</span>
      <h1>{{ t('help_v2.members.reject.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.members.reject.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.reject.reject_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.members.reject.reject_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.reject.ban_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.members.reject.ban_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.reject.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.members.reject.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.reject.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/members">
          {{ t('help_v2.members.reject.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          {{ t('help_v2.members.reject.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
