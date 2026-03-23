<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.members.applications.badge') }}</span>
      <h1>{{ t('help_v2.members.applications.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.members.applications.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.applications.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.members.applications.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.applications.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.members.applications.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.applications.why_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.members.applications.why_body') }}
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/members/quick-enrollment-vs-applications">
          {{ t('help_v2.members.applications.compare_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.applications.mistake_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.members.applications.mistake_body') }}
      </p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.members.applications.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.members.applications.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/members">
          {{ t('help_v2.members.applications.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/cards/issue-cards">
          {{ t('help_v2.members.applications.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
