<template>
  <section class="stack gap-4">
    <div class="stack tight">
      <span class="badge">Schedule</span>
      <h1>Create a lesson</h1>
      <p class="muted">
        Use <strong>Schedule</strong> to add a lesson on the day you want students to book.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Before you start</h2>
      <ul>
        <li>You need at least one instructor selected before you can create a lesson.</li>
        <li>Choose the correct date first, because Schedule opens on today by default.</li>
        <li>Decide which membership cards should be allowed to book this lesson.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Schedule</strong> and move to the date you want.</li>
        <li>Tap <strong>Create Lesson</strong>.</li>
        <li>Enter the lesson name, date, and start/end time.</li>
        <li>Choose the lesson type and allowed membership cards.</li>
        <li>Select at least one instructor, then add an assistant instructor if needed.</li>
        <li>Set booking rules like capacity, minimum capacity, and booking cut-off.</li>
        <li>Tap <strong>Create Lesson</strong>.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Booked cards must match the lesson type, such as group or private.</li>
        <li>If you schedule overlapping lessons, classroom becomes important.</li>
        <li>Admins can book beyond normal limits more easily than students, but students still follow cut-off and capacity rules.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        A booking cut-off that is too short can create confusion for students when a lesson cancels late. If you want smoother communication, use a longer cut-off window.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After a lesson exists, the next common jobs are adjusting lesson details or helping students book into it.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/schedule/manage-lesson">
          Edit or Cancel a Lesson
        </router-link>
        <router-link class="btn" to="/help-v2/schedule/book-for-students">
          Book for Students
        </router-link>
      </div>
    </section>
  </section>
</template>
