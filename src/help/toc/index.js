// src/help/toc/index.js
import { memberSections } from './member.js'
import { ownerSections } from './owner.js'
import { adminSections } from './admin.js'
import { toolsSections } from './tools.js'   // ✅ new import

// Merge in the desired order
export const sections = [
  ...memberSections,
  ...ownerSections,
  ...adminSections,
  ...toolsSections    // ✅ add tools at the end
]

// Flat list used by search to index (title + short body copy only).
export const searchPages = sections.flatMap(sec =>
  sec.items.map(({ path, titleKey, bodyKeys = [] }) => ({
    path,
    titleKey,
    bodyKeys
  }))
)

/** Build localized TOC structure for rendering in Contents.vue */
export function getToc(t) {
  return sections.map(sec => ({
    section: t(sec.sectionKey),
    items: sec.items.map(item => ({
      path: item.path,
      label: t(item.labelKey)
    }))
  }))
}

/** Build localized search index used in HelpLayout.vue */
export function getSearchIndex(t) {
  return searchPages.map(p => {
    const title = t(p.titleKey) || ''
    const bodies = (p.bodyKeys || []).map(k => t(k) || '')
    return {
      path: p.path,
      title,
      text: [title, ...bodies].join(' ').toLowerCase()
    }
  })
}