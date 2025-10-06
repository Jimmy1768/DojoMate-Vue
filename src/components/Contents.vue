<template>
  <nav class="stack" aria-label="Help table of contents">
    <div
      v-for="section in toc"
      :key="section.id || section.section"
      class="stack"
    >
      <!-- Stable anchor for jump links, e.g. #toc-cards -->
      <h3 class="muted" :id="`toc-${section.id}`">{{ section.section }}</h3>

      <div class="stack tight" role="list">
        <RouterLink
          v-for="item in section.items"
          :key="keyFromTo(item.path)"
          :to="item.path"
          class="link"
          role="listitem"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { getToc } from '../help/toc'

const { t } = useI18n()
const toc = computed(() => getToc(t))

// stable key whether item.path is string or { name/path, hash }
const keyFromTo = (to) => {
  if (typeof to === 'string') return to
  const base = to?.name ?? to?.path ?? ''
  const hash = to?.hash ?? ''
  return `${base}${hash}`
}
</script>

<style scoped>
/* TOC-only; sidebar scroll/height is provided by the parent (HelpLayout + global CSS) */
</style>