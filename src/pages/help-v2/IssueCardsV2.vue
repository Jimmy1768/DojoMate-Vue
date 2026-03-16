<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>Issue a membership card</h1>
      <p class="muted">
        Use <strong>Cards → Assign Cards</strong> to give an active card to one or more members.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Cards → Assign Cards</strong>.</li>
        <li>Choose the card template you want to issue.</li>
        <li>Choose one or more members.</li>
        <li>Review the selected members.</li>
        <li>Press <strong>Confirm</strong> to issue the cards.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Newly accepted members may appear near the top for easier issuing.</li>
        <li>Members who already hold an active card for that template are shown differently so you can spot duplicates.</li>
        <li>A member cannot hold two active cards for the same template at the same time.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        If the member is renewing the same card, delete the old active card first and then issue the new one.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After a card is issued, the normal next step is using that card to book lessons.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards/create-template">
          Back to Templates
        </router-link>
        <router-link class="btn" to="/help-v2/cards/how-booking-works">
          How Cards Work
        </router-link>
      </div>
    </section>
  </section>
</template>
