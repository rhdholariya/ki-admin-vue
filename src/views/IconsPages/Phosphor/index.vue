<script setup>
import { ref, computed } from "vue";
import * as PhosphorIcons from "@phosphor-icons/vue";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import AppLayout from "@/views/AppLayout.vue";

import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhShapes} from "@phosphor-icons/vue";
import {IconSearch} from "@tabler/icons-vue";



// Convert PhosphorIcons object to array of {name, component}, filtering out 'context'
const iconList = Object.entries(PhosphorIcons)
    .filter(([name]) => !name.toLowerCase().includes("context"))
    .map(([name, component]) => ({ name, component }));

const searchValue = ref("");

const filteredIcons = computed(() => {
  if (!searchValue.value) return iconList;
  return iconList.filter(icon =>
      icon.name.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

function copyIconCode(iconName) {
  navigator.clipboard.writeText(`<${iconName} />`);
  Toastify({
    text: "Copied to the clipboard successfully",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: { background: "rgba(var(--success),1)" },
  }).showToast();
}

// Component data
const breadcrumbItems = computed(() => ({
  title: "Phosphor",
  items: [
    {label: " Icons ", icon: PhShapes},
    {label: "Phosphor", active: true},
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
        <b-container fluid>
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
                            placeholder="Type to search"
                            v-model="searchValue"
                        />
                        <IconSearch size="18" class="" />
                      </div>
                    </b-col>
                  </b-row>
                </b-card-header>

                <b-card-body>
                  <ul class="icon-list space-top-icon">
                    <li
                        v-for="icon in filteredIcons"
                        :key="icon.name"
                        class="icon-box"
                        @click="copyIconCode(icon.name)"
                    >
                      <component :is="icon.component" size="30" />
                      <strong>{{ icon.name }}</strong>
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
