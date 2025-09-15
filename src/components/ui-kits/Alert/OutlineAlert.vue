<script setup >
import {BAlert, BCard, BCol, BCollapse} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";
import {nextTick, ref, watch} from "vue";

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
    {type: "outline-primary", message: "Outline-alert primary - check it out!"},
    {type: "outline-secondary", message: "Outline-alert secondary - check it out!"},
    {type: "outline-success", message: "Outline-alert success - check it out!"},
    {type: "outline-danger", message: "Outline-alert danger - check it out!"},
    {type: "outline-warning", message: "Outline-alert warning - check it out!"},
    {type: "outline-info", message: "Outline-alert info - check it out!"},
    {type: "outline-light", message: "Outline-alert light - check it out!"},
    {type: "outline-dark", message: "Outline-alert dark - check it out!"}
];

[open].forEach(setupPrism);

</script>
<template>
    <b-col lg="6">
        <b-card>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Outline Alerts</h5>
                    <a href="javascript:void(0)" @click="open = !open">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </template>
            <b-alert v-for="(alert, index) in alerts" :key="index" :variant="alert.type" show>
                {{ alert.message }}
            </b-alert>
            <b-collapse v-model="open" class="mt-3">
<pre class="language-html" tabindex="0">
<code v-text="`&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Outline Alerts&lt;/h5&gt;
  &lt;/template&gt;
${alerts.map(alert => `  &lt;b-alert variant=&quot;${alert.type}&quot; show&gt;${alert.message}&lt;/b-alert&gt;`).join('\n')}
&lt;/b-card&gt;`"></code>
</pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
