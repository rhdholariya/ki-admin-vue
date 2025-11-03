<script setup>
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { computed } from "vue";
import { PhStack } from "@phosphor-icons/vue";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";

import BlogDetailLeft from "@/components/Apps/BlogDetails/BlogDetailLeft.vue";
import BlogDetailRight from "@/components/Apps/BlogDetails/BlogDetailRight.vue";

// Breadcrumb configuration
const breadcrumbItems = computed(() => ({
  title: "Blog Details",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Blog Page" },
    { label: "Blog Details", active: true },
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <!-- Breadcrumb -->
        <Breadcrumb :breadcrumb="breadcrumbItems" />

        <!-- Page Layout -->
        <b-row>
          <b-col lg="8" xxl="9">
            <BlogDetailLeft />
          </b-col>

          <b-col lg="4" xxl="3">
            <BlogDetailRight />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>
