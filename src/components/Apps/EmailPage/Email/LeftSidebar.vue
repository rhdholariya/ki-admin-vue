<script setup>
import {
  BCard,
  BCardBody,
  BButton
} from 'bootstrap-vue-next'

import {
  IconMail,
  IconSend,
  IconFile,
  IconStar,
  IconAlertOctagon,
  IconTrash,
  IconCircleFilled,
  IconAlbum,
  IconTag,
  IconUsers,
  IconAlignJustified
} from '@tabler/icons-vue'

defineProps({
  activeTab: {
    type: Number,
    default: 1
  }
})

defineEmits(['open-compose', 'toggle-sidebar', 'tab-change'])


const tabs = [
  { id: 1, icon: IconMail, label: 'Inbox', count: '10+' },
  { id: 2, icon: IconSend, label: 'Sent' },
  { id: 3, icon: IconFile, label: 'Draft' },
  { id: 4, icon: IconStar, label: 'Starred', count: '2+' },
  { id: 5, icon: IconAlertOctagon, label: 'Spam' },
  { id: 6, icon: IconTrash, label: 'Trash' }
]


const labels = [
  { id: 1, name: 'Social', color: 'danger' },
  { id: 2, name: 'Company', color: 'primary' },
  { id: 3, name: 'Important', color: 'success' },
  { id: 4, name: 'Private', color: 'info' }
]


const menuItems = [
  { id: 1, icon: IconMail, label: 'All Mail' },
  { id: 2, icon: IconAlbum, label: 'Primary' },
  { id: 3, icon: IconTag, label: 'Promotions' },
  { id: 4, icon: IconUsers, label: 'Social' }
]
</script>

<template>
  <div class="mailbox">
    <b-card no-body>
      <b-card-body>
        <div class="d-flex">
          <b-button
              variant="primary"
              class="w-100"
              @click="$emit('open-compose')"
          >
            Compose
          </b-button>

          <div class="close-togglebtn">
            <b-button
                variant="link"
                class="ms-2 close-toggle p-0"
                @click="$emit('toggle-sidebar')"
            >
              <IconAlignJustified class="fs-5" />
            </b-button>
          </div>
        </div>

        <div class="horizontal-tab-wrapper">
          <ul class="email-list mt-3 tabs">
            <li
                v-for="tab in tabs"
                :key="tab.id"
                class="tab-link"
                :class="{ active: activeTab === tab.id }"
                @click="$emit('tab-change', tab.id)"
            >
              <component
                  :is="tab.icon"
                  class="fs-5 pe-2"
              />
              <span class="flex-grow-1">{{ tab.label }}</span>
              <span v-if="tab.count">{{ tab.count }}</span>
            </li>
          </ul>
        </div>

        <div class="app-divider-v dashed p-2"></div>

        <ul class="email-list">
          <li>
            <h6>Labels</h6>
          </li>
          <li
              v-for="label in labels"
              :key="label.id"
          >
            <IconCircleFilled
                class="pe-2"
                :class="`text-${label.color}`"
            />
            {{ label.name }}
          </li>
        </ul>

        <div class="app-divider-v dashed p-2"></div>

        <ul class="email-list">
          <li
              v-for="menu in menuItems"
              :key="menu.id"
          >
            <component
                :is="menu.icon"
                class="fs-5 pe-2"
            />
            {{ menu.label }}
          </li>
        </ul>
      </b-card-body>
    </b-card>
  </div>
</template>



