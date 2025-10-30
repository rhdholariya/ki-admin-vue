<script setup>

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {computed} from "vue";
import {PhStack} from "@phosphor-icons/vue";
import {BRow , BCol} from "bootstrap-vue-next";
import Ticketinfo from '@/components/Apps/TicketDetails/Ticketinfo.vue';
import Ticketfileupload from '@/components/Apps/TicketDetails/Ticketfileupload.vue';
import TicketdetailsData from "@/components/Apps/TicketDetails/TicketdetailsData.vue";

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Ticket Details",
  items: [
    { label: "Apps", icon: PhStack },
      {label: "Ticket Page"},
    { label: "Ticket Details", active: true }
  ],
}));
</script>
<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems" />
      <b-row className="ticket-details row">
        <b-col md="5" lg="4" xxl="3">
          <Ticketinfo />
          <Ticketfileupload />
        </b-col>
        <b-col md="7" lg="8" xxl="9">
          <TicketdetailsData />
        </b-col>
      </b-row>
    </main>
  </AppLayout>
</template>