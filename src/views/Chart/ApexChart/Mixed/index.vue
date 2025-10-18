<template>
<AppLayout>
  <main>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
    <b-container fluid>
      <b-row>
        <b-col lg="6">
          <b-card no-body>
            <b-card-header>
              <h5>Line & Column Chart</h5>
            </b-card-header>
            <b-card-body>
              <apexchart
                  :series="lineColumnComboChart.series"
                  type="line"
                  height="350"
                  :options="lineColumnComboChart.options"
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
              <apexchart
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
              <apexchart
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
              <apexchart
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
  lineColumnComboChartData,
  multipleYAxisChartData,
  lineAreaChartData,
  lineColumnAreaChartData
} from '@/data/charts/apexcharts/MixedChart.js';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

// Register apexcharts component
const apexchart = VueApexCharts;

// Create reactive references for chart configs
const lineColumnComboChart = ref({});
const multipleYAxisChart = ref({});
const lineAreaChart = ref({});
const lineColumnAreaChart = ref({});

onMounted(() => {
  // Assign imported configurations to reactive references
  lineColumnComboChart.value = lineColumnComboChartData;
  multipleYAxisChart.value = multipleYAxisChartData;
  lineAreaChart.value = lineAreaChartData;
  lineColumnAreaChart.value = lineColumnAreaChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Mixed",
  items: [
    {label: "Charts", icon: PhStack},
    {label: "Apexcharts"},
    {label: "Mixed", active: true}
  ],
}));
</script>