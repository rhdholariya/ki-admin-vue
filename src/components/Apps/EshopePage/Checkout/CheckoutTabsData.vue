<script setup>
import { defineProps } from "vue";

// Import each step component
import StepData1 from "@/components/Apps/EshopePage/Checkout/StepData1.vue";
import StepData2 from "@/components/Apps/EshopePage/Checkout/StepData2.vue";
import StepData3 from "@/components/Apps/EshopePage/Checkout/StepData3.vue";
import StepData4 from "@/components/Apps/EshopePage/Checkout/StepData4.vue";
import StepData5 from "@/components/Apps/EshopePage/Checkout/StepData5.vue";

// Props
defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});

const steps = [StepData1, StepData2, StepData3, StepData4, StepData5];
</script>

<template>
  <div class="mt-4">
    <!-- Smooth fade transition between steps -->
    <transition name="fade" mode="out-in">
      <component
          :is="steps[currentStep - 1]"
          :key="currentStep"
      />
    </transition>
  </div>
</template>


