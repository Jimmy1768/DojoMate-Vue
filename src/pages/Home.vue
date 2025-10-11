<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="stack tight text-center">
    <h1>{{ t('home.welcome') }}</h1>
    <p class="muted">{{ t('home.desc_1') }}</p>
    <p class="muted">{{ t('home.desc_2') }}</p>
  </section>

  <section class="stack mb-6">
    <h2 class="text-center">{{ t('home.download_app_title') }}</h2>
    <div class="centered gap-3 store-links">
      <a
        href="https://play.google.com/store/apps/details?id=com.jimmy1768.Thea"
        target="_blank" rel="noopener"
        aria-label="Get it on Google Play"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Get it on Google Play"
          class="store-badge"
        />
      </a>

      <a
        href="https://apps.apple.com/us/app/dojomate/id6740231616"
        target="_blank" rel="noopener"
        aria-label="Download on the App Store"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          class="store-badge"
        />
      </a>
    </div>
  </section>

  <div class="home-cards">

    <section class="card mb-6">
      <h2>{{ t('home.policies_title') }}</h2>
      <p class="muted">{{ t('home.policies_desc') }}</p>
      <div class="gap-2" style="display:flex; flex-wrap:wrap;">
        <router-link class="btn" to="/progression">
          {{ t('home.policies_progression_btn') }}
        </router-link>
        <router-link class="btn btn--ghost" to="/privacy">
          {{ t('home.policies_privacy_btn') }}
        </router-link>
      </div>
    </section>

    <section class="card mb-6">
      <h2>{{ t('home.get_started_title') }}</h2>
      <p class="muted">{{ t('home.get_started_text') }}</p>
      <router-link class="btn" to="/help">{{ t('home.help_guide_link') }}</router-link>
    </section>    

    <section class="card mb-6">
      <h2>{{ t('home.support_title') }}</h2>
      <p class="muted">{{ t('home.support_desc') }}</p>

      <div class="stack tight">
        <div>
          <strong>{{ t('home.support_app_label') }}</strong><br />
          <a class="link" href="mailto:support@dojomateapp.com">support@dojomateapp.com</a>
        </div>

        <div>
          <strong>{{ t('home.support_subs_label') }}</strong><br />
          <a class="link" href="mailto:support@sourcecombatives.com">support@sourcecombatives.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* [][][] */
  gap: var(--space-4);
  align-items: stretch; /* even heights if content differs */
}

/* Stack on phones: 
   [] 
   [] 
   [] 
*/
@media (max-width: 768px) {
  .home-cards {
    grid-template-columns: 1fr;
  }
}
</style>
