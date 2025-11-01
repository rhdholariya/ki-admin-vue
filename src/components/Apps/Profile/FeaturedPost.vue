<script setup>
import { ref } from "vue";
import { BCard, BCardBody } from "bootstrap-vue-next";
import FsLightbox from "fslightbox-vue";

// Image sources - make sure these paths are correct
const imageSources = [
  "/images/profile-app/19.jpg",
  "/images/profile-app/27.jpg",
  "/images/profile-app/28.jpg",
  "/images/profile-app/29.jpg",
  "/images/profile-app/30.jpg"
];

// Lightbox state
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
      <!-- Your existing content here -->

      <!-- Image gallery -->
      <div class="d-flex flex-wrap gap-2 mt-3">
        <div
            v-for="(image, index) in imageSources"
            :key="index"
            class="gallery-thumbnail"
            @click="openLightbox(index)"
        >
          <img
              :src="image"
              class="img-fluid rounded"
              style="width: 100px; height: 100px; object-fit: cover; cursor: pointer;"
              :alt="`Gallery image ${index + 1}`"
          />
        </div>
      </div>

      <!-- FsLightbox component -->
      <FsLightbox
          :toggler="lightboxToggler"
          :sources="imageSources"
          :slide="currentSlide"
      />
    </b-card-body>
  </b-card>
</template>

<style scoped>
.gallery-thumbnail {
  transition: transform 0.2s;
}
.gallery-thumbnail:hover {
  transform: scale(1.05);
}
</style>