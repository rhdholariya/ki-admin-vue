<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
  BCardHeader,
  BButton,
  BCollapse,
  BCol,
} from "bootstrap-vue-next";
import { PhCode } from "@phosphor-icons/vue";

// State for open/close
const openCard = ref(null);

// Cards data
const cardsData = [
  {
    id: "cardheader1",
    title: "Card Header",
    headerText: "Card Body",
    body: "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: "cardheader2",
    title: "",
    headerText: "Card Body",
    body: "With supporting text below as a natural lead-in to additional content below as a natural.",
    footer: "Card Footer",
    className: "border-0",
  },
  {
    id: "cardheader3",
    title: "Card Header",
    body: "With supporting text below as a natural lead-in to additional content below as a natural.",
    footer: "Card Footer",
    className: "border-0",
  },
  {
    id: "cardheader4",
    title: "Hover Effect",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect",
  },
  {
    id: "cardheader5",
    title: "Primary card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-primary",
  },
  {
    id: "cardheader6",
    title: "Secondary card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-secondary",
  },
  {
    id: "cardheader7",
    title: "Success card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-success",
  },
  {
    id: "cardheader8",
    title: "Danger card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-danger",
  },
  {
    id: "cardheader9",
    title: "Outline card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-outline-primary",
  },
  {
    id: "cardheader10",
    title: "Secondary",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-outline-secondary",
  },
  {
    id: "cardheader12",
    title: "Light card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-light-primary",
  },
  {
    id: "cardheader11",
    title: "Secondary",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-light-secondary",
  },
];
</script>

<template>
  <div class="row">
    <b-col
        v-for="card in cardsData"
        :key="card.id"
        md="6"
        xl="3"
        class="mb-4"
    >
      <!-- Card -->
      <b-card :class="card.className || 'card'" no-body>
        <!-- Header -->
        <b-card-header>
          <div class="code-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">{{ card.title }}</h5>
            <b-button
                class="p-0 border-0"
                @click="openCard = openCard === card.id ? null : card.id"
            >
              <PhCode size="30" weight="bold" class="source" />
            </b-button>
          </div>
        </b-card-header>

        <!-- Body -->
        <b-card-body>
          <h6 v-if="card.headerText">{{ card.headerText }}</h6>
          <p>{{ card.body }}</p>
        </b-card-body>

        <!-- Footer -->
        <template v-if="card.footer" #footer>
          <h5>{{ card.footer }}</h5>
        </template>
      </b-card>

      <!-- Prism Code Block -->
      <b-collapse :model-value="openCard === card.id" class="mt-3">
        <pre class="language-html" tabindex="0">
          <code v-prism>
&lt;b-card{{ card.className ? ` class=&quot;${card.className}&quot;` : '' }} no-body&gt;
  &lt;b-card-header&gt;
    &lt;h5&gt;{{ card.title }}&lt;/h5&gt;
  &lt;/b-card-header&gt;
  &lt;b-card-body&gt;
    {{ card.headerText ? `&lt;h6&gt;${card.headerText}&lt;/h6&gt;` : '' }}
    &lt;p&gt;{{ card.body }}&lt;/p&gt;
  &lt;/b-card-body&gt;
  {{ card.footer ? `&lt;template #footer&gt;&lt;h5&gt;${card.footer}&lt;/h5&gt;&lt;/template&gt;` : '' }}
&lt;/b-card&gt;
          </code>
        </pre>
      </b-collapse>
    </b-col>
  </div>
</template>
