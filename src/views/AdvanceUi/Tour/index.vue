<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import AppLayout from "@/views/AppLayout.vue"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue"
import { PhBriefcase } from "@phosphor-icons/vue"
import TourTab from "@/components/AdvanceUi/Tour/TourTab.vue"
import FeatureStories from "@/components/AdvanceUi/Tour/FeatureStories.vue"
import TourProfile from "@/components/AdvanceUi/Tour/TourProfile.vue"
import { BContainer, BRow } from "bootstrap-vue-next"
import Shepherd from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'

// Breadcrumb data
const breadcrumbItems = {
  title: "Tour",
  items: [
    { label: "Advance UI", icon: PhBriefcase },
    { label: "Tour", active: true },
  ],
}

let tour = null

onMounted(() => {
  // Initialize the tour
  tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
      },
      classes: 'shepherd-theme-custom',
      scrollTo: {
        behavior: 'smooth',
        block: 'center',
      },
    },
  })

  // Step 1: Profile Tabs
  tour.addStep({
    id: 'profile-tabs',
    title: 'All Tabs!',
    text: 'Go and check Now 👍',
    attachTo: {
      element: '#profile-tabs',
      on: 'bottom',
    },
    buttons: [
      { text: '< Back', action: tour.back },
      { text: 'Next >', action: tour.next },
    ],
  })

  // Step 2: Featured Stories
  tour.addStep({
    id: 'featured-Stories',
    title: 'Stories!',
    text: 'Beautiful day starts with some pictures.',
    attachTo: {
      element: '#featured-Stories',
      on: 'bottom',
    },
    buttons: [
      { text: '< Back', action: tour.back },
      { text: 'Next >', action: tour.next },
    ],
  })

  // Step 3: Post
  tour.addStep({
    id: 'post',
    title: 'Post',
    text: 'Some picture of our post section..',
    attachTo: {
      element: '#post',
      on: 'bottom',
    },
    buttons: [
      { text: '< Back', action: tour.back },
      { text: 'Next >', action: tour.next },
    ],
  })

  // Step 4: About Me
  tour.addStep({
    id: 'about-me',
    title: 'About Me',
    text: 'Something details about me!!',
    attachTo: {
      element: '#about-me',
      on: 'bottom',
    },
    buttons: [
      { text: '< Back', action: tour.back },
      { text: 'Next >', action: tour.next },
    ],
  })

  // Step 5: Friend
  tour.addStep({
    id: 'friend',
    title: 'Friend',
    text: 'Friendlists who follow this!',
    attachTo: {
      element: '#friend',
      on: 'bottom',
    },
    buttons: [
      { text: '< Back', action: tour.back },
      { text: 'Done 👍', action: tour.cancel },
    ],
  })

  // Start the tour
  tour.start()
})

onBeforeUnmount(() => {
  // Clean up the tour when component is destroyed
  if (tour) {
    tour.complete()
  }
})
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <TourTab id="tour-tabs" />
          <FeatureStories id="tour-stories" />
          <TourProfile id="tour-profile" />
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>

<style scoped>

</style>
