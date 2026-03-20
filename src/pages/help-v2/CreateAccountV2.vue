<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Account</span>
      <h1>Create an account</h1>
      <p class="muted">
        Create an account before joining an academy, booking classes, or using the rest of the app.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Choose the right path</h2>
      <ul>
        <li>member/student path if you are training or joining an academy</li>
        <li>admin/owner path if you are setting up or managing an academy</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What you need</h2>
      <ul>
        <li>a valid email address</li>
        <li>a password that meets the app rules</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/account/sign-in">
          Back to Sign In
        </router-link>
        <router-link class="btn" to="/help-v2/student/join-academy">
          Join an Academy
        </router-link>
      </div>
    </section>
  </section>
</template>
