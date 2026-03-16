<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Tools</span>
      <h1>Use paid tools to extend your academy workflow</h1>
      <p class="muted">
        Paid tools add extra systems on top of the core academy workflow, such as recurring schedules, card pausing, staff access, and analytics.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with the tool you need</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Build a recurring schedule</h3>
          <p class="muted">
            Use Timetable when you want repeating weekly lessons without recreating them one by one.
          </p>
          <router-link class="link" to="/help-v2/tools/timetable">
            Open Timetable
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Pause active cards</h3>
          <p class="muted">
            Use Pause Cards when you need to stop card time temporarily.
          </p>
          <router-link class="link" to="/help-v2/tools/pause-cards">
            Open Pause Cards
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Paid tools extend the core workflows you already use in Business, Schedule, Cards, and Members.</li>
        <li>Other roles can often use the tools after the academy owner enables them.</li>
        <li>It is usually easier to learn the base workflow first, then add paid tools on top.</li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.v2-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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
