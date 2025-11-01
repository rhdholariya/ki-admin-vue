<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
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
import { IconEdit, IconSearch, IconTrash } from "@tabler/icons-vue";
import * as bootstrap from "bootstrap"; // ✅ Optional for tooltips/popovers
import { initialTodos } from "@/data/app/todo/todoData.js";

// --- State ---
const todos = ref([...initialTodos]);
const showModal = ref(false);
const isEditing = ref(false);
const currentPage = ref(1);
const searchTerm = ref("");
const itemsPerPage = 8;

// --- Form Data ---
const formData = ref({
  id: null,
  task: "",
  priority: "",
  assign: "",
  date: "",
  notes: "",
  completed: false,
});

// --- Table Fields ---
const tableFields = [
  { key: "checkbox", label: "" },
  { key: "task", label: "Task" },
  { key: "priority", label: "Priority" },
  { key: "assign", label: "Assign" },
  { key: "date", label: "Date" },
  { key: "notes", label: "Notes" },
  { key: "edit", label: "Edit" },
  { key: "delete", label: "Delete" },
];

// --- Computed ---
const filteredTodos = computed(() => {
  if (!searchTerm.value) return todos.value;
  const lower = searchTerm.value.toLowerCase();
  return todos.value.filter(
      (t) =>
          t.task.toLowerCase().includes(lower) ||
          t.assign.toLowerCase().includes(lower) ||
          (t.notes && t.notes.toLowerCase().includes(lower)) ||
          t.priority.toLowerCase().includes(lower) ||
          t.date.toLowerCase().includes(lower)
  );
});

const totalPages = computed(() =>
    Math.ceil(filteredTodos.value.length / itemsPerPage)
);

const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredTodos.value.slice(start, end);
});


const toggleModal = () => (showModal.value = !showModal.value);

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
    todos.value.push({
      ...formData.value,
      id: Date.now(),
      priority: formData.value.priority || "Low",
    });
    toggleModal();
    resetForm();
    currentPage.value = Math.ceil(todos.value.length / itemsPerPage);
  }
};

const handleEdit = () => {
  const index = todos.value.findIndex((t) => t.id === formData.value.id);
  if (index !== -1) todos.value[index] = { ...formData.value };
  toggleModal();
  resetForm();
};

const handleDelete = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id);
  const newPage = Math.min(
      currentPage.value,
      Math.ceil(todos.value.length / itemsPerPage)
  );
  currentPage.value = newPage || 1;
};

const handleSearchChange = () => (currentPage.value = 1);

const handlePageChange = (page) => (currentPage.value = page);

const getPriorityVariant = (priority) =>
    ({ High: "success", Medium: "warning", Low: "danger" }[priority] ||
        "secondary");

// --- Watch ---
watch(filteredTodos, (newList) => {
  if (currentPage.value > Math.ceil(newList.length / itemsPerPage))
    currentPage.value = Math.ceil(newList.length / itemsPerPage) || 1;
});

// --- Optional Bootstrap JS Initialization (for tooltips, etc.) ---
onMounted(() => {
  const tooltipList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipList.forEach((el) => new bootstrap.Tooltip(el));
});

onBeforeUnmount(() => {
  document.querySelectorAll(".tooltip").forEach((el) => el.remove());
});
</script>

<template>
  <b-col xl="9">
    <b-card no-body>
      <b-card-body class="p-0">

        <!-- 🔍 Search + Add Button -->
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

          <b-button variant="primary" @click="openAddModal">
            Add
          </b-button>
        </div>

        <!-- ✅ Todo Table -->
        <b-table
            hover
            responsive
            class="table-bottom-border table-lg align-middle todo-table"
            :items="paginatedTodos"
            :fields="tableFields"
        >
          <!-- Checkbox -->
          <template #cell(checkbox)="row">
            <b-form-checkbox
                :id="`todo-${row.item.id}`"
                v-model="row.item.completed"
            />
          </template>

          <!-- Task -->
          <template #cell(task)="row">
            <span
                :class="{ 'text-decoration-line-through': row.item.completed }"
                class="fw-semibold"
            >
              {{ row.item.task }}
            </span>
          </template>

          <!-- Priority -->
          <template #cell(priority)="row">
            <b-badge
                :variant="getPriorityVariant(row.item.priority)"
                :class="{ 'opacity-50': row.item.completed }"
            >
              {{ row.item.priority }}
            </b-badge>
          </template>

          <!-- Assign -->
          <template #cell(assign)="row">
            <p class="txt-ellipsis-1 mb-0 fw-medium text-dark">
              {{ row.item.assign }}
            </p>
          </template>

          <!-- Date -->
          <template #cell(date)="row">
            <span class="text-success fw-semibold">{{ row.item.date }}</span>
          </template>

          <!-- Notes -->
          <template #cell(notes)="row">
            {{ row.item.notes }}
          </template>

          <!-- Edit -->
          <template #cell(edit)="row">
            <b-button
                variant="outline-success"
                size="sm"
                :disabled="row.item.completed"
                class="icon-btn"
                @click="openEditModal(row.item)"
            >
              <IconEdit :size="14" />
            </b-button>
          </template>

          <!-- Delete -->
          <template #cell(delete)="row">
            <b-button
                variant="outline-danger"
                size="sm"
                :disabled="row.item.completed"
                class="icon-btn"
                @click="handleDelete(row.item.id)"
            >
              <IconTrash :size="14" />
            </b-button>
          </template>
        </b-table>

        <!-- Pagination -->
        <div
            v-if="totalPages > 1"
            class="d-flex justify-content-between p-3 border-top flex-wrap"
        >
          <p class="fw-medium fs-6 me-3 mb-2">
            Page {{ currentPage }} of {{ totalPages }}
          </p>
          <b-pagination
              v-model="currentPage"
              :total-rows="filteredTodos.length"
              :per-page="itemsPerPage"
              class="app-pagination"
              @page-click="handlePageChange"
          />
        </div>

        <!-- Add / Edit Modal -->
        <b-modal
            v-model="showModal"
            :title="isEditing ? 'Edit Task' : 'Add Task'"
            @hidden="resetForm"
        >
          <b-form class="app-form">
            <b-form-group label="Task" class="mb-3">
              <b-form-input v-model="formData.task" required />
            </b-form-group>

            <b-form-group label="Assign" class="mb-3">
              <b-form-input v-model="formData.assign" required />
            </b-form-group>

            <b-form-group label="Date" class="mb-3">
              <b-form-input v-model="formData.date" type="date" required />
            </b-form-group>

            <b-form-group label="Notes" class="mb-3">
              <b-form-textarea v-model="formData.notes" />
            </b-form-group>

            <b-form-group label="Priority" class="mb-3">
              <b-form-select v-model="formData.priority">
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </b-form-select>
            </b-form-group>
          </b-form>

          <template #modal-footer>
            <b-button variant="secondary" @click="toggleModal">Cancel</b-button>
            <b-button
                :variant="isEditing ? 'success' : 'primary'"
                @click="isEditing ? handleEdit() : handleAdd()"
            >
              {{ isEditing ? 'Update' : 'Add' }}
            </b-button>
          </template>
        </b-modal>

      </b-card-body>
    </b-card>
  </b-col>
</template>


