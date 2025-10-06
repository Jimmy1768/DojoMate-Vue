<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack">
    <h1>{{ t('help.tools.staff_permissions.title') }}</h1>

    <p>{{ t('help.tools.staff_permissions.intro') }}</p>
    <p>{{ t('help.tools.staff_permissions.add_staff') }}</p>
    <p>{{ t('help.tools.staff_permissions.set_permissions') }}</p>

    <ul class="stack tight">
      <li>{{ t('help.tools.staff_permissions.make_admin') }}</li>
      <li>{{ t('help.tools.staff_permissions.schedule') }}</li>
      <li>{{ t('help.tools.staff_permissions.members') }}</li>
      <li>{{ t('help.tools.staff_permissions.cards') }}</li>
      <li>{{ t('help.tools.staff_permissions.timetable') }}</li>
    </ul>

    <p>{{ t('help.tools.staff_permissions.confirm') }}</p>
    <p>{{ t('help.tools.staff_permissions.trial_expiry') }}</p>
    <p>{{ t('help.tools.staff_permissions.remove_staff') }}</p>
  </section>
</template>