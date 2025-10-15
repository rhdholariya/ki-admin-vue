<script setup>
import { ref } from "vue";
import { BContainer } from "bootstrap-vue-next";
import FsLightbox from "fslightbox-vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import GalleryLightbox from "@/components/Apps/Gallery/GalleryLightbox.vue";

import { PhStack } from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";

// Lightbox state
const lightboxToggler = ref(false);
const currentSlide = ref(1);

// Array of gallery image URLs for FsLightbox - MUST BE IN THE SAME ORDER AS GALLERY ITEMS
const gallerySources = [
  "/images/gallary/01.jpg", // Index 0 - First section, first item
  "/images/gallary/02.jpg", // Index 1 - First section, second item
  "/images/gallary/03.jpg", // Index 2 - Second section (nested), first item
  "/images/gallary/04.jpg", // Index 3 - Second section (nested), second item
  "/images/gallary/05.jpg", // Index 4 - Second section (nested), third item
  "/images/gallary/06.jpg", // Index 5 - Second section (nested), fourth item
  "/images/gallary/07.jpg", // Index 6 - Third section (nested), first item
  "/images/gallary/08.jpg", // Index 7 - Third section (nested), second item
  "/images/gallary/14.jpg", // Index 8 - Third section (nested), third item
  "/images/gallary/10.jpg", // Index 9 - Third section (nested), fourth item
  "/images/gallary/11.jpg", // Index 10 - Third section (nested), fifth item
  "/images/gallary/16.jpg", // Index 11 - Fourth section (single item)
  "/images/gallary/12.jpg", // Index 12 - Fifth section (single item)
  "/images/gallary/15.jpg", // Index 13 - Sixth section (single item)
  "/images/gallary/13.jpg", // Index 14 - Seventh section (single item)
  "/images/gallary/09.jpg", // Index 15 - Eighth section (single item)
];

// Handle image click from gallery
const handleImageClick = (slideNumber) => {
  console.log('Opening lightbox at slide:', slideNumber); // For debugging
  currentSlide.value = slideNumber;
  lightboxToggler.value = !lightboxToggler.value;
};

// Breadcrumb data
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
      <BContainer fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <!-- Gallery component -->
        <GalleryLightbox @image-click="handleImageClick"/>

        <!-- FsLightbox global lightbox -->
        <FsLightbox
            :toggler="lightboxToggler"
            :sources="gallerySources"
            :slide="currentSlide"
        />
      </BContainer>
    </main>
  </AppLayout>
</template>