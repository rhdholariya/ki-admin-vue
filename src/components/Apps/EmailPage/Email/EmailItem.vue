<script setup>
import {
  BBadge,
  BDropdown,
  BDropdownItem,
  BFormCheckbox
} from 'bootstrap-vue-next'

import {
  IconStar,
  IconStarFilled,
  IconDotsVertical,
  IconArchive,
  IconTrash,
  IconMailOpened
} from '@tabler/icons-vue'

defineProps({
  email: {
    type: Object,
    required: true
  }
})

const badgeClass = (variant) => {
  if (!variant) return 'bg-light-secondary'
  if (variant.startsWith('bg-light-')) return variant
  return `bg-light ${variant}`
}
</script>

<template>
  <div class="mail-box d-flex align-items-center justify-content-between">
    <!-- Checkbox -->
    <b-form-checkbox :id="'email-checkbox-' + email.id" />

    <!-- Star -->
    <span class="ms-2 me-2">
      <component
          :is="email.starred ? IconStarFilled : IconStar"
          class="text-warning star-icon fs-5"
      />
    </span>

    <!-- Sender + Preview -->
    <div class="flex-grow-1 position-relative">
      <div
          class="mail-img h-35 w-35 b-r-50 overflow-hidden position-absolute mt-1"
          :class="email.avatarBg"
      >
        <img :alt="email.name" class="img-fluid" :src="email.avatar" />
      </div>
      <div class="mg-s-45">
        <h6 class="mb-0 f-w-600">{{ email.name }}</h6>
        <router-link to="/read-email">
          <span class="f-s-13 text-secondary">{{ email.preview }}</span>
        </router-link>
      </div>
    </div>

    <!-- Date + Badge -->
    <div class="text-end">
      <p class="mb-1">{{ email.date }}</p>
      <b-badge :class="badgeClass(email.badge.variant)">
        {{ email.badge.text }}
      </b-badge>
    </div>

    <!-- Dropdown -->
    <b-dropdown
        variant="link"
        class="dropdown-icon-none text-secondary"
        toggle-class="border-0 icon-btn b-r-4"
        no-caret
    >
      <template #button-content>
        <IconDotsVertical />
      </template>
      <b-dropdown-item>
        <IconArchive class="me-2" /> Archive
      </b-dropdown-item>
      <b-dropdown-item>
        <IconTrash class="me-2" /> Delete
      </b-dropdown-item>
      <b-dropdown-item>
        <IconMailOpened class="me-2" /> Read Mail
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>
