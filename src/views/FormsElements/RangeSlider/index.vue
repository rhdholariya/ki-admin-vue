<script setup>
import { ref } from "vue";
import NoUiSlider from "nouislider-vue3";
import "nouislider/dist/nouislider.css";

import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BButton
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhCardholder } from "@phosphor-icons/vue";

// Breadcrumb
const breadcrumbItems = {
  title: "Range Slider",
  items: [
    { label: "Forms elements", icon: PhCardholder },
    { label: "Range slider", active: true },
  ],
};

// Slider data
const arbitraryValuesForSlider = ["MB", "256MB", "1GB", "8GB", "16GB", "32GB", "GB"];
const valuesForSlider = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32];

const format = {
  to(value) {
    const index = Math.round(value);
    return index >= 0 && index < arbitraryValuesForSlider.length
        ? arbitraryValuesForSlider[index]
        : "";
  },
  from(value) {
    return Math.max(0, arbitraryValuesForSlider.indexOf(String(value)));
  },
};

const formatValue = {
  to(value) {
    const index = Math.round(value);
    return index >= 0 && index < valuesForSlider.length
        ? valuesForSlider[index]
        : 0;
  },
  from(value) {
    const numValue = Number(value);
    return Math.max(0, valuesForSlider.indexOf(numValue));
  },
};

// Reactive state
const slider1 = ref(20);
const slider2 = ref(20);
const selectValue = ref(10);
const numberValue = ref(30);
const rgbValues = ref([127, 127, 127]);
const isLocked = ref(false);
const dynamicSlider = ref(null);

function updateSliderFromInputs() {
  if (dynamicSlider.value && dynamicSlider.value.$el) {
    const slider = dynamicSlider.value.$el.noUiSlider;
    if (slider) {
      slider.set([selectValue.value, numberValue.value]);
    }
  }
}

function handleUpdate(data) {
  const val1 = parseFloat(data.values[0]);
  const val2 = parseFloat(data.values[1]);
  if (!isNaN(val1)) selectValue.value = Math.round(val1);
  if (!isNaN(val2)) numberValue.value = Math.round(val2);
}

function toggleLock() {
  isLocked.value = !isLocked.value;
  if (isLocked.value) slider2.value = slider1.value;
}

function updateSlider1(values, handle) {
  const val = parseFloat(values[handle]);
  if (!isNaN(val)) {
    slider1.value = val;
    if (isLocked.value) slider2.value = val;
  }
}

function updateSlider2(values, handle) {
  const val = parseFloat(values[handle]);
  if (!isNaN(val)) {
    slider2.value = val;
    if (isLocked.value) slider1.value = val;
  }
}

function updateRgbRed(data) {
  const val = parseFloat(data.values[0]);
  if (!isNaN(val)) rgbValues.value = [Math.round(val), rgbValues.value[1], rgbValues.value[2]];
}

function updateRgbGreen(data) {
  const val = parseFloat(data.values[0]);
  if (!isNaN(val)) rgbValues.value = [rgbValues.value[0], Math.round(val), rgbValues.value[2]];
}

function updateRgbBlue(data) {
  const val = parseFloat(data.values[0]);
  if (!isNaN(val)) rgbValues.value = [rgbValues.value[0], rgbValues.value[1], Math.round(val)];
}
</script>

<template>
  <app-layout>
    <main class="ki-bab">
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems" />

        <b-row>
          <!-- Bootstrap Range Sliders -->
          <b-col md="12" xl="6">
            <b-card>
              <b-card-header><h5>Bootstrap Range Sliders</h5></b-card-header>
              <b-card-body>
                <b-row>
                  <b-col md="12">
                    <label for="customRange1" class="form-label">Basic range Slider</label>
                    <input type="range" class="form-range" id="customRange1" />
                  </b-col>
                  <b-col md="12">
                    <label for="disabledRange" class="form-label">Disabled range Slider</label>
                    <input type="range" class="form-range" id="disabledRange" disabled />
                  </b-col>
                  <b-col md="12">
                    <label for="customRange2" class="form-label">Min and max range Slider</label>
                    <input type="range" class="form-range" min="0" max="2" step="0.1" id="customRange2" />
                  </b-col>
                  <b-col md="12">
                    <label for="customRange3" class="form-label">Steps range Slider</label>
                    <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3" />
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Colour Variant Sliders -->
          <b-col md="12" xl="6">
            <b-card>
              <b-card-header><h5>Colour Variant</h5></b-card-header>
              <b-card-body>
                <b-row>
                  <b-col
                      md="6"
                      v-for="(variant, i) in ['primary','secondary','success','danger','warning','info','light','dark']"
                      :key="i"
                  >
                    <div class="mb-3">
                      <label class="form-label text-capitalize">{{ variant }} range slider</label>
                      <no-ui-slider
                          :range="{ min: 0, max: 100 }"
                          :start="[40]"
                          :connect="[true, false]"
                          orientation="horizontal"
                          direction="ltr"
                          :class="['slider-round', `slider-${variant}`]"
                      />
                    </div>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Value Slider -->
          <b-col cols="12">
            <b-card>
              <b-card-header><h5>Value Slider</h5></b-card-header>
              <b-card-body>
                <div class="mb-4">
                  <label class="form-label text-secondary mb-3">Locking sliders together</label>
                  <no-ui-slider
                      :range="{ min: 0, max: 100 }"
                      :start="[slider1]"
                      :connect="[true, false]"
                      @update="updateSlider1"
                      class="slider-round"
                  />
                  <div>value: {{ slider1 }}</div>
                </div>

                <div class="mb-4">
                  <no-ui-slider
                      :range="{ min: 0, max: 100 }"
                      :start="[slider2]"
                      :connect="[true, false]"
                      @update="updateSlider2"
                      class="slider-round"
                  />
                  <div>value: {{ slider2 }}</div>
                  <b-button variant="primary" class="float-end" @click="toggleLock">
                    {{ isLocked ? 'Unlock' : 'Lock' }}
                  </b-button>
                </div>

                <!-- Multi-range Slider -->
                <div class="mb-4">
                  <label class="form-label text-secondary mb-3">Multi range slider</label>
                  <no-ui-slider
                      :range="{ min: 0, max: arbitraryValuesForSlider.length - 1 }"
                      :start="[2, 4]"
                      :connect="[false, true, false]"
                      :step="1"
                      :format="format"
                      :pips="{ mode: 'steps', density: 50, format }"
                      class="slider-round"
                  />
                </div>

                <!-- Soft Limits -->
                <div class="mb-5">
                  <label class="form-label text-secondary mb-3">Soft limits</label>
                  <no-ui-slider
                      :range="{ min: 0, max: 100 }"
                      :start="[50]"
                      :connect="[true, false]"
                      :step="1"
                      :pips="{ mode: 'values', values: [40, 80], density: 2 }"
                      class="colored-slider slider-round"
                  />
                </div>

                <!-- Tooltip Sliders -->
                <div class="mb-5">
                  <label class="form-label text-secondary mb-3">Tooltip Slider (values)</label>
                  <no-ui-slider
                      :range="{ min: 0, max: valuesForSlider.length - 1 }"
                      :start="[5]"
                      :connect="[true, false]"
                      :step="2"
                      tooltips
                      :format="formatValue"
                      :pips="{ mode: 'steps', format: formatValue }"
                      class="slider-round primary-slider-round"
                  />
                </div>

                <div class="mb-5">
                  <label class="form-label text-secondary mb-3">Tooltip Slider</label>
                  <no-ui-slider
                      :range="{ min: 0, max: 100 }"
                      :start="[20]"
                      :connect="[true, false]"
                      tooltips
                      class="slider-round hide-tooltips primary-slider-round"
                  />
                </div>

                <!-- Dynamic Slider -->
                <div class="mb-4">
                  <label class="form-label">Dynamic Slider</label>
                  <no-ui-slider
                      ref="dynamicSlider"
                      :start="[selectValue, numberValue]"
                      :connect="true"
                      :range="{ min: -20, max: 40 }"
                      @slide="handleUpdate"
                      class="slider-round"
                  />
                  <div class="d-flex gap-2 mt-3">
                    <select class="form-select" v-model.number="selectValue" @change="updateSliderFromInputs">
                      <option v-for="num in 61" :key="num" :value="num - 20">{{ num - 20 }}</option>
                    </select>
                    <input
                        type="number"
                        class="form-control"
                        v-model.number="numberValue"
                        @input="updateSliderFromInputs"
                        min="-20"
                        max="40"
                    />
                  </div>
                </div>

                <!-- RGB Vertical Sliders -->
                <b-row>
                  <b-col md="4">
                    <b-card>
                      <b-card-header><h5>Color Picker Slider</h5></b-card-header>
                      <b-card-body>
                        <div class="d-flex align-items-end colorpicker-slider">
                          <no-ui-slider
                              :range="{ min: 0, max: 255 }"
                              :start="[127]"
                              :connect="[true, false]"
                              orientation="vertical"
                              :step="1"
                              class="vertical verticalsliders red me-2"
                              @slide="updateRgbRed"
                              @set="updateRgbRed"
                          />
                          <no-ui-slider
                              :range="{ min: 0, max: 255 }"
                              :start="[127]"
                              :connect="[true, false]"
                              orientation="vertical"
                              :step="1"
                              class="vertical verticalsliders green me-2"
                              @slide="updateRgbGreen"
                              @set="updateRgbGreen"
                          />
                          <no-ui-slider
                              :range="{ min: 0, max: 255 }"
                              :start="[127]"
                              :connect="[true, false]"
                              orientation="vertical"
                              :step="1"
                              class="vertical verticalsliders blue"
                              @slide="updateRgbBlue"
                              @set="updateRgbBlue"
                          />
                          <div
                              class="result ms-3"
                              :style="{ backgroundColor: `rgb(${rgbValues.join(',')})`, width: '40px', height: '40px', borderRadius: '4px' }"
                          />
                        </div>
                        <div class="mt-2 text-center">
                          RGB: {{ rgbValues.join(', ') }}
                        </div>
                      </b-card-body>
                    </b-card>
                  </b-col>

                  <!-- Vertical Slider -->
                  <b-col md="4">
                    <b-card>
                      <b-card-header><h5>Vertical Slider</h5></b-card-header>
                      <b-card-body>
                        <no-ui-slider
                            :start="[20]"
                            :connect="[true, false]"
                            orientation="vertical"
                            :range="{ min: 0, max: 100 }"
                            class="vertical m-auto"
                        />
                      </b-card-body>
                    </b-card>
                  </b-col>

                  <!-- Toggle Slider -->
                  <b-col md="4">
                    <b-card>
                      <b-card-header><h5>Toggle Slider</h5></b-card-header>
                      <b-card-body>
                        <no-ui-slider
                            :start="[0]"
                            orientation="vertical"
                            :range="{ min: 0, max: 1 }"
                            :step="1"
                            class="vertical m-auto"
                        />
                      </b-card-body>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
