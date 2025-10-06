<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Contents from './Contents.vue'
import { getSearchIndex } from '../help/toc'

const { t } = useI18n()
const route = useRoute()

const query = ref('')

const index = computed(() => getSearchIndex(t))

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  const seen = new Set()
  return index.value
    .filter(item => item.text.includes(q))
    .filter(item => {
      if (seen.has(item.path)) return false
      seen.add(item.path)
      return true
    })
    .slice(0, 20)
})

async function scrollToHash() {
  if (!route.hash) return
  await nextTick()
  const el = document.querySelector(route.hash)
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }
}
onMounted(scrollToHash)
watch(() => route.hash, () => { scrollToHash() })
</script>

<template>
  <div class="help-wrap">
    <div class="split fill">
      <aside class="help-sidebar">
        <div class="search-sticky">
          <div class="stack card search-card">
            <input
              type="text"
              v-model="query"
              :placeholder="t('help.search.placeholder')"
            />
            <div v-if="query" class="stack tight">
              <div v-if="results.length === 0" class="muted">
                {{ t('help.search.no_results') }}
              </div>
              <div v-else class="stack tight" role="list">
                <router-link
                  v-for="r in results"
                  :key="r.path"
                  :to="r.path"
                  class="link"
                  role="listitem"
                >
                  {{ r.title }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <Contents />
      </aside>

      <main class="help-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.help-wrap {
  height: 68vh;
  max-height: 78vh;
}

.fill {
  height: 100%;
  overflow: hidden;
}

.help-sidebar {
  height: 100%;
  overflow: auto;
}

.help-content {
  height: 100%;
  overflow: auto;
  padding-right: 2px;
}

.split {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--space-4, 16px);
  align-items: start;
}

/* keep search pinned */
/* Sidebar search: no left shift, just a narrower card */
.search-sticky {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg, #fff);
}

/* Sidebar search: narrower visual width */
.search-card {
  position: relative;
  margin: 0 16px 0 0px;         /* top right bottom left → left side reduced by 2px */
  padding: 4px 6px;            /* tighter padding inside the card */
  border-radius: 8px;
  background: var(--color-bg, #fff);
  border: 1px solid var(--color-border, #ccc);
  box-sizing: border-box;
}

/* Input fills inside but respects margins */
.search-card input {
  width: 100%;
  padding: 4px 6px;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 6px;
  font-size: 0.9rem;
}

/* mobile layout unchanged */
@media (max-width: 720px) {
  .split { grid-template-columns: 1fr; }
  .help-sidebar { height: auto; max-height: none; }
  .help-content { height: auto; }
  .help-wrap { height: auto; max-height: none; }
}
</style>