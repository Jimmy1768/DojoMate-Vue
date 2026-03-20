<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>Edit a card template</h1>
      <p class="muted">
        Use this when a template already exists and you need to update its settings for future use.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Use this page when</h2>
      <ul>
        <li>a template setting needs to be corrected</li>
        <li>the fee, session count, expiry, or lesson-type setup needs to change</li>
        <li>you want to adjust future issuing behavior without creating a new template yet</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>The template name stays locked after creation.</li>
        <li>Changes should be saved carefully because they affect how the template behaves going forward.</li>
        <li>If the change is large enough to represent a different membership product, it may be cleaner to create a new template instead.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards/create-template">
          Back to Create Template
        </router-link>
        <router-link class="btn" to="/help-v2/cards/issue-cards">
          Issue Cards
        </router-link>
      </div>
    </section>
  </section>
</template>
