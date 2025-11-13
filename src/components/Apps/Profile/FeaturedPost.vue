<script setup>
import { ref } from "vue";
import { BCard, BCardBody } from "bootstrap-vue-next";
import FsLightbox from "fslightbox-vue";

const imageSources = [
  "/images/profile-app/19.jpg",
  "/images/profile-app/27.jpg",
  "/images/profile-app/28.jpg",
  "/images/profile-app/29.jpg",
  "/images/profile-app/30.jpg"
];

const lightboxToggler = ref(false);
const currentSlide = ref(1);

const openLightbox = (index) => {
  currentSlide.value = index + 1; // +1 because FsLightbox is 1-indexed
  lightboxToggler.value = !lightboxToggler.value;
};
</script>

<template>
  <b-card no-body>
    <b-card-body>

      <div class="d-flex flex-wrap gap-2 mt-3">
        <div
            v-for="(image, index) in imageSources"
            :key="index"
            class="gallery-thumbnail"
            @click="openLightbox(index)"
        >
          <img
              :src="image"
              class="img-fluid rounded w-90 h-90 object-fit-cover "
              :alt="`Gallery image ${index + 1}`"
          />
        </div>
      </div>

      <FsLightbox
          :toggler="lightboxToggler"
          :sources="imageSources"
          :slide="currentSlide"
      />
    </b-card-body>
  </b-card>
</template>

