<script setup>
import { ref, computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
} from "bootstrap-vue-next";

import * as TablerIcons from "@tabler/icons-vue";


import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhShapes } from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import {IconSearch} from "@tabler/icons-vue";

const size = 50;
const color = "#000";


const iconEntries = Object.entries(TablerIcons);

const searchValue = ref("");
const iconList = computed(() => {
  if (!searchValue.value.trim()) return iconEntries;
  return iconEntries.filter(([iconName]) =>
      iconName.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

const copyIcon = (iconName) => {
  const iconTag = `<${iconName} :size="${size}" color="${color}" />`;
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
  <AppLayout>
    <main>
      <b-container fluid>
        <!-- Breadcrumb -->
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-header>
                <b-row>
                  <b-col md="4">
                    <div class="search-bar app-form app-icon-form position-relative">
                      <input
                          type="search"
                          class="form-control"
                          name="search"
                          placeholder="Type to search"
                          v-model="searchValue"
                      />
                      <IconSearch size="18" class="" />
                    </div>
                  </b-col>
                  <div class="col-md-8 text-end pt-2"/>
                </b-row>
              </b-card-header>

              <b-card-body>
                <ul class="icon-list space-top-icon">
                  <li
                      v-for="[iconName, IconComponent] in iconList"
                      :key="iconName"
                      class="icon-box"
                      @click="copyIcon(iconName)"
                  >
                    <component :is="IconComponent" :size="size" stroke="2"/>
                    <div class="icon-box-codes d-flex flex-column">
                      <strong class="text-capitalize">{{ iconName }}</strong>
                      <code>{{ iconName }}</code>
                    </div>
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
