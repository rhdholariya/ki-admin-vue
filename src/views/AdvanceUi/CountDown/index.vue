<script setup>
import { reactive, onMounted, onUnmounted } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
} from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhBriefcase } from "@phosphor-icons/vue";

const timeLeft = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let timerId;

const updateTimer = () => {
  const countDownDate = new Date("December 31, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    if (timerId) clearInterval(timerId);
    return;
  }

  timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  timeLeft.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  timeLeft.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);
};

onMounted(() => {
  timerId = setInterval(updateTimer, 1000);
  updateTimer();
});

onUnmounted(() => {
  if (timerId) clearInterval(timerId);
});

// Sections metadata (no HTML strings now)
const countdownSections = [
  { title: "With Seconds", desc: "You can add only seconds countdown using", className: "countdown-seconds", labelClass: "text-danger", label: "countdown-seconds", colSize: "md", type: "seconds" },
  { title: "With Minutes", desc: "You can add minutes countdown style using", className: "app-countdown-min", labelClass: "text-danger", label: "app-countdown-min", colSize: "md", type: "minutes" },
  { title: "With Hours", desc: "You can add hours countdown using", className: "app-countdown-hours", labelClass: "text-danger", label: "app-countdown-hours", colSize: "xl", type: "hours" },
  { title: "Countdown Styles", desc: "You can add countdown using", className: "app-countdown-background", labelClass: "text-danger", label: "app-countdown-background", colSize: "lg", type: "background" },
  {
    title: "Countdown Styles",
    desc: "You can add countdown using",
    className: "app-countdown-circle",
    labelClass: "text-danger",
    label: "app-countdown-circle",
    colSize: "xl",
    type: "circle"
  },
  {
    title: "Background Countdown",
    desc: "You can add countdown with background using",
    className: "app-countdown-square",
    labelClass: "text-danger",
    label: "app-countdown-square",
    colSize: "lg",
    type: "square",
    center: true
  },
];

// Breadcrumb data
const breadcrumbItems = {
  title: "count-down",
  items: [
    {label: "Advance UI", icon: PhBriefcase},
    {label: "count-down", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
    <b-container fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-row>
        <b-col
            v-for="(section, idx) in countdownSections"
            :key="idx"
            v-bind:[section.colSize]="6"
        >
          <b-card class="mb-4 equal-card" no-body>
            <b-card-header>
              <h5>{{ section.title }}</h5>
              <p>
                {{ section.desc }}
                <span :class="section.labelClass">{{ section.label }}</span>
                class.
              </p>
            </b-card-header>
            <b-card-body :class="section.center ? 'd-flex justify-content-center' : ''">
              <!-- Seconds -->
              <div v-if="section.type === 'seconds'" :class="section.className">
                <ul class="timer">
                  <li class="seconds fw-bold">{{ timeLeft.seconds }}</li>
                  <li class="timer-countdown">seconds</li>
                </ul>
              </div>

              <!-- Minutes -->
              <div v-else-if="section.type === 'minutes'" :class="section.className">
                <ul class="timer">
                  <li class="countdown">
                    <span class="minutes time-value fw-bold">{{ timeLeft.minutes }}</span>
                    <span class="timer-countdown f-s-14 f-w-400">Minutes</span>
                  </li>
                  <li class="app-line">:</li>
                  <li class="countdown">
                    <span class="seconds fw-bold">{{ timeLeft.seconds }}</span>
                    <span class="timer-countdown f-s-14 f-w-400">Seconds</span>
                  </li>
                </ul>
              </div>

              <!-- Hours -->
              <div v-else-if="section.type === 'hours'" :class="section.className">
                <ul class="timer">
                  <li class="app-countdown countdown-border">
                    <span class="Hours f-s-20 fw-bold">{{ timeLeft.hours }}</span>
                    <span class="timer-countdown">Hours</span>
                  </li>
                  <li class="app-countdown">
                    <span class="minutes f-s-20 fw-bold">{{ timeLeft.minutes }}</span>
                    <span class="timer-countdown">Minutes</span>
                  </li>
                  <li class="app-countdown countdown-border-1">
                    <span class="seconds f-s-20 fw-bold">{{ timeLeft.seconds }}</span>
                    <span class="timer-countdown">Seconds</span>
                  </li>
                </ul>
              </div>

              <!-- Background style -->
              <div v-else-if="section.type === 'background'" :class="section.className">
                <ul class="timer">
                  <li class="countdown">
                    <h6 class="days mb-0 f-s-20 fw-bold">{{ timeLeft.days }}</h6>
                    <p class="timer-countdown">Days</p>
                  </li>
                  <li class="countdown">
                    <h6 class="hours mb-0 f-s-20 fw-bold">{{ timeLeft.hours }}</h6>
                    <p class="timer-countdown">Hours</p>
                  </li>
                  <li class="countdown">
                    <h6 class="minutes mb-0 f-s-20 fw-bold">{{ timeLeft.minutes }}</h6>
                    <p class="timer-countdown">Min</p>
                  </li>
                  <li class="countdown">
                    <h6 class="seconds mb-0 f-s-20 fw-bold">{{ timeLeft.seconds }}</h6>
                    <p class="timer-countdown">Sec</p>
                  </li>
                </ul>
              </div>

              <!-- Circle style -->
              <div v-else-if="section.type === 'circle'" :class="section.className">
                <ul class="timer">
                  <li class="countdown">
                    <span class="days fw-medium f-s-20 bg-light-primary">{{ timeLeft.days }}</span>
                    <span class="timer-countdown bg-primary">Day</span>
                  </li>
                  <li class="countdown">
                    <span class="hours fw-medium f-s-20 bg-light-secondary">{{ timeLeft.hours }}</span>
                    <span class="timer-countdown bg-secondary">Hour</span>
                  </li>
                  <li class="countdown">
                    <span class="minutes fw-medium f-s-20 bg-light-success">{{ timeLeft.minutes }}</span>
                    <span class="timer-countdown bg-success">Minutes</span>
                  </li>
                  <li class="countdown">
                    <span class="seconds fw-medium f-s-20 bg-light-info">{{ timeLeft.seconds }}</span>
                    <span class="timer-countdown bg-info">Seconds</span>
                  </li>
                </ul>
              </div>

              <!-- Square background -->
              <div v-else-if="section.type === 'square'" :class="section.className">
                <ul class="timer">
                  <li class="countdown">
                    <span class="days f-s-20 fw-bold">{{ timeLeft.days }}</span>
                    <span class="day">Day</span>
                  </li>
                  <li class="countdown">
                    <span class="hours f-s-20 fw-bold">{{ timeLeft.hours }}</span>
                    <span class="hour">Hour</span>
                  </li>
                  <li class="countdown">
                    <span class="minutes f-s-20 fw-bold">{{ timeLeft.minutes }}</span>
                    <span class="min">Min</span>
                  </li>
                  <li class="countdown">
                    <span class="seconds f-s-20 fw-bold">{{ timeLeft.seconds }}</span>
                    <span class="sec">Sec</span>
                  </li>
                </ul>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    </main>
  </AppLayout>
</template>
