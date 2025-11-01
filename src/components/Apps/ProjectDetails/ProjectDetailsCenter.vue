<script setup>
import { ref, onMounted } from "vue";
import FsLightbox from "fslightbox-vue";
import {
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BCardFooter,
  BRow,
  BImg,
  BButton,
  BInputGroup,
  BInputGroupText,
  BFormInput,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue-next";
import { Tooltip } from "bootstrap";

import { PhImageSquare } from "@phosphor-icons/vue";
import {
  IconCamera,
  IconMicrophone,
  IconMoodSmileBeam,
  IconPaperclip,
  IconSend,
} from "@tabler/icons-vue";

import { projectActivities } from "@/data/app/projectapp/ProjectDetailData.js";

// -------------------
// State & lightbox
// -------------------
const message = ref("");
const lightboxToggler = ref(false);
const currentSlide = ref(1);
const lightboxSources = ref([]);

// Collect all image sources
const getAllImageSources = () =>
    projectActivities.flatMap((activity) => activity.images || []);

// Handle image click (open lightbox)
const handleImageClick = (images, index = 0) => {
  const clickedImage = images[index];
  const allImages = getAllImageSources();

  const matchingIndices = [];
  allImages.forEach((img, idx) => {
    if (img === clickedImage) matchingIndices.push(idx);
  });

  if (matchingIndices.length > 0) {
    lightboxSources.value = allImages;
    const occurrenceIndex = Math.min(index, matchingIndices.length - 1);
    currentSlide.value = matchingIndices[occurrenceIndex] + 1;
    lightboxToggler.value = !lightboxToggler.value;
  }
};

// Helper: timeline icon & text classes
const getTimelineIconClass = (id) =>
    ({
      1: "text-light-primary",
      2: "text-light-info",
      3: "text-light-success",
      4: "text-light-danger",
      5: "text-light-primary",
    }[id] || "text-light-primary");

const getTimelineTextClass = (id) =>
    ({
      1: "text-primary",
      2: "text-info",
      3: "text-success",
      4: "text-danger",
      5: "text-primary",
    }[id] || "text-primary");

// Send message
const sendMessage = () => {
  if (String(message.value).trim()) {
    message.value = "";
  }
};

// Initialize tooltips safely in Vue lifecycle
onMounted(() => {
  document
      .querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach((el) => new Tooltip(el));
});
</script>

<template>
  <b-col xxl="6" class="order-xxl-2">
    <FsLightbox
        v-if="lightboxSources.length > 0"
        :toggler="lightboxToggler"
        :sources="lightboxSources"
        :slide="currentSlide"
        type="image"
        :key="lightboxSources.join()"
    />

    <b-card no-body>
      <b-card-header>
        <h5>Project Activity</h5>
      </b-card-header>

      <b-card-body>
        <ul class="app-timeline-box">
          <li
              v-for="activity in projectActivities"
              :key="activity.id"
              class="timeline-section"
          >
            <div class="timeline-icon">
              <span
                  :class="[
                  'h-35 w-35 d-flex-center rounded-circle',
                  getTimelineIconClass(activity.id),
                ]"
              >
                <PhImageSquare
                    v-if="activity.id === 2"
                    :size="18"
                    weight="duotone"
                />
                <span v-else>{{ activity.icon }}</span>
              </span>
            </div>

            <div class="timeline-content pt-0">
              <div class="d-flex f-s-16">
                <p
                    :class="['f-s-16 mb-0', getTimelineTextClass(activity.id)]"
                >
                  {{ activity.user }}
                </p>

                <span v-if="activity.badge" class="text-secondary ms-2">
                  {{ activity.action }}
                  <span class="badge bg-light-primary text-primary me-2">
                    {{ activity.badge }}
                  </span>
                </span>
              </div>

              <p>{{ activity.time }}</p>

              <!-- Images -->
              <div
                  v-if="activity.images"
                  class="app-timeline-info-text timeline-border-box me-2 ms-0 mt-3 p-3"
              >
                <b-row>
                  <b-col
                      v-for="(image, index) in activity.images"
                      :key="index"
                      sm="4"
                  >
                    <!-- ✅ Vue-safe clickable element -->
                    <button
                        type="button"
                        class="img-hover-zoom btn p-0 border-0 bg-transparent"
                        @click="handleImageClick(activity.images, index)"
                    >
                      <b-img
                          :src="image"
                          class="w-100 rounded"
                          alt="Activity image"
                      />
                    </button>
                  </b-col>
                </b-row>
              </div>

              <!-- Feature -->
              <div
                  v-if="activity.feature"
                  class="timeline-border-box me-2 ms-0 mt-3"
              >
                <h6 class="mb-0">{{ activity.feature.title }}</h6>
                <p class="mb-4 text-secondary">
                  {{ activity.feature.description }}
                </p>
                <span
                    class="badge bg-light-primary text-success me-2 timeline-badge"
                >
                  {{ activity.feature.reactions }}
                </span>
                <span class="badge bg-light-primary text-success me-2">
                  {{ activity.feature.replies }}
                </span>
              </div>

              <!-- Buttons -->
              <div v-if="activity.buttons">
                <b-button variant="danger" class="me-2">Accept</b-button>
                <b-button variant="outline-danger">Reject</b-button>
              </div>
            </div>
          </li>
        </ul>
      </b-card-body>

      <b-card-footer>
        <div class="d-flex">
          <div class="flex-grow-1">
            <b-input-group>
              <b-input-group-text class="ms-2 me-2 rounded">
                <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Emoji"
                    role="button"
                >
                  <IconMoodSmileBeam :size="20" />
                </a>
              </b-input-group-text>

              <b-form-input
                  v-model="message"
                  type="text"
                  class="rounded"
                  placeholder="Type a message"
              />

              <b-button
                  class="btn btn-sm btn-primary ms-2 me-2 rounded"
                  type="button"
                  @click="sendMessage"
              >
                <IconSend :size="20" />
                Send
              </b-button>
            </b-input-group>
          </div>

          <!-- Desktop buttons -->
          <div class="ms-2 d-none d-sm-block">
            <button
                type="button"
                class="text-light-secondary h-35 w-35 d-flex-center rounded ms-1 btn border-0 bg-transparent"
                title="Microphone"
                data-bs-toggle="tooltip"
            >
              <IconMicrophone :size="20" />
            </button>
          </div>

          <div class="d-none d-sm-block">
            <button
                type="button"
                class="text-light-secondary h-35 w-35 d-flex-center rounded ms-1 btn border-0 bg-transparent"
                title="Camera"
                data-bs-toggle="tooltip"
            >
              <IconCamera :size="20" />
            </button>
          </div>

          <div class="d-none d-sm-block">
            <button
                type="button"
                class="text-light-secondary h-35 w-35 d-flex-center rounded ms-1 btn border-0 bg-transparent"
                title="Paperclip"
                data-bs-toggle="tooltip"
            >
              <IconPaperclip :size="20" />
            </button>
          </div>

          <!-- Mobile dropdown -->
          <b-dropdown
              variant="link"
              toggle-class="h-35 w-35 d-flex-center ms-1"
              no-caret
              class="d-sm-none"
          >
            <template #button-content>
              <i class="ti ti-dots-vertical"></i>
            </template>
            <b-dropdown-item>
              <i class="ti ti-microphone"></i>
              <span class="f-s-13">Microphone</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <i class="ti ti-camera-plus"></i>
              <span class="f-s-13">Camera</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <i class="ti ti-paperclip"></i>
              <span class="f-s-13">Paperclip</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </b-card-footer>
    </b-card>
  </b-col>
</template>
