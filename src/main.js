import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//建立Vue應用程式
const app = createApp(App)
const pinia = createPinia()
//把路由綁訂到Vue應用程式
app.use(router)
app.use(pinia)

app.mount('#app')
