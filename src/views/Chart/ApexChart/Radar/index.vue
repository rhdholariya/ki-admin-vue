<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-container fluid>
      <b-row>
        <b-col sm="12" md="6" xl="6">
          <b-card>
            <b-card-header>
              <h5>Basic Radar Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="basicRadarChart.series"
                  type="radar"
                  height="350"
                  :options="basicRadarChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" xl="6">
          <b-card>
            <b-card-header>
              <h5>Radar Chart – Multiple Series</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="multiSeriesRadarChart.series"
                  type="radar"
                  height="350"
                  :options="multiSeriesRadarChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" xl="6">
          <b-card>
            <b-card-header>
              <h5>Radar Chart – Polygon Fill</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="polygonRadarChart.series"
                  type="radar"
                  height="350"
                  :options="polygonRadarChart.options"
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
  basicRadarChartData,
  multiSeriesRadarChartData,
  polygonRadarChartData
} from '@/data/charts/apexcharts/RadarChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";


const apexchart = VueApexCharts;

const basicRadarChart = ref({});
const multiSeriesRadarChart = ref({});
const polygonRadarChart = ref({});

onMounted(() => {
  basicRadarChart.value = basicRadarChartData;
  multiSeriesRadarChart.value = multiSeriesRadarChartData;
  polygonRadarChart.value = polygonRadarChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Radar",
  items: [
    { label: "Chart", icon: PhStack },
    { label: "Apexcharts"},
    { label: "Radar" , active: true }
  ],
}));
</script>