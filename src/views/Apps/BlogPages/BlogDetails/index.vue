<script setup>
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {computed} from "vue";
import {PhStack} from "@phosphor-icons/vue";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";
import BlogDetailLeft from "@/components/Apps/BlogDetails/BlogDetailLeft.vue";
import BlogDetailRight from "@/components/Apps/BlogDetails/BlogDetailRight.vue"


const breadcrumbItems = computed(() => ({
  title: "Blog Details",
  items: [
    { label: "Apps", icon: PhStack },
    { label: " Blog Page"},
    { label: " Blog Details" , active: true }
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <BContainer fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <BRow>
          <BCol lg="8" xxl="9">
            <BlogDetailLeft />
          </BCol>
          <BCol lg="4" xxl="3">
            <BlogDetailRight />
          </BCol>
        </BRow>
      </BContainer>
    </main>
  </AppLayout>
</template>