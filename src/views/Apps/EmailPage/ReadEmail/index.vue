<script setup>
import {computed, ref} from 'vue'
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BModal,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormFile,
  BDropdown,
  BDropdownItem,
  BBadge,
  BContainer
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
  IconArrowLeft,
  IconArchive,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconDotsVertical,
  IconPaperclip,
  IconDownload,
  IconArrowBackUp,
  IconCornerUpLeftDouble,
  IconArrowForwardUp,
  IconMailOpened
} from '@tabler/icons-vue'
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

const showComposeModal = ref(false)
const activeTab = ref(1)

const tabs = ref([
  {id: 1, icon: IconMail, label: 'Inbox', count: '10+'},
  {id: 2, icon: IconSend, label: 'Sent'},
  {id: 3, icon: IconFile, label: 'Draft'},
  {id: 4, icon: IconStar, label: 'Starred', count: '2+'},
  {id: 5, icon: IconAlertOctagon, label: 'Spam'},
  {id: 6, icon: IconTrash, label: 'Trash'}
])

const labels = ref([
  {id: 1, name: 'Social', color: 'danger'},
  {id: 2, name: 'Company', color: 'primary'},
  {id: 3, name: 'Important', color: 'success'},
  {id: 4, name: 'Private', color: 'info'}
])

const menuItems = ref([
  {id: 1, icon: IconMail, label: 'All Mail'},
  {id: 2, icon: IconAlbum, label: 'Primary'},
  {id: 3, icon: IconTag, label: 'Promotions'},
  {id: 4, icon: IconUsers, label: 'Social'}
])

const emailActions = ref([
  {id: 1, icon: IconArchive, tooltip: 'Archive'},
  {id: 2, icon: IconStar, tooltip: 'Starred'},
  {id: 3, icon: IconAlertOctagon, tooltip: 'Spam'},
  {id: 4, icon: IconTrash, tooltip: 'Delete'},
  {id: 5, icon: IconFile, tooltip: 'Folder'},
  {id: 6, icon: IconTag, tooltip: 'Labels'}
])


const attachedFiles = ref([
  {
    id: 1,
    name: "Meeting Paper's",
    size: "1MB",
    icon: "/images/icons/file-manager-icon/file.png"
  },
  {
    id: 2,
    name: "Project Details",
    size: "18 Files",
    icon: "/images/icons/file-manager-icon/folder.png"
  }
])

const breadcrumbItems = computed(() => ({
  title: "Read Email",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Email Pages"},
    { label: "Read Email" , active: true }
  ],
}));
</script>


<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-row>
        <b-col xl="3">
          <b-card class="d-none d-xl-block" no-body>
            <b-card-body>
              <b-button
                  variant="primary"
                  class="w-100"
                  @click="showComposeModal = true"
              >
                Compose
              </b-button>

              <!-- Compose Modal -->
              <b-modal
                  v-model="showComposeModal"
                  title="New Message"
                  hide-footer
                  centered
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

              <div class="horizontal-tab-wrapper">
                <ul class="email-list mt-3 tabs">
                  <li
                      v-for="tab in tabs"
                      :key="tab.id"
                      class="tab-link"
                      :class="{ active: activeTab === tab.id }"
                      @click="activeTab = tab.id"
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
        </b-col>

        <BCol xl="9">
          <b-card no-body>
            <b-card-body>
              <div class="d-flex align-items-center flex-wrap mb-3">
                <div class="flex-grow-1">
                  <b-button
                      variant="link"
                      class="p-0 pe-2"
                      :to="{ name: 'email' }"
                      v-b-tooltip.hover="'Back To Inbox'"
                  >
                    <IconArrowLeft class="fs-4 text-dark"/>
                  </b-button>

                  <b-button
                      v-for="action in emailActions"
                      :key="action.id"
                      variant="link"
                      class="border-0 p-1"
                      v-b-tooltip.hover="action.tooltip"
                  >
                    <component
                        :is="action.icon"
                        class="fs-5 text-dark"
                    />
                  </b-button>
                </div>

                <div class="justify-content-end">
                  <span class="text-muted text-dark me-2">2 to 10</span>
                  <b-button
                      variant="link"
                      class="border-0 p-1"
                      v-b-tooltip.hover="'Next'"
                  >
                    <IconChevronLeft class="fs-5 text-dark"/>
                  </b-button>
                  <b-button
                      variant="link"
                      class="border-0 p-1"
                      v-b-tooltip.hover="'Previous'"
                  >
                    <IconChevronRight class="fs-5 text-dark"/>
                  </b-button>
                </div>
              </div>

              <div class="mail-container">
                <div class="d-flex align-items-center flex-nowrap mb-5">
                  <div class="position-relative">
                    <div class="bg-secondary h-45 w-45 d-flex-center b-r-50">
                      <img
                          alt=""
                          class="img-fluid b-r-50"
                          src="/images/avatar/6.png"
                      >
                    </div>
                    <span
                        class="position-absolute top-0 end-0 d-flex-center bg-success border border-light rounded-circle text-center p-1 f-s-10"></span>
                  </div>

                  <div class="flex-grow-1 ps-2">
                    <p class="text-muted f-s-14 m-0">bettehagenes@gmail.com</p>
                    <b-dropdown
                        variant="link"
                        class="p-0 text-dark hover-dropdown"
                        toggle-class="waves-effect waves-light text-dark p-0"
                        no-caret

                    >
                      <template #button-content>
                        to
                        <IconChevronDown/>
                      </template>
                      <b-dropdown-item>
                        From : <span class="text-muted f-s-14">arteam@gmail.com</span>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        To : <span class="text-muted f-s-14">bettehagenes@gmail.com</span>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        cc : <span class="text-muted f-s-14">bettehagenes@gmail.com</span>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        Date : <span class="text-muted f-s-14">29 Sep 2024</span>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        Subject : <span class="text-muted f-s-14">meeting invitation</span>
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <div class="text-end d-none d-sm-block">
                    <p>Sep 29 2024, 4:00 PM</p>
                    <BBadge variant="primary">Company</BBadge>
                  </div>

                  <div class="d-none d-sm-block">
                    <b-dropdown
                        variant="link"
                        class="ps-2 dropdown-icon-none"
                        toggle-class="icon-btn"
                        no-caret
                    >
                      <template #button-content>
                        <IconDotsVertical/>
                      </template>
                      <b-dropdown-item>
                        <IconArchive class="me-2"/>
                        Archive
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <IconTrash class="me-2"/>
                        Delete
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <IconMailOpened class="me-2"/>
                        Read Mail
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>

                <div>
                  <div class="mb-3">
                    <h6>Hello! Bette</h6>
                  </div>
                  <div class="mb-3 text-secondary">
                    <p>I hope you're doing well. I would like to schedule a one-on-one meeting with you to <strong>discussing
                      a new project</strong>. I'll send over the agenda in advance.</p>
                    <p>The meeting will be in my office, will you be available one-on-one <strong>10 Oct,2024 at 10PM
                      ?</strong> It's important that we have this meeting so that we can continue to work effectively
                      together.</p>
                  </div>
                  <div class="mb-3 text-secondary">
                    <p>I hope you can make it!</p>
                    <p>Best,</p>
                  </div>
                  <p class="f-w-500">AR team</p>
                </div>

                <div class="app-divider-v dotted"></div>

                <div class="mb-3">
                  <h6>
                    <IconPaperclip class="me-2"/>
                    Attached
                  </h6>
                  <div class="data-list-box d-flex flex-wrap gap-2 mt-3">
                    <div
                        v-for="file in attachedFiles"
                        :key="file.id"
                        class="filebox"
                    >
                      <div class="d-flex gap-3 align-items-center position-relative">
                        <div class="position-absolute start-0">
                          <img
                              :alt="file.name"
                              class="w-35 h-35"
                              :src="file.icon"
                          >
                        </div>
                        <div class="flex-grow-1 mg-s-40">
                          <h6 class="mb-0">{{ file.name }}</h6>
                          <p class="text-secondary mb-0">{{ file.size }}</p>
                        </div>
                        <p class="file-data text-secondary f-w-500 mb-0">
                          <IconDownload class="fs-4"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <div id="editor">
                    <p>Type Message...</p>
                  </div>
                </div>

                <b-button variant="primary" class="mb-1 me-2">
                  <IconArrowBackUp class="me-1"/>
                  Reply
                </b-button>
                <b-button variant="primary" class="mb-1 me-2">
                  <IconCornerUpLeftDouble class="me-1"/>
                  Reply All
                </b-button>
                <b-button variant="primary" class="mb-1">
                  <IconArrowForwardUp class="me-1"/>
                  Forward
                </b-button>
              </div>
            </b-card-body>
          </b-card>
        </BCol>
      </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>



