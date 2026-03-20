<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Owner</span>
      <h1>Create your academy</h1>
      <p class="muted">
        This is the first owner step. Create the academy before you bring in members, issue cards, or start building lessons.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Before you create it</h2>
      <ul>
        <li>Check whether the academy already exists, so you do not create a duplicate.</li>
        <li>Be ready to choose the academy currency correctly from the start.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open the academy creation flow.</li>
        <li>Enter the academy details carefully.</li>
        <li>Choose the correct currency.</li>
        <li>Submit the form to create the academy.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After the academy exists, the next common job is reviewing the basic academy information and then bringing people into the academy.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/owner">
          Back to Owner Path
        </router-link>
        <router-link class="btn" to="/help-v2/business/academy-basics">
          Go to Academy Basics
        </router-link>
      </div>
    </section>
  </section>
</template>
