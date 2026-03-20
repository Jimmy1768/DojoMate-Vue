<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>Delete or cancel an active card</h1>
      <p class="muted">
        Use this when an active card has reached the end of its life or should no longer remain active for that member.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Most common use</h2>
      <ul>
        <li>the card is expired or fully used</li>
        <li>the member is renewing and needs a new active card issued</li>
        <li>the card should be canceled and recorded correctly before moving on</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Expired cards are usually deleted as the default cleanup path.</li>
        <li>A member cannot hold two active cards for the same template at the same time.</li>
        <li>If you cancel a card, provide the required reason and let the card history remain visible.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After cleanup, issue the next card only if the member is continuing with a new active membership.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards/issue-cards">
          Back to Issue Cards
        </router-link>
        <router-link class="btn" to="/help-v2/cards">
          Cards Overview
        </router-link>
      </div>
    </section>
  </section>
</template>
