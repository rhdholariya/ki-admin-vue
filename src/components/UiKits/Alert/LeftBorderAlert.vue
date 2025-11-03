<script setup>
import {BAlert, BButton, BCard, BCardBody, BCardHeader, BCol, BCollapse} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";
import {ref} from "vue";

const open = ref(false);

const alerts = [
    {color: "border-primary", message: "Primary border alert - check out!"},
    {color: "border-secondary", message: "Secondary border alert - check out!"},
    {color: "border-success", message: "Success border alert - check out!"},
];

</script>
<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Alerts With Left Border</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <b-alert v-for="(alert, index) in alerts" :key="index" :variant="alert.color" show>
                    {{ alert.message }}
                </b-alert>
                <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code v-prism>
&lt;b-card no-body&gt;
  &lt;b-card-header&gt;&lt;h5&gt;Alerts With Left Border&lt;/h5&gt;&lt;/b-card-header&gt;
  &lt;b-card-body&gt;
{{alerts.map(alert => `    &lt;b-alert variant="${alert.color}" show&gt;${alert.message}&lt;/b-alert&gt;`).join('\n')}}
  &lt;/b-card-body&gt;
&lt;/b-card&gt;</code>
  </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>
</template>
