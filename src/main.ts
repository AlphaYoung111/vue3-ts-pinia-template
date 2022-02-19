import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import setupPinia from './store'
import '@/service/test'
const app = createApp(App)

setupPinia(app)

app.use(router).mount('#app')
