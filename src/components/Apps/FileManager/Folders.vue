<script setup>
import {ref} from 'vue'
import {
  BButton,
  BCard,
  BForm,
  BModal,
  BFormInput,
  BFormGroup,
  BDropdown,
  BDropdownItem,
  BCardHeader,
  BCardBody,
  BRow
} from 'bootstrap-vue-next'

import {
  PhStar,
  PhDotsThreeVertical,
  PhEye,
  PhPencil,
  PhTrash
} from '@phosphor-icons/vue'

// reactive states
const showCreateFolderModal = ref(false)
const newFolderName = ref('')

// folder data
const folders = ref([
  {
    id: 1,
    name: 'My Work',
    icon: '/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    isFavorite: true
  },
  {
    id: 2,
    name: 'Graduation',
    icon: '/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Company',
    icon: '/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    isFavorite: true
  },
  {
    id: 4,
    name: 'Photos',
    icon: '/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    isFavorite: false
  }
])

// emits
const emit = defineEmits(['edit-folder', 'delete-folder', 'view-folder'])

// toggle favorite
const toggleFolderFavorite = (id) => {
  const folder = folders.value.find(f => f.id === id)
  if (folder) folder.isFavorite = !folder.isFavorite
}

// create folder
const createFolder = () => {
  const name = (newFolderName.value || '').trim()
  if (name) {
    const newFolder = {
      id: Date.now(),
      name,
      icon: '/images/icons/file-manager-icon/folder.png',
      used: '0GB',
      total: '50GB',
      isFavorite: false
    }
    folders.value.unshift(newFolder)
    newFolderName.value = ''
    showCreateFolderModal.value = false
  }
}

// reset modal input when closed
const resetForm = () => {
  newFolderName.value = ''
}

// folder actions
const editFolder = (folder) => emit('edit-folder', folder)
const deleteFolder = (folder) => emit('delete-folder', folder)
const viewFolder = (folder) => emit('view-folder', folder)
</script>

<template>
  <b-card no-body>
    <!-- Header -->
    <b-card-header>
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="mb-0">Folders</h5>
        <b-button variant="primary" @click="showCreateFolderModal = true">
          Create Folder
        </b-button>
      </div>
    </b-card-header>

    <!-- Body -->
    <b-card-body>
      <b-row>
        <div
            v-for="folder in folders"
            :key="folder.id"
            class="col-sm-6 col-xl-4 col-xxl-3 mb-3"
        >
       <b-card no-body class="quick-access h-100">
    <b-card-body>
            <!-- Top Actions -->
            <div class="d-flex justify-content-between mb-3">
              <!-- Star -->
              <div class="starreddiv" @click.stop="toggleFolderFavorite(folder.id)">
                <PhStar
                    :weight="folder.isFavorite ? 'fill' : 'regular'"
                    :size="18"
                    class="text-warning fav-icon"
                />
              </div>

              <!-- Dropdown -->
              <b-dropdown variant="link" no-caret right>
                <template #button-content>
                  <PhDotsThreeVertical :size="16" class="text-muted"/>
                </template>
                <b-dropdown-item @click="viewFolder(folder)">
                  <PhEye :size="16" class="me-2"/>
                  <span>View</span>
                </b-dropdown-item>
                <b-dropdown-item @click="editFolder(folder)">
                  <PhPencil :size="16" class="me-2"/>
                  <span>Rename</span>
                </b-dropdown-item>
                <b-dropdown-item @click="deleteFolder(folder)">
                  <PhTrash :size="16" class="me-2"/>
                  <span>Delete</span>
                </b-dropdown-item>
              </b-dropdown>

            </div>

            <!-- Folder Content -->
            <div class="fileimage text-center">
              <img
                  :src="folder.icon"
                  alt="folder icon"
                  class="img-fluid mb-2"
                  style="max-height: 60px;"
              />
              <p class="mb-0 f-s-16 text-center">{{ folder.name }}</p>
            </div>

            <!-- Storage Info -->
            <div class="d-flex justify-content-between mt-2">
              <p class="text-secondary mb-0 f-w-500">{{ folder.used }}</p>
              <p class="text-secondary mb-0 f-w-500 text-end">{{ folder.total }}</p>
            </div>
    </b-card-body>
       </b-card>

          </div>

      </b-row>
    </b-card-body>
  </b-card>

  <!-- Create Folder Modal -->
  <b-modal
      v-model="showCreateFolderModal"
      title="New Folder"
      centered
      @hidden="resetForm"
  >
    <b-form @submit.prevent="createFolder">
      <b-form-group label="Folder Name" class="mb-0">
        <b-form-input
            v-model="newFolderName"
            placeholder="Enter folder name"
            required
            size="lg"
            autofocus
        />
      </b-form-group>
    </b-form>

    <template #footer>
      <div class="w-100 d-flex justify-content-end gap-3">
        <b-button variant="outline-secondary" @click="showCreateFolderModal = false" class="px-4">
          Cancel
        </b-button>
        <b-button variant="primary" @click="createFolder" class="px-4" :disabled="!newFolderName.trim()">
          OK
        </b-button>
      </div>
    </template>
  </b-modal>
</template>
