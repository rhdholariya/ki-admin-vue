<script setup>
import {ref, onMounted, computed} from 'vue';
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody
} from 'bootstrap-vue-next';
import VueApexCharts from "vue3-apexcharts";

import {
  basicRadialBarChartData,
  multipleRadialBarsChartData,
  circleAngleRadialChartData,
  strokedCircularGaugeChartData,
  semiCircularGaugeChartData,
  circleChartWithImageData,
  customSizedRadialBars
} from '@/data/charts/apexcharts/RadialBarChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";


const basicRadialBarChart = ref({});
const multipleRadialBarsChart = ref({});
const circleAngleRadialChart = ref({});
const strokedCircularGaugeChart = ref({});
const semiCircularGaugeChart = ref({});
const circleChartWithImage = ref({});


const customRadialBars = customSizedRadialBars;

onMounted(() => {
  basicRadialBarChart.value = basicRadialBarChartData;
  multipleRadialBarsChart.value = multipleRadialBarsChartData;
  circleAngleRadialChart.value = circleAngleRadialChartData;
  strokedCircularGaugeChart.value = strokedCircularGaugeChartData;
  semiCircularGaugeChart.value = semiCircularGaugeChartData;
  circleChartWithImage.value = circleChartWithImageData;
});
// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Radial Bar",
  items: [
    {label: "Charts", icon: PhChartPieSlice},
    {label: "Apexcharts"},
    {label: "Radial Bar", active: true}
  ],
}));
</script>



<template>
  <AppLayout>
    <main>
      <b-container fluid>
          <Breadcrumb :breadcrumb="breadcrumbItems"/>
          <b-row>
          <b-col lg="6" xxl="4">
            <b-card no-body>
              <b-card-header>
                <h5>Basic RadialBar Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="basicRadialBarChart.series"
                    type="radialBar"
                    height="350"
                    :options="basicRadialBarChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6" xxl="4">
            <b-card no-body>
              <b-card-header>
                <h5>Multiple RadialBars</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="multipleRadialBarsChart.series"
                    type="radialBar"
                    height="350"
                    :options="multipleRadialBarsChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6" xxl="4">
            <b-card no-body>
              <b-card-header>
                <h5>Circle Chart – Custom Angle</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="circleAngleRadialChart.series"
                    type="radialBar"
                    height="350"
                    :options="circleAngleRadialChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6" xxl="4">
            <b-card class="equal-card" no-body>
              <b-card-header>
                <h5>Stroked Circular Gauge</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="strokedCircularGaugeChart.series"
                    type="radialBar"
                    height="350"
                    :options="strokedCircularGaugeChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6" xxl="4">
            <b-card class="equal-card" no-body>
              <b-card-header>
                <h5>Semi Circular Gauge</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="semiCircularGaugeChart.series"
                    type="radialBar"
                    height="410"
                    :options="semiCircularGaugeChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>

          <b-col lg="6" xxl="4">
            <b-card class="equal-card" no-body>
              <b-card-header>
                <h5>Circle Chart with Image</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="circleChartWithImage.series"
                    type="radialBar"
                    height="350"
                    :options="circleChartWithImage.options"
                />
              </b-card-body>
            </b-card>
          </b-col>

          <b-col xs="12">
            <b-card no-body>
              <b-card-header>
                <h5>Custom size and custom thickness</h5>
                <p>You can use customize size by adding</p>
              </b-card-header>
              <b-card-body>
                <div class="d-flex flex-wrap custom-radial justify-content-center">
                  <div
                      v-for="(item, idx) in customRadialBars"
                      :key="item.label + idx"
                      class="d-flex align-items-center flex-column"
                  >
                    <div class="mt-auto">
                      <VueApexCharts
                          :series="item.series"
                          type="radialBar"
                          :height="item.height"
                          :width="item.width"
                          :options="item.options"
                      />
                    </div>
                    <div class="mt-auto">
                      <p :class="`f-s-18 f-w-600 ${item.textClass}`">
                        {{ item.label }}
                      </p>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>



