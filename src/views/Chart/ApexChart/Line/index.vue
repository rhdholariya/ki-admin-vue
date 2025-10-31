<template>
  <AppLayout>
    <main>
      <b-container fluid>
          <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-row>
          <b-col md="6">
            <b-card no-body>
              <b-card-header>
                <h5>Basic Line Chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    type="line"
                    height="440"
                    :series="basicChart.series"
                    :options="basicChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body>
              <b-card-header>
                <h5>Gradient line chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    type="line"
                    height="440"
                    :series="gradientChart.series"
                    :options="gradientChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body>
              <b-card-header>
                <h5>Dashed Line Chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    type="line"
                    height="440"
                    :series="dashedChart.series"
                    :options="dashedChart.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card no-body>
              <b-card-header>
                <h5>Stepline Chart</h5>
              </b-card-header>
              <b-card-body>
                <apexchart
                    type="line"
                    height="440"
                    :series="steplineChart.series"
                    :options="steplineChart.options"
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



import {
  basicLineChartConfig,
  gradientLineChartConfig,
  dashedLineChartConfig,
  steplineChartConfig
} from '@/data/charts/apexcharts/LineChart.js';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";


// Create reactive references for chart configs with different names
const basicChart = ref({});
const gradientChart = ref({});
const dashedChart = ref({});
const steplineChart = ref({});

onMounted(() => {
  // Assign imported configurations to reactive references
  basicChart.value = basicLineChartConfig;
  gradientChart.value = gradientLineChartConfig;
  dashedChart.value = dashedLineChartConfig;
  steplineChart.value = steplineChartConfig;
});
// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Line",
  items: [
    { label: "Charts", icon: PhStack },
    { label: "Apexcharts"},
    { label: " Line" , active: true }
  ],
}));
</script>