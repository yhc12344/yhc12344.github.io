import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import page components
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactPage from './pages/ContactPage.vue'

// Define routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/contact', component: ContactPage }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount the Vue application
const app = createApp(App)
app.use(router)
app.mount('#app')