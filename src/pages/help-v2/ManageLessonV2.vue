<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Schedule</span>
      <h1>Edit, cancel, or delete a lesson</h1>
      <p class="muted">
        Use the lesson details screen to update lesson info or stop a lesson from being bookable.
      </p>
    </div>

    <section class="card stack tight">
      <h2>How to open the lesson</h2>
      <ol>
        <li>Open <strong>Schedule</strong>.</li>
        <li>Select the correct date.</li>
        <li>Tap the lesson itself, not the booking button.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What each action does</h2>
      <ul>
        <li><strong>Edit:</strong> update lesson details, then save changes.</li>
        <li><strong>Cancel:</strong> unbook current members and stop new bookings.</li>
        <li><strong>Delete:</strong> remove the lesson completely after it has been canceled.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>You cannot edit a lesson after the booking cut-off time.</li>
        <li>You cannot cancel or delete a lesson that has already started.</li>
        <li>If a lesson was created by mistake, cancel it first, then delete it.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        People often tap the booking flow when they actually need the lesson details screen. If you want to edit or cancel the lesson, open the lesson card itself.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        If the lesson is staying active, the next common task is helping students book into it.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/schedule/create-lesson">
          Back to Create Lesson
        </router-link>
        <router-link class="btn" to="/help-v2/schedule/book-for-students">
          Go to Booking
        </router-link>
      </div>
    </section>
  </section>
</template>
