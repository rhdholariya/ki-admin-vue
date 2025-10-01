<script setup>
import { computed, ref, reactive } from "vue";
import { BContainer, BRow, BCol, BCard, BFormCheckbox, BCardHeader } from "bootstrap-vue-next";
import {
  IconBriefcase,
  IconCake,
  IconGlassFullFilled,
  IconPhoto,
  IconPlane,
} from "@tabler/icons-vue";
import { PhStack} from "@phosphor-icons/vue";

// Swiper (v12)
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import CalendarCard from "@/components/Apps/Calendar/CalendarCard.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

// Reactive state
const calendarState = reactive({
  externalEventsRef: null,
  dropRemoveRef: null,
  dropRemoveChecked: false
});

// Refs for external events and drop remove functionality
const externalEventsRef = ref(null);
const dropRemoveRef = ref(null);

// Reactive event data
const eventData = ref([
  {
    title: "International Women's Day",
    description: "Celebrated to recognize the social and political achievements of women.",
    date: "08 Mar 2024",
  },
  {
    title: "World Book Day",
    description: "Celebrated to promote reading, publishing, and copyright.",
    date: "23 Apr 2024",
  },
  {
    title: "World Refugee Day",
    description: "Observed to honor the courage and resilience of refugees.",
    date: "20 Jun 2024",
  },
  {
    title: "World Humanitarian Day",
    description: "A day to recognize humanitarian personnel and those who lost their lives.",
    date: "19 Aug 2024",
  },
  {
    title: "International Day of Peace",
    description: "Promotes peace and cessation of war across the globe.",
    date: "21 Sep 2024",
  },
]);

// Reactive draggable events data
const draggableEvents = ref([
  {
    id: 'meeting',
    title: 'Meeting Time',
    icon: IconBriefcase,
    className: 'event-primary',
    color: 'primary'
  },
  {
    id: 'holiday',
    title: 'Holiday',
    icon: IconPhoto,
    className: 'event-success',
    color: 'success'
  },
  {
    id: 'tour',
    title: 'Tour Planning',
    icon: IconPlane,
    className: 'event-warning',
    color: 'warning'
  },
  {
    id: 'birthday',
    title: 'Birthday',
    icon: IconCake,
    className: 'event-info',
    color: 'info'
  },
  {
    id: 'lunch',
    title: 'Lunch Break',
    icon: IconGlassFullFilled,
    className: 'event-secondary',
    color: 'secondary'
  }
]);

// Computed swiper settings
const sliderSettings = computed(() => ({
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
}));

// Computed breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Calendar",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Calendar", active: true },
  ],
}));

// Methods
const handleDropRemoveChange = (checked) => {
  calendarState.dropRemoveChecked = checked;
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems" />

    <b-row class="m-1 calendar app-fullcalendar">
      <!-- Sidebar -->
      <b-col xxl="3">
        <b-row>
          <!-- Draggable Events -->
          <b-col md="6" xxl="12">
            <b-card>
              <b-card-header>
                <h5>Draggable Events</h5>
              </b-card-header>
              <div id="external-events" ref="externalEventsRef">
                <div
                    v-for="event in draggableEvents"
                    :key="event.id"
                    class="list-event fc-event mb-2 p-2 border rounded cursor-pointer"
                    :class="event.className"
                    :data-classname="event.className"
                >
                  <span
                      class="h-35 w-35 d-flex-center rounded-circle me-2"
                      :class="`bg-${event.color}`"
                  >
                    <component :is="event.icon" :size="18" />
                  </span>
                  {{ event.title }}
                </div>

                <div class="calendar-remove-check ps-0">
                  <BFormCheckbox
                      id="drop-remove"
                      ref="dropRemoveRef"
                      label="Remove After Drop"
                      @update:model-value="handleDropRemoveChange"
                  />
                </div>
              </div>
            </b-card>
          </b-col>

          <!-- Events Update List -->
          <b-col md="6" xxl="12" class="mt-3 mt-md-0">
            <b-card>
              <b-card-header>
                <h5>Events Update List</h5>
              </b-card-header>
              <Swiper v-bind="sliderSettings" class="event-container slider p-3">
                <SwiperSlide v-for="(event, idx) in eventData" :key="idx" class="event-box">
                  <h6 class="mb-0">
                    {{ event.title }}
                  </h6>
                  <p class="mb-2 text-secondary f-s-13">
                    {{ event.description }}
                  </p>
                  <p class="f-s-13 text-end mb-0">
                    {{ event.date }}
                  </p>
                </SwiperSlide>
              </Swiper>
            </b-card>
          </b-col>
        </b-row>
      </b-col>

      <!-- Calendar -->
      <b-col xxl="9" class="mt-3 mt-md-0">
        <CalendarCard :external-events-ref="externalEventsRef" :drop-remove-ref="dropRemoveRef" />
      </b-col>
    </b-row>
  </b-container>
    </main>
  </AppLayout>
</template>
