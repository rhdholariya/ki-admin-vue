<script setup>
import { ref } from "vue";

const props = defineProps({
  max: { type: Number, default: 10 },
  initial: { type: Number, default: 1 },
});

const rating = ref(props.initial);
const hovered = ref(null);

const handleClick = (value) => {
  rating.value = value;
};

const handleMouseEnter = (value) => {
  hovered.value = value;
};

const handleMouseLeave = () => {
  hovered.value = null;
};
</script>

<template>
  <div class="hr-wrapper">
    <div class="hr-bar-stack d-flex">
      <div
          v-for="index in props.max"
          :key="index"
          class="hr-bar"
          :class="{ filled: hovered ? index <= hovered : index <= rating }"
          @click="handleClick(index)"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
      />
    </div>
    <div class="hr-value mt-2">{{ rating }}</div>
  </div>
</template>


