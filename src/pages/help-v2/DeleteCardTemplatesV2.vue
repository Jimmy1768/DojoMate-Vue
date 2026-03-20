<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>Delete a card template</h1>
      <p class="muted">
        Use this when a template should no longer exist and is not still tied to active cards.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Before you delete it</h2>
      <ul>
        <li>Check whether the template is still tied to active cards.</li>
        <li>If active cards still depend on it, cleanup needs to happen first.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <p class="muted">
        Template deletion is a cleanup workflow. It should be used when a membership offering is truly retired, not just because one member is renewing.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards/create-template">
          Back to Templates
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          Cards Overview
        </router-link>
      </div>
    </section>
  </section>
</template>
