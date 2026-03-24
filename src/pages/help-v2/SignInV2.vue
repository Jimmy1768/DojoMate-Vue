<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.account.sign_in.badge') }}</span>
      <h1>{{ t('help_v2.account.sign_in.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.account.sign_in.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.account.sign_in.need_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.account.sign_in.need_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.account.sign_in.trouble_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.account.sign_in.trouble_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.account.sign_in.next_title') }}</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student">
          {{ t('help_v2.account.sign_in.back_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/account/reset-password">
          {{ t('help_v2.account.sign_in.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
