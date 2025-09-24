<script setup>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCol,
  BRow,
  BButton,
  BNav,
  BNavItem,
  BBadge,
  BImg,
} from "bootstrap-vue-next"

import {
  PhChats,
  PhClipboardText,
  PhDotsThreeVertical,
  PhHeart,
  PhImageSquare,
  PhPaperPlaneRight,
  PhGraph,
  PhUser,
  PhUserCheck,
  PhUsers,
} from "@phosphor-icons/vue"

import { ref } from "vue"

const activeTab = ref("1")

const tabs = [
  { id: "1", title: "Profile", icon: PhUser },
  { id: "2", title: "Activities", icon: PhGraph, badge: "10+" },
  { id: "3", title: "Projects", icon: PhClipboardText },
  { id: "4", title: "Post", icon: PhImageSquare },
  { id: "5", title: "Friends", icon: PhUsers },
]

const friends = [
  { id: 1, name: "Bette Hagenes", title: "Wed Developer", avatar: "/images/avatar/2.png", bgClass: "bg-dark" },
  { id: 2, name: "Fleta Walsh", title: "Wed Designer", avatar: "/images/avatar/10.png", bgClass: "bg-primary" },
  { id: 3, name: "Lenora", title: "UI/UX designer", avatar: "/images/avatar/14.png", bgClass: "bg-success" },
  { id: 4, name: "Fleta Walsh", title: "React Developer", avatar: "/images/avatar/16.png", bgClass: "bg-warning" },
  { id: 5, name: "Emery McKenzie", title: "Wed Developer", avatar: "/images/avatar/13.png", bgClass: "bg-danger" },
  { id: 6, name: "Bette Hagenes", title: "Wed Designer", avatar: "/images/avatar/1.png", bgClass: "bg-info" },
]

const galleryImages = [
  "/images/profile-app/19.jpg",
  "/images/profile-app/27.jpg",
  "/images/profile-app/28.jpg",
  "/images/profile-app/29.jpg",
  "/images/profile-app/30.jpg",
]

const postActions = [
  { icon: PhHeart, label: "Like" },
  { icon: PhChats, label: "Comment" },
  { icon: PhPaperPlaneRight, label: "Share" },
]
</script>

<template>
  <b-col lg="3">
    <!-- Tabs -->
    <b-card id="profile-tabs" no-body>
      <b-card-body>
        <div class="tab-wrapper">
          <b-nav class="profile-app-tabs flex-column border-0 m-0 p-0">
            <b-nav-item
                v-for="tab in tabs"
                :key="tab.id"
                href="#"
                class="tab-link fw-medium f-s-16 f-w-600 d-block w-100"
                :class="{ active: activeTab === tab.id }"
                @click.prevent="activeTab = tab.id"
            >
              <component :is="tab.icon" class="me-2 fw-bold" size="20" weight="bold" />
              {{ tab.title }}
              <b-badge
                  v-if="tab.badge"
                  pill
                  variant="warning"
                  class="badge-notification ms-2"
              >
                {{ tab.badge }}
                <span class="visually-hidden">unread messages</span>
              </b-badge>
            </b-nav-item>
          </b-nav>
        </div>
      </b-card-body>
    </b-card>

    <!-- Friends -->
    <b-card class="d-lg-block d-none" id="friend" no-body>
      <b-card-header>
        <h5>Friends</h5>
      </b-card-header>
      <b-card-body class="profile-friends">
        <div
            v-for="friend in friends"
            :key="friend.id"
            class="d-flex align-items-center mt-3"
        >
          <div
              class="h-40 w-40 d-flex-center b-r-50 overflow-hidden"
              :class="friend.bgClass"
          >
            <b-img :src="friend.avatar" :alt="friend.name" fluid />
          </div>
          <div class="flex-grow-1 ps-2">
            <div class="fw-medium">{{ friend.name }}</div>
            <div class="text-muted f-s-12">{{ friend.title }}</div>
          </div>
          <b-button href="#" variant="light-secondary" class="icon-btn b-r-22">
            <PhUserCheck size="20" weight="bold" />
          </b-button>
        </div>
      </b-card-body>
    </b-card>

    <!-- Post -->
    <b-card no-body>
      <b-card-body>
        <div class="d-flex align-items-center">
          <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-danger">
            <b-img src="/images/avatar/16.png" alt="avatar" fluid />
          </div>
          <div class="flex-grow-1 ps-2 pe-2">
            <div class="f-w-600">Heli Walsh</div>
            <div class="text-muted f-s-12">3 Week</div>
          </div>
          <div>
            <PhDotsThreeVertical size="20" weight="bold" />
          </div>
        </div>

        <div class="post-div">
          <b-row class="g-2 my-2">
            <b-col
                v-for="(imgSrc, idx) in galleryImages"
                :key="idx"
                :cols="galleryImages.length > 2 && idx > 1 ? 4 : 6"
            >
              <b-img :src="imgSrc" :alt="`img-${idx}`" class="w-100 rounded" />
            </b-col>
          </b-row>
          <p class="text-muted">
            There's nothing like fresh flowers!......🌸🌼🌻
          </p>
          <div class="post-icon d-flex align-items-center gap-2">
            <span v-for="(action, idx) in postActions" :key="idx">
              <component :is="action.icon" size="20" weight="bold" />
            </span>
            <p class="text-secondary mb-0 ms-2">2k Likes</p>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>


