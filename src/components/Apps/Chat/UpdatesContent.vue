<script setup>
import { ChatUpdates } from "@/data/app/Chatapp/ChatData.js"
</script>

<template>
  <div class="chat-contact tabcontent">
    <div
        v-for="update in ChatUpdates"
        :key="update.id"
        class="updates-box d-flex align-items-center py-3 border-bottom"
    >

      <div :class="['b-r-50 p-1', `b-2-${update.borderColor}`]">
        <span
            :class="[
            'h-40 w-40 d-flex-center b-r-50 position-relative overflow-hidden',
            update.bgColor
          ]"
        >
          <img
              :src="update.avatar"
              :alt="update.name"
              class="img-fluid b-r-50"
          />
        </span>
      </div>

      <div class="flex-grow-1 text-start ps-2">
        <span class="d-block f-w-500 text-dark">{{ update.name }}</span>
        <p class="f-s-12 text-secondary mb-0">{{ update.time }}</p>
      </div>
    </div>
  </div>
</template>
