<script setup>
import { ref, watch } from "vue";
import { BCol, BCard, BCardHeader, BCardBody, BCollapse } from "bootstrap-vue-next";
import { PhDisc, PhClock, PhStar, PhCode } from "@phosphor-icons/vue";

const tabs = [
  {
    id: "features-tab-pane",
    label: "Features",
    icon: PhDisc,
    content: [
      `<p class="mb-0">The idea is to use <code> :target </code>pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.</p>`,
      `<p class="mb-0">This concept leverages modern CSS to control tab visibility without JavaScript.</p>`,
    ],
  },
  {
    id: "history-tab-pane",
    label: "History",
    icon: PhClock,
    content: [
      "1. Show only the last tab.",
      "2. If <code>:target</code> matches a tab, show it and hide all following siblings.",
      "3. Matches a tab, show it and hide all following siblings.",
    ],
  },
  {
    id: "reviews-tab-pane",
    label: "Reviews",
    icon: PhStar,
    content: [
      `The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.`,
    ],
  },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);

watch(openCode, (val) => {
  if (val) Prism.highlightAll();
});
</script>

<template>
  <b-col lg="6">
    <b-card class="equal-card" no-body>
      <!-- Header -->
      <b-card-header >
          <div class="code-header d-flex justify-content-between align-items-center">
        <h5>Background Tabs</h5>
        <a href="javascript:void(0)" @click="openCode = !openCode">
          <PhCode size="30" class="source" weight="bold" />
        </a>
          </div>
      </b-card-header>

      <!-- Nav Tabs -->
      <b-card-body>
        <ul class="nav nav-tabs tab-primary bg-primary p-1" role="tablist">
          <li class="nav-item" v-for="tab in tabs" :key="tab.id" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeTab === tab.id }"
              type="button"
              role="tab"
              :aria-controls="tab.id"
              :aria-selected="activeTab === tab.id"
              @click="activeTab = tab.id"
            >
              <component :is="tab.icon" size="30" class="pe-1 ps-1" />
              {{ tab.label }}
            </button>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content mt-3">
          <div
            v-for="tab in tabs"
            :key="tab.id + '-content'"
            class="tab-pane fade"
            :class="{ show: activeTab === tab.id, active: activeTab === tab.id }"
            :id="tab.id"
            role="tabpanel"
            :aria-labelledby="tab.id.replace('-pane','')"
          >
            <div v-for="(line, i) in tab.content" :key="i" v-html="line" class="mb-2"></div>
          </div>
        </div>

        <!-- PrismJS Code Collapse -->
         <b-collapse v-model="openCode" class="mt-3">
          <pre class="language-html" tabindex="0">
<code class="language-html" v-text="`<ul class='nav nav-tabs tab-primary bg-primary p-1'>
${tabs.map((t,i) => `  <li class='nav-item'>
    <button class='nav-link${i===0 ? ' active' : ''}' type='button'>
      <${t.icon.name} size='30' class='pe-1 ps-1' /> ${t.label}
    </button>
  </li>`).join('\n')}
</ul>

<div class='tab-content mt-3'>
${tabs.map((t,i) => `  <div class='tab-pane fade${i===0 ? ' show active' : ''}' id='${t.id}' role='tabpanel'>
${t.content.map(c => `    ${c}`).join('\n')}
  </div>`).join('\n')}
</div>`"></code>
          </pre>
        </b-collapse>
      </b-card-body>
    </b-card>
  </b-col>
</template>
