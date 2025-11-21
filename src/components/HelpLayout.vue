<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
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
  if (el?.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
onMounted(scrollToHash)
watch(() => route.hash, () => { scrollToHash() })

/* ---------- Responsive: only toggle on breakpoint change ---------- */
const showContents = ref(true)
let prevIsDesktop = null
function isDesktop() {
  return window.innerWidth > 720
}
function syncLayoutToViewport() {
  const nowDesktop = isDesktop()
  if (prevIsDesktop === null) {
    // First run: set initial visibility by breakpoint
    showContents.value = nowDesktop
    prevIsDesktop = nowDesktop
    return
  }
  // Only change when crossing the breakpoint (prevents keyboard-induced closes)
  if (nowDesktop !== prevIsDesktop) {
    showContents.value = nowDesktop
    prevIsDesktop = nowDesktop
  }
}
onMounted(() => {
  syncLayoutToViewport()
  window.addEventListener('resize', syncLayoutToViewport)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', syncLayoutToViewport)
})

/* Close Contents after selecting a search result (mobile only) */
function handleResultClick() {
  if (!isDesktop()) {
    setTimeout(() => {
      showContents.value = false
      query.value = '' // collapse dropdown
    }, 0)
  }
}

/* Close Contents when clicking any TOC/link inside the sidebar (mobile only) */
function handleSidebarClick(e) {
  if (isDesktop()) return

  // Ignore clicks inside the search UI (focus/typing should not close)
  if (e.target.closest('.search-card')) return

  // Only hide when an actual link in the sidebar is clicked
  const linkEl = e.target.closest('a, [role="link"], .router-link')
  if (!linkEl) return

  setTimeout(() => {
    showContents.value = false
  }, 0)
}
</script>

<template>
  <div class="help-wrap">
    <!-- Mobile toggle -->
    <div class="contents-toggle">
      <button class="btn btn--ghost" @click="showContents = !showContents">
        {{ showContents ? t('help.contents.hide', 'Hide Contents') : t('help.contents.show', 'Show Contents') }}
      </button>
    </div>

    <div class="split fill">
      <aside class="help-sidebar sticky" v-if="showContents" @click="handleSidebarClick">
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
                  @click="handleResultClick"
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

/* keep search pinned */
.search-sticky {
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg, #fff);
}

/* Sidebar search card */
.search-card {
  position: relative;
  margin: 0 16px 0 0px;  /* top right bottom left */
  padding: 4px 6px;
  border-radius: 8px;
  background: var(--color-bg, #fff);
  border: 1px solid var(--color-border, #ccc);
  box-sizing: border-box;
}
.search-card input {
  width: 100%;
  padding: 4px 6px;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 6px;
  font-size: 0.9rem;
}

/* Toggle alignment (left) */
.contents-toggle {
  display: none;
  margin: 0 0 var(--space-3, 12px) 0;
  text-align: left;
}

/* Mobile layout + refinements */
@media (max-width: 720px) {
  .help-wrap { height: auto; max-height: none; }
  .fill { height: auto; overflow: visible; }
  .help-sidebar { height: auto; max-height: none; overflow: visible; }
  .help-content { height: auto; overflow: visible; padding-right: 0; }
  .search-sticky { position: static; } /* disable sticky on mobile */
  .contents-toggle { display: block; }  /* show the toggle on mobile */

  /* Keep the search area the same width as desktop (240px) on mobile */
  .search-sticky,
  .search-card { max-width: 240px; }
  .search-card { width: 100%; margin: 0; }
}
</style>
