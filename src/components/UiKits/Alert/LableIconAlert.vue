<script setup >
import {BAlert, BButton, BCard, BCardBody, BCardHeader, BCol, BCollapse} from "bootstrap-vue-next";
import { ref, h} from "vue";
import {
    PhCode, PhDownloadSimple
} from "@phosphor-icons/vue";
const open = ref(false);



// Outline Alerts
const alerts = [
    {
        color: "primary",
        icon: h(PhDownloadSimple, {size: 20}),
        iconText: '<PhDownloadSimple size="20" />',
        message: "Alert with label icons - check out!"
    },
    {
        color: "secondary",
        icon: h(PhDownloadSimple, {size: 20}),
        iconText: '<PhDownloadSimple size="20" />',
        message: "Alert with label icons - check out!"
    },
    {
        color: "success",
        icon: h(PhDownloadSimple, {size: 20}),
        iconText: '<PhDownloadSimple size="20" />',
        message: "Alert with label icons - check out!"
    },
];

</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Alerts With Label Icons</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
            <b-alert v-for="(alert, index) in alerts" :key="index"
                     :class="['alert-label', `alert-label-${alert.color}`]" show>
                <p class="mb-0 d-flex align-items-center gap-2">
                <span :class="['label-icon', `label-icon-${alert.color}`]">
                  <component :is="alert.icon"/>
                </span>
                    {{ alert.message }}
                </p>
            </b-alert>
                <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code>{{ `
&lt;b-card&gt;
  &lt;b-card-header&gt;&lt;h5&gt;Alerts With Label Icons&lt;/h5&gt;&lt;/b-card-header&gt;
${alerts.map(alert => `    &lt;b-alert class="alert-label alert-label-${alert.color}" show&gt;
      &lt;p class="mb-0 d-flex align-items-center gap-2"&gt;
        &lt;span class="label-icon label-icon-${alert.color}"&gt;
          ${alert.iconText}
        &lt;/span&gt;
        ${alert.message}
      &lt;/p&gt;
    &lt;/b-alert&gt;`).join('\n')}
&lt;/b-card&gt;` }}</code>
  </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>
</template>
