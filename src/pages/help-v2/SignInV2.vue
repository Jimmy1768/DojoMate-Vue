<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Account</span>
      <h1>Sign in to your account</h1>
      <p class="muted">
        Use sign in when your account already exists and you want to access your academy, booking, cards, and records.
      </p>
    </div>

    <section class="card stack tight">
      <h2>What you need</h2>
      <ul>
        <li>your email address</li>
        <li>your password</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>If sign in does not work</h2>
      <ul>
        <li>check whether the email and password are correct</li>
        <li>use Reset Password if needed</li>
        <li>check the language selector if the screen looks unfamiliar</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student">
          Back to Student Path
        </router-link>
        <router-link class="btn" to="/help-v2/account/reset-password">
          Reset Password
        </router-link>
      </div>
    </section>
  </section>
</template>
