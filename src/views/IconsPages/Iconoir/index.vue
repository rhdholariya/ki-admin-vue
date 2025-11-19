<script setup>
import {ref, computed} from 'vue';
import * as Iconoir from '@iconoir/vue';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody, BCardHeader,
} from "bootstrap-vue-next";


import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhShapes} from "@phosphor-icons/vue";
import {IconSearch  } from "@tabler/icons-vue";



const iconList = Object.entries(Iconoir)
    .filter(([name]) => !['context', 'provider'].includes(name.toLowerCase()))
    .map(([name, component]) => ({name, component}));

const searchValue = ref('');
const filteredIcons = computed(() => {
  if (!searchValue.value) return iconList;
  return iconList.filter(icon =>
      icon.name.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});

function copyToClipboard(iconName) {
  const iconElement = `<${iconName} />`;
  navigator.clipboard.writeText(iconElement);
  Toastify({
    text: 'Copied to clipboard!',
    duration: 3000,
    close: true,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: 'rgba(var(--success),1)',
    },
  }).showToast();
}


const breadcrumbItems = computed(() => ({
  title: "Iconoir",
  items: [
    {label: " Icons ", icon: PhShapes},
    {label: "Iconoir", active: true},
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
            <ul class="icon-list icons-iconoir space-top-icon">
              <li
                  v-for="icon in filteredIcons"
                  :key="icon.name"
                  class="icon-box"
                  @click="copyToClipboard(icon.name)"
              >
                <component :is="icon.component" width="30" />
                <strong class="mb-3">{{ icon.name }}</strong>
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

