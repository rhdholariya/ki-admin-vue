<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-container fluid>
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


// Import chart configuration
import {basicCandlestickChartData} from '@/data/charts/apexcharts/CandleStick.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";

// Register apexcharts component
const apexchart = VueApexCharts;

// Create reactive reference for chart config
const candlestickChart = ref({});

onMounted(() => {
  // Assign imported configuration to reactive reference
  candlestickChart.value = basicCandlestickChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Candlestick",
  items: [
    {label: "Charts", icon: PhStack},
    {label: "Apexcharts"},
    {label: " Candlestick", active: true}
  ],
}));
</script>