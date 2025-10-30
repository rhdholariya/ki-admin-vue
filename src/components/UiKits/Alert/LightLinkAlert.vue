<script setup>
import {BAlert, BCard, BCardBody, BCol, BCollapse , BButton} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";
import {ref} from "vue";
const open = ref(false);

const alerts = [
    {type: "primary", text: "Light primary color alert with", linkText: "an example link", linkHref: "/docs/getting-started"},
    {type: "secondary", text: "Light secondary color alert with", linkText: "an example link", linkHref: "/docs/components"},
    {type: "success", text: "Light success color alert with", linkText: "an example link", linkHref: "/docs/success-stories"},
    {type: "danger", text: "Light danger color alert with", linkText: "an example link", linkHref: "/docs/error-handling"},
    {type: "warning", text: "Light warning color alert with", linkText: "an example link", linkHref: "/docs/warnings"},
    {type: "info", text: "Light info color alert with", linkText: "an example link", linkHref: "/docs/information"},
    {type: "light", text: "Light light color alert with", linkText: "an example link", linkHref: "/docs/light-theme"},
    {type: "dark", text: "Light dark color alert with", linkText: "an example link", linkHref: "/docs/dark-theme"},
];

</script>
<template>
    <b-col lg="6">
        <b-card no-body>
            <template #header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Light Alerts With Link</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </template>
            <b-card-body>
                <b-alert v-for="(alert, index) in alerts" :key="index" :variant="`light-${alert.type}`" show
                         role="alert">
                    {{ alert.text }}
                    <a :href="alert.linkHref" class="alert-link">{{ alert.linkText }}</a> - Check it!
                </b-alert>
                <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code>{{ `
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Light Alerts With Link&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
${alerts.map(alert => `    &lt;b-alert variant="light-${alert.type}" show role="alert"&gt;${alert.text} &lt;a href="${alert.linkHref}" class="alert-link"&gt;${alert.linkText}&lt;/a&gt; - Check it!&lt;/b-alert&gt;`).join('\n')}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;` }}</code>
  </pre>
                </b-collapse>
            </b-card-body>


        </b-card>
    </b-col>
</template>