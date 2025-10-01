<template>
  <b-col xl="9">
    <b-card>
      <b-card-body class="p-0">
        <!-- Search and Add Button -->
        <div class="d-flex justify-content-between p-3 border-bottom">
          <b-form class="me-3 app-form app-icon-form search-lg h-100 w-100">
            <div class="position-relative h-100">
              <b-form-input
                v-model="searchTerm"
                type="search"
                placeholder="Search..."
                class="search h-100 pe-4"
                @input="handleSearchChange"
              />
              <IconSearch
                class="position-absolute end-0 top-50 translate-middle-y me-2"
                :size="16"
              />
            </div>
          </b-form>
          <b-button
            variant="primary"
            @click="openAddModal"
          >
            Add
          </b-button>
        </div>

        <!-- Todo Table -->
        <b-table
          hover
          responsive
          class="table-bottom-border todo-table mb-0"
          :items="paginatedTodos"
          :fields="tableFields"
        >
          <template #cell(checkbox)="row">
            <b-form-checkbox
              :id="`todo-${row.item.id}`"
              v-model="row.item.completed"
              @change="toggleTodo(row.item.id)"
            />
          </template>
          
          <template #cell(task)="row">
            <span :class="{ 'text-d-line-through': row.item.completed }" class="fw-semibold">
              {{ row.item.task }}
            </span>
          </template>
          
          <template #cell(priority)="row">
            <b-badge
              :variant="getPriorityVariant(row.item.priority)"
              :class="{ 'opacity-50': row.item.completed }"
            >
              {{ row.item.priority }}
            </b-badge>
          </template>
          
          <template #cell(assign)="row">
            <p class="txt-ellipsis-1 mb-0 fw-medium text-dark">
              {{ row.item.assign }}
            </p>
          </template>
          
          <template #cell(date)="row">
            <span class="text-success fw-semibold">{{ row.item.date }}</span>
          </template>
          
          <template #cell(notes)="row">
            {{ row.item.notes }}
          </template>
          
          <template #cell(edit)="row">
            <b-button
              variant="outline-success"
              size="sm"
              :class="[
                'edit-item-btn icon-btn',
                { 'bg-success text-white opacity-50': row.item.completed }
              ]"
              :disabled="row.item.completed"
              @click="openEditModal(row.item)"
            >
              <IconEdit :size="14" />
            </b-button>
          </template>
          
          <template #cell(delete)="row">
            <b-button
              variant="outline-danger"
              size="sm"
              :class="[
                'remove-item-btn icon-btn',
                { 'bg-danger text-white opacity-50': row.item.completed }
              ]"
              :disabled="row.item.completed"
              @click="handleDelete(row.item.id)"
            >
              <IconTrash :size="14" />
            </b-button>
          </template>
        </b-table>

        <!-- Pagination Controls -->
        <div v-if="totalPages > 1" class="d-flex justify-content-between p-3 border-top flex-wrap">
          <div>
            <p class="f-w-500 f-s-16 me-3">
              Page {{ currentPage }} of {{ totalPages }}
            </p>
          </div>
          <b-pagination
            v-model="currentPage"
            :total-rows="filteredTodos.length"
            :per-page="itemsPerPage"
            class="app-pagination"
            @page-click="handlePageChange"
          />
        </div>

        <!-- Add/Edit Modal -->
        <b-modal
          v-model="showModal"
          :title="isEditing ? 'Edit Task' : 'Add Task'"
          @hidden="resetForm"
        >
          <b-form class="app-form">
            <b-form-group label="Task" class="mb-3">
              <b-form-input
                id="task"
                v-model="formData.task"
                required
              />
            </b-form-group>
            
            <b-form-group label="Assign" class="mb-3">
              <b-form-input
                id="assign"
                v-model="formData.assign"
                required
              />
            </b-form-group>
            
            <b-form-group label="Date" class="mb-3">
              <b-form-input
                id="date"
                v-model="formData.date"
                type="date"
                required
              />
            </b-form-group>
            
            <b-form-group label="Notes" class="mb-3">
              <b-form-textarea
                id="notes"
                v-model="formData.notes"
              />
            </b-form-group>
            
            <b-form-group label="Priority" class="mb-3">
              <b-form-select
                id="priority"
                v-model="formData.priority"
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </b-form-select>
            </b-form-group>
          </b-form>

          <template #modal-footer>
            <b-button variant="secondary" @click="toggleModal">
              Cancel
            </b-button>
            <b-button
              :variant="isEditing ? 'success' : 'primary'"
              @click="isEditing ? handleEdit : handleAdd"
            >
              {{ isEditing ? 'Update' : 'Add' }}
            </b-button>
          </template>
        </b-modal>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
  BCol,
  BCard,
  BCardBody,
  BTable,
  BButton,
  BBadge,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormSelect,
  BFormCheckbox,
  BModal,
  BPagination,
} from "bootstrap-vue-next";

// Import icons
import { IconEdit, IconSearch, IconTrash } from "@tabler/icons-vue";

// Import todo data
import { initialTodos } from "@/data/app/todo/todoData.js";

// Reactive state
const todos = ref([...initialTodos]);
const showModal = ref(false);
const isEditing = ref(false);
const currentPage = ref(1);
const searchTerm = ref("");
const itemsPerPage = 8;

const formData = ref({
  id: null,
  task: "",
  priority: "",
  assign: "",
  date: "",
  notes: "",
  completed: false,
});

// Table fields configuration
const tableFields = [
  { key: 'checkbox', label: '' },
  { key: 'task', label: 'Task' },
  { key: 'priority', label: 'Priority' },
  { key: 'assign', label: 'Assign' },
  { key: 'date', label: 'Date' },
  { key: 'notes', label: 'Notes' },
  { key: 'edit', label: 'Edit' },
  { key: 'delete', label: 'Delete' },
];

// Computed properties
const filteredTodos = computed(() => {
  if (!searchTerm.value) return todos.value;

  const lowerSearchTerm = searchTerm.value.toLowerCase();
  return todos.value.filter(todo =>
    todo.task.toLowerCase().includes(lowerSearchTerm) ||
    todo.assign.toLowerCase().includes(lowerSearchTerm) ||
    (todo.notes && todo.notes.toLowerCase().includes(lowerSearchTerm)) ||
    todo.priority.toLowerCase().includes(lowerSearchTerm) ||
    todo.date.toLowerCase().includes(lowerSearchTerm)
  );
});

const totalPages = computed(() => Math.ceil(filteredTodos.value.length / itemsPerPage));

const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredTodos.value.slice(start, end);
});

// Methods
const toggleModal = () => {
  showModal.value = !showModal.value;
};

const resetForm = () => {
  formData.value = {
    id: null,
    task: "",
    priority: "",
    assign: "",
    date: "",
    notes: "",
    completed: false,
  };
  isEditing.value = false;
};

const openAddModal = () => {
  resetForm();
  toggleModal();
};

const openEditModal = (todo) => {
  formData.value = { ...todo };
  isEditing.value = true;
  toggleModal();
};

const handleAdd = () => {
  if (formData.value.task && formData.value.assign && formData.value.date) {
    const newTodo = {
      id: Date.now(),
      task: formData.value.task,
      priority: formData.value.priority || "Low",
      assign: formData.value.assign,
      date: formData.value.date,
      notes: formData.value.notes || "",
      completed: false,
    };
    todos.value.push(newTodo);
    toggleModal();
    resetForm();
    // Go to last page
    currentPage.value = Math.ceil(todos.value.length / itemsPerPage);
  }
};

const handleEdit = () => {
  if (formData.value.id && formData.value.task && formData.value.assign && formData.value.date) {
    const index = todos.value.findIndex(todo => todo.id === formData.value.id);
    if (index !== -1) {
      todos.value[index] = { ...formData.value };
    }
    toggleModal();
    resetForm();
  }
};

const handleDelete = (id) => {
  const index = todos.value.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.value.splice(index, 1);
    // Adjust current page if needed
    const newPage = Math.min(currentPage.value, Math.ceil(todos.value.length / itemsPerPage));
    currentPage.value = newPage || 1;
  }
};

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const handlePageChange = (page) => {
  currentPage.value = page;
};

const handleSearchChange = () => {
  currentPage.value = 1; // Reset to first page when searching
};

const getPriorityVariant = (priority) => {
  const variantMap = {
    High: "success",
    Medium: "warning",
    Low: "danger",
  };
  return variantMap[priority] || "secondary";
};

// Watch for changes in filtered todos to adjust current page
watch(filteredTodos, (newFilteredTodos) => {
  if (currentPage.value > Math.ceil(newFilteredTodos.length / itemsPerPage)) {
    currentPage.value = Math.ceil(newFilteredTodos.length / itemsPerPage) || 1;
  }
});
</script>
