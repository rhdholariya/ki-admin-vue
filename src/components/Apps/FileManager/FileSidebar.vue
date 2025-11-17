<script setup>
import { ref, onMounted } from 'vue'
import { BCard, BProgress } from 'bootstrap-vue-next'
import {
  PhFolder, PhStar, PhTrash, PhClock, PhShare, PhQuestion, PhGear, PhImage, PhVideo, PhFileZip, PhFiles
} from '@phosphor-icons/vue'

const activeTab = ref(1)
const emit = defineEmits(['tab-change'])

const changeTab = (tabId) => {
  activeTab.value = tabId
  emit('tab-change', tabId)
}

const polarChart = ref(null)

onMounted(() => {

})

const tabs = [
  { id: 1, name: 'My Cloud', iconComponent: PhFolder, count: 10 },
  { id: 2, name: 'Starred', iconComponent: PhStar },
  { id: 3, name: 'Recycle Bin', iconComponent: PhTrash, count: 2 },
  { id: 4, name: 'Recent', iconComponent: PhClock }
]

const menuItems = [
  { name: 'Shared File', iconComponent: PhShare },
  { name: 'Help', iconComponent: PhQuestion },
  { name: 'Settings', iconComponent: PhGear }
]

const overviewItems = [
  { type: 'Images', files: '1.195 Files', size: '37.2GB', iconComponent: PhImage, colorClass: 'text-light-primary' },
  { type: 'Videos', files: '53 Files', size: '19.1 GB', iconComponent: PhVideo, colorClass: 'text-light-success' },
  { type: 'Documents', files: '486 Files', size: '23.5 MB', iconComponent: PhFileZip, colorClass: 'text-light-danger' },
  { type: 'Others', files: '32 Files', size: '13 MB', iconComponent: PhFiles, colorClass: 'text-light-warning' }
]

const uploads = [
  { title: 'Uploading 59 photos', name: 'Photoes 01', percentage: 65 },
  { title: 'Uploading 7 videos', name: 'Museum', percentage: 25 },
  { title: 'Uploading 12 Documents', name: 'My Work', percentage: 90 }
]
</script>

<template>
  <div class="col-lg-4 col-xxl-3">
    <b-card class="mb-3">
      <template #header><h5 class="mb-0">My Drive</h5></template>
      <div class="horizontal-tab-wrapper">
        <ul class="filemenu-list mt-3 tabs">
          <li
              v-for="tab in tabs"
              :key="tab.id"
              :class="['tab-link', { active: activeTab === tab.id }]"
              @click="changeTab(tab.id)"
          >
            <component :is="tab.iconComponent" :size="20" weight="fill" class="pe-2" />
            <span class="flex-grow-1">{{ tab.name }}</span>
            <span v-if="tab.count">{{ tab.count }}+</span>
          </li>
          <li class="app-divider-v dashed m-0 p-2"></li>
          <li v-for="item in menuItems" :key="item.name">
            <component :is="item.iconComponent" :size="20" class="pe-2" />
            <span class="flex-grow-1">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </b-card>

    <b-card class="mb-3">
      <template #header><h5 class="mb-0">Overview</h5></template>
      <div class="mb-3">
        <div ref="polarChart"></div>
      </div>
      <div
          v-for="item in overviewItems"
          :key="item.type"
          class="file-manager-sidebar mb-4"
      >
        <div class="d-flex align-items-center position-relative">
          <span :class="['h-40 w-40 d-flex-center b-r-10 position-absolute', item.colorClass]">
            <component :is="item.iconComponent" :size="20" />
          </span>
          <div class="flex-grow-1 ms-5">
            <h6 class="mb-0">{{ item.type }}</h6>
            <p class="text-secondary mb-0">{{ item.files }}</p>
          </div>
          <p class="text-secondary f-w-500 mb-0">{{ item.size }}</p>
        </div>
      </div>
    </b-card>

    <b-card>
      <template #header><h5 class="mb-0">File Upload</h5></template>
      <div v-for="upload in uploads" :key="upload.name" class="mb-4">
        <h6 class="mb-1 text-dark">{{ upload.title }}</h6>
        <div>
          <div class="d-flex justify-content-between">
            <p class="text-secondary">{{ upload.name }}</p>
            <span class="text-primary">{{ upload.percentage }}%</span>
          </div>
          <b-progress :value="upload.percentage" height="5px" variant="primary"></b-progress>
        </div>
      </div>
    </b-card>
  </div>
</template>


