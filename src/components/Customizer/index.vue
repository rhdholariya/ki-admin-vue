<script setup>
import { ref, onMounted, watch } from 'vue';
import {
  BButton,
  BOffcanvas,
  BCloseButton,
  BBadge,
} from 'bootstrap-vue-next';
import { PhGear } from '@phosphor-icons/vue';
import { useRouter } from 'vue-router';

const themeName = 'Ki-Admin-React-Theme';

// Helpers for localStorage
const getLocalStorageItem = (key, defaultValue) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(`${themeName}-${key}`) || defaultValue;
  }
  return defaultValue;
};

const setLocalStorageItem = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`${themeName}-${key}`, value);
  }
};

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Reactive states
const sidebarOption = ref('vertical-sidebar');
const layoutOption = ref('ltr');
const colorOption = ref('default');
const textOption = ref('medium-text');
const show = ref(false);

// DOM refs
const navRefs = ref([]);
const mainNavRef = ref(null);
const appWrapperRef = ref(null);

const handleShow = () => (show.value = true);
const handleClose = () => (show.value = false);

// On mounted: initialize DOM refs and localStorage
onMounted(() => {
  mainNavRef.value = document.querySelector('.main-nav');
  appWrapperRef.value = document.querySelector('.app-wrapper');
  navRefs.value = Array.from(document.querySelectorAll('nav'));

  sidebarOption.value = getLocalStorageItem('sidebar-option', 'vertical-sidebar');
  layoutOption.value = getLocalStorageItem('layout-option', 'ltr');
  colorOption.value = getLocalStorageItem('color-option', 'default');
  textOption.value = getLocalStorageItem('text-option', 'medium-text');
});

// Watchers to apply changes
watch([sidebarOption, layoutOption, colorOption, textOption], () => {
  navRefs.value.forEach((nav) => {
    nav.classList.remove('dark-sidebar', 'horizontal-sidebar', 'vertical-sidebar');
    nav.classList.add(sidebarOption.value);

    if ((sidebarOption.value === 'vertical-sidebar' || sidebarOption.value === 'dark-sidebar') && mainNavRef.value) {
      mainNavRef.value.style.marginLeft = '0px';
      mainNavRef.value.style.marginRight = '0px';
    }
  });

  document.body.setAttribute('text', textOption.value);
  document.body.className = layoutOption.value;
  document.documentElement.setAttribute('dir', layoutOption.value);
  if (layoutOption.value === 'box-layout') {
    document.documentElement.removeAttribute('dir');
  }

  if (appWrapperRef.value) {
    ['default', 'gold', 'warm', 'happy', 'nature', 'hot'].forEach((color) => {
      appWrapperRef.value.classList.remove(color);
    });
    appWrapperRef.value.classList.add(colorOption.value);
  }
});

// Handlers
const handleSidebarOptionChange = (option) => {
  sidebarOption.value = option;
  setLocalStorageItem('sidebar-option', option);
};

const handleLayoutOptionChange = (option) => {
  layoutOption.value = option;
  setLocalStorageItem('layout-option', option);
};

const handleColorOptionChange = (option) => {
  colorOption.value = option;

  const tempElement = document.createElement('div');
  tempElement.className = option;
  tempElement.style.display = 'none';
  document.body.appendChild(tempElement);

  const primaryColorValue = getComputedStyle(tempElement).getPropertyValue('--primary').trim();
  if (primaryColorValue) {
    const [r, g, b] = primaryColorValue.split(',');
    if (r && g && b) {
      setLocalStorageItem('color-primary', rgbToHex(parseInt(r), parseInt(g), parseInt(b)));
    }
  }

  const secondaryColorValue = getComputedStyle(tempElement).getPropertyValue('--secondary').trim();
  if (secondaryColorValue) {
    const [r, g, b] = secondaryColorValue.split(',');
    if (r && g && b) {
      setLocalStorageItem('color-secondary', rgbToHex(parseInt(r), parseInt(g), parseInt(b)));
    }
  }

  document.body.removeChild(tempElement);
  setLocalStorageItem('color-option', option);
};

const handleTextOptionChange = (option) => {
  textOption.value = option;
  setLocalStorageItem('text-option', option);
};

const resetCustomizer = () => {
  setLocalStorageItem('sidebar-option', 'dark-sidebar');
  setLocalStorageItem('layout-option', 'ltr');
  setLocalStorageItem('color-option', 'default');
  setLocalStorageItem('text-option', 'medium-text');
  if (typeof window !== 'undefined') {
    localStorage.clear();
    window.location.reload();
  }
};
</script>

<template>
  <b-button variant="primary" class="customizer-btn" @click="handleShow">
    <PhGear size="24" />
  </b-button>

  <b-offcanvas v-model:show="show" placement="end" class="app-customizer" no-body>
    <!-- Header -->
    <template #header>
      <h5 class="text-white">Admin Customizer</h5>
      <p class="text-white opacity-75 w-100">It's time to style according to your choice!</p>
      <b-button aria-label="Close" class="btn-close" type="button" @click="handleClose"></b-button>
    </template>

    <!-- Body: scrollable area -->
    <div class="offcanvas-body flex-grow-1 overflow-auto">
      <div class="app-divider-v secondary py-3">
        <h6 class="mt-2">Sidebar option</h6>
      </div>
      <ul class="sidebar-option d-flex gap-1">
        <li v-for="option in ['vertical-sidebar','horizontal-sidebar','dark-sidebar']"
            :key="option"
            :class="{ selected: sidebarOption === option }"
            @click="handleSidebarOptionChange(option)">
          <ul>
            <li class="header"></li>
            <li class="sidebar" :class="{ 'bg-dark-600': option === 'dark-sidebar' }"></li>
            <li class="body">
              <BBadge bg="secondary" class="b-r-6">{{ option.split('-')[0].toUpperCase() }}</BBadge>
            </li>
          </ul>
        </li>
      </ul>

      <div class="app-divider-v secondary py-3">
        <h6 class="mt-2">Layout option</h6>
      </div>
      <ul class="layout-option d-flex gap-1">
        <li v-for="option in ['ltr','rtl','box-layout']"
            :key="option"
            :class="{ selected: layoutOption === option }"
            @click="handleLayoutOptionChange(option)">
          <ul>
            <li class="header"></li>
            <li class="sidebar"></li>
            <li class="body">
              <BBadge bg="secondary" class="b-r-6">{{ option.toUpperCase() }}</BBadge>
            </li>
          </ul>
        </li>
      </ul>

      <div class="app-divider-v secondary py-3">
        <h6 class="mt-2">Color Hint</h6>
      </div>
      <ul class="color-hint p-0 d-flex gap-1">
        <li v-for="color in ['default','gold','warm','happy','nature','hot']"
            :key="color"
            :class="['color', color, { selected: colorOption === color }]"
            @click="handleColorOptionChange(color)">
          <div />
        </li>
      </ul>

      <div class="app-divider-v secondary py-3">
        <h6 class="mt-2">Text size</h6>
      </div>
      <ul class="text-size d-flex gap-1">
        <li v-for="size in ['small-text','medium-text','large-text']"
            :key="size"
            :class="{ selected: textOption === size }"
            @click="handleTextOptionChange(size)">
          {{ size.split('-')[0] }}
        </li>
      </ul>
    </div>

    <!-- Footer: outside the body -->
    <div class="offcanvas-footer p-2 border-top">
      <div class="d-flex gap-2">
        <BButton variant="danger" class="w-100" @click="resetCustomizer">Reset</BButton>
        <a class="btn btn-success w-100" href="https://themeforest.net/user/la-themes/portfolio" target="_blank">Buy Now</a>
      </div>
      <div class="d-flex gap-2 mt-2">
        <a class="btn btn-primary w-100" href="mailto:teqlathemes@gmail.com">Support</a>
        <a class="btn btn-dark w-100" href="https://phpstack-1384472-5121645.cloudwaysapps.com/document/next-ts/axelit/index.html">Document</a>
      </div>
    </div>
  </b-offcanvas>
</template>
