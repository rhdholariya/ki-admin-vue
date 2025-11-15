<script setup>
import { ref } from "vue";
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
import { PhCode } from "@phosphor-icons/vue";

const accordionItems = [
    {
        id: "1",
        title: "Accordion Item #1",
        content: [
            { type: "text", value: "This is the first item's accordion body", bold: true },
            { type: "text", value: ". It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the " },
            { type: "code", value: ".accordion-body" },
            { type: "text", value: ", though the transition does limit overflow." }
        ]
    },
    {
        id: "2",
        title: "Accordion Item #2",
        content: [
            { type: "text", value: "This is the second item's accordion body", bold: true },
            { type: "text", value: ". It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the " },
            { type: "code", value: ".accordion-body" },
            { type: "text", value: ", though the transition does limit overflow." }
        ]
    },
    {
        id: "3",
        title: "Accordion Item #3",
        content: [
            { type: "text", value: "This is the third item's accordion body", bold: true },
            { type: "text", value: ". It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the " },
            { type: "code", value: ".accordion-body" },
            { type: "text", value: ", though the transition does limit overflow." }
        ]
    },
];

const active = ref("1");
const openCode = ref(false);
</script>

<template>
    <b-col lg="6">
        <b-card no-body>
            <b-card-header>
                <div class="code-header d-flex justify-content-between align-items-center">
                    <h5>Simple Accordion</h5>
                    <b-button @click="openCode = !openCode" class="p-0 border-0">
                        <PhCode size="30" weight="bold" class="source" />
                    </b-button>
                </div>
            </b-card-header>

            <b-card-body>
                <b-accordion v-model="active" class="app-accordion accordion-secondary">
                    <b-accordion-item
                        v-for="item in accordionItems"
                        :key="item.id"
                        :title="item.title"
                        :id="item.id"
                    >

                        <div class="accordion-content">
                            <template v-for="(contentPart, index) in item.content" :key="index">
                                <strong v-if="contentPart.type === 'text' && contentPart.bold">
                                    {{ contentPart.value }}
                                </strong>
                                <span v-else-if="contentPart.type === 'text'">
                  {{ contentPart.value }}
                </span>
                                <code v-else-if="contentPart.type === 'code'">
                                    {{ contentPart.value }}
                                </code>
                            </template>
                        </div>
                    </b-accordion-item>
                </b-accordion>
            </b-card-body>

            <b-collapse v-model="openCode">
        <pre class="language-html mt-3">
          <code v-prism>
&lt;b-accordion v-model="active" class="app-accordion accordion-secondary"&gt;
{{ accordionItems.map(item => `  &lt;b-accordion-item title="${item.title}" id="${item.id}"&gt;
    &lt;div class="accordion-content"&gt;
${item.content.map(part => {
              if (part.type === 'text' && part.bold) {
                  return `      &lt;strong&gt;${part.value}&lt;/strong&gt;`;
              } else if (part.type === 'text') {
                  return `      &lt;span&gt;${part.value}&lt;/span&gt;`;
              } else if (part.type === 'code') {
                  return `      &lt;code&gt;${part.value}&lt;/code&gt;`;
              }
          }).join('\n')}
    &lt;/div&gt;
  &lt;/b-accordion-item&gt;`).join('\n\n') }}
&lt;/b-accordion&gt;
          </code>
        </pre>
            </b-collapse>
        </b-card>
    </b-col>
</template>