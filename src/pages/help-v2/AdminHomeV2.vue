<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Admin</span>
      <h1 class="v2-page-title"><V2Icon name="access" :size="24" />I help manage the academy</h1>
      <p class="muted">
        This path is for staff who help run daily academy operations after the owner has already set up the academy.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Most common admin jobs</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Run schedule tasks</h3>
          <p class="muted">
            Create lessons, edit changes, and help students or parents book when needed.
          </p>
          <router-link class="link" to="/help-v2/schedule">
            Open Schedule
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Manage members and cards</h3>
          <p class="muted">
            Review applications, register members directly, and issue cards.
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

        <article class="v2-panel">
          <h3>Use delegated access</h3>
          <p class="muted">
            If the owner enabled admin access for you, your daily tasks can include schedule, members, cards, and sometimes tools.
          </p>
          <router-link class="link" to="/help-v2/business/staff-access">
            Review Staff Access
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Most admin topics overlap with the owner workflow, so you do not need a completely separate wiki tree.</li>
        <li>If something is missing from your account, the owner may need to grant access or activate the required tool first.</li>
      </ul>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          Compare Business Pages
        </router-link>
        <router-link class="btn" to="/help-v2/tools/activate">
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
