import { createRouter, createWebHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"

//路由設定
const routes = [
    //http://localhost:5173/
    { path: "/", component: HomeView },
    //http://localhost:5173/about
    { path: "/about", component: AboutView },
    //http://localhost:5173/xyz => ContactView
    { path: "/xyz", component: ContactView }
]

//建立路由物件
const router = createRouter({
    history: createWebHistory(),  //History API pushState()
    routes
})

export default router