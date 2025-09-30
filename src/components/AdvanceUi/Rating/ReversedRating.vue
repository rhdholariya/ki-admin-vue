<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  options: {
    type: Array,
    default: () => [
      "Strongly Disagree",
      "Disagree",
      "Neither Agree nor Disagree",
      "Agree",
      "Strongly Agree",
    ],
  },
  initial: { type: Number, default: 2 },
});

const selected = ref(props.initial);
const hovered = ref(null);

const handleClick = (index) => {
  selected.value = index;
};

const handleMouseEnter = (index) => {
  hovered.value = index;
};

const handleMouseLeave = () => {
  hovered.value = null;
};

const getLabel = computed(() => {
  return hovered.value !== null
      ? props.options[hovered.value]
      : props.options[selected.value];
});
</script>

<template>
  <div class="rating-wrapper ">
    <div class="rating-boxes d-flex gap-2">
      <div
          v-for="index in 5"
          :key="index"
          class="rating-pill"
          :class="{
          filled: 4 - (index - 1) <= (hovered !== null ? hovered : selected),
        }"
          @click="handleClick(4 - (index - 1))"
          @mouseenter="handleMouseEnter(4 - (index - 1))"
          @mouseleave="handleMouseLeave"
      ></div>
    </div>

    <div class="rating-label mt-2">{{ getLabel }}</div>
  </div>
</template>

<style scoped>
.rating-boxes {
  display: flex;
}

.rating-pill {
  display: block;
  width: 22px;
  height: 22px;
  float: left;
  background-color: rgb(var(--warning), 0.2);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  color: rgb(var(--warning), 1);
  margin: 1px;
  border-radius: 6px;

}

.rating-pill.filled {
  background-color: rgb(var(--warning), 1);
  color: var(--white);
}
.rating-label {
  font-weight: 500;
}
</style>
