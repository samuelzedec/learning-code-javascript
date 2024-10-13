import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './assets/global.css'
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount('#app')
//const app = createApp(App);
//app.use(router);
//const pinia = createPinia()
//app.use(pinia)
//app.mount('#app');