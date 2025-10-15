<script setup>
import { BCard, BCardBody, BForm, BFormSelect } from 'bootstrap-vue-next'
import VueApexCharts from 'vue3-apexcharts'

defineProps({
  chartHeight: {
    type: Number,
    default: 180
  }
})

const series = [68, 58, 78, 88]

const chartOptions = {
  chart: {
    height: 200,
    type: 'donut'
  },
  plotOptions: {
    pie: {
      startAngle: 10,

      donut: {
        size: '80%',
        dataLabels: {
          enabled: false
        },
      }
    }
  },
  labels: ['18 - 24 years', '25 - 40 years', '40 - 55 years', '55+ years'],
  colors: ['rgba(var(--primary),1)', 'rgba(var(--primary),.8)', 'rgba(var(--primary),.6)', 'rgba(var(--primary),.4)'],
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 1400,
    options: {
      chart: {
        height: 200
      },
    }
  },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 180
        },
      }
    }
  ]

}
</script>




<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0 txt-ellipsis-1">Yearly Earning</h6>
        <b-form class="ms-2">
          <b-form-select
              aria-label="Default select example"
              class="custom-form-select"
          >
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">...</option>
            <option value="4">Dec</option>
          </b-form-select>
        </b-form>
      </div>

      <VueApexCharts
          :options="chartOptions"
          :series="series"
          type="donut"
          :height="chartHeight"
      />

      <ul class="list-unstyled">
        <li class="py-1 d-flex align-items-center justify-content-between">
          <p class="mb-0 txt-ellipsis-1">
            <i class="ti ti-circle-filled text-primary f-s-10 me-1"></i>
            19-20 years
          </p>
          <p class="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
            ------------------------
          </p>
          <span>68%</span>
        </li>
        <li class="py-1 d-flex align-items-center justify-content-between">
          <p class="mb-0 txt-ellipsis-1">
            <i class="ti ti-circle-filled text-primary-800 f-s-10 me-1"></i>
            20-21 years
          </p>
          <p class="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
            ------------------------
          </p>
          <span>58%</span>
        </li>
        <li class="py-1 d-flex align-items-center justify-content-between">
          <p class="mb-0 txt-ellipsis-1">
            <i class="ti ti-circle-filled text-primary-600 f-s-10 me-1"></i>
            21-22 years
          </p>
          <p class="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
            ------------------------
          </p>
          <span>78%</span>
        </li>
        <li class="py-1 d-flex align-items-center justify-content-between">
          <p class="mb-0 txt-ellipsis-1">
            <i class="ti ti-circle-filled text-primary-400 f-s-10 me-1"></i>
            22-23 years
          </p>
          <p class="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
            -----------------------
          </p>
          <span>88%</span>
        </li>
      </ul>
    </b-card-body>
  </b-card>
</template>

