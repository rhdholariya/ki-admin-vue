import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AlertPage from "@/views/ui-kits/AlertPage.vue";
import BadgesPage from "@/views/ui-kits/BadgesPage.vue";
import ButtonPage from "@/views/ui-kits/ButtonPage.vue";
import CardPage from "@/views/ui-kits/CardPage.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomeView,},
        {path: '/alert', name: 'alert', component: AlertPage,},
        {path: '/badges', name: 'badges', component: BadgesPage,},
        {path: '/button', name: 'button', component: ButtonPage,},
        {path: '/card', name: 'card', component: CardPage,},
    ],
})

export default router
