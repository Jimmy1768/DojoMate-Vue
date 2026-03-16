<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Preview</span>
      <h1>Help Guide v2</h1>
      <p class="muted">
        This version is being rebuilt as a task-first guide for owners and admins.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with a real task</h2>
      <div class="v2-home-grid">
        <article class="v2-home-card">
          <h3>Run the business side of your academy</h3>
          <p class="muted">
            Understand the difference between Instructors, Staff Access, and Analytics.
          </p>
          <router-link class="link" to="/help-v2/business">
            Open Business Overview
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3>Choose who can teach</h3>
          <p class="muted">
            Start your team setup with the Instructors guide.
          </p>
          <router-link class="link" to="/help-v2/business/instructors">
            Open this guide
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3>Create and manage lessons</h3>
          <p class="muted">
            Build your scheduling workflow with the new Schedule guides.
          </p>
          <router-link class="link" to="/help-v2/schedule">
            Open Schedule Overview
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3>Set up membership cards</h3>
          <p class="muted">
            Learn how cards support booking, then create templates and issue cards.
          </p>
          <router-link class="link" to="/help-v2/cards">
            Open Cards Overview
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3>Add and manage members</h3>
          <p class="muted">
            Bring people into the academy, review applications, and manage status changes.
          </p>
          <router-link class="link" to="/help-v2/members">
            Open Members Overview
          </router-link>
        </article>

        <article class="v2-home-card">
          <h3>Use paid tools</h3>
          <p class="muted">
            Add recurring scheduling and card-pausing tools after the core workflow is in place.
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
        v2 is organized around jobs people are trying to finish, not around long screen-by-screen explanations. The goal is to help users decide what to do next, faster.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v1">Open Help v1</router-link>
        <router-link class="btn" to="/help-v2/business">Start Business v2</router-link>
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

@media (max-width: 720px) {
  .v2-home-grid {
    grid-template-columns: 1fr;
  }
}
</style>
