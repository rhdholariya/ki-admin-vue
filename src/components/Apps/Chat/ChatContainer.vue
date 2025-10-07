<script setup>
import { ref } from "vue";
import {
  BButton,
  BCard,
  BCardHeader,
  BCardBody,
  BCardFooter,
  BModal,
  BDropdown,
  BDropdownItem,
  BInputGroup,
  BFormInput,
  BTooltip,
} from "bootstrap-vue-next";

import { RouterLink } from "vue-router";

import {
  IconBrandHipchat,
  IconCameraPlus,
  IconChecks,
  IconDotsVertical,
  IconMicrophone,
  IconMoodSmile,
  IconPaperclip,
  IconPhoneCall,
  IconSend,
  IconSettings,
  IconVideo,
} from "@tabler/icons-vue";

import { chatmessages } from "@/data/app/chatapp/ChatData.js";

const callModal = ref(false);
const videoModal = ref(false);

const toggleCallModal = () => (callModal.value = !callModal.value);
const toggleVideoModal = () => (videoModal.value = !videoModal.value);
</script>

<template>
  <BCard class="chat-container-content-box" no-body>
    <!-- Header -->
    <BCardHeader>
      <div class="chat-header d-flex align-items-center ms-lg-0 ms-5">
        <!-- Profile Section -->
        <RouterLink to="/apps/profile">
          <span
              class="profileimg h-45 w-45 d-flex-center b-r-50 position-relative bg-secondary"
          >
            <img src="/images/avatar/14.png" alt="avatar" class="img-fluid b-r-50" />
            <span
                class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"
            ></span>
          </span>
        </RouterLink>

        <div class="flex-grow-1 ps-2 pe-2">
          <h6 class="mb-0">Jerry Ladies</h6>
          <p class="text-muted f-s-12 text-success mb-0">Online</p>
        </div>

        <!-- Call Button -->
        <BButton variant="success" class="h-45 w-45 icon-btn b-r-22 me-sm-2" @click="toggleCallModal">
          <IconPhoneCall size="18" />
        </BButton>

        <!-- Call Modal -->
        <BModal v-model="callModal" centered hide-footer hide-header>
          <div class="call">
            <div class="call-div">
              <img src="/images/profile-app/32.jpg" class="w-100 rounded" alt="" />
              <div class="call-caption text-center">
                <h2 class="text-white">Jerry Ladies</h2>
                <div class="d-flex justify-content-center">
                  <BButton variant="success" class="h-40 w-40 icon-btn b-r-50 call-btn" @click="toggleCallModal">
                    <IconPhoneCall size="18" />
                  </BButton>
                  <BButton variant="danger" class="h-40 w-40 icon-btn b-r-50 ms-4 call-btn" @click="toggleCallModal">
                    <IconPhoneCall size="18" />
                  </BButton>
                </div>
              </div>
            </div>
          </div>
        </BModal>

        <!-- Video Button -->
        <BButton variant="primary" class="h-45 w-45 icon-btn b-r-22 me-sm-2" @click="toggleVideoModal">
          <IconVideo size="18" />
        </BButton>

        <!-- Video Modal -->
        <BModal v-model="videoModal" centered hide-footer hide-header>
          <div class="call">
            <div class="call-div pointer-events-auto">
              <img src="/images/profile-app/25.jpg" class="w-100 rounded" alt="avatar" />
              <div class="call-caption">
                <div class="d-flex justify-content-center align-items-center">
                  <span class="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                    <IconMicrophone size="16" class="text-dark" />
                  </span>
                  <BButton variant="danger" class="h-45 w-45 icon-btn b-r-50 ms-4 call-btn" @click="toggleVideoModal">
                    <IconPhoneCall size="18" />
                  </BButton>
                  <span class="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                    <IconPhoneCall size="16" class="text-dark" />
                  </span>
                </div>
              </div>
            </div>
            <div class="video-div">
              <img src="/images/profile-app/31.jpg" class="w-100 rounded" alt="" />
            </div>
          </div>
        </BModal>

        <!-- Settings Dropdown -->
        <BDropdown class="dropdown-icon-none" toggle-class="h-45 w-45 icon-btn b-r-22 me-sm-2" variant="secondary">
          <template #button-content>
            <IconSettings size="18" />
          </template>

          <BDropdownItem href="#">
            <IconBrandHipchat size="18" /> <span class="f-s-13 ms-1">Chat Settings</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <IconPhoneCall size="18" /> <span class="f-s-13 ms-1">Contact Settings</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <IconSettings size="18" /> <span class="f-s-13 ms-1">Settings</span>
          </BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>

    <!-- Body -->
    <BCardBody class="p-0">
      <div class="chat-container">
        <div class="text-center">
          <span class="badge text-light-secondary">Today</span>
        </div>

        <div v-for="chat in chatmessages" :key="chat.id" class="position-relative">
          <!-- Left aligned chat -->
          <template v-if="chat.position === 'left'">
            <div class="chatdp h-45 w-45 b-r-50 position-absolute start-0 bg-secondary">
              <img :src="chat.avatar" alt="Avatar" class="img-fluid b-r-50" />
            </div>
            <div class="chat-box">
              <p class="chat-text">{{ chat.message }}</p>
              <p class="text-muted">
                <IconChecks size="18" class="text-primary" /> {{ chat.time }}
              </p>
            </div>
          </template>

          <!-- Right aligned chat -->
          <template v-else>
            <div class="chat-box-right">
              <p class="chat-text">{{ chat.message }}</p>
              <p class="text-muted">
                <IconChecks size="18" class="text-primary" /> {{ chat.time }}
              </p>
            </div>
            <div class="chatdp h-45 w-45 b-r-50 position-absolute end-0 top-0 bg-danger">
              <img :src="chat.avatar" alt="Avatar" class="img-fluid b-r-50" />
            </div>
          </template>
        </div>
      </div>
    </BCardBody>

    <!-- Footer -->
    <BCardFooter>
      <div class="chat-footer d-flex">
        <!-- Input and Emoji -->
        <div class="app-form flex-grow-1">
          <BInputGroup>
            <span id="emoji-btn" class="input-group-text bg-secondary ms-2 me-2 b-r-10">
              <IconMoodSmile size="18" class="text-white" />
            </span>
            <BTooltip target="emoji-btn" placement="top">Emoji</BTooltip>

            <BFormInput type="text" class="b-r-6" placeholder="Type a message" />
            <BButton variant="primary" class="btn-sm ms-2 me-2 b-r-4">
              <IconSend size="18" /> <span>Send</span>
            </BButton>
          </BInputGroup>
        </div>

        <!-- Extra Buttons -->
        <div class="d-none d-sm-flex">
          <BButton id="mic-btn" variant="secondary" class="w-50 h-50 icon-btn ms-2">
            <IconMicrophone size="18" />
          </BButton>
          <BTooltip target="mic-btn" placement="top">Microphone</BTooltip>

          <BButton id="camera-btn" variant="secondary" class="w-50 h-50 icon-btn ms-2">
            <IconCameraPlus size="18" />
          </BButton>
          <BTooltip target="camera-btn" placement="top">Camera</BTooltip>

          <BButton id="attach-btn" variant="secondary" class="w-50 h-50 icon-btn ms-2">
            <IconPaperclip size="18" />
          </BButton>
          <BTooltip target="attach-btn" placement="top">Attach file</BTooltip>
        </div>

        <!-- Mobile Dropdown -->
        <BDropdown class="dropdown-icon-none d-sm-none" toggle-class="d-flex-center ms-1 p-0" variant="light-primary">
          <template #button-content>
            <IconDotsVertical size="18" />
          </template>

          <BDropdownItem href="#">
            <IconMicrophone size="18" /> <span class="f-s-13 ms-1">Microphone</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <IconCameraPlus size="18" /> <span class="f-s-13 ms-1">Camera</span>
          </BDropdownItem>
          <BDropdownItem href="#">
            <IconPaperclip size="18" /> <span class="f-s-13 ms-1">Paperclip</span>
          </BDropdownItem>
        </BDropdown>
      </div>
    </BCardFooter>
  </BCard>
</template>
