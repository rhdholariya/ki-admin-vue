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

<style scoped>

.box-example-horizontal{
  .hr-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hr-bar-stack{
    display: flex;
    flex-direction: column;
    .hr-bar{
      background-color: rgb(var(--warning), 1);
      &.filled{
        display: block;
        width: 120px;
        height: 6px;
        background-color: rgb(var(--warning), 0.2);
        margin: 1px;
      }
    }
  }
}


</style>


