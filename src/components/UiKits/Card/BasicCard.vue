<script setup>
import { PhCode } from "@phosphor-icons/vue";
import {BCard, BCollapse, BCol, BCardBody, BCardHeader, BButton} from "bootstrap-vue-next";
import { ref } from "vue";


const openCard = ref(null);



// Cards data
const cardsData = ref([
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
        body: " With supporting text below as a natural lead-in to additional content below as a natural.",
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
]);
</script>

<template>
  <div class="row">
    <b-Col
      v-for="(card, index) in cardsData"
      :key="card.id"
      md="6"
      xl="3"
    >
      <!-- Card -->
      <b-Card :class="card.className || 'card'" no-body>
        <!-- Header slot -->
        <b-card-header>
          <div
            class="code-header d-flex justify-content-between align-items-center"
          >
            <h5 class="mb-0">{{ card.title }}</h5>
            <b-button class="p-0 border-0" @click="openCard = openCard === card.id ? null : card.id">
              <PhCode size="30" weight="bold" class="source" />
            </b-button>
          </div>
        </b-card-header>
         <b-card-body>
        <!-- Card content (no b-card-body) -->
        <h6 v-if="card.headerText">{{ card.headerText }}</h6>
        <p>{{ card.body }}</p>
         </b-card-body>
        <!-- Footer -->
        <template v-if="card.footer" #footer>
          <h5>{{ card.footer }}</h5>
        </template>

      </b-Card>

        <!-- Prism code block INSIDE card -->
        <b-collapse :model-value="openCard === card.id" class="mt-3">
          <pre>
<code class="language-html" v-text="`<b-card${card.className ? ` class='${card.className}'` : ''} no-body>
  <b-card-header>
    <h5>${card.title}</h5>
  </b-card-header>
  <b-card-body>
  ${card.headerText ? `<h6>${card.headerText}</h6>` : ''}
  <p>${card.body}</p>
  </b-card-body>
  ${
    card.footer
      ? `<template #footer>
    <h5>${card.footer}</h5>
  </template>`
      : ''
  }
</b-card>`"></code>
          </pre>
        </b-Collapse>

    </b-Col>

  </div>
</template>
