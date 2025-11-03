<script setup>
import { ref} from "vue";
import { PhCode, PhUser, PhEnvelope } from "@phosphor-icons/vue";
import {BCard, BCardHeader, BCardBody, BCollapse, BCol, BButton} from "bootstrap-vue-next";

// Data arrays
const avatarImages = [
    { src: "/images/avatar/1.png", bg: "primary" },
    { src: "/images/avatar/2.png", bg: "secondary" },
    { src: "/images/avatar/3.png", bg: "success" },
    { src: "/images/avatar/4.png", bg: "info" },
    { src: "/images/avatar/5.png", bg: "success" },
    { src: "/images/avatar/6.png", bg: "danger" },
];

const avatarSizes = [
    { size: 30, bg: "secondary" },
    { size: 35, bg: "success" },
    { size: 40, bg: "info" },
    { size: 45, bg: "warning" },
    { size: 50, bg: "danger" },
];

const indicatorAvatars = [
    {
        type: "icon",
        iconComponent: PhUser,
        bg: "danger",
        indicatorPosition: "top-0 start-1",
        indicatorBg: "danger",
    },
    {
        type: "icon",
        iconComponent: PhUser,
        bg: "success",
        indicatorPosition: "bottom-0 start-1",
        indicatorBg: "success",
    },
    {
        type: "icon",
        iconComponent: PhUser,
        bg: "warning",
        indicatorPosition: "bottom-0 end-0",
        indicatorBg: "warning",
    },
    {
        type: "image",
        src: "/images/avatar/1.png",
        bg: "secondary",
        indicatorPosition: "top-0 end-0",
        indicatorBg: "success",
    },
    {
        type: "image",
        src: "/images/avatar/4.png",
        bg: "secondary",
        indicatorPosition:
            "top-0 end-0 d-flex-center bg-warning border-light text-center h-20 w-20 f-s-10 start-30",
        indicatorText: "3",
    },
    {
        type: "image",
        src: "/images/avatar/6.png",
        bg: "secondary",
        indicatorPosition:
            "top-0 d-flex-center bg-danger border border-light text-center h-20 w-20 f-s-10 start-30",
        indicatorIcon: PhEnvelope,
    },
];

// Collapse states
const openAvtar5 = ref(false);
const openAvtar6 = ref(false);
const openAvtar7 = ref(false);



</script>

<template>
    <!-- Images Section -->
    <b-col md="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                <h5>Images</h5>
                    <b-button @click="openAvtar5 = !openAvtar5" class="p-0 border-0">
                    <ph-code size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
                    <div
                        v-for="(avatar, i) in avatarImages"
                        :key="i"
                        class="h-45 w-45 d-flex-center b-r-50 overflow-hidden"
                        :class="'text-bg-' + avatar.bg"
                    >
                        <img :src="avatar.src" :alt="'Avatar ' + (i + 1)" class="img-fluid" />
                    </div>
                </div>
            </b-card-body>
            <b-collapse v-model="openAvtar5">
        <pre class="mt-3 language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Images&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
{{ avatarImages.map(a =>
    '&lt;div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-' + a.bg + '"&gt;' +
    '&lt;img src="' + a.src + '" class="img-fluid"&gt;&lt;/div&gt;'
).join('\n') }}
    &lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Size Section -->
    <b-col md="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Size</h5>
                    <b-button @click="openAvtar6 = !openAvtar6" class="p-0 border-0">
                    <ph-code size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
          <span
              v-for="(avatar, i) in avatarSizes"
              :key="i"
              class="d-flex-center b-r-50"
              :class="'bg-' + avatar.bg"
              :style="{ width: avatar.size + 'px', height: avatar.size + 'px' }"
          >
            <PhUser :size="18" weight="fill" />
          </span>
                </div>
            </b-card-body>
            <b-collapse v-model="openAvtar6">
        <pre class="mt-3 language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Size&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
{{ avatarSizes.map(a =>
    '&lt;span class="d-flex-center b-r-50 bg-' + a.bg+  'w-'+ a.size + ' h-' + a.size + 'px"&gt;&lt;PhUser size="18" weight="fill" &gt;&lt;/span&gt;'
).join('\n') }}
&lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Indicator Section -->
    <b-col md="5">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Indicator Position And Icon</h5>
                    <b-button @click="openAvtar7 = !openAvtar7" class="p-0 border-0">
                    <ph-code size="30" weight="bold" class="source" />
                    </b-button>
                </div>
                <p class="text-muted">Radious avatar text in soft color example</p>
            </b-card-header>
            <b-card-body>
                <div class="d-flex gap-3 flex-wrap">
          <span
              v-for="(avatar, i) in indicatorAvatars"
              :key="i"
              class="h-45 w-45 d-flex-center b-r-50 position-relative"
              :class="'bg-' + avatar.bg"
          >
            <component v-if="avatar.type === 'icon'" :is="avatar.iconComponent" />
            <img v-if="avatar.type === 'image'" :src="avatar.src" class="img-fluid b-r-50" />
            <span
                v-if="avatar.indicatorText || avatar.indicatorIcon || avatar.indicatorBg"
                class="position-absolute rounded-circle"
                :class="avatar.indicatorPosition + (avatar.indicatorText || avatar.indicatorIcon ? '' : ' p-1 border border-light bg-' + avatar.indicatorBg)"
            >
              <component v-if="avatar.indicatorIcon" :is="avatar.indicatorIcon" />
              <span v-else>{{ avatar.indicatorText }}</span>
            </span>
          </span>
                </div>
            </b-card-body>
            <b-collapse v-model="openAvtar7">
        <pre class="mt-3 language-html">
<code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Indicator Position And Icon&lt;/h5&gt;
    &lt;p class="text-muted"&gt;
      Use color &lt;code&gt;bg-*&lt;/code&gt; to change the background theme color of avatar.
    &lt;/p&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    &lt;div class="d-flex gap-3 flex-wrap"&gt;
{{ indicatorAvatars.map(a => {
    const indicatorContent = a.indicatorText ? a.indicatorText : a.indicatorIcon ? '&lt;Icon /&gt;' : '';
    return '&lt;span class="h-45 w-45 d-flex-center b-r-50 position-relative bg-' + a.bg + '"&gt;' +
        (a.type === 'icon' ? '&lt;PhUser :size="32" weight="fill" /"&gt;&lt;/i&gt;' : '&lt;img src="' + a.src + '" class="img-fluid b-r-50"&gt;') +
        '&lt;span class="position-absolute ' + a.indicatorPosition + (indicatorContent ? '' : ' p-1 border border-light bg-' + a.indicatorBg) + ' rounded-circle"&gt;' +
        indicatorContent +
        '&lt;/span&gt;&lt;/span&gt;';
}).join('\n') }}
   &lt;/div&gt;
  &lt;/b-card-body&gt;
&lt;/b-card&gt;
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
