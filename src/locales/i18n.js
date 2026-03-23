// locales/i18n.js
import { createI18n } from 'vue-i18n'

// Keep file names exactly as on disk
import en from './en.json'
import hans from './hans.json'  // Simplified Chinese
import hant from './hant.json'  // Traditional Chinese
import ko from './ko.json'
import ja from './ja.json'
import pt from './pt.json'
import enV2 from './v2/en'
import hansV2 from './v2/hans'

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
  hans: mergeMessages(hans, hansV2),
  hant,
  ko,
  ja,
  pt,
}

const saved = localStorage.getItem('locale') || 'en'
const initialLocale = Object.prototype.hasOwnProperty.call(messages, saved) ? saved : 'en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,   // enables use of $t in templates
  locale: initialLocale,
  fallbackLocale: 'en',
  messages,
})

export function setLocale(locale) {
  const valid = Object.prototype.hasOwnProperty.call(messages, locale)
  const next = valid ? locale : 'en'
  i18n.global.locale.value = next
  localStorage.setItem('locale', next)
}

export default i18n
