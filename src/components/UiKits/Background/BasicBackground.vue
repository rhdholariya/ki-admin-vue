<script setup>
import { ref } from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BCollapse,
} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";


// === Background Colors Data ===
const backgroundColors = [
    { name: "primary", text: "text-white", bgColor: 900 },
    { name: "secondary", text: "text-white", bgColor: 500 },
    { name: "success", text: "text-white", bgColor: 500 },
    { name: "danger", text: "text-white", bgColor: 500 },
    { name: "warning", text: "text-white", bgColor: 500 },
    { name: "info", text: "text-white", bgColor: 500 },
    { name: "light", text: "text-dark", bgColor: 500 },
    { name: "dark", text: "text-white", bgColor: 500 },
];

const backgroundColorsShades = [
    "bg-primary-900",
    "bg-primary-800",
    "bg-primary-700",
    "bg-primary-600",
    "bg-primary-500",
    "bg-primary-400",
    "bg-primary-300",
];

// === Collapse States ===
const openBack = ref(false);
const openBack2 = ref(false);
const openBack3 = ref(false);
const openBack4 = ref(false);

// === Re-highlight Prism on collapse open ===

</script>

<template>
    <b-container fluid>
        <b-row>
            <!-- Background Colors -->
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header >
                        <div class="code-header d-flex justify-content-between">
                        <h5>Background Colors</h5>
                        <a role="button" @click="openBack = !openBack">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex gap-2 flex-wrap">
              <span
                  v-for="color in backgroundColors"
                  :key="color.name"
                  class="py-2 px-3 rounded f-w-500"
                  :class="[`bg-${color.name}`, color.text]"
              >
                bg-{{ color.name }}
              </span>
                        </div>
                    </b-card-body>
                    <b-collapse v-model="openBack">
            <pre class="diamondbullet language-html mt-3">
<code class="language-html">
{{
        `<div class="d-flex gap-2 flex-wrap">
  ${backgroundColors.map(c =>
    `<span class="py-2 px-3 bg-${c.name} ${c.text} rounded f-w-500">bg-${c.name}</span>`
  ).join("\n  ")}
</div>`
}}
</code>
            </pre>
                    </b-collapse>
                </b-card>
            </b-col>

            <!-- Background Color Shades -->
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header>
                        <div class="code-header d-flex justify-content-between">
                        <h5>Background Color Shades</h5>
                        <a role="button" @click="openBack2 = !openBack2">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex gap-2 flex-wrap">
              <span
                  v-for="bg in backgroundColorsShades"
                  :key="bg"
                  class="py-2 px-3 rounded f-w-500"
                  :class="bg"
              >
                {{ bg }}
              </span>
                        </div>
                    </b-card-body>
                    <b-collapse v-model="openBack2">
            <pre class="diamondbullet language-html mt-3">
<code class="language-html">
{{
        `<div class="d-flex gap-2 flex-wrap">
  ${backgroundColorsShades.map(bg =>
    `<span class="py-2 px-3 ${bg} rounded f-w-500">${bg}</span>`
  ).join("\n  ")}
</div>`
}}
</code>
            </pre>
                    </b-collapse>
                </b-card>
            </b-col>

            <!-- Outline Background -->
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header >
                        <div class="code-header d-flex justify-content-between">
                        <h5>Outline Background</h5>
                        <a role="button" @click="openBack3 = !openBack3">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex gap-2 flex-wrap">
              <span
                  v-for="color in backgroundColors"
                  :key="color.name"
                  class="py-2 px-3 rounded f-w-500 opacity-75"
                  :class="`btn-outline-${color.name}`"
              >
                bg-outline-{{ color.name }}
              </span>
                        </div>
                    </b-card-body>
                    <b-collapse v-model="openBack3">
            <pre class="diamondbullet language-html mt-3">
<code class="language-html">
{{
        `<div class="d-flex gap-2 flex-wrap">
  ${backgroundColors.map(c =>
    `<span class="py-2 px-3 bg-outline-${c.name} rounded f-w-500">bg-outline-${c.name}</span>`
  ).join("\n  ")}
</div>`
}}
</code>
            </pre>
                    </b-collapse>
                </b-card>
            </b-col>

            <!-- Soft Background -->
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header >
                        <div class="code-header d-flex justify-content-between">
                        <h5>Soft Background</h5>
                        <a role="button" @click="openBack4 = !openBack4">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="d-flex gap-2 flex-wrap">
              <span
                  v-for="color in backgroundColors"
                  :key="color.name"
                  class="py-2 px-3 rounded f-w-500"
                  :class="`bg-light-${color.name}`"
              >
                bg-light-{{ color.name }}
              </span>
                        </div>
                    </b-card-body>
                    <b-collapse v-model="openBack4">
            <pre class="diamondbullet language-html mt-3">
<code class="language-html">
{{
        `<div class="d-flex gap-2 flex-wrap">
  ${backgroundColors.map(c =>
    `<span class="py-2 px-3 bg-light-${c.name} rounded f-w-500">bg-light-${c.name}</span>`
  ).join("\n  ")}
</div>`
}}
</code>
            </pre>
                    </b-collapse>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
