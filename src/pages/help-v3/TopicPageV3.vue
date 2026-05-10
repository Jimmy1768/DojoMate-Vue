<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import V2Icon from '../../components/V2Icon.vue'
import V3SupportCallout from '../../components/V3SupportCallout.vue'

const { t, te, tm } = useI18n()

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

function readArrayMessage(key) {
  const value = tm(key)
  return Array.isArray(value) ? value : []
}

const sections = computed(() => {
  const keys = [
    { title: 'steps_title', items: 'steps_items', body: 'steps_body' },
    { title: 'what_title', items: 'what_items', body: 'what_body' },
    { title: 'where_title', items: 'where_items', body: 'where_body' },
    { title: 'limits_title', items: 'limits_items', body: 'limits_body' },
    { title: 'results_title', items: 'results_items', body: 'results_body' }
  ]

  return keys
    .map((section) => {
      const titleKey = `${props.baseKey}.${section.title}`
      const itemsKey = `${props.baseKey}.${section.items}`
      const bodyKey = `${props.baseKey}.${section.body}`
      if (!te(titleKey)) return null
      const items = readArrayMessage(itemsKey)
      return {
        title: t(titleKey),
        items,
        body: te(bodyKey) ? t(bodyKey) : null
      }
    })
    .filter(Boolean)
    .filter((section) => section.items.length || section.body)
})

const nextLinks = computed(() => {
  return readArrayMessage(`${props.baseKey}.next_links`)
})
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">{{ t(`${baseKey}.badge`) }}</span>
      <h1 class="v3-page-title"><V2Icon :name="icon" :size="24" />{{ t(`${baseKey}.title`) }}</h1>
      <p class="muted">{{ t(`${baseKey}.intro`) }}</p>
    </div>

    <section
      v-for="section in sections"
      :key="section.title"
      class="card stack tight"
    >
      <h2>{{ section.title }}</h2>
      <ul v-if="section.items.length">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
      <p v-else-if="section.body" class="muted">{{ section.body }}</p>
    </section>

    <section v-if="nextLinks.length" class="card stack tight">
      <h2>{{ t(`${baseKey}.next_title`) }}</h2>
      <div class="row wrap">
        <router-link
          v-for="link in nextLinks"
          :key="link.to"
          class="btn btn--ghost"
          :to="link.to"
        >
          {{ link.label }}
        </router-link>
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
</style>
