<script setup>
import { ref, computed } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BNav,
  BNavItem,
  BButton,
} from "bootstrap-vue-next";

import {
  counterItems,
  simpleCounterItems,
  tabData,
  updateCounterItems,
} from "@/data/advanceui/CountUp/UpdateCounter.js";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhBriefcase } from "@phosphor-icons/vue";
import AppLayout from "@/views/AppLayout.vue";
import Counter from "@/components/AdvanceUi/CountUp/Counter.vue";

const activeTab = ref("1");


const activeTabItems = computed(() => {
  const tab = tabData.find((t) => t.id.toString() === activeTab.value);
  return tab ? tab.items : [];
});


const handleUpdateCounters = () => {
  updateCounterItems.forEach((item) => {
    item.value = Math.floor(Math.random() * 1000);
  });
};

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
        <Breadcrumb :breadcrumb="breadcrumbItems" />

        <!-- SIMPLE COUNTER -->
        <b-row>
          <b-col cols="12">
            <b-card class="mb-4">
              <template #header>
                <h5>Simple</h5>
                <div class="text-secondary mt-2">
                  Explore CountUp.js for additional examples. Visit:
                  <a
                      href="https://inorganik.github.io/countUp.js/"
                      class="text-danger text-decoration-underline"
                      target="_blank"
                  >
                    CountUp.js
                  </a>
                </div>
              </template>

              <b-card-body>
                <div class="simple-counter mt-4">
                  <div
                      v-for="(item, idx) in simpleCounterItems"
                      :key="idx"
                      class="simple"
                  >
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
        </b-row>

        <!-- CUSTOMIZED COUNTER -->
        <b-row>
          <b-col cols="12">
            <b-card class="mb-4">
              <template #header>
                <h5>Customized</h5>
                <div class="text-secondary mt-2">
                  Modify CountUp using custom Bootstrap classes.
                </div>
              </template>

              <b-card-body>
                <div class="customized-counter">
                  <div
                      class="customized text-center"
                      v-for="(item, idx) in counterItems"
                      :key="idx"
                  >
                    <div class="icon-edit">
                      <component :is="item.icon" />
                    </div>

                    <div class="d-flex justify-content-center align-items-center">
                      <span v-if="item.prefix">{{ item.prefix }}</span>
                      <Counter
                          class="counter f-w-500 f-s-30 text-dark"
                          :value="item.value"
                          :tag="item.tag"
                      />
                      <span v-if="item.suffix">{{ item.suffix }}</span>
                    </div>

                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!-- UPDATE DATA COUNTER -->
        <b-row>
          <b-col cols="12">
            <b-card class="mb-4">
              <template #header>
                <h5>Update Data</h5>
                <div class="text-secondary mt-2">
                  Reset CountUp and update with new values.
                </div>
              </template>

              <b-card-body>
                <div class="simple-counter mt-4">
                  <div class="d-flex gap-3">
                    <div
                        class="simple"
                        v-for="(item, idx) in updateCounterItems"
                        :key="idx"
                    >
                      <div class="d-flex align-items-center">
                        <span v-if="item.prefix">{{ item.prefix }}</span>
                        <Counter
                            class="counter update-counter mb-0"
                            :value="item.value"
                            tag="p"
                        />
                        <span v-if="item.suffix">{{ item.suffix }}</span>
                      </div>
                      <p>
                        <i :class="`${item.iconClass} ${item.iconColorClass}`" />
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
        </b-row>

        <!-- TAB COUNTER -->
        <b-row>
          <b-col cols="12">
            <b-card class="mb-4">
              <template #header>
                <h5>Under Tab Sections</h5>
                <div class="text-secondary mt-2">
                  CountUp triggered inside tabs.
                </div>
              </template>

              <b-card-body>
                <div class="mt-3 under-tab-section">

                  <!-- TABS -->
                  <b-nav variant="tabs" class="app-tabs-primary justify-content-center mb-3">
                    <b-nav-item
                        v-for="tab in tabData"
                        :key="tab.id"
                        :active="activeTab === tab.id.toString()"
                        @click="activeTab = tab.id.toString()"
                    >
                      {{ `Tab-${tab.id}` }}
                    </b-nav-item>
                  </b-nav>

                  <!-- TAB CONTENT -->
                  <div class="simple-counter mt-4">
                    <div class="d-flex gap-3 justify-content-center flex-wrap">
                      <div
                          v-for="(item, idx) in activeTabItems"
                          :key="`${activeTab}-${idx}`"
                          class="simple text-center"
                      >
                        <div>
                          <span v-if="item.prefix">{{ item.prefix }}</span>
                          <Counter
                              :value="item.value"
                              class="counter d-inline"
                              tag="p"
                          />
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
        </b-row>
      </main>
    </b-container>
  </AppLayout>
</template>
