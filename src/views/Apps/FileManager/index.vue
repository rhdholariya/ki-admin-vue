<template>
  <AppLayout>
    <main>
  <div class="file-manager">
    <div class="row">
      <!-- Sidebar -->
      <Sidebar @tab-change="handleTabChange" />

      <!-- Main Content -->
      <div class="col-lg-8 col-xxl-9">
        <div class="content-wrapper">
          <!-- Tab 1: My Cloud -->
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

          <!-- Tab 2: Starred -->
          <div v-if="activeTab === 2" class="tabs-content">
            <StarredContent
                :starred-items="starredItems"
                @edit-item="handleEditItem"
                @delete-item="handleDeleteItem"
                @toggle-favorite="handleToggleFavorite"
                @move-to-recycle="handleMoveToRecycle"
            />
          </div>

          <!-- Tab 3: Recycle Bin -->
          <div v-if="activeTab === 3" class="tabs-content">
            <RecycleBinContent
                :recycled-items="recycledItems"
                @restore-item="handleRestoreItem"
                @permanently-delete="handlePermanentlyDelete"
            />
          </div>

          <!-- Tab 4: Recent -->
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
    </div>

    <!-- Modals -->
    <Modals
        ref="modalsRef"
        @rename-confirmed="handleRenameConfirmed"
    />
  </div>
    </main>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/Apps/FileManager/FileSidebar.vue'
import QuickAccess from '@/components/Apps/FileManager/QuickAccess.vue'
import Folders from '@/components/Apps/FileManager/Folders.vue'
import RecentFiles from '@/components/Apps/FileManager/RecentFiles.vue'
import Modals from '@/components/Apps/FileManager/Modals.vue'
import StarredContent from '@/components/Apps/FileManager/StarredContent.vue'
import RecycleBinContent from '@/components/Apps/FileManager/RecycleBinContent.vue'
import RecentContent from '@/components/Apps/FileManager/RecentContent.vue'
import AppLayout from "@/views/AppLayout.vue";

const activeTab = ref(1)
const modalsRef = ref(null)

// Shared data stores
const starredItems = ref([])
const recycledItems = ref([])

const handleToggleFavorite = (item, isFavorite) => {
  if (isFavorite) {
    // Add to starred if not already there
    if (!starredItems.value.find(starred => starred.id === item.id)) {
      starredItems.value.push({ ...item, isFavorite: true })
    }
  } else {
    // Remove from starred
    starredItems.value = starredItems.value.filter(starred => starred.id !== item.id)
  }
}

const handleMoveToRecycle = (item) => {
  // Add to recycle bin
  recycledItems.value.push({
    ...item,
    deletedAt: new Date().toISOString(),
    originalLocation: 'quick-access' // or 'folders', 'recent', etc.
  })
}

const handleRestoreItem = (item) => {
  // Remove from recycle bin
  recycledItems.value = recycledItems.value.filter(recycled => recycled.id !== item.id)
  // Logic to restore to original location would go here
}

const handlePermanentlyDelete = (item) => {
  // Remove from recycle bin permanently
  recycledItems.value = recycledItems.value.filter(recycled => recycled.id !== item.id)
}

// Other existing handlers...
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
</script>