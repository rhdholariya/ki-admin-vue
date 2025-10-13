<script setup>
import StepData1 from "@/components/Apps/EshopePage/Checkout/StepData1.vue";
import StepData2 from "@/components/Apps/EshopePage/Checkout/StepData2.vue";
import StepData3 from "@/components/Apps/EshopePage/Checkout/StepData3.vue";
import StepData4 from "@/components/Apps/EshopePage/Checkout/StepData4.vue";
import StepData5 from "@/components/Apps/EshopePage/Checkout/StepData5.vue";

defineProps({
  currentStep: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="mt-4">
    <StepData1 v-if="currentStep === 1" />
    <StepData2 v-else-if="currentStep === 2" />
    <StepData3 v-else-if="currentStep === 3" />
    <StepData4 v-else-if="currentStep === 4" />
    <StepData5 v-else-if="currentStep === 5" />
  </div>
</template>