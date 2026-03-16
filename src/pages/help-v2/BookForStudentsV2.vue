<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Schedule</span>
      <h1>Book for students when needed</h1>
      <p class="muted">
        It is best when students or parents book themselves, but admins can step in when someone forgot, missed the cut-off, or needs help.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Schedule</strong> and choose the lesson date.</li>
        <li>Open the lesson, then go to <strong>Booking</strong>.</li>
        <li>Tap <strong>Add Members</strong>.</li>
        <li>Choose the member you want to book.</li>
        <li>Select one of their allowed active cards.</li>
        <li>Press <strong>Confirm</strong>.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>To unbook a student</h2>
      <ol>
        <li>Open the attendance list for the lesson.</li>
        <li>Tap the booked member.</li>
        <li>Tap the blue booked card until it turns gray.</li>
        <li>Press <strong>Confirm</strong>.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Admins can usually book with more freedom than students, especially around cut-off or capacity rules.</li>
        <li>The member must still have an active card that is allowed for that lesson.</li>
        <li>Finished lessons cannot be booked or unbooked.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        If the correct card does not appear, the lesson may be limited to different card types than the member currently has active.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        If booking rules are causing problems, review the lesson setup and adjust the lesson instead of repeatedly overriding it.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/schedule/create-lesson">
          Review Create Lesson
        </router-link>
        <router-link class="btn" to="/help-v2/schedule/manage-lesson">
          Review Manage Lesson
        </router-link>
      </div>
    </section>
  </section>
</template>
