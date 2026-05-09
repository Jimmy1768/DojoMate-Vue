// locales/i18n.js
import { createI18n } from 'vue-i18n'

// Keep file names exactly as on disk
import en from './en.json'
import enV2 from './v2/en'

function mergeMessages(base, extra) {
  const output = { ...base }

  Object.entries(extra).forEach(([key, value]) => {
    if (Array.isArray(value) || typeof value !== 'object' || value === null) {
      output[key] = value
      return
    }

    const baseValue = output[key]
    if (typeof baseValue === 'object' && baseValue !== null && !Array.isArray(baseValue)) {
      output[key] = mergeMessages(baseValue, value)
    } else {
      output[key] = mergeMessages({}, value)
    }
  })

  return output
}

const messages = {
  en: mergeMessages(en, enV2),
}

const localeLoaders = {
  hans: async () => {
    const [{ default: base }, { default: extra }] = await Promise.all([
      import('./hans.json'),
      import('./v2/hans.js'),
    ])
    return mergeMessages(base, extra)
  },
  hant: async () => {
    const [{ default: base }, { default: extra }] = await Promise.all([
      import('./hant.json'),
      import('./v2/hant.js'),
    ])
    return mergeMessages(base, extra)
  },
  ja: async () => {
    const [{ default: base }, { default: extra }] = await Promise.all([
      import('./ja.json'),
      import('./v2/ja.js'),
    ])
    return mergeMessages(base, extra)
  },
  ko: async () => {
    const [{ default: base }, { default: extra }] = await Promise.all([
      import('./ko.json'),
      import('./v2/ko.js'),
    ])
    return mergeMessages(base, extra)
  },
  pt: async () => {
    const [{ default: base }, { default: extra }] = await Promise.all([
      import('./pt.json'),
      import('./v2/pt.js'),
    ])
    return mergeMessages(base, extra)
  },
}

const supportedLocales = ['en', ...Object.keys(localeLoaders)]

const saved = localStorage.getItem('locale') || 'en'
const initialLocale = supportedLocales.includes(saved) ? saved : 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,   // enables use of $t in templates
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})

async function ensureLocaleMessages(locale) {
  if (locale === 'en') return 'en'

  if (i18n.global.availableLocales.includes(locale)) {
    return locale
  }

  const load = localeLoaders[locale]
  if (!load) return 'en'

  const message = await load()
  i18n.global.setLocaleMessage(locale, message)
  return locale
}

export async function initializeI18n() {
  const next = await ensureLocaleMessages(initialLocale)
  i18n.global.locale.value = next
  localStorage.setItem('locale', next)
}

export async function setLocale(locale) {
  const next = await ensureLocaleMessages(locale)
  i18n.global.locale.value = next
  localStorage.setItem('locale', next)
}

export default i18n
