<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Student</span>
      <h1>Book a lesson</h1>
      <p class="muted">
        Use booking to choose a lesson, select an eligible card, and reserve your place.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open the schedule.</li>
        <li>Choose the lesson you want.</li>
        <li>Check whether you are eligible to book it.</li>
        <li>Select the card you want to use.</li>
        <li>Confirm the booking.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>You may need to choose the correct academy first if you belong to more than one.</li>
        <li>If a card does not appear, the lesson and card may not be compatible.</li>
        <li>You can also unbook when the rules still allow it.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student/memberships">
          Memberships
        </router-link>
        <router-link class="btn" to="/help-v2/student/attendance-records">
          Attendance Records
        </router-link>
      </div>
    </section>
  </section>
</template>
