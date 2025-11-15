<script setup>
import { ref, watch, onMounted , computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
} from "bootstrap-vue-next";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import "weather-icons/css/weather-icons.css";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhShapes} from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import {IconSearch} from "@tabler/icons-vue";

const allIcons = ref([]);
const iconList = ref([]);
const searchValue = ref("");
const selectedCategory = ref("all");

// Icon categories for better organization
const iconCategories = {
  all: "All Icons",
  day: "Day Weather",
  night: "Night Weather", 
  neutral: "Neutral Weather",
  moon: "Moon Phases",
  temperature: "Temperature & Units",
  wind: "Wind & Direction",
  time: "Time & Clock",
  special: "Special Phenomena",
  utility: "Utility Icons"
};

const categorizeIcons = () => {
  const categorized = {
    all: weatherIcons,
    day: weatherIcons.filter(icon => icon.startsWith('wi-day-') || icon === 'wi-solar-eclipse' || icon === 'wi-hot'),
    night: weatherIcons.filter(icon => icon.startsWith('wi-night-') || icon === 'wi-lunar-eclipse' || icon === 'wi-stars'),
    neutral: weatherIcons.filter(icon => 
      !icon.startsWith('wi-day-') && 
      !icon.startsWith('wi-night-') && 
      !icon.startsWith('wi-moon-') && 
      !icon.startsWith('wi-beaufort-') && 
      !icon.startsWith('wi-time-') && 
      !icon.startsWith('wi-direction-') &&
      !['wi-solar-eclipse', 'wi-hot', 'wi-lunar-eclipse', 'wi-stars'].includes(icon) &&
      !['wi-celsius', 'wi-fahrenheit', 'wi-degrees', 'wi-thermometer', 'wi-thermometer-exterior', 'wi-thermometer-internal'].includes(icon) &&
      !['wi-refresh', 'wi-refresh-alt', 'wi-umbrella', 'wi-train'].includes(icon) &&
      !['wi-cloud-down', 'wi-cloud-up', 'wi-cloud-refresh', 'wi-horizon', 'wi-horizon-alt', 'wi-sunrise', 'wi-sunset', 'wi-moonrise'].includes(icon)
    ),
    moon: weatherIcons.filter(icon => icon.startsWith('wi-moon-')),
    temperature: weatherIcons.filter(icon => 
      ['wi-celsius', 'wi-fahrenheit', 'wi-degrees', 'wi-thermometer', 'wi-thermometer-exterior', 'wi-thermometer-internal'].includes(icon)
    ),
    wind: weatherIcons.filter(icon => 
      icon.startsWith('wi-beaufort-') || 
      icon.startsWith('wi-direction-') || 
      ['wi-windy', 'wi-strong-wind', 'wi-wind-direction'].includes(icon)
    ),
    time: weatherIcons.filter(icon => icon.startsWith('wi-time-')),
    special: weatherIcons.filter(icon => 
      ['wi-sandstorm', 'wi-earthquake', 'wi-fire', 'wi-flood', 'wi-meteor', 'wi-tsunami', 'wi-volcano', 'wi-hurricane', 'wi-tornado', 'wi-alien'].includes(icon)
    ),
    utility: weatherIcons.filter(icon => 
      ['wi-refresh', 'wi-refresh-alt', 'wi-umbrella', 'wi-cloud-down', 'wi-cloud-up', 'wi-cloud-refresh', 'wi-horizon', 'wi-horizon-alt', 'wi-sunrise', 'wi-sunset', 'wi-moonrise'].includes(icon)
    )
  };
  return categorized;
};

const weatherIcons = [

  'wi-day-sunny', 'wi-day-cloudy', 'wi-day-cloudy-gusts', 'wi-day-cloudy-windy',
  'wi-day-fog', 'wi-day-hail', 'wi-day-haze', 'wi-day-lightning',
  'wi-day-rain', 'wi-day-rain-mix', 'wi-day-rain-wind', 'wi-day-showers',
  'wi-day-sleet', 'wi-day-sleet-storm', 'wi-day-snow', 'wi-day-snow-thunderstorm',
  'wi-day-snow-wind', 'wi-day-sprinkle', 'wi-day-storm-showers', 'wi-day-sunny-overcast',
  'wi-day-thunderstorm', 'wi-day-windy', 'wi-solar-eclipse', 'wi-hot',

  'wi-night-clear', 'wi-night-alt-cloudy', 'wi-night-alt-cloudy-gusts', 'wi-night-alt-cloudy-windy',
  'wi-night-alt-hail', 'wi-night-alt-lightning', 'wi-night-alt-rain', 'wi-night-alt-rain-mix',
  'wi-night-alt-rain-wind', 'wi-night-alt-showers', 'wi-night-alt-sleet', 'wi-night-alt-sleet-storm',
  'wi-night-alt-snow', 'wi-night-alt-snow-thunderstorm', 'wi-night-alt-snow-wind', 'wi-night-alt-sprinkle',
  'wi-night-alt-storm-showers', 'wi-night-alt-thunderstorm', 'wi-night-cloudy',
  'wi-night-cloudy-gusts', 'wi-night-cloudy-windy', 'wi-night-fog', 'wi-night-hail',
  'wi-night-lightning', 'wi-night-partly-cloudy', 'wi-night-rain', 'wi-night-rain-mix',
  'wi-night-rain-wind', 'wi-night-showers', 'wi-night-sleet', 'wi-night-sleet-storm',
  'wi-night-snow', 'wi-night-snow-thunderstorm', 'wi-night-snow-wind', 'wi-night-sprinkle',
  'wi-night-storm-showers', 'wi-night-thunderstorm', 'wi-lunar-eclipse',
  'wi-stars',

  'wi-cloud', 'wi-cloudy', 'wi-cloudy-gusts', 'wi-cloudy-windy', 'wi-fog',
  'wi-hail', 'wi-rain', 'wi-rain-mix', 'wi-rain-wind', 'wi-showers', 'wi-sleet',
  'wi-snow', 'wi-sprinkle', 'wi-storm-showers', 'wi-thunderstorm', 'wi-snow-wind',
  'wi-smog', 'wi-smoke', 'wi-lightning', 'wi-snowflake-cold', 'wi-windy', 'wi-strong-wind', 'wi-alien',


  'wi-celsius', 'wi-fahrenheit', 'wi-degrees', 'wi-thermometer', 'wi-thermometer-exterior',
  'wi-thermometer-internal',

  'wi-cloud-down', 'wi-cloud-up', 'wi-cloud-refresh',

  'wi-horizon', 'wi-horizon-alt', 'wi-sunrise', 'wi-sunset',

  'wi-refresh', 'wi-refresh-alt', 'wi-umbrella',
  'wi-moon-new', 'wi-moon-first-quarter', 'wi-moon-waxing-gibbous-1', 'wi-moon-waxing-gibbous-2', 'wi-moon-waxing-gibbous-3',
  'wi-moon-waxing-gibbous-4', 'wi-moon-waxing-gibbous-5', 'wi-moon-waxing-gibbous-6',
  'wi-moon-full', 'wi-moon-waning-gibbous-1', 'wi-moon-waning-gibbous-2', 'wi-moon-waning-gibbous-3',
  'wi-moon-waning-gibbous-4', 'wi-moon-waning-gibbous-5', 'wi-moon-waning-gibbous-6',
  'wi-moon-waning-crescent-1', 'wi-moon-waning-crescent-2', 'wi-moon-waning-crescent-3',
  'wi-moon-waning-crescent-4', 'wi-moon-waning-crescent-5', 'wi-moon-waning-crescent-6',

  'wi-time-1', 'wi-time-2', 'wi-time-3', 'wi-time-4', 'wi-time-5', 'wi-time-6',
  'wi-time-7', 'wi-time-8', 'wi-time-9', 'wi-time-10', 'wi-time-11', 'wi-time-12',

  'wi-dust', 'wi-sleet', 'wi-snow', 'wi-snow-wind', 'wi-snowflake-cold',
  'wi-rain-mix', 'wi-rain-wind', 'wi-rain', 'wi-showers', 'wi-sprinkle', 'wi-storm-showers',
  'wi-thunderstorm', 'wi-lightning', 'wi-snowflake-cold',

  'wi-hurricane', 'wi-tornado',

  'wi-refresh', 'wi-refresh-alt', 'wi-umbrella',
  'wi-cloud-down', 'wi-cloud-up', 'wi-cloud-refresh',
  'wi-horizon', 'wi-horizon-alt', 'wi-sunrise', 'wi-sunset'
];

onMounted(() => {
  const categorized = categorizeIcons();
  allIcons.value = categorized[selectedCategory.value];
  iconList.value = categorized[selectedCategory.value];
});

watch(selectedCategory, (newCategory) => {
  const categorized = categorizeIcons();
  allIcons.value = categorized[newCategory];
  iconList.value = categorized[newCategory];
});

watch(searchValue, (val) => {
  if (!val.trim()) {
    iconList.value = allIcons.value;
  } else {
    iconList.value = allIcons.value.filter((i) =>
        i.toLowerCase().includes(val.toLowerCase())
    );
  }
});

const copyIcon = (iconName) => {
  const iconTag = `<i class="wi ${iconName}"></i>`;
  navigator.clipboard.writeText(iconTag);

  Toastify({
    text: "Copied to the clipboard successfully",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "rgba(var(--success),1)",
    },
  }).showToast();
};

const breadcrumbItems = computed(() => ({
  title: "Weather Icons",
  items: [
    {label: " Icons ", icon: PhShapes},
    {label: "Weather Icons", active: true},
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <BContainer fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col cols="12">
            <b-card>
              <b-card-header>
                <b-row>
                  <b-col md="4">
                    <div class="search-bar app-form app-icon-form position-relative">
                      <input
                          type="search"
                          class="form-control"
                          placeholder="Type to search"
                          v-model="searchValue"
                      />
                      <IconSearch size="18" class="" />
                    </div>
                  </b-col>
                  <b-col md="4">
                    <div class="category-filter">
                      <select class="form-select" v-model="selectedCategory">
                        <option v-for="(label, key) in iconCategories" :key="key" :value="key">
                          {{ label }}
                        </option>
                      </select>
                    </div>
                  </b-col>
                  <b-col md="4" class="text-end pt-2">
                    <span class="badge bg-primary">{{ iconList.length }} icons</span>
                  </b-col>
                </b-row>
              </b-card-header>
              <b-card-body>
                <ul class="icon-list space-top-icon d-flex flex-wrap gap-3">
                  <li
                      v-for="(iconName, index) in iconList"
                      :key="index"
                      class="icon-box text-center"
                      @click="copyIcon(iconName)"

                  >
                    <i :class="['wi', iconName]" style="font-size: 50px; color: #000;"></i>
                    <div class="icon-box-codes">
                      <code>{{ iconName }}</code>
                    </div>
                  </li>
                </ul>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </BContainer>
    </main>
  </AppLayout>
</template>
