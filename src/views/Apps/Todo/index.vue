<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        
        <b-row>
          <!-- Project List Sidebar -->
          <b-col xl="3">
            <b-card>
              <b-card-body>
                <b-button
                  variant="primary"
                  size="lg"
                  class="fs-6 w-100 rounded"
                  @click="toggleModal"
                >
                  <IconPlus class="me-1" :size="18" /> Add Project
                </b-button>

                <!-- Add Project Modal -->
                <b-modal
                  v-model="modal"
                  title="Create Task"
                  centered
                  @hidden="resetForm"
                >
                  <b-form class="app-form">
                    <b-form-group label="Task Name">
                      <b-form-input
                        id="taskName"
                        v-model="newTask"
                        type="text"
                        placeholder="Enter task name"
                      />
                    </b-form-group>
                  </b-form>

                  <template #modal-footer>
                    <b-button variant="primary" @click="handleAddTask">
                      Save changes
                    </b-button>
                  </template>
                </b-modal>

                <!-- Project List -->
                <div class="todo-container mt-4">
                  <div
                    v-for="(task, index) in tasks"
                    :key="index"
                    class="task"
                  >
                    <span class="txt-ellipsis-1">{{ task }}</span>
                    <b-button
                      variant="link"
                      size="sm"
                      class="p-1 border-0"
                      @click="handleDeleteTask(index)"
                    >
                      <IconTrash class="text-danger" :size="18" />
                    </b-button>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Todo Table -->
          <ToDoTable />
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import ToDoTable from "@/components/Apps/ToDo/ToDoTable.vue";

// Import icons
import { PhStack } from "@phosphor-icons/vue";
import { IconPlus, IconTrash } from "@tabler/icons-vue";

// Default tasks data
const defaultTasks = [
  "ki-admin & Dashboard",
  "Project Management",
  "Chat Application",
  "Todo App",
  "React Weather App",
  "Tic-Tac-Toe",
  "Stopwatch",
  "Calculator App",
  "Ecommerce Site",
  "Chat Application",
];

// Reactive state
const modal = ref(false);
const tasks = ref([...defaultTasks]);
const newTask = ref("");

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Todo",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Todo", active: true },
  ],
}));

// Methods
const toggleModal = () => {
  modal.value = !modal.value;
};

const resetForm = () => {
  newTask.value = "";
};

const handleAddTask = () => {
  if (newTask.value.trim()) {
    tasks.value.unshift(newTask.value);
    newTask.value = "";
    toggleModal();
  }
};

const handleDeleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>