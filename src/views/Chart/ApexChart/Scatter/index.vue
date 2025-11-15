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
  scatterChartData,
  scatterImageFillChartData
} from '@/data/charts/apexcharts/ScatterChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";



const scatterChart = ref({});
const scatterImageFillChart = ref({});

onMounted(() => {

  scatterChart.value = scatterChartData;
  scatterImageFillChart.value = scatterImageFillChartData;
});


// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Scatter",
  items: [
    { label: "Charts", icon: PhChartPieSlice },
    { label: "Apexcharts"},
    { label: "Scatter" , active: true }
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
          <b-card>
            <b-card-header>
              <h5>Scatter (XY) Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="scatterChart.series"
                  :options="scatterChart.options"
                  type="scatter"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12">
          <b-card>
            <b-card-header>
              <h5>Scatter – Image fill</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="scatterImageFillChart.series"
                  :options="scatterImageFillChart.options"
                  type="scatter"
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

