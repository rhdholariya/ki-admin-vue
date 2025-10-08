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

const handleShareClick = (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (props.onShareToggle) props.onShareToggle(props.bookmark.id);
};
const props = defineProps({
  bookmark: {
    type: Object,
    required: true,
  },
  onDelete: {
    type: Function,
    required: true,
  },
  onFavouriteToggle: {
    type: Function,
    required: true,
  },
  onShareToggle: Function,
  onStarToggle: Function,
  onEdit: Function,
});

const showTooltip = ref(false);
</script>

<template>
  <BCard class="book-mark-card" no-body>
    <BCardBody>
      <div class="draggable-card-img position-relative">
        <img
            :src="bookmark.image"
            :alt="bookmark.title"
            class="h-225 img-fluid"
        />
        <div class="video-transparent-box"></div>

        <div class="draggable-card-icon position-absolute top-0 end-0 p-2">
          <!-- Heart -->
          <div
              class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 heartBtn mb-2"
              @click="onFavouriteToggle(bookmark.id)"
          >
            <PhHeart
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
            <PhShareNetwork
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
                <PhWhatsappLogo size="18" class="text-success ms-2" />
                <PhInstagramLogo size="18" class="text-danger ms-2" />
                <PhFacebookLogo size="18" class="text-primary ms-2" />
                <PhMessengerLogo size="18" class="text-info ms-2" />
              </div>
            </transition>
          </div>

          <!-- Star -->
          <div
              class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 starBtn mb-2"
              @click="onStarToggle && onStarToggle(bookmark.id)"
          >
            <PhStar
                :size="18"
                :weight="bookmark.isStarred ? 'fill' : 'bold'"
                class="text-warning f-s-18"
            />
          </div>
        </div>

        <!-- Dropdown -->
        <BDropdown
            class="dropdown-icon-none action-icon position-absolute top-0 end-0 m-2"
            variant="link"
            toggle-class=" btn-icon b-r-4"
            no-caret
        >
          <template #button-content>
            <PhDotsThreeVertical size="20" weight="bold" class="text-white" />
          </template>

          <BDropdownItem
              button
              class="text-success"
              @click="onEdit && onEdit(bookmark)"
          >
            <PhPenNib class="f-s-18 text-success me-2" />
            Edit
          </BDropdownItem>

          <BDropdownItem
              button
              class="text-danger deletbtn"
              @click="onDelete(bookmark.id)"
          >
            <PhTrash class="f-s-18 text-danger me-2" />
            Delete
          </BDropdownItem>
        </BDropdown>
      </div>

      <div class="draggable-card-content pt-4">
        <h5 class="mb-2">{{ bookmark.title }}</h5>
        <p>{{ bookmark.url }}</p>
      </div>
    </BCardBody>
  </BCard>
</template>


