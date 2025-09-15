<script setup>
import { ref } from "vue";
import {BButton, BCard, BCol, BCollapse} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";

// reactive states
const open = ref(false);
const alerts = ref([]);

// add alert
const appendAlert = (message, type) => {
    alerts.value.push({ message, type });
};

// remove alert
const removeAlert = (index) => {
    alerts.value.splice(index, 1);
};
</script>

<template>
    <b-col lg="12">
    <b-card>
        <template #header>
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Live Alert</h5>
                <a href="javascript:void(0)" @click="open = !open">
                    <PhCode size="30" weight="bold" class="source" />
                </a>
            </div>
        </template>
            <div id="liveAlert">
                <div
                    v-for="(alert, index) in alerts"
                    :key="index"
                    class="alert alert-dismissible"
                    :class="`alert-${alert.type}`"
                    role="alert"
                >
                    <div>{{ alert.message }}</div>
                    <button
                        type="button"
                        class="btn-close"
                        @click="removeAlert(index)"
                        aria-label="Close"
                    ></button>
                </div>
            </div>

            <b-button
                variant="primary"
                @click="appendAlert('Hi!, Welcome To ki-admin', 'light-primary')"
            >
                Show live alert
            </b-button>

        <!-- Prism / Code Preview -->
        <b-collapse v-model="open">
      <pre class="language-html mt-3">
        <code class="language-html">
&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Live Alert&lt;/h5&gt;
  &lt;/template&gt;
    &lt;div id="liveAlert"&gt;&lt;/div&gt;
    &lt;b-button variant="primary"&gt;Show live alert&lt;/b-button&gt;
&lt;/b-card&gt;
        </code>
      </pre>
        </b-collapse>
    </b-card>
    </b-col>
</template>
