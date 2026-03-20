<script setup>
import V2Icon from '../../components/V2Icon.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">Tools</span>
        <span class="badge badge--premium">Paid Tool</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="pause-cards" :size="24" />Pause active cards when needed</h1>
      <p class="muted">
        Use <strong>Pause Cards</strong> when you need to stop card time temporarily instead of letting the card keep expiring normally.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Two ways to pause cards</h2>
      <ul>
        <li><strong>Individual pause:</strong> pause or unpause one member’s card from that member’s profile.</li>
        <li><strong>Academy-wide pause:</strong> owners can pause cards across the whole academy.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Paused cards cannot be used for booking.</li>
        <li>Each card template can be excluded from academy-wide pause if needed.</li>
        <li>If a member was already paused individually before an academy-wide pause, they will still be paused after the academy-wide pause ends.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Most common use</h2>
      <p class="muted">
        Owners often use this tool when they want to protect member time without manually extending expiry dates one card at a time.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/tools">
          Back to Tools Overview
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          Activate Tools and Premium
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          Back to Cards
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
