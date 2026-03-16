<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Business</span>
      <h1>Track pay, time, and performance</h1>
      <p class="muted">
        Use <strong>Business → Analytics</strong> for compensation, reports, timesheets, and payroll-related tools.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Use this page when</h2>
      <ul>
        <li>you want to review academy metrics and reports</li>
        <li>you need to enter or update compensation details</li>
        <li>you need to review timesheets or staff punch-card activity</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What Analytics covers</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Reports</h3>
          <p class="muted">
            Review real-time numbers, weekly summaries, financial reports, and monthly attendance-related reports.
          </p>
        </article>
        <article class="v2-panel">
          <h3>Compensation</h3>
          <p class="muted">
            Set salary, hourly, and private-lesson pay details so costs can be tracked more accurately.
          </p>
        </article>
        <article class="v2-panel">
          <h3>Time and payroll tools</h3>
          <p class="muted">
            Review punch cards, office hours, and approval workflows for time-based staff records.
          </p>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Changing compensation in Analytics does not make someone an instructor.</li>
        <li>If someone should teach, add that role in <strong>Instructors</strong>.</li>
        <li>If someone should manage the academy, grant that access in <strong>Permissions</strong>.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        Analytics is not the place to decide teaching roles or admin roles. It is the place to review business metrics and manage pay-related tools.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        If you are still setting up your team, go back and finish the teaching role and admin role steps first.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          Instructors
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/staff-access">
          Staff Access
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

@media (max-width: 720px) {
  .v2-grid {
    grid-template-columns: 1fr;
  }
}
</style>
