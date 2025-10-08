<script setup>
import { ref } from "vue";
import { BCard, BCardBody, BCol } from "bootstrap-vue-next";
import { PhCheck } from '@phosphor-icons/vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// Pricing Plans
const pricingPlans = ref([
  {
    title: "Basic",
    price: "$9.99",
    period: "per month",
    features: [
      "100 requests per day",
      "Free trial features access",
      "Limited API access",
    ],
    buttonClass: "btn-success",
  },
  {
    title: "Premium",
    price: "$19.99",
    period: "per month",
    features: ["Unlimited AI generation", "Full new features access", "Priority support"],
    buttonClass: "btn-secondary",
  },
  {
    title: "Enterprise",
    price: "$9.99",
    period: "pricing",
    features: ["Custom deployment", "Comprehensive usage", "Training models"],
    buttonClass: "btn-success",
  },
  {
    title: "Professional",
    price: "$49.99",
    period: "per month",
    features: ["Access to all features", "Priority email support", "Weekly backups"],
    buttonClass: "btn-secondary",
  },
]);

// Swiper settings
const swiperOptions = {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1440: { slidesPerView: 3},
    991: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
};
</script>

<template>
  <div class="simple-pricing-container">
    <Swiper v-bind="swiperOptions">
      <SwiperSlide v-for="(plan, index) in pricingPlans" :key="index">
        <BCol class="p-3">
          <BCard class="simple-pricing-card" no-body>
            <BCardBody>
              <div class="simple-price-header text-center mb-3">
                <h4 class="mb-0">{{ plan.title }}</h4>
              </div>

              <div class="simple-price-body">
                <div
                    :class="`simple-price-value text-center rounded ${
                    plan.buttonClass.includes('success') ? 'bg-light-success' : 'bg-light-secondary'
                  } d-block py-3 mb-3`"
                >
                  <span class="f-s-24 f-w-600">{{ plan.price }}/</span>
                  <span class="f-s-12 f-w-600">{{ plan.period }}</span>
                </div>

                <div class="simple-price-content">
                  <div v-for="(feature, i) in plan.features" :key="i">
                    <div class="d-flex align-items-start mb-2">
                      <PhCheck size="20" weight="duotone" class="bg-success p-1 b-r-100" />
                      <p class="ms-2 mb-0">{{ feature }}</p>
                    </div>
                    <div class="app-divider-v px-2" />
                  </div>

                  <button :class="`${plan.buttonClass} rounded w-100 p-2 mt-3`">
                    Get Started
                  </button>
                </div>
              </div>
            </BCardBody>
          </BCard>
        </BCol>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
