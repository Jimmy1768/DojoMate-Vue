import enV2 from '../src/locales/v2/en.js'
import { searchPages } from '../src/help-v3/search.js'
import { v3AllPaths, v3RoleHubs, v3TopicRoutes } from '../src/help-v3/routes.js'

function get(obj, key) {
  return key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), obj)
}

const errors = []

const fullSearchPaths = searchPages.map((page) => page.path)
const uniqueSearchPaths = new Set(fullSearchPaths)
if (uniqueSearchPaths.size !== fullSearchPaths.length) {
  errors.push('Duplicate path found in src/help-v3/search.js')
}

for (const page of searchPages) {
  if (!v3AllPaths.includes(page.path)) {
    errors.push(`Search path missing from v3 routes: ${page.path}`)
  }

  if (get(enV2, page.titleKey) === undefined) {
    errors.push(`Missing English title key: ${page.titleKey}`)
  }

  for (const key of page.bodyKeys || []) {
    if (get(enV2, key) === undefined) {
      errors.push(`Missing English body key: ${key}`)
    }
  }
}

for (const route of [...v3RoleHubs, ...v3TopicRoutes]) {
  for (const suffix of ['badge', 'title', 'intro']) {
    const key = `${route.baseKey}.${suffix}`
    if (get(enV2, key) === undefined) {
      errors.push(`Missing required route base key field: ${key}`)
    }
  }
}

if (errors.length > 0) {
  console.error('Help v3 sanity check failed:\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Help v3 sanity check passed (${searchPages.length} search entries, ${v3AllPaths.length} routes).`)
