<script setup>
import {ref, watch, computed} from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody
} from "bootstrap-vue-next";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhShapes} from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import {IconSearch} from "@tabler/icons-vue";

import * as Wi from "oh-vue-icons/icons/wi";

const weatherIcons = Object.keys(Wi)
    .filter(key => key.startsWith('Wi') && key.length > 2)
    .map(key => {
      return key
          .replace(/([A-Z])/g, '-$1')
          .replace(/(\d+)/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '');
    });

const searchValue = ref("");
const iconList = ref(weatherIcons);

watch(searchValue, (value) => {
  const q = value.trim().toLowerCase();
  iconList.value = !q
      ? weatherIcons
      : weatherIcons.filter((name) => name.toLowerCase().includes(q));
});

const copyIcon = (name) => {
  const tag = `<VIcon name="${name}" scale="2" />`;
  navigator.clipboard.writeText(tag);

  Toastify({
    text: "Copied!",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    style: {background: "rgba(var(--success),1)"}
  }).showToast();
};

const breadcrumbItems = computed(() => ({
  title: "Weather Icons",
  items: [
    {label: " Icons ", icon: PhShapes},
    {label: "Weather Icons", active: true}
  ]
}));
</script>

<template>
  <AppLayout>
    <main>
      <BContainer fluid>
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
                      <IconSearch size="18" class=""/>
                    </div>
                  </b-col>

                </b-row>
              </b-card-header>

              <b-card-body>
                <ul class="icon-list">
                  <li
                      v-for="name in iconList"
                      :key="name"
                      class="icon-box text-center"
                      @click="copyIcon(name)"
                  >
                    <VIcon :name="name" scale="2" class="mb-2"/>

                    <div class="icon-box-codes">
                      <code>{{ name }}</code>
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