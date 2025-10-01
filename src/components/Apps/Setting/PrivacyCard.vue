<template>
  <b-card class="equal-card privacy-card" no-body>
    <b-card-header>
      <h5>Privacy</h5>
    </b-card-header>
    <b-card-body>
      <h6>ACCESS</h6>
      <b-row>
        <b-col
          v-for="option in privacyOptions"
          :key="option.id"
          xl="6"
        >
          <div class="setting-privacy-card mb-3">
            <div class="select-item">
              <div class="d-flex align-items-center justify-content-between">
                <span
                  :class="[
                    'd-flex align-items-center position-relative',
                    option.icon
                  ]"
                >
                  <span
                    :class="[
                      'privacy-img',
                      option.color,
                      'h-40 w-40 d-flex-center b-r-50 position-absolute'
                    ]"
                  >
                    <i
                      v-if="option.icon"
                      :class="['ph-bold', option.icon, 'f-s-18']"
                    ></i>
                  </span>
                  <span class="privacy-content ms-5 me-2">
                    <span class="mb-0 text-dark txt-ellipsis-1 f-s-16 f-w-500">
                      {{ option.label }}
                    </span>
                    <span class="mb-0 text-secondary f-s-16">
                      {{ option.description }}
                    </span>
                  </span>
                </span>
<!--                <div class="form-check">-->
<!--                  <input-->
<!--                      :id="option.id"-->
<!--                      v-model="userOption"-->
<!--                      name="useroption"-->
<!--                      type="radio"-->
<!--                      :value="option.value"-->
<!--                      class="form-check-input"-->
<!--                  />-->
<!--                  <label :for="option.id" class="form-check-label visually-hidden">-->
<!--                    {{ option.label }}-->
<!--                  </label>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <h6>USERS</h6>
      <b-row>
        <b-col
          v-for="option in userOptions"
          :key="option.id"
          xl="6"
        >
          <div class="setting-privacy-card mb-3">
            <div class="select-item">
              <div class="d-flex align-items-center justify-content-between">
                <span class="d-flex align-items-center position-relative">
                  <span
                    :class="[
                      'privacy-img',
                      option.color,
                      'h-40 w-40 d-flex-center b-r-50 position-absolute'
                    ]"
                  >
                    <i
                      v-if="option.icon"
                      :class="['ph-bold', option.icon, 'f-s-18']"
                    ></i>
                  </span>
                  <span class="privacy-content ms-5 me-2">
                    <span class="mb-0 text-dark txt-ellipsis-1 f-s-16 f-w-500">
                      {{ option.label }}
                    </span>
                    <span class="mb-0 text-secondary f-s-16">
                      {{ option.description }}
                    </span>
                  </span>
                </span>
<!--                <div class="form-check">-->
<!--                  <input-->
<!--                    :id="option.id"-->
<!--                    v-model="userOption"-->
<!--                    name="useroption"-->
<!--                    type="radio"-->
<!--                    :value="option.value"-->
<!--                    class="form-check-input"-->
<!--                  />-->
<!--                  <label :for="option.id" class="form-check-label visually-hidden">-->
<!--                    {{ option.label }}-->
<!--                  </label>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <div class="publishe-card mt-4">
        <div>
          <h6 class="m-0">Publishing</h6>
          <p class="mb-0 f-s-16 text-secondary">
            Your project is published
          </p>
        </div>
        <b-button variant="light-primary" type="button" @click="unpublish">
          Unpublish
        </b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BFormRadio,
  BButton,
} from "bootstrap-vue-next";

// Import privacy data
import { privacyOptions, userOptions } from "@/data/app/settingapp/SettingAppData.js";

// Reactive state
const privacyOption = ref("option1");
const userOption = ref("useroption1");

// Methods
const unpublish = () => {
  console.log("Unpublishing project...");
  // Add your unpublish logic here
};
</script>

<style scoped>
.form-check-input {
  width: 20px !important;
  height: 20px !important;
  margin: 0 !important;
  flex-shrink: 0;
}

.form-check {
  margin: 0 !important;
  padding: 0 !important;
}

.select-item {
  width: 100%;
}

.d-flex.justify-content-between {
  width: 100%;
}

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
