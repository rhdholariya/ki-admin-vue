<script setup>
import {ref} from 'vue'
import {BButton, BModal} from 'bootstrap-vue-next'
import CustomDataTable from '@/components/Table/DataTable/CustomDataTable.vue'
import {studentsData} from '@/data/tablePage/DataTable/studentsData.js'

// Reactive state
const selectedItems = ref([])
const showDeleteModal = ref(false)
const itemToDelete = ref(null)



// Edit handler
const handleEdit = () => {
}

// Delete confirmation
const handleDelete = (student) => {
  itemToDelete.value = student
  showDeleteModal.value = true
}

// Confirm delete action
const confirmDelete = () => {
  if (itemToDelete.value) {
    const index = studentsData.findIndex(s => s.id === itemToDelete.value.id)
    if (index !== -1) studentsData.splice(index, 1)
    showDeleteModal.value = false
    itemToDelete.value = null
  }
}

// Table columns
const columns = [
  {
    key: 'checkbox',
    header: '',
    render: (_, student) => `
      <input
    type="checkbox"
    ${selectedItems.value.includes(student.id) ? 'checked' : ''}
    class="form-check-input mt-0"
    data-id="${student.id}"
  />
    `,
    className: 'no-export'
  },
  {key: 'name', header: 'Name'},
  {key: 'parentName', header: 'Parent Name'},
  {
    key: 'id',
    header: 'ID',
    render: (_, student) => `<span class="fw-semibold">${student.id}</span>`
  },
  {
    key: 'contact',
    header: 'Contact',
    render: (_, student) => `<span class="text-success">${student.contact}</span>`
  },
  {key: 'city', header: 'City'},
  {key: 'date', header: 'Date'},
  {
    key: 'grade',
    header: 'Grade',
    render: (_, student) => `
      <span class="badge text-outline-${
        student.grade === 'A' ? 'success' : 'warning'
    } hover-bg-${
        student.grade === 'A' ? 'success' : 'warning'
    } hover-text-white">${student.grade}</span>
    `
  }
]

// Footer columns
const footerColumns = [
  {key: 'checkbox', header: ''},
  {key: 'name', header: 'Name'},
  {key: 'parentName', header: 'Parent Name'},
  {key: 'id', header: 'ID'},
  {key: 'contact', header: 'Contact'},
  {key: 'city', header: 'City'},
  {key: 'date', header: 'Date'},
  {key: 'grade', header: 'Grade'},
  {key: 'actions', header: 'Action'}
]
</script>

<template>
  <CustomDataTable
      title="Students List"
      :show-description="false"
      :columns="columns"
      :data="studentsData"
      row-key="id"
      table-class-name="w-100 align-middle mb-0"
      card-class-name=""
      :show-actions="true"
      :show-individual-buttons="true"
      :on-edit="handleEdit"
      :on-delete="handleDelete"
      :show-footer="true"
      :footer-columns="footerColumns"
  />

  <!-- Delete Confirmation Modal -->
  <b-modal
      v-model="showDeleteModal"
      centered
      hide-header
      content-class="border-0"
      body-class="text-center p-4"
  >
    <img alt="delete" class="img-fluid mb-3" src="/images/icons/delete-icon.png"/>
    <div class="text-center">
      <h4 class="text-danger fw-semibold mb-2">Are You Sure?</h4>
      <p class="text-secondary fs-6">You won't be able to revert this!</p>
    </div>

    <template #footer>
      <div class="text-center mt-4">
        <b-button variant="secondary" class="me-2" @click="showDeleteModal = false">
          Close
        </b-button>
        <b-button variant="primary" @click="confirmDelete">
          Yes, Delete it
        </b-button>
      </div>
    </template>
  </b-modal>
</template>
