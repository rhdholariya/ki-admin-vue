<script setup>
import {computed, ref} from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BDropdown,
  BDropdownItem,
  BButton,
} from "bootstrap-vue-next";

import {
  IconAlignJustified,
  IconBrandHipchat,
  IconPhoneCall,
  IconSettings,
  IconX
} from "@tabler/icons-vue";


import ChatContainer from "@/components/Apps/Chat/ChatContainer.vue";
import ChatLeftData from "@/components/Apps/Chat/ChatLeftData.vue";
import NewChatDropdown from "@/components/Apps/Chat/NewChatDropdown.vue";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

// Reference to chat container div
const chatContainerRef = ref(null);

// Toggle sidebar open/close
const handleToggleClick = () => {
  if (chatContainerRef.value) {
    chatContainerRef.value.classList.toggle("chat-toggle");
  }
};

// Close sidebar
const handleCloseClick = () => {
  if (chatContainerRef.value) {
    chatContainerRef.value.classList.remove("chat-toggle");
  }
};

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Chat",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Chat", active: true },
  ],
}));
</script>

<template>
<AppLayout>
  <main>
    <BContainer fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems" />

      <BRow class="position-relative chat-container-box">
        <!-- Sidebar / Left Chat Panel -->
        <BCol lg="4" xxl="3" class="box-col-5">
          <div class="chat-div" ref="chatContainerRef">
            <BCard no-body>
              <!-- Header -->
              <BCardHeader>
                <div class="d-flex align-items-center">
                  <!-- Avatar -->
                  <span class="chatdp h-45 w-45 d-flex-center b-r-50 position-relative bg-danger">
                    <img
                        src="/images/avatar/09.png"
                        alt="User Avatar"
                        class="img-fluid b-r-50"
                    />
                    <span
                        class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"
                    ></span>
                  </span>

                  <!-- User info -->
                  <div class="flex-grow-1 ps-2">
                    <h6 class="mb-0">Ninfa Monaldo</h6>
                    <p class="text-secondary mb-0 f-s-12">Web Developer</p>
                  </div>

                  <!-- Settings dropdown -->
                  <div>
                    <BDropdown as="div" variant="link" class="dropdown-icon-none" no-caret>
                      <template #button-content>
                        <IconSettings size="18" class="text-secondary"/>
                      </template>
                      <BDropdownItem href="#">
                        <IconBrandHipchat size="18" class="me-2" />
                        <span class="f-s-13">Chat Settings</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <IconPhoneCall size="18" class="me-2" />
                        <span class="f-s-13">Contact Settings</span>
                      </BDropdownItem>
                      <BDropdownItem href="#">
                        <IconSettings size="18" class="me-2" />
                        <span class="f-s-13">Settings</span>
                      </BDropdownItem>
                    </BDropdown>
                  </div>

                  <!-- Close Button -->
                  <div class="close-togglebtn">
                    <BButton
                        variant="danger"
                        class="ms-2 close-toggle icon-btn w-35 h-35"
                        @click="handleCloseClick"
                    >
                      <IconX size="18" />
                    </BButton>
                  </div>
                </div>
              </BCardHeader>

              <!-- Body -->
              <BCardBody class="p-0">
                <ChatLeftData />
                <NewChatDropdown />
              </BCardBody>
            </BCard>
          </div>
        </BCol>

        <!-- Chat Content Panel -->
        <BCol lg="8" xxl="9" class="box-col-7">
          <ChatContainer />

          <!-- Mobile toggle button -->
          <div class="d-block d-lg-none">
            <BButton
                variant="link"
                class="toggle-btn icon-btn"
                @click="handleToggleClick"
            >
              <IconAlignJustified size="18" />
            </BButton>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </main>
</AppLayout>
</template>
