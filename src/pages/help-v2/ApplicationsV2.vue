<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Members</span>
      <h1>Review academy applications</h1>
      <p class="muted">
        Use this flow when someone applies through <strong>Join Academy</strong> and you need to accept or reject them.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Members → Add/Reject Members</strong>.</li>
        <li>Review the pending application list.</li>
        <li>Press <strong>Accept</strong> or <strong>Reject</strong> on the applicant.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>If no pending account appears, the person may not have applied correctly.</li>
        <li>They may need to scan the academy QR code again or search your academy name again.</li>
        <li>Linked child accounts may need extra acceptance steps through the parent’s profile.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        If child accounts do not appear right away, either they were not created properly yet or the list is stale. Ask the parent to finish child setup, or refresh the app view.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After you accept someone into the academy, the next common job is issuing their membership card.
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
