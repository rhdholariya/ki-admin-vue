<script setup>
import { BContainer, BRow, BCol } from "bootstrap-vue-next";

// Import your timeline components
import TimeLine1 from "@/components/Apps/Timeline/TimeLine1.vue";
import TimeLine2 from "@/components/Apps/Timeline/TimeLine2.vue";




import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";
import {computed} from "vue";

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Timeline",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Timeline", active: true },
  ],
}));
</script>
<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
      <b-row class="row">
        <b-col lg="6">
          <TimeLine1 />
        </b-col>

        <b-col lg="6">
          <TimeLine2 />
        </b-col>
      </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>