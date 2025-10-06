// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import i18n configuration (now points to the i18n.js file)
import i18n from './locales/i18n'

// Import global styles
import './styles/variables.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
