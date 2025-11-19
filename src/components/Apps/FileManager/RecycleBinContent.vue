<script setup>
import { ref } from 'vue'
import { BCard, BDropdown, BDropdownItem } from "bootstrap-vue-next";
import {PhStar} from "@phosphor-icons/vue";
const deletedFolders = ref([
  {
    id: 1,
    name: 'My Work',
    icon: '../assets/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    isFavorite: false,
    type: 'folder'
  },
  {
    id: 4,
    name: 'Photoes',
    icon: '../assets/images/icons/file-manager-icon/folder.png',
    used: '25.67GB',
    total: '50GB',
    isFavorite: false,
    type: 'folder'
  }
])

const deletedFiles = ref([
  {
    id: 3,
    name: 'Product.docx',
    icon: '../assets/images/icons/file-manager-icon/file.png',
    isFavorite: false,
    type: 'file'
  }
])

const toggleFavorite = (id) => {
  const folder = deletedFolders.value.find(folder => folder.id === id)
  if (folder) {
    folder.isFavorite = !folder.isFavorite
  }
}

const toggleFileFavorite = (id) => {
  const file = deletedFiles.value.find(file => file.id === id)
  if (file) {
    file.isFavorite = !file.isFavorite
  }
}

const restoreItem = (item) => {
  if (item.type === 'folder') {
    deletedFolders.value = deletedFolders.value.filter(folder => folder.id !== item.id)
  } else {
    deletedFiles.value = deletedFiles.value.filter(file => file.id !== item.id)
  }
  emit('restore-item', item)
}

const permanentlyDelete = (item) => {
  if (item.type === 'folder') {
    deletedFolders.value = deletedFolders.value.filter(folder => folder.id !== item.id)
  } else {
    deletedFiles.value = deletedFiles.value.filter(file => file.id !== item.id)
  }
  emit('permanently-delete', item)
}

const emit = defineEmits(['restore-item', 'permanently-delete'])
</script>


<template>
  <b-card class="documents-sections">
    <template #header>
      <h5 class="mb-0">Deleted Files</h5>
    </template>
    <div class="row">
      <!-- Deleted Folders -->
      <div
          v-for="folder in deletedFolders"
          :key="folder.id"
          class="col-sm-6 col-xl-4 col-xxl-3"
      >
        <b-card>
          <template #body>
            <div class="folder-card">
              <div class="starreddiv" @click="toggleFavorite(folder.id)">
                <PhStar
                    :weight="folder.isFavorite ? 'fill' : 'regular'"
                    size="18"
                    class="text-warning"
                />
              </div>
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <i class="ti ti-dots-vertical"></i>
                </template>
                <b-dropdown-item @click="restoreItem(folder)">
                  <i class="ti ti-rotate-2 text-primary me-2"></i>Restore
                </b-dropdown-item>
                <b-dropdown-item @click="permanentlyDelete(folder)" variant="danger">
                  <i class="ti ti-trash text-danger me-2"></i>Delete Permanently
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

      <!-- Deleted Files -->
      <div
          v-for="file in deletedFiles"
          :key="file.id"
          class="col-sm-6 col-xl-4 col-xxl-3"
      >
        <b-card class="quick-access">
          <template #body>
            <div class="d-flex justify-content-between">
              <div class="starreddiv" @click="toggleFileFavorite(file.id)">
                <i :class="['f-s-18 fav-icon', file.isFavorite ? 'ph-fill ph-star text-warning' : 'ph-bold ph-star text-warning']"></i>
              </div>
              <b-dropdown variant="link" no-caret>
                <template #button-content>
                  <i class="ti ti-dots-vertical"></i>
                </template>
                <b-dropdown-item @click="restoreItem(file)">
                  <i class="ti ti-rotate-2 text-primary me-2"></i>Restore
                </b-dropdown-item>
                <b-dropdown-item @click="permanentlyDelete(file)" variant="danger">
                  <i class="ti ti-trash text-danger me-2"></i>Delete Permanently
                </b-dropdown-item>
              </b-dropdown>
            </div>
            <span class="d-block text-center mb-3">
              <img :src="file.icon" alt="" class="img-fluid">
            </span>
            <p class="text-center f-w-600 mb-0">{{ file.name }}</p>
          </template>
        </b-card>
      </div>
    </div>
  </b-card>
</template>

