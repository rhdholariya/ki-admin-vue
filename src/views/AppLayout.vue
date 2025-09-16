
<script setup>
import { ref } from "vue";
import Sidebar from "@/components/layouts/sidebar/index.vue";
import HeaderMain from "@/components/layouts/header/index.vue";
import FooterSection from "@/components/layouts/footer/index.vue";
import Customizer from '@/components/Customizer/index.vue';

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
          <Customizer />
        </div>
    </div>
</template>

