<script setup>
import { useI18n } from 'vue-i18n'
import V2Icon from '../../components/V2Icon.vue'

const { t, tm } = useI18n()
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t('help_v2.cards.overview.badge') }}</span>
      <h1 class="v2-page-title"><V2Icon name="cards" :size="24" />{{ t('help_v2.cards.overview.title') }}</h1>
      <p class="muted">
        {{ t('help_v2.cards.overview.intro') }}
      </p>
    </div>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.overview.start_title') }}</h2>
      <div class="v2-grid">
        <article v-for="card in tm('help_v2.cards.overview.cards')" :key="card.link" class="v2-panel">
          <h3>{{ card.title }}</h3>
          <p class="muted">
            {{ card.body }}
          </p>
          <router-link class="link" :to="card.link">
            {{ card.cta }}
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.overview.know_title') }}</h2>
      <ul>
        <li v-for="item in tm('help_v2.cards.overview.know_items')" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>{{ t('help_v2.cards.overview.support_title') }}</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>{{ t('help_v2.cards.overview.support_templates_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.cards.overview.support_templates_body') }}
          </p>
          <div class="row">
            <router-link class="link" to="/help-v2/cards/edit-templates">
              {{ t('help_v2.cards.overview.edit_templates_link') }}
            </router-link>
            <router-link class="link" to="/help-v2/cards/delete-templates">
              {{ t('help_v2.cards.overview.delete_templates_link') }}
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.cards.overview.support_cleanup_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.cards.overview.support_cleanup_body') }}
          </p>
          <router-link class="link" to="/help-v2/cards/delete-cards">
            {{ t('help_v2.cards.overview.delete_cards_link') }}
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>{{ t('help_v2.cards.overview.support_records_title') }}</h3>
          <p class="muted">
            {{ t('help_v2.cards.overview.support_records_body') }}
          </p>
          <router-link class="link" to="/help-v2/cards/disputes">
            {{ t('help_v2.cards.overview.records_link') }}
          </router-link>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
}

.v2-panel {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v2-panel h3 {
  margin-top: 0;
}

.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 720px) {
  .v2-grid {
    grid-template-columns: 1fr;
  }
}
</style>
