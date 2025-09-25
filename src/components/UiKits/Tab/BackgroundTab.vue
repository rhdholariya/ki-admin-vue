<script setup>
import { ref } from "vue";
import { BCol, BCard, BCardHeader, BCardBody, BCollapse, BButton } from "bootstrap-vue-next";
import { PhDisc, PhClock, PhStar, PhCode } from "@phosphor-icons/vue";

// Tabs data as structured objects
const tabs = [
    {
        id: "features-tab-pane",
        label: "Features",
        icon: PhDisc,
        content: [
            { textBefore: "The idea is to use ", code: ":target", textAfter: " pseudoclass to show tabs, use anchors with fragment identifiers to switch between them." },
            { textBefore: "This concept leverages modern CSS to control tab visibility without JavaScript." },
        ],
    },
    {
        id: "history-tab-pane",
        label: "History",
        icon: PhClock,
        content: [
            { textBefore: "1. Show only the last tab." },
            { textBefore: "2. If ", code: ":target", textAfter: " matches a tab, show it and hide all following siblings." },
            { textBefore: "3. Matches a tab, show it and hide all following siblings." },
        ],
    },
    {
        id: "reviews-tab-pane",
        label: "Reviews",
        icon: PhStar,
        content: [
            { textBefore: "The idea is to use ", code: ":target", textAfter: " pseudoclass to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors with fragment identifiers to switch between them." },
        ],
    },
];

const activeTab = ref(tabs[0].id);
const openCode = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card class="equal-card" no-body>
            <!-- Header -->
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Background Tabs</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" class="source" weight="bold" />
                    </b-button>
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
                        <div v-for="(line, i) in tab.content" :key="i" class="mb-2">
                            <span>{{ line.textBefore }}</span>
                            <code v-if="line.code">{{ line.code }}</code>
                            <span>{{ line.textAfter }}</span>
                        </div>
                    </div>
                </div>

                <!-- PrismJS Code Collapse -->
                <b-collapse v-model="openCode" class="mt-3">
          <pre class="language-html" tabindex="0">
<code>{{ `
&lt;ul class='nav nav-tabs tab-primary bg-primary p-1'&gt;
${tabs.map((t,i) => `  &lt;li class='nav-item'&gt;
    &lt;button class='nav-link${i===0 ? ' active' : ''}' type='button'&gt;
      &lt;${t.icon.name} size='30' class='pe-1 ps-1' /&gt; ${t.label}
    &lt;/button&gt;
  &lt;/li&gt;`).join('\n')}
&lt;/ul&gt;

&lt;div class='tab-content mt-3'&gt;
${tabs.map((t,i) => `  &lt;div class='tab-pane fade${i===0 ? ' show active' : ''}' id='${t.id}' role='tabpanel'&gt;
${t.content.map(c => ` &lt;p&gt;${c.textBefore || ''}${c.code ? '&lt;code&gt;' + c.code + '&lt;/code&gt;' : ''}${c.textAfter || ''}&lt;/p&gt;`).join('\n')}
  &lt;/div&gt;`).join('\n')}
&lt;/div&gt;` }}</code>
          </pre>
                </b-collapse>
            </b-card-body>
        </b-card>
    </b-col>
</template>
