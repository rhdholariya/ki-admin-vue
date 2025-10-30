<script setup>
import {BAlert, BButton, BCard, BCardBody, BCardHeader, BCol, BCollapse} from "bootstrap-vue-next";
import { ref} from "vue";
import {
    PhCode, PhDownload, PhWheelchair, PhCheckCircle, PhPower, PhWarning, PhInfo, PhAlignBottom,
    PhGlobe
} from "@phosphor-icons/vue";

const open = ref(false);

const alerts = [
    {
        color: "light-border-primary",
        icon: PhDownload,
        message: "Light-border-primary alert With icons - check it out!",
        type: '<PhDownload size="16" class="me-2" />'
    },
    {
        color: "light-border-secondary",
        icon: PhWheelchair,
        message: "Light-border-secondary alert With icons - check it out!",
        type: '<PhWheelchair size="16" class="me-2" />'
    },
    {
        color: "light-border-success",
        icon: PhCheckCircle,
        message: "Light-border-success alert With icons - check it out!",
        type: '<PhCheckCircle size="16" class="me-2" />'
    },
    {
        color: "light-border-danger",
        icon: PhPower,
        message: "Light-border-danger alert With icons - check it out!",
        type: '<PhPower size="16" class="me-2" />'
    },
    {
        color: "light-border-warning",
        icon: PhWarning,
        message: "Light-border-warning alert With icons - check it out!",
        type: '<PhWarning size="16" class="me-2" />'
    },
    {
        color: "light-border-info",
        icon: PhInfo,
        message: "Light-border-info alert With icons - check it out!",
        type: '<PhInfo size="16" class="me-2" />'
    },
    {
        color: "light-border-light",
        icon: PhAlignBottom,
        message: "Light-border-light alert With icons - check it out!",
        type: '<PhAlignBottom size="16" class="me-2" />'
    },
    {
        color: "light-border-dark",
        icon: PhGlobe,
        message: "Light-border-dark alert With icons - check it out!",
        type: '<PhGlobe size="16" class="me-2" />'
    }
];



</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Alerts With Icons</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <b-alert v-for="(alert, index) in alerts" :key="index" :variant="alert.color" show dismissible
                         class="d-flex justify-content-between align-items-center">
                    <p class="mb-0 ">
                        <component :is="alert.icon" size="16" class="me-2"/>
                        {{ alert.message }}
                    </p>
                </b-alert>
                <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code>{{ `
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Alerts With Icons&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
${alerts.map(alert => `    &lt;b-alert variant="${alert.color}" show dismissible class="d-flex justify-content-between align-items-center"&gt;
      &lt;p class="mb-0 d-flex align-items-center"&gt;${alert.type} ${alert.message}&lt;/p&gt;
    &lt;/b-alert&gt;`).join('\n')}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;` }}</code>
  </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>
</template>
