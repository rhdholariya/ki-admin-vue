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

import {chatmessages} from "@/data/app/Chatapp/ChatData.js";

const callModal = ref(false);
const videoModal = ref(false);

const toggleCallModal = () => (callModal.value = !callModal.value);
const toggleVideoModal = () => (videoModal.value = !videoModal.value);
</script>

<template>
  <b-card class="chat-container-content-box" no-body>
    <!-- Header -->
    <b-card-header>
      <div class="chat-header d-flex align-items-center ms-lg-0 ms-5">
        <!-- Profile Section -->
        <router-link to="/apps/profile">
          <span
              class="profileimg h-45 w-45 d-flex-center b-r-50 position-relative bg-secondary"
          >
            <img
                src="/images/avatar/14.png"
                alt="avatar"
                class="img-fluid b-r-50"
            />
            <span
                class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"
            ></span>
          </span>
        </router-link>

        <div class="flex-grow-1 ps-2 pe-2">
          <h6 class="mb-0">Jerry Ladies</h6>
          <p class="text-muted f-s-12 text-success mb-0">Online</p>
        </div>

        <!-- Call Button -->
        <b-button
            variant="success"
            class="h-45 w-45 icon-btn b-r-22 me-sm-2"
            @click="toggleCallModal"
        >
          <icon-phone-call size="18"/>
        </b-button>

        <!-- Call Modal -->
        <b-modal
            v-model="callModal"
            centered
            hide-footer
            hide-header
            teleport-disabled
            no-fade
        >
          <div class="call">
            <div class="call-div">
              <img
                  src="/images/profile-app/32.jpg"
                  class="w-100 rounded"
                  alt=""
              />
              <div class="call-caption text-center">
                <h2 class="text-white">Jerry Ladies</h2>
                <div class="d-flex justify-content-center">
                  <b-button
                      variant="success"
                      class="h-40 w-40 icon-btn b-r-50 call-btn"
                      @click="toggleCallModal"
                  >
                    <icon-phone-call size="18"/>
                  </b-button>
                  <b-button
                      variant="danger"
                      class="h-40 w-40 icon-btn b-r-50 ms-4 call-btn"
                      @click="toggleCallModal"
                  >
                    <icon-phone-call size="18"/>
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>

        <!-- Video Button -->
        <b-button
            variant="primary"
            class="h-45 w-45 icon-btn b-r-22 me-sm-2"
            @click="toggleVideoModal"
        >
          <icon-video size="18"/>
        </b-button>

        <!-- Video Modal -->
        <b-modal
            v-model="videoModal"
            centered
            hide-footer
            hide-header
            teleport-disabled
            no-fade
        >
          <div class="call">
            <div class="call-div pointer-events-auto">
              <img
                  src="/images/profile-app/25.jpg"
                  class="w-100 rounded"
                  alt="avatar"
              />
              <div class="call-caption">
                <div
                    class="d-flex justify-content-center align-items-center"
                >
                  <span class="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                    <icon-microphone size="16" class="text-dark"/>
                  </span>
                  <b-button
                      variant="danger"
                      class="h-45 w-45 icon-btn b-r-50 ms-4 call-btn"
                      @click="toggleVideoModal"
                  >
                    <icon-phone-call size="18"/>
                  </b-button>
                  <span class="bg-white h-35 w-35 d-flex-center b-r-50 ms-4">
                    <icon-phone-call size="16" class="text-dark"/>
                  </span>
                </div>
              </div>
            </div>
            <div class="video-div">
              <img
                  src="/images/profile-app/31.jpg"
                  class="w-100 rounded"
                  alt=""
              />
            </div>
          </div>
        </b-modal>

        <!-- Settings Dropdown -->
        <b-dropdown
            class="dropdown-icon-none"
            toggle-class="h-45 w-45 icon-btn b-r-22 me-sm-2"
            variant="secondary"
        >
          <template #button-content>
            <icon-settings size="18"/>
          </template>

          <b-dropdown-item href="#">
            <icon-brand-hipchat size="18"/>
            <span class="f-s-13 ms-1">Chat Settings</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <icon-phone-call size="18"/>
            <span class="f-s-13 ms-1">Contact Settings</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <icon-settings size="18"/>
            <span class="f-s-13 ms-1">Settings</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </b-card-header>

    <!-- Body -->
    <b-card-body class="p-0">
      <div class="chat-container">
        <div class="text-center">
          <span class="badge text-light-secondary">Today</span>
        </div>

        <div
            v-for="chat in chatmessages"
            :key="chat.id"
            class="position-relative"
        >
          <!-- Left chat -->
          <template v-if="chat.position === 'left'">
            <div
                class="chatdp h-45 w-45 b-r-50 position-absolute start-0 bg-secondary"
            >
              <img
                  :src="chat.avatar"
                  alt="Avatar"
                  class="img-fluid b-r-50"
              />
            </div>
            <div class="chat-box">
              <p class="chat-text">{{ chat.message }}</p>
              <p class="text-muted">
                <icon-checks size="18" class="text-primary"/>
                {{ chat.time }}
              </p>
            </div>
          </template>

          <!-- Right chat -->
          <template v-else>
            <div class="chat-box-right">
              <p class="chat-text">{{ chat.message }}</p>
              <p class="text-muted">
                <icon-checks size="18" class="text-primary"/>
                {{ chat.time }}
              </p>
            </div>
            <div
                class="chatdp h-45 w-45 b-r-50 position-absolute end-0 top-0 bg-danger"
            >
              <img
                  :src="chat.avatar"
                  alt="Avatar"
                  class="img-fluid b-r-50"
              />
            </div>
          </template>
        </div>
      </div>
    </b-card-body>

    <!-- Footer -->
    <b-card-footer>
      <div class="chat-footer d-flex">
        <!-- Input + Emoji -->
        <div class="app-form flex-grow-1">
          <b-input-group>
            <span
                id="emoji-btn"
                class="input-group-text bg-secondary ms-2 me-2 b-r-10"
            >
              <icon-mood-smile size="18" class="text-white"/>
            </span>
            <b-tooltip target="emoji-btn" placement="top">Emoji</b-tooltip>

            <b-form-input
                type="text"
                class="b-r-6"
                placeholder="Type a message"
            />
            <b-button variant="primary" class="btn-sm ms-2 me-2 b-r-4">
              <icon-send size="18"/>
              <span>Send</span>
            </b-button>
          </b-input-group>
        </div>

        <!-- Extra Buttons -->
        <div class="d-none d-sm-flex">
          <b-button
              id="mic-btn"
              variant="secondary"
              class="w-50 h-50 icon-btn ms-2"
          >
            <icon-microphone size="18"/>
          </b-button>
          <b-tooltip target="mic-btn" placement="top">Microphone</b-tooltip>

          <b-button
              id="camera-btn"
              variant="secondary"
              class="w-50 h-50 icon-btn ms-2"
          >
            <icon-camera-plus size="18"/>
          </b-button>
          <b-tooltip target="camera-btn" placement="top">Camera</b-tooltip>

          <b-button
              id="attach-btn"
              variant="secondary"
              class="w-50 h-50 icon-btn ms-2"
          >
            <icon-paperclip size="18"/>
          </b-button>
          <b-tooltip target="attach-btn" placement="top">Attach file</b-tooltip>
        </div>

        <!-- Mobile Dropdown -->
        <b-dropdown
            class="dropdown-icon-none d-sm-none"
            toggle-class="d-flex-center ms-1 p-0"
            variant="light-primary"
        >
          <template #button-content>
            <icon-dots-vertical size="18"/>
          </template>

          <b-dropdown-item href="#">
            <icon-microphone size="18"/>
            <span class="f-s-13 ms-1">Microphone</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <icon-camera-plus size="18"/>
            <span class="f-s-13 ms-1">Camera</span>
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <icon-paperclip size="18"/>
            <span class="f-s-13 ms-1">Paperclip</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </b-card-footer>
  </b-card>
</template>
