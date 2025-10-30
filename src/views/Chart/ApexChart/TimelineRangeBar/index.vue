
<template>
  <AppLayout>
    <main>
    <b-container fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
        <b-col cols="12">
          <b-card no-body>
            <b-card-header>
              <h5>Basic Timeline Chart</h5>
            </b-card-header>
            <b-card-body>
              <apexchart
                  :series="timelineChart.series"
                  type="rangeBar"
                  height="350"
                  :options="timelineChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card no-body>
            <b-card-header>
              <h5>Advanced Timeline (Multiple range)</h5>
            </b-card-header>
            <b-card-body>
              <apexchart
                  :series="advanceTimelineChart.series"
                  :options="advanceTimelineChart.options"
                  type="rangeBar"
                  height="450"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card no-body>
            <b-card-header>
              <h5>Timeline – Grouped Rows</h5>
            </b-card-header>
            <b-card-body>
              <apexchart
                  :series="advanceGroupedRowsChart.series"
                  :options="advanceGroupedRowsChart.options"
                  type="rangeBar"
                  height="450"
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
  timelineChartData,
  advanceTimelineChartData,
  advanceGroupedRowsChartData
} from '@/data/charts/apexcharts/TimeineRangeBar.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";

// Register apexcharts component
const apexchart = VueApexCharts;

// Create reactive references for chart configs
const timelineChart = ref({});
const advanceTimelineChart = ref({});
const advanceGroupedRowsChart = ref({});

onMounted(() => {
  // Assign imported configurations to reactive references
  timelineChart.value = timelineChartData;
  advanceTimelineChart.value = advanceTimelineChartData;
  advanceGroupedRowsChart.value = advanceGroupedRowsChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Timeline & Range Charts",
  items: [
    { label: "Charts", icon: PhStack },
    { label: "Apexcharts"},
    { label: " Timeline & Range Charts" , active: true }
  ],
}));
</script>