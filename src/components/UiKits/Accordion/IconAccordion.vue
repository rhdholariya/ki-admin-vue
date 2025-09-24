<script setup>
import { ref, watch, nextTick } from "vue";
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
    PhPlus,
    PhMinus,
} from "@phosphor-icons/vue";

// FAQ data
const faqData = [
    {
        id: "1",
        icon: PhChatDots,
        question: "What happens if I just pay my ticket?",
        answer:
            "Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.",
    },
    {
        id: "2",
        icon: PhTicket,
        question: "Can this ticket affect my job?",
        answer:
            "Absolutely, tickets recorded on your driving history can result in disqualification from driving commercially or obtaining a commercial driver's license (CDL). They can also disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a clean driving record.",
    },
    {
        id: "3",
        icon: PhArrowsLeftRight,
        question: "How long does it take to resolve my case?",
        answer:
            "It really depends on the court your ticket landed in. Some courts move faster than others, but on average, it could take about 1-3 months. This is perfectly normal in the legal process.",
    },
];

// states
const activeOutline = ref("1");
const activeLeftIcon = ref("1");

// Prism toggles
const openOutline = ref(false);
const openLeftIcon = ref(false);

// Prism watcher setup
const setupPrism = (openRef) => {
    watch(openRef, async (val) => {
        if (val) {
            await nextTick();
            Prism.highlightAll();
        }
    });
};

[openOutline, openLeftIcon].forEach(setupPrism);
</script>

<template>
    <b-row>
        <!-- Outline Accordion -->
        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Frequently Asked Questions (Real Example)</h5>
                        <a href="javascript:void(0)" @click="openOutline = !openOutline">
                            <PhCode size="30" weight="bold" class="source"/>
                        </a>
                    </div>
                </b-card-header>

                <b-card-body>
                    <b-accordion v-model="activeOutline" class="app-accordion accordion-outline-secondary">
                        <b-accordion-item
                            v-for="{ id, icon, question, answer } in faqData"
                            :key="id"
                            :id="id"
                        >
                            <template #title>
                                <component :is="icon" size="18" class="me-2"/>
                                {{ question }}
                            </template>
                            <div>{{ answer }}</div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <!-- Code preview -->
                <b-collapse v-model="openOutline">
          <pre class="language-html"><code class="language-html"
                                           v-text="`&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Frequently Asked Questions (Real Example) &lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
&lt;b-accordion v-model=&quot;activeOutline&quot; class=&quot;app-accordion accordion-outline-secondary&quot;&gt;
${faqData
  .map(
    (item) => `  &lt;b-accordion-item id=&quot;${item.id}&quot;&gt;
    &lt;template #title&gt;
      &lt;${item.icon.name} size=&quot;18&quot; class=&quot;me-2&quot; /&gt;
      ${item.question}
    &lt;/template&gt;
    &lt;div&gt;${item.answer}&lt;/div&gt;
  &lt;/b-accordion-item&gt;`
  )
  .join('\n')}
&lt;/b-accordion&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;`"
          ></code></pre>
                </b-collapse>
            </b-card>
        </b-col>

        <!-- Left Icon Plus/Minus Accordion -->
        <b-col lg="6">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Left Side Plus Minus Icon</h5>
                        <a href="javascript:void(0)" @click="openLeftIcon = !openLeftIcon">
                            <PhCode size="30" weight="bold" class="source"/>
                        </a>
                    </div>
                </b-card-header>

                <b-card-body>
                    <b-accordion v-model="activeLeftIcon" class="app-accordion accordion-light-primary">
                        <b-accordion-item
                            v-for="{ id, question, answer } in faqData"
                            :key="id"
                            :id="id"
                        >
                            <template #title>
                <span class="me-2">
                  <PhMinus v-if="activeLeftIcon === id" size="16"/>
                  <PhPlus v-else size="16"/>
                </span>
                                {{ question }}
                            </template>
                            <div>{{ answer }}</div>
                        </b-accordion-item>
                    </b-accordion>
                </b-card-body>

                <!-- Code preview -->
                <b-collapse v-model="openLeftIcon">
          <pre class="language-html"><code class="language-html"
                                           v-text="`&lt;b-card no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;Left Side Plus Minus Icon &lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
&lt;b-accordion v-model=&quot;activeLeftIcon&quot; class=&quot;app-accordion accordion-light-primary&quot;&gt;
${faqData
  .map(
    (item) => `  &lt;b-accordion-item id=&quot;${item.id}&quot;&gt;
    &lt;template #title&gt;
      &lt;PhMinus v-if=&quot;activeLeftIcon === '${item.id}'&quot; size=&quot;16&quot; /&gt;
      &lt;PhPlus v-else size=&quot;16&quot; /&gt;
      ${item.question}
    &lt;/template&gt;
    &lt;div&gt;${item.answer}&lt;/div&gt;
  &lt;/b-accordion-item&gt;`
  )
  .join('\n')}
&lt;/b-accordion&gt;
&lt;/b-card-body&gt;
&lt;/b-card&gt;`"
          ></code></pre>
                </b-collapse>
            </b-card>
        </b-col>
    </b-row>
</template>
