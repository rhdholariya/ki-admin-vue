<script setup>
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BTable,
  BButton,
} from "bootstrap-vue-next";
import { ref } from "vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {
  PhArrowsOutCardinal,
  PhNotePencil,
  PhTable,
  PhTrash,
} from "@phosphor-icons/vue";

const employees = ref([
  {
    name: "Alison Mused",
    position: "Accountant",
    status: "Medium",
    email: "alison@gmail.com",
    id: "#167",
    salary: "$2000",
    date: "December 1, 2024",
  },
  {
    name: "Amelia Commishun",
    position: "Junior Technical Author",
    status: "High",
    email: "amelia@gmail.com",
    id: "#289",
    salary: "$1200",
    date: "December 1, 2024",
  },
  {
    name: "Molly Story",
    position: "Software Engineer",
    status: "Medium",
    email: "molly@gmail.com",
    id: "#138",
    salary: "$4500",
    date: "December 1, 2024",
  },
  {
    name: "Diana Book",
    position: "Integration Specialist",
    status: "Lower",
    email: "diana@gmail.com",
    id: "#280",
    salary: "$5000",
    date: "December 1, 2024",
  },
  {
    name: "Evan Scope",
    position: "Sales Assistant",
    status: "High",
    email: "evan@gmail.com",
    id: "#165",
    salary: "$2560",
    date: "December 1, 2024",
  },
  {
    name: "Julia Sik",
    position: "Accountant",
    status: "Medium",
    email: "julia@gmail.com",
    id: "#245",
    salary: "$2400",
    date: "December 1, 2024",
  },
  {
    name: "Kylie Down",
    position: "Chief Operating Officer",
    status: "Lower",
    email: "kylie@gmail.com",
    id: "#167",
    salary: "$1800",
    date: "December 1, 2024",
  },
]);

const tableFields = [
  { key: "drag", label: "", thStyle: { width: "40px" } },
  { key: "name", label: "Employee Name" },
  { key: "position", label: "Position" },
  { key: "status", label: "Status" },
  { key: "email", label: "Email" },
  { key: "id", label: "ID" },
  { key: "salary", label: "Salary" },
  { key: "date", label: "Date" },
  { key: "action", label: "Action" },
];

const draggedIndex = ref(null);
const dragOverIndex = ref(null);

const handleDragStart = (e, index) => {
  draggedIndex.value = index;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", index);
};

const handleDragOver = (index, e) => {
  e.preventDefault();
  dragOverIndex.value = index;
};

const handleDrop = (index, e) => {
  e.preventDefault();
  const from = parseInt(e.dataTransfer.getData("text/plain"));

  if (from !== index) {
    const list = [...employees.value];
    const moved = list.splice(from, 1)[0];
    list.splice(index, 0, moved);
    employees.value = list;
  }

  cleanupDragState();
};

const handleDragEnd = () => {
  cleanupDragState();
};

const cleanupDragState = () => {
  draggedIndex.value = null;
  dragOverIndex.value = null;
};

const breadcrumbItems = {
  title: "Advance Table",
  items: [
    { label: " Table", icon: PhTable },
    { label: "Advance Table", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-header>
                <h5>Drag And Drop Table</h5>
              </b-card-header>

              <b-card-body class="p-0">
                <div class="table-responsive app-scroll mb-0">
                  <b-table
                      :items="employees"
                      :fields="tableFields"
                      hover
                      responsive
                      class="table-bottom-border advance-drag-drop-table align-middle mb-0"
                      large
                  >
                    <template #cell(drag)="data">
                      <div
                          draggable="true"
                          @dragstart="handleDragStart($event, data.index)"
                          @dragend="handleDragEnd"
                          @dragover="handleDragOver(data.index, $event)"
                          @drop="handleDrop(data.index, $event)"
                          :class="{
                                    'dragging': draggedIndex === data.index,
                                    'drag-over': dragOverIndex === data.index
                                }"
                          class="drag-handle"
                      >
                        <PhArrowsOutCardinal
                            :size="18"
                            weight="fill"
                            class="text-secondary"
                        />
                      </div>
                    </template>

                    <template #cell(status)="data">
                        <span
                            :class="[
                                'badge',
                                data.item.status === 'High'
                                    ? 'text-outline-success'
                                    : data.item.status === 'Medium'
                                        ? 'text-outline-warning'
                                        : 'text-outline-danger'
                            ]"
                        >
                            {{ data.item.status }}
                        </span>
                    </template>

                    <template #cell(id)="data">
                      <span class="text-primary fw-bold">{{ data.item.id }}</span>
                    </template>

                    <template #cell(salary)="data">
                      <span class="text-warning fw-bold">{{ data.item.salary }}</span>
                    </template>

                    <template #cell(action)>
                      <b-button class="btn btn-danger icon-btn b-r-4 me-1">
                        <PhTrash :size="18" weight="bold" />
                      </b-button>
                      <b-button class="btn btn-success icon-btn b-r-4">
                        <PhNotePencil :size="18" weight="bold" />
                      </b-button>
                    </template>
                  </b-table>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>
