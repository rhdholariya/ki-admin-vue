<template>
  <b-row>
    <b-col
      v-for="connection in connections"
      :key="connection.id"
      md="6"
      xxl="4"
      class="mb-4"
    >
      <b-card class="conection-setting h-100" no-body>
        <b-card-body>
          <div class="conection-item">
            <div class="position-relative">
              <span class="position-absolute">
                <b-img
                  :alt="connection.title"
                  class="w-35 h-35"
                  :src="connection.imgSrc"
                />
              </span>
              <h5 class="ms-5 mt-1">{{ connection.title }}</h5>
            </div>
            <b-form-checkbox
              :id="`custom-switch-${connection.id}`"
              class="d-flex mt-1 form-check-primary fs-3"
              switch
              v-model="connection.enabled"
            >
            </b-form-checkbox>
          </div>
          <p class="text-secondary f-s-16 mt-4">{{ connection.description }}</p>
        </b-card-body>
        <b-card-footer class="text-end text-d-underline link-primary">
          <a href="#" @click.prevent="viewIntegration(connection.id)">
            View integration
          </a>
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref } from "vue";
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardFooter,
  BFormCheckbox,
  BImg,
} from "bootstrap-vue-next";

// Import connections data
import { connections } from "@/data/app/settingapp/SettingAppData.js";

// Create reactive copy of connections with enabled state
const connectionsData = ref(
  connections.map(connection => ({
    ...connection,
    enabled: true // Default to enabled/checked
  }))
);

// Methods
const viewIntegration = (connectionId) => {
  console.log(`Viewing integration for connection: ${connectionId}`);
  // Add your integration view logic here
};
</script>


