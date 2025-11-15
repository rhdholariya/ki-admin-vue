<script setup>
import {ref} from "vue";
import {
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BAccordion,
    BAccordionItem,
    BCollapse,
    BButton,
} from "bootstrap-vue-next";
import {PhCode} from "@phosphor-icons/vue";

const outlineAccordionItems = [
    {
        id: "1",
        title: "Accordion Item #1",
        content: [
            {type: "bold", text: "This is the first item's accordion body."},
            {
                type: "text",
                text: " It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the "
            },
            {type: "code", text: ".accordion-body"},
            {type: "text", text: ", though the transition does limit overflow."}
        ]
    },
    {
        id: "2",
        title: "Accordion Item #2",
        content: [
            {type: "bold", text: "This is the second item's accordion body."},
            {
                type: "text",
                text: " It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions."
            }
        ]
    },
    {
        id: "3",
        title: "Accordion Item #3",
        content: [
            {type: "bold", text: "This is the third item's accordion body."},
            {
                type: "text",
                text: " It is hidden by default, until the collapse plugin adds the appropriate classes. Any HTML can go within the "
            },
            {type: "code", text: ".accordion-body"},
            {type: "text", text: "."}
        ]
    },
];

const lightAccordionItems = [
    {
        id: "1",
        title: "Accordion Item #1",
        content: [
            {type: "text", text: "Placeholder content for this accordion, which is intended to demonstrate the "},
            {type: "code", text: ".accordion-light"},
            {type: "text", text: " class. This is the first item's accordion body."}
        ]
    },
    {
        id: "2",
        title: "Accordion Item #2",
        content: [
            {type: "text", text: "Placeholder content for this accordion, which is intended to demonstrate the "},
            {type: "code", text: ".accordion-light"},
            {type: "text", text: " class. This is the second item's accordion body."}
        ]
    },
    {
        id: "3",
        title: "Accordion Item #3",
        content: [
            {type: "text", text: "Placeholder content for this accordion, which is intended to demonstrate the "},
            {type: "code", text: ".accordion-light"},
            {type: "text", text: " class. This is the third item's accordion body."}
        ]
    },
];

const flushAccordionItems = [
    {
        id: "flush-1",
        title: "Accordion Item #1",
        content: "first"
    },
    {
        id: "flush-2",
        title: "Accordion Item #2",
        content: "second"
    },
    {
        id: "flush-3",
        title: "Accordion Item #3",
        content: "third"
    }
];


const activeOutline = ref("1");
const activeLight = ref("1");
const activeFlush = ref("flush-1");

const openOutline = ref(false);
const openLight = ref(false);
const openFlush = ref(false);


</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Outline Accordion</h5>
                    <b-button @click="openOutline = !openOutline" class="p-0 border-0">
                        <PhCode size="30" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <b-accordion v-model="activeOutline" class="app-accordion accordion-outline-secondary">
                    <b-accordion-item
                        v-for="item in outlineAccordionItems"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                    >
                        <div class="accordion-content">
                            <template v-for="(part, index) in item.content" :key="index">
                                <strong v-if="part.type === 'bold'">{{ part.text }}</strong>
                                <code v-else-if="part.type === 'code'">{{ part.text }}</code>
                                <span v-else>{{ part.text }}</span>
                            </template>
                        </div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>
            <b-collapse v-model="openOutline">
                <pre class="language-html mt-3">
                    <code v-prism>
&lt;b-accordion v-model="activeOutline" class="app-accordion accordion-outline-secondary"&gt;
{{
                            outlineAccordionItems.map(item => `  &lt;b-accordion-item id="${item.id}" title="${item.title}"&gt;
    &lt;div class="accordion-content"&gt;
${item.content.map(part => {
                                if (part.type === 'bold') {
                                    return `      &lt;strong&gt;${part.text}&lt;/strong&gt;`;
                                } else if (part.type === 'code') {
                                    return `      &lt;code&gt;${part.text}&lt;/code&gt;`;
                                } else {
                                    return `      &lt;span&gt;${part.text}&lt;/span&gt;`;
                                }
                            }).join('\n')}
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
                    <h5 class="mb-0">Light Accordion</h5>
                    <b-button @click="openLight = !openLight" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <b-accordion v-model="activeLight" class="app-accordion accordion-light-secondary">
                    <b-accordion-item
                        v-for="item in lightAccordionItems"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                    >
                        <div class="accordion-content">
                            <template v-for="(part, index) in item.content" :key="index">
                                <span v-if="part.type === 'text'">{{ part.text }}</span>
                                <code v-else-if="part.type === 'code'">{{ part.text }}</code>
                            </template>
                        </div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>
            <b-collapse v-model="openLight">
                <pre class="language-html mt-3">
                    <code v-prism>
&lt;b-accordion v-model="activeLight" class="app-accordion accordion-light-secondary"&gt;
{{
                            lightAccordionItems.map(item => `  &lt;b-accordion-item id="${item.id}" title="${item.title}"&gt;
    &lt;div class="accordion-content"&gt;
${item.content.map(part => {
                                if (part.type === 'code') {
                                    return `      &lt;code&gt;${part.text}&lt;/code&gt;`;
                                } else {
                                    return `      &lt;span&gt;${part.text}&lt;/span&gt;`;
                                }
                            }).join('\n')}
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
                    <h5 class="mb-0">Flush Accordion (No Border)</h5>
                    <b-button @click="openFlush = !openFlush" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source"/>
                    </b-button>
                </div>
            </b-card-header>
            <b-card-body>
                <b-accordion v-model="activeFlush" class="accordion-flush app-accordion accordion-secondary">
                    <b-accordion-item
                        v-for="item in flushAccordionItems"
                        :key="item.id"
                        :id="item.id"
                        :title="item.title"
                    >
                        <div class="accordion-content">
                            Placeholder content for this accordion, which is intended to demonstrate the
                            <code>.accordion-flush</code> class. This is the {{ item.content }}'s accordion body.
                        </div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>
            <b-collapse v-model="openFlush">
                <pre class="language-html mt-3">
                    <code v-prism>
&lt;b-accordion v-model="activeFlush" class="accordion-flush app-accordion accordion-secondary"&gt;
{{
                            flushAccordionItems.map(item => `  &lt;b-accordion-item id="${item.id}" title="${item.title}"&gt;
    &lt;div class="accordion-content"&gt;
      Placeholder content for this accordion, which is intended to demonstrate the &lt;code&gt;.accordion-flush&lt;/code&gt; class.
      This is the ${item.content}'s accordion body.
    &lt;/div&gt;
  &lt;/b-accordion-item&gt;`).join('\n\n')
                        }}
&lt;/b-accordion&gt;
                    </code>
                </pre>
            </b-collapse>

        </b-card>
    </b-col>
</template>