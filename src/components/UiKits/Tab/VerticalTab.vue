<script setup>
import {ref} from "vue";
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
import {PhClock, PhCode, PhDisc, PhStar} from "@phosphor-icons/vue";

const tabs = [
    {
        id: "v-features",
        label: "Features",
        icon: PhDisc,
        iconName: "PhDisc",
        content: [
            "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.",
        ],
    },
    {
        id: "v-history",
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
        id: "v-reviews",
        label: "Reviews",
        icon: PhStar,
        iconName: "PhStar",
        content: [
            "The idea is to use :target pseudoclass to show tabs, use anchors with fragment identifiers to switch between them.",
        ],
    },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Vertical Tabs Left Side</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold"/>
                    </b-button>
                </div>
            </b-card-header>

            <b-card-body>
                <b-tabs
                    v-model="activeTab"
                    vertical
                    pills
                    card
                    class="p-0"
                    nav-class="flex-column app-tabs-secondary "
                >
                    <b-tab v-for="tab in tabs" :key="tab.id" :active="tab.id === activeTab" class="p-0">
                        <template #title class="">
                            <div class="d-flex align-items-center">
                                <component :is="tab.icon" size="20" class="me-2"/>
                                <span>{{ tab.label }}</span>
                            </div>
                        </template>

                        <!-- Tab Content without v-html -->
                        <div v-for="(line, i) in tab.content" :key="i" class="mb-2">
                            <p>{{ line }}</p>
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card-body>

            <!-- PrismJS Preview (unchanged structure) -->
            <b-collapse v-model="openCode">
        <pre class="language-html mt-3" tabindex="0">
          <code v-prism>
&lt;b-tabs vertical pills card nav-class="flex-column app-tabs-secondary"&gt;
{{
                  tabs
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
                      .join('\n\n')
              }}
&lt;/b-tabs&gt;</code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>
