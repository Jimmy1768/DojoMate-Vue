<script setup>
import V2Icon from '../../components/V2Icon.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Business</span>
      <h1 class="v2-page-title"><V2Icon name="business" :size="24" />Run the business side of your academy</h1>
      <p class="muted">
        The Business area helps you set up your team, decide who can manage the academy, and review pay and performance tools.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with the job you need to do</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Choose Who Can Teach</h3>
          <p class="muted">
            Use <strong>Instructors</strong> to decide which people can be assigned to lessons.
          </p>
          <router-link class="link" to="/help-v2/business/instructors">
            Open the Instructors guide
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Choose Who Can Manage the Academy</h3>
          <p class="muted">
            Use <strong>Staff Access</strong> to grant or update admin access.
          </p>
          <router-link class="link" to="/help-v2/business/staff-access">
            Open the Staff Access guide
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Track Pay, Time, and Performance</h3>
          <p class="muted">
            Use <strong>Analytics</strong> for compensation, reports, timesheets, and payroll-related tools.
          </p>
          <router-link class="link" to="/help-v2/business/analytics">
            Open the Analytics guide
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>These Business pages support different jobs, so it helps to choose the page that matches what you are trying to do.</li>
        <li>If you are setting up a new academy, start by deciding who teaches first.</li>
        <li>If you are unsure where to begin, the Instructors guide is the best first step for team setup, followed by Staff Access and then Analytics.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        Start with <strong>Choose Who Can Teach</strong> if you are setting up your teaching team.
      </p>
      <div>
        <router-link class="btn" to="/help-v2/business/instructors">
          Go to Choose Who Can Teach
        </router-link>
      </div>
    </section>
  </section>
</template>

<style scoped>
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

.v2-page-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 720px) {
  .v2-grid {
    grid-template-columns: 1fr;
  }
}
</style>
