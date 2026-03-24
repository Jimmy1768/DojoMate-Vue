<script setup>
import V2Icon from '../components/V2Icon.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.welcome.badge') }}</span>
      <h1>{{ t('help_v2.welcome.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.welcome.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.welcome.who_title') }}</h2>
      <div class="v2-home-grid">
        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="business" :size="18" />{{ t('help_v2.welcome.owner_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.welcome.owner_body') }}
          </p>
          <router-link class="link" to="/help-v2/owner">
            {{ t('help_v2.welcome.owner_link') }}
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="access" :size="18" />{{ t('help_v2.welcome.admin_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.welcome.admin_body') }}
          </p>
          <router-link class="link" to="/help-v2/admin">
            {{ t('help_v2.welcome.admin_link') }}
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="members" :size="18" />{{ t('help_v2.welcome.student_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.welcome.student_body') }}
          </p>
          <router-link class="link" to="/help-v2/student">
            {{ t('help_v2.welcome.student_link') }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.welcome.jobs_title') }}</h2>
      <div class="v2-home-grid">
        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="cards" :size="18" />{{ t('help_v2.welcome.cards_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.welcome.cards_body') }}
          </p>
          <router-link class="link" to="/help-v2/cards">
            {{ t('help_v2.welcome.cards_link') }}
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="members" :size="18" />{{ t('help_v2.welcome.members_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.welcome.members_body') }}
          </p>
          <router-link class="link" to="/help-v2/members">
            {{ t('help_v2.welcome.members_link') }}
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="tools" :size="18" />{{ t('help_v2.welcome.tools_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.welcome.tools_body') }}
          </p>
          <router-link class="link" to="/help-v2/tools">
            {{ t('help_v2.welcome.tools_link') }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.welcome.difference_title') }}</h2>
      <p class="muted">
        {{ t('help_v2.welcome.difference_body') }}
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v1">{{ t('help_v2.welcome.difference_v1') }}</router-link>
        <router-link class="btn" to="/help-v2/owner">{{ t('help_v2.welcome.difference_start') }}</router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-home-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);
}

.v2-home-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v2-home-card h3 {
  margin-top: 0;
}

.v2-home-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 720px) {
  .v2-home-grid {
    grid-template-columns: 1fr;
  }
}
</style>
