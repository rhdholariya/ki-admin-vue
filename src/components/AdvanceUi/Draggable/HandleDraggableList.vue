<script setup>
import { onMounted } from "vue";
import Sortable from "sortablejs";

import { BCol, BCard, BCardBody, BCardHeader } from "bootstrap-vue-next";
import { PhAnchorSimple } from "@phosphor-icons/vue";

const handleListItems = [
  { color: "primary", text: "A simple primary list group item" },
  { color: "secondary", text: "A simple secondary list group item" },
  { color: "success", text: "A simple success list group item" },
  { color: "danger", text: "A simple danger list group item" },
  { color: "warning", text: "A simple warning list group item" },
  { color: "info", text: "A simple info list group item" },
  { color: "dark", text: "A simple dark list group item" },
];

onMounted(() => {
  const handleList = document.getElementById("handleList");
  if (handleList) {
    new Sortable(handleList, {
      handle: ".list-handle",
      animation: 150,
    });
  }
});
</script>

<template>
  <BCol xxl="6">
    <BCard class="equal-card" no-body>
      <BCardHeader>
        <h5>Draggable Handle List</h5>
      </BCardHeader>
      <BCardBody>
        <ul class="list-group handle-list-group" id="handleList">
          <li
              v-for="(item, index) in handleListItems"
              :key="index"
              :class="`list-group-item text-light-${item.color}`"
          >
            <PhAnchorSimple size="18" weight="bold" class="list-handle" />
            {{ item.text }}
          </li>
        </ul>
      </BCardBody>
    </BCard>
  </BCol>
</template>
