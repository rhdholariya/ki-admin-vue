<script setup>
import {BCard, BCardHeader, BCardBody, BButton, BImg} from "bootstrap-vue-next";
import { IconUserCheck } from "@tabler/icons-vue";

const friends = [
  { name: "Bette Hagenes", title: "Wed Developer", image: "/images/avatar/2.png", bgColor: "bg-dark" },
  { name: "Fleta Walsh", title: "Wed Designer", image: "/images/avatar/10.png", bgColor: "bg-primary" },
  { name: "Lenora", title: "UI/UX designer", image: "/images/avatar/14.png", bgColor: "bg-success" },
  { name: "Fleta Walsh", title: "React Developer", image: "/images/avatar/16.png", bgColor: "bg-warning" },
  { name: "Emery McKenzie", title: "Wed Developer", image: "/images/avatar/13.png", bgColor: "bg-danger" },
  { name: "Bette Hagenes", title: "Wed Designer", image: "/images/avatar/1.png", bgColor: "bg-info" },
];
</script>
<template>
  <b-card class="d-lg-block d-none" no-body>
    <b-card-header>
      <h5>Friends</h5>
    </b-card-header>
    <b-card-body>
      <div class="profile-friends">
        <div
            v-for="(friend, index) in friends"
            :key="index"
            class="d-flex align-items-center mt-3"
        >
          <div
              :class="['h-40 w-40 d-flex-center b-r-50 overflow-hidden', friend.bgColor]"
          >
            <b-img :src="friend.image" :alt="friend.name" class="img-fluid" />
          </div>
          <div class="flex-grow-1 ps-2">
            <div class="fw-medium">{{ friend.name }}</div>
            <div class="text-muted f-s-12">{{ friend.title }}</div>
          </div>
          <b-button variant="light-primary" class="icon-btn b-r-22">
            <IconUserCheck size="20" />
          </b-button>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>




