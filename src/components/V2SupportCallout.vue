<script setup>
const props = defineProps({
  boardName: {
    type: String,
    default: 'DojoMate help board'
  },
  href: {
    type: String,
    default: 'https://sourcecombatives.com/forum/dojomate-questions'
  },
  description: {
    type: String,
    default: 'Use the DojoMate help board on Source Combatives for questions, edge cases, and follow-up help across the app and connected web flows.'
  },
  buttonLabel: {
    type: String,
    default: 'Open the DojoMate Help Board'
  }
})
</script>

<template>
  <section class="v2-support-callout stack tight">
    <h2>Need more help?</h2>
    <p class="muted">
      {{ description }}
    </p>
    <div>
      <a
        class="btn btn--ghost"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ buttonLabel }}
      </a>
    </div>
  </section>
</template>
