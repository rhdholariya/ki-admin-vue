<script setup>

import AppLayout from "@/views/AppLayout.vue";
import {BContainer} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";

// Breadcrumb data
const breadcrumbItems = {
  title: "Scrollbar",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Scrollbar", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        </b-container>
    </main>
  </AppLayout>
</template>