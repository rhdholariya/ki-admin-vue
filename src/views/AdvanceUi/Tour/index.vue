<script setup lang="ts">
import { ref } from "vue"
import AppLayout from "@/views/AppLayout.vue"
import { BContainer, BRow } from "bootstrap-vue-next"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue"
import { PhBriefcase } from "@phosphor-icons/vue"
import TourTab from "@/components/AdvanceUi/Tour/TourTab.vue"



// Breadcrumb data
const breadcrumbItems = {
  title: "Tour",
  items: [
    { label: "Advance UI", icon: PhBriefcase },
    { label: "Tour", active: true },
  ],
}

// ✅ define activeTab
const activeTab = ref("1")
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <TourTab />

        </b-row>

      </b-container>
    </main>
  </AppLayout>
</template>
