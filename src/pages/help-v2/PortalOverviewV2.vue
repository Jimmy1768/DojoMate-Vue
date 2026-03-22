<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">Portal</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="tools" :size="24" />Use the Affiliate Portal in AFL</h1>
      <p class="muted">
        The Affiliate Portal is a web surface in Source Combatives AFL. Use it for portal-only workflows that go beyond the normal day-to-day app screens.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Portal jobs</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Register and set up programs</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/register">
              Register
            </router-link>
            <router-link class="link" to="/help-v2/portal/ranks">
              Ranks
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>Manage people and cards</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/members">
              Members
            </router-link>
            <router-link class="link" to="/help-v2/portal/cards">
              Cards
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>Review reports</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/portal/reports">
              Reports
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <V2SupportCallout
      board-name="AFL portal board"
      href="https://sourcecombatives.com/forum/afl-portal"
      description="Use the AFL portal board on Source Combatives for Affiliate Portal questions, portal setup problems, and other AFL-specific web workflows."
      button-label="Open the AFL Portal Board"
    />
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
