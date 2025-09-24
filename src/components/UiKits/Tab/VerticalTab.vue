<script setup>
import { ref, watch, nextTick } from "vue";
import {
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BCollapse,
  BTabs,
  BTab,
} from "bootstrap-vue-next";
import { PhClock, PhCode, PhDisc, PhStar } from "@phosphor-icons/vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

// Tabs Data
const tabs = [
  {
    id: "v-features",
    label: "Features",
    icon: PhDisc,
    iconName: "PhDisc", // ✅ for Prism preview
    content: [
      `The idea is to use <code>:target </code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
  {
    id: "v-history",
    label: "History",
    icon: PhClock,
    iconName: "PhClock",
    content: [
      "1. Show only the last tab.",
      "2. If <code>:target</code> matches a tab, show it and hide all following siblings.",
      "3. Matches a tab, show it and hide all following siblings.",
    ],
  },
  {
    id: "v-reviews",
    label: "Reviews",
    icon: PhStar,
    iconName: "PhStar",
    content: [
      `The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);

// Highlight PrismJS when collapse opens
watch(openCode, async (val) => {
  if (val) {
    await nextTick();
    Prism.highlightAll();
  }
});
</script>

<template>
  <b-col lg="6">
    <b-card no-body>
      <!-- Card Header -->
      <b-card-header >
          <div class="code-header d-flex justify-content-between align-items-center">
        <h5>Vertical Tabs Left Side</h5>
        <a href="javascript:void(0)" @click="openCode = !openCode">
          <PhCode size="30" class="source" weight="bold"/>
        </a>
          </div>
      </b-card-header>

      <!-- Card Body -->
      <b-card-body>
        <b-tabs
          v-model="activeTab"
          vertical
          pills
          card
          nav-class="flex-column app-tabs-secondary"
        >
          <b-tab
            v-for="tab in tabs"
            :key="tab.id"
            :active="tab.id === activeTab"
          >
            <template #title>
              <div class="d-flex align-items-center">
                <component :is="tab.icon" size="20" class="me-2" />
                <span>{{ tab.label }}</span>
              </div>
            </template>

            <!-- Tab Content -->
            <div
              v-for="(para, i) in tab.content"
              :key="i"
              v-html="para"
              class="mb-2"
            ></div>
          </b-tab>
        </b-tabs>
      </b-card-body>

      <!-- PrismJS Preview -->
      <b-collapse v-model="openCode">
        <pre class="language-html mt-3" tabindex="0">
<code class="language-html">
{{ `<b-tabs vertical pills card nav-class="flex-column app-tabs-secondary">
${tabs
  .map(
    (t) => `  <b-tab>
    <template #title>
      &lt;${t.iconName} size="20" class="me-2" /&gt; ${t.label}
    </template>
    ${t.content.map((c) => `    <p>${c}</p>`).join("\n")}
  </b-tab>`
  )
  .join("\n\n")}
</b-tabs>` }}
</code>
        </pre>
      </b-collapse>
  </b-card>
  </b-col>
</template>
