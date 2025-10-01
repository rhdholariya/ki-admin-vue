<template>
  <b-col xxl="6" class="order-xxl-2" >
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
                  getTimelineIconClass(activity.id)
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
                  :class="[
                    'f-s-16 mb-0',
                    getTimelineTextClass(activity.id)
                  ]"
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

              <!-- Images Section -->
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
                    <a
                      :href="image"
                      class="glightbox img-hover-zoom"
                      data-glightbox="type: image; zoomable: true;"
                    >
                      <b-img
                        :src="image"
                        class="w-100 rounded"
                        alt="Activity image"
                      />
                    </a>
                  </b-col>
                </b-row>
              </div>

              <!-- Feature Section -->
              <div
                v-if="activity.feature"
                class="timeline-border-box me-2 ms-0 mt-3"
              >
                <h6 class="mb-0">{{ activity.feature.title }}</h6>
                <p class="mb-4 text-secondary">
                  {{ activity.feature.description }}
                </p>
                <span class="badge bg-light-primary text-success me-2 timeline-badge">
                  {{ activity.feature.reactions }}
                </span>
                <span class="badge bg-light-primary text-success me-2">
                  {{ activity.feature.replies }}
                </span>
              </div>

              <!-- Buttons Section -->
              <div v-if="activity.buttons">
                <b-button variant="danger" class="me-2">
                  Accept
                </b-button>
                <b-button variant="outline-danger">
                  Reject
                </b-button>
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
                  data-bs-original-title="Emoji"
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
                aria-label="Recipient's username"
              />
              <b-button
                class="btn btn-sm btn-primary ms-2 me-2 rounded"
                type="button"
                @click="sendMessage"
              >
                <IconSend :size="20" /> Send
              </b-button>
            </b-input-group>
          </div>
          
          <!-- Desktop Action Buttons -->
          <div class="ms-2 d-none d-sm-block">
            <a
              class="text-light-secondary h-35 w-35 d-flex-center rounded ms-1"
              role="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Microphone"
            >
              <IconMicrophone :size="20" />
            </a>
          </div>
          <div class="d-none d-sm-block">
            <a
              class="text-light-secondary h-35 w-35 d-flex-center rounded ms-1"
              role="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Camera"
            >
              <IconCamera :size="20" />
            </a>
          </div>
          <div class="d-none d-sm-block">
            <a
              class="text-light-secondary h-35 w-35 d-flex-center rounded ms-1"
              role="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-original-title="Paperclip"
            >
              <IconPaperclip :size="20" />
            </a>
          </div>
          
          <!-- Mobile Dropdown -->
          <div>
            <b-dropdown
              variant="link"
              toggle-class="h-35 w-35 d-flex-center ms-1"
              no-caret
              class="d-sm-none"
            >
              <template #button-content>
                <i class="ti ti-dots-vertical"></i>
              </template>
              <b-dropdown-item href="#">
                <i class="ti ti-microphone"></i>
                <span class="f-s-13">Microphone</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="ti ti-camera-plus"></i>
                <span class="f-s-13">Camera</span>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="ti ti-paperclip"></i>
                <span class="f-s-13">Paperclip</span>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </b-card-footer>
    </b-card>
  </b-col>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
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

// Import icons
import { PhImageSquare } from "@phosphor-icons/vue";
import {
  IconCamera,
  IconMicrophone,
  IconMoodSmileBeam,
  IconPaperclip,
  IconSend,
} from "@tabler/icons-vue";

// Import project detail data
import { projectActivities } from "@/data/app/projectapp/ProjectDetailData.js";

// Import GLightbox CSS
import "glightbox/dist/css/glightbox.min.css";

// Reactive state
const message = ref("");
let lightbox = null;

// Methods
const getTimelineIconClass = (id) => {
  const classMap = {
    1: "text-light-primary",
    2: "text-light-info",
    3: "text-light-success",
    4: "text-light-danger",
    5: "text-light-primary",
  };
  return classMap[id] || "text-light-primary";
};

const getTimelineTextClass = (id) => {
  const classMap = {
    1: "text-primary",
    2: "text-info",
    3: "text-success",
    4: "text-danger",
    5: "text-primary",
  };
  return classMap[id] || "text-primary";
};

const sendMessage = () => {
  if (message.value.trim()) {
    console.log("Sending message:", message.value);
    // Add your message sending logic here
    message.value = "";
  }
};

// GLightbox initialization
onMounted(async () => {
  try {
    const GLightbox = (await import("glightbox")).default;
    lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: true,
      autoplayVideos: true,
    });
  } catch (error) {
    console.error("Failed to load GLightbox:", error);
  }
});

// Cleanup on unmount
onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
  }
});
</script>
