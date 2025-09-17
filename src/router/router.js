import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Badges from "@/views/ui-kits/Badges/index.vue";
import Button from "@/views/ui-kits/Button/index.vue";
import Card from "@/views/ui-kits/Card/index.vue";
import Error from "@/views/DefaultPages/Error.vue";
import ModalPage from "@/views/AdvanceUi/Modal/index.vue";
import OffcanvasPage from "@/views/AdvanceUi/OffcanvasToggle/index.vue";
import SweatAlertPage from "@/views/AdvanceUi/SweatAlert/index.vue";
import ScrollbarPage from "@/views/AdvanceUi/Scrollbar/index.vue";
import AlertPage from '@/views/ui-kits/Alert/Index.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomeView,},
        {path: '/ui-kits/badges', name: 'badges', component: Badges},
        {path: '/ui-kits/buttons', name: 'button', component:Button},
        {path: '/ui-kits/cards', name: 'card', component:Card},
        {path: '/errors', name: 'error', component: Error},

        // advanceui routes
        {path: '/advance-ui/modals', name: 'modal', component: ModalPage},
        {path: '/advance-ui/offcanvas-toggle', name: 'offcanvas', component: OffcanvasPage},
        {path: '/advance-ui/sweat-alert', name: 'sweatalert', component: SweatAlertPage},
        {path: '/advance-ui/scrollbar', name: 'sweatalert', component: ScrollbarPage},
        {path: '/ui-kits/alert', name: 'alerts', component: AlertPage},
    ],

})

export default router
