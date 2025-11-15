<script setup>
import { ref } from "vue";
import {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BCollapse,
    BBadge,
} from "bootstrap-vue-next";

import {
    PhCode,
    PhFacebookLogo,
    PhTwitterLogo,
    PhLinkedinLogo,
} from "@phosphor-icons/vue";

const openCodeDiv1 = ref(false);
const openCodeDiv2 = ref(false);
const openCodeDiv3 = ref(false);
const openCodeDiv4 = ref(false);
const openCodeDiv5 = ref(false);
const openCodeDiv6 = ref(false);

const dividerStyles = ["solid", "dotted", "dashed"];
const alignments = [
    "justify-content-start",
    "justify-content-center",
    "justify-content-end",
];

const colorsDivider = [
    {
        className: "secondary justify-content-center",
        type: "badge",
        text: "Login With Social",
        variant: "secondary"
    },
    {
        className: "success justify-content-end",
        type: "text",
        text: "Align Right",
        variant: "success"
    },
    {
        className: "danger",
        type: "badge",
        text: "Choose from below option",
        variant: "danger"
    },
    {
        className: "info justify-content-center gap-1",
        social: true,
    },
    {
        className: "warning justify-content-end gap-1",
        type: "empty",
    },
    {
        className: "dark justify-content-center",
        type: "text",
        text: "Dark",
        variant: "dark"
    },
];

const colorsHorizontal = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];
</script>

<template>
    <b-col md="6" xl="8">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Vertical Dividers</h5>
                    <b-button @click="openCodeDiv1 = !openCodeDiv1" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <div
                    v-for="(style, index) in dividerStyles"
                    :key="index"
                    :class="['app-divider-v', style]"
                ></div>

                <b-collapse v-model="openCodeDiv1">
                    <pre class="language-html mt-3">
                        <code v-prism>
{{ dividerStyles.map((style) => `&lt;div class="app-divider-v ${style}"&gt;&lt;/div&gt;`).join('\n') }}
                        </code>
                    </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>

    <b-col md="6" xl="4">
        <b-card class="h-100" no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Horizontal</h5>
                    <b-button @click="openCodeDiv2 = !openCodeDiv2" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body class="divider-body">
                <div class="d-flex h-100">
                    <div
                        v-for="(style, index) in dividerStyles"
                        :key="index"
                        :class="['app-divider-h', style]"
                    ></div>
                </div>
            </b-card-body>

            <b-collapse v-model="openCodeDiv2">
                <pre class="language-html mt-3">
                    <code v-prism>
{{ dividerStyles.map((style) => `&lt;div class="app-divider-h ${style}"&gt;&lt;/div&gt;`).join('\n') }}
                    </code>
                </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <b-col md="6" xl="8">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Divider with text & aligns</h5>
                    <b-button @click="openCodeDiv3 = !openCodeDiv3" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <div
                    v-for="(alignment, index) in alignments"
                    :key="index"
                    :class="['app-divider-v', alignment]"
                >
                    <p>{{ alignment }}</p>
                </div>

                <b-collapse v-model="openCodeDiv3">
                    <pre class="language-html mt-3">
                        <code v-prism>
{{ alignments.map((a) => `&lt;div class="app-divider-v ${a}"&gt;&lt;p&gt;${a}&lt;/p&gt;&lt;/div&gt;`).join('\n') }}
                        </code>
                    </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>

    <b-col md="6" xl="4">
        <b-card class="h-100" no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Horizontal with text & aligns</h5>
                    <b-button @click="openCodeDiv4 = !openCodeDiv4" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body class="divider-body d-flex">
                <div class="app-divider-h"><p>Or</p></div>
                <div class="app-divider-h align-items-center">
                    <p>align-items-center</p>
                </div>
                <div class="app-divider-h align-items-end"><p>Or</p></div>
            </b-card-body>

            <b-collapse v-model="openCodeDiv4">
                <pre class="language-html mt-3">
                    <code v-prism>
&lt;div class="app-divider-h"&gt;&lt;p&gt;Or&lt;/p&gt;&lt;/div&gt;
&lt;div class="app-divider-h align-items-center"&gt;&lt;p&gt;align-items-center&lt;/p&gt;&lt;/div&gt;
&lt;div class="app-divider-h align-items-end"&gt;&lt;p&gt;Or&lt;/p&gt;&lt;/div&gt;
                    </code>
                </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <b-col md="6" xl="8">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Color Options With Icon Buttons</h5>
                    <b-button @click="openCodeDiv5 = !openCodeDiv5" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <div
                    v-for="(item, idx) in colorsDivider"
                    :key="idx"
                    :class="['app-divider-v', item.className]"
                >
                    <!-- Fixed: Using proper Vue components instead of v-html -->
                    <BBadge v-if="item.type === 'badge'" :bg="item.variant">
                        {{ item.text }}
                    </BBadge>

                    <p v-else-if="item.type === 'text'" :class="`text-${item.variant}`">
                        {{ item.text }}
                    </p>

                    <template v-if="item.social">
                        <b-button class="btn-facebook icon-btn b-r-22">
                            <PhFacebookLogo :size="18" weight="fill" class="text-white" />
                        </b-button>
                        <b-button class="btn-twitter icon-btn b-r-22">
                            <PhTwitterLogo :size="18" weight="fill" class="text-white" />
                        </b-button>
                        <b-button class="btn-linkedin icon-btn b-r-22">
                            <PhLinkedinLogo :size="18" weight="fill" class="text-white" />
                        </b-button>
                    </template>
                </div>
            </b-card-body>

            <b-collapse v-model="openCodeDiv5">
                <pre class="language-html mt-3">
                    <code v-prism>
&lt;div class="app-divider-v secondary justify-content-center"&gt;
  &lt;BBadge bg="secondary"&gt;Login With Social&lt;/BBadge&gt;
&lt;/div&gt;

&lt;div class="app-divider-v success justify-content-end"&gt;
  &lt;p class="text-success"&gt;Align Right&lt;/p&gt;
&lt;/div&gt;

&lt;div class="app-divider-v danger"&gt;
  &lt;BBadge bg="danger"&gt;Choose from below option&lt;/BBadge&gt;
&lt;/div&gt;

&lt;div class="app-divider-v info justify-content-center gap-1"&gt;
  &lt;b-button class="btn-facebook icon-btn b-r-22"&gt;
    &lt;PhFacebookLogo size="18" weight="fill" class="text-white" /&gt;
  &lt;/b-button&gt;
  &lt;b-button class="btn-twitter icon-btn b-r-22"&gt;
    &lt;PhTwitterLogo size="18" weight="fill" class="text-white" /&gt;
  &lt;/b-button&gt;
  &lt;b-button class="btn-linkedin icon-btn b-r-22"&gt;
    &lt;PhLinkedinLogo size="18" weight="fill" class="text-white" /&gt;
  &lt;/b-button&gt;
&lt;/div&gt;

&lt;div class="app-divider-v warning justify-content-end gap-1"&gt;&lt;/div&gt;

&lt;div class="app-divider-v dark justify-content-center"&gt;
  &lt;p class="text-dark"&gt;Dark&lt;/p&gt;
&lt;/div&gt;
                    </code>
                </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <b-col md="6" xl="4">
        <b-card class="h-100">
            <b-card-header class="code-header d-flex justify-content-between">
                <h5>Horizontal Colors</h5>
                <b-button @click="openCodeDiv6 = !openCodeDiv6" class="p-0 border-0">
                    <PhCode size="30" weight="bold" class="source" />
                </b-button>
            </b-card-header>
            <b-card-body class="divider-body d-flex">
                <div
                    v-for="(color, index) in colorsHorizontal"
                    :key="index"
                    :class="['app-divider-h', color]"
                ></div>
            </b-card-body>

            <b-collapse v-model="openCodeDiv6">
                <pre class="language-html mt-3">
                    <code v-prism>
{{ colorsHorizontal.map((c) => `&lt;div class="app-divider-h ${c}"&gt;&lt;/div&gt;`).join('\n') }}
                    </code>
                </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>