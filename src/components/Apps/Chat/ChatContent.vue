<script setup>
import { ref } from "vue";
import {BTabs, BTab, BDropdownItem, BDropdown} from "bootstrap-vue-next";
import {IconBrandHipchat, IconChecks, IconPhoneCall, IconPlus} from "@tabler/icons-vue";
import { PhLockKeyOpen, PhUsersThree } from "@phosphor-icons/vue";
import { chatGroups, privateContacts } from "@/data/app/Chatapp/ChatData.js";

const activeTabInner = ref(0);
</script>

<template>
  <div class="tabs-content active">
    <b-tabs
        v-model="activeTabInner"
        card
        nav-class="app-tabs-primary tab-light-primary chat-status-tab border-0 justify-content-between mb-0 pb-0"
    >

      <b-tab>
        <template #title>
          <PhLockKeyOpen size="18" weight="duotone" class="me-2" />
          Private
        </template>

        <div class="chat-contact">
          <div
              v-for="contact in privateContacts"
              :key="contact.id"
              class="chat-contactbox d-flex align-items-center"
          >

            <div class="position-relative me-3">
              <span
                  :class="[
                  'h-45 w-45 d-flex-center b-r-50 position-relative',
                  contact.status
                ]"
              >
                <img
                    :src="contact.avatar"
                    :alt="contact.name"
                    class="img-fluid b-r-50"
                />
                <span
                    class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"
                ></span>
              </span>
            </div>

            <div class="flex-grow-1">
              <p class="mb-0 f-w-500 text-dark text-truncate">
                {{ contact.name }}
              </p>
              <p
                  class="text-secondary f-s-12 chat-message mb-0 d-flex align-items-center"
              >
                <IconChecks size="16" class="me-1" />
                <span class="txt-ellipsis-1">{{ contact.message }}</span>
              </p>
            </div>

            <div>
              <p class="f-s-12 chat-time mb-0">{{ contact.time }}</p>
            </div>
          </div>
        </div>
      </b-tab>

      <b-tab>
        <template #title>
          <PhUsersThree size="18" weight="duotone" class="me-2" />
          Group
        </template>

        <div class="chat-contact chat-group-list">
          <div
              v-for="group in chatGroups"
              :key="group.id"
              class="chat-contactbox d-flex align-items-center position-relative"
          >
            <div class="position-relative me-3">
              <ul
                  class="avatar-group list-unstyled d-flex align-items-center mb-0"
              >
                <li
                    v-if="group.imageSrc"
                    :class="[
                    'h-45 w-45 d-flex-center overflow-hidden b-r-50',
                    'bg-' + group.avatarBg
                  ]"
                >
                  <img
                      :src="group.imageSrc"
                      :alt="group.groupName"
                      class="img-fluid"
                  />
                </li>
                <li
                    v-else
                    :class="[
                    'text-bg-' + group.avatarBg,
                    'h-45 w-45 d-flex-center b-r-50'
                  ]"
                >
                  {{ group.avatars[0] }}
                </li>
                <li
                    class="text-bg-secondary h-35 w-35 d-flex-center b-r-50"
                    :title="group.avatars[1]"
                >
                  {{ group.avatars[1] }}
                </li>
              </ul>
            </div>

            <div class="flex-grow-1 text-start">
              <p class="mb-0 f-w-500 text-dark txt-ellipsis-1">
                {{ group.groupName }}
              </p>
              <p class="text-secondary f-s-12 chat-message mb-0">
                {{ group.lastMessage }}
              </p>
            </div>

            <div>
              <p class="f-s-12 chat-time mb-0">{{ group.time }}</p>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>



  </div>
</template>
