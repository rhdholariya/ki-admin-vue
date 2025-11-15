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
  basicTreemapData,
  multiDimensionalTreemapData,
  distributedTreemapChartData,
  colorRangeTreemapChartData
} from '@/data/charts/apexcharts/TreeMapChart.js';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhChartPieSlice} from "@phosphor-icons/vue";


const basicTreemap = ref({});
const multiDimensionalTreemap = ref({});
const distributedTreemap = ref({});
const colorRangeTreemap = ref({});

onMounted(() => {
  basicTreemap.value = basicTreemapData;
  multiDimensionalTreemap.value = multiDimensionalTreemapData;
  distributedTreemap.value = distributedTreemapChartData;
  colorRangeTreemap.value = colorRangeTreemapChartData;
});

// Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Treemap",
  items: [
    {label: "Chart", icon: PhChartPieSlice},
    {label: "Apexcharts"},
    {label: " Treemap", active: true}
  ],
}));
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
          <Breadcrumb :breadcrumb="breadcrumbItems"/>
          <b-row>
          <b-col sm="12">
            <b-card no-body>
              <b-card-header>
                <h5>Basic Treemap Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="basicTreemap.series"
                    :options="basicTreemap.options"
                    type="treemap"
                    height="350"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12">
            <b-card no-body>
              <b-card-header>
                <h5>Multi-Dimensional Treemap Chart</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="multiDimensionalTreemap.series"
                    type="treemap"
                    height="350"
                    :options="multiDimensionalTreemap.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12">
            <b-card no-body>
              <b-card-header>
                <h5>Distributed Treemap Chart (set color for each cell)</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="distributedTreemap.series"
                    type="treemap"
                    height="350"
                    :options="distributedTreemap.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
          <b-col sm="12">
            <b-card no-body>
              <b-card-header>
                <h5>Treemap Chart with Color ranges</h5>
              </b-card-header>
              <b-card-body>
                <VueApexCharts
                    :series="colorRangeTreemap.series"
                    type="treemap"
                    height="350"
                    :options="colorRangeTreemap.options"
                />
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>

