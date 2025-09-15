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
    {color: "border-primary", message: "Primary border alert - check out!"},
    {color: "border-secondary", message: "Secondary border alert - check out!"},
    {color: "border-success", message: "Success border alert - check out!"},
];

[open].forEach(setupPrism);

</script>
<template>
    <b-col lg="6">
        <b-card>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Alerts With Left Border</h5>
                    <a href="javascript:void(0)" @click="open = !open">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </template>
            <b-alert v-for="(alert, index) in alerts" :key="index" :variant="alert.color" show>
                {{ alert.message }}
            </b-alert>
            <b-collapse v-model="open" class="mt-3">
              <pre class="language-html" tabindex="0">
<code v-text="`&lt;b-card&gt;
  &lt;template #header&gt;&lt;h5&gt;Alerts With Left Border&lt;/h5&gt;&lt;/template&gt;
${alerts.map(alert => `  &lt;b-alert variant=&quot;${alert.color}&quot; show&gt;${alert.message}&lt;/b-alert&gt;`).join('\n')}
&lt;/b-card&gt;`"></code>
            </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
