<script setup>
import { ref } from 'vue'
import { BCard, BTable, BPagination, BDropdown, BDropdownItem ,BCardHeader } from "bootstrap-vue-next";
import {PhDotsThreeVertical, PhEye, PhPencil, PhTrash} from "@phosphor-icons/vue";
const currentPage = ref(1)
const perPage = ref(3)

const fields = [
  { key: 'name', label: 'Name' },
  { key: 'totalItems', label: 'Total Items', class: 'text-success f-w-500' },
  { key: 'size', label: 'Size' },
  { key: 'lastModified', label: 'Last Modified', class: 'text-danger f-w-500' },
  { key: 'actions', label: 'Actions' }
]

const recentItems = ref([
  {
    id: 1,
    name: 'Quick CV & Portfolio',
    icon: '/images/icons/file-manager-icon/music.png',
    totalItems: 10,
    size: '209MB',
    lastModified: '15 march,2024',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Thesis-Brain McKnight',
    icon: '/images/icons/file-manager-icon/pdf.png',
    totalItems: 15,
    size: '25MB',
    lastModified: '10 july,2024',
    isFavorite: true
  },
  {
    id: 3,
    name: 'Campaign plan Q4-2021',
    icon: '/images/icons/file-manager-icon/gallery.png',
    totalItems: 3,
    size: '103MB',
    lastModified: '2 May,2024',
    isFavorite: false
  }
])

const toggleFavorite = (id) => {
  const item = recentItems.value.find(item => item.id === id)
  if (item) {
    item.isFavorite = !item.isFavorite
  }
}

const viewItem = (item) => {
  emit('view-item', item)
}

const editItem = (item) => {
  emit('edit-item', item)
}

const deleteItem = (item) => {
  const index = recentItems.value.findIndex(i => i.id === item.id)
  if (index > -1) {
    recentItems.value.splice(index, 1)
  }
}

const emit = defineEmits(['edit-item'])
</script>

<template>
  <b-card no-body>
    <b-card-header>
      <h5 class="mb-0">Recent Added</h5>
    </b-card-header>
    <div class="table-responsive">
    <b-table
        :items="recentItems"
        :fields="fields"
        responsive
        show-empty
        class="table table-striped table-hover align-middle mb-0"
        thead-class="table-light"
        tbody-class="bg-white"
    >
      <template #cell(name)="data">
        <div class="d-flex align-items-center">
          <img :src="data.item.icon" alt="" class="w-20 h-20">
          <span class="ms-2 table-text">{{ data.item.name }}</span>
        </div>
      </template>

      <template #cell(actions)="data">
        <div class="d-flex">
          <b-dropdown variant="link" no-caret toggle-class="p-0">
            <template #button-content>
              <PhDotsThreeVertical :size="16" class="text-muted" />
            </template>

            <b-dropdown-item @click="viewItem(data.item)">
              <PhEye :size="16" class="me-2" />View
            </b-dropdown-item>

            <b-dropdown-item @click="editItem(data.item)">
              <PhPencil :size="16" class="me-2" />Rename
            </b-dropdown-item>

            <b-dropdown-item @click="deleteItem(data.item)" variant="danger">
              <PhTrash :size="16" class="me-2" />Delete
            </b-dropdown-item>
          </b-dropdown>

          <div class="starreddiv ms-3" @click="toggleFavorite(data.item.id)">
            <i :class="['f-s-18 star-icon', data.item.isFavorite ? 'ph-fill ph-star text-warning' : 'ph-bold ph-star text-warning']"></i>
          </div>
        </div>
      </template>
    </b-table>
    </div>
    <template #footer>
      <div class="seller-table-footer d-flex gap-2 justify-content-between align-items-center">
        <p class="text-secondary text-truncate">Showing 1 to {{ recentItems.length }} of {{ recentItems.length }} entries</p>
        <b-pagination
            v-model="currentPage"
            :total-rows="recentItems.length"
            :per-page="perPage"
            size="sm"
        ></b-pagination>
      </div>
    </template>
  </b-card>
</template>

