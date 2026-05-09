// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import i18n configuration (now points to the i18n.js file)
import i18n, { initializeI18n } from './locales/i18n'

// Import global styles
import './styles/variables.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'

async function bootstrap() {
  const app = createApp(App)

  app.use(router)
  app.use(i18n)

  await initializeI18n()

  app.mount('#app')
}

bootstrap()
