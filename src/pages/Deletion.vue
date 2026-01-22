<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="stack">
    <h1>{{ t('deletion.title') }}</h1>
    <p>{{ t('deletion.intro_primary') }}</p>
    <p>{{ t('deletion.intro_secondary') }}</p>

    <section class="stack tight">
      <h2>{{ t('deletion.in_app_title') }}</h2>
      <p>{{ t('deletion.in_app_text') }}</p>
      <ul>
        <li>{{ t('deletion.in_app_item_memberships') }}</li>
        <li>{{ t('deletion.in_app_item_obligations') }}</li>
        <li>{{ t('deletion.in_app_item_access') }}</li>
      </ul>
    </section>

    <section class="stack tight">
      <h2>{{ t('deletion.member_title') }}</h2>
      <p>{{ t('deletion.member_text') }}</p>
    </section>

    <section class="stack tight">
      <h2>{{ t('deletion.owner_title') }}</h2>
      <p>{{ t('deletion.owner_text') }}</p>
      <p>{{ t('deletion.owner_review') }}</p>
    </section>

    <section class="stack tight">
      <h2>{{ t('deletion.data_title') }}</h2>
      <p>{{ t('deletion.data_text') }}</p>
    </section>

    <section class="stack tight">
      <h2>{{ t('deletion.support_title') }}</h2>
      <p>{{ t('deletion.support_text') }}</p>
      <p>{{ t('deletion.support_instructions') }}</p>
      <p>
        <strong>{{ t('deletion.contact_label') }}</strong><br />
        <a class="link" href="mailto:support@dojomateapp.com">{{ t('deletion.contact_email') }}</a>
      </p>
    </section>
  </main>
</template>
