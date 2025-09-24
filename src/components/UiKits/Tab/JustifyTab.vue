<script setup lang="ts">
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
import { PhCode, PhLifebuoy, PhKeyboard, PhFile } from "@phosphor-icons/vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

// Tabs Data
const justifyTabs = [
  {
    id: "justify-home",
    label: "Home",
    icon: PhLifebuoy,
    iconName: "PhLifebuoy",
    content: [
      `The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
  {
    id: "justify-profile",
    label: "Profile",
    icon: PhKeyboard,
    iconName: "PhKeyboard",
    content: [
      `<ol>
        <li>Show only the last tab.</li>
        <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
        <li>Matches a tab, show it and hide all following siblings.</li>
      </ol>`,
    ],
  },
  {
    id: "justify-contact",
    label: "Contact",
    icon: PhFile,
    iconName: "PhFile",
    content: [
      `The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
];

const activeTab = ref(justifyTabs[0].id);
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
        <h5>Justify Light Tabs</h5>
        <a href="javascript:void(0)" @click="openCode = !openCode">
          <PhCode size="30" class="source" weight="bold"/>
        </a>
          </div>
      </b-card-header>

      <!-- Card Body -->
      <b-card-body class="bottom-tab">
        <b-tabs
          v-model="activeTab"
          pills
          card
          nav-class=" tab-light-secondary justify-content-around"
        >
          <b-tab
            v-for="tab in justifyTabs"
            :key="tab.id"
            :active="tab.id === activeTab"
          >
            <template #title>
              <div class="d-flex align-items-center justify-content-center">
                <component :is="tab.icon" size="20" class="me-2" />
                <span>{{ tab.label }}</span>
              </div>
            </template>

            <div v-for="(para, i) in tab.content" :key="i" v-html="para" class="pt-2"></div>
          </b-tab>
        </b-tabs>
      </b-card-body>

      <!-- PrismJS Preview -->
      <b-collapse v-model="openCode">
        <pre class="language-html mt-3" tabindex="0">
<code class="language-html">
{{ `<b-tabs pills card nav-class=" tab-light-secondary justify-content-around">
${justifyTabs
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
