<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Members</span>
      <h1>Bring people into your academy and manage membership status</h1>
      <p class="muted">
        Use the Members area for the people side of the system: adding members, reviewing applications, and managing accepted, rejected, or banned status.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with the job you need to do</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Add a member directly</h3>
          <p class="muted">
            Use quick enrollment when you want to register someone directly instead of waiting for the normal application flow.
          </p>
          <router-link class="link" to="/help-v2/members/quick-enrollment">
            Open Quick Enrollment
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Review academy applications</h3>
          <p class="muted">
            Accept or reject people who applied through Join Academy.
          </p>
          <router-link class="link" to="/help-v2/members/applications">
            Open Academy Applications
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Reject or ban someone</h3>
          <p class="muted">
            Manage status changes when a member should no longer be active in the academy.
          </p>
          <router-link class="link" to="/help-v2/members/reject-or-ban">
            Open Reject or Ban Members
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Quick enrollment and academy applications are different entry paths into the academy.</li>
        <li>It takes time to onboard an entire academy, so the easiest long-term approach is usually letting members create their own accounts and add your academy themselves.</li>
        <li>Once members are active, the next common step is issuing membership cards in DojoMate.</li>
        <li>Child accounts can require extra review steps, especially when a parent account is involved.</li>
      </ul>
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
