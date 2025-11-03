<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Sortable from "sortablejs";

import {
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BRow
} from "bootstrap-vue-next";

import { PhDotsThreeVertical } from "@phosphor-icons/vue";

// Left list items
const clonicMenuItemsLeft = ref([
  { label: "A", title: "Clonic Menu List 1" },
  { label: "B", title: "Clonic Menu List 2" },
  { label: "C", title: "Clonic Menu List 3" },
  { label: "D", title: "Clonic Menu List 4" },
  { label: "E", title: "Clonic Menu List 5" },
]);

// Right list items
const clonicMenuItemsRight = ref([
  { label: "A", title: "Clonic Menu List 6" },
  { label: "B", title: "Clonic Menu List 7" },
  { label: "C", title: "Clonic Menu List 8" },
  { label: "D", title: "Clonic Menu List 9" },
  { label: "E", title: "Clonic Menu List 10" },
]);

// Refs for DOM nodes (Vue way)
const leftListRef = ref(null);
const rightListRef = ref(null);

let leftSortable = null;
let rightSortable = null;

// Setup SortableJS instances safely
onMounted(() => {
  if (leftListRef.value) {
    leftSortable = new Sortable(leftListRef.value, {
      group: { name: "shared1", pull: "clone", put: false },
      animation: 150,
      sort: false,
    });
  }

  if (rightListRef.value) {
    rightSortable = new Sortable(rightListRef.value, {
      group: { name: "shared1", pull: "clone" },
      animation: 150,
    });
  }
});

onUnmounted(() => {
  // Destroy instances when component unmounts
  if (leftSortable) leftSortable.destroy();
  if (rightSortable) rightSortable.destroy();
});
</script>

<template>
  <b-col xxl="6">
    <b-card class="equal-card" no-body>
      <b-card-header>
        <h5>Draggable Clonic List</h5>
      </b-card-header>

      <b-card-body>
        <b-row>
          <!-- Left Column -->
          <b-col cols="6" class="box-layout-draggable">
            <ul class="clonic-menu-list" ref="leftListRef">
              <li v-for="(item, index) in clonicMenuItemsLeft" :key="index">
                <div class="clonic-menu-item" draggable="false">
                  <span
                      class="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img"
                  >
                    {{ item.label }}
                  </span>
                  <div class="clonic-menu-content">
                    <h6 class="mb-0">{{ item.title }}</h6>
                  </div>
                  <span>
                    <PhDotsThreeVertical :size="32" />
                  </span>
                </div>
              </li>
            </ul>
          </b-col>

          <!-- Right Column -->
          <b-col cols="6" class="box-layout-draggable">
            <ul class="clonic-menu-list" ref="rightListRef">
              <li v-for="(item, index) in clonicMenuItemsRight" :key="index">
                <div class="clonic-menu-item" draggable="false">
                  <span
                      class="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img"
                  >
                    {{ item.label }}
                  </span>
                  <div class="clonic-menu-content">
                    <h6 class="mb-0">{{ item.title }}</h6>
                  </div>
                  <span>
                    <PhDotsThreeVertical :size="32" />
                  </span>
                </div>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </b-col>
</template>
