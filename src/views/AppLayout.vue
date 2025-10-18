<script setup>
import { ref } from "vue";
import Sidebar from "@/components/Layouts/sidebar/index.vue";
import HeaderMain from "@/components/Layouts/header/index.vue";
import FooterSection from "@/components/Layouts/footer/index.vue";
import Customizer from '@/components/Customizer/index.vue';
import WelcomeModal from "@/components/Layouts/WelcomeModal.vue";
import ScrollToTop from "@/components/Layouts/ScrollToTop.vue";

const sidebarOpen = ref(false);

const toggleNav = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
const closeSemiNav = () => {
  sidebarOpen.value = false;
};
</script>

<template>
  <div class="app-wrapper">
    <Sidebar v-model:sidebarOpen="sidebarOpen" />

    <div class="app-content">
      <HeaderMain @toggle-nav="toggleNav" @close-nav="closeSemiNav" />

      <slot/>
      <FooterSection />
      <ScrollToTop />
      <Customizer />
      <WelcomeModal />
    </div>
  </div>
</template>
