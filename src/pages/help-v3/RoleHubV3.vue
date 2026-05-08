<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V3SupportCallout from '../../components/V3SupportCallout.vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const props = defineProps({
  baseKey: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const linkGroups = tm(`${props.baseKey}.links`)
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t(`${baseKey}.badge`) }}</span>
      <h1 class="v3-page-title"><V2Icon :name="icon" :size="24" />{{ t(`${baseKey}.title`) }}</h1>
      <p class="muted">{{ t(`${baseKey}.intro`) }}</p>
    </div>

    <section class="card stack tight">
      <h2>{{ t(`${baseKey}.areas_title`) }}</h2>
      <div class="v3-grid">
        <article v-for="group in linkGroups" :key="group.title" class="v3-panel">
          <h3>{{ group.title }}</h3>
          <p class="muted">{{ group.body }}</p>
          <div class="stack tight">
            <router-link
              v-for="link in group.links"
              :key="link.to"
              class="link"
              :to="link.to"
            >
              {{ link.label }}
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <V3SupportCallout />
  </section>
</template>

<style scoped>
.v3-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.v3-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
}

.v3-panel {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v3-panel h3 {
  margin-top: 0;
}

@media (max-width: 720px) {
  .v3-grid {
    grid-template-columns: 1fr;
  }
}
</style>
