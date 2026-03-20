<script setup>
import V2Icon from './V2Icon.vue'
</script>

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
              <V2Icon name="home" :size="16" />
              Help v2 Home
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/owner">
              <V2Icon name="business" :size="16" />
              I Run the Academy
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/admin">
              <V2Icon name="access" :size="16" />
              I Help Manage
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student">
              <V2Icon name="members" :size="16" />
              I Train at an Academy
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/join-academy">
              <V2Icon name="members" :size="16" />
              Join Academy
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/memberships">
              <V2Icon name="members" :size="16" />
              Managing Memberships
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/booking">
              <V2Icon name="schedule" :size="16" />
              Booking
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/system-alerts">
              <V2Icon name="members" :size="16" />
              System Alerts
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/student/attendance-records">
              <V2Icon name="members" :size="16" />
              Attendance Records
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/getting-started-owner">
              <V2Icon name="getting-started" :size="16" />
              Getting Started as an Owner
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/create-academy">
              <V2Icon name="business" :size="16" />
              Create Academy
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/academy-basics">
              <V2Icon name="business" :size="16" />
              Academy Basics
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/academy-qr">
              <V2Icon name="business" :size="16" />
              Academy QR
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business">
              <V2Icon name="business" :size="16" />
              Business Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/compare-pages">
              <V2Icon name="business" :size="16" />
              Compare Business Pages
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/instructors">
              <V2Icon name="instructors" :size="16" />
              Choose Who Can Teach
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/staff-access">
              <V2Icon name="access" :size="16" />
              Choose Who Can Manage
              <span class="badge badge--premium">Paid</span>
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/analytics">
              <V2Icon name="analytics" :size="16" />
              Track Pay and Performance
              <span class="badge badge--premium">Paid</span>
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/business/delete-academy">
              <V2Icon name="business" :size="16" />
              Delete Academy
            </router-link>
            <h3 class="v2-nav-title">Schedule</h3>
            <router-link class="v2-nav-link" to="/help-v2/schedule">
              <V2Icon name="schedule" :size="16" />
              Schedule Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/create-lesson">
              <V2Icon name="schedule" :size="16" />
              Create a Lesson
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/manage-lesson">
              <V2Icon name="schedule" :size="16" />
              Edit or Cancel a Lesson
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/schedule/book-for-students">
              <V2Icon name="schedule" :size="16" />
              Book for Students
            </router-link>
            <h3 class="v2-nav-title">Cards</h3>
            <router-link class="v2-nav-link" to="/help-v2/cards">
              <V2Icon name="cards" :size="16" />
              Cards Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/how-booking-works">
              <V2Icon name="cards" :size="16" />
              How Cards Work
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/create-template">
              <V2Icon name="cards" :size="16" />
              Create a Card Template
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/issue-cards">
              <V2Icon name="cards" :size="16" />
              Issue Cards
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/edit-templates">
              <V2Icon name="cards" :size="16" />
              Edit Templates
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/delete-templates">
              <V2Icon name="cards" :size="16" />
              Delete Templates
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/delete-cards">
              <V2Icon name="cards" :size="16" />
              Delete Cards
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/cards/records">
              <V2Icon name="cards" :size="16" />
              Card Records
            </router-link>
            <h3 class="v2-nav-title">Members</h3>
            <router-link class="v2-nav-link" to="/help-v2/members">
              <V2Icon name="members" :size="16" />
              Members Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/quick-enrollment">
              <V2Icon name="members" :size="16" />
              Add a Member Directly
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/quick-enrollment-vs-applications">
              <V2Icon name="members" :size="16" />
              Enrollment vs Applications
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/applications">
              <V2Icon name="members" :size="16" />
              Review Applications
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/members/reject-or-ban">
              <V2Icon name="members" :size="16" />
              Reject or Ban Members
            </router-link>
            <h3 class="v2-nav-title">Tools</h3>
            <router-link class="v2-nav-link" to="/help-v2/tools">
              <V2Icon name="tools" :size="16" />
              Tools Overview
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/activate">
              <V2Icon name="tools" :size="16" />
              Activate Tools and Premium
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/timetable">
              <V2Icon name="timetable" :size="16" />
              Timetable
              <span class="badge badge--premium">Paid</span>
            </router-link>
            <router-link class="v2-nav-link" to="/help-v2/tools/pause-cards">
              <V2Icon name="pause-cards" :size="16" />
              Pause Cards
              <span class="badge badge--premium">Paid</span>
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
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-fg);
  background: var(--color-bg);
  font-weight: var(--font-weight-semibold);
}

.v2-nav-link .badge {
  margin-left: auto;
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
