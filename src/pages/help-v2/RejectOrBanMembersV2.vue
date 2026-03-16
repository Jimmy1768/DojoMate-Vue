<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Members</span>
      <h1>Reject or ban a member when needed</h1>
      <p class="muted">
        Use this flow when someone should no longer remain active in the academy.
      </p>
    </div>

    <section class="card stack tight">
      <h2>How rejection works</h2>
      <ul>
        <li>Open the member’s profile from <strong>Members → Members List</strong>.</li>
        <li>Press <strong>Reject</strong> to remove them from the academy.</li>
        <li>A member with active cards must be cleared before rejection can happen.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>How ban works</h2>
      <ul>
        <li>Rejected members appear in <strong>Members → Rejected List</strong>.</li>
        <li>From there you can choose to accept them again or ban them.</li>
        <li>Banned members cannot reapply through Join Academy.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Removing active cards first is part of the normal cleanup process before rejection.</li>
        <li>If you want to undo a ban later, go to <strong>Banned List</strong> and use <strong>Remove Ban</strong>.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/members">
          Back to Members Overview
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          Review Cards Workflow
        </router-link>
      </div>
    </section>
  </section>
</template>
