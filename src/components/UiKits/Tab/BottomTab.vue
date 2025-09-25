<script setup>
import { ref } from "vue";
import {
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BCollapse,
    BTabs,
    BTab,
    BButton,
} from "bootstrap-vue-next";
import { PhCode, PhDisc, PhClock, PhStar } from "@phosphor-icons/vue";

// Tabs Data
const tabs = [
    {
        id: "b-features",
        label: "Features",
        icon: PhDisc,
        iconName: "PhDisc",
        content: [
            {
                type: "text",
                value:
                    "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            }
        ]
    },
    {
        id: "b-history",
        label: "History",
        icon: PhClock,
        iconName: "PhClock",
        content: [
            {
                type: "list",
                items: [
                    "Show only the last tab.",
                    "If :target matches a tab, show it and hide all following siblings."
                ]
            }
        ]
    },
    {
        id: "b-reviews",
        label: "Reviews",
        icon: PhStar,
        iconName: "PhStar",
        content: [
            {
                type: "text",
                value:
                    "Use the :target pseudoclass to show tabs, and anchors with fragment identifiers to switch between them."
            }
        ]
    }
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <!-- Card Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Tabs Bottom Side</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold" />
                    </b-button>
                </div>
            </b-card-header>

            <!-- Card Body -->
            <b-card-body class="bottom-tab">
                <b-tabs v-model="activeTab" pills card nav-class="app-tabs-secondary" end>
                    <b-tab v-for="tab in tabs" :key="tab.id" :active="tab.id === activeTab">
                        <template #title>
                            <div class="d-flex align-items-center">
                                <component :is="tab.icon" size="20" class="me-2" />
                                <span>{{ tab.label }}</span>
                            </div>
                        </template>


                        <div v-for="(item, index) in tab.content" :key="index" class="mb-2">
                            <p v-if="item.type === 'text'" class="mb-0">{{ item.value }}</p>
                            <ol v-else-if="item.type === 'list'">
                                <li v-for="(li, i) in item.items" :key="i">{{ li }}</li>
                            </ol>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card-body>

            <!-- PrismJS Code Preview -->
            <b-collapse v-model="openCode">
        <pre class="language-html mt-3" tabindex="0">
<code>{{ `
&lt;b-tabs pills card end nav-class=" app-tabs-secondary"&gt;
${tabs
    .map(
        (t) => `  &lt;b-tab&gt;
    &lt;template #title&gt;
      &lt;${t.iconName} size="20" class="me-2" /&gt; ${t.label}
    &lt;/template&gt;
${t.content
            .map((c) =>
                c.type === "text"
                    ? `    &lt;p&gt;${c.value.replace(/&/g, '&amp;').replace(/&/g, '&lt;').replace(/>/g, '&gt;')}&lt;/p&gt;`
      : c.type === "list"
      ? c.items.map(li => `    &lt;li&gt;${li}&lt;/li&gt;`).join("\n")
      : ""
  )
  .join("\n")}
  &lt;/b-tab&gt;`
  )
  .join("\n\n")}
&lt;/b-tabs&gt;` }}</code>
        </pre>
            </b-collapse>


        </b-card>
    </b-col>
</template>
