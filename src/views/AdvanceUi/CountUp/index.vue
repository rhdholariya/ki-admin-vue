<script setup>
import { ref, computed } from "vue";
import { BContainer, BCol, BCard, BCardBody, BNav, BNavItem, BButton } from "bootstrap-vue-next";

import {
  counterItems,
  simpleCounterItems,
  tabData,
  updateCounterItems,
} from "@/data/advanceui/CountUp/UpdateCounter.js";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import { PhBriefcase } from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import Counter from "@/components/AdvanceUi/CountUp/Counter.vue";

const activeTab = ref("1");

const activeTabItems = computed(() => {
  const tab = tabData.find((t) => t.id.toString() === activeTab.value);
  return tab ? tab.items : [];
});

const handleUpdateCounters = () => {
  updateCounterItems.forEach(item => {
    // Assign new random values or updated data
    item.value = Math.floor(Math.random() * 1000);
  });
};

// Breadcrumb data
const breadcrumbItems = {
  title: "count-up",
  items: [
    { label: "Advance UI", icon: PhBriefcase },
    { label: "count-up", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <b-container fluid>
      <main>
        <!-- Breadcrumb -->
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <!-- Simple Counter -->
        <b-col cols="12">
          <b-card class="mb-4">
            <template #header>
              <h5>Simple</h5>
              <div class="text-secondary mt-2">
                Explore CountUp.js for additional examples. For more examples,
                visit the official
                <a href="https://inorganik.github.io/countUp.js/" class="text-danger text-decoration-underline" target="_blank" rel="noopener noreferrer">
                  CountUp.js
                </a> website.
              </div>
            </template>
            <b-card-body>
              <div class="simple-counter mt-4">
                <div class="simple" v-for="(item, idx) in simpleCounterItems" :key="idx">
                  <div>
                    <span v-if="item.prefix">{{ item.prefix }}</span>
                    <Counter class="counter" :value="item.value" tag="p" />
                    <span v-if="item.suffix">{{ item.suffix }}</span>
                  </div>
                  <p>
                    <component :is="item.icon" />
                    {{ item.label }}
                  </p>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <!-- Customized Counter -->
        <b-col cols="12">
          <b-card class="mb-4">
            <template #header>
              <h5>Customized</h5>
              <div class="text-secondary mt-2">
                You have the flexibility to modify CountUp by incorporating our extended Bootstrap classes.
              </div>
            </template>
            <b-card-body>
              <div class="customized-counter">
                <div class="customized text-center" v-for="(item, idx) in counterItems" :key="idx">
                  <div class="icon-edit">
                    <component :is="item.icon" />
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <span v-if="item.prefix">{{ item.prefix }}</span>
                    <Counter class="counter f-w-500 f-s-30 text-dark" :value="item.value" :tag="item.tag" />
                    <span v-if="item.suffix">{{ item.suffix }}</span>
                  </div>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <!-- Update Counter -->
        <b-col cols="12">
          <b-card class="mb-4">
            <template #header>
              <h5>Update Data</h5>
              <div class="text-secondary mt-2">
                Demonstrates how to reset a CountUp instance with new values.
              </div>
            </template>
            <b-card-body>
              <div class="simple-counter mt-4">
                <div class="d-flex gap-3">
                  <div class="simple" v-for="(item, idx) in updateCounterItems" :key="idx">
                    <div class="d-flex align-items-center">
                      <span v-if="item.prefix">{{ item.prefix }}</span>
                      <Counter class="counter update-counter mb-0" :value="item.value" tag="p" />
                      <span v-if="item.suffix">{{ item.suffix }}</span>
                    </div>
                    <p>
                      <i :class="`${item.iconClass} ${item.iconColorClass}`"></i>
                      {{ item.label }}
                    </p>
                  </div>
                </div>
                <div class="mt-3">
                  <b-button variant="light-primary" @click="handleUpdateCounters">
                    Update Data
                  </b-button>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <!-- Under Tab Sections -->
        <b-col cols="12">
          <b-card class="mb-4">
            <template #header>
              <h5>Under Tab Sections</h5>
              <div class="text-secondary mt-2">
                Demo CountUp triggered inside tabs.
              </div>
            </template>
            <b-card-body>
              <div class="mt-3 under-tab-section">
                <b-nav variant="tabs" class="app-tabs-primary justify-content-center mb-3" v-model="activeTab">
                  <b-nav-item v-for="tab in tabData" :key="tab.id" :active="tab.id.toString() === activeTab" @click="activeTab = tab.id.toString()">
                    {{ `Tab-${tab.id}` }}
                  </b-nav-item>
                </b-nav>

                <div class="simple-counter mt-4">
                  <div class="d-flex gap-3 justify-content-center flex-wrap">
                    <div v-for="(item, idx) in activeTabItems" :key="`${activeTab}-${item.value}-${idx}`" class="simple text-center">
                      <div>
                        <span v-if="item.prefix">{{ item.prefix }}</span>
                        <Counter :value="item.value" :key="`${activeTab}-${item.value}-${idx}`" class="counter d-inline" tag="p" />
                        <span v-if="item.suffix">{{ item.suffix }}</span>
                      </div>
                      <p class="mb-0">
                        <component :is="item.icon" />
                        {{ item.label }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

      </main>
    </b-container>
  </AppLayout>
</template>
