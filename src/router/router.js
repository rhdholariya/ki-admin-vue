import { createRouter, createWebHistory } from 'vue-router'
// uikit routes
import HomeView from '@/views/HomeView.vue'
import BadgesPage from "@/views/UiKits/Badges/index.vue";
import ButtonPage from "@/views/UiKits/Button/index.vue";
import CardPage from "@/views/UiKits/Card/index.vue";
import GridPage from "@/views/UiKits/grid/index.vue";
import DropdownPage from "@/views/UiKits/Dropdown/index.vue";
import Error from "@/views/DefaultPages/Error.vue";
import AvatarPage from "@/views/UiKits/Avatar/index.vue";
import NotificationPage from "@/views/UiKits/Notification/index.vue";
import AccordionPage from "@/views/UiKits/Accordion/index.vue";
import AlertPage from "@/views/UiKits/Alert/index.vue";
import TabPage from "@/views/UiKits/Tab/index.vue";
import ProgressPage from "@/views/UiKits/Progress/index.vue";

// advanceuikit routes
import  ModalPage from "@/views/AdvanceUi/Modal/index.vue";
import  OffcanvasPage from "@/views/AdvanceUi/OffcanvasToggle/index.vue";
import SweatAlertPage from "@/views/AdvanceUi/SweatAlert/index.vue";
import  ScrollbarPage from "@/views/AdvanceUi/Scrollbar/index.vue";
import SpinnerPage from "@/views/AdvanceUi/Spinner/index.vue";
import AnimationPage from "@/views/AdvanceUi/Animation/index.vue";
import  VideoEmbedPage from "@/views/AdvanceUi/VideoEmbed/index.vue";
import TourPage from "@/views/AdvanceUi/Tour/index.vue";
import SliderPage from "@/views/AdvanceUi/Slider/index.vue";
import BootstrapVuePage from "@/views/AdvanceUi/BootstrapVueSlider/index.vue";
import ScrollpyPage from "@/views/AdvanceUi/Scrollpy/index.vue";
import TooltipPage from "@/views/AdvanceUi/TooltipPopover/index.vue";
import RatingPage from "@/views/AdvanceUi/rating/index.vue";
import PrismPage from "@/views/AdvanceUi/Prism/index.vue";
import CountDownPage from "@/views/AdvanceUi/CountDown/index.vue";
import CountUpPage from "@/views/AdvanceUi/CountUp/index.vue";










const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomeView,},
        {path: '/ui-kits/alert', name: 'alerts', component: AlertPage},
        {path: '/ui-kits/badges', name: 'badges', component: BadgesPage},
        {path: '/ui-kits/buttons', name: 'button', component:ButtonPage},
        {path: '/ui-kits/cards', name: 'card', component:CardPage},
        {path: '/ui-kits/dropdown', name: 'dropdown', component:DropdownPage},
        {path: '/ui-kits/grid', name: 'grid', component:GridPage},
        {path: '/errors', name: 'error', component: Error},
        {path: '/ui-kits/avatar', name: 'Avatar', component:AvatarPage},
         {path: '/ui-kits/tabs', name: 'Tab', component:TabPage},
        {path: '/ui-kits/accordions', name: 'Accordion', component:AccordionPage},
        {path: '/ui-kits/progress', name: 'Progress', component:ProgressPage},
        {path: '/ui-kits/notifications', name: 'Notification', component:NotificationPage},



        // advanceui routes
        {path: '/advance-ui/offcanvas-toggle', name: 'modal', component: OffcanvasPage},
        {path: '/advance-ui/sweat-alert', name: 'offcanvas', component: SweatAlertPage},
        {path: '/advance-ui/spinners', name: 'spinners', component: SpinnerPage},
        {path: '/advance-ui/animation', name: 'animation', component: AnimationPage},
        {path: '/advance-ui/scrollbar', name: 'scrollbar', component: ScrollbarPage},
        {path: '/advance-ui/modals', name: 'modals', component: ModalPage},
        {path: '/advance-ui/video-embed', name: 'videoembed', component: VideoEmbedPage},
        {path: '/advance-ui/tour', name: 'tour', component: TourPage},
        {path: '/advance-ui/slider', name: 'slider', component: SliderPage},
        {path: '/advance-ui/bootstrap-slider', name: 'bootsraptvue', component: BootstrapVuePage},
        {path: '/advance-ui/scrollpy', name: 'scrollpy', component: ScrollpyPage},
        {path: '/advance-ui/tooltip-popovers', name: 'tooltip', component: TooltipPage},
        {path: '/advance-ui/rating', name: 'rating', component: RatingPage},
        {path: '/advance-ui/prismjs', name: 'prism', component: PrismPage},
        {path: '/advance-ui/count-down', name: 'countdown', component: CountDownPage},
        {path: '/advance-ui/count-up', name: 'countup', component: CountUpPage},


    ],

})

export default router
