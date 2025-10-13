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
</script>

<template>
  <div class="mail-box">
    <b-form-checkbox :id="'email-checkbox-' + email.id" />

    <span class="ms-2 me-2">
      <component
          :is="email.starred ? IconStarFilled : IconStar"
          class="text-warning star-icon fs-5"
      />
    </span>

    <div class="flex-grow-1 position-relative">
      <div
          class="mail-img h-35 w-35 b-r-50 overflow-hidden position-absolute mt-1"
          :class="email.avatarBg"
      >
        <img :alt="email.name" class="img-fluid" :src="email.avatar">
      </div>
      <div class="mg-s-45">
        <h6 class="mb-0 f-w-600">{{ email.name }}</h6>
        <RouterLink to="/read-email">
          <span class="f-s-13 text-secondary">{{ email.preview }}</span>
        </RouterLink>
      </div>
    </div>

    <div>
      <p class="text-center mb-1">{{ email.date }}</p>
      <b-badge :variant="email.badge.variant" class="text-light">
        {{ email.badge.text }}
      </b-badge>
    </div>

    <div>
      <b-dropdown
          variant="link"
          class="dropdown-icon-none"
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
  </div>
</template>



