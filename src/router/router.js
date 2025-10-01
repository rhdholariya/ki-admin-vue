import { createRouter, createWebHistory } from 'vue-router'
// uikit routes
import HomeView from '@/views/HomeView.vue'
import BadgesPage from "@/views/UiKits/Badges/index.vue";
import ButtonPage from "@/views/UiKits/Button/index.vue";
import CardPage from "@/views/UiKits/Card/index.vue";
import GridPage from "@/views/UiKits/grid/index.vue";
import DropdownPage from "@/views/UiKits/Dropdown/index.vue";
import AvatarPage from "@/views/UiKits/Avatar/index.vue";
import NotificationPage from "@/views/UiKits/Notification/index.vue";
import AccordionPage from "@/views/UiKits/Accordion/index.vue";
import AlertPage from "@/views/UiKits/Alert/index.vue";
import TabPage from "@/views/UiKits/Tab/index.vue";
import ProgressPage from "@/views/UiKits/Progress/index.vue";
import ListPage from "@/views/UiKits/Lists/index.vue";
import HelperClassesPage from "@/views/UiKits/HelperClasses/index.vue";
import BackgroundPage from "@/views/UiKits/Background/index.vue";
import DividerPage from "@/views/UiKits/Divider/index.vue";
import RibbonsPage from "@/views/UiKits/Ribbons/index.vue";
import EditorPage from "@/views/UiKits/Editor/index.vue";
import CollapsePage from "@/views/UiKits/Collapse/index.vue";
import ShadowPage from "@/views/UiKits/Shadow/index.vue";
import WrapperPage from "@/views/UiKits/Wrapper/index.vue";
import BulletPage from "@/views/UiKits/Bullet/index.vue";
import PlaceholderPage from "@/views/UiKits/Placeholder/index.vue";
import AlignmentPage from "@/views/UiKits/Alignment/index.vue";

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
import DraggablePage from "@/views/AdvanceUi/Draggable/index.vue";

// Icon pages Routes //

import FontAwesomePage from "@/views/IconsPages/FontAwesom/index.vue";
import FlagIconPage from "@/views/IconsPages/Flag/index.vue";
import TablerIconPage from "@/views/IconsPages/TablerIcon/index.vue";
import WeatherIconPage from "@/views/IconsPages/Wheather/index.vue";

// Other Pages Routes //
import TermsConditionPage from "@/views/OtherPages/TermsCondition/index.vue";
import PrivacyPolicyPage from "@/views/OtherPages/PrivacyPolicy/index.vue";
import SitemapPage from "@/views/OtherPages/Sitemap/index.vue";
import CommingSoonPage from "@/views/OtherPages/ComingSoon/index.vue";
import MaintenancePage from "@/views/OtherPages/Maintenance/index.vue";
import BlankPage from "@/views/OtherPages/Blank/index.vue";

// error pages routes //
import ServiceUnavailablePage from '@/views/ErrorPage/ServiceUnavailable/index.vue'
import InternalServerPage from '@/views/ErrorPage/InternalServer/index.vue'
import NotFoundPage from '@/views/ErrorPage/NotFound/index.vue'
import ForbiddenPage from '@/views/ErrorPage/Forbidden/index.vue'
import BadRequestPage from '@/views/ErrorPage/BadRequest/index.vue'

// Auth Page routes //
import TwoStepVerificationImgPage from '@/views/AuthPage/TwoStepVerificationImg/index.vue'
import TwoStepVerificationPage from '@/views/AuthPage/TwoStepVerification/index.vue'
import LockScreenImgPage from '@/views/AuthPage/LockScreenImg/index.vue'



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
        {path: '/ui-kits/lists', name: 'Lists', component:ListPage},
        {path: '/ui-kits/helper-classes', name: 'Helper-Classes', component:HelperClassesPage},
        {path: '/ui-kits/background', name: 'Background', component:BackgroundPage},
        {path: '/ui-kits/divider', name: 'Divider', component:DividerPage},
         {path: '/ui-kits/ribbons', name: 'Ribbons', component:RibbonsPage},
        {path: '/ui-kits/editor', name: 'Editor', component:EditorPage},
        {path: '/ui-kits/collapse', name: 'Collapse', component:CollapsePage},
        {path: '/ui-kits/shadow', name: 'Shadow', component:ShadowPage},
        {path: '/ui-kits/wrapper', name: 'Wrapper', component:WrapperPage},
        {path: '/ui-kits/bullet', name: 'Bullet', component:BulletPage},
        {path: '/ui-kits/placeholder', name: 'Placeholder', component:PlaceholderPage},
        {path: '/ui-kits/alignment-thing', name: 'Alignment', component:AlignmentPage},



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
        {path: '/advance-ui/draggable', name: 'draggable', component: DraggablePage},

        // icon pages routes //
        {path: '/icons/font-awesome', name: 'fontawesome', component: FontAwesomePage},
        {path: '/icons/flag', name: 'flag', component: FlagIconPage},
        {path: '/icons/tabler', name: 'tabler', component: TablerIconPage},
        {path: '/icons/weather', name: 'weather', component: WeatherIconPage},


        //Other Pages Routes //
        {path: '/other-pages/terms-condition', name: 'termscondtion', component: TermsConditionPage},
        {path: '/other-pages/privacy-policy', name: 'privacypolicy', component: PrivacyPolicyPage},
        {path: '/other-pages/sitemap', name: 'Sitemap', component: SitemapPage},
        {path: '/other-pages/coming-soon', name: 'ComingSoon', component: CommingSoonPage},
        {path: '/other-pages/maintenance', name: 'Maintenance', component: MaintenancePage},
        {path: '/other-pages/blank', name: 'Blank', component: BlankPage},

        // Error Page Routes //
        {path: '/error-pages/service-unavailable', name: 'ServiceUnavailable', component:ServiceUnavailablePage},
        {path: '/error-pages/internal-server', name: 'InternalServer', component:InternalServerPage},
        {path: '/error-pages/not-found', name: 'NotFound', component:NotFoundPage},
        {path: '/error-pages/forbidden', name: 'Forbidden', component:ForbiddenPage},
        {path: '/error-pages/bad-request', name: 'BadRequest', component:BadRequestPage},

        // Auth Page Routes //
        {path: '/auth-pages/two-step-verification-img', name: 'TwoStepVerificationImg', component:TwoStepVerificationImgPage},
        {path: '/auth-pages/two-step-verification', name: 'TwoStepVerification', component:TwoStepVerificationPage},
        {path: '/auth-pages/lock-screen-img', name: 'LockScreenImg', component:LockScreenImgPage},


    ],

})

export default router
