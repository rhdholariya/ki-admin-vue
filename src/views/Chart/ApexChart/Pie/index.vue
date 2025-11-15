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
  simplePieChartData,
  simpleDonutChartData,
  gradientDonutChartData,
  patternedDonutChartData,
  imageFillPieChartData
} from '@/data/charts/apexcharts/PieChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";


const simplePieChart = ref({});
const simpleDonutChart = ref({});
const gradientDonutChart = ref({});
const patternedDonutChart = ref({});
const imageFillPieChart = ref({});

onMounted(() => {
  simplePieChart.value = simplePieChartData;
  simpleDonutChart.value = simpleDonutChartData;
  gradientDonutChart.value = gradientDonutChartData;
  patternedDonutChart.value = patternedDonutChartData;
  imageFillPieChart.value = imageFillPieChartData;
});


// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Pie",
  items: [
    { label: "Chart", icon: PhChartPieSlice },
    { label: "Apexcharts"},
    { label: " Pie" , active: true }
  ],
}));
</script>


<template>
  <AppLayout>
    <main>
    <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
        <b-col lg="6" xl="4">
          <b-card no-body>
            <b-card-header>
              <h5>Simple Pie Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="simplePieChart.series"
                  type="pie"
                  height="340"
                  :options="simplePieChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card no-body>
            <b-card-header>
              <h5>Simple Donut Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="simpleDonutChart.series"
                  type="donut"
                  height="340"
                  :options="simpleDonutChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card no-body>
            <b-card-header>
              <h5>Gradient Donut Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="gradientDonutChart.series"
                  type="donut"
                  height="340"
                  :options="gradientDonutChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card no-body>
            <b-card-header>
              <h5>Patterned Donut Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="patternedDonutChart.series"
                  type="donut"
                  height="380"
                  :options="patternedDonutChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6" xl="4">
          <b-card class="equal-card">
            <b-card-header>
              <h5>Pie Chart with Image fill</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="imageFillPieChart.series"
                  type="pie"
                  height="380"
                  :options="imageFillPieChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    </main>
  </AppLayout>

</template>

