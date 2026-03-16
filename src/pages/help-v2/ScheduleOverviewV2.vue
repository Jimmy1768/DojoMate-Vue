<template>
  <section class="stack gap-4">
    <div class="stack tight">
      <span class="badge">Schedule</span>
      <h1>Plan, run, and manage lessons</h1>
      <p class="muted">
        Use the Schedule area to create lessons, adjust lesson details, and help students book when needed.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Start with the job you need to do</h2>
      <div class="v2-grid">
        <article class="v2-panel">
          <h3>Create a lesson</h3>
          <p class="muted">
            Set the lesson time, instructors, allowed cards, and booking rules.
          </p>
          <router-link class="link" to="/help-v2/schedule/create-lesson">
            Open the Create Lesson guide
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Edit, cancel, or delete a lesson</h3>
          <p class="muted">
            Update lesson details or stop a lesson from being bookable.
          </p>
          <router-link class="link" to="/help-v2/schedule/manage-lesson">
            Open the Manage Lesson guide
          </router-link>
        </article>

        <article class="v2-panel">
          <h3>Book for students</h3>
          <p class="muted">
            Step in when a student or parent cannot complete the booking themselves.
          </p>
          <router-link class="link" to="/help-v2/schedule/book-for-students">
            Open the Booking guide
          </router-link>
        </article>
      </div>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Creating lessons is usually the first scheduling task.</li>
        <li>Editing, canceling, and deleting have timing rules, so those tasks need their own guide.</li>
        <li>Admin booking is best used as backup when students or parents cannot finish booking themselves.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Before you start</h2>
      <p class="muted">
        Make sure your teaching team is already set up so the right instructors are available when you create lessons.
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          Review Instructors
        </router-link>
      </div>
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
