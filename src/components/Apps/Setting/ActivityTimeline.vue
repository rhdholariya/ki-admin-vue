<script setup>
import { ref } from "vue";
import FsLightbox from "fslightbox-vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BNav,
  BNavItem,
  BRow,
  BCol,
  BImg,
  BBadge,
  BButton,
} from "bootstrap-vue-next";


import {
  activities,
  monthActivities,
  weekActivities,
} from "@/data/app/settingapp/SettingAppData.js";


const activeTab = ref("today");


const tabs = [
  { key: "today", title: "Today" },
  { key: "week", title: "Week" },
  { key: "month", title: "Month" },
];


const setActiveTab = (tabKey) => {
  activeTab.value = tabKey;
};

const lightboxToggler = ref(false);
const currentSlide = ref(1);
const lightboxSources = ref([]);

// Get all images from all tabs
const getAllImageSources = () => {
  const allActivities = [
    ...activities,
    ...(weekActivities || []),
    ...(monthActivities || [])
  ];
  return allActivities.flatMap(activity => activity.images || []);
};

// Handle image click
const handleImageClick = (images, index = 0) => {
  const clickedImage = images[index];
  const allImages = getAllImageSources();
  

  const matchingIndices = [];
  allImages.forEach((img, idx) => {
    if (img === clickedImage) {
      matchingIndices.push(idx);
    }
  });

  if (matchingIndices.length > 0) {
    lightboxSources.value = allImages;
    const occurrenceIndex = Math.min(index, matchingIndices.length - 1);
    currentSlide.value = matchingIndices[occurrenceIndex] + 1;
    lightboxToggler.value = !lightboxToggler.value;
  }
};
</script>


<template>
  <FsLightbox
    v-if="lightboxSources.length > 0"
    :toggler="lightboxToggler"
    :sources="lightboxSources"
    :slide="currentSlide"
    type="image"
    :key="lightboxSources.join()"
  />
  <b-card class="equal-card month-timeline" no-body>
    <b-card-header>
      <div class="activity-time">
        <h5 class="mb-0 flex-grow-1">Activity</h5>
        <b-nav tabs class="nav-tabs tab-light-primary mb-0">
          <b-nav-item
            v-for="tab in tabs"
            :key="tab.key"
            :active="activeTab === tab.key"
            @click="setActiveTab(tab.key)"
          >
            {{ tab.title }}
          </b-nav-item>
        </b-nav>
      </div>
    </b-card-header>

    <b-card-body>
      <!-- Today Tab -->
      <div v-if="activeTab === 'today'" class="app-timeline-box activity-timeline">
        <ul>
          <li v-for="activity in activities" :key="activity.id" class="timeline-section">
            <div class="timeline-icon">
              <span :class="[activity.iconColor, 'h-35 w-35 d-flex-center b-r-50']">
                {{ activity.iconText }}
              </span>
            </div>
            <div class="timeline-content">
              <div class="f-s-16">
                <span class="text-primary f-s-16 mb-0">
                  <span v-if="activity.username">{{ activity.username }} </span>
                  <span class="text-secondary ms-2">
                    {{ activity.activity }}
                    <span class="badge text-outline-primary me-2">
                      {{ activity.post }}
                    </span>
                  </span>
                </span>
              </div>

              <div v-if="activity.content" class="timeline-border-box me-2 ms-0 mt-3">
                <h6 class="mb-0">{{ activity.content }}</h6>
                <p class="mb-4 text-secondary">{{ activity.content }}</p>
                <b-badge
                  v-for="(badge, index) in activity.badges"
                  :key="index"
                  class="me-2"
                >
                  {{ badge }}
                </b-badge>
              </div>

              <div
                v-if="activity.images && activity.images.length > 0"
                class="app-timeline-info-text timeline-border-box me-2 ms-0 mt-3 p-3"
              >
                <b-row>
                  <b-col
                    v-for="(img, index) in activity.images"
                    :key="index"
                    sm="4"
                  >
                    <a
                      href="javascript:void(0)"
                      class="img-hover-zoom"
                      @click="handleImageClick(activity.images, index)"
                      style="cursor: pointer; display: block;"
                    >
                      <b-img
                        :src="img"
                        class="img-fluid rounded timeline-img"
                        :alt="`Image ${index + 1}`"
                        fluid
                      />
                    </a>
                  </b-col>
                </b-row>
              </div>

              <p class="f-w-500 mt-2 mb-0">
                <i class="ph ph-clock me-1 align-middle"></i>
                {{ activity.time }}
              </p>

              <div v-if="activity.actions && activity.actions.length > 0" class="mt-3">
                <b-button
                  v-for="(action, index) in activity.actions"
                  :key="index"
                  :variant="action.color"
                  class="me-2"
                >
                  {{ action.label }}
                </b-button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Week Tab -->
      <div v-if="activeTab === 'week'" class="app-timeline-box activity-timeline">
        <ul>
          <li v-for="activity in weekActivities" :key="activity.id" class="timeline-section">
            <div class="timeline-icon">
              <span :class="['h-35 w-35 d-flex-center b-r-50', activity.iconColor]">
                {{ activity.iconText }}
              </span>
            </div>
            <div class="timeline-content">
              <div class="f-s-16">
                <span class="text-secondary">
                  <span class="f-s-16 mb-0">{{ activity.name }}</span>
                  {{ activity.action }}
                  <b-badge class="me-2">{{ activity.post }}</b-badge>
                  post
                </span>
              </div>

              <div v-if="activity.content" class="timeline-border-box me-2 ms-0 mt-3">
                <h6 class="mb-0">{{ activity.content }}</h6>
                <p class="mb-4 text-secondary">{{ activity.description }}</p>
                <span
                  v-if="activity.reactions"
                  class="badge text-outline-success me-2 timeline-badge"
                >
                  {{ activity.reactions }}
                </span>
                <span
                  v-if="activity.replies"
                  class="badge text-outline-success me-2"
                >
                  {{ activity.replies }}
                </span>
              </div>

              <div class="mt-3">
                <b-button variant="primary">{{ activity.buttonText1 }}</b-button>
                <b-button variant="outline-primary" class="ms-2">
                  {{ activity.buttonText2 }}
                </b-button>
              </div>

              <p class="f-w-500 mt-2 mb-0">
                <i class="ph ph-clock me-1 align-middle"></i>
                {{ activity.time }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Month Tab -->
      <div v-if="activeTab === 'month'" class="app-timeline-box activity-timeline">
        <ul>
          <li v-for="item in monthActivities" :key="item.id" class="timeline-section">
            <div class="timeline-icon">
              <span
                v-if="item.icon.length === 1"
                class="text-light-primary h-35 w-35 d-flex-center b-r-50"
              >
                {{ item.icon }}
              </span>
              <span
                v-else
                class="text-light-info h-35 w-35 d-flex-center b-r-50"
              >
                <i :class="['ph-duotone', item.icon, 'f-s-18']"></i>
              </span>
            </div>
            <div class="timeline-content">
              <div v-if="item.user" class="f-s-16">
                <span class="text-secondary">
                  <span class="text-success f-s-16 mb-0">{{ item.user }}</span>
                  {{ item.reaction }}
                  <span class="badge text-outline-success me-2">{{ item.post }}</span>
                  post
                </span>
              </div>

              <div v-if="item.message" class="timeline-border-box me-2 ms-0 mt-3">
                <h6 class="mb-0">Need a feature</h6>
                <p class="mb-4 text-secondary">{{ item.message }}</p>
                <span
                  v-for="(badge, index) in item.badges"
                  :key="index"
                  class="badge text-outline-success me-2 timeline-badge"
                >
                  {{ badge }}
                </span>
              </div>

              <div
                v-if="item.images"
                class="app-timeline-info-text timeline-border-box me-2 ms-0 mt-3 p-3"
              >
                <b-row>
                  <b-col
                    v-for="(image, index) in item.images"
                    :key="index"
                    sm="4"
                  >
                    <a
                      href="javascript:void(0)"
                      class="img-hover-zoom"
                      @click="handleImageClick(item.images, index)"
                      style="cursor: pointer; display: block;"
                    >
                      <b-img
                        :src="image"
                        class="w-100 rounded"
                        :alt="`Image ${index + 1}`"
                        fluid
                      />
                    </a>
                  </b-col>
                </b-row>
              </div>

              <div v-if="item.buttons" class="mt-3 d-flex gap-2">
                <b-button
                  v-for="(button, index) in item.buttons"
                  :key="index"
                  :class="button.class"
                >
                  {{ button.label }}
                </b-button>
              </div>

              <p class="f-w-500 mt-2 mb-0">
                <i class="ph ph-clock me-1 align-middle"></i>
                {{ item.time }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </b-card-body>
  </b-card>
</template>




