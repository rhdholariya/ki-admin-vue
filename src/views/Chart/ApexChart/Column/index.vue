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
  basicColumnChartConfig,
  dumbbellChartConfig,
  columnChartWithFruitsConfig,
  columnChartWithMarkersConfig
} from '@/data/charts/apexcharts/ColumnCharts.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";

const basicChart = ref({});
const dumbbellChart = ref({});
const fruitsChart = ref({});
const markersChart = ref({});

onMounted(() => {

  basicChart.value = basicColumnChartConfig;
  dumbbellChart.value = dumbbellChartConfig;
  fruitsChart.value = columnChartWithFruitsConfig;
  markersChart.value = columnChartWithMarkersConfig;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Column",
  items: [
    { label: "Chart", icon: PhChartPieSlice },
    { label: "Apexcharts"},
    { label: " Column" , active: true }
  ],
}));
</script>


<template>
  <AppLayout>
    <main>
    <b-container fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Basic Column Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="basicChart.series"
                  :options="basicChart.options"
                  type="bar"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Dumbbell Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  type="bar"
                  height="350"
                  :series="dumbbellChart.series"
                  :options="dumbbellChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Column Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  type="bar"
                  height="350"
                  :series="fruitsChart.series"
                  :options="fruitsChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Column with Markers</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  type="bar"
                  height="350"
                  :series="markersChart.series"
                  :options="markersChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    </main>
  </AppLayout>
</template>

