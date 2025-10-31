<script setup>
import { ref, computed } from 'vue'
import {
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BButton,
  BForm,
  BFormInput,
  BFormSelect,
  BFormGroup,
  BInputGroup,
  BInputGroupText,
  BTable,
  BBadge,
  BModal,
  BFormCheckbox
} from 'bootstrap-vue-next'
import { PhMagnifyingGlass } from '@phosphor-icons/vue'

const employees = ref([
  {
    id: 1,
    name: 'Allie Grater',
    email: 'graterallie@gmail.com',
    contact: '8054478398',
    date: '2021-03-19',
    status: 'BLOCK'
  },
  {
    id: 2,
    name: 'Rhoda Report',
    email: 'reportrhoda@gmail.com',
    contact: '7765392112',
    date: '2020-01-19',
    status: 'ACTIVE'
  },
  {
    id: 3,
    name: 'Rose Bush',
    email: 'rose@gmail.com',
    contact: '9674903425',
    date: '2020-10-26',
    status: 'ACTIVE'
  },
  {
    id: 4,
    name: 'Dave Allippa',
    email: 'dave@gmail.com',
    contact: '6490537289',
    date: '2020-06-19',
    status: 'BLOCK'
  }
])

const fields = [
  { key: 'select', label: '' },
  { key: 'name', label: 'Employee', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'contact', label: 'Contact', sortable: true },
  { key: 'date', label: 'Joining Date', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'edit', label: 'Edit' },
  { key: 'delete', label: 'Delete' }
]

const search = ref('')
const showModal = ref(false)
const editIndex = ref(null)
const form = ref({
  id: 0,
  name: '',
  email: '',
  contact: '',
  date: '',
  status: 'ACTIVE'
})

// Computed: filtered employee list
const filteredEmployees = computed(() => {
  const query = String(search.value).trim().toLowerCase()
  if (!query) return employees.value

  return employees.value.filter(emp =>
      emp.name.toLowerCase().includes(query) ||
      emp.email.toLowerCase().includes(query) ||
      emp.contact.includes(query) ||
      emp.date.includes(query) ||
      emp.status.toLowerCase().includes(query)
  )
})

// Functions
const resetForm = () => {
  form.value = { id: 0, name: '', email: '', contact: '', date: '', status: 'ACTIVE' }
  editIndex.value = null
}

const openModal = () => {
  resetForm()
  showModal.value = true
}

const editEmployee = index => {
  form.value = { ...employees.value[index] }
  editIndex.value = index
  showModal.value = true
}

const deleteEmployee = index => {
  employees.value.splice(index, 1)
}

const saveEmployee = () => {
  if (editIndex.value !== null) {
    employees.value[editIndex.value] = { ...form.value }
  } else {
    employees.value.push({ ...form.value, id: Date.now() })
  }
  showModal.value = false
  resetForm()
}
</script>

<template>
  <b-col lg="8">
    <b-card no-body>
      <b-card-header>
        <h5 class="mb-0">Add, Edit & Remove Table</h5>
      </b-card-header>

      <b-card-body class="p-2">
        <b-row class="list-table-header justify-content-between mb-3">
          <b-col cols="auto">
            <b-button variant="primary" class="mb-2" @click="openModal">Add</b-button>
          </b-col>

          <b-col cols="12" sm="auto">
            <b-input-group>
              <b-form-input v-model="search" placeholder="Search..." />
              <b-input-group-text class="bg-transparent border-start-0">
                <PhMagnifyingGlass :size="18" />
              </b-input-group-text>
            </b-input-group>
          </b-col>
        </b-row>

        <b-table
            :items="filteredEmployees"
            :fields="fields"
            hover
            responsive
            small
            class="table-bottom-border list-table-data align-middle mb-0"
        >
          <template #cell(select)>
            <b-form-checkbox />
          </template>

          <template #cell(status)="data">
            <b-badge :variant="data.item.status === 'ACTIVE' ? 'success' : 'danger'">
              {{ data.item.status }}
            </b-badge>
          </template>

          <template #cell(edit)="data">
            <b-button size="sm" variant="success" @click="editEmployee(data.index)">
              Edit
            </b-button>
          </template>

          <template #cell(delete)="data">
            <b-button size="sm" variant="danger" @click="deleteEmployee(data.index)">
              Remove
            </b-button>
          </template>
        </b-table>

        <div class="list-pagination p-3">
          <ul class="pagination mb-0">
            <li class="active">
              <a class="page" href="#">1</a>
            </li>
          </ul>
        </div>
      </b-card-body>
    </b-card>
  </b-col>

  <!-- Modal -->
  <b-modal v-model="showModal" title="Employee" @hide="resetForm" centered>
    <b-form>
      <b-form-group label="Name" class="mb-3">
        <b-form-input v-model="form.name" placeholder="Enter name" />
      </b-form-group>

      <b-form-group label="Email" class="mb-3">
        <b-form-input v-model="form.email" placeholder="Enter email" />
      </b-form-group>

      <b-form-group label="Contact" class="mb-3">
        <b-form-input v-model="form.contact" placeholder="Enter contact" />
      </b-form-group>

      <b-form-group label="Joining Date" class="mb-3">
        <b-form-input type="date" v-model="form.date" />
      </b-form-group>

      <b-form-group label="Status" class="mb-3">
        <b-form-select v-model="form.status">
          <option value="ACTIVE">ACTIVE</option>
          <option value="BLOCK">BLOCK</option>
        </b-form-select>
      </b-form-group>
    </b-form>

    <template #modal-footer>
      <b-button variant="primary" @click="saveEmployee">
        {{ editIndex !== null ? 'Update' : 'Add' }}
      </b-button>
      <b-button variant="secondary" @click="showModal = false">Cancel</b-button>
    </template>
  </b-modal>
</template>
