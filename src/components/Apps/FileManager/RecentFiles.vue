<script setup>
import { ref, computed } from 'vue'
import { BButton , BCard,BForm, BModal , BFormInput , BFormGroup , BDropdown , BDropdownItem, BTable , BPagination } from "bootstrap-vue-next";
const showCreateFileModal = ref(false)
const newFileName = ref('')
const currentPage = ref(1)
const perPage = ref(6)
import {
  PhStar,
  PhDotsThreeVertical,
  PhExport,
  PhPencil,
  PhTrash
} from '@phosphor-icons/vue'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'totalItems', label: 'Total Items', class: 'text-success f-w-500' },
  { key: 'size', label: 'Size' },
  { key: 'lastModified', label: 'Last Modified', class: 'text-danger f-w-500' },
  { key: 'actions', label: 'Actions' }
]

const recentFiles = ref([
  {
    id: 1,
    name: 'Monthly Report july',
    icon: '/images/icons/file-manager-icon/file.png',
    totalItems: 17,
    size: '120MB',
    lastModified: '21 May,2024',
    isFavorite: true
  },
  {
    id: 2,
    name: 'Thesis-Brain McKnight',
    icon: '/images/icons/file-manager-icon/pdf.png',
    totalItems: 15,
    size: '25MB',
    lastModified: '10 july,2024',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Campaign Plan Q4-2020',
    icon: '/images/icons/file-manager-icon/folder.png',
    totalItems: 1,
    size: '24MB',
    lastModified: '2 jan,2024',
    isFavorite: true
  },
  {
    id: 4,
    name: 'Quick CV & Portfolio',
    icon: '/images/icons/file-manager-icon/music.png',
    totalItems: 10,
    size: '209MB',
    lastModified: '15 march,2024',
    isFavorite: false
  },
  {
    id: 5,
    name: 'Wireframes Project A',
    icon: '/images/icons/file-manager-icon/zip.png',
    totalItems: 8,
    size: '100MB',
    lastModified: '11 may,2024',
    isFavorite: true
  },
  {
    id: 6,
    name: 'Campaign plan Q4-2021',
    icon: '/images/icons/file-manager-icon/gallery.png',
    totalItems: 3,
    size: '103MB',
    lastModified: '2 May,2024',
    isFavorite: false
  }
])

const createFile = () => {
  if (newFileName.value.trim()) {
    const newFile = {
      id: Date.now(),
      name: newFileName.value,
      icon: '/images/icons/file-manager-icon/file.png',
      totalItems: Math.floor(Math.random() * 20) + 1,
      size: `${Math.floor(Math.random() * 200) + 1}MB`,
      lastModified: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      isFavorite: false
    }
    recentFiles.value.unshift(newFile)
    newFileName.value = ''
    showCreateFileModal.value = false
  }
}

const toggleFileFavorite = (id) => {
  const file = recentFiles.value.find(file => file.id === id)
  if (file) {
    file.isFavorite = !file.isFavorite
  }
}

const viewFile = (file) => {
  console.log('View file:', file)
}

const editFile = (file) => {
  emit('edit-file', file)
}

const deleteFile = (file) => {
  const index = recentFiles.value.findIndex(f => f.id === file.id)
  if (index > -1) {
    recentFiles.value.splice(index, 1)
  }
}

const emit = defineEmits(['edit-file'])
</script>
<template>
  <b-card class="h-100">
    <template #header>
      <div class="d-flex gap-2 justify-content-between flex-sm-row flex-column">
        <h5 class="mb-0">Recent Added</h5>
        <b-button variant="primary" @click="showCreateFileModal = true">
          Create File
        </b-button>
      </div>
    </template>

    <b-table
        :items="recentFiles"
        :fields="fields"
        class="recent-table"
        responsive
        show-empty
    >
      <template #cell(name)="data">
        <div class="d-flex align-items-center">
          <img :src="data.item.icon" alt="" class="w-20 h-20">
          <span class="ms-2 table-text">{{ data.item.name }}</span>
        </div>
      </template>

      <template #cell(actions)="data">
        <div class="d-flex">
          <b-dropdown variant="link" no-caret>
            <template #button-content>
              <PhDotsThreeVertical :size="16" />
            </template>
            <b-dropdown-item @click="viewFile(data.item)">
              <PhExport :size="16" class="text-primary me-2" />View
            </b-dropdown-item>
            <b-dropdown-item @click="editFile(data.item)">
              <PhPencil :size="16" class="text-success me-2" />Rename
            </b-dropdown-item>
            <b-dropdown-item @click="deleteFile(data.item)" variant="danger">
              <PhTrash :size="16" class="text-danger me-2" />Delete
            </b-dropdown-item>
          </b-dropdown>
          <div class="starreddiv ms-3" @click="toggleFileFavorite(data.item.id)">
            <PhStar
                :weight="data.item.isFavorite ? 'fill' : 'regular'"
                :size="18"
                class="text-warning star-icon"
            />
          </div>
        </div>
      </template>
    </b-table>

    <template #footer>
      <div class="seller-table-footer d-flex gap-2 justify-content-between align-items-center">
        <p class="text-secondary text-truncate">Showing 1 to {{ recentFiles.length }} of {{ recentFiles.length }} entries</p>
        <b-pagination
            v-model="currentPage"
            :total-rows="recentFiles.length"
            :per-page="perPage"
            size="sm"
        ></b-pagination>
      </div>
    </template>
  </b-card>

  <!-- Create File Modal -->
  <b-modal
      v-model="showCreateFileModal"
      title="New File"
      centered
      class="file-modal"
      @hidden="resetForm"
  >
    <template #default>
      <b-form @submit.prevent="createFile">
        <b-form-group label="File Name" class="mb-0">
          <b-form-input
              v-model="newFileName"
              placeholder="Enter file name"
              required
              size="lg"
              class="file-input"
              autofocus
          ></b-form-input>
        </b-form-group>
      </b-form>
    </template>

    <template #footer>
      <div class="w-100 d-flex justify-content-end gap-3">
        <b-button
            variant="outline-secondary"
            @click="showCreateFileModal = false"
            class="px-4"
        >
          Cancel
        </b-button>
        <b-button
            variant="primary"
            @click="createFile"
            class="px-4"
            :disabled="!newFileName.trim()"
        >
          OK
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

