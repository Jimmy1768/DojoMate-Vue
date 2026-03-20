<script setup>
import V2Icon from '../components/V2Icon.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Preview</span>
      <h1>Help Guide v2</h1>
      <p class="muted">
        This version is being rebuilt around the person using DojoMate, not just the screen they happen to be on.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with who you are</h2>
      <div class="v2-home-grid">
        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="business" :size="18" />I run the academy</h3>
          <p class="muted">
            Start here if you own the academy and need setup, team, cards, schedule, or tools guidance.
          </p>
          <router-link class="link" to="/help-v2/owner">
            Open the owner path
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="access" :size="18" />I help manage the academy</h3>
          <p class="muted">
            Start here if you are staff helping with lessons, members, cards, or daily academy operations.
          </p>
          <router-link class="link" to="/help-v2/admin">
            Open the admin path
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="members" :size="18" />I train at an academy</h3>
          <p class="muted">
            Start here if you are a student, parent, or academy member looking for account, booking, or membership help.
          </p>
          <router-link class="link" to="/help-v2/student">
            Open the student path
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Or jump straight into a job</h2>
      <div class="v2-home-grid">
        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="cards" :size="18" />Set up membership cards</h3>
          <p class="muted">
            Learn how cards support booking, then create templates and issue cards.
          </p>
          <router-link class="link" to="/help-v2/cards">
            Open Cards Overview
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="members" :size="18" />Add and manage members</h3>
          <p class="muted">
            Bring people into the academy, review applications, and manage status changes.
          </p>
          <router-link class="link" to="/help-v2/members">
            Open Members Overview
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3 class="v2-home-title"><V2Icon name="tools" :size="18" />Use paid tools</h3>
          <p class="muted">
            Add recurring scheduling and card-pausing tools after the core workflow is in place, and use the Features page to activate Premium when needed.
          </p>
          <router-link class="link" to="/help-v2/tools">
            Open Tools Overview
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>How v2 is different</h2>
      <p class="muted">
        v2 is organized around people and the jobs they are trying to finish, not around long screen-by-screen explanations. The goal is to help users decide what to do next, faster.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v1">Open Help v1</router-link>
        <router-link class="btn" to="/help-v2/owner">Start Here</router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Current Status</h2>
      <p class="muted">
        v1 remains the live guide at the public help link. v2 is being built in parallel, chunk by chunk, so structure and tone can improve without breaking existing links.
      </p>
      <div>
        <router-link class="btn" to="/help-v1">Go to Help v1</router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
.v2-home-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-3);
}

.v2-home-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v2-home-card h3 {
  margin-top: 0;
}

.v2-home-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 720px) {
  .v2-home-grid {
    grid-template-columns: 1fr;
  }
}
</style>
