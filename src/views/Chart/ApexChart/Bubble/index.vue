<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-header>
                <h5>Simple Bubble Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="simpleBubbleChart.series"
                    :options="simpleBubbleChart.options"
                    type="bubble"
                    height="350"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col cols="12">
            <b-card no-body>
              <b-card-header>
                <h5>3D Bubble Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="threeDBubbleChart.series"
                    :options="threeDBubbleChart.options"
                    type="bubble"
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


// Import chart configurations
import {
  simpleBubbleChartData,
  threeDBubbleChartData
} from '@/data/charts/apexcharts/BubbleChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";



// Create reactive references for chart configs
const simpleBubbleChart = ref({});
const threeDBubbleChart = ref({});

onMounted(() => {
  // Assign imported configurations to reactive references
  simpleBubbleChart.value = simpleBubbleChartData;
  threeDBubbleChart.value = threeDBubbleChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Bubble",
  items: [
    {label: "Charts", icon: PhStack},
    {label: "Apexcharts"},
    {label: "Bubble", active: true}
  ],
}));
</script>