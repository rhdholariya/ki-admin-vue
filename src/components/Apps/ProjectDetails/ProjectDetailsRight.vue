<script setup>
import { RouterLink } from "vue-router";
import {
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BImg,
} from "bootstrap-vue-next";


import { projectDetails1, projectFiles } from "@/data/app/projectapp/ProjectDetailData.js";
</script>


<template>
  <b-col md="6" xxl="3" class="order-md-1 order-xxl-3" >

    <b-card no-body>
      <b-card-header>
        <h5>About Project</h5>
      </b-card-header>
      <b-card-body>
        <div class="mb-3">
          <h6>Project Description</h6>
          <p class="text-muted">{{ projectDetails1.description }}</p>
        </div>
        <div class="mb-3">
          <h6>Task Information</h6>
          <p class="text-muted">{{ projectDetails1.taskInfo }}</p>
        </div>
        <div class="mb-3">
          <h6>Background Information</h6>
          <p class="text-muted">{{ projectDetails1.backgroundInfo }}</p>
        </div>
      </b-card-body>
    </b-card>

    <!-- Data Folder & Files Card -->
    <b-card no-body>
      <b-card-body>
        <h5 class="header-title-text">Data Folder & Files</h5>
        <div class="data-list-box mt-3">
          <div
            v-for="(file, index) in projectFiles"
            :key="index"
            class="filebox"
          >
            <div class="d-flex align-items-center position-relative">
              <div class="position-absolute start-0">
                <b-img
                  :src="file.icon"
                  class="w-35 h-35"
                  :alt="file.name"
                />
              </div>
              <div class="flex-grow-1 mg-s-40">
                <h6 class="mb-0">{{ file.name }}</h6>
                <p class="text-secondary mb-0">{{ file.count }}</p>
              </div>
              <p class="file-data text-secondary f-w-500 mb-0">
                {{ file.size }}
              </p>
            </div>
          </div>
          
          <!-- View More Button -->
          <div>
            <router-link
              to="/apps/file-manager"
              role="button"
              class="btn btn-primary w-100 rounded"
            >
              View More
            </router-link>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>


