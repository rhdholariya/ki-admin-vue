<script setup>
import { BCard } from "bootstrap-vue-next";
import {
  IconBrandFacebook,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandWhatsapp,
} from "@tabler/icons-vue";

defineProps({
  member: {
    type: Object,
    required: true,
  },
  isMarketing: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <b-card class="team-box-card hover-effect overflow-hidden" no-body>
    <div class="team-box">
      <img :src="member.coverImg" class="card-img-top" :alt="member.name" />
    </div>

    <div class="team-container">
      <div class="team-pic">
        <span class="bg-secondary h-80 w-80 d-flex-center b-r-50 position-relative overflow-hidden">
          <img :src="member.avatarImg" :alt="member.name" class="img-fluid b-r-50" />
        </span>
      </div>
    </div>

    <div class="taem-content">
      <div class="mb-3 mt-3">
        <h5>{{ member.name }}</h5>
        <p>{{ isMarketing ? member.role : member.position }}</p>
      </div>

      <div class="team-details d-flex justify-content-between text-center">
        <div class="taem-contentbox">
          <p class="f-w-500">
            <RouterLink to="/apps/projects-page/projects" class="f-w-600 text-dark">
              Projects
            </RouterLink>
          </p>
          <p>{{ member.projects }}</p>
        </div>

        <div class="taem-contentbox">
          <p class="f-w-500">
            <RouterLink to="/apps/todo" class="f-w-600 text-dark">
              Tasks
            </RouterLink>
          </p>
          <p>{{ member.tasks }}</p>
        </div>

        <div class="taem-contentbox">
          <p class="f-w-500">
            <RouterLink to="/apps/projects-page/projects-details" class="f-w-600 text-dark">
              Position
            </RouterLink>
          </p>
          <p>
            {{ isMarketing ? member.position : member.employeeType || member.position }}
          </p>
        </div>
      </div>

      <p class="team-content-list text-muted mb-3">
        {{ member.description }}
      </p>

      <div class="p-2 mb-3">
        <router-link to="https://www.facebook.com" class="btn btn-facebook icon-btn b-r-22 me-2" target="_blank">
          <IconBrandFacebook :size="18" class="text-white" />
        </router-link>
        <router-link to="https://twitter.com" class="btn btn-twitter icon-btn b-r-22 me-2" target="_blank">
          <IconBrandTwitter :size="18" class="text-white" />
        </router-link>
        <router-link to="https://www.pinterest.com" class="btn btn-pinterest icon-btn b-r-22 me-2" target="_blank">
          <IconBrandPinterest :size="18" class="text-white" />
        </router-link>
        <router-link to="https://www.whatsapp.com" class="btn btn-whatsapp icon-btn b-r-22 me-2" target="_blank">
          <IconBrandWhatsapp :size="18" class="text-white" />
        </router-link>
      </div>
    </div>
  </b-card>
</template>
