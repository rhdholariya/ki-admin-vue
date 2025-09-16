<script setup>
import { ref, onMounted, computed } from "vue";
import { PhCaretDoubleLeft, PhCaretDoubleRight } from "@phosphor-icons/vue";

const navRef = ref(null);
const scrollPositionRef = ref(0);
const size = 150;

// Function to get layout from localStorage
const getLayout = () => {
  if (typeof window === "undefined") return "ltr";
  const layout = localStorage.getItem("Ki-Admin-React-Theme-layout-option");
  return layout || "ltr";
};

// Function to get sidebar option from localStorage
const getSidebarOption = () => {
  if (typeof window === "undefined") return "vertical-sidebar";
  return localStorage.getItem("Ki-Admin-React-Theme-sidebar-option");
};

const sidebarOption = ref(getSidebarOption());

onMounted(() => {
  setInterval(() => {
    const currentOption = getSidebarOption();
    if (currentOption !== sidebarOption.value) {
      sidebarOption.value = currentOption;
    }
  }, 100);

  // Get nav element
  navRef.value = document.querySelector(".main-nav");
});

const layout = computed(() => getLayout());
const isRTL = computed(() => layout.value === "rtl");

const scrollNav = (direction) => {
  const nav = navRef.value;
  if (!nav) return;

  const container = nav.parentElement;
  if (!container) return;

  const containerWidth = container.clientWidth;
  const navWidth = nav.scrollWidth;
  const maxOffset = navWidth - containerWidth;

  let newOffset;

  if (isRTL.value) {
    if (direction === "right") {
      newOffset = Math.max(scrollPositionRef.value - size, -maxOffset);
    } else {
      newOffset = Math.min(scrollPositionRef.value + size, 0);
    }
    nav.style.marginRight = `${newOffset}px`;
  } else {
    if (direction === "left") {
      newOffset = Math.max(scrollPositionRef.value - size, 0);
    } else {
      newOffset = Math.min(scrollPositionRef.value + size, maxOffset);
    }
    nav.style.marginLeft = `-${newOffset}px`;
  }

  scrollPositionRef.value = newOffset;
};
</script>


<template>
  <div v-if="sidebarOption === 'horizontal-sidebar'" class="menu-navs">
    <span
        class="menu-previous"
        @click="scrollNav(isRTL ? 'right' : 'left')"
        :style="{
        transform: isRTL ? 'rotate(180deg)' : 'none',
        float: isRTL ? 'right' : 'left'
      }"
    >
   <PhCaretDoubleLeft :size="32" />
    </span>
    <span
        class="menu-next"
        @click="scrollNav(isRTL ? 'left' : 'right')"
        :style="{
        transform: isRTL ? 'rotate(180deg)' : 'none',
        float: isRTL ? 'left' : 'right'
      }"
    >
         <PhCaretDoubleRight size="24" />
    </span>
  </div>
</template>


