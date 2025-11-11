<script setup>
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Title,
  Filler,
} from 'chart.js';
import { Bar, Line, Doughnut, Pie, PolarArea, Radar } from 'vue-chartjs';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
    Tooltip,
    Legend,
    Title,
    Filler
);

import { BCard, BCardBody, BCol, BContainer, BRow, BCardHeader } from 'bootstrap-vue-next';
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhChartPieSlice } from "@phosphor-icons/vue";

import {
  barBorderRadiusData,
  DoughnutData,
  LineChartData,
  MultiSeriesPie,
  PieData,
  PolarAreaData,
  ProgressiveLineData,
  ProgressiveLineOptions,
  RadarSkipPoints,
  SteppedLineCharts,
  verticalBarChart
} from '@/data/charts/chartjs/ChartJsData.js';

import { ref } from 'vue';

const barData = ref(structuredClone(barBorderRadiusData));
const verticalBarData = ref(structuredClone(verticalBarChart));
const pieData = ref(structuredClone(PieData));
const multiSeriesPieData = ref(structuredClone(MultiSeriesPie));
const radarData = ref(structuredClone(RadarSkipPoints));
const doughnutData = ref(structuredClone(DoughnutData));
const polarData = ref(structuredClone(PolarAreaData));
const lineData = ref(structuredClone(LineChartData));
const steppedLineData = ref(structuredClone(SteppedLineCharts));
const progressiveLineData = ref(structuredClone(ProgressiveLineData));
const progressiveLineOptions = ref(structuredClone(ProgressiveLineOptions));


const breadcrumbItems = {
  title: "Chart js",
  items: [
    { label: "Chart", icon: PhChartPieSlice },
    { label: "Chart js", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
    <b-container fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems" />
      <b-row>
        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Bar Chart Border Radius</h5></b-card-header>
            <b-card-body>
              <Bar :data="barData" :options="barData.options" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Vertical Bar Chart</h5></b-card-header>
            <b-card-body>
              <Bar :data="verticalBarData" :options="verticalBarData.options" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col xl="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Multi Series Pie</h5></b-card-header>
            <b-card-body class="d-flex justify-content-center" style="height: 400px;">
              <Pie :data="multiSeriesPieData" :options="multiSeriesPieData.options" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Radar Skip Points</h5></b-card-header>
            <b-card-body class="d-flex justify-content-center" style="height: 400px;">
              <Radar :data="radarData" :options="radarData.options" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Doughnut</h5></b-card-header>
            <b-card-body class="d-flex justify-content-center" style="height: 400px;">
              <Doughnut :data="doughnutData" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Polar Area</h5></b-card-header>
            <b-card-body class="d-flex justify-content-center" style="height: 400px;">
              <PolarArea :data="polarData" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Pie</h5></b-card-header>
            <b-card-body class="d-flex justify-content-center" style="height: 400px;">
              <Pie :data="pieData" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col xl="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Progressive Line</h5></b-card-header>
            <b-card-body>
              <Line :data="progressiveLineData" :options="progressiveLineOptions" />
            </b-card-body>
          </b-card>
        </b-col>


        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Line Chart</h5></b-card-header>
            <b-card-body>
              <Line :data="lineData" :options="lineData.options" />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header><h5 class="mb-0">Stepped Line Charts</h5></b-card-header>
            <b-card-body>
              <Line :data="steppedLineData" :options="steppedLineData.options" />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    </main>
  </AppLayout>
</template>

