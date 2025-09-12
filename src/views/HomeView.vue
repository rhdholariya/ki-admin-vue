<script setup>
import Breadcrumb from "@components/breadcrumb/Breadcrumb.vue";
import { PhBriefcase, PhCode } from "@phosphor-icons/vue";
import CodeHighlight from "@components/prism/CodeHighlight.vue";
import { ref, nextTick } from "vue";
import { html as beautifyHtml } from "js-beautify";
import {BAlert, BBadge, BButton, BCard, BCarousel, BCarouselSlide, BCollapse} from "bootstrap-vue-next";

//  Basic alerts data
const alerts = [
  { variant: "primary", text: "Simple primary alert - check it out!" },
  { variant: "secondary", text: "Simple secondary alert - check it out!" },
  { variant: "success", text: "Simple success alert - check it out!" },
  { variant: "danger", text: "Simple danger alert - check it out!" },
  { variant: "warning", text: "Simple warning alert - check it out!" },
  { variant: "info", text: "Simple info alert - check it out!" },
  { variant: "light", text: "Simple light alert - check it out!" },
  { variant: "dark", text: "Simple dark alert - check it out!" },
];

// Outline alerts data
const outlineAlerts = [
  { variant: "primary", text: "Outline-alert primary - check it out!" },
  { variant: "secondary", text: "Outline-alert secondary - check it out!" },
  { variant: "success", text: "Outline-alert success - check it out!" },
  { variant: "danger", text: "Outline-alert danger - check it out!" },
  { variant: "warning", text: "Outline-alert warning - check it out!" },
  { variant: "info", text: "Outline-alert info - check it out!" },
  { variant: "light", text: "Outline-alert light - check it out!" },
  { variant: "dark", text: "Outline-alert dark - check it out!" },
];

//  Breadcrumb
const breadcrumbItems = {
  title: "Alert",
  items: [
    { label: "Ui-kits", icon: PhBriefcase },
    { label: "Alert", active: true },
  ],
};

//  Refs
const alertBlock = ref(null);
const outlineBlock = ref(null);
const capturedCode = ref("");
const capturedOutlineCode = ref("");
const slide  = ref(0);
const sliding  = ref(false);
// Collapse state
const showCollapse = ref(false);
const showInnerCollapse = ref(false);

const onSlideStart = (slide)=> {
  sliding.value = true
}

const onSlideEnd = (slide) => {
  sliding.value = false
}

// Capture basic HTML
const captureHtml = async () => {
  await nextTick();
  if (alertBlock.value) {
    capturedCode.value = beautifyHtml(alertBlock.value.innerHTML.trim(), {
      indent_size: 2,
    });
  }
};

//  Capture outline HTML
const captureOutlineHtml = async () => {
  await nextTick();
  if (outlineBlock.value) {
    capturedOutlineCode.value = beautifyHtml(outlineBlock.value.innerHTML.trim(), {
      indent_size: 2,
    });
  }
};
</script>

<template>
  <main>
    <div class="container-fluid">
      <!-- Breadcrumb start -->
      <Breadcrumb :breadcrumb="breadcrumbItems" />
      <!-- Breadcrumb end -->

      <!-- Alert start -->
      <div class="row">
        <!-- Basic Alert -->
        <div class="col-lg-6">
          <div class="card">
            <div
                class="card-header code-header d-flex justify-content-between align-items-center"
            >
              <h5 class="mb-0">Basic Alert</h5>
              <a
                  data-bs-toggle="collapse"
                  href="#basicCode"
                  aria-expanded="false"
                  aria-controls="basicCode"
                  @click="captureHtml"
              >
                <PhCode size="30" weight="bold" class="source" />
              </a>
            </div>

            <div class="card-body" ref="alertBlock">
              <!-- Loop for alerts -->
              <div
                  v-for="(alert, index) in alerts"
                  :key="index"
                  class="alert"
                  :class="`alert-${alert.variant}`"
                  role="alert"
              >
                {{ alert.text }}
              </div>
            </div>


            <div class="accordion">
              <div
                  id="basicCode"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <CodeHighlight
                      v-if="capturedCode"
                      :code="capturedCode"
                      language="html"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <b-alert show variant="primary">Primary Alert</b-alert>
        <h2>Example heading <b-badge>New</b-badge></h2>
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
            <!-- Text slides with image -->
            <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                >
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>

          <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
          </p>
        </div>

        <!-- Outline Alert -->
        <div class="col-lg-6">
          <div class="card">
            <div
                class="card-header code-header d-flex justify-content-between align-items-center"
            >
              <h5 class="mb-0">Outline Alert</h5>
              <a
                  data-bs-toggle="collapse"
                  href="#outlineCode"
                  aria-expanded="false"
                  aria-controls="outlineCode"
                  @click="captureOutlineHtml"
              >
                <PhCode size="30" weight="bold" class="source" />
              </a>
            </div>

            <div class="card-body" ref="outlineBlock">
              <!-- Loop for outline alerts -->
              <div
                  v-for="(alert, index) in outlineAlerts"
                  :key="index"
                  class="alert"
                  :class="`alert-outline-${alert.variant}`"
                  role="alert"
              >
                {{ alert.text }}
              </div>
            </div>

            <!-- ✅ Accordion Collapse -->
            <div class="accordion">
              <div
                  id="outlineCode"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <CodeHighlight
                      v-if="capturedOutlineCode"
                      :code="capturedOutlineCode"
                      language="html"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Alert end -->
    </div>
  </main>
</template>
