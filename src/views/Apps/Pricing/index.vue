<script setup>
import { computed, ref } from "vue";
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody } from "bootstrap-vue-next";
import { PhStack } from "@phosphor-icons/vue";

import PricingCard from "@/components/Apps/Pricing/PricingCard.vue";
import SimplePricingCard from "@/components/Apps/Pricing/SimplePricingCard.vue";
import ComparePricing from "@/components/Apps/Pricing/ComparePricing.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

const plans = ref([
  {
    plan: "Basic Plans",
    price: 20,
    yearlyPrice: 80,
    features: ["5 Free Websites", "1 GB Hard disk Storage", "1 field", "10 Users", "Email Support"],
    imgSrc: "/images/pricing/1.png",
    imgSrcBack: "/images/pricing/9.png",
    bgColor: "secondary",
  },
  {
    plan: "Business Plans",
    price: 80,
    yearlyPrice: 100,
    features: ["40 Free Websites", "20 GB Hard disk Storage", "50 fields", "30 Users", "Email Support"],
    imgSrc: "/images/pricing/2.png",
    imgSrcBack: "/images/pricing/8.png",
    isBest: true,
    bgColor: "primary",
  },
  {
    plan: "Premium Plans",
    price: 200,
    yearlyPrice: 500,
    features: ["Unlimited Websites", "40 GB Hard disk Storage", "Unlimited fields", "40 Users", "Email Support"],
    imgSrc: "/images/pricing/3.png",
    imgSrcBack: "/images/pricing/7.png",
    bgColor: "secondary",
  },
  {
    plan: "Golden Premium Plans",
    price: 500,
    yearlyPrice: 1000,
    features: ["Unlimited Websites", "40 GB Hard disk Storage", "Unlimited fields", "Unlimited Users", "Email Support"],
    imgSrc: "/images/pricing/15.png",
    imgSrcBack: "/images/pricing/14.png",
    isBest: true,
    bgColor: "primary",
  },
]);

const breadcrumbItems = computed(() => ({
  title: "Pricing",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Pricing", active: true },
  ],
}));
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems" />
          <b-row>
              <b-col cols="12" class="mb-3">
            <b-card no-body>
              <b-card-header>
                <h5>Pricing Plans</h5>
              </b-card-header>
              <b-card-body>
                <b-row class="flip-pricing-container app-arrow">
                  <pricing-card />
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col cols="12" class="mb-3">
            <b-card no-body>
              <b-card-header>
                <h5>Simple Pricing Plans</h5>
              </b-card-header>
              <b-card-body>
                <simple-pricing-card />
              </b-card-body>
            </b-card>
          </b-col>

          <b-col cols="12" class="mb-3">
            <b-card no-body>
              <b-card-header>
                <h5>Compare Plans</h5>
              </b-card-header>
              <b-card-body>
                <compare-pricing />
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
