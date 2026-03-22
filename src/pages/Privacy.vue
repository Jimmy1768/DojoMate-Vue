<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
</script>

<template>
  <main class="stack">
    <h1>{{ t('privacy.title') }}</h1>
    <p class="muted">{{ t('privacy.effective_date') }}</p>
    <p>{{ t('privacy.intro') }}</p>

    <h2>{{ t('privacy.scope.title') }}</h2>
    <p>{{ t('privacy.scope.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.scope.items')" :key="item">{{ item }}</li>
    </ul>

    <h2>{{ t('privacy.collect.title') }}</h2>
    <p>{{ t('privacy.collect.intro') }}</p>

    <h3>{{ t('privacy.collect.account.title') }}</h3>
    <p>{{ t('privacy.collect.account.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.account.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.collect.account.extra_intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.account.extra_items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.collect.account.extra_note') }}</p>

    <h3>{{ t('privacy.collect.attendance.title') }}</h3>
    <p>{{ t('privacy.collect.attendance.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.attendance.items')" :key="item">{{ item }}</li>
    </ul>

    <h3>{{ t('privacy.collect.payment.title') }}</h3>
    <p>{{ t('privacy.collect.payment.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.payment.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.collect.payment.note') }}</p>

    <h3>{{ t('privacy.collect.edu.title') }}</h3>
    <p>{{ t('privacy.collect.edu.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.edu.items')" :key="item">{{ item }}</li>
    </ul>

    <h3>{{ t('privacy.collect.progression.title') }}</h3>
    <p>{{ t('privacy.collect.progression.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.progression.items')" :key="item">{{ item }}</li>
    </ul>
    <p>
      {{ t('privacy.collect.progression.note') }}
      <router-link class="link" to="/progression">Progression</router-link>.
    </p>

    <h3>{{ t('privacy.collect.device.title') }}</h3>
    <p>{{ t('privacy.collect.device.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.collect.device.items')" :key="item">{{ item }}</li>
    </ul>

    <h2>{{ t('privacy.use.title') }}</h2>
    <p>{{ t('privacy.use.intro') }}</p>

    <h3>{{ t('privacy.use.operate.title') }}</h3>
    <p>{{ t('privacy.use.operate.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.use.operate.items')" :key="item">{{ item }}</li>
    </ul>

    <h3>{{ t('privacy.use.analytics.title') }}</h3>
    <p>{{ t('privacy.use.analytics.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.use.analytics.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.use.analytics.note') }}</p>

    <h3>{{ t('privacy.use.communicate.title') }}</h3>
    <p>{{ t('privacy.use.communicate.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.use.communicate.items')" :key="item">{{ item }}</li>
    </ul>

    <h3>{{ t('privacy.use.personalize.title') }}</h3>
    <p>{{ t('privacy.use.personalize.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.use.personalize.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.use.personalize.note') }}</p>

    <h2>{{ t('privacy.recommendations.title') }}</h2>
    <p>{{ t('privacy.recommendations.intro') }}</p>
    <p>{{ t('privacy.recommendations.body') }}</p>
    <ul>
      <li v-for="item in tm('privacy.recommendations.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.recommendations.child_note') }}</p>
    <p>{{ t('privacy.recommendations.aggregate_note') }}</p>

    <h2>{{ t('privacy.public_features.title') }}</h2>
    <p>{{ t('privacy.public_features.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.public_features.items')" :key="item">{{ item }}</li>
    </ul>
    <p>
      {{ t('privacy.public_features.note') }}
      <router-link class="link" to="/progression">Progression</router-link>.
    </p>

    <h2>{{ t('privacy.retention.title') }}</h2>
    <p>{{ t('privacy.retention.intro') }}</p>

    <h3>{{ t('privacy.retention.active.title') }}</h3>
    <p>{{ t('privacy.retention.active.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.retention.active.items')" :key="item">{{ item }}</li>
    </ul>

    <h3>{{ t('privacy.retention.long_term.title') }}</h3>
    <p>{{ t('privacy.retention.long_term.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.retention.long_term.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.retention.long_term.note') }}</p>

    <h3>{{ t('privacy.retention.deleted.title') }}</h3>
    <p>{{ t('privacy.retention.deleted.intro') }}</p>
    <p>{{ t('privacy.retention.deleted.note') }}</p>

    <h2>{{ t('privacy.controls.title') }}</h2>
    <p>{{ t('privacy.controls.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.controls.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.controls.note') }}</p>
    <ul>
      <li v-for="item in tm('privacy.controls.notes')" :key="item">{{ item }}</li>
    </ul>

    <h2>{{ t('privacy.child_data.title') }}</h2>
    <p>{{ t('privacy.child_data.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.child_data.items')" :key="item">{{ item }}</li>
    </ul>

    <h2>{{ t('privacy.sharing.title') }}</h2>
    <p>{{ t('privacy.sharing.intro') }}</p>
    <ul>
      <li v-for="item in tm('privacy.sharing.items')" :key="item">{{ item }}</li>
    </ul>
    <p>{{ t('privacy.sharing.note_1') }}</p>
    <p>{{ t('privacy.sharing.note_2') }}</p>

    <h2>{{ t('privacy.security.title') }}</h2>
    <p>{{ t('privacy.security.intro') }}</p>
    <p>{{ t('privacy.security.note') }}</p>

    <h2>{{ t('privacy.international.title') }}</h2>
    <p>{{ t('privacy.international.intro') }}</p>
    <p>{{ t('privacy.international.note') }}</p>

    <h2>{{ t('privacy.changes.title') }}</h2>
    <p>{{ t('privacy.changes.intro') }}</p>
    <p>{{ t('privacy.changes.note') }}</p>

    <h2>{{ t('privacy.contact.title') }}</h2>
    <p>{{ t('privacy.contact.intro') }}</p>
    <p>{{ t('privacy.contact.value') }}</p>
  </main>
</template>
