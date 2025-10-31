<script setup>
import { ref } from 'vue'
import {
  BCard,
  BDropdown,
  BDropdownItem,
  BCardHeader,
  BCardBody
} from 'bootstrap-vue-next'

import {
  PhStar,
  PhDotsThreeVertical,
  PhEye,
  PhPencil,
  PhTrash
} from '@phosphor-icons/vue'


const emit = defineEmits(['edit-item', 'delete-item', 'toggle-favorite', 'move-to-recycle', 'view-item'])


const quickAccessItems = ref([
  { id: 1, name: '3D illustration pack', icon: '/images/icons/file-manager-icon/zip.png', isFavorite: true },
  { id: 2, name: 'Thinking type.pdf', icon: '/images/icons/file-manager-icon/pdf.png', isFavorite: true },
  { id: 3, name: 'Product.docx', icon: '/images/icons/file-manager-icon/file.png', isFavorite: true },
  { id: 4, name: 'Images/file folder', icon: '/images/icons/file-manager-icon/gallery.png', isFavorite: true }
])


const toggleFavorite = (id) => {
  const item = quickAccessItems.value.find(i => i.id === id)
  if (item) {
    item.isFavorite = !item.isFavorite
    emit('toggle-favorite', { ...item }, item.isFavorite)
  }
}


const viewItem = (item) => {
  emit('view-item', item)
}


const editItem = (item) => {
  emit('edit-item', item)
}


const deleteItem = (item) => {
  const index = quickAccessItems.value.findIndex(i => i.id === item.id)
  if (index !== -1) {
    quickAccessItems.value.splice(index, 1)
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
      <div class="row g-3">
        <div
            v-for="item in quickAccessItems"
            :key="item.id"
            class="col-sm-6 col-xl-4 col-xxl-3"
        >
          <b-card no-body class="quick-access h-100">
            <b-card-body>
              <!-- Top Controls -->
              <div class="d-flex justify-content-between mb-3">
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
                    <span>View</span>
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

              <!-- Icon + Label -->
              <div class="text-center">
                <img :src="item.icon" alt="" class="img-fluid mb-2" style="max-height: 60px;">
                <p class="text-center f-w-600 mb-0">{{ item.name }}</p>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>
