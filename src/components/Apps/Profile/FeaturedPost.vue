<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick, watch } from "vue";
import { BCard, BCardBody, BRow, BCol } from "bootstrap-vue-next";
import "glightbox/dist/css/glightbox.min.css";
import { IconBrandHipchat, IconDotsVertical, IconHeart, IconSend } from "@tabler/icons-vue";

const imageUrls = ref([
  "/images/profile-app/19.jpg",
  "/images/profile-app/27.jpg",
  "/images/profile-app/28.jpg",
  "/images/profile-app/29.jpg",
  "/images/profile-app/30.jpg",
]);

let lightbox = null;

async function initLightbox() {
  const GLightbox = (await import("glightbox")).default;
  lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    width: "90vw",
    height: "90vh",
  });
}

onMounted(async () => {
  await nextTick(); // wait for DOM to render
  initLightbox();
});

// Re-initialize if imageUrls change dynamically
watch(imageUrls, async () => {
  await nextTick();
  if (lightbox) lightbox.destroy();
  initLightbox();
});

onBeforeUnmount(() => {
  if (lightbox) lightbox.destroy();
});
</script>


<template>
  <b-card no-body>
    <b-card-body>
      <!-- User Info -->
      <div class="d-flex align-items-center">
        <div class="h-45 w-45 d-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-danger">
          <img
              src="/images/avatar/16.png"
              alt="Avatar"
              class="img-fluid"
              style="height: 45px; width: 45px; object-fit: cover;"
          />
        </div>
        <div class="flex-grow-1 ps-2 pe-2">
          <div class="fw-semibold">Heli Walsh</div>
          <div class="text-muted small">3 Week</div>
        </div>
        <div>
          <IconDotsVertical size="18" />
        </div>
      </div>

      <!-- Post Images -->
      <div class="post-div">
        <b-row class="g-2 my-2">
          <b-col
              v-for="(url, idx) in imageUrls"
              :key="idx"
              :cols="imageUrls.length > 2 && idx < 2 ? 6 : 4"
          >
            <a
                :href="url"
                class="glightbox"
                data-glightbox="type: image; zoomable: true"
            >
              <img :src="url" :alt="'Image ' + (idx + 1)" class="w-100 rounded" />
            </a>
          </b-col>
        </b-row>

        <p class="text-muted">
          There's nothing like fresh flowers!......🌸🌼🌻
        </p>

        <!-- Post Actions -->
        <div class="d-flex align-items-center mt-2">
          <IconHeart size="20" class="me-2" />
          <IconBrandHipchat size="20" class="me-2" />
          <IconSend size="20" class="me-2" />
          <p class="mb-0 text-secondary ms-2">2k Likes</p>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>




