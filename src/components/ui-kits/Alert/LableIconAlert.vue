<script setup >
import {BAlert, BCard, BCol, BCollapse} from "bootstrap-vue-next";
import {nextTick, ref, watch, h} from "vue";
import {
    PhCode, PhDownloadSimple
} from "@phosphor-icons/vue";
const open = ref(false);

const setupPrism = (openRef) => {
    watch(openRef, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
};

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

[open].forEach(setupPrism);

</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Alerts With Label Icons</h5>
                    <a href="javascript:void(0)" @click="open = !open">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </template>
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
<code v-text="`&lt;b-card&gt;
  &lt;template #header&gt;&lt;h5&gt;Alerts With Label Icons&lt;/h5&gt;&lt;/template&gt;
${alerts.map(alert =>
  `  &lt;b-alert class=&quot;alert-label alert-label-${alert.color}&quot; show&gt;
    &lt;p class=&quot;mb-0 d-flex align-items-center gap-2&quot;&gt;
      &lt;span class=&quot;label-icon label-icon-${alert.color}&quot;&gt;
        ${alert.iconText}
      &lt;/span&gt;
      ${alert.message}
    &lt;/p&gt;
  &lt;/b-alert&gt;`).join('\n')}
&lt;/b-card&gt;`"></code>
  </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
