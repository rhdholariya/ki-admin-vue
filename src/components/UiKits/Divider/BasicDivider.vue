<script setup>
import { ref } from "vue";
import {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BCollapse,
} from "bootstrap-vue-next";

import {
    PhCode,
    PhFacebookLogo,
    PhTwitterLogo,
    PhLinkedinLogo,
} from "@phosphor-icons/vue";

// === Collapse states ===
const openCodeDiv1 = ref(false);
const openCodeDiv2 = ref(false);
const openCodeDiv3 = ref(false);
const openCodeDiv4 = ref(false);
const openCodeDiv5 = ref(false);
const openCodeDiv6 = ref(false);

// Divider data
const dividerStyles = ["solid", "dotted", "dashed"];
const alignments = [
    "justify-content-start",
    "justify-content-center",
    "justify-content-end",
];

const colorsDivider = [
    {
        className: "secondary justify-content-center",
        element: `<span class="badge text-bg-secondary">Login With Social</span>`,
    },
    {
        className: "success justify-content-end",
        element: `<p class="text-success">Align Right</p>`,
    },
    {
        className: "danger",
        element: `<span class="badge text-bg-danger">Choose from below option</span>`,
    },
    {
        className: "info justify-content-center gap-1",
        social: true, // ✅ flag for social buttons
    },
    {
        className: "warning justify-content-end gap-1",
        element: "",
    },
    {
        className: "dark justify-content-center",
        element: `<p>Dark</p>`,
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
    <!-- Vertical Dividers -->
    <b-col md="6" xl="8">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Vertical Dividers</h5>
                    <a @click="openCodeDiv1 = !openCodeDiv1" class="p-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
                </div>
            </b-card-header>
            <b-card-body>
                <div
                    v-for="(style, index) in dividerStyles"
                    :key="index"
                    :class="['app-divider-v', style]"
                ></div>

                <b-collapse v-model="openCodeDiv1">
          <pre class="language-html">
<code class="language-html">
{{ dividerStyles.map((style) => `&lt;div class="app-divider-v ${style}"&gt;&lt;/div&gt;`).join('\n') }}
</code>
          </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>

    <!-- Horizontal -->
    <b-col md="6" xl="4">
        <b-card class="h-100" no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Horizontal</h5>
                    <a @click="openCodeDiv2 = !openCodeDiv2" class="p-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
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
        <pre class="language-html">
<code class="language-html">
{{ dividerStyles.map((style) => `&lt;div class="app-divider-h ${style}"&gt;&lt;/div&gt;`).join('\n') }}
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Divider with text & aligns -->
    <b-col md="6" xl="8">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Divider with text & aligns</h5>
                    <a @click="openCodeDiv3 = !openCodeDiv3" class="p-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
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
          <pre class="language-html">
<code class="language-html">
{{ alignments.map((a) => `&lt;div class="app-divider-v ${a}"&gt;&lt;p&gt;${a}&lt;/p&gt;&lt;/div&gt;`).join('\n') }}
</code>
          </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>

    <!-- Horizontal with text -->
    <b-col md="6" xl="4">
        <b-card class="h-100">
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Horizontal with text & aligns</h5>
                    <a @click="openCodeDiv4 = !openCodeDiv4" class="p-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
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
        <pre class="language-html">
<code class="language-html">
&lt;div class="app-divider-h"&gt;&lt;p&gt;Or&lt;/p&gt;&lt;/div&gt;
&lt;div class="app-divider-h align-items-center"&gt;&lt;p&gt;align-items-center&lt;/p&gt;&lt;/div&gt;
&lt;div class="app-divider-h align-items-end"&gt;&lt;p&gt;Or&lt;/p&gt;&lt;/div&gt;
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Color Options With Icons -->
    <b-col md="6" xl="8">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between">
                    <h5>Color Options With Icon Buttons</h5>
                    <a @click="openCodeDiv5 = !openCodeDiv5" class="p-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
                </div>
            </b-card-header>
            <b-card-body>
                <!-- loop dividers -->
                <div
                    v-for="(item, idx) in colorsDivider"
                    :key="idx"
                    :class="['app-divider-v', item.className]"
                >
                    <!-- render plain HTML if element exists -->
                    <span v-if="item.element && !item.social" v-html="item.element"></span>

                    <!-- special case: social buttons -->
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
        <pre class="language-html">
<code class="language-html">
&lt;div class="app-divider-v secondary justify-content-center"&gt;
  &lt;span class="badge text-bg-secondary"&gt;Login With Social&lt;/span&gt;
&lt;/div&gt;

&lt;div class="app-divider-v success justify-content-end"&gt;
  &lt;p class="text-success"&gt;Align Right&lt;/p&gt;
&lt;/div&gt;

&lt;div class="app-divider-v danger"&gt;
  &lt;span class="badge text-bg-danger"&gt;Choose from below option&lt;/span&gt;
&lt;/div&gt;

&lt;div class="app-divider-v info justify-content-center gap-1"&gt;
  &lt;b-button class="btn-facebook icon-btn b-r-22"&gt;
    &lt;PhFacebookLogo :size="18" weight="fill" class="text-white" /&gt;
  &lt;/b-button&gt;
  &lt;b-button class="btn-twitter icon-btn b-r-22"&gt;
    &lt;PhTwitterLogo :size="18" weight="fill" class="text-white" /&gt;
  &lt;/b-button&gt;
  &lt;b-button class="btn-linkedin icon-btn b-r-22"&gt;
    &lt;PhLinkedinLogo :size="18" weight="fill" class="text-white" /&gt;
  &lt;/b-button&gt;
&lt;/div&gt;
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>

    <!-- Horizontal Colors -->
    <b-col md="6" xl="4">
        <b-card class="h-100">
            <b-card-header class="code-header d-flex justify-content-between">
                <h5>Horizontal Colors</h5>
                <a @click="openCodeDiv6 = !openCodeDiv6" class="p-0">
                    <PhCode size="30" weight="bold" class="source" />
                </a>
            </b-card-header>
            <b-card-body class="divider-body d-flex">
                <div
                    v-for="(color, index) in colorsHorizontal"
                    :key="index"
                    :class="['app-divider-h', color]"
                ></div>
            </b-card-body>

            <b-collapse v-model="openCodeDiv6">
        <pre class="language-html">
<code class="language-html">
{{ colorsHorizontal.map((c) => `&lt;div class="app-divider-h ${c}"&gt;&lt;/div&gt;`).join('\n') }}
</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
