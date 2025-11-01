<script setup>
import {computed, ref} from 'vue'
import {
  BRow,
  BCol,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormFile,
  BButton, BContainer
} from 'bootstrap-vue-next'

import LeftSidebar from '@/components/Apps/EmailPage/Email/LeftSidebar.vue'
import EmailContent from '@/components/Apps/EmailPage/Email/EmailContent.vue'
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

// Reactive data
const showComposeModal = ref(false)
const activeTab = ref(1)
const sidebarVisible = ref(true)

// Email data - Different data for each tab
const inboxEmails = ref([
  {
    id: 1,
    name: 'Gene Hart',
    avatar: '/images/avatar/14.png',
    avatarBg: 'text-bg-primary',
    preview: 'This is the content of the email. It may contain anything the user....',
    date: 'sep 23',
   badge: { text: 'Primary', variant: 'bg-light-success' } ,
    starred: false
  },
  {
    id: 2,
    name: 'Neil Fisher',
    avatar: '/images/avatar/15.png',
    avatarBg: 'text-bg-secondary',
    preview: 'It enables users to easily send and receive documents, images, links and ....',
    date: 'Oct 23',
    badge: {text: 'Company', variant: 'bg-light-primary'},
    starred: true
  },
  {
    id: 3,
    name: 'Simon Young',
    avatar: '/images/avatar/13.png',
    avatarBg: 'text-bg-dark',
    preview: 'Companies can use email to convey information to a large number of ....',
    date: 'Dec 22',
    badge: {text: 'Social', variant: 'bg-light-danger'},
    starred: false
  }
])

const sentEmails = ref([
  {
    id: 4,
    name: 'Sarah Johnson',
    avatar: '/images/avatar/07.png',
    avatarBg: 'text-bg-success',
    preview: 'E-mail has become one of the most widely used aspects of the Internet, ....',
    date: 'Oct 23',
    badge: {text: 'Company', variant: 'bg-light-primary'},
    starred: false
  },
  {
    id: 5,
    name: 'Mike Thompson',
    avatar: '/images/avatar/08.png',
    avatarBg: 'text-bg-info',
    preview: 'Regarding the project timeline and deliverables for Q4 2024....',
    date: 'Nov 5',
    badge: {text: 'Important', variant: 'bg-light-success'},
    starred: true
  }
])

const draftEmails = ref([
  {
    id: 6,
    name: 'Kylie Wright',
    avatar: '/images/avatar/16.png',
    avatarBg: 'text-bg-danger',
    preview: 'One of the great things about it is that it\'s fast, cost-effective, and convenient....',
    date: 'sep 23',
    badge: {text: 'Company', variant: 'bg-light-primary'},
    starred: false
  },
  {
    id: 7,
    name: 'Diana White',
    avatar: '/images/avatar/4.png',
    avatarBg: 'text-bg-dark',
    preview: 'Email messages are sent from software programs and web browsers, collectively as email....',
    date: 'Oct 23',
    badge: {text: 'Important', variant: 'bg-light-success'},
    starred: false
  }
])

const starredEmails = ref([
  {
    id: 2,
    name: 'Neil Fisher',
    avatar: '/images/avatar/15.png',
    avatarBg: 'text-bg-secondary',
    preview: 'It enables users to easily send and receive documents, images, links and ....',
    date: 'Oct 23',
    badge: {text: 'Company', variant: 'bg-light-primary'},
    starred: true
  },
  {
    id: 5,
    name: 'Mike Thompson',
    avatar: '/images/avatar/08.png',
    avatarBg: 'text-bg-info',
    preview: 'Regarding the project timeline and deliverables for Q4 2024....',
    date: 'Nov 5',
    badge: {text: 'Important', variant: 'bg-light-success'},
    starred: true
  },
  {
    id: 8,
    name: 'Lisa Brown',
    avatar: '/images/avatar/10.png',
    avatarBg: 'text-bg-warning',
    preview: 'Follow up on the meeting notes and action items from yesterday....',
    date: 'Dec 1',
    badge: {text: 'Company', variant: 'bg-light-primary'},
    starred: true
  }
])

const trashEmails = ref([
  {
    id: 9,
    name: 'John Smith',
    avatar: '/images/avatar/11.png',
    avatarBg: 'text-bg-warning',
    preview: 'Promotional email for our new product line and special discounts....',
    date: 'Nov 18',
    badge: {text: 'Promotions', variant: 'bg-light-secondary'},
    starred: false
  },
  {
    id: 10,
    name: 'Emma Wilson',
    avatar: '/images/avatar/12.png',
    avatarBg: 'text-bg-success',
    preview: 'Newsletter subscription confirmation and welcome message....',
    date: 'Dec 3',
    badge: {text: 'Social', variant: 'bg-light-danger'},
    starred: false
  }
])

// Methods
const setActiveTab = (tabId) => {
  activeTab.value = tabId
}

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

const breadcrumbItems = computed(() => ({
  title: "Email",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Email Pages"},
    { label: "Email" , active: true }
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row class="position-relative">
        <b-col lg="3">
          <LeftSidebar
              :active-tab="activeTab"
              @open-compose="showComposeModal = true"
              @toggle-sidebar="toggleSidebar"
              @tab-change="setActiveTab"
          />
        </b-col>

        <b-col lg="9">
          <EmailContent
              :active-tab="activeTab"
              :inbox-emails="inboxEmails"
              :sent-emails="sentEmails"
              :draft-emails="draftEmails"
              :starred-emails="starredEmails"
              :trash-emails="trashEmails"
              @toggle-sidebar="toggleSidebar"
          />
        </b-col>
      </b-row>
      </b-container>
    </main>
  </AppLayout>

  <!-- Compose Modal -->
  <b-modal
      v-model="showComposeModal"
      title="New Message"
      hide-footer
      centered
      id="emailBox"
  >
    <b-form class="app-form">
      <b-form-group label="To :" class="mb-3">
        <b-form-input
            type="email"
            placeholder="@gmail.com"
        />
      </b-form-group>

      <b-form-group label="Subject :" class="mb-3">
        <b-form-input
            type="text"
            placeholder="type subject..."
        />
      </b-form-group>

      <b-form-group
          label="Message"
          label-for="messageTextarea"
          class="mb-3"
      >
        <b-form-textarea
            id="messageTextarea"
            rows="3"
        />
      </b-form-group>

      <b-form-group label="Attached File">
        <BFormFile/>
      </b-form-group>
    </b-form>

    <template #modal-footer>
      <b-button
          variant="secondary"
          @click="showComposeModal = false"
      >
        Close
      </b-button>
      <b-button variant="primary">
        Send
      </b-button>
    </template>
  </b-modal>
</template>