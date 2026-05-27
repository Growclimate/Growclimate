import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './style.css'

// vite-ssg automatically creates and manages the @unhead/vue head instance
// Do NOT create a separate head instance in the setup function
export const createApp = ViteSSG(
  App,
  { routes },
  ({ app }) => {
    // vite-ssg handles head management internally
    // Just register any other plugins here
  }
)
