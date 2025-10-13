<template>
  <b-card>
    <b-card-body>
      <div class="ticket-details-profile mb-4 p-3 rounded-3">
        <div class="ticket-profile mb-4 d-flex align-items-center">
          <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-secondary me-3">
            <img src="/images/avatar/2.png" alt="Marry jones" class="img-fluid" />
          </div>
          <div>
            <h6 class="mb-0">Marry jones</h6>
            <p class="text-secondary mb-0">(678)456-7890</p>
          </div>
        </div>
        <div class="ticket-profile-con d-flex gap-3 justify-content-center mt-3">
          <span class="bg-success h-35 w-35 d-flex-center b-r-50 text-white border-0">
            <IconPhoneCall size="18" />
          </span>

          <span class="bg-danger h-35 w-35 d-flex-center b-r-50 text-white border-0">
            <IconExternalLink size="18" />
          </span>

          <span class="bg-info h-35 w-35 d-flex-center b-r-50 text-white border-0">
            <IconUserFilled size="18" />
          </span>
        </div>
      </div>

      <div class="about-list pt-0">
        <div v-for="(item, index) in ticketDetails" :key="index" class="d-flex justify-content-between mb-2">
          <span class="f-w-600">{{ item.label }}</span>
          <span class="f-w-500 text-secondary small">{{ item.value }}</span>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup>
import { BCard, BCardBody } from 'bootstrap-vue-next';
import { IconPhoneCall, IconExternalLink, IconUserFilled } from '@tabler/icons-vue'
const ticketDetails = [
  { label: 'Ticket ID', value: 'AR-2044' },
  { label: 'Status', value: 'In Progress' },
  { label: 'Priority', value: 'High' },
  { label: 'Created', value: '2024-01-15' },
  { label: 'Due Date', value: '2024-01-30' },
  { label: 'Assignee', value: 'John Doe' },
  { label: 'Department', value: 'Technical Support' },
  { label: 'Category', value: 'Bug Report' }
];
</script>

