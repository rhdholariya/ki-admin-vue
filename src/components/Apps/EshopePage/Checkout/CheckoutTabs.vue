<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardBody,
} from "bootstrap-vue-next";
import {
  IconCurrencyDollar,
  IconDisc,
  IconUserCircle,
  IconUserPlus,
} from "@tabler/icons-vue";
import CheckoutTabsData from "@/components/Apps/EshopePage/Checkout/CheckoutTabsData.vue";

const currentStep = ref(1);

const steps = [
  { id: 1, title: "Billing Info", icon: IconUserCircle },
  { id: 2, title: "Address", icon: IconDisc },
  { id: 3, title: "Payment", icon: IconUserPlus },
  { id: 4, title: "Review", icon: IconCurrencyDollar },
  { id: 5, title: "Finish", icon: IconDisc },
];

const handleStepClick = (stepId) => {
  currentStep.value = stepId;
};
</script>

<template>

    <b-card class="mb-3">
      <b-card-body class="p-0">
        <div class="checkout-tabs-step">
          <div
              v-for="step in steps"
              :key="step.id"
              :class="`tab d-flex align-items-center ${
              currentStep === step.id ? 'checkout-current-step' : ''
            }`"
              @click="handleStepClick(step.id)"
              role="button"
              style="cursor: pointer"
          >
            <div class="tabs-steps me-2">
              <component :is="step.icon" size="20" />
            </div>
            <div>
              <h6 class="mb-0">{{ step.title }}</h6>
              <span class="text-secondary">Step {{ step.id }}</span>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>
    <b-card>
      <b-card-body>
        <CheckoutTabsData :current-step="currentStep" />
      </b-card-body>
    </b-card>

</template>

