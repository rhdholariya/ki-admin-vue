<script setup>
import { ref } from "vue";
import { BCol, BCard, BCardBody, BCardHeader, BRow } from "bootstrap-vue-next";
import { PhDotsThreeVertical } from "@phosphor-icons/vue";


const clonicMenuItemsLeft = ref([
  { label: "A", title: "Clonic Menu List 1", id: 1 },
  { label: "B", title: "Clonic Menu List 2", id: 2 },
  { label: "C", title: "Clonic Menu List 3", id: 3 },
  { label: "D", title: "Clonic Menu List 4", id: 4 },
  { label: "E", title: "Clonic Menu List 5", id: 5 },
]);


const clonicMenuItemsRight = ref([
  {label: "A", title: "Clonic Menu List 6", id: 6},
  {label: "B", title: "Clonic Menu List 7", id: 7},
  {label: "C", title: "Clonic Menu List 8", id: 8},
  {label: "D", title: "Clonic Menu List 9", id: 9},
  {label: "E", title: "Clonic Menu List 10", id: 10},
]);


const draggedItem = ref(null);
const draggedFromLeft = ref(false);

const onDragStart = (item, fromLeft) => {
  draggedItem.value = item;
  draggedFromLeft.value = fromLeft;
};


const onDragOver = (event) => {
  event.preventDefault();
};


const onDrop = (toLeft) => {
  if (!draggedItem.value) return;


  if (draggedFromLeft.value === toLeft) return;

  if (toLeft) {
    clonicMenuItemsLeft.value.push(draggedItem.value);
    clonicMenuItemsRight.value = clonicMenuItemsRight.value.filter(
        (i) => i.id !== draggedItem.value.id
    );
  } else {
    clonicMenuItemsRight.value.push(draggedItem.value);
    clonicMenuItemsLeft.value = clonicMenuItemsLeft.value.filter(
        (i) => i.id !== draggedItem.value.id
    );
  }

  draggedItem.value = null;
};
</script>

<template>
  <b-col xxl="6">
    <b-card class="equal-card" no-body>
      <b-card-header>
        <h5>Draggable Clonic List</h5>
      </b-card-header>

      <b-card-body>
        <b-row>

          <!-- LEFT LIST -->
          <b-col cols="6" class="box-layout-draggable">
            <ul
                class="clonic-menu-list"
                @drop="onDrop(true)"
                @dragover="onDragOver"
            >
              <li
                  v-for="item in clonicMenuItemsLeft"
                  :key="item.id"
                  draggable="true"
                  @dragstart="onDragStart(item, true)"
              >
                <div class="clonic-menu-item">
                  <span class="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                    {{ item.label }}
                  </span>

                  <div class="clonic-menu-content">
                    <h6 class="mb-0">{{ item.title }}</h6>
                  </div>

                  <span>
                    <PhDotsThreeVertical :size="32"/>
                  </span>
                </div>
              </li>
            </ul>
          </b-col>

          <!-- RIGHT LIST -->
          <b-col cols="6" class="box-layout-draggable">
            <ul
                class="clonic-menu-list"
                @drop="onDrop(false)"
                @dragover="onDragOver"
            >
              <li
                  v-for="item in clonicMenuItemsRight"
                  :key="item.id"
                  draggable="true"
                  @dragstart="onDragStart(item, false)"
              >
                <div class="clonic-menu-item">
                  <span class="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                    {{ item.label }}
                  </span>

                  <div class="clonic-menu-content">
                    <h6 class="mb-0">{{ item.title }}</h6>
                  </div>

                  <span>
                    <PhDotsThreeVertical :size="32"/>
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
