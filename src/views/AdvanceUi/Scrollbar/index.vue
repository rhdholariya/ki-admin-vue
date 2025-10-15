<script setup>
import { ref } from 'vue';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";
import { BContainer, BRow, BCol, BCard, BCardBody } from 'bootstrap-vue-next';
import SimpleBar from 'simplebar-vue';


const badges = ref([
  { name: 'Stella Nowland', badgeType: 'primary' },
  { name: 'Lola Stanford', badgeType: 'secondary' },
  { name: 'Caitlin Coungeau', badgeType: 'success' },
  { name: 'Graciela W. McClaran', badgeType: 'danger' },
  { name: 'Derek T. Aldridge', badgeType: 'warning' },
  { name: 'Annie A. Riley', badgeType: 'primary' },
  { name: 'Hana J. Boyd', badgeType: 'danger' },
  { name: 'Karen R. Pryce', badgeType: 'warning' },
  { name: 'Annie A. Riley', badgeType: 'primary' },
  { name: 'Graciela W. McClaran', badgeType: 'danger' },
  { name: 'Hana J. Boyd', badgeType: 'warning' },
  { name: 'Stella Nowland', badgeType: 'primary' },
]);

const images = ref([
  '/images/profile-app/07.jpg',
  '/images/profile-app/09.jpg',
  '/images/profile-app/10.jpg',
  '/images/profile-app/07.jpg',
]);
// Breadcrumb data
const breadcrumbItems = {
  title: "Scrollbar",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Scrollbar", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col lg="6">
            <b-card class="mb-4">
              <template #header>
                <h5>Vertical Scrollbar</h5>
              </template>
              <b-card-body>
                <simple-bar class="scroll-bar vertical-scrollbar-box" :options="{ autoHide: true }">
                  <h5 class="mb-2">Vertically scrollbar:</h5>
                  <p>
                    To create a vertically scrollable container with detailed control over the
                    scrollbar, you can use a combination of HTML and CSS.
                  </p>
                  <img src="/images/blog-app/02.jpg" alt="Vertical Scroll" class="w-100 mb-3" />
                  <ul>
                    <li><strong>Overflow Content:</strong> When content within a container exceeds the container’s height.</li>
                    <li><strong>Text Blocks:</strong> Displaying lengthy articles, documents, or comments.</li>
                    <li><strong>Data Tables:</strong> Viewing large datasets or tables.</li>
                  </ul>
                </simple-bar>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6">
            <b-card class="mb-4">
              <template #header>
                <h5>Both Scrollbars</h5>
              </template>
              <b-card-body>
                <simple-bar class="scroll-bar both-scroll" :options="{ autoHide: false }">
                  <img src="/images/blog-app/09.jpg" alt="Both Scroll" class="img-fluid" />
                </simple-bar>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6">
            <b-card class="mb-4">
              <template #header>
                <h5>Horizontal Scrollbar</h5>
              </template>
              <b-card-body>
                <simple-bar class="scroll-bar horizontal-scrollbar" :options="{ autoHide: false }">
                  <div class="d-flex">
                    <div
                        v-for="(src, index) in images"
                        :key="index"
                        class="me-3"
                        style="flex: 0 0 auto;"
                    >
                      <img :src="src" :alt="`Profile ${index}`" class="img-fluid rounded" />
                    </div>
                  </div>
                </simple-bar>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6">
            <b-card>
              <template #header>
                <h5>Badges Scrollbar</h5>
              </template>
              <b-card-body>
                <simple-bar class="scroll-bar scroll-list-group" :options="{ autoHide: false }">
                  <ul class="list-group">
                    <li
                        v-for="(badge, index) in badges"
                        :key="index"
                        class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    >
                      <div class="ms-2">{{ index + 1 }}. {{ badge.name }}</div>
                      <span :class="`badge text-bg-${badge.badgeType.toLowerCase()}`">{{ badge.badgeType }}</span>
                    </li>
                  </ul>
                </simple-bar>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
        </b-container>
    </main>
  </AppLayout>
</template>