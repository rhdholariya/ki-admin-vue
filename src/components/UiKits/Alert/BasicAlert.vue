<script setup>
import {BAlert, BButton, BCard, BCardBody, BCardHeader, BCol, BCollapse} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";
import { ref} from "vue";


const open = ref(false);

// Prism setup


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
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Basic Alerts</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
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
                <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code>{{ `
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Basic Alerts&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
${alerts.map(alert => `    &lt;b-alert variant="${alert.type}" show&gt;${alert.message}&lt;/b-alert&gt;`).join('\n')}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;` }}</code>
  </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>
</template>
