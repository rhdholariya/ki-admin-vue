<script setup>
import { ref, onMounted, computed } from "vue";
import { BContainer, BRow, BCol, BCard, BCardBody } from "bootstrap-vue-next";
import { Icon } from "@iconify/vue";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhShapes} from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import {IconSearch} from "@tabler/icons-vue";


// State
const iconList = ref([]);
const searchValue = ref("");

// Fetch LineMD icons
const fetchLineMDIcons = async () => {
  try {
    const response = await fetch(
        "https://api.iconify.design/collection?prefix=line-md&chars=true&aliases=true"
    );
    const data = await response.json();
    const categories = Object.keys(data.categories);
    const icons = categories.flatMap((cat) => data.categories[cat]);
    iconList.value = icons;
  } catch (error) {
    console.error("Error fetching LineMD icons:", error);
  }
};

// Computed filtered icons
const filteredIcons = computed(() => {
  if (!searchValue.value) return iconList.value;
  return iconList.value.filter((icon) =>
      icon.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

// Copy icon to clipboard
const copyIconToClipboard = (iconName) => {
  navigator.clipboard.writeText(`<iconify-icon icon="${iconName}"></iconify-icon>`);
  Toastify({
    text: "Copied to clipboard successfully",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: { background: "rgba(40,167,69,1)" }, // Bootstrap success green
  }).showToast();
};

// Fetch icons on mount
onMounted(fetchLineMDIcons);

// Component data
const breadcrumbItems = computed(() => ({
  title: "Animated",
  items: [
    {label: " Icons ", icon: PhShapes},
    {label: "Animated", active: true},
  ],
}));
</script>


<template>
  <AppLayout>
    <main>
  <b-container fluid>
    <!-- Breadcrumb -->
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
    <b-row>
      <b-col cols="12">
        <b-card>
          <template #header>
            <b-row>
              <b-col md="4">
                <div class="search-bar app-form app-icon-form position-relative">
                  <input
                      type="search"
                      class="form-control"
                      placeholder="type to search"
                      v-model="searchValue"
                  />
                  <IconSearch size="18" class="" />
                </div>
              </b-col>
              <b-col md="8" class="text-end pt-2" />
            </b-row>
          </template>

          <b-card-body>
            <ul class="icon-list">
              <li
                  v-for="(icon, index) in filteredIcons"
                  :key="index"
                  class="icon-box"
                  @click="copyIconToClipboard(icon)"
                  :data-icon="icon"
              >
                <i>
                  <Icon :icon="`line-md:${icon}`" width="30" height="30" />
                </i>
                <strong class="mb-3">{{ icon }}</strong>
              </li>
            </ul>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
    </main>
  </AppLayout>
</template>




