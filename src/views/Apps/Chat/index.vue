<script setup>
import { computed, ref } from "vue";
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

// Sidebar reference
const chatContainerRef = ref(null);

const handleToggleClick = () => {
  if (chatContainerRef.value) chatContainerRef.value.classList.toggle("chat-toggle");
};

const handleCloseClick = () => {
  if (chatContainerRef.value) chatContainerRef.value.classList.remove("chat-toggle");
};

// Breadcrumb
const breadcrumbItems = computed(() => ({
  title: "Chat",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "Chat", active: true},
  ],
}));
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-row class="position-relative chat-container-box">
          <!-- Sidebar -->
          <b-col lg="4" xxl="3" class="box-col-5">
            <div class="chat-div" ref="chatContainerRef">
              <b-card no-body>
                <!-- Header -->
                <b-card-header>
                  <div class="d-flex align-items-center">
                    <!-- Avatar -->
                    <span class="chatdp h-45 w-45 d-flex-center b-r-50 position-relative bg-danger">
                      <img src="/images/avatar/09.png" alt="User Avatar" class="img-fluid b-r-50"/>
                      <span
                          class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                    </span>

                    <!-- User Info -->
                    <div class="flex-grow-1 ps-2">
                      <h6 class="mb-0">Ninfa Monaldo</h6>
                      <p class="text-secondary mb-0 f-s-12">Web Developer</p>
                    </div>

                    <!-- Settings Dropdown -->
                    <div>
                      <b-dropdown as="div" variant="link" class="dropdown-icon-none" no-caret>
                        <template #button-content>
                          <icon-settings size="18" class="text-secondary"/>
                        </template>
                        <b-dropdown-item href="#">
                          <icon-brand-hipchat size="18" class="me-2"/>
                          <span class="f-s-13">Chat Settings</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          <icon-phone-call size="18" class="me-2"/>
                          <span class="f-s-13">Contact Settings</span>
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          <icon-settings size="18" class="me-2"/>
                          <span class="f-s-13">Settings</span>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div>

                    <!-- Close Button -->
                    <div class="close-togglebtn">
                      <b-button
                          variant="danger"
                          class="ms-2 close-toggle icon-btn w-35 h-35"
                          @click="handleCloseClick"
                      >
                        <icon-x size="18"/>
                      </b-button>
                    </div>
                  </div>
                </b-card-header>

                <!-- Body -->
                <b-card-body class="p-0">
                  <chat-left-data/>
                  <new-chat-dropdown/>
                </b-card-body>
              </b-card>
            </div>
          </b-col>

          <!-- Chat Content -->
          <b-col lg="8" xxl="9" class="box-col-7">
            <chat-container/>

            <!-- Mobile toggle -->
            <div class="d-block d-lg-none">
              <b-button variant="link" class="toggle-btn icon-btn" @click="handleToggleClick">
                <icon-align-justified size="18"/>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
