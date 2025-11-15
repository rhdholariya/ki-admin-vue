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
    PhPlus,
    PhMinus,
} from "@phosphor-icons/vue";

const faqData = [
    {
        id: "1",
        icon: PhChatDots,
        iconName: "PhChatDots",
        question: "What happens if I just pay my ticket?",
        answer: "Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.",
    },
    {
        id: "2",
        icon: PhTicket,
        iconName: "PhTicket",
        question: "Can this ticket affect my job?",
        answer: "Absolutely, tickets recorded on your driving history can result in disqualification from driving commercially or obtaining a commercial driver's license (CDL). They can also disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a clean driving record.",
    },
    {
        id: "3",
        icon: PhArrowsLeftRight,
        iconName: "PhArrowsLeftRight",
        question: "How long does it take to resolve my case?",
        answer: "It really depends on the court your ticket landed in. Some courts move faster than others, but on average, it could take about 1-3 months. This is perfectly normal in the legal process.",
    },
];

const activeOutline = ref("1");
const activeLeftIcon = ref("1");

const openOutline = ref(false);
const openLeftIcon = ref(false);
</script>

<template>
    <b-row>
        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Frequently Asked Questions (Real Example)</h5>
                        <b-button @click="openOutline = !openOutline" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>

                <b-card-body>
                    <b-accordion v-model="activeOutline" class="app-accordion accordion-outline-secondary">
                        <b-accordion-item
                            v-for="item in faqData"
                            :key="item.id"
                            :id="item.id"
                        >
                            <template #title>
                                <component :is="item.icon" size="18" class="me-2"/>
                                {{ item.question }}
                            </template>
                            <div class="accordion-content">
                                {{ item.answer }}
                            </div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>


                <b-collapse v-model="openOutline">
                    <pre class="language-html mt-3">
                        <code v-prism>
&lt;b-accordion v-model="activeOutline" class="app-accordion accordion-outline-secondary"&gt;
{{
                                faqData.map(item => `  &lt;b-accordion-item id="${item.id}"&gt;
    &lt;template #title&gt;
      &lt;${item.iconName} size="18" class="me-2" /&gt;
      ${item.question}
    &lt;/template&gt;
    &lt;div class="accordion-content"&gt;
      ${item.answer}
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
                        <h5 class="mb-0">Left Side Plus Minus Icon</h5>
                        <b-button @click="openLeftIcon = !openLeftIcon" class="p-0 border-0">
                            <PhCode size="30" weight="bold" class="source"/>
                        </b-button>
                    </div>
                </b-card-header>

                <b-card-body>
                    <b-accordion v-model="activeLeftIcon" class="app-accordion accordion-light-primary">
                        <b-accordion-item
                            v-for="item in faqData"
                            :key="item.id"
                            :id="item.id"
                        >
                            <template #title>
                                <span class="me-2">
                                    <PhMinus v-if="activeLeftIcon === item.id" size="16"/>
                                    <PhPlus v-else size="16"/>
                                </span>
                                {{ item.question }}
                            </template>
                            <div class="accordion-content">
                                {{ item.answer }}
                            </div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <b-collapse v-model="openLeftIcon">
                    <pre class="language-html mt-3">
                        <code v-prism>
&lt;b-accordion v-model="activeLeftIcon" class="app-accordion accordion-light-primary"&gt;
{{
                                faqData.map(item => `  &lt;b-accordion-item id="${item.id}"&gt;
    &lt;template #title&gt;
      &lt;span class="me-2"&gt;
        &lt;PhMinus v-if="activeLeftIcon === '${item.id}'" size="16" /&gt;
        &lt;PhPlus v-else size="16" /&gt;
      &lt;/span&gt;
      ${item.question}
    &lt;/template&gt;
    &lt;div class="accordion-content"&gt;
      ${item.answer}
    &lt;/div&gt;
  &lt;/b-accordion-item&gt;`).join('\n\n')
                            }}
&lt;/b-accordion&gt;
                        </code>
                    </pre>
                </b-collapse>
            </b-card>
        </b-col>
    </b-row>
</template>