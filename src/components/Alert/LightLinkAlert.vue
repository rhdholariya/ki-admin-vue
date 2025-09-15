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
    {type: "primary", text: "Light primary color alert with", linkText: "an example link", linkHref: "#"},
    {type: "secondary", text: "Light secondary color alert with", linkText: "an example link", linkHref: "#"},
    {type: "success", text: "Light success color alert with", linkText: "an example link", linkHref: "#"},
    {type: "danger", text: "Light danger color alert with", linkText: "an example link", linkHref: "#"},
    {type: "warning", text: "Light warning color alert with", linkText: "an example link", linkHref: "#"},
    {type: "info", text: "Light info color alert with", linkText: "an example link", linkHref: "#"},
    {type: "light", text: "Light light color alert with", linkText: "an example link", linkHref: "#"},
    {type: "dark", text: "Light dark color alert with", linkText: "an example link", linkHref: "#"},
];

[open].forEach(setupPrism);

</script>
<template>
    <b-col lg="6">
        <b-card>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Light Alerts With Link</h5>
                    <a href="javascript:void(0)" @click="open = !open">
                        <PhCode size="30" weight="bold" class="source"/>
                    </a>
                </div>
            </template>
            <b-alert v-for="(alert, index) in alerts" :key="index" :variant="`light-${alert.type}`" show
                     role="alert">
                {{ alert.text }}
                <a :href="alert.linkHref" class="alert-link">{{ alert.linkText }}</a> - Check it!
            </b-alert>
            <b-collapse v-model="open" class="mt-3">
              <pre class="language-html" tabindex="0">
<code v-text="`&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Light Alerts With Link&lt;/h5&gt;
  &lt;/template&gt;
${alerts.map(alert => `  &lt;b-alert variant=&quot;light-${alert.type}&quot; show role=&quot;alert&quot;&gt;${alert.text} &lt;a href=&quot;${alert.linkHref}&quot; class=&quot;alert-link&quot;&gt;${alert.linkText}&lt;/a&gt; - Check it!&lt;/b-alert&gt;`).join('\n')}
&lt;/b-card&gt;`"></code>
              </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
