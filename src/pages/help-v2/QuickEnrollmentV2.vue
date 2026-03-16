<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Members</span>
      <h1>Add a member directly</h1>
      <p class="muted">
        Use quick enrollment when you want to register someone directly instead of waiting for the normal Join Academy application flow.
      </p>
    </div>

    <section class="card stack tight">
      <h2>When to use this</h2>
      <ul>
        <li>you are onboarding someone in person</li>
        <li>you want to create the account directly</li>
        <li>you are registering a parent and want to create multiple child accounts in one setup flow</li>
        <li>the member is resistant to tech and you want to set up the account for them</li>
        <li>you want to add an existing DojoMate account by email</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Start with the easiest path</h2>
      <p class="muted">
        If your academy is growing, the easiest long-term approach is usually letting members create their own accounts and add your academy themselves.
      </p>
      <p class="muted">
        Quick enrollment is best for people who need extra help or who are unlikely to complete the setup on their own.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open the <strong>Affiliate Portal</strong> and sign in with your DojoMate email and password.</li>
        <li>Open <strong>Register</strong>.</li>
        <li>Enter the member’s real email and create a temporary password.</li>
        <li>Choose whether the account is for a student or a parent.</li>
        <li>If you choose parent, continue into the child-account setup flow.</li>
        <li>Review the details and press <strong>Confirm</strong>.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Quick enrollment skips the normal pending and accepted application flow.</li>
        <li>This flow is especially useful for parents, because you can create multiple child accounts as part of the same registration action.</li>
        <li>You can save a simple temporary password when you create the account. The member can sign in later and change it.</li>
        <li>Some members may never log in themselves, and that is still fine if you are managing the account for them.</li>
        <li>Newly enrolled members can still receive membership cards through the app after setup.</li>
        <li>If the person already has a DojoMate account, add them by email instead of creating a duplicate account.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After the account is in the academy, the next common job is issuing a membership card.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/members">
          Back to Members Overview
        </router-link>
        <router-link class="btn" to="/help-v2/cards/issue-cards">
          Go to Issue Cards
        </router-link>
      </div>
    </section>
  </section>
</template>
