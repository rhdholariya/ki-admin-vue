<template>
    <div class="app-wrapper">
        <Sidebar :class="{ 'semi-nav': isSemiNav }" />
        <div class="app-content">
            <HeaderMain @toggle-nav="toggleNav" @close-nav="closeSemiNav" />
            <slot/>
            <FooterSection />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import Sidebar from "@/components/layouts/sidebar/index.vue";
import HeaderMain from "@/components/layouts/header/index.vue";
import FooterSection from "@/components/layouts/footer/index.vue";

const isSemiNav = ref(false);
const toggleNav = () => (isSemiNav.value = !isSemiNav.value);
const closeSemiNav = () => (isSemiNav.value = false);
</script>
