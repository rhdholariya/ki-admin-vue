<script setup>
import { ref } from "vue";
import { BCard, BCardBody, BRow, BButton } from "bootstrap-vue-next";
import { IconPhotoHeart, IconUser } from "@tabler/icons-vue";

const imagePreview = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};
</script>

<template>
  <b-card no-body>
    <b-card-body>
      <b-row class="profile-container g-0">
        <!-- Image Details -->
        <div class="image-details">
          <div class="profile-image mb-2"></div>
          <div class="profile-pic">
            <div class="avatar-upload position-relative">
              <div class="avatar-edit position-absolute top-0 end-0">
                <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                    class="d-none"
                    @change="handleFileUpload"
                />
                <label for="imageUpload" class="cursor-pointer">
                  <IconPhotoHeart size="16"/>
                </label>
              </div>

              <div class="avatar-preview mt-3">
                <div id="imgPreview">
                  <img
                      v-if="imagePreview"
                      :src="imagePreview"
                      alt="Preview"
                      class="img-fluid rounded-circle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Person Details -->
        <div class="person-details">
          <h5 class="fw-semibold">
            Ninfa Monaldo
            <img
                width="20"
                height="20"
                src="/images/profile-app/01.png"
                alt="instagram-check-mark"
                class="ms-1"
            />
          </h5>
          <p>Web designer &amp; Developer</p>

          <div class="details g-0 d-flex gap-3">
            <div>
              <h4 class="text-primary">10</h4>
              <p class="text-secondary">Post</p>
            </div>
            <div>
              <h4 class="text-primary">3.4k</h4>
              <p class="text-secondary">Follower</p>
            </div>
            <div>
              <h4 class="text-primary">1k</h4>
              <p class="text-secondary">Following</p>
            </div>
          </div>

          <div class="my-2">
            <b-button variant="primary" class="rounded-pill">
              <IconUser size="16" class="me-1"/>
              Follow
            </b-button>
          </div>
        </div>
      </b-row>
    </b-card-body>
  </b-card>
</template>
