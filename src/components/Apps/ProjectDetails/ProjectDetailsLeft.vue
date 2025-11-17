<script setup>
import { computed } from "vue";
import {
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BTable,
  BBadge,
  BImg,
} from "bootstrap-vue-next";
import { Tooltip } from "bootstrap";

import {
  projectDetails,
  teamMembers,
} from "@/data/app/projectapp/ProjectDetailData.js";

// Table configuration
const tableFields = [
  { key: "name", label: "" },
  { key: "value", label: "" },
];

const projectDetailsTable = computed(() => [
  { name: "Name", value: projectDetails.name },
  { name: "Manager", value: projectDetails.manager },
  { name: "Start Date", value: projectDetails.startDate },
  { name: "End Date", value: projectDetails.endDate },
  { name: "Pricing", value: projectDetails.pricing },
  { name: "Assigned By", value: "Team" },
  { name: "Status", value: projectDetails.status },
]);

const assignedByAvatars = computed(() => [
  { name: "Everlee Lambert", initial: "A", colorClass: "text-bg-danger" },
  { name: "Hunter Scott", initial: "CD", colorClass: "text-bg-dark" },
  { name: "Samantha Cole", initial: "XYZ", colorClass: "text-bg-warning" },
  { name: "2 More", initial: "2+", colorClass: "text-bg-secondary" },
]);


const vTooltip = {
  mounted(el, binding) {
    new Tooltip(el, { title: binding.value, placement: "top" });
  },
  unmounted(el) {
    const tooltip = Tooltip.getInstance(el);
    if (tooltip) tooltip.dispose();
  },
};
</script>

<template>
  <b-col md="6" xxl="3" class="order-md-2 order-xxl-1">

    <b-card no-body>
      <b-card-header>
        <h5>Project Details</h5>
      </b-card-header>
      <b-card-body>
        <b-table
            borderless
            class="project-details-table align-middle mb-0"
            :items="projectDetailsTable"
            :fields="tableFields"
        >
          <template #cell(name)="data">
            <strong>{{ data.value }}</strong>
          </template>

          <template #cell(value)="data">
            <div class="text-end">
              <span
                  v-if="data.item.name === 'Start Date'"
                  class="text-primary"
              >
                {{ data.value }}
              </span>

              <span
                  v-else-if="data.item.name === 'End Date'"
                  class="text-danger"
              >
                {{ data.value }}
              </span>

              <h6 v-else-if="data.item.name === 'Pricing'" class="mb-0">
                {{ data.value }}
              </h6>

              <div
                  v-else-if="data.item.name === 'Assigned By'"
                  class="avatar-group justify-content-end"
              >
                <span
                    v-for="(avatar, index) in assignedByAvatars"
                    :key="index"
                    :class="['h-30 w-30 d-flex-center rounded-circle', avatar.colorClass]"
                    v-tooltip="avatar.name"
                >
                  {{ avatar.initial }}
                </span>
              </div>

              <b-badge
                  v-else-if="data.item.name === 'Status'"
                  variant="light-primary"
                  class="text-primary"
              >
                {{ data.value }}
              </b-badge>

              <span v-else>{{ data.value }}</span>
            </div>
          </template>
        </b-table>
      </b-card-body>
    </b-card>


    <b-card no-body class="mt-3">
      <b-card-header>
        <h5 class="header-title-text">Project Team</h5>
      </b-card-header>
      <b-card-body>
        <div class="project-team-list">
          <div
              v-for="(member, index) in teamMembers"
              :key="index"
              class="d-flex align-items-center mt-3"
          >
            <div
                v-if="member.imgSrc"
                :class="`h-35 w-35 d-flex-center rounded overflow-hidden bg-${member.bgColor}`"
            >
              <b-img :src="member.imgSrc" :alt="member.name" class="img-fluid" />
            </div>

            <span
                v-else
                :class="['h-35 w-35 d-flex-center rounded', member.color]"
            >
              {{ member.initial }}
            </span>

            <div class="flex-grow-1 ps-2">
              <h6 class="fs-6 mb-0 fw-medium">{{ member.name }}</h6>
              <p class="text-muted f-s-13 mb-0 f-w-500">
                {{ member.role }}
              </p>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
