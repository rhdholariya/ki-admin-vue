<!--<script setup>-->
<!--import { ref, watch, nextTick } from 'vue';-->
<!--import { BCard, BRow, BCol, BCollapse, BButton } from 'bootstrap-vue-next';-->
<!--import {-->
<!--    Camera,-->
<!--    BellRinging,-->
<!--    Code,-->
<!--    Download,-->
<!--    Warning,-->
<!--    FacebookLogo,-->
<!--    TwitterLogo,-->
<!--    PinterestLogo,-->
<!--    LinkedinLogo,-->
<!--    RedditLogo,-->
<!--    WhatsappLogo,-->
<!--    EnvelopeSimple,-->
<!--    TelegramLogo,-->
<!--    YoutubeLogo,-->
<!--    BehanceLogo,-->
<!--    GithubLogo,-->
<!--    InstagramLogo,-->
<!--    SnapchatLogo,-->
<!--} from '@phosphor-icons/vue';-->
<!--import 'prismjs/themes/prism.css';-->
<!--import Prism from 'prismjs';-->

<!--// Collapse states-->
<!--const openIconBtn = ref(false);-->
<!--const openSocialBtn = ref(false);-->
<!--const openIconButton = ref(false);-->
<!--const openActiveButton = ref(false);-->
<!--const openLoadingButton = ref(false);-->

<!--// Icon Buttons-->
<!--const iconButtons = [-->
<!--    { icon: Camera, iconName: '<Camera size={18} weight="duotone" />', className: 'btn-primary' },-->
<!--    { icon: BellRinging, iconName: '<BellRinging size={18} weight="duotone" />', className: 'btn-secondary' },-->
<!--    { icon: Camera, iconName: '<Camera size={18} weight="duotone" />', className: 'btn-outline-primary' },-->
<!--    { icon: BellRinging, iconName: '<BellRinging size={18} weight="duotone" />', className: 'btn-outline-secondary' },-->
<!--    { icon: Camera, iconName: '<Camera size={18} weight="duotone" />', className: 'btn-light-primary' },-->
<!--    { icon: BellRinging, iconName: '<BellRinging size={18} weight="duotone" />', className: 'btn-light-secondary' },-->
<!--];-->

<!--// Social Buttons-->
<!--const socialButtons = [-->
<!--    { icon: FacebookLogo, iconName: '<FacebookLogo size={18} weight="fill" />', className: 'btn-facebook text-white' },-->
<!--    { icon: TwitterLogo, iconName: '<TwitterLogo size={18} weight="fill" />', className: 'btn-twitter text-white' },-->
<!--    { icon: PinterestLogo, iconName: '<PinterestLogo size={18} />', className: 'btn-pinterest text-white' },-->
<!--    { icon: LinkedinLogo, iconName: '<LinkedinLogo size={18} />', className: 'btn-linkedin text-white' },-->
<!--    { icon: RedditLogo, iconName: '<RedditLogo size={18} />', className: 'btn-reddit text-white' },-->
<!--    { icon: WhatsappLogo, iconName: '<WhatsappLogo size={18} />', className: 'btn-whatsapp text-white' },-->
<!--    { icon: EnvelopeSimple, iconName: '<EnvelopeSimple size={18} />', className: 'btn-gmail text-white' },-->
<!--    { icon: TelegramLogo, iconName: '<TelegramLogo size={18} />', className: 'btn-telegram text-white' },-->
<!--    { icon: YoutubeLogo, iconName: '<YoutubeLogo size={18} />', className: 'btn-youtube text-white' },-->
<!--    { icon: LinkedinLogo, iconName: '<LinkedinLogo size={18} />', className: 'btn-vimeo text-white' },-->
<!--    { icon: BehanceLogo, iconName: '<BehanceLogo size={18} />', className: 'btn-behance text-white' },-->
<!--    { icon: GithubLogo, iconName: '<GithubLogo size={18} />', className: 'btn-github text-white' },-->
<!--    { icon: InstagramLogo, iconName: '<InstagramLogo size={18} />', className: 'btn-skype text-white' },-->
<!--    { icon: SnapchatLogo, iconName: '<SnapchatLogo size={18} />', className: 'btn-snapchat text-dark' },-->
<!--];-->

<!--// Active Button Groups-->
<!--const activeButtonGroups = [-->
<!--    { primaryVariant: 'primary', secondaryVariant: 'secondary' },-->
<!--    { primaryVariant: 'outline-primary', secondaryVariant: 'outline-secondary' },-->
<!--    { primaryVariant: 'light-primary', secondaryVariant: 'light-secondary' },-->
<!--];-->

<!--// Icon Button Variants-->
<!--const iconButtonVariants = [-->
<!--    {-->
<!--        variant: 'primary',-->
<!--        buttons: [-->
<!--            { text: 'Primary', icon: Download, iconPosition: 'start' },-->
<!--            { text: 'Secondary', icon: Warning, iconPosition: 'end' },-->
<!--        ],-->
<!--    },-->
<!--    {-->
<!--        variant: 'outline-primary',-->
<!--        buttons: [-->
<!--            { text: 'Primary', icon: Download, iconPosition: 'start' },-->
<!--            { text: 'Secondary', icon: Warning, iconPosition: 'end' },-->
<!--        ],-->
<!--    },-->
<!--    {-->
<!--        variant: 'light-primary',-->
<!--        buttons: [-->
<!--            { text: 'Primary', icon: Download, iconPosition: 'start' },-->
<!--            { text: 'Secondary', icon: Warning, iconPosition: 'end' },-->
<!--        ],-->
<!--    },-->
<!--];-->

<!--// Loading Buttons-->
<!--const loadingButtons = [-->
<!--    [-->
<!--        { variant: 'primary', content: '<span class="spinner-border spinner-border-sm me-2"></span> Loading...', className: 'd-inline-flex-center' },-->
<!--        { variant: 'secondary', content: 'Wait... <span class="spinner-border spinner-border-sm ms-2"></span>', className: 'd-inline-flex-center' },-->
<!--    ],-->
<!--    [-->
<!--        { variant: 'light-primary', content: '<span class="spinner-border spinner-border-sm me-2"></span> Loading...', className: 'd-inline-flex-center' },-->
<!--        { variant: 'light-secondary', content: 'Wait... <span class="spinner-border spinner-border-sm ms-2"></span>', className: 'd-inline-flex-center' },-->
<!--    ],-->
<!--];-->

<!--// Prism highlight-->
<!--watch([openIconBtn, openSocialBtn, openIconButton, openActiveButton, openLoadingButton], () => {-->
<!--    nextTick(() => Prism.highlightAll());-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--    <b-row class="g-3">-->
<!--        &lt;!&ndash; Icon Buttons &ndash;&gt;-->
<!--        <b-col xl="4">-->
<!--            <b-card>-->
<!--                <template #header>-->
<!--                    <div class="d-flex justify-content-between align-items-center">-->
<!--                        <h5>Icon Buttons</h5>-->
<!--                        <a href="#" @click.prevent="openIconBtn = !openIconBtn">-->
<!--                            <Code size="30" weight="bold" />-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </template>-->
<!--                <div class="d-flex flex-wrap gap-2">-->
<!--                    <b-button-->
<!--                        v-for="(btn, i) in iconButtons"-->
<!--                        :key="i"-->
<!--                        :class="`btn ${btn.className} icon-btn b-r-4`"-->
<!--                    >-->
<!--                        <component :is="btn.icon" size="18" weight="duotone" />-->
<!--                    </b-button>-->
<!--                </div>-->
<!--                <b-collapse :visible="openIconBtn" class="mt-3">-->
<!--          <pre class="language-html"><code>-->
<!--&lt;div class="app-btn-list"&gt;-->
<!--{{ iconButtons.map(btn => `<b-button class="btn ${btn.className} icon-btn b-r-4"><component :is="${btn.iconName}" /></b-button>`).join('\n') }}-->
<!--&lt;/div&gt;-->
<!--          </code></pre>-->
<!--                </b-collapse>-->
<!--            </b-card>-->
<!--        </b-col>-->

<!--        &lt;!&ndash; Social Buttons &ndash;&gt;-->
<!--        <b-col xl="8">-->
<!--            <b-card>-->
<!--                <template #header>-->
<!--                    <div class="d-flex justify-content-between align-items-center">-->
<!--                        <h5>Social Buttons</h5>-->
<!--                        <a href="#" @click.prevent="openSocialBtn = !openSocialBtn">-->
<!--                            <Code size="30" weight="bold" />-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </template>-->
<!--                <div class="d-flex flex-wrap gap-2">-->
<!--                    <b-button-->
<!--                        v-for="(btn, i) in socialButtons"-->
<!--                        :key="i"-->
<!--                        :class="`btn ${btn.className} icon-btn b-r-22`"-->
<!--                    >-->
<!--                        <component :is="btn.icon" size="18" weight="fill" />-->
<!--                    </b-button>-->
<!--                </div>-->
<!--                <b-collapse :visible="openSocialBtn" class="mt-3">-->
<!--          <pre class="language-html"><code>-->
<!--&lt;div class="app-btn-list"&gt;-->
<!--{{ socialButtons.map(btn => `<b-button class="btn ${btn.className} icon-btn b-r-22"><component :is="${btn.iconName}" /></b-button>`).join('\n') }}-->
<!--&lt;/div&gt;-->
<!--          </code></pre>-->
<!--                </b-collapse>-->
<!--            </b-card>-->
<!--        </b-col>-->
<!--    </b-row>-->
<!--</template>-->
