<template>
  <AppLayout>
    <main>
  <b-container fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems" />
    <b-row>
      <b-col sm="12">
        <div class="kanban-board-container app-scroll" ref="boardRef">
          <div class="board">
            <div
                v-for="column in columns"
                :key="column.id"
                class="board-column app-scroll"
            >
              <div class="board-column-header">
                <component :is="column.icon" class="me-2" />
                {{ column.title }}
              </div>
              <div class="board-column-content-wrapper">
                <div class="board-column-content">
                  <div
                      v-for="task in column.items"
                      :key="task.id"
                      class="board-item"
                  >
                    <div
                        :class="['board-item-content', task.image ? 'p-0' : '']"
                    >
                      <div v-if="task.image" class="board-images">
                        <img :src="task.image" class="img-fluid" alt="img" />
                      </div>
                      <div :class="task.image ? 'p-3' : ''">
                        <h6 class="mb-0">{{ task.title }}</h6>
                        <div class="board-footer d-flex align-items-center gap-2">
                          <span class="badge bg-light-danger f-s-14">
                            <i class="ph-bold ph-clock-afternoon"></i>
                            {{ task.dueDate }}
                          </span>
                          <PhList
                              size="16"
                              weight="bold"
                              class="me-2 text-muted"
                          />
                          <span class="f-s-14 me-2 d-flex align-items-center">
                            <PhChatText size="16" weight="bold" class="me-1" />
                            {{ task.comments }}
                          </span>
                          <span class="badge bg-light-primary f-s-14">
                            <i class="ph-bold ph-check-square-offset"></i>
                            {{ task.progress }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
    </main>
  </AppLayout>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, h, computed} from "vue";
import MuuriModule from "muuri";
const Muuri = MuuriModule.default || MuuriModule;

import {
  PhChartLineUp,
  PhChatText,
  PhCheckCircle,
  PhCheckSquareOffset,
  PhEye,
  PhList,
  PhListBullets, PhStack,
} from "@phosphor-icons/vue";

import { BContainer, BRow, BCol } from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";

const boardRef = ref(null);
const columnGridsRef = ref([]);
const boardGridRef = ref(null);

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Kanban Board",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Kanban Board", active: true },
  ],
}));

const columns = [
  {
    id: "1",
    title: "To Do",
    icon: h(PhListBullets, { size: 18, weight: "bold" }),
    items: [
      { id: "1", title: "Create homepage wireframe.", dueDate: "Nov 22", comments: 2, progress: "1/2" },
      { id: "2", title: "Draft new article content.", dueDate: "Dec 19", comments: 2, progress: "1/2", image: "/images/profile-app/07.jpg" },
      { id: "3", title: "Analyze client comments.", dueDate: "Sep 28", comments: 2, progress: "1/2" },
    ],
  },
  {
    id: "2",
    title: "IN PROGRESS",
    icon: h(PhChartLineUp, { size: 18, weight: "bold" }),
    items: [
      { id: "4", title: "Prepare email marketing.", dueDate: "Jul 10", comments: 2, progress: "1/2", image: "/images/profile-app/10.jpg" },
    ],
  },
  {
    id: "3",
    title: "REVIEW",
    icon: h(PhEye, { size: 18, weight: "bold" }),
    items: [
      { id: "5", title: "Revise product listings.", dueDate: "Mar 27", comments: 2, progress: "1/2" },
      { id: "6", title: "Create initial app mockup.", dueDate: "Apr 09", comments: 2, progress: "1/2" },
    ],
  },
  {
    id: "4",
    title: "DONE",
    icon: h(PhCheckSquareOffset, { size: 18, weight: "bold" }),
    items: [
      { id: "7", title: "Compile financial data.", dueDate: "Jul 24", comments: 2, progress: "1/2", image: "/images/profile-app/05.jpg" },
    ],
  },
  {
    id: "5",
    title: "TESTED",
    icon: h(PhCheckCircle, { size: 18, weight: "bold" }),
    items: [
      {
        id: "8",
        title: "Gather market insights.",
        dueDate: "Oct 04",
        comments: 2,
        progress: "1/2",
        image: "/images/profile-app/09.jpg"
      },
      {id: "9", title: "Improve page load times.", dueDate: "Aug 23", comments: 2, progress: "1/2"},
    ],
  },
];

// Initialize Muuri
const initKanban = () => {
  const currentBoard = boardRef.value;
  if (!currentBoard) return;

  const itemContainers = currentBoard.querySelectorAll(".board-column-content");
  columnGridsRef.value = [];

  itemContainers.forEach((container) => {
    const grid = new Muuri(container, {
      items: ".board-item",
      layoutDuration: 400,
      layoutEasing: "ease",
      dragEnabled: true,
      dragSort: () => columnGridsRef.value,
      dragContainer: document.body,
      dragRelease: {duration: 400, easing: "ease"},
    })
        .on("dragStart", (item) => {
          const el = item.getElement();
          if (el) {
            el.style.width = `${item.getWidth()}px`;
            el.style.height = `${item.getHeight()}px`;
          }
        })
        .on("dragReleaseEnd", (item) => {
          const el = item.getElement();
          if (el) {
            el.style.width = "";
            el.style.height = "";
          }
          columnGridsRef.value.forEach((grid) => grid.refreshItems());
        })
        .on("layoutStart", () => {
          if (boardGridRef.value) boardGridRef.value.refreshItems().layout();
        });

    columnGridsRef.value.push(grid);
  });

  const boardElement = currentBoard.querySelector(".board");
  if (boardElement) {
    boardGridRef.value = new Muuri(boardElement, {
      layout: {horizontal: true},
      layoutDuration: 400,
      layoutEasing: "ease",
      dragEnabled: true,
      dragContainer: document.body,
      dragRelease: {duration: 400, easing: "ease"},
      dragStartPredicate: (_, event) =>
          event.target.closest(".board-column-header") !== null,
    });
  }
};

onMounted(() => {
  const timer = setTimeout(initKanban, 100);

  onBeforeUnmount(() => {
    clearTimeout(timer);
    columnGridsRef.value.forEach((grid) => grid.destroy());
    if (boardGridRef.value) boardGridRef.value.destroy();
  });
});
</script>

