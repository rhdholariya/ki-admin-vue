<script setup>
import { ref, watch, nextTick } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // make sure CSS is imported

// collapse state
const openCustom = ref(false);

// watcher for Prism re-highlight
watch(openCustom, async (val) => {
  if (val) {
    await nextTick();
    Prism.highlightAll();
  }
});

// your alertData
const alertData = [
  {
    color: "primary",
    iconText: '<PhDownloadSimple size="20" />',
    message: "Alert with label icons - check out!"
  },
  {
    color: "success",
    iconText: '<PhDownloadSimple size="20" />',
    message: "Another label icon alert!"
  }
];
</script>

<template>
  <b-card>
    <template #header>
      <div class="code-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Alerts With Label Icons</h5>
        <a href="javascript:void(0)" @click="openCustom = !openCustom">
          Toggle Code
        </a>
      </div>
    </template>

    <b-alert
        v-for="(alert, index) in alertData"
        :key="index"
        :class="['alert-label', `alert-label-${alert.color}`]"
        show
    >
      <p class="mb-0 d-flex align-items-center gap-2">
        <span :class="['label-icon', `label-icon-${alert.color}`]">
          {{ alert.iconText }}
        </span>
        {{ alert.message }}
      </p>
    </b-alert>

    <!-- Prism Preview -->
    <b-collapse v-model="openCustom" class="mt-3">
      <pre class="language-html" tabindex="0">
<code v-text="`&lt;b-card&gt;
  &lt;template #header&gt;
    &lt;h5&gt;Alerts With Labels&lt;/h5&gt;
  &lt;/template&gt;
${alertData.map(alert => `  &lt;b-alert show class=&quot;alert-label alert-label-${alert.color}&quot;&gt;
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
</template>
