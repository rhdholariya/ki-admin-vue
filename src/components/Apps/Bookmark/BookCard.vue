<template>
  <div class="col-sm-6 col-xxl-4">
    <BCard class="book-mark-card">
      <div class="card-body">
        <div class="draggable-card-img">
          <img :src="bookmark.image" alt="" class="img-fluid">
          <div class="video-transparent-box"></div>
          <div class="draggable-card-icon">
            <div class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 heartBtn mb-2"
                 @click="$emit('toggle-favorite', bookmark.id)">
              <PhHeart :weight="bookmark.isFavorite ? 'fill' : 'bold'" class="f-s-18 text-danger hearticon" />
            </div>
            <BDropdown variant="white" class="h-35 w-35 d-flex-center b-r-50 me-3 shareBtn mb-2" no-caret>
              <template #button-content>
                <PhShareNetwork :weight="bookmark.isShared ? 'fill' : 'bold'" class="f-s-18 text-primary shareicon" />
              </template>
              <BDropdownItem @click="$emit('toggle-share', bookmark.id)">
                <div class="d-flex justify-content-around">
                  <PhWhatsappLogo class="f-s-20 text-primary" />
                  <PhInstagramLogo class="f-s-20 text-success" />
                  <PhFacebookLogo class="f-s-20 text-info" />
                  <PhMessengerLogo class="f-s-20 text-danger" />
                </div>
              </BDropdownItem>
            </BDropdown>
            <div class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 importantBtn mb-2"
                 @click="$emit('toggle-important', bookmark.id)">
              <PhStar :weight="bookmark.isImportant ? 'fill' : 'bold'" class="f-s-18 text-warning staricon" />
            </div>
          </div>
          <BDropdown class="action-icon" variant="link" no-caret>
            <template #button-content>
              <PhDotsThreeVertical class="text-white f-s-18" />
            </template>
            <BDropdownItem href="#" @click.prevent="handleEdit">
              <PhPencil class="text-success me-2" />
              Edit
            </BDropdownItem>
            <BDropdownItem href="#" @click.prevent="handleDelete">
              <PhTrash class="text-danger me-2" />
              Delete
            </BDropdownItem>
          </BDropdown>
        </div>
        <div class="draggable-card-content pt-4">
          <h5 class="mb-2 f-w-500">{{ bookmark.title }}</h5>
          <p class="f-s-16 text-secondary">{{ bookmark.url }}</p>
        </div>
      </div>
    </BCard>
  </div>
</template>

<script setup>
import { BCard, BDropdown, BDropdownItem } from 'bootstrap-vue-next'
import {
  PhHeart,
  PhShareNetwork,
  PhStar,
  PhDotsThreeVertical,
  PhPencil,
  PhTrash,
  PhWhatsappLogo,
  PhInstagramLogo,
  PhFacebookLogo,
  PhMessengerLogo
} from '@phosphor-icons/vue'

const props = defineProps({
  bookmark: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-favorite', 'toggle-share', 'toggle-important', 'delete', 'restore'])

const handleEdit = () => {
  // Handle edit logic here
  console.log('Edit bookmark:', props.bookmark.id)
}

const handleDelete = () => {
  emit('delete', props.bookmark.id)
}
</script>
