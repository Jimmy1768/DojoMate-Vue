<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Owner</span>
      <h1 class="v2-page-title"><V2Icon name="business" :size="24" />I run the academy</h1>
      <p class="muted">
        This path is for academy owners setting up the academy, building the team, and running daily operations.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Best place to start</h2>
      <p class="muted">
        If you are setting up a new academy, start with the owner setup path first. It follows the most useful order so the rest of the app makes sense.
      </p>
      <div class="row">
        <router-link class="btn" to="/help-v2/getting-started-owner">
          Getting Started as an Owner
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/create-academy">
          Create Academy
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Academy setup</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Create the academy</h3>
          <p class="muted">
            Start with the academy itself before you try to bring in members or build lessons.
          </p>
          <router-link class="link" to="/help-v2/business/create-academy">
            Create Academy
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Review basics and QR</h3>
          <p class="muted">
            Keep the academy details accurate and use QR joining when you want faster onboarding.
          </p>
          <div class="row">
            <router-link class="link" to="/help-v2/business/academy-basics">
              Academy Basics
            </router-link>
            <router-link class="link" to="/help-v2/business/academy-qr">
              Academy QR
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>Academy lifecycle</h3>
          <p class="muted">
            Use the deletion guide only when the academy itself should no longer remain active.
          </p>
          <router-link class="link" to="/help-v2/business/delete-academy">
            Delete Academy
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Main jobs</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Set up your team</h3>
          <p class="muted">
            Decide who teaches, who can manage the academy, and how compensation tools fit in.
          </p>
          <router-link class="link" to="/help-v2/business">
            Open Business
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Run lessons and booking</h3>
          <p class="muted">
            Create lessons, manage changes, and support booking when needed.
          </p>
          <router-link class="link" to="/help-v2/schedule">
            Open Schedule
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Set up cards and members</h3>
          <p class="muted">
            Bring people into the academy, issue cards, and let booking deduct lessons correctly.
          </p>
          <div class="row">
            <router-link class="link" to="/help-v2/members">
              Members
            </router-link>
            <router-link class="link" to="/help-v2/cards">
              Cards
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Paid features</h2>
      <p class="muted">
        Timetable, Pause Cards, Staff Access, and Analytics are entitlement-gated. Use the Features page guide if you need to activate tools or start Premium.
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          Activate Tools and Premium
        </router-link>
      </div>
    </section>

    <V2SupportCallout />
  </section>
</template>

<style scoped>
.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.v2-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
}

.v2-panel {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  background: var(--color-bg);
}

.v2-panel h3 {
  margin-top: 0;
}

@media (max-width: 720px) {
  .v2-grid {
    grid-template-columns: 1fr;
  }
}
</style>
