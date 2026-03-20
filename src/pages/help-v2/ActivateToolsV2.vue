<script setup>
import V2Icon from '../../components/V2Icon.vue'
</script>

<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">Tools</span>
        <span class="badge badge--premium">Paid Tool</span>
      </div>
      <h1 class="v2-page-title"><V2Icon name="tools" :size="24" />Activate tools and Premium</h1>
      <p class="muted">
        Use the Features page to start a Premium trial and manage entitlement-gated tools for your academy.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Where to go</h2>
      <p class="muted">
        Open <strong>AFL System → Features</strong>. This is the current Rails-managed entry point for tool activation and subscription status.
      </p>
    </section>

    <section class="card stack tight">
      <h2>How tools are presented</h2>
      <ul>
        <li>Tools are available individually.</li>
        <li>The Features page presents them in two groups: <strong>Essential Tools</strong> and <strong>Advanced Tools</strong>.</li>
        <li><strong>Premium Package</strong> includes all four tools.</li>
        <li>First-time users can start a <strong>90-day Premium trial</strong>.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Current tool groups</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Essential Tools</h3>
          <ul>
            <li>Timetables</li>
            <li>Pause Academy</li>
          </ul>
        </article>
        <article class="v2-panel">
          <h3>Advanced Tools</h3>
          <ul>
            <li>Staff Permissions</li>
            <li>Analytics</li>
          </ul>
        </article>
        <article class="v2-panel">
          <h3>Premium Package</h3>
          <p class="muted">
            Includes all Essential and Advanced Tools in one bundle.
          </p>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What you may see on the Features page</h2>
      <ul>
        <li><strong>Start Free Trial</strong></li>
        <li><strong>Purchase Premium Package</strong></li>
        <li><strong>Premium active!</strong></li>
        <li><strong>Included in Premium</strong></li>
        <li><strong>Available in free trial</strong></li>
        <li><strong>Included in free trial</strong></li>
        <li><strong>Buy Now</strong></li>
        <li><strong>Manage</strong></li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Some screens are fully locked when a tool is inactive.</li>
        <li>Some screens still load but replace paid actions with upgrade prompts.</li>
        <li>Staff Permissions is currently more of a capability gate than a big locked screen.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Paid guides</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/tools/timetable">
          Timetable
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/pause-cards">
          Pause Cards
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
