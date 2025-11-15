<script setup>
import { ref } from "vue";
import { timeSpentData } from "@/data/charts/apexcharts/ApexChart.js";
const chartOptions = ref(timeSpentData);
const chartSeries = ref(timeSpentData.series);
</script>

<template>
    <apexchart
        type="line"
        height="280"
        :options="chartOptions"
        :series="chartSeries"
    />
</template>

