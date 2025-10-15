<script setup>

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {BContainer} from "bootstrap-vue-next";
import ProjectDetailsLeft from "@/components/Apps/ProjectDetails/ProjectDetailsLeft.vue";
import ProjectDetailsCenter from "@/components/Apps/ProjectDetails/ProjectDetailsCenter.vue";
import ProjectDetailsRight from "@/components/Apps/ProjectDetails/ProjectDetailsRight.vue";
import {computed} from "vue";
import {PhStack} from "@phosphor-icons/vue";
import {
  BRow
} from "bootstrap-vue-next";

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Project Details",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Project Details"},
    { label: "Projects" , active: true }
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <ProjectDetailsLeft/>
          <ProjectDetailsCenter />
          <ProjectDetailsRight />
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>