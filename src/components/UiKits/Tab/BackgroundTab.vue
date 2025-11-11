<script setup>
import {ref} from "vue";
import {
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BCollapse,
    BButton,
    BTabs,
    BTab
} from "bootstrap-vue-next";
import {PhDisc, PhClock, PhStar, PhCode} from "@phosphor-icons/vue";

const tabs = [
    {
        id: "features-tab-pane",
        label: "Features",
        icon: PhDisc,
        iconName: "PhDisc",
        content: [
            {
                textBefore: "The idea is to use ",
                code: ":target",
                textAfter: " pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            },
            {textBefore: "This concept leverages modern CSS to control tab visibility without JavaScript."},
        ],
    },
    {
        id: "history-tab-pane",
        label: "History",
        icon: PhClock,
        iconName: "PhClock",
        content: [
            {textBefore: "1. Show only the last tab."},
            {
                textBefore: "2. If ",
                code: ":target",
                textAfter: " matches a tab, show it and hide all following siblings."
            },
            {textBefore: "3. Matches a tab, show it and hide all following siblings."},
        ],
    },
    {
        id: "reviews-tab-pane",
        label: "Reviews",
        icon: PhStar,
        iconName: "PhStar",
        content: [
            {
                textBefore: "The idea is to use ",
                code: ":target",
                textAfter: " pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them."
            },
        ],
    },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card class="equal-card" no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Background Tabs</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <b-tabs
                    v-model="activeTab"
                    nav-class="nav-tabs tab-primary bg-primary p-1"
                    content-class="mt-3"
                >
                    <b-tab
                        v-for="tab in tabs"
                        :key="tab.id"
                        :title="tab.label"
                        :active="activeTab === tab.id"
                    >
                        <template #title>
                            <div class="d-flex align-items-center">
                                <component :is="tab.icon" size="30" class="pe-1 ps-1"/>
                                <span>{{ tab.label }}</span>
                            </div>
                        </template>

                        <div v-for="(line, i) in tab.content" :key="i" class="mb-2">
                            <span>{{ line.textBefore }}</span>
                            <code v-if="line.code">{{ line.code }}</code>
                            <span>{{ line.textAfter }}</span>
                        </div>
                    </b-tab>
                </b-tabs>

                <b-collapse v-model="openCode" class="mt-3">
                    <pre class="language-html" tabindex="0">
                        <code v-prism>
&lt;b-tabs nav-class="nav-tabs tab-primary bg-primary p-1" content-class="mt-3"&gt;
{{
                                tabs.map(t => `  &lt;b-tab&gt;
    &lt;template #title&gt;
      &lt;${t.iconName} size="30" class="pe-1 ps-1" /&gt; ${t.label}
    &lt;/template&gt;
${t.content.map(c => `    &lt;p&gt;${c.textBefore || ''}${c.code ? '&lt;code&gt;' + c.code + '&lt;/code&gt;' : ''}${c.textAfter || ''}&lt;/p&gt;`).join('\n')}
  &lt;/b-tab&gt;`).join('\n\n')
                            }}
&lt;/b-tabs&gt;</code>
                    </pre>
                </b-collapse>

            </b-card-body>
        </b-card>
    </b-col>
</template>