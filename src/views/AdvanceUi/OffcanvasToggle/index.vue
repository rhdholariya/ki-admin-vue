<script setup>
import AppLayout from "@/views/AppLayout.vue";
import { ref } from 'vue';
import { BContainer, BRow, BCol, BCard, BCardBody, BButton, BOffcanvas } from 'bootstrap-vue-next';
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";


const showOffcanvas = ref(false);
const showTop = ref(false);
const showRight = ref(false);
const showBottom = ref(false);
const showScrolling = ref(false);
const showBackdrop = ref(false);
const showBoth = ref(false);

const showStatic = ref(false);

// Breadcrumb data
const breadcrumbItems = {
  title: "Offcanvas",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Offcanvas", active: true},
  ],
};
</script>
<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <template #header>
                <h5>Live Demo</h5>
                        <p>
                  Use the buttons below to show and hide an offcanvas element via JavaScript that
                  toggles the <span class="text-danger">.offcanvas</span> class.
                </p>
              </template>

              <b-card-body>
                <!-- Trigger buttons -->
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showOffcanvas = true"
                >
                  Link with click
                </b-button>

                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showOffcanvas = true"
                >
                  Button with click
                </b-button>

                <!-- Offcanvas component -->
                <b-offcanvas
                    title="Offcanvas"
                    :show="showOffcanvas"
                    placement="start"
                    @hide="showOffcanvas = false"
                >
                  <template #header>
                    <h5 class="offcanvas-title">Offcanvas</h5>
                    <b-button
                        variant="link"
                        class="btn-close text-reset"
                        @click="showOffcanvas = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div>
                    Some text as placeholder. In real life you can have the elements you have
                    chosen. Like, text, images, lists, etc.
                  </div>

                </b-offcanvas>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card no-body>
              <template #header>
                <h5>Placement</h5>
                <p>Offcanvas Different Placement Example: Left, Right & Bottom</p>
              </template>

              <b-card-body>
                <!-- Top Offcanvas -->
                <b-button
                    variant="primary"
                    @click="showTop = true"
                >
                  Toggle top offcanvas
                </b-button>

                <b-offcanvas
                    title="Offcanvas top"
                    :show="showTop"
                    placement="top"
                    @hide="showTop = false"
                >
                  <template #header>
                    <h5>Offcanvas top</h5>
                    <b-button
                        variant="link"
                        class="btn-close text-reset"
                        @click="showTop = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div class="offcanvas-body">...</div>
                </b-offcanvas>

                <!-- Right Offcanvas -->
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showRight = true"
                >
                  Toggle right offcanvas
                </b-button>

                <b-offcanvas
                    title="Offcanvas right"
                    :show="showRight"
                    placement="end"
                    @hide="showRight = false"
                >
                  <template #header>
                    <h5>Offcanvas right</h5>
                    <b-button
                        variant="link"
                        class="btn-close text-reset"
                        @click="showRight = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div class="offcanvas-body">...</div>
                </b-offcanvas>

                <!-- Bottom Offcanvas -->
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showBottom = true"
                >
                  Toggle bottom offcanvas
                </b-button>

                <b-offcanvas
                    title="Offcanvas bottom"
                    :show="showBottom"
                    placement="bottom"
                    @hide="showBottom = false"
                >
                  <template #header>
                    <h5>Offcanvas bottom</h5>
                    <b-button
                        variant="primary"
                        class="btn-close text-reset"
                        @click="showBottom = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div class="offcanvas-body small">...</div>
                </b-offcanvas>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card no-body>
              <template #header>
                <h5>Backdrop</h5>
                <p>
                  Scrolling the <span class="text-danger">body</span> element is disabled when an offcanvas and its backdrop are visible.
                  Use the <span class="text-danger">scrollable</span> prop to toggle scrolling and the
                  <span class="text-danger">backdrop</span> prop to toggle the backdrop.
                </p>
              </template>

              <b-card-body>
                <!-- Trigger Buttons -->
                <b-button class="m-2" variant="primary" @click="showScrolling = true">
                  Enable body scrolling
                </b-button>
                <b-button class="m-2" variant="primary" @click="showBackdrop = true">
                  Enable backdrop (default)
                </b-button>
                <b-button class="m-2" variant="primary" @click="showBoth = true">
                  Enable both scrolling & backdrop
                </b-button>

                <!-- Offcanvas with body scrolling -->
                <b-offcanvas
                    title="Colored with scrolling"
                    :show="showScrolling"
                    placement="start"
                    :scrollable="true"
                    :backdrop="false"
                    @hide="showScrolling = false"
                >
                  <template #header>
                    <h5>Colored with scrolling</h5>
                    <b-button
                        variant="link"
                        class="btn-close text-reset"
                        @click="showScrolling = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                  </div>
                </b-offcanvas>

                <!-- Offcanvas with backdrop -->
                <b-offcanvas
                    title="Offcanvas with backdrop"
                    :show="showBackdrop"
                    placement="start"
                    @hide="showBackdrop = false"
                >
                  <template #header>
                    <h5>Offcanvas with backdrop</h5>
                    <b-button
                        variant="primary"
                        class="btn-close text-reset"
                        @click="showBackdrop = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div class="offcanvas-body">
                    <p>...</p>
                  </div>
                </b-offcanvas>

                <!-- Offcanvas with both scrolling & backdrop -->
                <b-offcanvas
                    title="Backdroped with scrolling"
                    :show="showBoth"
                    placement="start"
                    :scrollable="true"
                    :backdrop="true"
                    @hide="showBoth = false"
                >
                  <template #header>
                    <h5>Backdroped with scrolling</h5>
                    <b-button
                        variant="primary"
                        class="btn-close text-reset"
                        @click="showBoth = false"
                        aria-label="Close"
                    ></b-button>
                  </template>
                  <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                  </div>
                </b-offcanvas>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body >
              <template #header>
                <h5>Body Scrolling</h5>
                <p>Scrolling the element is disabled when an offcanvas and its backdrop are visible.</p>
              </template>

              <b-card-body>
                <!-- Trigger Button -->
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showScrolling = true"
                >
                  Enable body scrolling
                </b-button>

                <!-- Offcanvas with body scrolling -->
                <b-offcanvas
                    id="offcanvasScrolling"
                    title="Offcanvas with body scrolling"
                    :show="showScrolling"
                    placement="start"
                    :scrollable="true"
                    :backdrop="false"
                    @hide="showScrolling = false"
                >
                  <template #header>
                    <h5>Offcanvas with body scrolling</h5>
                    <b-button
                        variant="link"
                        class="btn-close"
                        @click="showScrolling = false"
                        aria-label="Close"
                    ></b-button>
                  </template>

                  <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                  </div>
                </b-offcanvas>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body>
              <template #header>
                <h5>Static Backdrop</h5>
                <p>
                  When backdrop is set to static, the offcanvas will not close when clicking outside of it.
                </p>
              </template>

              <b-card-body>
                <!-- Trigger Button -->
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showStatic = true"
                >
                  Toggle static offcanvas
                </b-button>

                <!-- Offcanvas with static backdrop -->
                <b-offcanvas
                    title="Offcanvas"
                    :show="showStatic"
                    placement="start"
                    :backdrop="'static'"
                    @hide="showStatic = false"
                >
                  <template #header>
                    <h5>Offcanvas</h5>
                    <b-button
                        variant="link"
                        class="btn-close fs-5"
                        @click="showStatic = false"
                        aria-label="Close"
                    ></b-button>
                  </template>

                  <div class="offcanvas-body">
                    <div>I will not close if you click outside of me.</div>
                  </div>
                </b-offcanvas>
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body>
              <template #header>
                <h5>Body Scrolling And Backdrop</h5>
                <p>
                  Scrolling the element is disabled when an offcanvas and its backdrop are visible.
                  Use the <span class="text-danger">scrollable</span> prop to toggle scrolling
                  and <span class="text-danger">backdrop</span> prop to toggle the backdrop.
                </p>
              </template>

              <b-card-body>
                <!-- Trigger Button -->
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="showBoth = true"
                >
                  Enable both scrolling & backdrop
                </b-button>

                <!-- Offcanvas with both scrolling & backdrop -->
                <b-offcanvas
                    id="offcanvasWithBothOptions"
                    title="Backdrop with scrolling"
                    :show="showBoth"
                    placement="start"
                    :scrollable="true"
                    :backdrop="true"
                    @hide="showBoth = false"
                >
                  <template #header>
                    <h5>Backdrop with scrolling</h5>
                    <b-button
                        variant="link"
                        class="btn-close text-reset"
                        @click="showBoth = false"
                        aria-label="Close"
                    ></b-button>
                  </template>

                  <div class="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                  </div>
                </b-offcanvas>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

      </b-container>
    </main>
  </AppLayout>
</template>