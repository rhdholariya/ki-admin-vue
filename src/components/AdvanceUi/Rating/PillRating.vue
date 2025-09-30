<script setup>
import { ref } from "vue";

const props = defineProps({
  options: { type: Array, default: () => ["A", "B", "C", "D", "E", "F"] },
  initial: { type: String, default: "A" },
});

const selected = ref(props.initial);
const hoveredOption = ref(null);

const handleClick = (value) => {
  selected.value = value;
};

const isActive = (option) => {
  return (
      !hoveredOption.value &&
      props.options.indexOf(option) <= props.options.indexOf(selected.value)
  );
};

const isHoverActive = (option) => {
  return (
      hoveredOption.value &&
      props.options.indexOf(option) <= props.options.indexOf(hoveredOption.value)
  );
};
</script>

<template>
  <div class="pill-container d-flex flex-wrap gap-2">
    <div
        v-for="option in props.options"
        :key="option"
        class="pill-option px-3 py-1 rounded-pill"
        :class="{
        active: isActive(option),
        'hover-active': isHoverActive(option),
      }"
        @click="handleClick(option)"
        @mouseenter="hoveredOption = option"
        @mouseleave="hoveredOption = null"
    >
      {{ option }}
    </div>
  </div>
</template>

<style scoped>
.pill-option {
  padding: 7px 15px;
  background-color: rgb(var(--warning), 0.1);
  color: rgb(var(--warning), 1);
  text-decoration: none;
  font-size: 13px;
  line-height: 3;
  text-align: center;
  font-weight: 400;
}

.pill-option.active {
  background-color: rgb(var(--warning), 1);
  color: var(--white);
}

.pill-option.hover-active {
  background-color: rgb(var(--warning), 1);
  color: var(--white);
}
</style>
