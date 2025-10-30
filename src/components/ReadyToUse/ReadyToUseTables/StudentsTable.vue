<script setup>
import { ref } from 'vue';
import CustomDataTable from '@/components/Table/DataTable/CustomDataTable.vue';
import { studentsData } from '@/data/tablePage/DataTable/studentsData.js';
import { BButton, BModal } from "bootstrap-vue-next";

const selectedItems = ref([]);
const selectAll = ref(false);
const showDeleteModal = ref(false);
const itemToDelete = ref(null);


const toggleSelectAll = () => {
    if (selectAll.value) {
        selectedItems.value = [];
    } else {
        selectedItems.value = studentsData.map((student) => student.id);
    }
    selectAll.value = !selectAll.value;
};


const toggleItemSelection = (id) => {
    if (selectedItems.value.includes(id)) {
        selectedItems.value = selectedItems.value.filter((itemId) => itemId !== id);
    } else {
        selectedItems.value = [...selectedItems.value, id];
    }
};


const handleEdit = (student) => {
    console.log("Edit student:", student);

};


const handleDelete = (student) => {
    itemToDelete.value = student;
    showDeleteModal.value = true;
};


const confirmDelete = () => {
    if (itemToDelete.value) {
        const index = studentsData.findIndex((student) => student.id === itemToDelete.value.id);
        if (index !== -1) {
            studentsData.splice(index, 1);
        }
        showDeleteModal.value = false;
        itemToDelete.value = null;
    }
};


const columns = [
    {
        key: 'checkbox',
        header: 'CheckBox',
        render: (_, student) => `
      <input
        type="checkbox"
        ${selectedItems.value.includes(student.id) ? 'checked' : ''}
        class="form-check-input mt-0"
        @change="${() => toggleItemSelection(student.id)}"
      />
    `,
        className: 'no-export',
    },
    {
        key: 'name',
        header: 'Name',
    },
    {
        key: 'parentName',
        header: 'Parent Name',
    },
    {
        key: 'id',
        header: 'ID',
        render: (_, student) => `<span class="f-w-500">${student.id}</span>`,
    },
    {
        key: 'contact',
        header: 'Contact',
        render: (_, student) => `<span class="text-success">${student.contact}</span>`,
    },
    {
        key: 'city',
        header: 'City',
    },
    {
        key: 'date',
        header: 'Date',
    },
    {
        key: 'grade',
        header: 'Grade',
        render: (_, student) => `
      <span
        class="badge text-outline-${student.grade === 'A' ? 'success' : 'warning'} hover-bg-${
            student.grade === 'A' ? 'success' : 'warning'
        } hover-text-white"
      >
        ${student.grade}
      </span>
    `,
    },
];

const footerColumns = [
    { key: 'checkbox', header: '' },
    { key: 'name', header: 'Name' },
    { key: 'parentName', header: 'Parent Name' },
    { key: 'id', header: 'ID' },
    { key: 'contact', header: 'Contact' },
    { key: 'city', header: 'City' },
    { key: 'date', header: 'Date' },
    { key: 'grade', header: 'Grade' },
    { key: 'actions', header: 'Action' },
];
</script>

<template>
    <CustomDataTable
        :show-description="false"
        title="Students List"
        :columns="columns"
        :data="studentsData"
        row-key="id"
        card-class-name=""
        table-class-name="w-100 align-middle mb-0"
        :show-actions="true"
        :show-individual-buttons="true"
        :on-edit="handleEdit"
        :on-delete="handleDelete"
        :show-footer="true"
        :footer-columns="footerColumns"
    />

    <b-modal
        v-model="showDeleteModal"
        centered
        hide-header
        content-class="border-0"
        body-class="text-center p-4"
    >
        <img alt="" class="img-fluid mb-3" src="/images/icons/delete-icon.png" />
        <div class="text-center">
            <h4 class="text-danger fw-semibold mb-2">Are You Sure?</h4>
            <p class="text-secondary fs-6">You won't be able to revert this!</p>
        </div>

        <template #footer>
            <div class="text-center mt-4">
                <b-button variant="secondary" class="me-2" @click="showDeleteModal = false">Close</b-button>
                <b-button variant="primary" @click="confirmDelete">Yes, Delete it</b-button>
            </div>
        </template>
    </b-modal>
</template>