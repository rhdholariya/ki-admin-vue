<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex align-items-center">
        <div class="d-lg-none">
          <b-button
              variant="secondary"
              class="me-3 toggle-btn p-0"
              @click="$emit('toggle-sidebar')"
          >
            <IconAlignJustified />
          </b-button>
        </div>
        <div class="flex-grow-1">
          <b-input-group class="b-r-search">
            <b-input-group-text class="bg-primary border-0">
              <IconSearch />
            </b-input-group-text>
            <BFormInput placeholder="Search..." />
          </b-input-group>
        </div>
        <div>
          <b-dropdown
              variant="link"
              class="dropdown-icon-none"
              toggle-class="icon-btn p-2"
              no-caret
          >
            <template #button-content>
              <IconDotsVertical />
            </template>
            <b-dropdown-item>
              <IconAlbum class="me-2" /> Primary
            </b-dropdown-item>
            <b-dropdown-item>
              <IconTag class="me-2" /> Promotions
            </b-dropdown-item>
            <b-dropdown-item>
              <IconUsers class="me-2" /> Social
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="content-wrapper mt-3">
        <!-- Inbox Tab -->
        <div v-if="activeTab === 1" class="mail-table">
          <EmailItem
              v-for="email in inboxEmails"
              :key="email.id"
              :email="email"
          />
        </div>

        <!-- Sent Tab -->
        <div v-else-if="activeTab === 2" class="mail-table">
          <EmailItem
              v-for="email in sentEmails"
              :key="email.id"
              :email="email"
          />
        </div>

        <!-- Draft Tab -->
        <div v-else-if="activeTab === 3" class="mail-table">
          <EmailItem
              v-for="email in draftEmails"
              :key="email.id"
              :email="email"
          />
        </div>


        <div v-else-if="activeTab === 4" class="mail-table">
          <EmailItem
              v-for="email in starredEmails"
              :key="email.id"
              :email="email"
          />
        </div>

        <!-- Spam Tab -->
        <div v-else-if="activeTab === 5" class="mail-table d-flex align-items-center justify-content-center">
          <div class="spam-box text-center">
            <img alt="spam" src="/images/icons/spam..png">
            <h5>No spam here</h5>
            <p>The MUA formats the message in email format and uses the submission a profile of the
              Simple Mail Transfer Protocol (SMTP), to send the message !</p>
          </div>
        </div>

        <!-- Trash Tab -->
        <div v-else-if="activeTab === 6" class="mail-table">
          <EmailItem
              v-for="email in trashEmails"
              :key="email.id"
              :email="email"
          />
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup>
import {
  BCard,
  BCardBody,
  BButton,
  BDropdown,
  BDropdownItem,
  BInputGroup,
  BInputGroupText,
  BFormInput
} from 'bootstrap-vue-next'

import {
  IconAlbum,
  IconTag,
  IconUsers,
  IconAlignJustified,
  IconSearch,
  IconDotsVertical
} from '@tabler/icons-vue'

import EmailItem from './EmailItem.vue'

defineProps({
  activeTab: {
    type: Number,
    default: 1
  },
  inboxEmails: {
    type: Array,
    default: () => []
  },
  sentEmails: {
    type: Array,
    default: () => []
  },
  draftEmails: {
    type: Array,
    default: () => []
  },
  starredEmails: {
    type: Array,
    default: () => []
  },
  trashEmails: {
    type: Array,
    default: () => []
  }
})

defineEmits(['toggle-sidebar'])
</script>

