<script setup>
import { ref } from "vue";
import { BButton, BOffcanvas, BCard } from "bootstrap-vue-next";
import { BDropdown, BDropdownItem, BDropdownDivider } from 'bootstrap-vue-next'

import {
  PhShoppingBagOpen,
  PhEnvelope,
  PhChatCircleText,
  PhProjectorScreenChart,
  PhScroll,
  PhNotebook,
  PhCalendar,
  PhFolderOpen,
  PhGooglePhotosLogo,
  PhUsersThree,
  PhSelectionForeground,
  PhPlus,
  PhBoundingBox,
  PhSlidersHorizontal
} from '@phosphor-icons/vue'

const apps = [
  { name: "E-shop", href: "product.html", icon: PhShoppingBagOpen, color: "text-light-primary" },
  { name: "Email", href: "email.html", icon: PhEnvelope, color: "text-light-danger" },
  { name: "Chat", href: "chat.html", icon: PhChatCircleText, color: "text-light-success" },
  { name: "Project", href: "project_app.html", icon: PhProjectorScreenChart, color: "text-light-warning" },
  { name: "Invoice", href: "invoice.html", icon: PhScroll, color: "text-light-info" },
  { name: "Blog", href: "blog.html", icon: PhNotebook, color: "text-light-dark" },
  { name: "Calendar", href: "calendar.html", icon: PhCalendar, color: "text-light-danger" },
  { name: "File Manager", href: "file_manager.html", icon: PhFolderOpen, color: "text-light-warning" },
  { name: "Gallery", href: "gallery.html", icon: PhGooglePhotosLogo, color: "text-light-primary" },
  { name: "Profile", href: "profile.html", icon: PhUsersThree, color: "text-light-success" },
  { name: "Task Board", href: "kanban_board.html", icon: PhSelectionForeground, color: "text-light-secondary" }
]
const notificationsEnabled = ref(false)
const showOffcanvas = ref(false);

function toggleOffcanvas() {
  showOffcanvas.value = !showOffcanvas.value;
}
</script>

<template>
  <div>
    <!-- Toggle Button -->
    <b-button variant="light-secondary" class="rounded-circle p-2" @click="toggleOffcanvas">
      <PhBoundingBox :size="22" />
    </b-button>

    <!-- Offcanvas -->
    <b-offcanvas v-model="showOffcanvas" placement="end" class="header-apps-canvas">
      <template #header>
          <h5 class="offcanvas-title">Shortcut</h5>
        <b-dropdown variant="link" class="app-dropdown flex-shrink-0" no-caret>
          <template #button-content>
            <PhSlidersHorizontal :size="20" />
          </template>

          <b-dropdown-item href="setting.html" target="_blank">
            Privacy Settings
          </b-dropdown-item>
          <b-dropdown-item href="setting.html" target="_blank">
            Account Settings
          </b-dropdown-item>
          <b-dropdown-item href="setting.html" target="_blank">
            Accessibility
          </b-dropdown-item>

          <b-dropdown-divider />

          <!-- More Settings as a toggle -->
          <b-dropdown-item @click="toggleMoreSettings" class="d-flex justify-content-between align-items-center">
            More Settings
            <span v-if="showMoreSettings">▲</span>
            <span v-else>▼</span>
          </b-dropdown-item>

          <!-- Submenu shown conditionally -->
          <div v-if="showMoreSettings" class="submenu p-2 border-top bg-light">
            <b-dropdown-item href="setting.html" target="_blank">
              Backup and Restore
            </b-dropdown-item>
            <b-dropdown-item href="setting.html" target="_blank">
              Data Usage
            </b-dropdown-item>
            <b-dropdown-item href="setting.html" target="_blank">
              Theme
            </b-dropdown-item>
            <b-dropdown-item>
              <div class="d-flex align-items-center justify-content-between">
                <p class="mb-0">Notification</p>
                <input
                    class="form-check-input form-check-primary"
                    id="notificationSwitch"
                    type="checkbox"
                    v-model="notificationsEnabled"
                />
              </div>
            </b-dropdown-item>
          </div>
        </b-dropdown>
      </template>

      <template #default>
        <div class="row row-cols-3 g-2">
          <div v-for="(app, index) in apps" :key="index" class="d-flex-center text-center">
            <a :class="app.color + ' w-100 rounded-3 py-3 px-2'" :href="app.href" target="_blank">
            <span>
              <component :is="app.icon" size="30" weight="light" />
            </span>
              <p class="mb-0 f-w-500 text-dark">{{ app.name }}</p>
            </a>
          </div>
          <div class="d-flex-center text-center">
            <a class="d-flex-center text-light-secondary w-100 h-100 rounded-3 p-2 dashed-1-secondary"
               href="kanban_board.html" target="_blank">
            <span>
              <PhPlus size="30" weight="light" />
            </span>
            </a>
          </div>
        </div>
      </template>
    </b-offcanvas>
  </div>
</template>
