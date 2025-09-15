<script setup>
import { BAlert, BCard, BCol, BCollapse } from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";
import { nextTick, ref, watch } from "vue";


const openBasic = ref(false);

// Prism setup
const setupPrism = (openRef) => {
    watch(openRef, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
};

setupPrism(openBasic);

// Alerts data
const alerts = [
    { type: "primary", message: "Simple primary alert - check it out!" },
    { type: "secondary", message: "Simple secondary alert - check it out!" },
    { type: "success", message: "Simple success alert - check it out!" },
    { type: "danger", message: "Simple danger alert - check it out!" },
    { type: "warning", message: "Simple warning alert - check it out!" },
    { type: "info", message: "Simple info alert - check it out!" },
    { type: "light", message: "Simple light alert - check it out!" },
    { type: "dark", message: "Simple dark alert - check it out!" },
];
</script>

<template>
    <b-col lg="6">
        <b-card>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Basic Alerts</h5>
                    <a href="javascript:void(0)" @click="openBasic = !openBasic">
                        <PhCode size="30" weight="bold" class="source" />
                    </a>
                </div>
            </template>

            <!-- Alerts -->
            <b-alert
                v-for="(alert, index) in alerts"
                :key="index"
                :variant="alert.type"
                show
            >
                {{ alert.message }}
            </b-alert>

            <!-- Prism Preview -->
            <b-collapse v-model="openBasic" class="mt-3">
        <pre class="language-html" tabindex="0">
<code v-text="`&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Basic Alerts&lt;/h5&gt;
  &lt;/template&gt;
${alerts.map(alert => `  &lt;b-alert variant=&quot;${alert.type}&quot; show&gt;${alert.message}&lt;/b-alert&gt;`).join('\n')}
&lt;/b-card&gt;`"></code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
