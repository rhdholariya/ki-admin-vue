<script setup>
import { ref } from 'vue'
import {  BCard,BDropdown , BDropdownItem } from "bootstrap-vue-next";
import {
  PhStar,
  PhDotsThreeVertical,
  PhExport,
  PhPencil,
  PhTrash,
} from '@phosphor-icons/vue'
const starredItems = ref([
  {
    id: 1,
    name: '3d illustration pack',
    icon: '/images/icons/file-manager-icon/zip.png',
    type: 'file'
  }
])

const starredFolders = ref([
  {
    id: 2,
    name: 'Graduation',
    icon: '/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    type: 'folder'
  }
])

const toggleStarred = (id) => {
  const item = starredItems.value.find(item => item.id === id)
  if (item) {
    // Remove from starred
    starredItems.value = starredItems.value.filter(item => item.id !== id)
  }
}

const toggleStarredFolder = (id) => {
  const folder = starredFolders.value.find(folder => folder.id === id)
  if (folder) {
    // Remove from starred
    starredFolders.value = starredFolders.value.filter(folder => folder.id !== id)
  }
}

const viewItem = (item) => {
  console.log('View starred item:', item)
}

const editItem = (item) => {
  emit('edit-item', item)
}

const deleteItem = (item) => {
  emit('delete-item', item)
}

const viewFolder = (folder) => {
  console.log('View starred folder:', folder)
}

const editFolder = (folder) => {
  emit('edit-folder', folder)
}

const deleteFolder = (folder) => {
  emit('delete-folder', folder)
}

const emit = defineEmits(['edit-item', 'delete-item', 'edit-folder', 'delete-folder'])
</script>

<template>
  <b-card class="documents-section">
    <template #header>
      <h5 class="mb-0">Starred Documents & Files</h5>
    </template>
    <div class="row">
      <!-- Starred Quick Access Items -->
      <div
          v-for="item in starredItems"
          :key="item.id"
          class="col-sm-6 col-xl-4 col-xxl-3"
      >
        <b-card class="quick-access">
          <template #body>
            <div class="d-flex justify-content-between">
              <div class="starreddiv" @click="toggleStarred(item.id)">
                <i class="ph-star text-warning f-s-18 fav-icon ph-fill"></i>
              </div>
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <i class="ti ti-dots-vertical"></i>
                </template>
                <b-dropdown-item @click="viewItem(item)">
                  <i class="ti ti-file-export text-primary me-2"></i>View
                </b-dropdown-item>
                <b-dropdown-item @click="editItem(item)">
                  <i class="ti ti-edit text-success me-2"></i>Rename
                </b-dropdown-item>
                <b-dropdown-item @click="deleteItem(item)" variant="danger">
                  <i class="ti ti-trash text-danger me-2"></i>Delete
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <span class="d-block text-center mb-3">
              <img :src="item.icon" alt="" class="img-fluid">
            </span>
            <p class="text-center f-w-600 mb-0">{{ item.name }}</p>
          </template>
        </b-card>
      </div>

      <!-- Starred Folders -->
      <div
          v-for="folder in starredFolders"
          :key="folder.id"
          class="col-sm-6 col-xl-4 col-xxl-3"
      >
        <b-card>
          <template #body>
            <div class="folder-card">
              <div class="starreddiv" @click="toggleStarredFolder(folder.id)">
                <PhStar weight="fill" :size="18" class="text-warning fav-icon" />
              </div>
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <PhDotsThreeVertical :size="16" />
                </template>
                <b-dropdown-item @click="viewFolder(folder)">
                  <PhExport :size="16" class="text-primary me-2" />View
                </b-dropdown-item>
                <b-dropdown-item @click="editFolder(folder)">
                  <PhPencil :size="16" class="text-success me-2" />Rename
                </b-dropdown-item>
                <b-dropdown-item @click="deleteFolder(folder)" variant="danger">
                  <PhTrash :size="16" class="text-danger me-2" />Delete
                </b-dropdown-item>
              </b-dropdown>
              <div class="fileimage">
                <img :src="folder.icon" alt="" class="img-fluid">
                <p class="mb-0 f-s-16 text-center">{{ folder.name }}</p>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <p class="text-secondary mb-0 f-w-500">{{ folder.used }}</p>
                <p class="text-secondary mb-0 f-w-500 text-end">{{ folder.total }}</p>
              </div>
            </div>
          </template>
        </b-card>
      </div>
    </div>
  </b-card>
</template>

