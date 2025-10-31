<script setup>
import { ref, computed } from 'vue'
import { BButton, BOffcanvas } from 'bootstrap-vue-next'
import {
  PhBell,
  PhTrash,
  PhShoppingBagOpen,
  PhBellRinging
} from '@phosphor-icons/vue'

// Control offcanvas visibility
const showNotification = ref(false)

// List of notifications
const notifications = ref([
  {
    id: 1,
    title: "Gene Hart wants to edit Report.doc",
    actions: [
      { text: "Approve", variant: "success" },
      { text: "Deny", variant: "danger" }
    ],
    time: "sep 23"
  },
  {
    id: 2,
    title: "Hey Emery McKenzie, get ready: Your order from @Shopper.com",
    actions: [],
    time: "sep 23"
  },
  {
    id: 3,
    title: "Simon Young shared a file called Dropdown.pdf",
    actions: [],
    time: "30 min"
  },
  {
    id: 4,
    title: "Becky G. Hayes has added a comment to Final_Report.pdf",
    actions: [],
    time: "45 min"
  },
  {
    id: 5,
    title: "@Romaine invited you to a meeting",
    actions: [
      { text: "Join", variant: "success" },
      { text: "Decline", variant: "danger" }
    ],
    time: "1 hour ago"
  }
])

// Toggle offcanvas
function toggleNotification() {
  showNotification.value = !showNotification.value
}

// Remove notification
function removeNotification(id) {
  notifications.value = notifications.value.filter(n => n.id !== id)
}
</script>

<template>
  <div>
    <!-- Notification Button -->
    <b-button variant="light-secondary" class="position-relative rounded-circle p-2" @click="toggleNotification">
      <PhBell size="22" />
      <span
          class="position-absolute translate-middle p-1 bg-primary border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
      </span>
    </b-button>

    <!-- Offcanvas -->
    <b-offcanvas v-model="showNotification" placement="end" class="header-notification-canvas">
      <template #header>
          <h5 class="offcanvas-title">Notification</h5>
          <b-button aria-label="Close" class="btn-close" type="button" @click="toggleNotification"></b-button>
      </template>


        <div class=" app-scroll p-0">
          <div v-if="notifications.length">
            <div v-for="notification in notifications" :key="notification.id" class="notification-message head-box p-3 border-bottom d-flex align-items-start">
              <div class="message-content-box flex-grow-1 pe-2">
                <a class="f-s-15 text-dark mb-2" href="./read_email.html">
                  {{ notification.title }}
                </a>
                <div v-if="notification.actions.length">
                  <a
                      v-for="(action, index) in notification.actions"
                      :key="index"
                      class="d-inline-block f-w-500 me-2"
                      :class="{'text-success': action.variant === 'success', 'text-danger': action.variant === 'danger'}"
                      href="#"
                  >
                    {{ action.text }}
                  </a>
                </div>
              </div>
              <div class="text-end">
                <PhTrash size="18" class="text-danger cursor-pointer" @click="removeNotification(notification.id)" />
                <div>
                  <span class="badge text-light-primary">{{ notification.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-4 px-3">
            <PhBellRinging size="50" class="text-primary mb-3" />
            <h6 class="mb-2">Notification Not Found</h6>
            <p class="text-dark">When you have any notifications added here, they will appear here.</p>
          </div>
        </div>

    </b-offcanvas>
  </div>
</template>
