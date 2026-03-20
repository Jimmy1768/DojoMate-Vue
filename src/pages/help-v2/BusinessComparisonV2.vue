<script setup>
import V2Icon from '../../components/V2Icon.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Business</span>
      <h1 class="v2-page-title"><V2Icon name="business" :size="24" />Instructors, Staff Access, and Analytics</h1>
      <p class="muted">
        These three Business pages support different jobs. Use this page when you are not sure which one matches what you need to do.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Choose the page by the job</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Instructors</h3>
          <p class="muted">
            Use this page when you need to decide who can teach lessons.
          </p>
          <ul>
            <li>add someone to staff</li>
            <li>turn on instructor status</li>
            <li>prepare your teaching team for scheduling</li>
          </ul>
          <router-link class="link" to="/help-v2/business/instructors">
            Open Instructors
          </router-link>
        </article>

        <article class="v2-panel">
          <div class="v2-meta-row">
            <h3>Staff Access</h3>
            <span class="badge badge--premium">Paid</span>
          </div>
          <p class="muted">
            Use this page when someone should help manage the academy.
          </p>
          <ul>
            <li>promote a member to admin</li>
            <li>review access areas</li>
            <li>remove admin access later</li>
          </ul>
          <router-link class="link" to="/help-v2/business/staff-access">
            Open Staff Access
          </router-link>
        </article>

        <article class="v2-panel">
          <div class="v2-meta-row">
            <h3>Analytics</h3>
            <span class="badge badge--premium">Paid</span>
          </div>
          <p class="muted">
            Use this page when you want business numbers, pay settings, or time records.
          </p>
          <ul>
            <li>review reports</li>
            <li>set compensation</li>
            <li>check timesheets and payroll-related tools</li>
          </ul>
          <router-link class="link" to="/help-v2/business/analytics">
            Open Analytics
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Quick rules</h2>
      <ul>
        <li>Changing compensation in Analytics does not make someone an instructor.</li>
        <li>Giving someone admin access does not make them an instructor either.</li>
        <li>If someone should both teach and manage, you may need to set them up in more than one Business page.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Start here if you are still deciding</h2>
      <p class="muted">
        If the question is “Can this person teach?”, start with Instructors. If the question is “Can this person manage the academy?”, go to Staff Access. If the question is “Where do I check pay or reports?”, go to Analytics.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          Instructors
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/staff-access">
          Staff Access
        </router-link>
        <router-link class="btn" to="/help-v2/business/analytics">
          Analytics
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
