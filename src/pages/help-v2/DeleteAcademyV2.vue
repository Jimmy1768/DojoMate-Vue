<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Owner</span>
      <h1>Delete an academy carefully</h1>
      <p class="muted">
        This is an academy lifecycle step, not a normal daily task. Use it only when the academy should truly be removed.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Before you do this</h2>
      <ul>
        <li>Review the preconditions first.</li>
        <li>Make sure you understand what happens to current members.</li>
        <li>Do not treat academy deletion as a shortcut for ordinary cleanup.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What this means</h2>
      <p class="muted">
        Deleting an academy is a serious owner action. It should only happen when the academy itself should no longer remain active.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Need help first?</h2>
      <p class="muted">
        If you are unsure whether deletion is the right move, ask on the DojoMate help board before taking the final step.
      </p>
      <div class="row">
        <a
          class="btn btn--ghost"
          href="https://sourcecombatives.com/forum/dojomate-questions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the DojoMate Help Board
        </a>
        <router-link class="btn" to="/help-v2/owner">
          Back to Owner Path
        </router-link>
      </div>
    </section>
  </section>
</template>
