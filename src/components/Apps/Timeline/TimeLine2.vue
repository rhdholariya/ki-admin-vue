<script setup>
import { h } from "vue";
import {
  BCard,
  BCardBody,
  BCardTitle,
  BCardSubtitle,
  BCardText,
  BBadge,
} from "bootstrap-vue-next";
import { IconCircleFilled } from "@tabler/icons-vue";

const timelineData = [
  {
    title: "Task Finished",
    time: "10 min ago",
    description:
        "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.",
    moreInfoLink: "#",
    color: "primary",
    icon: h(IconCircleFilled),
  },
  {
    title: "Task Overdue",
    time: "50 min ago",
    description:
        "Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!",
    moreInfoLink: "#",
    color: "secondary",
    tags: ["Design", "HTML"],
    icon: h(IconCircleFilled),
  },
  {
    title: "New Task",
    time: "10 hours ago",
    description:
        "Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.",
    moreInfoLink: "#",
    color: "success",
    icon: h(IconCircleFilled),
  },
  {
    title: "New Task",
    time: "10 hours ago",
    description:
        "Quick wafting zephyrs vex bold Jim. Sex-charged fop blew my junk TV quiz.",
    moreInfoLink: "#",
    color: "info",
    icon: h(IconCircleFilled),
  },
];

</script>

<template>
  <b-card class="h-100" no-body>
    <b-card-body>
      <ul class="app-side-timeline list-unstyled">
        <li
            v-for="(item, index) in timelineData"
            :key="index"
            :class="[
            'side-timeline-section',
            index % 2 === 0 ? 'left-side' : 'right-side'
          ]"
        >
          <div class="side-timeline-icon">
            <span
                :class="`text-light-${item.color} d-flex align-items-center justify-content-center rounded-circle`"
                style="width: 25px; height: 25px;"
            >
              <component
                  :is="item.icon"
                  size="16"
                  class="rounded-circle animate__animated animate__zoomIn animate__infinite animate__slower"
              />
            </span>
          </div>

          <div class="timeline-content">
            <div class="mb-2">
              <b-card-title :class="`text-${item.color} mb-1`">
                {{ item.title }}
              </b-card-title>
              <b-card-subtitle class="text-muted">
                {{ item.time }}
              </b-card-subtitle>
            </div>

            <b-card-text class="mb-1 text-dark">
              {{ item.description }}
              <b-card-link :href="item.moreInfoLink" class="text-primary">
                [more info]
              </b-card-link>
            </b-card-text>

            <div v-if="item.tags" class="mt-2">
              <b-badge
                  v-for="(tag, tagIndex) in item.tags"
                  :key="tagIndex"
                  :variant="item.color"
                  class="me-2"
              >
                {{ tag }}
              </b-badge>
            </div>
          </div>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>
