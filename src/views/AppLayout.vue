
<script setup>
import { ref } from "vue";
import Sidebar from "@/components/Layouts/sidebar/index.vue";
import HeaderMain from "@/components/Layouts/header/index.vue";
import FooterSection from "@/components/Layouts/footer/index.vue";
import Customizer from '@/components/Customizer/index.vue';
import WelcomeModal from "@/components/Layouts/WelcomeModal.vue";
import ScrollToTop from "@/components/Layouts/ScrollToTop.vue";

const isSemiNav = ref(false);
const toggleNav = () => (isSemiNav.value = !isSemiNav.value);
const closeSemiNav = () => (isSemiNav.value = false);
</script>


<template>
    <div class="app-wrapper">
        <Sidebar :class="{ 'semi-nav': isSemiNav }" />
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

