<script setup>
import { computed, ref } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BTab,
  BTabs,
} from "bootstrap-vue-next";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import TeamCard from "@/components/Apps/Team/TeamCard.vue";
import AppLayout from "@/views/AppLayout.vue";

// Data
import {
  developerTeamData,
  marketingTeamData,
  teamMembers,
} from "@/data/app/Team/Teamdata.js";

// Icons
import { PhMegaphone, PhPenNib, PhStack, PhGear } from "@phosphor-icons/vue";

const activeTab = ref(0);

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Team",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Team", active: true }
  ],
}));

</script>

<template>
  <AppLayout>
    <main>
    <BContainer fluid>

    <Breadcrumb :breadcrumb="breadcrumbItems" />
    <b-tabs v-model="activeTab" content-class="content-wrapper mt-3" nav-class="pb-0 tab-wrapper tabs" no-body>
      <!-- Designer Tab -->
      <b-tab title="Designer" key="1" no-body>
        <template #title>
          <PhPenNib weight="duotone" :size="18" class="me-2" /> Designer
        </template>
        <b-card>
          <b-card-body>
            <b-row>
              <b-col v-for="(member, index) in teamMembers" :key="index" md="6" xl="4">
                <TeamCard :member="member" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-tab>

      <!-- Development Tab -->
      <b-tab title="Development" key="2">
        <template #title>
          <PhGear weight="duotone" :size="18" class="me-2" /> Development
        </template>
        <b-card>
          <b-card-body>
            <b-row>
              <b-col v-for="(member, index) in developerTeamData" :key="index" md="6" xl="4">
                <TeamCard :member="member" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-tab>

      <!-- Marketing Tab -->
      <b-tab title="Marketing" key="3">
        <template #title>
          <PhMegaphone weight="duotone" :size="18" class="me-2" /> Marketing
        </template>
        <b-card>
          <b-card-body>
            <b-row>
              <b-col v-for="(member, index) in marketingTeamData" :key="index" md="6" xl="4">
                <TeamCard :member="member" :is-marketing="true" />
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-tab>
    </b-tabs>
  </BContainer>
    </main>
  </AppLayout>
</template>
