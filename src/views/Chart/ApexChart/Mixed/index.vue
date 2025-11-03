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



import {
  lineColumnComboChartData,
  multipleYAxisChartData,
  lineAreaChartData,
  lineColumnAreaChartData
} from '@/data/charts/apexcharts/MixedChart.js';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";


import VueApexCharts from "vue3-apexcharts";

const lineColumnComboChart = ref({});
const multipleYAxisChart = ref({});
const lineAreaChart = ref({});
const lineColumnAreaChart = ref({});

onMounted(() => {
  lineColumnComboChart.value = lineColumnComboChartData;
  multipleYAxisChart.value = multipleYAxisChartData;
  lineAreaChart.value = lineAreaChartData;
  lineColumnAreaChart.value = lineColumnAreaChartData;
});

const breadcrumbItems = computed(() => ({
  title: "Mixed",
  items: [
    {label: "Charts", icon: PhChartPieSlice},
    {label: "Apexcharts"},
    {label: "Mixed", active: true}
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
              <h5>Line & Column Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="lineColumnComboChart.series"
                  :options="lineColumnComboChart.options"
                  type="line"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Multiple Y-Axis Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="multipleYAxisChart.series"
                  :options="multipleYAxisChart.options"
                  type="line"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Line & Area Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  :series="lineAreaChart.series"
                  :options="lineAreaChart.options"
                  type="line"
                  height="350"
              />
            </b-card-body>
          </b-card>
        </b-col>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Line, Column & Area Chart</h5>
            </b-card-header>
            <b-card-body>
              <VueApexCharts
                  type="line"
                  height="350"
                  :series="lineColumnAreaChart.series"
                  :options="lineColumnAreaChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</AppLayout>
</template>

