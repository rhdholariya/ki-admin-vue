
<script setup>
import {computed, ref, watch} from "vue";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";


import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

import ProfileAppTabs from "@/components/Apps/Profile/profileAppTabs.vue";
import FriendsCard from "@/components/Apps/Profile/FriendsCard.vue";
import FeaturedPost from "@/components/Apps/Profile/FeaturedPost.vue";
import StorisFeature from "@/components/Apps/Profile/StorisFeature.vue";
import ProfileCard from "@/components/Apps/Profile/ProfileCard.vue";
import AboutMe from "@/components/Apps/Profile/AboutMe.vue";

// Local reactive state
const data = ref("1");

// Watch for changes to debug
watch(data, (newValue) => {
  console.log('Profile data changed to:', newValue);
});

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Profile",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Profile"},
    { label: "Profile" , active: true }
  ],
}));

</script>
<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <!-- Left Sidebar -->
          <b-col lg="3">
            <ProfileAppTabs v-model="data" />
            <FriendsCard />
            <FeaturedPost />
          </b-col>
          <!-- Middle Content -->
          <StorisFeature :data="data" />
          <!-- Right Sidebar -->
          <b-col lg="4" xxl="3" class="order--1-lg col-box-4">
            <ProfileCard />
            <AboutMe />
          </b-col>
        </b-row>
      </b-container>

    </main>
  </AppLayout>

</template>