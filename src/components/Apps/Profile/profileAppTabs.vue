<script setup>
import {
  BCard,
  BCardBody,
  BNav,
  BNavItem,
} from "bootstrap-vue-next";

import {
  IconClipboardData,
  IconPhotoHeart,
  IconTimeline,
  IconUser,
  IconUsers,
} from "@tabler/icons-vue";


const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const setData = (value) => {
  emit("update:modelValue", value);
};


const tabs = [
  {id: "1", label: "Profile", icon: IconUser},
  {id: "2", label: "Activities", icon: IconTimeline, badge: "10+"},
  {id: "3", label: "Projects", icon: IconClipboardData},
  {id: "4", label: "Post", icon: IconPhotoHeart},
  {id: "5", label: "Friends", icon: IconUsers},
];




</script>

<template>
  <b-card no-body>
    <b-card-body>
      <b-nav variant="tabs" class="profile-app-tabs border-0 mb-0 pb-0">
        <b-nav-item
            v-for="tab in tabs"
            :key="tab.id"
            class="w-100 d-flex"
            :class="{ active: props.modelValue === tab.id }"
            @click="setData(tab.id)"
        >
          <span class="tab-link fw-medium f-s-16 f-w-600 w-100 d-block">
            <component :is="tab.icon" size="18"/>
            <span class="ms-1">
              {{ tab.label }}
              <span
                  v-if="tab.badge"
                  class="badge bg-warning rounded-pill badge-notification ms-2"
              >
                {{ tab.badge }}
                <span class="visually-hidden">unread messages</span>
              </span>
            </span>
          </span>
        </b-nav-item>
      </b-nav>
    </b-card-body>
  </b-card>
</template>
