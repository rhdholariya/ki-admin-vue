    import { createRouter, createWebHistory } from 'vue-router'

    // dashboard routes
    import EcommerceDashboard from '@/views/Dashboard/Ecommerce/index.vue'
    import ProjectDashboard from '@/views/Dashboard/Project/index.vue'


    // uikit routes

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
    import AnimatedIconPage from "@/views/IconsPages/Animated/index.vue";
    import IconoirIconPage from "@/views/IconsPages/Iconoir/index.vue";
    import PhosphorIconPage from "@/views/IconsPages/Phosphor/index.vue";

    // misc routes
    import MiscPage from "@/views/Misc/index.vue";

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
    import LockScreenPage from '@/views/AuthPage/LockScreen/index.vue'
    import PasswordCreateImgPage from '@/views/AuthPage/PasswordCreateImg/index.vue'
    import PasswordCreatePage from '@/views/AuthPage/PasswordCreate/index.vue'
    import PasswordResetImgPage from '@/views/AuthPage/PasswordResetImg/index.vue'
    import PasswordResetPage from '@/views/AuthPage/PasswordReset/index.vue'
    import SignUpWithBgImagePage from '@/views/AuthPage/SignUpWithBgImage/index.vue'
    import SignUpPage from '@/views/AuthPage/SignUp/index.vue'
    import SignInWithBgImagePage from '@/views/AuthPage/SignInWithBgImage/index.vue'
    import SignInPage from '@/views/AuthPage/SignIn/index.vue'

    // ready to use pages routes
    import FormWizardsPage from '@/views/ReadyToUse/FormWizards/index.vue'
    import FormWizards1Page from '@/views/ReadyToUse/FormWizard1/index.vue'
    import ReadyToUseTablesPage from '@/views/ReadyToUse/ReadyToUseTables/index.vue'
    import FormWizards2Page from '@/views/ReadyToUse/FormWizard2/index.vue'
    import ReadyToUseFormPage from '@/views/ReadyToUse/ReadyToUseForm/index.vue'

    // Form validation routes
    import FormValidationPage from '@/views/ FormsElements/FormValidation/index.vue'
    import BaseInputPage from '@/views/ FormsElements/BaseInput/index.vue'
    import CheckboxRadioPage from '@/views/ FormsElements/CheckboxRadio/index.vue'
    import InputGroupsPage from '@/views/ FormsElements/InputGroups/index.vue'
    import InputMasksPage from '@/views/ FormsElements/InputMasks/index.vue'
    import FloatingLabelsPage from '@/views/ FormsElements/FloatingLabels/index.vue'
    import DatetimepickerPage from '@/views/ FormsElements/Datetimepicker/index.vue'
    import TouchspinPage from '@/views/ FormsElements/Touchspin/index.vue'
    import Select2Page from '@/views/ FormsElements/Select2/index.vue'
    import SwitchPage from '@/views/ FormsElements/Switch/index.vue'
    import RangeSliderPage from '@/views/ FormsElements/RangeSlider/index.vue'
    import TextareaPage from '@/views/ FormsElements/Textarea/index.vue'
    import ClipboardPage from '@/views/ FormsElements/Clipboard/index.vue'
    import DualListBoxesPage from '@/views/ FormsElements/DualListBoxes/index.vue'
    import DefaultFormsPage from '@/views/ FormsElements/DefaultForms/index.vue'
    import FileUploadPage from '@/views/ FormsElements/FileUpload/index.vue'
    import TypeaheadPage from '@/views/ FormsElements/Typeahead/index.vue'

    //Tables routes
    import BasicTablePage from '@/views/Table/BasicTable/index.vue'
    import AdvanceTablePage from '@/views/Table/AdvanceTable/index.vue'

    // app routes
    import CalendarPage from '@/views/Apps/Calendar/index.vue'
    import ProfilePage from '@/views/Apps/ProfilePage/Profile/index.vue'
    import SettingPage from '@/views/Apps/ProfilePage/Setting/index.vue'
    import ProjectPage from '@/views/Apps/ProjectPage/Projects/index.vue'
    import ProjectDetailsPage from '@/views/Apps/ProjectPage/ProjectDetails/index.vue'
    import ToDoPage from '@/views/Apps/Todo/index.vue'
    import TeamPage from '@/views/Apps/Team/index.vue'
    import ApiPage from '@/views/Apps/Api/index.vue'
    import InvoicePage from '@/views/Apps/invoice/index.vue'
    import ChatPage from '@/views/Apps/Chat/index.vue'
    import FileManagerPage from '@/views/Apps/FileManager/index.vue'
    import BookmarkPage from '@/views/Apps/Bookmark/index.vue'
    import KanbanPage from '@/views/Apps/KanbanBoard/index.vue'
    import TimelinePage from '@/views/Apps/Timeline/index.vue'
    import FaqPage from '@/views/Apps/Faq/index.vue'
    import PricingPage from '@/views/Apps/Pricing/index.vue'
    import GalleryPage from '@/views/Apps/Gallery/index.vue'
    import BlogPage from '@/views/Apps/BlogPages/Blog/index.vue'
    import BlogDetailsPage from '@/views/Apps/BlogPages/BlogDetails/index.vue'
    import AddBlogPage from '@/views/Apps/BlogPages/AddBlog/index.vue'
    import CartPage from '@/views/Apps/EshopPage/Cart/index.vue'
    import ProductPage from '@/views/Apps/EshopPage/Product/index.vue'
    import AddProductPage from '@/views/Apps/EshopPage/AddProduct/index.vue'
    import AddProductDetailsPage from '@/views/Apps/EshopPage/ProductDetails/index.vue'
    import ProductListPage from '@/views/Apps/EshopPage/ProductList/index.vue'
    import OrderPage from '@/views/Apps/EshopPage/Order/index.vue'
    import OrderDetailsPage from '@/views/Apps/EshopPage/OrderDetails/index.vue'
    import OrderListPage from '@/views/Apps/EshopPage/OrderList/index.vue'
    import CheckoutPage from '@/views/Apps/EshopPage/Checkout/index.vue'
    import WishlistPage from '@/views/Apps/EshopPage/Wishlist/index.vue'
    import EmailPage from '@/views/Apps/EmailPage/Email/index.vue'
    import ReadEmailPage from '@/views/Apps/EmailPage/ReadEmail/index.vue'
    import TicketPage from '@/views/Apps/TicketPage/Ticket/index.vue'
    import TicketDetailsPage from '@/views/Apps/TicketPage/TicketDetails/index.vue'

    import WidgetsPage from '@/views/Widgets/index.vue'

    // maps routes
    import GoogleMapPage from '@/views/Map/GoogleMap/index.vue'
    import LeafletPage from '@/views/Map/LeafletMap/index.vue'


    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [

            // dashboard routes
            {path: '/', redirect: '/dashboard/ecommerce'},
            {path: '/dashboard/ecommerce', name: 'home', component: EcommerceDashboard},
            {path: '/dashboard/project', name: 'project-dashboard', component: ProjectDashboard},

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
            {path: '/icons/animated', name: 'animated', component: AnimatedIconPage},
            {path: '/icons/iconoir', name: 'iconoir', component: IconoirIconPage},
            {path: '/icons/phosphor', name: 'phosphor', component: PhosphorIconPage},

            // misc route
            {path: '/misc', name: 'miscpage', component: MiscPage},


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
            {path: '/auth-pages/lock-screen', name: 'LockScreen', component:LockScreenPage},
            {path: '/auth-pages/password-create-img', name: 'PasswordCreateImg', component:PasswordCreateImgPage},
            {path: '/auth-pages/password-create', name: 'PasswordCreate', component:PasswordCreatePage},
            {path: '/auth-pages/password-reset-img', name: 'PasswordResetImg', component:PasswordResetImgPage},
            {path: '/auth-pages/password-reset', name: 'PasswordReset', component:PasswordResetPage},
            {path: '/auth-pages/sign-up-with-bg-image', name: 'SignUpWithBgImage', component:SignUpWithBgImagePage},
            {path: '/auth-pages/sign-up', name: 'SignUp', component:SignUpPage},
            {path: '/auth-pages/sign-in-with-bg-image', name: 'SignInWithBgImage', component:SignInWithBgImagePage},
            {path: '/auth-pages/sign-in', name: 'SignIn', component:SignInPage},

            //ready to use pages routes

            {path: '/ready-to-use/form-wizards', name: 'FormWizards', component:FormWizardsPage},
            {path: '/ready-to-use/form-wizard-1', name: 'FormWizard1', component:FormWizards1Page},
            {path: '/ready-to-use/ready-to-use-tables', name: 'ReadyToUseTables', component:ReadyToUseTablesPage},
            {path: '/ready-to-use/form-wizard-2', name: 'FormWizard2', component:FormWizards2Page},
            {path: '/ready-to-use/ready-to-use-form', name: 'ReadyToUseForm', component:ReadyToUseFormPage},

            //Form validation routes
            {path: '/forms-elements/form-validation', name: 'FormValidation', component:FormValidationPage},
            {path: '/forms-elements/base-input', name: 'BaseInput', component:BaseInputPage},
            {path: '/forms-elements/checkbox-radio', name: 'CheckboxRadio', component:CheckboxRadioPage},
            {path: '/forms-elements/input-groups', name: 'InputGroups', component:InputGroupsPage},
            {path: '/forms-elements/input-masks', name: 'InputMasks', component:InputMasksPage},
            {path: '/forms-elements/floating-labels', name: 'FloatingLabels', component:FloatingLabelsPage},
            {path: '/forms-elements/datetimepicker', name: 'DatetimePicker', component:DatetimepickerPage},
            {path: '/forms-elements/touch-spin', name: 'TouchSpin', component:TouchspinPage},
            {path: '/forms-elements/select2', name: 'Select2', component:Select2Page},
            {path: '/forms-elements/switch', name: 'Switch', component:SwitchPage},
            {path: '/forms-elements/range-slider', name: 'RangeSlider', component:RangeSliderPage},
            {path: '/forms-elements/textarea', name: 'Textarea', component:TextareaPage},
            {path: '/forms-elements/clipboard', name: 'Clipboard', component:ClipboardPage},
            {path: '/forms-elements/dual-list-boxes', name: 'DualListBoxes', component:DualListBoxesPage},
            {path: '/forms-elements/default-forms', name: 'DefaultForms', component:DefaultFormsPage},
            {path: '/forms-elements/file-upload', name: 'FileUpload', component:FileUploadPage},
            {path: '/forms-elements/typeahead', name: 'Typeahead', component:TypeaheadPage},

            //Tables routes
            {path: '/table/basictable', name: 'BasicTable', component:BasicTablePage},
            {path: '/table/advance-table', name: 'AdvanceTable', component:AdvanceTablePage},

            // apps routes
            {path: '/apps/calendar', name: 'calendar', component:CalendarPage},
            {path: '/apps/profile-page/profile', name: 'profile', component:ProfilePage},
            {path: '/apps/profile-page/setting', name: 'setting', component:SettingPage},
            {path: '/apps/projects-page/projects', name: 'project', component:ProjectPage},
            {path: '/apps/projects-page/projects-details', name: 'projectdetails', component:ProjectDetailsPage},
            {path: '/apps/todo', name: 'todo', component:ToDoPage},
            {path: '/apps/team', name: 'team', component:TeamPage},
            {path: '/apps/api', name: 'api', component:ApiPage},
            {path: '/apps/invoice', name: 'invoice', component:InvoicePage},
            {path: '/apps/chat', name: 'chat', component:ChatPage},
            {path: '/apps/file-manager', name: 'filemanager', component:FileManagerPage},
            {path: '/apps/bookmark', name: 'bookmark', component:BookmarkPage},
            {path: '/apps/kanban-board', name: 'kanban', component:KanbanPage},
            {path: '/apps/timeline', name: 'timeline', component:TimelinePage},
            {path: '/apps/faq', name: 'faq', component:FaqPage},
            {path: '/apps/pricing', name: 'pricing', component:PricingPage},
            {path: '/apps/gallery', name: 'gallery', component:GalleryPage},
            {path: '/apps/blog-page/blog', name: 'blogpage', component:BlogPage},
            {path: '/apps/blog-page/blog-details', name: 'blogdetails', component:BlogDetailsPage},
            {path: '/apps/blog-page/add-blog', name: 'addblog', component:AddBlogPage},
            {path: '/apps/e-shop/cart', name: 'cart', component:CartPage},
            {path: '/apps/e-shop/product', name: 'product', component:ProductPage},
            {path: '/apps/e-shop/add-product', name: 'addproduct', component:AddProductPage},
            {path: '/apps/e-shop/product-details', name: 'product-details', component:AddProductDetailsPage},
            {path: '/apps/e-shop/product-list', name: 'product-list', component:ProductListPage},
            {path: '/apps/e-shop/orders', name: 'orders', component:OrderPage},
            {path: '/apps/e-shop/orders-details', name: 'orders-details', component:OrderDetailsPage},
            {path: '/apps/e-shop/orders-list', name: 'orders-list', component:OrderListPage},
            {path: '/apps/e-shop/checkout', name: 'checkout', component:CheckoutPage},
            {path: '/apps/e-shop/wishlist', name: 'wishlist', component:WishlistPage},
            {path: '/apps/email-page/email', name: 'email', component:EmailPage},
            {path: '/apps/email-page/read-email', name: 'reademail', component:ReadEmailPage},
            {path: '/apps/ticket-page/ticket', name: 'ticket', component:TicketPage},
            {path: '/apps/ticket-page/ticket-details', name: 'ticket-details', component:TicketDetailsPage},

            // widget routes
            {path: '/widgets', name: 'widgets', component:WidgetsPage},

            // maps routes
            {path: '/map/google-maps', name: 'google-map', component:GoogleMapPage},
            {path: '/map/leaflet-map', name: 'leaflet-map', component:LeafletPage},
        ],

    })

    export default router
