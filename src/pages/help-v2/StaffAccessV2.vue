<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">{{ t('help_v2.business.staff_access.badge') }}</span>
        <span class="badge badge--premium">{{ t('help_v2.business.staff_access.paid_badge') }}</span>
      </div>
      <h1>{{ t('help_v2.business.staff_access.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.business.staff_access.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.staff_access.use_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.staff_access.use_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.staff_access.steps_title') }}</h2>
      <ol>
        <li v-for="item in tm('help_v2.business.staff_access.steps_items')" :key="item">{{ item }}</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.staff_access.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.business.staff_access.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.staff_access.mistake_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.staff_access.mistake_body') }}
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          {{ t('help_v2.business.staff_access.compare_link') }}
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.staff_access.remove_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.staff_access.remove_body') }}
      </p>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.business.staff_access.next_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.business.staff_access.next_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          {{ t('help_v2.business.staff_access.back_link') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          {{ t('help_v2.business.staff_access.activate_link') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          {{ t('help_v2.business.staff_access.compare_pages_link') }}
        </router-link>
        <router-link class="btn" to="/help-v2/business/analytics">
          {{ t('help_v2.business.staff_access.next_link') }}
        </router-link>
      </div>
    </section>
  </section>
</template>
