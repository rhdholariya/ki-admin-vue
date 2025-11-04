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
  basicBoxWhiskerChartData,
  boxPlotWithScatterData
} from '@/data/charts/apexcharts/BoxplotChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";

const basicBoxWhiskerChart = ref({});
const boxPlotWithScatterChart = ref({});

onMounted(() => {
  basicBoxWhiskerChart.value = basicBoxWhiskerChartData;
  boxPlotWithScatterChart.value = boxPlotWithScatterData;
});


// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Boxplot",
  items: [
    {label: "Charts", icon: PhChartPieSlice},
    {label: "Apexcharts"},
    {label: " Boxplot", active: true}
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-header>
                <h5>Basic Box & Whisker Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="basicBoxWhiskerChart.series"
                    :options="basicBoxWhiskerChart.options"
                    type="boxPlot"
                    height="350"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card no-body>
              <b-card-header>
                <h5>BoxPlot with Scatter Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="boxPlotWithScatterChart.series"
                    :options="boxPlotWithScatterChart.options"
                    type="boxPlot"
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

