<template>
  <section class="stack gap-4">
    <div class="stack tight">
      <span class="badge">Business</span>
      <h1>Choose who can teach</h1>
      <p class="muted">
        Use <strong>Business → Instructors</strong> to decide which people can be assigned to lessons.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Before you start</h2>
      <ul>
        <li>You need at least one instructor before you can create lessons.</li>
        <li>Most owners add themselves first if they are also teaching.</li>
        <li>The person should already be available as a member in your academy.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Business → Instructors</strong>.</li>
        <li>Tap <strong>Choose Member</strong>.</li>
        <li>Select the person you want to add.</li>
        <li>Tap <strong>Add to Staff</strong>.</li>
        <li>Turn on the instructor toggle if this person should teach lessons.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>Selected people appear in the staff list after you add them.</li>
        <li>If the instructor toggle is left off, the person can stay available as an assistant instructor only.</li>
        <li>Changing compensation in Analytics does not make someone an instructor.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        If someone should be allowed to manage the academy, that is a separate setup step. Teaching access and admin access are not the same thing.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After your teaching team is set, the next common job is deciding who should also have admin access.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business">
          Back to Business Overview
        </router-link>
        <router-link class="btn" to="/help-v2/business/staff-access">
          Go to Staff Access
        </router-link>
      </div>
    </section>
  </section>
</template>
