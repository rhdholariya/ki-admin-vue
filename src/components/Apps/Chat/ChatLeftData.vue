<script setup>
import { ref } from "vue";
import { PhChatCircleText, PhWhatsappLogo, PhPhoneCall } from "@phosphor-icons/vue";
import { BButton } from "bootstrap-vue-next";

import ChatContent from "./ChatContent.vue";
import UpdatesContent from "./UpdatesContent.vue";
import ContactContent from "./ContactContent.vue";

// Outer tab state - using string keys for clarity
const activeTabOuter = ref("chat");
</script>

<template>
  <!-- Tab buttons -->
  <div class="chat-tab-wrapper mb-3">
    <div class="tabs chat-tabs mb-0 pb-0 d-flex">
      <!-- Chat Tab -->
      <b-button
          type="button"
          variant="link"
          class="nav-link flex-fill"
          :class="{ active: activeTabOuter === 'chat' }"
          @click="activeTabOuter = 'chat'"
      >
        <PhChatCircleText size="18" weight="duotone" class="me-2" />
        Chat
      </b-button>

      <!-- Updates Tab -->
      <b-button
          type="button"
          variant="link"
          class="nav-link flex-fill"
          :class="{ active: activeTabOuter === 'updates' }"
          @click="activeTabOuter = 'updates'"
      >
        <PhWhatsappLogo size="18" weight="duotone" class="me-2" />
        Updates
      </b-button>

      <!-- Contact Tab -->
      <b-button
          type="button"
          variant="link"
          class="nav-link flex-fill"
          :class="{ active: activeTabOuter === 'contact' }"
          @click="activeTabOuter = 'contact'"
      >
        <PhPhoneCall size="18" weight="duotone" class="me-2" />
        Contact
      </b-button>
    </div>
  </div>

  <!-- Render the content BELOW the tabs -->
  <div class="chat-tab-content">
    <ChatContent v-if="activeTabOuter === 'chat'" />
    <UpdatesContent v-if="activeTabOuter === 'updates'" />
    <ContactContent v-if="activeTabOuter === 'contact'" />
  </div>
</template>