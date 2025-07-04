import { createRouter, createWebHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"
import Team1View from "./views/Team1View.vue"
import Team2View from "./views/Team2View.vue"
import MemberCenter from "./views/MemberCenter.vue"
import NotFound from "./views/NotFound.vue"
import TodosView_Full from "./views/TodosView_Full.vue"
import TabsView from "./views/TabsView.vue"
import SpotsView from "./views/SpotsView.vue"

//路由設定
const routes = [
    //http://localhost:5173/ => ttp://localhost:5173/home
    { path: "/", redirect: "/home" },
    //http://localhost:5173/home
    { path: "/home", component: HomeView, name: "home" },
    //http://localhost:5173/aboutus =>  //http://localhost:5173/aboutus/team1
    {
        path: "/aboutus", component: AboutView, name: "about",
        redirect: "/aboutus/team1",
        children: [
            //http://localhost:5173/aboutus/team1
            { path: "team1", component: Team1View, name: "team1" },
            //http://localhost:5173/aboutus/team2
            { path: "team2", component: Team2View, name: "team2" }
        ]
    },
    //http://localhost:5173/contact/ => ContactView
    //http://localhost:5173/contactus => ContactView
    {
        path: "/contact/", component: ContactView, name: "contact",
        alias: "/contactus"
    },
    //http://localhost:5173/todos => TodosView_Full
    {
        path: "/todos", component: TodosView_Full, name: "todos",
    },
    //http://localhost:5173/tabs => TabsView
    {
        path: '/tabs', component: TabsView, name: 'tabs'
    },
    //http://localhost:5173/member/12 => MemberCenter
    { path: "/member/:id", component: MemberCenter, name: "member", props: true },
    //ttp://localhost:5173/spots => SpotsView
    { path: "/spots", component: SpotsView, name: "spots" },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

//建立路由物件
const router = createRouter({
    history: createWebHistory(),  //History API pushState()
    routes
})

export default router