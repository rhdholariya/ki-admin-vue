<script setup>
import { RouterView } from 'vue-router';

import HeaderMain from './components/header/index.vue';
import Sidebar from './components/sidebar/index.vue';
import FooterSection from './components/footer/index.vue';
import {ref} from "vue";

const isSemiNav = ref(false);


const toggleNav = () => {
  isSemiNav.value = !isSemiNav.value;
};

const closeSemiNav = () => {
  isSemiNav.value = false;
};

</script>

<template>
  <div class="app-wrapper">
    <Sidebar :class="{ 'semi-nav': isSemiNav }" />
    <div class="app-content">
      <HeaderMain @toggle-nav="toggleNav" @close-nav="closeSemiNav"/>

      <slot>

      </slot>
      <RouterView />

      <FooterSection />
    </div>
  </div>
</template>
