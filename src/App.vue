<script setup>
import { RouterView } from 'vue-router';

import HeaderMain from '@/components/layouts/header/index.vue';
import Sidebar from '@/components/layouts/sidebar/index.vue';
import FooterSection from '@/components/layouts/footer/index.vue';
import {ref} from "vue";

const isSemiNav = ref(false);


const toggleNav = () => {
  isSemiNav.value = !isSemiNav.value;
};

const closeSemiNav = () => {
  isSemiNav.value = false;
};

import { onMounted } from "vue";

onMounted(() => {
  const head = document.head;
  const weights = ["regular", "thin", "light", "bold", "fill", "duotone"];

  weights.forEach((weight) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `https://unpkg.com/@phosphor-icons/web@2.0.3/src/${weight}/style.css`;
    head.appendChild(link);
  });
});

</script>

<template>
    <RouterView />
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
</script>
