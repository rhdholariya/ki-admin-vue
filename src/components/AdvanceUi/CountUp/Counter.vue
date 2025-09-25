<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { CountUp } from "countup.js";

interface Props {
  value: number;
  tag?: string;
  class?: string;
  startVal?: number;
  duration?: number;
}

const props = defineProps<Props>();
const counterEl = ref<HTMLElement | null>(null);

onMounted(() => {
  if (counterEl.value) {
    const countUp = new CountUp(counterEl.value, props.value, {
      startVal: props.startVal ?? 0,
      duration: props.duration ?? 2,
    });
    if (!countUp.error) countUp.start();
    else console.error(countUp.error);
  }
});

watch(
    () => props.value,
    (newVal) => {
      if (counterEl.value) {
        const countUp = new CountUp(counterEl.value, newVal, {
          startVal: 0,
          duration: 2,
        });
        if (!countUp.error) countUp.start();
        else console.error(countUp.error);
      }
    }
);
</script>

<template>
  <component :is="props.tag || 'span'" ref="counterEl" :class="props.class">
    0
  </component>
</template>
