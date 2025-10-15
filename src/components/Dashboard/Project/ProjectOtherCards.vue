<template>
  <!-- Profit Cards Column -->
  <b-col lg="4" xxl="2" class="order-1-lg">
    <b-row>
      <div class="col-sm-6 col-lg-12">
        <BCard class="project-profit-card" no-body>
          <BCardBody>
            <div class="profit-arrow">
              <span class="bg-white text-primary h-45 w-45 d-flex-center">
                <i class="ph-bold ph-arrow-up-right f-s-18"></i>
              </span>
            </div>
            <span class="bg-primary h-45 w-45 d-flex-center b-r-50">
              <i class="ph-bold ph-chart-line-up f-s-24"></i>
            </span>
            <div class="mt-3">
              <h4 class="text-dark">22.2K+</h4>
              <p class="f-w-500 mb-0 txt-ellipsis-1">
                Total profit Progress
              </p>
            </div>
          </BCardBody>
        </BCard>
      </div>
      <div class="col-sm-6 col-lg-12">
        <BCard class="bg-primary profit-card-2" no-body>
          <BCardBody>
            <i class="ph-duotone ph-calendar-check icon-bg"></i>
            <span class="bg-white h-50 w-50 d-flex-center b-r-50">
              <i class="ph-duotone ph-calendar-check text-primary f-s-24"></i>
            </span>
            <div class="mt-3">
              <h4 class="text-white">15+</h4>
              <p class="f-w-500 mb-0 txt-ellipsis-1">Active Projects</p>
            </div>
          </BCardBody>
        </BCard>
      </div>
    </b-row>
  </b-col>

  <!-- Online Candidates Column -->
  <b-col md="7" lg="4">
    <div class="header-box">
      <h5>Online Candidates</h5>
    </div>
    <BCard no-body>
      <BCardBody class="px-2 pt-2 equal-card">
        <div class="table-responsive app-scroll">
          <BTable
              :items="candidates"
              :fields="tableFields"
              class="table-bottom-border align-middle mb-0"
              thead-class="d-none"
          >
            <template #cell(candidate)="data">
              <div class="d-flex align-items-center">
                <div
                    :class="`h-40 w-40 d-flex-center b-r-12 overflow-hidden ${data.item.bgColor}`"
                >
                  <img
                      alt="candidate"
                      class="img-fluid"
                      :src="data.item.avatar"
                  />
                </div>
                <div class="flex-grow-1 ps-2">
                  <div class="fw-medium txt-ellipsis-1">
                    {{ data.item.name }}
                  </div>
                  <div class="text-muted f-s-12 txt-ellipsis-1">
                    {{ data.item.role }}
                  </div>
                </div>
              </div>
            </template>

            <template #cell(points)="data">
              <BBadge bg="light-primary" class="f-s-12 f-w-700">
                {{ data.item.points }}
              </BBadge>
            </template>

            <template #cell(actions)="data">
              <BFormCheckbox
                  switch
                  :id="`tableCheck-${data.item.id}`"
                  class="form-check-primary"
                  :checked="data.item.checked"
                  @change="() => handleCandidateToggle(data.item.id)"
              >
                <span class="f-w-500">
                  {{ data.item.checked ? "Remove" : "Add" }}
                </span>
              </BFormCheckbox>
            </template>
          </BTable>
          <div class="pb-0 text-nowrap ps-3 pt-2">
            Add New Candidates
          </div>
        </div>
      </BCardBody>
    </BCard>
  </b-col>

  <!-- Client List Column -->
  <b-col sm="6" lg="4" xxl="3" >
    <div class="header-box d-flex justify-content-between align-items-center">
      <h5>Client List</h5>
    </div>
    <BCard no-body>
      <BCardBody>
        <BTabs
            v-model="activeTab"
            class="app-tabs-primary border-0 flex-nowrap overflow-auto"
        >
          <BTab title="Client" />
          <BTab title="Active" />
          <BTab title="Deactivate" />
        </BTabs>
        <ul class="box-list client-list">
          <li
              v-for="client in clients"
              :key="client.id"
              class="d-flex align-items-center justify-content-between"
          >
            <div
                :class="`h-45 w-45 d-flex-center b-r-12 overflow-hidden ${client.bgColor} flex-shrink-0`"
            >
              <img
                  alt="client"
                  class="img-fluid"
                  :src="client.avatar"
              />
            </div>
            <div class="ms-2 flex-grow-1">
              <p class="mb-0 f-w-500 f-s-16 txt-ellipsis-1">
                {{ client.name }}
              </p>
              <p class="mb-0 f-s-12 txt-ellipsis-1">
                {{ client.points }}
              </p>
            </div>
            <span class="h-30 w-30 d-flex-center b-r-50">
              <i class="ti ti-chevron-right text-primary f-s-20"></i>
            </span>
          </li>
        </ul>
      </BCardBody>
    </BCard>
  </b-col>

  <!-- Notifications Column -->
  <b-col sm="6" lg="4" xxl="3">
    <ul class="box-list">
      <li class="d-flex justify-content-between align-items-center mt-3">
        <h5 class="mb-0 txt-ellipsis-1 flex-grow-1">Notifications</h5>
        <BBadge bg="primary">3 New</BBadge>
      </li>
      <li
          v-for="notification in notifications"
          :key="notification.id"
          class="d-flex align-items-center justify-content-between"
      >
        <div
            :class="`h-40 w-40 d-flex-center b-r-12 overflow-hidden ${notification.bgColor} text-white flex-shrink-0`"
        >
          <template v-if="notification.isInitials">
            {{ notification.avatar }}
          </template>
          <img
              v-else
              alt="notification"
              class="img-fluid"
              :src="notification.avatar"
          />
        </div>
        <div class="ms-2 flex-grow-1">
          <p class="mb-0 f-w-500 f-s-18 txt-ellipsis-1">
            {{ notification.title }}
          </p>
          <p class="mb-0 f-s-12 txt-ellipsis-1">
            {{ notification.time }}
          </p>
        </div>
        <BLink
            to="/apps/chat"
            target="_blank"
            class="text-light-success h-45 w-45 d-flex-center b-r-50"
        >
          <i class="ph ph-chat-circle-text f-s-20"></i>
        </BLink>
      </li>
    </ul>
  </b-col>
</template>

<script setup>
import {ref, reactive} from 'vue'
import {
  BCard,
  BCardBody,
  BBadge,
  BTable,
  BFormCheckbox,
  BTabs,
  BTab,
  BLink,
  BCol,
  BRow
} from 'bootstrap-vue-next'
import {
  candidatesData,
  clientsData,
  projectNotificationsData
} from '@/data/dashboard/project/OtherCardsData.js'

// Reactive data
const candidates = reactive([...candidatesData])
const clients = clientsData
const notifications = projectNotificationsData
const activeTab = ref(0)

// Table fields
const tableFields = [
  {key: 'candidate', label: 'Candidate'},
  {key: 'points', label: 'Points'},
  {key: 'actions', label: 'Actions'}
]

// Methods
const handleCandidateToggle = (id) => {
  const candidate = candidates.find(c => c.id === id)
  if (candidate) {
    candidate.checked = !candidate.checked
  }
}
</script>