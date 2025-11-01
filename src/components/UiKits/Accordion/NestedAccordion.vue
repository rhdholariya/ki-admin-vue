<script setup>
import { ref, watch, nextTick } from "vue";
import Prism from "prismjs"
import "prismjs/themes/prism.css"
import {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BAccordion,
    BAccordionItem,
    BCollapse,
} from "bootstrap-vue-next";
import {
    PhCode,
    PhChatDots,
    PhTicket,
    PhArrowsLeftRight,
} from "@phosphor-icons/vue";



// ----- No Icon Accordion Data -----
const noIconItems = [
    {
        id: "noicon1",
        icon: PhChatDots,
        title: "What happens if I just pay my ticket?",
        content:
            "Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.",
    },
    {
        id: "noicon2",
        icon: PhTicket,
        title: "Can this ticket affect my job?",
        content:
            "Absolutely, tickets recorded on your driving history can result in disqualification from driving commercially or obtaining a commercial driver's license (CDL). They can also disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a clean driving record.",
    },
    {
        id: "noicon3",
        icon: PhArrowsLeftRight,
        title: "How long does it take to resolve my case?",
        content:
            "It really depends on the court your ticket landed in. Some courts move faster than others, but on average, it could take about 1-3 months. This is perfectly normal in the legal process.",
    },
];

// ----- Multi-Level Accordion Data -----
const multiLevelItems = [
    {
        id: "level1-1",
        title: "This is level one accordion #1",
        children: [
            {
                id: "level2-1-1",
                title: "This is level two accordion #1",
                content:
                    "This is the first item's accordion body. It is shown by default.",
            },
            {
                id: "level2-1-2",
                title: "This is level two accordion #2",
                content:
                    "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes.",
            },
        ],
    },
    {
        id: "level1-2",
        title: "This is level one accordion #2",
        children: [],
    },
];

// ----- States -----
const activeNoIcon = ref("noicon1");
const activeLevel1 = ref("level1-1");
const activeNested = ref(null);

// Prism toggle states
const openNoIconCode = ref(false);
const openMultiLevelCode = ref(false);

// Prism watcher
[openNoIconCode, openMultiLevelCode].forEach((state) => {
    watch(state, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
});

</script>

<template>
    <b-row>
        <!-- No Icon Accordion -->
        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">No Icon Indicators</h5>
                        <a href="javascript:void(0)" @click="openNoIconCode = !openNoIconCode">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-accordion
                        v-model="activeNoIcon"
                        class="app-accordion accordion-light-danger"
                    >
                        <b-accordion-item
                            v-for="item in noIconItems"
                            :key="item.id"
                            :id="item.id"
                        >
                            <template #title>
                                <component :is="item.icon" size="18" class="me-2" />
                                {{ item.title }}
                            </template>
                            <div>{{ item.content }}</div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <!-- Code Preview -->
                <b-collapse v-model="openNoIconCode">
<pre class="language-html"><code class="language-html"
                                 v-text="`&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;No Icon Indicators &lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
        &lt;b-accordion v-model=&quot;activeNoIcon&quot; class=&quot;app-accordion accordion-light-danger&quot;&gt;
${noIconItems.map(item =>
  `  &lt;b-accordion-item id=&quot;${item.id}&quot;&gt;
    &lt;template #title&gt;
      &lt;${item.icon.name} size=&quot;18&quot; class=&quot;me-2&quot; /&gt;
      ${item.title}
    &lt;/template&gt;
    &lt;div&gt;${item.content}&lt;/div&gt;
  &lt;/b-accordion-item&gt;`).join('\n')}
&lt;/b-accordion&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;`"
></code></pre>
                </b-collapse>
            </b-card>
        </b-col>

        <!-- Multi-Level Accordion -->
        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Multi Level Accordion</h5>
                        <a href="javascript:void(0)" @click="openMultiLevelCode = !openMultiLevelCode">
                            <PhCode size="30" weight="bold" class="source" />
                        </a>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-accordion
                        v-model="activeLevel1"
                        class="app-accordion accordion-light-success"
                    >
                        <b-accordion-item
                            v-for="group in multiLevelItems"
                            :key="group.id"
                            :id="group.id"
                        >
                            <template #title>
                                {{ group.title }}
                            </template>

                            <p>
                                <strong>This is the first item's accordion body.</strong>
                                <span class="text-muted">It is shown by default.</span>
                            </p>

                            <div
                                v-if="group.children.length > 0"
                                class="accordion mt-2 app-accordion app-accordion-icon-left app-accordion-plus"
                            >
                                <b-accordion v-model="activeNested">
                                    <b-accordion-item
                                        v-for="child in group.children"
                                        :key="child.id"
                                        :id="child.id"
                                    >
                                        <template #title>
                                            {{ child.title }}
                                        </template>
                                        <div>{{ child.content }}</div>
                                    </b-accordion-item>
                                </b-accordion>
                            </div>

                            <div v-else>
                                <p>This is the second item's accordion body. It is hidden by default.</p>
                            </div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <!-- Code Preview -->
                <b-collapse v-model="openMultiLevelCode">
<pre class="language-html"><code class="language-html"
                                 v-text="`&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Multi Level Accordion &lt;/h5&gt;
  &lt;/b-card-header&gt;
    &lt;b-card-body&gt;
     &lt;b-accordion v-model=&quot;activeLevel1&quot; class=&quot;app-accordion accordion-light-success&quot;&gt;
${multiLevelItems.map(group => {
  const nested = group.children.length
    ? `    &lt;b-accordion v-model=&quot;activeNested&quot;&gt;
${group.children.map(child =>
  `      &lt;b-accordion-item id=&quot;${child.id}&quot;&gt;
        &lt;template #title&gt;
          ${child.title}
        &lt;/template&gt;
        &lt;div&gt;${child.content}&lt;/div&gt;
      &lt;/b-accordion-item&gt;`).join('\n')}
    &lt;/b-accordion&gt;`
    : `    &lt;p&gt;This is the second item's accordion body. It is hidden by default.&lt;/p&gt;`;
  return `  &lt;b-accordion-item id=&quot;${group.id}&quot;&gt;
    &lt;template #title&gt;${group.title}&lt;/template&gt;
    &lt;p&gt;&lt;strong&gt;This is the first item's accordion body.&lt;/strong&gt; &lt;span class=&quot;text-muted&quot;&gt;It is shown by default.&lt;/span&gt;&lt;/p&gt;
${nested}
  &lt;/b-accordion-item&gt;`;
}).join('\n')}
&lt;/b-accordion&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;`"
></code></pre>
                </b-collapse>
            </b-card>
        </b-col>
    </b-row>
</template>
