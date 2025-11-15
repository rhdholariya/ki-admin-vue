<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormSelect,
  BFormFile,
  BButton,
  BRow,
  BCol,
  BImg,
} from "bootstrap-vue-next";


import { IconPhotoHeart } from "@tabler/icons-vue";


const previewUrl = ref(null);
const fileInputRef = ref(null);


const formData = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  language: "EN",
});


const handleFileChange = (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    previewUrl.value = reader.result;
  };
  reader.readAsDataURL(file);
};

const handleSubmit = () => {
};
</script>


<template>
  <b-card class="setting-profile-tab" no-body>
    <b-card-header>
      <h5>Profile</h5>
    </b-card-header>
    <b-card-body>
      <div class="profile-tab profile-container">
        <!-- Profile Picture Section -->
        <div class="image-details">
          <div class="profile-image"></div>
          <div class="profile-pic">
            <div class="avatar-upload">
              <div class="avatar-edit">
                <b-form-file
                  id="imageUpload"
                  accept=".png,.jpg,.jpeg"
                  @change="handleFileChange"
                  ref="fileInputRef"
                  style="display: none"
                />
                <label for="imageUpload">
                  <IconPhotoHeart :size="16" />
                </label>
              </div>
              <div class="avatar-preview">
                <div
                  id="imgPreview"
                  :class="['preview-image', { 'has-image': previewUrl }]"
                  :style="previewUrl ? { backgroundImage: `url(${previewUrl})` } : {}"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Details -->
        <div class="person-details">
          <h5 class="fw-bold">
            Ninfa Monaldo
            <b-img
              :width="20"
              :height="20"
              src="/images/profile-app/01.png"
              alt="instagram-check-mark"
            />
          </h5>
          <p>Web designer & Developer</p>
        </div>

        <!-- User Info Form -->
        <b-form class="app-form" @submit.prevent="handleSubmit">
          <h5 class="mb-2 text-dark fw-bold">User Info</h5>
          <b-row>
            <b-col md="12">
              <b-form-group label="Username" class="mb-3">
                <b-form-input
                  v-model="formData.username"
                  type="text"
                  placeholder="Maria C. Eck"
                />
              </b-form-group>
            </b-col>
            <b-col md="12">
              <b-form-group label="Email address" class="mb-3">
                <b-form-input
                  v-model="formData.email"
                  type="email"
                  placeholder="MariaCEck@teleworm.us"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Password" class="mb-3">
                <b-form-input
                  v-model="formData.password"
                  type="password"
                  placeholder="*******"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Confirm Password" class="mb-3">
                <b-form-input
                  v-model="formData.confirmPassword"
                  type="password"
                  placeholder="*******"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <!-- Divider -->
          <div class="app-divider-v dotted my-3"></div>

          <h5 class="mb-2 text-dark fw-bold">Personal Info</h5>
          <b-row>
            <b-col md="12">
              <b-form-group label="Address" class="mb-3">
                <b-form-textarea
                  v-model="formData.address"
                  placeholder="1098 Asylum Avenue, New Haven, CT 06510"
                />
              </b-form-group>
            </b-col>
            <b-col md="12">
              <b-form-group label="Address 2" class="mb-3">
                <b-form-textarea
                  v-model="formData.address2"
                  placeholder="51244 Ankunding Villages, Reicheltown, IL 84366"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="City" class="mb-3">
                <b-form-input
                  v-model="formData.city"
                  type="text"
                  placeholder="Oregon"
                />
              </b-form-group>
            </b-col>
            <b-col md="4">
              <b-form-group label="State" class="mb-3">
                <b-form-select v-model="formData.state">
                  <option value="">Choose...</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="2">
              <b-form-group label="Zip" class="mb-3">
                <b-form-input
                  v-model="formData.zip"
                  type="text"
                  placeholder="CT 06510"
                />
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Language" class="mb-3">
                <b-form-select v-model="formData.language">
                  <option value="EN">English</option>
                  <option value="GU">Gujarati</option>
                  <option value="HI">Hindi</option>
                  <option value="DU">Dutch</option>
                  <option value="FR">French</option>
                  <option value="RU">Russian</option>
                  <option value="KO">Korean</option>
                  <option value="TA">Tamil</option>
                  <option value="SP">Spanish</option>
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col md="12">
              <div class="text-end">
                <b-button variant="primary" type="submit">
                  Submit
                </b-button>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </b-card-body>
  </b-card>
</template>




