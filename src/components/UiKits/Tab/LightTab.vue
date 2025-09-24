<script setup>
import { ref, watch } from "vue";
import { BCol, BCard, BCardHeader, BTabs, BTab, BCollapse } from "bootstrap-vue-next";
import { PhCode, PhLifebuoy, PhKeyboard, PhFileMinus } from "@phosphor-icons/vue";

// Tabs data
const tabs = [
  {
    id: "description",
    label: "Description",
    icon: PhLifebuoy,
    content: [
      `The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
  {
    id: "howitworks",
    label: "How It Works",
    icon: PhKeyboard,
    content: [
      "1. Show only the last tab.",
      "2. If <code>:target</code> matches a tab, show it and hide all following siblings.",
      "3. Matches a tab, show it and hide all following siblings.",
    ],
  },
  {
    id: "drawbacks",
    label: "Drawbacks",
    icon: PhFileMinus,
    content: [
      `The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);

// Highlight code when collapse opens
watch(openCode, (val) => {
  if (val) Prism.highlightAll();
});
</script>

<template>
  <b-col lg="6">
    <b-card no-body>
      <!-- Header -->
      <b-card-header >
          <div class="code-header d-flex justify-content-between align-items-center">
        <h5>Light Tabs</h5>
        <a href="javascript:void(0)" @click="openCode = !openCode">
          <PhCode size="30" class="source" weight="bold" />
        </a>
          </div>
      </b-card-header>

      <!-- Tabs -->
      <b-tabs v-model="activeTab" pills card class="tab-light-primary">
        <b-tab v-for="tab in tabs" :key="tab.id" :active="tab.id === tabs[0].id">
          <template #title>
            <component :is="tab.icon" size="20" class="me-2" />
            {{ tab.label }}
          </template>
          <div v-for="(para, i) in tab.content" :key="i" v-html="para" class="mb-2"></div>
        </b-tab>
      </b-tabs>

      <!-- Prism Code Collapse (same style as your example) -->
      <b-collapse v-model="openCode">
        <pre class="language-html" tabindex="0">
<code class="language-html" v-text="`<b-tabs pills card class='tab-light-primary'>
${tabs
  .map(
    (t, i) => `  <b-tab${i === 0 ? ' active' : ''}>
    <template #title>
      <${t.icon.name} size='20' class='me-2' />
      ${t.label}
    </template>
${t.content.map((c) => `    <p>${c}</p>`).join('\n')}
  </b-tab>`
  )
  .join('\n')}
</b-tabs>`"></code>
        </pre>
      </b-collapse>
    </b-card>
  </b-col>
</template>
