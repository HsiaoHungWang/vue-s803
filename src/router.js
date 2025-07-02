import { createRouter, createWebHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"
import Team1View from "./views/Team1View.vue"
import Team2View from "./views/Team2View.vue"

//路由設定
const routes = [
    //http://localhost:5173/
    { path: "/", component: HomeView, name: "home" },
    //http://localhost:5173/about
    {
        path: "/aboutus", component: AboutView, name: "about",
        children: [
            //http://localhost:5173/aboutus/team1
            { path: "team1", component: Team1View, name: "team1" },
            //http://localhost:5173/aboutus/team2
            { path: "team2", component: Team2View, name: "team2" }
        ]
    },
    //http://localhost:5173/contact => ContactView
    { path: "/contact", component: ContactView, name: "contact" }
]

//建立路由物件
const router = createRouter({
    history: createWebHistory(),  //History API pushState()
    routes
})

export default router