import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AlertPage from "@/views/ui-kits/AlertPage.vue";
import BadgesPage from "@/views/ui-kits/BadgesPage.vue";
import ButtonPage from "@/views/ui-kits/ButtonPage.vue";
import CardPage from "@/views/ui-kits/CardPage.vue";
import Error from "@/views/DefaultPages/Error.vue";
import ModalPage from "@/views/AdvanceUi/Modal/index.vue";
import OffcanvasPage from "@/views/AdvanceUi/OffcanvasToggle/index.vue";
import SweatAlertPage from "@/views/AdvanceUi/SweatAlert/index.vue";
import ScrollbarPage from "@/views/AdvanceUi/Scrollbar/index.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomeView,},
        {path: '/ui-kits/alert', name: 'alert', component: AlertPage,},
        {path: '/ui-kits/badges', name: 'badges', component: BadgesPage,},
        {path: '/ui-kits/buttons', name: 'button', component: ButtonPage,},
        {path: '/ui-kits/cards', name: 'card', component: CardPage,},
        {path: '/errors', name: 'error', component: Error},

        // advanceui routes
        {path: '/advance-ui/modals', name: 'modal', component: ModalPage},
        {path: '/advance-ui/offcanvas-toggle', name: 'offcanvas', component: OffcanvasPage},
        {path: '/advance-ui/sweat-alert', name: 'sweatalert', component: SweatAlertPage},
        {path: '/advance-ui/scrollbar', name: 'sweatalert', component: ScrollbarPage},



    ],
})

export default router
