<script setup>
import {computed, ref} from 'vue'
import {BContainer, BRow} from 'bootstrap-vue-next'
import Sidebar from '@/components/Apps/FileManager/FileSidebar.vue'
import QuickAccess from '@/components/Apps/FileManager/QuickAccess.vue'
import Folders from '@/components/Apps/FileManager/Folders.vue'
import RecentFiles from '@/components/Apps/FileManager/RecentFiles.vue'
import Modals from '@/components/Apps/FileManager/Modals.vue'
import StarredContent from '@/components/Apps/FileManager/StarredContent.vue'
import RecycleBinContent from '@/components/Apps/FileManager/RecycleBinContent.vue'
import RecentContent from '@/components/Apps/FileManager/RecentContent.vue'
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

const activeTab = ref(1)
const modalsRef = ref(null)

const starredItems = ref([])
const recycledItems = ref([])

const handleToggleFavorite = (item, isFavorite) => {
  if (isFavorite) {
    if (!starredItems.value.find(starred => starred.id === item.id)) {
      starredItems.value.push({ ...item, isFavorite: true })
    }
  } else {
    starredItems.value = starredItems.value.filter(starred => starred.id !== item.id)
  }
}

const handleMoveToRecycle = (item) => {
  recycledItems.value.push({
    ...item,
    deletedAt: new Date().toISOString(),
    originalLocation: 'quick-access' // or 'folders', 'recent', etc.
  })
}

const handleRestoreItem = (item) => {
  recycledItems.value = recycledItems.value.filter(recycled => recycled.id !== item.id)
}

const handlePermanentlyDelete = (item) => {
  recycledItems.value = recycledItems.value.filter(recycled => recycled.id !== item.id)
}

const handleTabChange = (tabId) => {
  activeTab.value = tabId
}

const handleEditItem = (item) => {
  modalsRef.value.openRenameModal(item, item.name)
}

const handleDeleteItem = (item) => {
  modalsRef.value.openDeleteModal(item, (itemToDelete) => {
    handleMoveToRecycle(itemToDelete)
  })
}

const handleEditFolder = (folder) => {
  modalsRef.value.openRenameModal(folder, folder.name)
}

const handleDeleteFolder = (folder) => {
  modalsRef.value.openDeleteModal(folder, (folderToDelete) => {
    handleMoveToRecycle(folderToDelete)
  })
}

const handleEditFile = (file) => {
  modalsRef.value.openRenameModal(file, file.name)
}

const handleDeleteFile = (file) => {
  modalsRef.value.openDeleteModal(file, (fileToDelete) => {
    handleMoveToRecycle(fileToDelete)
  })
}

const handleRenameConfirmed = (item, newName) => {
  item.name = newName
}

const breadcrumbItems = computed(() => ({
    title: "File Manager",
    items: [
        { label: "Apps", icon: PhStack },
        { label: "File Manager", active: true }
    ],
}));
</script>


<template>
  <AppLayout>
    <main>
        <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
  <div class="file-manager">
    <b-row>
      <Sidebar @tab-change="handleTabChange" />
      <div class="col-lg-8 col-xxl-9">
        <div class="content-wrapper">
          <div v-if="activeTab === 1" class="tabs-content active">
            <QuickAccess
                @edit-item="handleEditItem"
                @delete-item="handleDeleteItem"
                @toggle-favorite="handleToggleFavorite"
                @move-to-recycle="handleMoveToRecycle"
            />

            <Folders
                @edit-folder="handleEditFolder"
                @delete-folder="handleDeleteFolder"
                @toggle-favorite="handleToggleFavorite"
                @move-to-recycle="handleMoveToRecycle"
            />

            <RecentFiles
                @edit-file="handleEditFile"
                @delete-file="handleDeleteFile"
                @toggle-favorite="handleToggleFavorite"
                @move-to-recycle="handleMoveToRecycle"
            />
          </div>

          <div v-if="activeTab === 2" class="tabs-content">
            <StarredContent
                :starred-items="starredItems"
                @edit-item="handleEditItem"
                @delete-item="handleDeleteItem"
                @toggle-favorite="handleToggleFavorite"
                @move-to-recycle="handleMoveToRecycle"
            />
          </div>

          <div v-if="activeTab === 3" class="tabs-content">
            <RecycleBinContent
                :recycled-items="recycledItems"
                @restore-item="handleRestoreItem"
                @permanently-delete="handlePermanentlyDelete"
            />
          </div>

          <div v-if="activeTab === 4" class="tabs-content">
            <RecentContent
                @edit-file="handleEditFile"
                @delete-file="handleDeleteFile"
                @toggle-favorite="handleToggleFavorite"
                @move-to-recycle="handleMoveToRecycle"
            />
          </div>
        </div>
      </div>
    </b-row>

    <Modals
        ref="modalsRef"
        @rename-confirmed="handleRenameConfirmed"
    />
  </div>
        </b-container>
    </main>
  </AppLayout>
</template>

