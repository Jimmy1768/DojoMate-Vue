<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.members.enrollment.title') }}</h1>

    <p>{{ t('help.members.enrollment.intro') }}</p>

    <p>
      <a
        href="https://sourcecombatives.com/afl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('help.members.enrollment.portal_link') }}
      </a>
    </p>

    <p>{{ t('help.members.enrollment.portal_instructions') }}</p>
    <p>{{ t('help.members.enrollment.temp_password') }}</p>
    <p>{{ t('help.members.enrollment.roles_children') }}</p>
    <p>{{ t('help.members.enrollment.confirm') }}</p>
    <p>{{ t('help.members.enrollment.view_members') }}</p>
    <p>{{ t('help.members.enrollment.issue_cards') }}</p>
    <p>{{ t('help.members.enrollment.existing_account') }}</p>
  </section>
</template>