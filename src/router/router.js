import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AlertPage from '@/views/ui-kits/Alert/index.vue';
import Badges from "@/views/ui-kits/Badges/index.vue";
import Button from "@/views/ui-kits/Button/index.vue";
import Card from "@/views/ui-kits/Card/index.vue";
import Error from "@/views/DefaultPages/Error.vue";
import SweatAlertPage from "@/views/AdvanceUi/SweatAlert/index.vue";
import SpinnerPage from "@/views/AdvanceUi/Spinner/index.vue";
import AnimationPage from "@/views/AdvanceUi/Animation/index.vue";
import  OffcanvasPage from "@/views/AdvanceUi/OffcanvasToggle/index.vue";
import  ScrollbarPage from "@/views/AdvanceUi/Scrollbar/index.vue";
import  ModalPage from "@/views/AdvanceUi/Modal/index.vue";
import  VideoEmbedPage from "@/views/AdvanceUi/VideoEmbed/index.vue";
import  TourPage from "@/views/AdvanceUi/Tour/index.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomeView,},
        {path: '/ui-kits/alert', name: 'alerts', component: AlertPage},
        {path: '/ui-kits/badges', name: 'badges', component: Badges},
        {path: '/ui-kits/buttons', name: 'button', component:Button},
        {path: '/ui-kits/cards', name: 'card', component:Card},
        {path: '/errors', name: 'error', component: Error},

        // advanceui routes
        {path: '/advance-ui/offcanvas-toggle', name: 'modal', component: OffcanvasPage},
        {path: '/advance-ui/sweat-alert', name: 'offcanvas', component: SweatAlertPage},
        {path: '/advance-ui/spinners', name: 'spinners', component: SpinnerPage},
        {path: '/advance-ui/animation', name: 'animation', component: AnimationPage},
        {path: '/advance-ui/scrollbar', name: 'scrollbar', component: ScrollbarPage},
        {path: '/advance-ui/modals', name: 'modals', component: ModalPage},
        {path: '/advance-ui/video-embed', name: 'videoembed', component: VideoEmbedPage},
        {path: '/advance-ui/tour', name: 'tour', component: TourPage},

    ],

})

export default router
