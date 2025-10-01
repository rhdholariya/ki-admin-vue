<script setup>
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
} from 'bootstrap-vue-next'

import {
    PhHouse,
    PhDatabase,
    PhEnvelopeSimple,
    PhShoppingCartSimple,
    PhSquaresFour,
    PhNotepad,
    PhChartPieSlice,
    PhCards,
    PhMapTrifold,
    PhChartPie,
    PhGridFour,
    PhNotePencil,
    PhHandPointing,
    PhNotebook,
    PhWarning, PhNumberCircleTwo, PhFileText, PhHeadphones, PhCirclesThreePlus, PhFirstAid, PhBriefcase, PhBrowsers
} from '@phosphor-icons/vue'
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

// --- SITEMAP DATA ---
const sitemapData = [
    {
        title: 'Dashboards',
        icon: PhHouse,
        children: [
            { title: 'Ecommerce', to: '/dashboards/ecommerce' },
            { title: 'Projects', to: '/dashboards/projects' },
            { title: 'Crypto', to: '/dashboards/crypto' },
            { title: 'Education', to: '/dashboards/education' }
        ]
    },
    {
        title: 'Apps',
        icon: PhDatabase,
        children: [
            { title: 'Calendar', to: '/apps/calendar' },
            { title: 'Invoice', to: '/apps/invoice' },
            { title: 'Kanban Board', to: '/apps/kanban' },
            { title: 'Profile', to: '/apps/profile' },
            { title: 'Timeline', to: '/apps/timeline' },
            { title: 'Faqs', to: '/apps/faqs' },
            { title: 'Pricing', to: '/apps/pricing' },
            { title: 'Gallery', to: '/apps/gallery' },
            { title: 'Team', to: '/apps/team' },
            { title: 'Chat', to: '/apps/chat' },
            {
                title: 'Email Page',
                icon: PhEnvelopeSimple,
                to: '/apps/email',
                children: [
                    { title: 'Email', to: '/apps/email/inbox' },
                    { title: 'Read Email', to: '/apps/email/read' }
                ]
            },
            {
                title: 'E-Shop',
                icon: PhShoppingCartSimple,
                to: '/apps/e-shop',
                children: [
                    { title: 'Cart', to: '/apps/e-shop/cart' },
                    { title: 'Product', to: '/apps/e-shop/product' },
                    { title: 'Add Product', to: '/apps/e-shop/add-product' },
                    { title: 'Product-Details', to: '/apps/e-shop/product-details' },
                    { title: 'Product List', to: '/apps/e-shop/product-list' },
                    { title: 'Orders', to: '/apps/e-shop/orders' },
                    { title: 'Orders Details', to: '/apps/e-shop/orders-details' },
                    { title: 'Orders List', to: '/apps/e-shop/orders-list' },
                    { title: 'Checkout', to: '/apps/e-shop/checkout' },
                    { title: 'Wishlist', to: '/apps/e-shop/wishlist' }
                ]
            },
            {
                title: 'Projects Page',
                to: '/apps/projects',
                children: [
                    { title: 'Projects', to: '/apps/projects/list' },
                    { title: 'Projects Details', to: '/apps/projects/details' }
                ]
            },
            { title: 'Todo', to: '/apps/todo' },
            { title: 'Filemanager', to: '/apps/filemanager' },
            {
                title: 'Blog Page',
                to: '/apps/blog',
                children: [
                    { title: 'Blog', to: '/apps/blog/list' },
                    { title: 'Blog Details', to: '/apps/blog/details' }
                ]
            }
        ]
    },
    {
        title: 'Widgets',
        icon: PhChartPieSlice,
        to: '/widgets'
    },
    {
        title: 'Component',
        to: '/components',
        children: [
            {
                title: 'UI Kit',
                icon: PhFirstAid,
                to: '/components/ui-kit',
                children: [
                    { title: 'Cheatsheet', to: '/components/ui-kit/cheatsheet' },
                    { title: 'Alert', to: '/components/ui-kit/alert' },
                    { title: 'Badges', to: '/components/ui-kit/badges' },
                    { title: 'Buttons', to: '/components/ui-kit/buttons' },
                    { title: 'Cards', to: '/components/ui-kit/cards' },
                    { title: 'Dropdown', to: '/components/ui-kit/dropdown' },
                    { title: 'Grid', to: '/components/ui-kit/grid' },
                    { title: 'Avatar', to: '/components/ui-kit/avatar' },
                    { title: 'Tabs', to: '/components/ui-kit/tabs' },
                    { title: 'Accordions', to: '/components/ui-kit/accordions' },
                    { title: 'Progress', to: '/components/ui-kit/progress' },
                    { title: 'Notifications', to: '/components/ui-kit/notifications' },
                    { title: 'Lists', to: '/components/ui-kit/lists' },
                    { title: 'Helper Classes', to: '/components/ui-kit/helper-classes' },
                    { title: 'Background', to: '/components/ui-kit/background' },
                    { title: 'Divider', to: '/components/ui-kit/divider' },
                    { title: 'Ribbons', to: '/components/ui-kit/ribbons' },
                    { title: 'Editor', to: '/components/ui-kit/editor' },
                    { title: 'Collapse', to: '/components/ui-kit/collapse' },
                    { title: 'Navbar', to: '/components/ui-kit/navbar' },
                    { title: 'Footer', to: '/components/ui-kit/footer' },
                    { title: 'Shadow', to: '/components/ui-kit/shadow' },
                    { title: 'Wrapper', to: '/components/ui-kit/wrapper' },
                    { title: 'Bullet', to: '/components/ui-kit/bullet' },
                    { title: 'Placeholder', to: '/components/ui-kit/placeholder' },
                    { title: 'Alignment Thing', to: '/components/ui-kit/alignment' }
                ]
            },
            {
                title: 'Advance UI',
                icon: PhBriefcase,
                to: '/components/advance-ui',
                children: [
                    { title: 'Modals', to: '/components/advance-ui/modals' },
                    { title: 'Offcanvas Toggle', to: '/components/advance-ui/offcanvas' },
                    { title: 'Sweat Alert', to: '/components/advance-ui/sweat-alert' },
                    { title: 'Scrollbar', to: '/components/advance-ui/scrollbar' },
                    { title: 'Spinners', to: '/components/advance-ui/spinners' },
                    { title: 'Animation', to: '/components/advance-ui/animation' },
                    { title: 'Video Embed', to: '/components/advance-ui/video-embed' },
                    { title: 'Tour', to: '/components/advance-ui/tour' },
                    { title: 'Slider', to: '/components/advance-ui/slider' },
                    { title: 'Bootstrap Slider', to: '/components/advance-ui/bootstrap-slider' },
                    { title: 'Scrollpy', to: '/components/advance-ui/scrollpy' },
                    { title: 'Tooltip & Popovers', to: '/components/advance-ui/tooltip-popovers' },
                    { title: 'Rating', to: '/components/advance-ui/rating' },
                    { title: 'Prismjs', to: '/components/advance-ui/prismjs' },
                    { title: 'Count Down', to: '/components/advance-ui/count-down' },
                    { title: 'Count Up', to: '/components/advance-ui/count-up' },
                    { title: 'Draggable', to: '/components/advance-ui/draggable' },
                    { title: 'Tree View', to: '/components/advance-ui/tree-view' },
                    { title: 'Block UI', to: '/components/advance-ui/block-ui' }
                ]
            },
            {
                title: 'Icons',
                icon: PhCirclesThreePlus,
                to: '/components/icons',
                children: [
                    { title: 'Fontawesome', to: '/components/icons/fontawesome' },
                    { title: 'Flag', to: '/components/icons/flag' },
                    { title: 'Tabler', to: '/components/icons/tabler' },
                    { title: 'Weather', to: '/components/icons/weather' },
                    { title: 'Animated', to: '/components/icons/animated' },
                    { title: 'Iconoir', to: '/components/icons/iconoir' },
                    { title: 'Phosphor', to: '/components/icons/phosphor' }
                ]
            },
            {
                title: 'Misc',
                icon: PhCards,
                to: '/components/misc'
            }
        ]
    },
    {
        title: 'Map & Charts',
        to: '/map-charts',
        children: [
            {
                title: 'Map',
                icon: PhMapTrifold,
                to: '/map-charts/map',
                children: [
                    { title: 'Google Maps', to: '/map-charts/map/google' },
                    { title: 'Leaflet Map', to: '/map-charts/map/leaflet' }
                ]
            },
            {
                title: 'Chart',
                icon: PhChartPie,
                to: '/map-charts/chart',
                children: [
                    { title: 'Chart JS', to: '/map-charts/chart/chartjs' },
                    {
                        title: 'Apexcharts',
                        to: '/map-charts/chart/apexcharts',
                        children: [
                            { title: 'Line', to: '/map-charts/chart/apexcharts/line' },
                            { title: 'Area', to: '/map-charts/chart/apexcharts/area' },
                            { title: 'Column', to: '/map-charts/chart/apexcharts/column' },
                            { title: 'Bar', to: '/map-charts/chart/apexcharts/bar' },
                            { title: 'Mixed', to: '/map-charts/chart/apexcharts/mixed' },
                            { title: 'Timeline & Range-Bars', to: '/map-charts/chart/apexcharts/timeline' },
                            { title: 'Candlestick', to: '/map-charts/chart/apexcharts/candlestick' },
                            { title: 'Boxplot', to: '/map-charts/chart/apexcharts/boxplot' },
                            { title: 'Bubble', to: '/map-charts/chart/apexcharts/bubble' },
                            { title: 'Scatter', to: '/map-charts/chart/apexcharts/scatter' },
                            { title: 'Heatmap', to: '/map-charts/chart/apexcharts/heatmap' },
                            { title: 'Treemap', to: '/map-charts/chart/apexcharts/treemap' },
                            { title: 'Pie', to: '/map-charts/chart/apexcharts/pie' },
                            { title: 'Radialbar', to: '/map-charts/chart/apexcharts/radialbar' },
                            { title: 'Radar', to: '/map-charts/chart/apexcharts/radar' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: 'Table & Forms',
        to: '/table-forms',
        children: [
            {
                title: 'Table',
                icon: PhGridFour,
                to: '/table-forms/table',
                children: [
                    { title: 'Basic Table', to: '/table-forms/table/basic' },
                    { title: 'Data Table', to: '/table-forms/table/data' },
                    { title: 'List JS', to: '/table-forms/table/listjs' },
                    { title: 'Advance Table', to: '/table-forms/table/advance' }
                ]
            },
            {
                title: 'Forms Elements',
                icon: PhNotePencil,
                to: '/table-forms/forms',
                children: [
                    { title: 'Form Validation', to: '/table-forms/forms/validation' },
                    { title: 'Base Input', to: '/table-forms/forms/base-input' },
                    { title: 'Checkbox & Radio', to: '/table-forms/forms/checkbox-radio' },
                    { title: 'Input Groups', to: '/table-forms/forms/input-groups' },
                    { title: 'Input Masks', to: '/table-forms/forms/input-masks' },
                    { title: 'Floating Labels', to: '/table-forms/forms/floating-labels' },
                    { title: 'Datetimepicker', to: '/table-forms/forms/datetimepicker' },
                    { title: 'Touch Spin', to: '/table-forms/forms/touch-spin' },
                    { title: 'Select2', to: '/table-forms/forms/select2' },
                    { title: 'Switch', to: '/table-forms/forms/switch' },
                    { title: 'Range Slider', to: '/table-forms/forms/range-slider' },
                    { title: 'Typeahead', to: '/table-forms/forms/typeahead' },
                    { title: 'Textarea', to: '/table-forms/forms/textarea' },
                    { title: 'Clipboard', to: '/table-forms/forms/clipboard' },
                    { title: 'File Upload', to: '/table-forms/forms/file-upload' },
                    { title: 'Dual Listboxes', to: '/table-forms/forms/dual-listboxes' },
                    { title: 'Default Forms', to: '/table-forms/forms/default' }
                ]
            },
            {
                title: 'Ready to Use',
                icon: PhHandPointing,
                to: '/table-forms/ready',
                children: [
                    { title: 'Form Wizards', to: '/table-forms/ready/wizards' },
                    { title: 'Form Wizards 1', to: '/table-forms/ready/wizards-1' },
                    { title: 'Form Wizards 2', to: '/table-forms/ready/wizards-2' },
                    { title: 'Ready to Use Form', to: '/table-forms/ready/forms' },
                    { title: 'Ready to Use Tables', to: '/table-forms/ready/tables' }
                ]
            }
        ]
    },
    {
        title: 'Pages',
        icon: PhNotebook,
        to: '/pages',
        children: [
            {
                title: 'Auth Pages',
                to: '/pages/auth',
                children: [
                    { title: 'Sign In', to: '/pages/auth/signin' },
                    { title: 'Sign In with Bgimage', to: '/pages/auth/signin-bg' },
                    { title: 'Sign Up', to: '/pages/auth/signup' },
                    { title: 'Sign Up with Bgimage', to: '/pages/auth/signup-bg' },
                    { title: 'Password Reset', to: '/pages/auth/password-reset' },
                    { title: 'Password Reset with Bgimage', to: '/pages/auth/password-reset-bg' },
                    { title: 'Password Create', to: '/pages/auth/password-create' },
                    { title: 'Lock Screen', to: '/pages/auth/lock-screen' },
                    { title: 'Lock Screen with Bgimage', to: '/pages/auth/lock-screen-bg' },
                    { title: 'Two-Step Verification', to: '/pages/auth/two-step' },
                    { title: 'Two-Step Verification with Bgimage', to: '/pages/auth/two-step-bg' }
                ]
            },
            {
                title: 'Error Pages',
                icon: PhWarning,
                to: '/pages/error',
                children: [
                    { title: 'Bad Request', to: '/pages/error/400' },
                    { title: 'Forbidden', to: '/pages/error/403' },
                    { title: 'Not Found', to: '/pages/error/404' },
                    { title: 'Internal Server', to: '/pages/error/500' },
                    { title: 'Service Unavailable', to: '/pages/error/503' }
                ]
            },
            {
                title: 'Other Pages',
                icon: PhBrowsers,
                to: '/pages/other',
                children: [
                    { title: 'Blank', to: '/pages/other/blank' },
                    { title: 'Maintenance', to: '/pages/other/maintenance' },
                    { title: 'Landing Page', to: '/pages/other/landing' },
                    { title: 'Coming Soon', to: '/pages/other/coming-soon' },
                    { title: 'Sitemap', to: '/pages/other/sitemap' },
                    { title: 'Privacy Policy', to: '/pages/other/privacy' },
                    { title: 'Terms & Condition', to: '/pages/other/terms' }
                ]
            }
        ]
    },
    {
        title: 'Others',
        to: '/others',
        children: [
            {
                title: '2 Level',
                icon: PhNumberCircleTwo,
                to: '/others/level',
                children: [
                    { title: 'Blank', to: '/others/level/blank' },
                    {
                        title: 'Another Level',
                        to: '/others/level/another',
                        children: [{ title: 'Blank', to: '/others/level/another/blank' }]
                    }
                ]
            },
            {
                title: 'Document',
                icon: PhFileText,
                to: '/others/document'
            },
            {
                title: 'Support',
                icon: PhHeadphones,
                to: '/others/support'
            }
        ]
    }
]

// --- DESCRIPTION MAP DATA ---
const descriptionMapData = [
    {
        title: 'Dashboards',
        icon: PhHouse,
        to: '/dashboards',
        children: [
            {
                title: 'Ecommerce',
                to: '/dashboards/ecommerce',
                description: 'E-commerce dashboard involves presenting key metrics and insights that help businesses make informed decisions. Here are some essential components and ideas for an e-commerce dashboard.'
            },
            {
                title: 'Project',
                to: '/dashboards/projects',
                description: 'Project management dashboard provides an overview of project progress, team performance, and key milestones.'
            },
            {
                title: 'Crypto',
                to: '/dashboards/crypto',
                description: 'Cryptocurrency dashboard displays real-time market data, portfolio performance, and trading insights.'
            },
            {
                title: 'Education',
                to: '/dashboards/education',
                description: 'Education dashboard tracks student progress, course completion, and learning analytics.'
            }
        ]
    },
    {
        title: 'Apps',
        icon: PhSquaresFour,
        to: '/apps',
        children: [
            {
                title: 'Kanban board',
                to: '/apps/kanban',
                description: 'Visual task management system that helps teams organize and prioritize work efficiently.'
            },
            {
                title: 'Email-Page',
                to: '/apps/email',
                children: [
                    {
                        title: 'Email',
                        to: '/apps/email/inbox',
                        description: 'Creating effective content for an e-commerce email page involves presenting critical email marketing metrics and performance indicators.'
                    }
                ]
            },
            {
                title: 'Calendar',
                to: '/apps/calendar',
                description: 'Interactive calendar application for scheduling events, meetings, and tracking important dates.'
            }
        ]
    },
    {
        title: 'UI Kit',
        icon: PhFirstAid,
        to: '/components/ui-kit',
        description: 'Comprehensive collection of reusable UI components and design elements for building consistent interfaces.'
    },
    {
        title: 'Advance UI',
        icon: PhBriefcase,
        to: '/components/advance-ui',
        description: 'Advanced user interface components including modals, tooltips, sliders, and interactive elements.'
    },
    {
        title: 'Other Pages',
        icon: PhBrowsers,
        to: '/pages/other',
        children: [
            {
                title: 'Landing Page',
                to: '/pages/other/landing',
                description: 'Landing page involves presenting key metrics and insights that help businesses make informed decisions. Here are some essential components and ideas for an e-commerce dashboard.'
            },
            {
                title: 'Maintenance',
                to: '/pages/other/maintenance',
                description: 'Maintenance page template for displaying system status and scheduled maintenance information.'
            }
        ]
    }
]


// === Breadcrumb
const breadcrumbItems = {
    title: "Sitemap",
    items: [
        { label: "Other Pages", icon: PhNotepad },
        { label: "Sitemap", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems" />

                <b-row>
                    <!-- Left Side: Vertical Sitemap -->
                    <b-col>
                        <b-card class="sitemap-card" no-body>
                            <b-card-header>
                                <h5>Vertically Map</h5>
                            </b-card-header>
                            <b-card-body class="app-scroll ">
                                <b-col cols="12">
                                    <div class="vertical-sitemap">
                                        <ul class="list-unstyled mb-0">
                                            <li class="p-0 parent-title">
                                                <RouterLink to="/" class="fw-medium fs-14">ki-admin-vue</RouterLink>
                                            </li>
                                            <li>
                                                <div class="first-part">
                                                    <div class="list-wrap">
                                                        <RouterLink to="/sitemap" class="fw-medium text-primary">
                                                            Sitemap Navigation
                                                        </RouterLink>
                                                    </div>

                                                    <!-- Recursive Sitemap Component -->
                                                    <ul class="second-part list-unstyled">
                                                        <li v-for="(item, index) in sitemapData" :key="index">
                                                            <RouterLink :to="item.to || '#'" class="d-flex align-items-center">
                                                                <component
                                                                    :is="item.icon"
                                                                    v-if="item.icon"
                                                                    size="18"
                                                                    class="me-1"
                                                                />
                                                                {{ item.title }}
                                                            </RouterLink>

                                                            <ul v-if="item.children" class="list-unstyled ms-3">
                                                                <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                                                    <RouterLink :to="child.to || '#'" class="d-flex align-items-center">
                                                                        <component
                                                                            :is="child.icon"
                                                                            v-if="child.icon"
                                                                            size="16"
                                                                            class="me-1"
                                                                        />
                                                                        {{ child.title }}
                                                                    </RouterLink>

                                                                    <ul v-if="child.children" class="list-unstyled ms-3">
                                                                        <li v-for="(grandChild, grandIndex) in child.children" :key="grandIndex">
                                                                            <RouterLink :to="grandChild.to || '#'">
                                                                                {{ grandChild.title }}
                                                                            </RouterLink>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </b-col>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Right Side: Map With Description -->
                    <b-col>
                        <b-card class="sitemap-card" no-body>
                            <b-card-header>
                                <h5>Map With Description</h5>
                            </b-card-header>
                            <b-card-body class="app-scroll ">
                                <b-col cols="12">
                                    <div class="vertical-sitemap">
                                        <ul class=" list-unstyled">
                                            <li class="p-0 parent-title">
                                                <RouterLink to="/" class="fw-medium fs-14">ki-admin-vue</RouterLink>
                                            </li>
                                            <li>
                                                <div
                                                    v-for="(section, index) in descriptionMapData"
                                                    :key="index"
                                                    class="first-part"
                                                >
                                                    <div class="list-wrap">
                                                        <RouterLink
                                                            :to="section.to || '#'"
                                                            class="fw-medium text-primary d-flex align-items-center"
                                                        >
                                                            <component
                                                                :is="section.icon"
                                                                v-if="section.icon"
                                                                size="18"
                                                                class="me-2"
                                                            />
                                                            {{ section.title }}
                                                        </RouterLink>
                                                    </div>

                                                    <ul class="second-part list-unstyled">
                                                        <li v-for="(child, childIndex) in section.children" :key="childIndex">
                                                            <RouterLink :to="child.to || '#'">{{ child.title }}</RouterLink>

                                                            <div v-if="child.description" class="content-box ms-4">
                                                                <p class="text-muted mb-2">{{ child.description }}</p>
                                                            </div>

                                                            <ul v-if="child.children" class="list-unstyled ms-4">
                                                                <li v-for="(grandChild, grandIndex) in child.children" :key="grandIndex">
                                                                    <RouterLink :to="grandChild.to || '#'">{{ grandChild.title }}</RouterLink>

                                                                    <div v-if="grandChild.description" class="content-box ms-4">
                                                                        <p class="text-muted mb-2">{{ grandChild.description }}</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </b-col>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
