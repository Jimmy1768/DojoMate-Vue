<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>Use cards to support booking</h1>
      <p class="muted">
        The main card workflow is simple: create the card, issue it, then let booking deduct lessons automatically.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with the job you need to do</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Understand the booking flow</h3>
          <p class="muted">
            Learn how cards fit into booking, lesson deduction, and reporting.
          </p>
          <router-link class="link" to="/help-v2/cards/how-booking-works">
            Open the booking flow guide
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Create a card template</h3>
          <p class="muted">
            Set the card name, fee, session count, expiry, and lesson type.
          </p>
          <router-link class="link" to="/help-v2/cards/create-template">
            Open the Create Template guide
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Issue a card to a member</h3>
          <p class="muted">
            Assign an active membership card using one of your templates.
          </p>
          <router-link class="link" to="/help-v2/cards/issue-cards">
            Open the Issue Cards guide
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Templates come first. You cannot issue a card until the card template already exists.</li>
        <li>Cards are mainly there to support booking and automatic lesson deduction.</li>
        <li>When a card is used up or expires, delete the active card before issuing the next one.</li>
        <li>For occasional exceptions, you can adjust an active card manually. The most common use is extending expiry time, especially if you are not using Pause Cards.</li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
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
