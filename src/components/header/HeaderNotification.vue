<script setup>
import { ref, computed } from "vue";
import {PhBell, PhBellRinging , PhTrash, PhTruck} from "@phosphor-icons/vue";


const notifications = ref([

  {
    id: 1,
    type: "delivery",
    name: "Emery McKenzie",
    message: "Hey get ready: Your order from @Shopper.com",
    icon: PhTruck,
    time: "Sep 23",
  },
  {
    id: 2,
    type: "file-share",
    name: "Simon Young",
    action: "shared a file called",
    file: "Dropdown.pdf",
    time: "30 min",
  },
  {
    id: 3,
    type: "comment",
    name: "Becky G. Hayes",
    action: "has added a comment to",
    file: "Final_Report.pdf",
    time: "45 min",
  },
  {
    id: 4,
    type: "meeting-invite",
    name: "Romaine Nadeau",
    message: "invited you to join a meeting",
    avatar: "/assets/images/ai_avtar/1.jpg",
    time: "1 hour ago",
    actions: ["Join", "Decline"],
  },
  {
    id: 5,
    type: "file-edit",
    name: "Gene Hart",
    action: "is wants to edit",
    file: "Report.doc",
    time: "10 min ago",
    actions: ["Approve", "Deny"],
  },
]);


const removeNotification = (id) => {
  notifications.value = notifications.value.filter((n) => n.id !== id);
};


const hasNotifications = computed(() => notifications.value.length > 0);
</script>

<template>
  <!-- Notification Bell Icon -->
  <a href="#" class="d-block head-icon position-relative bg-light-dark rounded-circle f-s-22 p-2" role="button" data-bs-toggle="offcanvas"
     data-bs-target="#notificationcanvasRight" aria-controls="notificationcanvasRight">
    <PhBell size="24" weight="regular" />
    <span v-if="hasNotifications"
          class="position-absolute translate-middle p-1 bg-primary border border-light rounded-circle animate__animated animate__fadeIn animate__infinite animate__slower">
    </span>
  </a>

  <!-- Offcanvas Notification Panel -->
  <div class="offcanvas offcanvas-end header-notification-canvas" tabindex="-1" id="notificationcanvasRight"
       aria-labelledby="notificationcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="notificationcanvasRightLabel">Notifications</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body app-scroll p-0 d-flex justify-content-between">
      <div v-if="hasNotifications" class="head-container">
        <div v-for="notification in notifications" :key="notification.id" class="notification-message head-box">


          <div class="message-content-box flex-grow-1 ">
            <a href ="#" class="f-s-15 text-dark mb-0 ">
              <span class="f-w-500 text-dark pe-1">{{ notification.name }}</span>
              <template v-if="notification.action" > {{ notification.action }}
                <span class="f-w-500 text-dark">{{ notification.file }}</span></template>
              <template v-if="notification.message" > {{ notification.message }} </template>
            </a>

            <div v-if="notification.actions">
              <a v-for="action in notification.actions" :key="action" class="d-inline-block f-w-500 me-1"
                 :class="action === 'Approve' || action === 'Join' ? 'text-success' : 'text-danger'" href="#">
                {{ action }}
              </a>
            </div>
          </div>

          <div class="align-self-start text-end">
            <PhTrash size="18" class="text-danger close-btn " @click="removeNotification(notification.id)" />
            <span class="badge text-light-primary mt-2">{{ notification.time }}</span>
          </div>
        </div>
      </div>

      <!-- Empty Notification State -->
      <div v-else class="hidden-message py-4 px-3 text-center">
        <PhBellRinging :size="50" class="text-primary" />
        <h5 class="mb-0">Notification Not Found</h5>
       <p class="text-dark">
          When you have any notifications added here, will appear
          here.
        </p>
      </div>
    </div>
  </div>
</template>

