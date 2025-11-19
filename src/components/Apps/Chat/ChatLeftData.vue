<script setup>
import { ref } from "vue";
import { PhChatCircleText, PhWhatsappLogo, PhPhoneCall } from "@phosphor-icons/vue";
import { BButton } from "bootstrap-vue-next";

import ChatContent from "./ChatContent.vue";
import UpdatesContent from "./UpdatesContent.vue";
import ContactContent from "./ContactContent.vue";

const activeTabOuter = ref("chat");
</script>

<template>
  <div class="chat-tab-wrapper">
    <div class="tabs chat-tabs">
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

  <div class="content-wrapper">
    <ChatContent v-if="activeTabOuter === 'chat'" />
    <UpdatesContent v-if="activeTabOuter === 'updates'" />
    <ContactContent v-if="activeTabOuter === 'contact'" />
  </div>
</template>