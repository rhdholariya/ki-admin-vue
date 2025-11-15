<script setup>
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardFooter,
  BFormCheckbox,
  BImg,
} from "bootstrap-vue-next"


import { connections } from "@/data/app/settingapp/SettingAppData.js"


const viewIntegration = (_id) => {

}
</script>


<template>
  <b-row>
    <b-col
        v-for="connection in connections"
        :key="connection.id"
        md="6"
        xxl="4"
        class="mb-4"
    >
      <b-card class="connection-setting h-100" no-body>
        <b-card-body>
          <div class="connection-item d-flex justify-content-between align-items-start">
            <div class="d-flex align-items-center">
              <b-img
                  :alt="connection.title"
                  class="w-35 h-35 me-3"
                  :src="connection.imgSrc"
              />
              <h5 class="mb-0">{{ connection.title }}</h5>
            </div>

            <b-form-checkbox
                :id="`custom-switch-${connection.id}`"
                class="form-check-primary fs-3"
                switch
                v-model="connection.enabled"
            />
          </div>

          <p class="text-secondary f-s-16 mt-4 mb-0">
            {{ connection.description }}
          </p>
        </b-card-body>

        <b-card-footer class="text-end">
          <a
              href="#"
              class="link-primary text-decoration-underline"
              @click.prevent="viewIntegration(connection.id)"
          >
            View integration
          </a>
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>


