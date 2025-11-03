<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue-next";

import {
  PhDotsThreeVertical,
  PhFacebookLogo,
  PhHeart,
  PhInstagramLogo,
  PhMessengerLogo,
  PhPenNib,
  PhShareNetwork,
  PhStar,
  PhTrash,
  PhWhatsappLogo,
} from "@phosphor-icons/vue";

// Props
const props = defineProps({
  bookmark: {
    type: Object,
    required: true,
  },
});

// Emits (Vue-native event system)
const emit = defineEmits([
  "delete",
  "favourite-toggle",
  "share-toggle",
  "star-toggle",
  "edit",
]);

// Tooltip reactive state
const showTooltip = ref(false);

// Handlers
const handleShareClick = (event) => {
  event.stopPropagation();
  event.preventDefault();
  emit("share-toggle", props.bookmark.id);
};
</script>

<template>
  <b-card class="book-mark-card" no-body>
    <b-card-body>
      <div class="draggable-card-img position-relative">
        <img
            :src="bookmark.image"
            :alt="bookmark.title"
            class="h-225 img-fluid"
        />
        <div class="video-transparent-box"></div>

        <!-- Top-right icon group -->
        <div class="draggable-card-icon position-absolute top-0 end-0 p-2">
          <!-- Heart -->
          <div
              class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 heartBtn mb-2"
              @click="emit('favourite-toggle', bookmark.id)"
          >
            <ph-heart
                :size="18"
                :weight="bookmark.isFavourite ? 'fill' : 'bold'"
                class="text-danger f-s-18"
            />
          </div>

          <!-- Share -->
          <div
              class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 shareBtn mb-2 position-relative"
              @click.stop.prevent="handleShareClick"
              @mouseenter.stop="showTooltip = true"
              @mouseleave.stop="showTooltip = false"
          >
            <ph-share-network
                :size="18"
                :weight="bookmark.isShared ? 'fill' : 'bold'"
                :class="['f-s-18', bookmark.isShared ? 'text-primary' : 'text-secondary']"
            />
            <transition name="fade">
              <div
                  v-if="showTooltip"
                  class="custom-share-tooltip bg-white shadow-sm p-2 b-r-6 position-absolute end-100 me-2 top-50 translate-middle-y"
                  @click.stop
              >
                <ph-whatsapp-logo size="18" class="text-success ms-2" />
                <ph-instagram-logo size="18" class="text-danger ms-2" />
                <ph-facebook-logo size="18" class="text-primary ms-2" />
                <ph-messenger-logo size="18" class="text-info ms-2" />
              </div>
            </transition>
          </div>

          <!-- Star -->
          <div
              class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 starBtn mb-2"
              @click="emit('star-toggle', bookmark.id)"
          >
            <ph-star
                :size="18"
                :weight="bookmark.isStarred ? 'fill' : 'bold'"
                class="text-warning f-s-18"
            />
          </div>
        </div>

        <!-- Dropdown -->
        <b-dropdown
            class="dropdown-icon-none action-icon position-absolute top-0 end-0 m-2"
            variant="link"
            toggle-class="btn-icon b-r-4"
            no-caret
        >
          <template #button-content>
            <ph-dots-three-vertical size="20" weight="bold" class="text-white" />
          </template>

          <b-dropdown-item
              button
              class="text-success"
              @click="emit('edit', bookmark)"
          >
            <ph-pen-nib class="f-s-18 text-success me-2" />
            Edit
          </b-dropdown-item>

          <b-dropdown-item
              button
              class="text-danger deletbtn"
              @click="emit('delete', bookmark.id)"
          >
            <ph-trash class="f-s-18 text-danger me-2" />
            Delete
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="draggable-card-content pt-4">
        <h5 class="mb-2">{{ bookmark.title }}</h5>
        <p>{{ bookmark.url }}</p>
      </div>
    </b-card-body>
  </b-card>
</template>
