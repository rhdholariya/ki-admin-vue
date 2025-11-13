<script setup>
import { ref } from "vue";
import { BContainer } from "bootstrap-vue-next";
import FsLightbox from "fslightbox-vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import GalleryLightbox from "@/components/Apps/Gallery/GalleryLightbox.vue";

import { PhStack } from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";

const lightboxToggler = ref(false);
const currentSlide = ref(1);

const gallerySources = [
  "/images/gallary/01.jpg",
  "/images/gallary/02.jpg",
  "/images/gallary/03.jpg",
  "/images/gallary/04.jpg",
  "/images/gallary/05.jpg",
  "/images/gallary/06.jpg",
  "/images/gallary/07.jpg",
  "/images/gallary/08.jpg",
  "/images/gallary/14.jpg",
  "/images/gallary/10.jpg",
  "/images/gallary/11.jpg",
  "/images/gallary/16.jpg",
  "/images/gallary/12.jpg",
  "/images/gallary/15.jpg",
  "/images/gallary/13.jpg",
  "/images/gallary/09.jpg",
];

const handleImageClick = (slideNumber) => {
  currentSlide.value = slideNumber;
  lightboxToggler.value = !lightboxToggler.value;
};

const breadcrumbItems = {
  title: "Gallery",
  items: [
    {label: "Apps", icon: PhStack},
    {label: "Gallery", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <GalleryLightbox @image-click="handleImageClick"/>

        <FsLightbox
            :toggler="lightboxToggler"
            :sources="gallerySources"
            :slide="currentSlide"
        />
      </b-container>
    </main>
  </AppLayout>
</template>