import "xp.css/dist/XP.css"; // Load XP.css first
import './assets/main.css'   // Load main.css (and base.css) last

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
