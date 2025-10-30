<template>
<AppLayout>
  <main>
    <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
        <b-col md="6">
          <b-card no-body>
            <b-card-header>
              <h5>Basic Area Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="basicChart.series"
                  :options="basicChart.options"
                  type="area"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card no-body>
            <b-card-header>
              <h5>Spline Area</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="splineChart.series"
                  :options="splineChart.options"
                  type="area"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card no-body>
            <b-card-header>
              <h5>Irregular Timeseries</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="irregularChart.series"
                  :options="irregularChart.options"
                  type="area"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card no-body>
            <b-card-header>
              <h5>Stacked Area Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="stackedChart.series"
                  :options="stackedChart.options"
                  type="area"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</AppLayout>
</template>

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
  basicAreaChart,
  splineAreaChart,
  irregularSeries,
  stackedAreaChart
} from '@/data/charts/apexcharts/AreaChart.js';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

// Register apexcharts component
const apexchart = VueApexCharts;

// Create reactive references for chart configs
const basicChart = ref({});
const splineChart = ref({});
const irregularChart = ref({});
const stackedChart = ref({});

onMounted(() => {
  // Assign imported configurations to reactive references
  basicChart.value = basicAreaChart;
  splineChart.value = splineAreaChart;
  irregularChart.value = irregularSeries;
  stackedChart.value = stackedAreaChart;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Area",
  items: [
    { label: "Charts", icon: PhStack },
    { label: "Apexcharts"},
    { label: " Area" , active: true }
  ],
}));
</script>