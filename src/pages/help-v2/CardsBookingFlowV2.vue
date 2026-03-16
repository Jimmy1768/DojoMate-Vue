<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Cards</span>
      <h1>How cards work with booking</h1>
      <p class="muted">
        Membership cards are mainly for booking lessons. Students book, lessons are deducted automatically, and the system calculates from real booking activity.
      </p>
    </div>

    <section class="card stack tight">
      <h2>The normal flow</h2>
      <ol>
        <li>Create a card template.</li>
        <li>Issue the card to a member.</li>
        <li>The member books lessons using that card.</li>
        <li>Lessons are deducted through booked lessons.</li>
        <li>When the card reaches 0 lessons or the expiry time is up, delete the active card.</li>
        <li>Issue a new card when the member renews.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>Why this matters</h2>
      <ul>
        <li>Cards should support lesson booking clearly and predictably.</li>
        <li>Only lessons deducted through booked lessons count toward Analytics financial reports.</li>
        <li>A member cannot hold two active cards for the same template at the same time.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/cards/create-template">
          Create a Card Template
        </router-link>
        <router-link class="btn" to="/help-v2/cards/issue-cards">
          Issue Cards
        </router-link>
      </div>
    </section>
  </section>
</template>
