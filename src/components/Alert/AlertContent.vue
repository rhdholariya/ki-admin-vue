<script setup>
import { ref, watch, nextTick } from "vue";
import { BAlert, BCard, BCol, BCollapse } from "bootstrap-vue-next";
import { PhCode, PhX } from "@phosphor-icons/vue";


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

// re-highlight prism when collapse opens
watch(open, (val) => {
    if (val) {
        nextTick(() => {
            Prism.highlightAll();
        });
    }
});
</script>

<template>
    <b-col lg="6">
    <b-card>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Alert Additional Content</h5>
                <a href="javascript:void(0)" @click="open = !open">
                    <PhCode size="30" weight="bold" class="source" />
                </a>
            </div>
        </template>

        <div>
            <b-alert
                v-for="(alert, index) in alertsContent"
                :key="index"
                :variant="alert.color"
                show
            >
                <h3 class="alert-heading d-flex justify-content-between align-items-center">
                    {{ alert.heading }}
                    <PhX size="21" weight="bold" class="cursor-pointer" />
                </h3>
                <p>{{ alert.message }}</p>
                <hr />
                <p class="mb-0">{{ alert.footer }}</p>
            </b-alert>
        </div>

        <b-collapse v-model="open" class="mt-3">
      <pre class="language-html" tabindex="0">
<code v-text="`<b-card>
  <template #header>
    <h5>Alert With Icon</h5>
  </template>
  <div>
${alertsContent
  .map(
    (alert) => `  <b-alert variant='${alert.color}' show>
    <h3 class='alert-heading d-flex justify-content-between align-items-center'>
      ${alert.heading}
      <PhX size='21' weight='bold' class='cursor-pointer'/>
    </h3>
    <p>${alert.message}</p>
    <hr/>
    <p class='mb-0'>${alert.footer}</p>
  </b-alert>`
  )
  .join('\n\n')}
  </div>
</b-card>`"></code>
      </pre>
        </b-collapse>
    </b-card>
        </b-col>
</template>
