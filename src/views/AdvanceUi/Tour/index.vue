<script setup>
import { onMounted } from "vue"
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";
import TourTab from "@/components/AdvanceUi/Tour/TourTab.vue";
import FeatureStories from "@/components/AdvanceUi/Tour/FeatureStories.vue";

import {BContainer, BRow} from "bootstrap-vue-next"
import TourProfile from "@/components/AdvanceUi/Tour/TourProfile.vue";

// Breadcrumb data
const breadcrumbItems = {
  title: "Tour",
  items: [
    {label: "Advance UI", icon: PhBriefcase},
    {label: "Tour", active: true},
  ],
};


import Shepherd from "shepherd.js"
import 'shepherd.js/dist/css/shepherd.css'

// onMounted(() => {
//   const tour = new Shepherd.Tour({
//     defaultStepOptions: {
//       classes: "shadow-lg bg-white",
//       scrollTo: true,
//     },
//   })
//
//   // Step 1: Highlight profile card in TourProfile.vue
//   tour.addStep({
//     id: "profile",
//     text: "This is your profile card.",
//     attachTo: { element: "#tour-profile", on: "bottom" },
//     buttons: [{ text: "Next", action: tour.next }],
//   })
//
//   // Step 2: Highlight feature stories
//   tour.addStep({
//     id: "stories",
//     text: "Here are your feature stories.",
//     attachTo: { element: "#tour-stories", on: "top" },
//     buttons: [
//       { text: "Back", action: tour.back },
//       { text: "Next", action: tour.next },
//     ],
//   })
//
//   // Step 3: Highlight tabs
//   tour.addStep({
//     id: "tabs",
//     text: "Use these tabs to explore.",
//     attachTo: { element: "#tour-tabs", on: "top" },
//     buttons: [
//       { text: "Back", action: tour.back },
//       { text: "Done", action: tour.complete },
//     ],
//   })
//
//   // Start the tour
//   tour.start()
// })
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <TourTab id="tour-tabs" />
          <FeatureStories id="tour-stories"/>
          <TourProfile id="tour-profile"/>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>

<style scoped>

</style>
