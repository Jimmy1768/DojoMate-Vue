<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from './locales/i18n'

const { locale, t } = useI18n()
</script>

<template>
  <div class="container stack">
    <header class="hero">
      <img class="hero-banner" src="/images/header-banner.png" alt="DojoMate Banner" />
    </header>

    <div class="topbar">
      <div class="links">
        <router-link to="/" class="link">Home</router-link>
        <a href="https://sourcecombatives.com" target="_blank" rel="noopener" class="link">Upgrade</a>
      </div>

      <div class="lang">
        <button class="btn btn--ghost" @click="setLocale('en')"   :disabled="locale === 'en'">EN</button>
        <button class="btn btn--ghost" @click="setLocale('hans')" :disabled="locale === 'hans'">简中</button>
        <button class="btn btn--ghost" @click="setLocale('hant')" :disabled="locale === 'hant'">繁中</button>
        <button class="btn btn--ghost" @click="setLocale('ko')"   :disabled="locale === 'ko'">한국어</button>
        <button class="btn btn--ghost" @click="setLocale('ja')"   :disabled="locale === 'ja'">日本語</button>
      </div>
    </div>

    <router-view />

    <footer class="site-footer text-center">
      <small class="muted">{{ t('copyright_footer') }}</small>
    </footer>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
.links {
  display: flex;
  align-items: center;
  gap: 12px; /* same horizontal rhythm as language buttons */
}
.lang {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  margin: 0;
}
.hero { border-radius: 16px; overflow: hidden; }
.hero-banner { display: block; width: 100%; height: auto; }
.site-footer { margin-top: var(--space-6); }
</style>
