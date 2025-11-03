<script setup>
import { h } from "vue";
import { BCard, BCardBody, BListGroup, BListGroupItem, BBadge } from "bootstrap-vue-next";
import { IconCircleCheck, IconClipboardCheck, IconClock, IconMessageCircle } from "@tabler/icons-vue";

const timelineItems = [
  {
    variant: "primary",
    icon: h(IconCircleCheck, { size: 20 }),
    heading: "Task finished",
    timestamp: "10 Min ago",
    body: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.",
  },
  {
    variant: "secondary",
    icon: h(IconClock, { size: 20 }),
    heading: "Task Overdue",
    timestamp: "50 Min ago",
    body: "Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.",
    tags: ["Design", "HTML"],
  },
  {
    variant: "success",
    icon: h(IconClipboardCheck, { size: 20 }),
    heading: "New Task",
    timestamp: "10 hours ago",
    body: "Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.",
  },
  {
    variant: "info",
    icon: h(IconMessageCircle, { size: 20 }),
    heading: "New Comment",
    timestamp: "Yesterday",
    body: "Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.",
  },
  {
    variant: "warning",
    icon: h(IconMessageCircle, { size: 20 }),
    heading: "New Task",
    timestamp: "10 hours ago",
    body: "Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.",
  },
];
</script>

<template>
  <b-card class="equal-card" no-body>
    <b-card-body>
      <b-list-group as="ul" class="app-timeline-box">
        <b-list-group-item
            v-for="(item, index) in timelineItems"
            :key="index"
            as="li"
            class="timeline-section"
        >
          <div class="timeline-icon">
            <span :class="`text-light-${item.variant} h-35 w-35 d-flex-center b-r-50`">
              <component :is="item.icon" />
            </span>
          </div>

          <div :class="`timeline-content bg-light-${item.variant} b-1-${item.variant} rounded`">
            <div class="d-flex justify-content-between align-items-center timeline-flex">
              <h6 :class="`mt-2 text-${item.variant}`">{{ item.heading }}</h6>
              <span class="text-dark">{{ item.timestamp }}</span>
            </div>

            <p class="mt-2 text-dark">
              {{ item.body }}
              <a class="text-primary" href="#">[more info]</a>
            </p>

            <div v-if="item.tags" class="mt-1">
              <b-badge
                  v-for="tag in item.tags"
                  :key="tag"
                  variant="primary-900"
                  class="me-1 text-capitalize"
              >
                {{ tag }}
              </b-badge>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>
