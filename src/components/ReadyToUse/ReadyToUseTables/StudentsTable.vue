<script setup>
import { ref } from 'vue';
import CustomDataTable from '@/components/DataTable/CustomDataTable.vue';
import { studentsData } from '@/data/DablePage/DataTable/studentsData.js';

const selectedItems = ref([]);
const selectAll = ref(false);


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

// Define table columns
const columns = [
    {
        key: 'checkbox',
        header:  `CheckBox
    `,
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
    {
        key: 'actions',
        header: 'Action',
        render: () => `
      <div class="dropdown">
        <b-button
          class=" btn-white border-0 icon-btn p-0 shadow-none"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </b-button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              <svg class="icon me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Edit
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <svg class="icon me-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18"/>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6"/>
                <path d="M10 11v6"/>
                <path d="M14 11v6"/>
              </svg>
              Delete
            </a>
          </li>
        </ul>
      </div>
    `,
        className: 'no-export',
    },
];

// Define footer columns
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
        :show-actions="false"
        :show-footer="true"
        :footer-columns="footerColumns"
    />
</template>

