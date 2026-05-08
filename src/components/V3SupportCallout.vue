<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  href: {
    type: String,
    default: 'https://sourcecombatives.com/forum/dojomate-questions'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  buttonLabel: {
    type: String,
    default: ''
  }
})

const titleText = computed(() => props.title || t('help_v3.support.heading'))
const descriptionText = computed(() => props.description || t('help_v3.support.default_description'))
const buttonText = computed(() => props.buttonLabel || t('help_v3.support.default_button'))
</script>

<template>
  <section class="v3-support-callout stack tight">
    <h2>{{ titleText }}</h2>
    <p class="muted">
      {{ descriptionText }}
    </p>
    <div>
      <a
        class="btn btn--ghost"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ buttonText }}
      </a>
    </div>
  </section>
</template>
