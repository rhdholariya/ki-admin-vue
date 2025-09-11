<script setup>
import Breadcrumb from "@components/breadcrumb/Breadcrumb.vue";
import { PhBriefcase, PhCode } from "@phosphor-icons/vue";
import CodeHighlight from "@components/prism/CodeHighlight.vue";
import { ref, nextTick } from "vue";
import { html as beautifyHtml } from "js-beautify";

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
