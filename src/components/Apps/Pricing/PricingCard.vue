<script setup>
import {
  BCol,
    BButton
} from "bootstrap-vue-next";

const props = defineProps({
  plan: String,
  price: Number,
  yearlyPrice: Number,
  features: Array,
  imgSrc: String,
  imgSrcBack: String,
  isBest: { type: Boolean, default: false },
  bgColor: String
})
</script>

<template>
  <b-col sm="6" lg="3">
    <div class="flip-pricing">
      <div class="flip-card">
        <!-- Front Card -->
        <div class="front-pricing card">
          <div v-if="isBest" class="box-ribbon box-right">
            <div :class="`ribbonbox box-right ribbon-${bgColor}`">Best</div>
          </div>

          <div class="pricing-header">
            <h6 class="f-w-500 text-dark">{{ plan }}</h6>
            <img :src="imgSrc" class="w-60 h-60 rounded" alt="" />
          </div>

          <div class="app-divider-v justify-content-center m-0">
            <p :class="`price f-w-700 text-${bgColor}`">
              ${{ price }}
              <span class="f-w-500 f-s-12">/per Month</span>
            </p>
          </div>

          <div class="pricing-content">
            <ul class="pricing-list">
              <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
            </ul>
            <b-button type="button" :class="`btn btn-${bgColor} w-100`">Buy Plans</b-button>
          </div>
        </div>

        <!-- Back Card -->
        <div class="back-pricing card">
          <div class="pricing-header">
            <h6 class="f-w-500 text-dark">{{ plan }}</h6>
            <img :src="imgSrcBack" class="w-60 h-60 rounded" alt="" />
          </div>

          <div class="app-divider-v justify-content-center m-0">
            <p :class="`price f-w-700 text-${bgColor}`">
              ${{ yearlyPrice }}
              <span class="f-w-500 f-s-12">/per Yearly</span>
            </p>
          </div>

          <div class="pricing-content">
            <ul class="pricing-list">
              <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
            </ul>
            <b-button type="button" :class="`btn btn-${bgColor} w-100`">Buy Plans</b-button>
          </div>
        </div>
      </div>
    </div>
  </b-col>
</template>
