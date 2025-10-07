<script setup>
import { ChatUpdates } from "@/data/app/chatapp/ChatData.js";
</script>

<template>
  <div class="chat-contact tabcontent">
    <div
        v-for="update in ChatUpdates"
        :key="update.id"
        class="updates-box d-flex align-items-center py-3"
    >
      <div :class="`b-2-${update.borderColor} b-r-50 p-1`">
        <span
            :class="['h-40 w-40 d-flex-center b-r-50 position-relative', update.bgColor]"
        >
          <img :src="update.avatar" :alt="update.name" class="img-fluid b-r-50" />
        </span>
      </div>

      <div class="flex-grow-1 text-start ps-2">
        <span>{{ update.name }}</span>
        <p class="f-s-12 text-secondary mb-0">{{ update.time }}</p>
      </div>
    </div>
  </div>
</template>
