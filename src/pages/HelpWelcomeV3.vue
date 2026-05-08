<script setup>
import V2Icon from '../components/V2Icon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cards = [
  { to: '/help-v3/member', icon: 'members', titleKey: 'help_v3.welcome.member_title', bodyKey: 'help_v3.welcome.member_body', linkKey: 'help_v3.welcome.member_link' },
  { to: '/help-v3/admin', icon: 'access', titleKey: 'help_v3.welcome.admin_title', bodyKey: 'help_v3.welcome.admin_body', linkKey: 'help_v3.welcome.admin_link' },
  { to: '/help-v3/owner', icon: 'business', titleKey: 'help_v3.welcome.owner_title', bodyKey: 'help_v3.welcome.owner_body', linkKey: 'help_v3.welcome.owner_link' },
  { to: '/help-v3/account', icon: 'members', titleKey: 'help_v3.welcome.account_title', bodyKey: 'help_v3.welcome.account_body', linkKey: 'help_v3.welcome.account_link' }
]
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v3.welcome.badge') }}</span>
      <h1>{{ t('help_v3.welcome.title') }}</h1>
      <p class="muted">{{ t('help_v3.welcome.intro') }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v3.welcome.areas_title') }}</h2>
      <div class="v3-grid">
        <article v-for="card in cards" :key="card.to" class="v3-panel">
          <h3 class="v3-title"><V2Icon :name="card.icon" :size="18" />{{ t(card.titleKey) }}</h3>
          <p class="muted">{{ t(card.bodyKey) }}</p>
          <router-link class="link" :to="card.to">
            {{ t(card.linkKey) }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v3.welcome.note_title') }}</h2>
      <p class="muted">{{ t('help_v3.welcome.note_body') }}</p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2">
          {{ t('help_v3.welcome.note_button') }}
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v3-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);
}

.v3-panel {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v3-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 720px) {
  .v3-grid {
    grid-template-columns: 1fr;
  }
}
</style>
