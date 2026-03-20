<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Student</span>
      <h1>Join an academy</h1>
      <p class="muted">
        Use this flow when you want to connect your account to an academy and start using that academy inside the app.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Ways to find an academy</h2>
      <ul>
        <li>use <strong>Discover Academy</strong> to browse academies inside the app</li>
        <li>use <strong>Search Academy</strong> if you want to search directly or scan an academy QR code</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Discover Academy</strong> from the Academy section.</li>
        <li>Browse the academy list.</li>
        <li>Open the academy to view its details.</li>
        <li>Review the academy information and gallery.</li>
        <li>Verify that it is the academy you expect.</li>
        <li>Apply to join.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li><strong>Discover Academy</strong> is useful when you want to compare academies before joining.</li>
        <li><strong>Search Academy</strong> is the direct path for search and QR scanning.</li>
        <li>Parents may need to think about child accounts as part of joining.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/student">
          Back to Student Path
        </router-link>
        <router-link class="btn" to="/help-v2/student/memberships">
          Managing Memberships
        </router-link>
      </div>
    </section>
  </section>
</template>
