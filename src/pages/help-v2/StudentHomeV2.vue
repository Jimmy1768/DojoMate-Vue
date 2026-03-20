<script setup>
import V2Icon from '../../components/V2Icon.vue'
import V2SupportCallout from '../../components/V2SupportCallout.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Student</span>
      <h1 class="v2-page-title"><V2Icon name="members" :size="24" />I train at an academy</h1>
      <p class="muted">
        This path is for students, parents, and academy members who want account help, booking help, and membership help.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with the job you need</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Join and manage academy access</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/student/join-academy">
              Join Academy
            </router-link>
            <router-link class="link" to="/help-v2/student/memberships">
              Managing Memberships
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>Booking and records</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/student/booking">
              Booking
            </router-link>
            <router-link class="link" to="/help-v2/student/attendance-records">
              Attendance Records
            </router-link>
            <router-link class="link" to="/help-v2/student/system-alerts">
              System Alerts
            </router-link>
          </div>
        </article>

        <article class="v2-panel">
          <h3>Account help</h3>
          <div class="stack tight">
            <router-link class="link" to="/help-v2/account/sign-in">
              Sign In
            </router-link>
            <router-link class="link" to="/help-v2/account/create-account">
              Create Account
            </router-link>
            <router-link class="link" to="/help-v2/account/reset-password">
              Reset Password
            </router-link>
            <router-link class="link" to="/help-v2/account/troubleshooting">
              Account Troubleshooting
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Still need something else?</h2>
      <p class="muted">
        Settings topics still live in Help v1 while the account and student path are being rebuilt.
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v1">
          Open Help v1
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
