<script setup>
import {computed, ref} from "vue";
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody } from "bootstrap-vue-next";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.vue";
import { PhStack } from "@phosphor-icons/vue";

// Import your Vue versions of these components
import PricingCard from "@/components/Apps/Pricing/PricingCard.vue";
import SimplePricingCard from "@/components/Apps/Pricing/SimplePricingCard.vue";
import ComparePricing from "@/components/Apps/Pricing/ComparePricing.vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

// Plans data
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

// ✅ Breadcrumb data
const breadcrumbItems = computed(() => ({
  title: "Pricing",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "Pricing", active: true },
  ],
}));

</script>

<template>
  <AppLayout>
    <main>
  <BContainer fluid>
    <!-- Breadcrumb -->
    <Breadcrumb :breadcrumb="breadcrumbItems" />

    <BRow>
      <!-- Flip Pricing Plans -->
      <BCol xs="12" class="mb-3" >
        <BCard no-body>
          <BCardHeader>
            <h5>Pricing Plans</h5>
          </BCardHeader>
          <BCardBody>
            <BRow class="flip-pricing-container app-arrow">
              <PricingCard v-for="(plan, index) in plans" :key="index" v-bind="plan" />
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>

      <!-- Simple Pricing Plans -->
      <BCol xs="12" class="mb-3" >
        <BCard no-body>
          <BCardHeader>
            <h5>Simple Pricing Plans</h5>
          </BCardHeader>
          <BCardBody>
            <SimplePricingCard />
          </BCardBody>
        </BCard>
      </BCol>

      <!-- Compare Pricing -->
      <BCol xs="12" class="mb-3" >
        <BCard no-body>
          <BCardHeader>
            <h5>Compare Plans</h5>
          </BCardHeader>
          <BCardBody>
            <ComparePricing />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </BContainer>
    </main>
  </AppLayout>
</template>
