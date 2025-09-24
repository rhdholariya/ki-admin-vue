<script setup>
import {ref,} from "vue";
import {BAlert, BCard, BCol, BCardBody, BCollapse, BCardHeader, BButton} from "bootstrap-vue-next";
import {PhCode, PhX} from "@phosphor-icons/vue";


const open = ref(false);

const alertsContent = [
    {
        color: "primary",
        heading: "Well done!",
        message:
            "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
        footer:
            "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
    },
    {
        color: "secondary",
        heading: "Well done!",
        message:
            "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
        footer:
            "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
    },
    {
        color: "success",
        heading: "Well done!",
        message:
            "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
        footer:
            "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",
    },
];


</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Alert Additional Content</h5>
                    <b-button @click="open = !open" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>

            <b-card-body>
                <b-alert
                    v-for="(alert, index) in alertsContent"
                    :key="index"
                    :variant="alert.color"
                    show
                >
                    <h3 class="alert-heading d-flex justify-content-between align-items-center">
                        {{ alert.heading }}
                        <PhX size="21" weight="bold" class="cursor-pointer"/>
                    </h3>
                    <p>{{ alert.message }}</p>
                    <hr/>
                    <p class="mb-0">{{ alert.footer }}</p>
                </b-alert>


                <b-collapse v-model="open" class="mt-3">
  <pre class="language-html" tabindex="0">
    <code>{{ `
&lt;b-card no-body&gt;
${alertsContent.map(alert => `    &lt;b-card-body&gt;
      &lt;b-alert variant="${alert.color}" show&gt;
        &lt;h3 class="alert-heading"&gt;${alert.heading}&lt;/h3&gt;
        &lt;p&gt;${alert.message}&lt;/p&gt;
        &lt;hr/&gt;
        &lt;p class="mb-0"&gt;${alert.footer}&lt;/p&gt;
      &lt;/b-alert&gt;
    &lt;/b-card-body&gt;`).join('\n')}
&lt;/b-card&gt;` }}</code>
  </pre>
                </b-collapse>

            </b-card-body>
        </b-card>

    </b-col>
</template>
