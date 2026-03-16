<template>
  <div class="help-wrap">
    <div class="split fill">
      <aside class="help-sidebar">
        <div class="stack gap-3">
          <div class="card stack tight">
            <div class="badge">Help v2</div>
            <p class="muted">
              A task-first guide for owners and admins. v1 remains live while this version is being built.
            </p>
            <router-link class="btn btn--ghost" to="/help-v1">
              Open Help v1
            </router-link>
          </div>

          <nav class="card stack tight" aria-label="Help v2 navigation">
            <h3 class="v2-nav-title">Start Here</h3>
            <router-link class="v2-nav-link" to="/help-v2">
              Help v2 Home
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business">
              Business Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/instructors">
              Choose Who Can Teach
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/staff-access">
              Choose Who Can Manage
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/analytics">
              Track Pay and Performance
            </router-link>
            <h3 class="v2-nav-title">Schedule</h3>
            <router-link class="v2-nav-link" to="/help-v2/schedule">
              Schedule Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/create-lesson">
              Create a Lesson
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/manage-lesson">
              Edit or Cancel a Lesson
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/book-for-students">
              Book for Students
            </router-link>
            <h3 class="v2-nav-title">Cards</h3>
            <router-link class="v2-nav-link" to="/help-v2/cards">
              Cards Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/how-booking-works">
              How Cards Work
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/create-template">
              Create a Card Template
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/issue-cards">
              Issue Cards
            </router-link>
            <h3 class="v2-nav-title">Members</h3>
            <router-link class="v2-nav-link" to="/help-v2/members">
              Members Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/quick-enrollment">
              Add a Member Directly
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/applications">
              Review Applications
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/reject-or-ban">
              Reject or Ban Members
            </router-link>
            <h3 class="v2-nav-title">Tools</h3>
            <router-link class="v2-nav-link" to="/help-v2/tools">
              Tools Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/timetable">
              Timetable
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/pause-cards">
              Pause Cards
            </router-link>
          </nav>
        </div>
      </aside>

      <main class="help-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.help-wrap {
  height: 68vh;
  max-height: 78vh;
}

.fill {
  height: 100%;
  overflow: hidden;
}

.help-sidebar {
  height: 100%;
  overflow: auto;
}

.help-content {
  height: 100%;
  overflow: auto;
  padding-right: 2px;
}

.v2-nav-title {
  margin: 0;
}

.v2-nav-link {
  display: block;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-fg);
  background: var(--color-bg);
  font-weight: var(--font-weight-semibold);
}

.v2-nav-link:hover {
  background: var(--color-bg-alt);
  text-decoration: none;
}

.router-link-active.v2-nav-link {
  border-color: rgba(10, 99, 209, 0.35);
  background: rgba(10, 99, 209, 0.08);
  color: var(--color-primary);
}

@media (max-width: 720px) {
  .help-wrap { height: auto; max-height: none; }
  .fill { height: auto; overflow: visible; }
  .help-sidebar { height: auto; overflow: visible; }
  .help-content { height: auto; overflow: visible; padding-right: 0; }
}
</style>
