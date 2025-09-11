import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView,
        },
        { path: "/", name: "Dashboard", component: Dashboard },
        { path: "/users", name: "Users", component: Users },
        { path: "/settings", name: "Settings", component: Settings },
    ],
})

export default router
