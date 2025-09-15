<script setup>
import { ref, nextTick, watch } from 'vue';
import { BButton, BCollapse, BRow, BCol, BCard } from 'bootstrap-vue-next';
import { PhCamera, PhBellRinging, PhCode ,  PhDownload, PhWarning,  PhFacebookLogo,
    PhTwitterLogo,
    PhPinterestLogo,
    PhLinkedinLogo,
    PhRedditLogo,
    PhWhatsappLogo,
    PhEnvelopeSimple,
    PhTelegramLogo,
    PhYoutubeLogo,
    PhInstagramLogo,
    PhBehanceLogo,
    PhGithubLogo,
    PhSkypeLogo,
    PhSnapchatLogo,
    } from '@phosphor-icons/vue';

// Icon button data
const iconButtons = [
    { variant: 'primary', icon: PhCamera, name: 'PhCamera' },
    { variant: 'secondary', icon: PhBellRinging, name: 'PhBellRinging' },
    { variant: 'outline-primary', icon: PhCamera, name: 'PhCamera' },
    { variant: 'outline-secondary', icon: PhBellRinging, name: 'PhBellRinging' },
    { variant: 'light-primary', icon: PhCamera, name: 'PhCamera' },
    { variant: 'light-secondary', icon: PhBellRinging, name: 'PhBellRinging' },
];
const socialButtons = [
    { variant: 'facebook', icon: PhFacebookLogo },
    { variant: 'twitter', icon: PhTwitterLogo },
    { variant: 'pinterest', icon: PhPinterestLogo },
    { variant: 'linkedin', icon: PhLinkedinLogo },
    { variant: 'reddit', icon: PhRedditLogo },
    { variant: 'whatsapp', icon: PhWhatsappLogo },
    { variant: 'gmail', icon: PhEnvelopeSimple },
    { variant: 'telegram', icon: PhTelegramLogo },
    { variant: 'youtube', icon: PhYoutubeLogo },
    { variant: 'vimeo', icon: PhInstagramLogo },
    { variant: 'behance', icon: PhBehanceLogo },
    { variant: 'github', icon: PhGithubLogo },
    { variant: 'skype', icon: PhSkypeLogo },
    { variant: 'snapchat', icon: PhSnapchatLogo , className: 'text-dark' },
];
const disabledButtonGroups = [
    {
        variantGroup: 'standard',
        buttons: [
            { variant: 'primary', text: 'Primary', icon: PhDownload, iconPosition: 'start' },
            { variant: 'secondary', text: 'Secondary', icon: PhWarning, iconPosition: 'end' },
        ],
    },
    {
        variantGroup: 'outline',
        buttons: [
            { variant: 'outline-primary', text: 'Primary', icon: PhDownload, iconPosition: 'start' },
            { variant: 'outline-secondary', text: 'Secondary', icon: PhWarning, iconPosition: 'end' },
        ],
    },
    {
        variantGroup: 'light',
        buttons: [
            { variant: 'light-primary', text: 'Primary', icon: PhDownload, iconPosition: 'start' },
            { variant: 'light-secondary', text: 'Secondary', icon: PhWarning, iconPosition: 'end' },
        ],
    },
];
const activeButtonGroups = [
    {
        variantGroup: 'standard',
        buttons: [
            { variant: 'primary', text: 'Primary', icon: PhDownload, iconPosition: 'start' },
            { variant: 'secondary', text: 'Secondary', icon: PhWarning, iconPosition: 'end' },
        ],
    },
    {
        variantGroup: 'outline',
        buttons: [
            { variant: 'outline-primary', text: 'Primary', icon: PhDownload, iconPosition: 'start' },
            { variant: 'outline-secondary', text: 'Secondary', icon: PhWarning, iconPosition: 'end' },
        ],
    },
    {
        variantGroup: 'light',
        buttons: [
            { variant: 'light-primary', text: 'Primary', icon: PhDownload, iconPosition: 'start' },
            { variant: 'light-secondary', text: 'Secondary', icon: PhWarning, iconPosition: 'end' },
        ],
    },
];
const loadingButtonGroups = [
    {
        col: 'col-lg-4 col-12',
        buttons: [
            { variant: 'primary', text: 'Loading...', spinner: 'border', spinnerPosition: 'start' },
            { variant: 'secondary', text: 'Wait...', spinner: 'border', spinnerPosition: 'end' },
            { variant: 'success', text: '', spinner: 'border', iconOnly: true },
            { variant: 'danger', text: '', spinner: 'grow', iconOnly: true },
        ],
    },
    {
        col: 'col-lg-4 col-12',
        buttons: [
            { variant: 'outline-primary', text: 'Loading...', spinner: 'border', spinnerPosition: 'start' },
            { variant: 'outline-secondary', text: 'Wait...', spinner: 'border', spinnerPosition: 'end' },
            { variant: 'outline-success', text: '', spinner: 'border', iconOnly: true },
            { variant: 'outline-danger', text: '', spinner: 'grow', iconOnly: true },
        ],
    },
    {
        col: 'col-lg-4 col-12',
        buttons: [
            { variant: 'light-primary', text: 'Loading...', spinner: 'border', spinnerPosition: 'start' },
            { variant: 'light-secondary', text: 'Wait...', spinner: 'border', spinnerPosition: 'end' },
            { variant: 'light-success', text: '', spinner: 'border', iconOnly: true },
            { variant: 'light-danger', text: '', spinner: 'grow', iconOnly: true },
        ],
    },
];
// Collapse state
const openIconButton = ref(false);
const openSocialButtons = ref(false);
const openDisabledButtons = ref(false);
const openActiveButtons = ref(false);
const openLoadingButtons = ref(false);
// Prism highlight
watch([openIconButton ,socialButtons , openDisabledButtons , openActiveButtons , openLoadingButtons], async () => {
    await nextTick();
    Prism.highlightAll();
});
</script>

<template>
    <b-row class="g-3">
        <b-col xl="4">
            <b-card>
                <!-- Header -->
                <template #header>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Icon Buttons</h5>
                        <a href="javascript:void(0)" @click="openIconButton = !openIconButton">
                            <PhCode size="24" weight="bold" />
                        </a>
                    </div>
                </template>

                <!-- Buttons rendered with loop -->
                <div class="app-btn-list d-flex flex-wrap gap-2 mt-2">
                    <b-button
                        v-for="(btn, index) in iconButtons"
                        :key="index"
                        :variant="btn.variant"
                        class="icon-btn b-r-4 d-flex justify-content-center align-items-center"
                    >
                        <component :is="btn.icon" size="18" />
                    </b-button>
                </div>

                <!-- Collapsible code preview dynamically generated -->
                <b-collapse v-model="openIconButton" class="mt-3">
          <pre class="language-html"><code>
              &lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Icon Buttons&lt;/h5&gt;
  &lt;/template&gt;
&lt;div class="app-btn-list"&gt;
<span v-for="btn in iconButtons" :key="btn.variant">
  &lt;b-button variant="{{ btn.variant }}" class="icon-btn b-r-4"&gt;
    &lt;component :is="{{ btn.name }}" size="18" /&gt;
  &lt;/b-button&gt;
</span>
  &lt;/div&gt;
&lt;/b-card&gt;
          </code></pre>
                </b-collapse>
            </b-card>
        </b-col>
        <b-col xl="8">
            <b-card>
                <!-- Header -->
                <template #header>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Social Buttons</h5>
                        <a href="javascript:void(0)" @click="openSocialButtons = !openSocialButtons">
                            <PhCode size="24" weight="bold" />
                        </a>
                    </div>
                </template>

                <!-- Buttons rendered dynamically -->
                <div class="app-btn-list d-flex flex-wrap gap-2 mt-2">
                    <b-button
                        v-for="(btn, index) in socialButtons"
                        :key="index"
                        :class="`icon-btn b-r-22 d-flex justify-content-center align-items-center btn-${btn.variant}`"
                        type="button"
                    >
                        <component
                            :is="btn.icon"
                            size="18"
                            :class="btn.variant === 'snapchat' ? 'text-dark' : 'text-white'"
                        />
                    </b-button>
                </div>

                <!-- Collapsible code preview dynamically -->
                <b-collapse v-model="openSocialButtons" class="mt-3">
          <pre class="language-html"><code>
&lt;div class="app-btn-list"&gt;
<span v-for="btn in socialButtons" :key="btn.variant">
  &lt;b-button class="btn-{{ btn.variant }} icon-btn b-r-22"&gt;
    &lt;component :is="{{ btn.icon.name }}" size="18" /&gt;
  &lt;/b-button&gt;
</span>
&lt;/div&gt;
          </code></pre>
                </b-collapse>
            </b-card>
        </b-col>
        <b-col xl="12">
            <b-card>
                <!-- Card Header -->
                <template #header>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Disabled Buttons</h5>
                        <a href="javascript:void(0)" @click="openDisabledButtons = !openDisabledButtons">
                            <PhCode size="24" weight="bold" />
                        </a>
                    </div>
                </template>

                <!-- Disabled Buttons -->
                <div class="row">
                    <div
                        v-for="(group, gIndex) in disabledButtonGroups"
                        :key="gIndex"
                        class="col-md-6 col-lg-4 col-12 app-btn-list mb-2"
                    >
                        <b-button
                            v-for="(btn, index) in group.buttons"
                            :key="index"
                            :variant="btn.variant"
                            disabled
                            class="d-inline-flex align-items-center gap-1"
                        >
                            <template v-if="btn.iconPosition === 'start'">
                                <component :is="btn.icon" size="18" /> {{ btn.text }}
                            </template>
                            <template v-else>
                                {{ btn.text }} <component :is="btn.icon" size="18" />
                            </template>
                        </b-button>
                    </div>
                </div>

                <!-- Prism Preview -->
                <b-collapse v-model="openDisabledButtons" class="mt-3">
      <pre class="language-html"><code>
&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Disabled Buttons&lt;/h5&gt;
  &lt;/template&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
<span v-for="group in disabledButtonGroups" :key="group.variantGroup">
  &lt;div class="col-md-6 col-lg-4 col-12 app-btn-list mb-2"&gt;
    <span v-for="btn in group.buttons" :key="btn.text">
      &lt;b-button variant="{{ btn.variant }}" disabled class="d-inline-flex align-items-center gap-1"&gt;
        {{ btn.iconPosition === 'start' ? `&lt;${btn.icon.name} size='18' /&gt; ${btn.text}` : `${btn.text} &lt;${btn.icon.name} size='18' /&gt;` }}
      &lt;/b-button&gt;
    </span>
  &lt;/div&gt;
</span>
&lt;/div&gt;
          &lt;/div&gt;
&lt;/b-card&gt;
      </code></pre>
                </b-collapse>
            </b-card>


        </b-col>
        <b-col xl="12">
                <b-card>
                    <!-- Card Header -->
                    <template #header>
                        <div class="d-flex justify-content-between align-items-center">
                            <h5>Active Buttons</h5>
                            <a href="javascript:void(0)" @click="openActiveButtons = !openActiveButtons">
                                <PhCode size="24" weight="bold" />
                            </a>
                        </div>
                    </template>

                    <!-- Buttons -->
                    <div class="row">
                        <div
                            v-for="(group, gIndex) in activeButtonGroups"
                            :key="gIndex"
                            class="col-md-6 col-lg-4 col-12 app-btn-list mb-2"
                        >
                            <b-button
                                v-for="(btn, index) in group.buttons"
                                :key="index"
                                :variant="btn.variant"
                                active
                                class="d-inline-flex align-items-center gap-1"
                            >
                                <template v-if="btn.iconPosition === 'start'">
                                    <component :is="btn.icon" size="18" /> {{ btn.text }}
                                </template>
                                <template v-else>
                                    {{ btn.text }} <component :is="btn.icon" size="18" />
                                </template>
                            </b-button>
                        </div>
                    </div>

                    <!-- Prism Preview -->
                    <b-collapse v-model="openActiveButtons" class="mt-3">
          <pre class="language-html"><code>
&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Active Buttons&lt;/h5&gt;
  &lt;/template&gt;
<span v-for="group in activeButtonGroups" :key="group.variantGroup">
  &lt;div class="col-md-6 col-lg-4 col-12 app-btn-list mb-2"&gt;
    <span v-for="btn in group.buttons" :key="btn.text">
      &lt;b-button variant="{{ btn.variant }}" active class="d-inline-flex align-items-center gap-1"&gt;
        {{ btn.iconPosition === 'start' ? `&lt;${btn.icon.name} size='18' /&gt; ${btn.text}` : `${btn.text} &lt;${btn.icon.name} size='18' /&gt;` }}
      &lt;/b-button&gt;
    </span>
  &lt;/div&gt;
</span>
  &lt;/div&gt;
&lt;/b-card&gt;
          </code></pre>
                    </b-collapse>
                </b-card>
            </b-col>
        <b-col xl="12">
            <b-card>
                <!-- Card Header -->
                <template #header>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>Loading Buttons</h5>
                        <a href="javascript:void(0)" @click="openLoadingButtons = !openLoadingButtons">
                            <PhCode size="24" weight="bold" />
                        </a>
                    </div>
                </template>

                <!-- Buttons -->
                <div class="row">
                    <div
                        v-for="(group, gIndex) in loadingButtonGroups"
                        :key="gIndex"
                        :class="group.col + ' app-btn-list mb-3'"
                    >
                        <b-button
                            v-for="(btn, index) in group.buttons"
                            :key="index"
                            :variant="btn.variant"
                            class="d-inline-flex align-items-center gap-2"
                            type="button"
                        >
                            <template v-if="btn.spinnerPosition === 'start'">
                <span
                    :class="`spinner-${btn.spinner} spinner-${btn.spinner}-sm me-2`"
                    role="status"
                    aria-hidden="true"
                ></span>
                                {{ btn.text }}
                            </template>
                            <template v-else-if="btn.spinnerPosition === 'end'">
                                {{ btn.text }}
                                <span
                                    :class="`spinner-${btn.spinner} spinner-${btn.spinner}-sm ms-2`"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            </template>
                            <template v-else-if="btn.iconOnly">
                <span
                    :class="`spinner-${btn.spinner} spinner-${btn.spinner}-sm`"
                    role="status"
                    aria-hidden="true"
                ></span>
                                <span class="visually-hidden">Loading...</span>
                            </template>
                        </b-button>
                    </div>
                </div>

                <!-- Prism Preview -->
                <b-collapse v-model="openLoadingButtons" class="mt-3">
          <pre class="language-html"><code>
&lt;div class="row"&gt;

<span v-for="group in loadingButtonGroups" :key="group.col">
      &lt;b-col xl="4">
  &lt;div :class=" ' app-btn-list mb-3'"&gt;
    <span v-for="btn in group.buttons" :key="btn.variant">
      &lt;b-button variant="{{ btn.variant }}" type="button"&gt;
        <template v-if="btn.spinnerPosition==='start'">
          &lt;span class="spinner-{{ btn.spinner }} spinner-{{ btn.spinner }}-sm me-2" role="status" aria-hidden="true"&gt;&lt;/span&gt;
          {{ btn.text }}
        </template>
        <template v-else-if="btn.spinnerPosition==='end'">
          {{ btn.text }}
          &lt;span class="spinner-{{ btn.spinner }} spinner-{{ btn.spinner }}-sm ms-2" role="status" aria-hidden="true"&gt;&lt;/span&gt;
        </template>
        <template v-else-if="btn.iconOnly">
          &lt;span class="spinner-{{ btn.spinner }} spinner-{{ btn.spinner }}-sm" role="status" aria-hidden="true"&gt;&lt;/span&gt;
          &lt;span class="visually-hidden"&gt;Loading...&lt;/span&gt;
        </template>
      &lt;/b-button&gt;
    </span>
  &lt;/div&gt;
    &lt;/b-Col&gt;
</span>

&lt;/div&gt;
          </code></pre>
                </b-collapse>
            </b-card>



        </b-col>
        </b-row>
</template>
