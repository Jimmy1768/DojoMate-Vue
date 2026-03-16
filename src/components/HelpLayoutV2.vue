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
