<script setup>
defineEmits(['close-nav']);
</script>

<template>
  <nav>
    <button class="toggle-semi-nav" @click="$emit('close-nav')">
      Close
    </button>
    <h1>
      sidebar
    </h1>
  </nav>
</template>