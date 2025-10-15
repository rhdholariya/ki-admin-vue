<script setup>
import {  BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BTable,} from "bootstrap-vue-next";
import { ref } from 'vue';
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhHandHeart, PhNotePencil, PhTrash} from "@phosphor-icons/vue";
const employees = ref([
    { name: 'Alison Mused', position: 'Accountant', status: 'Medium', email: 'alison@gmail.com', id: '#167', salary: '$2000', date: 'December 1, 2024' },
    { name: 'Amelia Commishun', position: 'Junior Technical Author', status: 'High', email: 'amelia@gmail.com', id: '#289', salary: '$1200', date: 'December 1, 2024' },
    { name: 'Molly Story', position: 'Software Engineer', status: 'Medium', email: 'molly@gmail.com', id: '#138', salary: '$4500', date: 'December 1, 2024' },
    { name: 'Diana Book', position: 'Integration Specialist', status: 'Lower', email: 'diana@gmail.com', id: '#280', salary: '$5000', date: 'December 1, 2024' },
    { name: 'Evan Scope', position: 'Sales Assistant', status: 'High', email: 'evan@gmail.com', id: '#165', salary: '$2560', date: 'December 1, 2024' },
    { name: 'Julia Sik', position: 'Accountant', status: 'Medium', email: 'julia@gmail.com', id: '#245', salary: '$2400', date: 'December 1, 2024' },
    { name: 'Kylie Down', position: 'Chief Operating Officer', status: 'Lower', email: 'kylie@gmail.com', id: '#167', salary: '$1800', date: 'December 1, 2024' },
]);

const tableFields = [
    { key: 'drag', label: '', thStyle: { width: '40px' } },
    { key: 'name', label: 'Employee Name' },
    { key: 'position', label: 'Position' },
    { key: 'status', label: 'Status' },
    { key: 'email', label: 'Email' },
    { key: 'id', label: 'ID' },
    { key: 'salary', label: 'Salary' },
    { key: 'date', label: 'Date' },
    { key: 'action', label: 'Action' },
];

const draggedIndex = ref(null);

const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index);
    draggedIndex.value = index;
};

const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
};

const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex.value !== null && draggedIndex.value !== targetIndex) {
        const newEmployees = [...employees.value];
        const [draggedEmployee] = newEmployees.splice(draggedIndex.value, 1);
        newEmployees.splice(targetIndex, 0, draggedEmployee);
        employees.value = newEmployees;
        draggedIndex.value = null;
    }
};

const handleDragEnd = () => {
    draggedIndex.value = null;
};
// Breadcrumb data
const breadcrumbItems = {
    title: "form wizards 1",
    items: [
        {label: "Ready To Use", icon: PhHandHeart},
        {label: "form wizards 1", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Drag And Drop Table</h5>
                            </b-card-header>
                            <b-card-body class="p-0">
                                <div class="table-responsive app-scroll">
                                    <b-table
                                        :items="employees"
                                        :fields="tableFields"
                                        hover
                                        responsive
                                        class="table-bottom-border advance-drag-drop-table align-middle mb-0"
                                      large
                                    >
                                        <template #cell(drag)="data">
                  <span
                      class="text-secondary"
                      style="cursor: move;"
                  >
                    <i class="bi bi-arrows-move"></i>
                  </span>
                                        </template>

                                        <template #cell(status)="data">
                  <span
                      :class="[
                      'badge',
                      data.item.status === 'High'
                        ? 'text-success'
                        : data.item.status === 'Medium'
                        ? 'text-warning'
                        : 'text-danger'

                    ]"
                  >
                    {{ data.item.status }}
                  </span>
                                        </template>

                                        <template #cell(action)="data">
                                            <button class="btn btn-danger icon-btn b-r-4 me-1">
                                                <PhTrash :size="18" weight="bold"/>
                                            </button>
                                            <button class="btn btn-success icon-btn b-r-4">
                                                <PhNotePencil :size="18" weight="bold" />
                                            </button>
                                        </template>

                                        <!-- Custom row with drag & drop -->
                                        <template #row="rowData">
                                            <tr
                                                draggable="true"
                                                @dragstart="handleDragStart($event, rowData.index)"
                                                @dragover="handleDragOver"
                                                @drop="handleDrop($event, rowData.index)"
                                                @dragend="handleDragEnd"
                                                :style="{ cursor: 'move', opacity: draggedIndex === rowData.index ? 0.5 : 1 }"
                                            >
                                                <td>
                                                    <i class="bi bi-arrows-move text-secondary"></i>
                                                </td>
                                                <td>{{ rowData.item.name }}</td>
                                                <td>{{ rowData.item.position }}</td>
                                                <td>
                      <span
                          :class="[
                          'badge',
                          rowData.item.status === 'High'
                            ? 'text-success'
                            : rowData.item.status === 'Medium'
                            ? 'text-warning'
                            : 'text-danger'
                        ]"
                      >
                        {{ rowData.item.status }}
                      </span>
                                                </td>
                                                <td>{{ rowData.item.email }}</td>
                                                <td class="text-primary fw-bold">{{ rowData.item.id }}</td>
                                                <td class="text-warning fw-bold">{{ rowData.item.salary }}</td>
                                                <td>{{ rowData.item.date }}</td>
                                                <td>
                                                    <button class="btn btn-danger icon-btn b-r-4 me-1">
                                                        <i class="bi bi-trash"></i>
                                                    </button>
                                                    <button class="btn btn-success icon-btn b-r-4">
                                                        <i class="bi bi-pencil"></i>
                                                    </button>
                                                </td>
                                            </tr>
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
