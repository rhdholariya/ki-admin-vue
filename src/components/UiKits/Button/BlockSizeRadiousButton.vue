<script setup>
import { ref, nextTick, watch } from "vue";
import {BCard, BButton, BRow, BCol, BCollapse, BCardBody, BCardHeader} from "bootstrap-vue-next";
import Prism from "prismjs"
import "prismjs/themes/prism.css"

import {
    PhCode,
    PhDownloadSimple,
    PhButterfly,
    PhMedal,
    PhPower,
    PhWarning,
} from "@phosphor-icons/vue";


const openBlock = ref(false);
const openSize = ref(false);
const openRadius = ref(false);


const blockButtonGroups = [
    { primary: "primary", secondary: "secondary" },
    { primary: "outline-primary", secondary: "outline-secondary" },
    { primary: "light-primary", secondary: "light-secondary" },
];

const sizedButtons = [
    { text: "Primary", variant: "primary", sizeClass: "btn-xxl", icon: PhDownloadSimple, iconName: "<PhDownloadSimple size='16' />", position: "start" },
    { text: "Primary", variant: "primary", sizeClass: "btn-xl", icon: PhDownloadSimple, iconName: "<PhDownloadSimple size='16' />", position: "start" },
    { text: "Secondary", variant: "secondary", sizeClass: "btn-lg", icon: PhButterfly, iconName: "<PhButterfly size='16' />", position: "end" },
    { text: "Success", variant: "success", sizeClass: "btn-md", icon: PhMedal, iconName: "<PhMedal size='16' />", position: "start" },
    { text: "Danger", variant: "danger", sizeClass: "btn-sm", icon: PhPower, iconName: "<PhPower size='16' />", position: "start" },
    { text: "Warning", variant: "warning", sizeClass: "btn-xs", icon: PhWarning, iconName: "<PhWarning size='16' />", position: "start" },
];

const borderButtons = [
    { text: "Primary", variant: "primary", radiusClass: "b-r-0" },
    { text: "Secondary", variant: "secondary", radiusClass: "b-r-6" },
    { text: "Success", variant: "success", radiusClass: "b-r-10" },
    { text: "Danger", variant: "danger", radiusClass: "b-r-22" },
];


watch([openBlock, openSize, openRadius], async () => {
    await nextTick();
    Prism.highlightAll();
});
</script>

<template>
    <b-row class="g-3">
        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Block Buttons</h5>
                        <b-button @click="openBlock = !openBlock" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source" />
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row class="mb-2">
                    <b-col
                        v-for="(group, idx) in blockButtonGroups"
                        :key="idx"
                        md="6"
                        lg="4"
                        class="app-btn-list"
                    >
                        <div class="d-grid gap-2">
                            <b-button :variant="group.primary" class="w-100">Button</b-button>
                            <b-button :variant="group.secondary" class="w-100">Button</b-button>
                        </div>
                    </b-col>
                </b-row>

                <b-collapse v-model="openBlock" class="mt-3">
          <pre class="language-html"><code v-prism>
                 &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Block Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
              &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{ `&lt;b-row>

${blockButtonGroups
  .map(
    (g) => `&lt;b-col md="6" lg="4" class="app-btn-list">
  &lt;div class="d-grid gap-2">
    &lt;b-button variant="${g.primary}" class="w-100">Button /&gt;b-button
              &lt;b-button variant="${g.secondary}" class="w-100">Button  &lt;/b-button&gt;
              &lt;/div&gt;
  &lt;/b-col&gt;`
  )
  .join("\n")}
&lt;/b-row&gt;` }}

  &lt;/div&gt;
              &lt;/b-card-body&gt;
/b-card&lt;&gt;
          </code></pre>
                </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Size Buttons</h5>
                        <b-button @click="openSize = !openSize" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source" />
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>

                <div class="app-btn-list d-flex flex-wrap gap-2">
                    <b-button
                        v-for="(btn, idx) in sizedButtons"
                        :key="idx"
                        :variant="btn.variant"
                        type="button"
                        :class="`d-inline-flex align-items-center gap-2 ${btn.sizeClass}`"
                    >
                        <component v-if="btn.position === 'start'" :is="btn.icon" size="16" />
                        {{ btn.text }}
                        <component v-if="btn.position === 'end'" :is="btn.icon" size="16" />
                    </b-button>
                </div>

                <b-collapse v-model="openSize" class="mt-3">
          <pre class="language-html"><code v-prism>
               &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Size Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
              &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{ `${sizedButtons
              .map(
                  (btn) => ` &lt;b-button variant="${btn.variant}" class="d-inline-flex align-items-center gap-2 ${btn.sizeClass}">
  ${btn.position === "start" ? btn.iconName : ""}
  ${btn.text}
  ${btn.position === "end" ? btn.iconName : ""}
&lt;/b-button&gt;`
  )
  .join("\n")}` }}
                 &lt;/div&gt;
              &lt;/b-card-body&gt;
&lt;/b-card&gt;
          </code></pre>
                </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col xl="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5>Radius Buttons</h5>
                        <b-button @click="openRadius = !openRadius" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source" />
                        </b-button>
                    </div>
                </b-card-header>
                <b-card-body>

                <div class="app-btn-list d-flex gap-2 flex-wrap">
                    <b-button
                        v-for="(btn, idx) in borderButtons"
                        :key="idx"
                        :variant="btn.variant"
                        :class="`w-auto ${btn.radiusClass}`"
                    >
                        {{ btn.text }}
                    </b-button>
                </div>

                <b-collapse v-model="openRadius" class="mt-3">
          <pre class="language-html"><code v-prism>
               &lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Radius Buttons&lt;/h5&gt;
  &lt;/b-card-header&gt;
              &lt;b-card-body&gt;
  &lt;div class="d-flex flex-wrap gap-3"&gt;
{{ `${borderButtons
              .map(
                  (btn) => `&lt;b-button variant="${btn.variant}" class="w-auto ${btn.radiusClass}">
  ${btn.text}
&lt;/b-button&gt;`
  )
  .join("\n")}` }}
                &lt;/div&gt;
              &lt;/b-card-body&gt;
&lt;/b-card&gt;
          </code></pre>
                </b-collapse>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
