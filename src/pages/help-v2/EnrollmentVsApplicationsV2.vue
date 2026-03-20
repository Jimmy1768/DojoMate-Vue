<template>
  <section class="v2-page stack">
    <div class="stack tight">
      <span class="badge">Members</span>
      <h1>Choose between Quick Enrollment and Applications</h1>
      <p class="muted">
        Both flows bring people into the academy, but they are meant for different situations.
      </p>
    </div>

    <section class="card stack tight">
      <h2>Use Quick Enrollment when</h2>
      <ul>
        <li>you want to create the account yourself</li>
        <li>the person needs help with setup</li>
        <li>the person is resistant to tech</li>
        <li>you are registering a parent and multiple child accounts together</li>
      </ul>
      <div>
        <router-link class="link" to="/help-v2/members/quick-enrollment">
          Open Quick Enrollment
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>Use Applications when</h2>
      <ul>
        <li>you want members to create their own accounts</li>
        <li>you want the academy to scale without the owner creating every account manually</li>
        <li>the member can follow the Join Academy flow on their own</li>
      </ul>
      <div>
        <router-link class="link" to="/help-v2/members/applications">
          Open Academy Applications
        </router-link>
      </div>
    </section>

    <section class="card stack tight">
      <h2>The simple rule</h2>
      <p class="muted">
        Let members create themselves whenever possible. Use Quick Enrollment when they need extra help or when you want to handle registration directly.
      </p>
    </section>
  </section>
</template>
