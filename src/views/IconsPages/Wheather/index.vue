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

// Import weather-icons CSS
import "weather-icons/css/weather-icons.min.css";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { PhShapes} from "@phosphor-icons/vue";

const allIcons = ref([]);
const iconList = ref([]);
const searchValue = ref("");

onMounted(() => {
  const styles = Array.from(document.styleSheets);
  const wiClasses = [];

  styles.forEach((sheet) => {
    try {
      const rules = sheet.cssRules || [];
      for (const rule of rules) {
        if (rule.selectorText && rule.selectorText.startsWith(".wi-")) {
          const className = rule.selectorText
              .split(",")[0]
              .trim()
              .replace(".", "");
          if (!wiClasses.includes(className)) {
            wiClasses.push(className);
          }
        }
      }
    } catch (e) {
      // ignore CORS-protected stylesheets
    }
  });

  allIcons.value = wiClasses;
  iconList.value = wiClasses;
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
// Component data
const breadcrumbItems = computed(() => ({
  title: "Tabler",
  items: [
    {label: " Icons ", icon: PhShapes},
    {label: "Tabler", active: true},
  ],
}));
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <b-container fluid>
      <!-- Breadcrumb -->
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
                        placeholder="type to search"
                        v-model="searchValue"
                    />
                  </div>
                </b-col>
                <div class="col-md-8 text-end pt-2" />
              </b-row>
            </b-card-header>
            <b-card-body class="d-flex justify-content-between align-items-center">
              <ul class="icon-list space-top-icon d-flex flex-wrap gap-3">
                <li
                    v-for="(iconName, index) in iconList"
                    :key="index"
                    class="icon-box text-center"
                    @click="copyIcon(iconName)"
                    style="cursor: pointer;"
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
    </b-container>
  </div>
</template>
