<script setup>
import { ref } from "vue";

const props = defineProps({
  max: { type: Number, default: 5 },
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
  <div class="square-rating-wrapper d-flex gap-2">
    <div
        v-for="index in props.max"
        :key="index"
        class="square d-flex align-items-center justify-content-center"
        :class="{
        'active-border':
          (hovered !== null && index <= hovered) || index <= rating,
      }"
        @click="handleClick(index)"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
    >
      {{ index }}
    </div>
  </div>
</template>

<style scoped>
.square {
  display: block;
  width: 30px;
  height: 30px;
  float: left;
  font-size: 14px;
  line-height: 2;
  text-align: center;
  color: rgb(var(--warning), 0.2);
  font-weight: 600;
  border: 2px solid rgb(var(--warning), 0.2);
  margin: 2px;
  text-decoration: none;
  border-radius: 40px;
  background: rgb(var(--warning), 0.1);
  padding-left: 0 !important;
}

.square.active-border {
  color: rgb(var(--warning), 1);
  border: 2px solid rgb(var(--warning), 1);
}
</style>
