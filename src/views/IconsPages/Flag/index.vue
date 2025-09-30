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

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { PhShapes } from "@phosphor-icons/vue";
import {countryData} from "@/data/icons/Flag/FlagData.js"
import AppLayout from "@/views/AppLayout.vue";
import {IconSearch} from "@tabler/icons-vue";

// Country data structure for better Vue reactivity


// Search functionality
const searchValue = ref("");

const copyCode = (country) => {
  const flagTag = `<flag :iso="'${country.flag}'" class="flag-icon" />`;
  navigator.clipboard.writeText(flagTag);
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

// Computed properties for Vue-friendly reactivity
const filteredCountries = computed(() => {
  if (!searchValue.value.trim()) {
    return countryData;
  }
  return countryData.filter(country => 
    country.code.toLowerCase().includes(searchValue.value.toLowerCase()) ||
    country.name.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

// Breadcrumb data
const breadcrumbItems = {
  title: "Flag",
  items: [
    { label: " Icons ", icon: PhShapes },
    { label: "Flag", active: true },
  ],
};
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
                <div
                    class="search-bar app-form app-icon-form position-relative"
                >
                  <input
                      type="search"
                      class="form-control"
                      placeholder="Type country code (e.g., us, gb)"
                      v-model="searchValue"
                  />
                  <IconSearch size="18" class="" />
                </div>
              </b-col>
            </b-row>
          </b-card-header>

          <b-card-body class="d-flex justify-content-between align-items-center">
            <ul class="icon-list space-top-icon">
              <li
                  v-for="country in filteredCountries"
                  :key="country.code"
                  class="icon-box"
                  @click="copyCode(country)"
              >
                <flag
                    :iso="country.flag"
                    class="flag-icon"
                />
                <div class="icon-box-codes d-flex flex-column">
                  <strong class="text-uppercase">{{ country.code }}</strong>
                  <code>{{ country.name }}</code>
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
