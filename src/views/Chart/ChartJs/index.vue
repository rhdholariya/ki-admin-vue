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

// Import all chart data
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

// Register Chart.js components
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
import {PhChartPieSlice} from "@phosphor-icons/vue";
// Chart components
const BarChart = Bar;
const LineChart = Line;
const DoughnutChart = Doughnut;
const PieChart = Pie;
const PolarAreaChart = PolarArea;
const RadarChart = Radar;



// Breadcrumb data
const breadcrumbItems = {
  title: "Chart js",
  items: [
    {label: " Chart ", icon: PhChartPieSlice },
    {label: "Chart js", active: true},
  ],
};
</script>

<template>
<AppLayout>
  <main>
    <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-row>
        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Bar Chart Border Radius</h5>
            </b-card-header>
            <b-card-body>
              <BarChart
                  :data="barBorderRadiusData"
                  :options="barBorderRadiusData.options"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Vertical Bar Chart</h5>
            </b-card-header>
            <b-card-body>
              <BarChart
                  :data="verticalBarChart"
                  :options="verticalBarChart.options"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col xl="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Multi Series Pie</h5>
            </b-card-header>
            <b-card-body>
              <div class="d-flex justify-content-center" style="height: 400px;">
                <PieChart
                    :data="MultiSeriesPie"
                    :options="MultiSeriesPie.options"
                />
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Radar Skip Points</h5>
            </b-card-header>
            <b-card-body>
              <div class="d-flex justify-content-center" style="height: 400px;">
                <RadarChart
                    :data="RadarSkipPoints"
                    :options="RadarSkipPoints.options"
                />
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Doughnut</h5>
            </b-card-header>
            <b-card-body>
              <div class="d-flex justify-content-center" style="height: 400px;">
                <DoughnutChart :data="DoughnutData" />
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Polar Area</h5>
            </b-card-header>
            <b-card-body>
              <div class="d-flex justify-content-center" style="height: 400px;">
                <PolarAreaChart :data="PolarAreaData" />
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Pie</h5>
            </b-card-header>
            <b-card-body>
              <div class="d-flex justify-content-center" style="height: 400px;">
                <PieChart :data="PieData" />
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col xl="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Progressive Line</h5>
            </b-card-header>
            <b-card-body>
              <LineChart
                  :data="ProgressiveLineData"
                  :options="ProgressiveLineOptions"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Line Chart</h5>
            </b-card-header>
            <b-card-body>
              <LineChart
                  :data="LineChartData"
                  :options="LineChartData.options"
              />
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="6" class="mb-4">
          <b-card no-body>
            <b-card-header>
              <h5 class="mb-0">Stepped Line Charts</h5>
            </b-card-header>
            <b-card-body>
              <LineChart
                  :data="SteppedLineCharts"
                  :options="SteppedLineCharts.options"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main>
</AppLayout>
</template>

<style scoped>
.card {
  margin-bottom: 1rem;
}

.card-body {
  padding: 1.25rem;
}
</style>