<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-container fluid>

        <b-row>
          <b-col xl="6">
            <b-card class="equal-card" no-body>
              <b-card-header>
                <h5>Basic Heatmap – Single Series</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="singleSeriesChart.series"
                    :options="singleSeriesChart.options"
                    type="heatmap"
                    height="350"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col xl="6">
            <b-card no-body>
              <b-card-header>
                <h5>Heatmap – Multiple Series</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    type="heatmap"
                    height="450"
                    :series="multipleSeriesChart.series"
                    :options="multipleSeriesChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col xl="6">
            <b-card no-body>
              <b-card-header>
                <h5>Heatmap – Color Range</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    type="heatmap"
                    height="350"
                    :series="colorRangeChart.series"
                    :options="colorRangeChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col xl="6">
            <b-card no-body>
              <b-card-header>
                <h5>Heatmap – Range without Shades</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    type="heatmap"
                    height="350"
                    :series="rangeShadesChart.series"
                    :options="rangeShadesChart.options"
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


// Import chart configurations
import {
  heatMapSingleSeriesData,
  heatMapMultipleSeriesData,
  heatMapColorRangeData,
  heatMapRangeShadesData
} from '@/data/charts/apexcharts/HeatMapChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";



// Create reactive references for chart configs
const singleSeriesChart = ref({});
const multipleSeriesChart = ref({});
const colorRangeChart = ref({});
const rangeShadesChart = ref({});

onMounted(() => {
  // Assign imported configurations to reactive references
  singleSeriesChart.value = heatMapSingleSeriesData;
  multipleSeriesChart.value = heatMapMultipleSeriesData;
  colorRangeChart.value = heatMapColorRangeData;
  rangeShadesChart.value = heatMapRangeShadesData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "HeatMap",
  items: [
    {label: "Chart", icon: PhStack},
    {label: "Apexcharts"},
    {label: " HeatMap", active: true}
  ],
}));
</script>