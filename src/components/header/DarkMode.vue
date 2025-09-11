<script setup>
import {defineProps, onMounted, ref} from 'vue';
import { PhMoonStars, PhSunDim } from '@phosphor-icons/vue';

const theme = ref('light');

onMounted(() => {
  const storedTheme = localStorage.getItem('theme-mode');
  if (storedTheme) {
    theme.value = storedTheme;
    document.body.classList.add(storedTheme);
  } else {
    document.body.classList.add('light');
    theme.value = 'light';
  }
});

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  theme.value = newTheme;
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(newTheme);
  localStorage.setItem('theme-mode', newTheme);
};

defineProps({
  isDarkMode: Boolean
});
</script>

<template>
  <div :class="['sun-logo', 'head-icon', { sun: theme === 'dark' }]" @click="toggleTheme" class="d-block head-icon bg-light-dark rounded-circle f-s-22 p-2">
    <PhMoonStars size="24" weight="regular"/>
  </div>
  <div :class="['moon-logo', 'head-icon', { moon: theme === 'dark' }]" @click="toggleTheme"  class="d-block head-icon bg-light-dark rounded-circle f-s-22 p-2">
    <PhSunDim size="24" weight="regular"/>
  </div>
</template>
