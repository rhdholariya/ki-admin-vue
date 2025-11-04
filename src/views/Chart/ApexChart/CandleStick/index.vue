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

import {basicCandlestickChartData} from '@/data/charts/apexcharts/CandleStick.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";


const candlestickChart = ref({});

onMounted(() => {
  candlestickChart.value = basicCandlestickChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Candlestick",
  items: [
    {label: "Charts", icon: PhChartPieSlice},
    {label: "Apexcharts"},
    {label: " Candlestick", active: true}
  ],
}));
</script>


<template>
  <AppLayout>
    <main>
      <b-container fluid>
          <Breadcrumb :breadcrumb="breadcrumbItems"/>
          <b-row>
          <b-col xs="12">
            <b-card no-body>
              <b-card-header>
                <h5>Basic Candlestick Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="candlestickChart.series"
                    :options="candlestickChart.options"
                    type="candlestick"
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

