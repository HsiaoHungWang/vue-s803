import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//建立Vue應用程式
const app = createApp(App)
//把路由綁訂到Vue應用程式
app.use(router)

app.mount('#app')
