import { createPinia } from 'pinia'
import type { App } from 'vue'

const setupPinia = (app: App) => {
  app.use(createPinia())
}

export default setupPinia
