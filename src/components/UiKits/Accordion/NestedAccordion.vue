<script setup>
import {ref} from "vue";
import {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BAccordion,
    BAccordionItem,
    BCollapse,
    BButton,
} from "bootstrap-vue-next";
import {
    PhCode,
    PhChatDots,
    PhTicket,
    PhArrowsLeftRight,
} from "@phosphor-icons/vue";

const noIconItems = [
    {
        id: "noicon1",
        icon: PhChatDots,
        iconName: "PhChatDots",
        title: "What happens if I just pay my ticket?",
        content: "Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.",
    },
    {
        id: "noicon2",
        icon: PhTicket,
        iconName: "PhTicket",
        title: "Can this ticket affect my job?",
        content: "Absolutely, tickets recorded on your driving history can result in disqualification from driving commercially or obtaining a commercial driver's license (CDL). They can also disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a clean driving record.",
    },
    {
        id: "noicon3",
        icon: PhArrowsLeftRight,
        iconName: "PhArrowsLeftRight",
        title: "How long does it take to resolve my case?",
        content: "It really depends on the court your ticket landed in. Some courts move faster than others, but on average, it could take about 1-3 months. This is perfectly normal in the legal process.",
    },
];

const multiLevelItems = [
    {
        id: "level1-1",
        title: "This is level one accordion #1",
        children: [
            {
                id: "level2-1-1",
                title: "This is level two accordion #1",
                content: "This is the first item's accordion body. It is shown by default.",
            },
            {
                id: "level2-1-2",
                title: "This is level two accordion #2",
                content: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes.",
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
</script>

<template>
    <b-row>

        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">No Icon Indicators</h5>
                        <b-button @click="openNoIconCode = !openNoIconCode" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
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
                                <component :is="item.icon" size="18" class="me-2"/>
                                {{ item.title }}
                            </template>
                            <div class="accordion-content">
                                {{ item.content }}
                            </div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <b-collapse v-model="openNoIconCode">
                    <pre class="language-html mt-3">
                        <code v-prism>
&lt;b-accordion v-model="activeNoIcon" class="app-accordion accordion-light-danger"&gt;
{{
                                noIconItems.map(item => `  &lt;b-accordion-item id="${item.id}"&gt;
    &lt;template #title&gt;
      &lt;${item.iconName} size="18" class="me-2" /&gt;
      ${item.title}
    &lt;/template&gt;
    &lt;div class="accordion-content"&gt;
      ${item.content}
    &lt;/div&gt;
  &lt;/b-accordion-item&gt;`).join('\n\n')
                            }}
&lt;/b-accordion&gt;
                        </code>
                    </pre>
                </b-collapse>
            </b-card>
        </b-col>

        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Multi Level Accordion</h5>
                        <b-button @click="openMultiLevelCode = !openMultiLevelCode" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
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

                            <div class="accordion-content">
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
                                            <div class="accordion-content">
                                                {{ child.content }}
                                            </div>
                                        </b-accordion-item>
                                    </b-accordion>
                                </div>

                                <div v-else class="accordion-content">
                                    <p>This is the second item's accordion body. It is hidden by default.</p>
                                </div>
                            </div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <b-collapse v-model="openMultiLevelCode">
                    <pre class="language-html mt-3">
                        <code v-prism>
&lt;b-accordion v-model="activeLevel1" class="app-accordion accordion-light-success"&gt;
{{
                                multiLevelItems.map(group => {
                                    const hasChildren = group.children.length > 0;
                                    let nestedContent = '';

                                    if (hasChildren) {
                                        nestedContent = `    &lt;div class="accordion mt-2 app-accordion app-accordion-icon-left app-accordion-plus"&gt;
      &lt;b-accordion v-model="activeNested"&gt;
${group.children.map(child => `        &lt;b-accordion-item id="${child.id}"&gt;
          &lt;template #title&gt;${child.title}&lt;/template&gt;
          &lt;div class="accordion-content"&gt;${child.content}&lt;/div&gt;
        &lt;/b-accordion-item&gt;`).join('\n')}
      &lt;/b-accordion&gt;
    &lt;/div&gt;`;
                                    } else {
                                        nestedContent = `    &lt;div class="accordion-content"&gt;
      &lt;p&gt;This is the second item's accordion body. It is hidden by default.&lt;/p&gt;
    &lt;/div&gt;`;
                                    }

                                    return `  &lt;b-accordion-item id="${group.id}"&gt;
    &lt;template #title&gt;${group.title}&lt;/template&gt;
    &lt;div class="accordion-content"&gt;
      &lt;p&gt;&lt;strong&gt;This is the first item's accordion body.&lt;/strong&gt; &lt;span class="text-muted"&gt;It is shown by default.&lt;/span&gt;&lt;/p&gt;
${nestedContent}
    &lt;/div&gt;
  &lt;/b-accordion-item&gt;`;
                                }).join('\n\n')
                            }}
&lt;/b-accordion&gt;
                        </code>
                    </pre>
                </b-collapse>

            </b-card>
        </b-col>
    </b-row>
</template>