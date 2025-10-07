<script setup>
import { ref } from 'vue'
import { BCard, BDropdown, BDropdownItem, BCardHeader, BCardBody } from "bootstrap-vue-next";
import {
  PhStar,
  PhDotsThreeVertical,
  PhEye,
  PhPencil,
  PhTrash,
} from '@phosphor-icons/vue'

// Emit events for parent component to handle
const emit = defineEmits(['edit-item', 'delete-item', 'toggle-favorite', 'move-to-recycle'])

const quickAccessItems = ref([
  {
    id: 1,
    name: '3d illustration pack',
    icon: '/images/icons/file-manager-icon/zip.png',
    isFavorite: true
  },
  {
    id: 2,
    name: 'Thinking type.pdf',
    icon: '/images/icons/file-manager-icon/pdf.png',
    isFavorite: true
  },
  {
    id: 3,
    name: 'Product.docx',
    icon: '/images/icons/file-manager-icon/file.png',
    isFavorite: true
  },
  {
    id: 4,
    name: 'Images/file folder',
    icon: '/images/icons/file-manager-icon/gallery.png',
    isFavorite: true
  }
])

const toggleFavorite = (id) => {
  const item = quickAccessItems.value.find(item => item.id === id)
  if (item) {
    item.isFavorite = !item.isFavorite
    // Emit event to parent with item and new favorite status
    emit('toggle-favorite', { ...item }, item.isFavorite)
  }
}

const viewItem = (item) => {
  console.log('View item:', item)
}

const editItem = (item) => {
  emit('edit-item', item)
}

const deleteItem = (item) => {
  // Remove from quick access
  const index = quickAccessItems.value.findIndex(i => i.id === item.id)
  if (index > -1) {
    quickAccessItems.value.splice(index, 1)
    // Emit event to parent to move to recycle bin
    emit('move-to-recycle', { ...item })
  }
}
</script>

<template>
  <b-card no-body>
    <b-card-header>
      <h5 class="mb-0">Quick Access</h5>
    </b-card-header>
    <b-card-body>
      <div class="row">
        <div
            v-for="item in quickAccessItems"
            :key="item.id"
            class="col-sm-6 col-xl-4 col-xxl-3"
        >
          <b-card class="quick-access" no-body>
            <b-card-body>
              <div class="d-flex justify-content-between">
                <div class="starreddiv" @click.stop="toggleFavorite(item.id)">
                  <PhStar
                      :weight="item.isFavorite ? 'fill' : 'regular'"
                      :size="18"
                      class="text-warning fav-icon"
                  />
                </div>
                <b-dropdown variant="link" no-caret right class="custom-dropdown">
                  <template #button-content>
                    <PhDotsThreeVertical :size="16" class="text-muted" />
                  </template>
                  <b-dropdown-item @click="viewItem(item)" class="dropdown-item-custom">
                    <PhEye :size="16" class="me-2" />
                    <span>view</span>
                  </b-dropdown-item>
                  <b-dropdown-item @click="editItem(item)" class="dropdown-item-custom">
                    <PhPencil :size="16" class="me-2" />
                    <span>Rename</span>
                  </b-dropdown-item>
                  <b-dropdown-item @click="deleteItem(item)" class="dropdown-item-custom">
                    <PhTrash :size="16" class="me-2" />
                    <span>Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
              </div>
              <span class="d-block text-center mb-3">
                <img :src="item.icon" alt="" class="img-fluid">
              </span>
              <p class="text-center f-w-600 mb-0">{{ item.name }}</p>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>