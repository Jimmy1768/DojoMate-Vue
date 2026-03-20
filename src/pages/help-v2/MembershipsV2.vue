<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Student</span>
      <h1>Manage academy memberships</h1>
      <p class="muted">
        Use this page when your account belongs to more than one academy or when you need to switch between academy memberships.
      </p>
    </div>

    <section class="card stack tight">
      <h2>When this matters</h2>
      <ul>
        <li>you belong to more than one academy</li>
        <li>you need to choose which academy you are acting inside</li>
        <li>the wrong academy is currently selected in the app</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Multi-academy members need to select the correct academy before booking or checking records.</li>
        <li>If something looks missing, the wrong academy may simply be active.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student/join-academy">
          Back to Join Academy
        </router-link>
        <router-link class="btn" to="/help-v2/student/booking">
          Booking
        </router-link>
      </div>
    </section>
  </section>
</template>
