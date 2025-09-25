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
import { PhClock, PhCode, PhDisc, PhStar } from "@phosphor-icons/vue";

// Tabs Data
const tabs = [
    {
        id: "vr-features",
        label: "Features",
        icon: PhDisc,
        iconName: "PhDisc",
        content: [
            "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.",
        ],
    },
    {
        id: "vr-history",
        label: "History",
        icon: PhClock,
        iconName: "PhClock",
        content: [
            "1. Show only the last tab.",
            "2. If :target matches a tab, show it and hide all following siblings.",
            "3. Matches a tab, show it and hide all following siblings.",
        ],
    },
    {
        id: "vr-reviews",
        label: "Reviews",
        icon: PhStar,
        iconName: "PhStar",
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
            <!-- Card Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Vertical Tabs Right Side</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold" />
                    </b-button>
                </div>
            </b-card-header>

            <!-- Card Body -->
            <b-card-body class="vertical-right-tab text-end">
                <b-tabs
                    v-model="activeTab"
                    pills
                    card
                    vertical
                    end
                    nav-class="app-tabs-secondary me-0 flex-column"
                >
                    <b-tab v-for="tab in tabs" :key="tab.id" :active="tab.id === activeTab">
                        <template #title>
                            <div class="d-flex align-items-center">
                                <component :is="tab.icon" size="20" class="me-2" />
                                <span>{{ tab.label }}</span>
                            </div>
                        </template>


                        <div v-for="(line, i) in tab.content" :key="i" class="mb-2">
                            <p>{{ line }}</p>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card-body>

            <!-- PrismJS Preview (your original structure kept) -->
            <b-collapse v-model="openCode">
        <pre class="language-html mt-3" tabindex="0">
          <code>{{ `
&lt;b-tabs pills card vertical end nav-class="app-tabs-secondary me-0 ms-3 flex-column"&gt;
${tabs
              .map(
                  (t) => `  &lt;b-tab&gt;
    &lt;template #title&gt;
      &lt;${t.iconName} size="20" class="me-2" /&gt; ${t.label}
    &lt;/template&gt;
${t.content
                      .map((c) => `    &lt;p&gt;${c.replace(/&/g, '&amp;').replace(/>/g, '&gt;')}&lt;/p&gt;`)
                      .join('\n')}
  &lt;/b-tab&gt;`
              )
              .join('\n\n')}
&lt;/b-tabs&gt;` }}</code>
        </pre>
            </b-collapse>


        </b-card>
    </b-col>
</template>
