<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>Create a membership card template</h1>
      <p class="muted">
        Use <strong>Cards → Create Card Template</strong> to build the card types your academy will issue.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Before you start</h2>
      <ul>
        <li>Decide whether this card is for group lessons or private lessons.</li>
        <li>Decide how many lessons the card should include.</li>
        <li>If you want an unlimited membership card, plan the time period first. Unlimited cards still use an expiry timeframe.</li>
        <li>Use the same tuition and currency logic your academy already uses.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Cards → Create Card Template</strong>.</li>
        <li>Enter the card name members and admins should recognize easily.</li>
        <li>Enter the fee and optional description.</li>
        <li>Set total sessions and expiry days.</li>
        <li>For an unlimited card, save <strong>Total Sessions</strong> as <strong>-1</strong>, not <strong>0</strong>.</li>
        <li>Choose whether the card is for <strong>Group</strong> lessons or <strong>Private</strong> lessons.</li>
        <li>Save the template.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>The lesson type controls which lessons the card can be used to book.</li>
        <li>A card saved with <strong>Total Sessions = -1</strong> allows unlimited booking during its active timeframe.</li>
        <li>Group and Private lessons often have different pricing per class, and instructor pay can also be different.</li>
        <li>Card names should stay clear and stable, because people will see them later during booking and card assignment.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        If the card does not appear during booking, check whether the card type matches the lesson type. This is intentional, so Group cards cannot be used for Private lessons by accident, and Private cards cannot be used for Group lessons by accident.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After the template exists, the next common job is issuing that card to one or more members.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards">
          Back to Cards Overview
        </router-link>
        <router-link class="btn" to="/help-v2/cards/issue-cards">
          Go to Issue Cards
        </router-link>
      </div>
    </section>
  </section>
</template>
