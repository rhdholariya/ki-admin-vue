<script setup>
import { ref, computed } from "vue";

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

// Show hovered value if available, otherwise rating
const displayValue = computed(() =>
    hovered.value !== null ? hovered.value : rating.value
);
</script>

<template>
  <div class="rating-wrapper">
    <div class="rating-bars d-flex">
      <span
          v-for="index in props.max"
          :key="index"
          class="bar"
          :class="{ active: hovered !== null ? index <= hovered : index <= rating }"
          @click="handleClick(index)"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
      />
    </div>
    <span class="rating-value ms-2">{{ displayValue }}</span>
  </div>
</template>

<style scoped>
.rating-bars {
  display: flex;
  gap: 4px;
}

.bar {
  display: block;
  width: 14px;
  height: 28px;
  float: left;
  background-color: rgb(var(--warning), 0.2);
  text-align: center;
  padding: 5px 0px;
  margin: 1px;
  border-radius: 14px;
}

.bar.active {
  background-color: rgb(var(--warning), 1);
}
.rating-value {
  font-weight: 500;
}
</style>
