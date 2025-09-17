<script setup>
import { ref, nextTick } from "vue";
import Breadcrumb from "@components/breadcrumb/Breadcrumb.vue";
import { html as beautifyHtml } from "js-beautify";
import { PhBriefcase, PhCode } from "@phosphor-icons/vue";
import {
  BAlert,
  BBadge,
  BButton,
  BCard,
  BCardImg,
  BCollapse,
  BCarousel,
  BCarouselSlide,
  BOffcanvas,
  BFormGroup,
  BFormSelect
} from "bootstrap-vue-next";

// Breadcrumb data
const breadcrumbItems = {
  title: "Alert",
  items: [
    {label: "Ui-kits", icon: PhBriefcase},
    {label: "Alert", active: true},
  ],
};

// Alert refs and captured HTML
const alertBlock = ref(null);
const outlineBlock = ref(null);
const capturedCode = ref("");
const capturedOutlineCode = ref("");

// Collapse state
const showCollapse = ref(false);
const showInnerCollapse = ref(false);

// Carousel state
const slide = ref(0);
const sliding = ref(false);
const onSlideStart = () => (sliding.value = true);
const onSlideEnd = () => (sliding.value = false);

// Capture HTML
const captureHtml = async () => {
  await nextTick();
  if (alertBlock.value) {
    capturedCode.value = beautifyHtml(alertBlock.value.innerHTML.trim(), {
      indent_size: 2,
    });
  }
};
const captureOutlineHtml = async () => {
  await nextTick();
  if (outlineBlock.value) {
    capturedOutlineCode.value = beautifyHtml(outlineBlock.value.innerHTML.trim(), {
      indent_size: 2,
    });
  }
};

// Offcanvas (sidebar) state
const showSidebar = ref(false);
const variant = ref("dark");
const variants = ref([
  "transparent",
  "white",
  "light",
  "dark",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info"
]);

import {
  BDropdown,
  BDropdownItem,
  BDropdownDivider,
} from 'bootstrap-vue-next';

// You can use refs if needed for dropdowns
const dropdownOpen = ref(false);

import { BTabs, BTab } from "bootstrap-vue-next";

const activeTab = ref(0);

function nextTab() {
  activeTab.value = (activeTab.value + 1) % 3;
}

import {  BAccordion, BAccordionItem } from "bootstrap-vue-next";

// Track the currently open item (id of the accordion item)
const openItem = ref(null);

function toggleItem(id) {
  openItem.value = openItem.value === id ? null : id;
}

import {  BProgress } from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";

const animatedValue = ref(20);

function increaseProgress() {
  if (animatedValue.value < 100) animatedValue.value += 10;
}

function resetProgress() {
  animatedValue.value = 0;
}



// State to control alert visibility
const showAlert = ref(false);

// Example: trigger a notification
const triggerNotification = () => {
  showAlert.value = true;
  // Auto-hide after 3 seconds
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
};



</script>

<template>
    <AppLayout>
  <main>
    <div class="container-fluid">
      <!-- Breadcrumb -->
      <Breadcrumb :breadcrumb="breadcrumbItems"/>

      <!-- Alerts -->
      <div class="row">
        <b-alert show variant="primary">Primary Alert</b-alert>
        <h2>
          Example heading
          <b-badge>New</b-badge>
        </h2>

        <!-- Collapse example -->
        <div>
          <b-button @click="showCollapse = !showCollapse" variant="primary">Toggle Collapse</b-button>
          <b-collapse v-model="showCollapse" class="mt-2">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button @click="showInnerCollapse = !showInnerCollapse" size="sm">Toggle Inner Collapse</b-button>
              <b-collapse v-model="showInnerCollapse" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </b-collapse>
        </div>

        <!-- Carousel -->
        <div>
          <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
          >
            <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                              img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
            <b-carousel-slide>
              <template #img>
                <img class="d-block img-fluid w-100" width="1024" height="480"
                     src="https://picsum.photos/1024/480/?image=55" alt="image slot">
              </template>
            </b-carousel-slide>
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt
                eget, convallis vel est. Ut pellentesque ut lacus vel interdum.</p>
            </b-carousel-slide>
          </b-carousel>
          <p class="mt-4">Slide #: {{ slide }}<br>Sliding: {{ sliding }}</p>
        </div>

        <!-- Offcanvas (sidebar replacement) -->
        <div>
          <b-button @click="showSidebar = !showSidebar">Toggle Sidebar</b-button>

          <b-offcanvas
              v-model="showSidebar"
              title="Sidebar with backdrop"
              :backdrop-variant="variant"
              backdrop
              shadow
          >
            <div class="px-3 py-2">
              <b-form-group label="Backdrop variant" label-for="backdrop-variant">
                <b-form-select
                    id="backdrop-variant"
                    v-model="variant"
                    :options="variants"
                ></b-form-select>
              </b-form-group>
            </div>
          </b-offcanvas>
        </div>

        <!--        dropdown-->
        <div class="p-3">
          <b-dropdown
              id="dropdown-1"
              text="Drop Right"
              drop="right"
              boundary="viewport"
              class="m-md-2"
          >
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="container mt-4">
          <b-card no-body>
            <!-- Tabs -->
            <b-tabs v-model="activeTab">
              <b-tab title="Tab 1">
                <p class="p-3">Content for Tab 1</p>
              </b-tab>
              <b-tab title="Tab 2">
                <p class="p-3">Content for Tab 2</p>
              </b-tab>
              <b-tab title="Tab 3">
                <p class="p-3">Content for Tab 3</p>
              </b-tab>
            </b-tabs>
          </b-card>

        </div>


        <div class="container mt-4">
          <b-card>
            <b-accordion v-model="openItem" flush>
              <b-accordion-item id="item-1" title="Accordion Item 1">
                <p class="mb-0">
                  This is the content for accordion item 1. You can put any HTML here.
                </p>
              </b-accordion-item>

              <b-accordion-item id="item-2" title="Accordion Item 2">
                <p class="mb-0">
                  This is the content for accordion item 2. It can also include lists, images, or other components.
                </p>
              </b-accordion-item>

              <b-accordion-item id="item-3" title="Accordion Item 3">
                <p class="mb-0">
                  Content for accordion item 3 goes here. This can be dynamic too.
                </p>
              </b-accordion-item>
            </b-accordion>
          </b-card>

          <div class="mt-3">
            <p>Currently open item: {{ openItem }}</p>
            <b-button variant="primary" @click="toggleItem(2)">Toggle Item 2</b-button>
          </div>
        </div>

        <div class="container mt-4">
          <b-card>
            <h5>Basic Progress</h5>
            <b-progress :value="30" max="100" class="mb-3"></b-progress>

            <h5>Colored Progress</h5>
            <b-progress :value="50" max="100" variant="success" class="mb-3"></b-progress>
            <b-progress :value="70" max="100" variant="warning" class="mb-3"></b-progress>
            <b-progress :value="90" max="100" variant="danger" class="mb-3"></b-progress>

            <h5>Animated Progress</h5>
            <b-progress :value="animatedValue" max="100" animated variant="info" class="mb-3"></b-progress>

            <b-button variant="primary" @click="increaseProgress">Increase Progress</b-button>
            <b-button variant="secondary" class="ms-2" @click="resetProgress">Reset</b-button>
          </b-card>
        </div>

        <div class="p-3">
          <!-- Button to show notification -->
          <b-button @click="triggerNotification" variant="primary">Show Notification</b-button>

          <!-- Notification / Alert -->
          <b-alert
              v-model="showAlert"
              variant="success"
              dismissible
              class="mt-3"
          >
            This is a success notification!
          </b-alert>
        </div>
      </div>
    </div>

      <div>
          <b-button
              size="sm" variant="primary">Disabled</b-button>
          <b-button disabled size="lg">Also Disabled</b-button>
      </div>

  </main>
    </AppLayout>
</template>