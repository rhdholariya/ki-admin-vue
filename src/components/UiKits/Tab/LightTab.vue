<script setup>
import { ref } from "vue";
import { BCol, BCard, BCardHeader, BTabs, BTab, BCollapse, BButton } from "bootstrap-vue-next";
import { PhCode, PhLifebuoy, PhKeyboard, PhFileMinus } from "@phosphor-icons/vue";

// Tabs data
const tabs = [
    {
        id: "description",
        label: "Description",
        icon: PhLifebuoy,
        content: [
            "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.",
        ],
    },
    {
        id: "howitworks",
        label: "How It Works",
        icon: PhKeyboard,
        content: [
            "1. Show only the last tab.",
            "2. If :target matches a tab, show it and hide all following siblings.",
            "3. Matches a tab, show it and hide all following siblings.",
        ],
    },
    {
        id: "drawbacks",
        label: "Drawbacks",
        icon: PhFileMinus,
        content: [
            "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.",
        ],
    },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <!-- Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Light Tabs</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold" />
                    </b-button>
                </div>
            </b-card-header>

            <!-- Tabs -->
            <b-tabs v-model="activeTab" pills card class="tab-light-primary">
                <b-tab v-for="tab in tabs" :key="tab.id" :active="tab.id === activeTab">
                    <template #title>
                        <component :is="tab.icon" size="20" class="me-2" />
                        {{ tab.label }}
                    </template>


                    <div v-for="(line, i) in tab.content" :key="i" class="mb-2">
                        <p>{{ line }}</p>
                    </div>
                </b-tab>
            </b-tabs>

            <!-- PrismJS Code Collapse (your original structure kept) -->
            <b-collapse v-model="openCode">
        <pre class="language-html" tabindex="0">
          <code>{{ `
&lt;b-tabs pills card class='tab-light-primary'&gt;
${tabs
              .map(
                  (t, i) => `  &lt;b-tab title="${t.label}"${i === 0 ? ' active' : ''}&gt;
    &lt;template #title&gt;
      &lt;${t.icon.name} size='20' class='me-2' /&gt;
      ${t.label}
    &lt;/template&gt;
${t.content.map(c => `    &lt;p&gt;${c.replace(/&/g, '&amp;').replace(/>/g, '&gt;')}&lt;/p&gt;`).join('\n')}
  &lt;/b-tab&gt;`
              )
              .join('\n')}
&lt;/b-tabs&gt;` }}</code>
        </pre>
            </b-collapse>
        </b-card>


    </b-col>
</template>
