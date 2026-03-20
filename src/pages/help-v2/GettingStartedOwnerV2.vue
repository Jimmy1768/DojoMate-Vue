<script setup>
import V2Icon from '../../components/V2Icon.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Getting Started</span>
      <h1 class="v2-page-title"><V2Icon name="getting-started" :size="24" />Set up your academy in the right order</h1>
      <p class="muted">
        If you are starting fresh, this page gives you the simplest order to follow so the rest of the app makes sense.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Recommended order</h2>
      <ol>
        <li>Create your academy.</li>
        <li>Bring members into the academy.</li>
        <li>Create membership card templates.</li>
        <li>Issue cards to active members.</li>
        <li>Set up instructors and staff access.</li>
        <li>Create your first lesson.</li>
        <li>Add paid tools when you are ready. The Affiliate Portal includes a 90-day free Premium trial with all tools unlocked.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>Why this order helps</h2>
      <ul>
        <li>Members need to exist before you can issue them cards.</li>
        <li>Cards need to exist before booking can work properly.</li>
        <li>Instructors should be in place before you start building lessons.</li>
        <li>Paid tools work best after the core academy workflow is already running.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Start here if you are not sure</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/members">
          Bring in Members
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          Set Up Cards
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
