<script setup>
import { chatContactList } from "@/data/app/chatapp/ChatData.js";
import { IconPhoneCall, IconVideo } from "@tabler/icons-vue";
import { BButton } from "bootstrap-vue-next";
</script>

<template>
  <div class="chat-contact tabcontent chat-contact-list">
    <div
        v-for="contact in chatContactList"
        :key="contact.id"
        class="d-flex align-items-center py-3"
    >
      <!-- Avatar -->
      <div>
        <span
            :class="[
            'h-40 w-40 d-flex-center b-r-50 position-relative',
            contact.bgColor
          ]"
        >
          <img
              :src="contact.avatar"
              :alt="contact.name"
              class="img-fluid b-r-50"
          />
          <span
              :class="[
              'position-absolute top-0 end-0 p-1 border border-light rounded-circle',
              contact.onlineStatus
            ]"
          ></span>
        </span>
      </div>

      <!-- Contact Info -->
      <div class="flex-grow-1 ps-2">
        <p class="contact-name text-dark mb-0 f-w-500">
          {{ contact.name }}
        </p>
        <p class="mb-0 text-secondary f-s-13">{{ contact.phone }}</p>
      </div>

      <!-- Call & Video Buttons -->
      <div>
        <b-button
            variant="success"
            class="h-35 w-35 icon-btn d-flex-center b-r-50"
        >
          <IconPhoneCall size="15" />
        </b-button>
      </div>
      <div>
        <b-button
            variant="primary"
            class="h-35 w-35 icon-btn d-flex-center b-r-50 ms-1"
        >
          <IconVideo size="15" />
        </b-button>
      </div>
    </div>
  </div>
</template>
