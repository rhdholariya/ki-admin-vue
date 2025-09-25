<script setup>
import { ref, watch, onMounted } from "vue";
import { CountUp } from "countup.js";

const props = defineProps({
  value: { type: Number, required: true },
  tag: { type: String, default: "span" },
});

const el = ref(null);
let countUp;

onMounted(() => {
  countUp = new CountUp(el.value, props.value);
  countUp.start();
});

// 👇 Watch value changes and animate again
watch(() => props.value, (newVal) => {
  if (countUp) {
    countUp.update(newVal);
  }
});
</script>

<template>
  <component :is="props.tag" ref="el"></component>
</template>
