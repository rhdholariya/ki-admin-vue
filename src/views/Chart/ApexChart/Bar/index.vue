<template>
  <AppLayout>
    <main>
      <b-container fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
          <b-row>
          <b-col lg="6">
            <b-card no-body>
              <b-card-header>
                <h5>Basic Bar Chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    type="bar"
                    height="350"
                    :series="basicChart.series"
                    :options="basicChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6">
            <b-card class="equal-card" no-body>
              <b-card-header>
                <h5>Patterned Bar Chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    :series="patternedChart.series"
                    type="bar"
                    height="350"
                    :options="patternedChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6">
            <b-card no-body>
              <b-card-header>
                <h5>Stacked Bar Chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    :series="stackedChart.series"
                    type="bar"
                    height="350"
                    :options="stackedChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col lg="6">
            <b-card no-body>
              <b-card-header>
                <h5>Grouped Stacked Bars</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    :series="groupedChart.series"
                    type="bar"
                    height="350"
                    :options="groupedChart.options"
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
  basicBarChartData,
  patternedBarChartData,
  stackedBarChartData,
  groupedStackedBarsData
} from '@/data/charts/apexcharts/Barchart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhStack} from "@phosphor-icons/vue";


const apexchart = VueApexCharts;


const basicChart = ref({});
const patternedChart = ref({});
const stackedChart = ref({});
const groupedChart = ref({});

onMounted(() => {

  basicChart.value = basicBarChartData;
  patternedChart.value = patternedBarChartData;
  stackedChart.value = stackedBarChartData;
  groupedChart.value = groupedStackedBarsData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Bar",
  items: [
    {label: "Charts", icon: PhStack},
    {label: "Apexcharts"},
    {label: " Bar", active: true}
  ],
}));
</script>