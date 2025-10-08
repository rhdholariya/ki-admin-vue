<script setup>
import { BContainer } from 'bootstrap-vue-next'
import { PhCheckCircle, PhXCircle } from '@phosphor-icons/vue'

const plans = [
  { name: "Free", features: ["check", "x", "check", "x", "x", "x"] },
  { name: "Pro", features: ["check", "check", "check", "check", "check", "x"] },
  { name: "Enterprise", features: ["check", "check", "check", "check", "check", "check"] },
]

const featureList = [
  "Public",
  "Private",
  "Permissions",
  "Sharing",
  "Unlimited members",
  "Extra security",
]
</script>

<template>
  <BContainer fluid class="pricing-table table-responsive">
    <table class="table table-bottom-border table-striped align-middle text-center">
      <thead>
      <tr>
        <th></th>
        <th v-for="(plan, index) in plans" :key="index">{{ plan.name }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(feature, featureIndex) in featureList" :key="featureIndex">
        <th scope="row" class="text-start f-w-500">{{ feature }}</th>
        <td v-for="(plan, planIndex) in plans" :key="planIndex">
          <PhCheckCircle
              v-if="plan.features[featureIndex] === 'check'"
              size="20"
              weight="duotone"
              class="text-success"
          />
          <PhXCircle
              v-else
              size="20"
              weight="duotone"
              class="text-danger"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </BContainer>
</template>
