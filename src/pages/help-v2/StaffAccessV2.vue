<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <div class="v2-meta-row">
        <span class="badge">Business</span>
        <span class="badge badge--premium">Paid Tool</span>
      </div>
      <h1>Choose who can manage the academy</h1>
      <p class="muted">
        Use <strong>Business → Permissions</strong> to grant or update admin access for your team.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Use this page when</h2>
      <ul>
        <li>someone should help manage lessons, members, cards, or timetable work</li>
        <li>you need to promote a member to admin</li>
        <li>you want to review or remove admin access</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Steps</h2>
      <ol>
        <li>Open <strong>Business → Permissions</strong>.</li>
        <li>Find the person you want to update.</li>
        <li>If they show as <strong>Member</strong>, tap their row and press <strong>Confirm</strong> to make them an admin.</li>
        <li>Tap the admin again to review access values.</li>
        <li>Choose the access settings you want, then press <strong>Confirm</strong>.</li>
      </ol>
    </section>

    <section class="card stack tight">
      <h2>What to know</h2>
      <ul>
        <li>The two badges are <strong>Member</strong> and <strong>Admin</strong>.</li>
        <li>Permissions controls admin access. It does not decide who can teach.</li>
        <li>The current access areas are Schedule, Members, Cards, and Timetable.</li>
        <li>This feature is entitlement-gated. If the tool is inactive, delegated staff permissions will not take effect.</li>
      </ul>
    </section>

    <section class="card stack tight">
      <h2>Common mistake</h2>
      <p class="muted">
        Giving someone teaching responsibility and giving someone admin access are separate setup steps. Use <strong>Instructors</strong> for teaching roles and <strong>Permissions</strong> for admin roles.
      </p>
      <div>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          Compare Business Pages
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Remove admin access</h2>
      <p class="muted">
        If someone should no longer manage the academy, use <strong>Remove Admin</strong> to return them to <strong>Member</strong>.
      </p>
    </section>

    <section class="card stack tight">
      <h2>Next step</h2>
      <p class="muted">
        After team roles are set, the next common job is reviewing compensation and reporting tools in Analytics.
      </p>
      <div class="row">
        <router-link class="btn btn--ghost" to="/help-v2/business/instructors">
          Back to Instructors
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/tools/activate">
          Activate Tools and Premium
        </router-link>
        <router-link class="btn btn--ghost" to="/help-v2/business/compare-pages">
          Compare Pages
        </router-link>
        <router-link class="btn" to="/help-v2/business/analytics">
          Go to Analytics
        </router-link>
      </div>
    </section>
  </section>
</template>
