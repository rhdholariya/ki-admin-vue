<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import { PhCaretDoubleLeft, PhCaretDoubleRight } from "@phosphor-icons/vue";

const navRef = ref(null);
const scrollPositionRef = ref(0);
const size = 150;

// --- Helpers to read from localStorage ---
const getLayout = () => {
  if (typeof window === "undefined") return "ltr";
  return localStorage.getItem("Ki-Admin-React-Theme-layout-option") || "ltr";
};

const getSidebarOption = () => {
  if (typeof window === "undefined") return "vertical-sidebar";
  return localStorage.getItem("Ki-Admin-React-Theme-sidebar-option") || "vertical-sidebar";
};

// --- Reactive refs ---
const layout = ref(getLayout());
const sidebarOption = ref(getSidebarOption());

// --- Listen for localStorage changes ---
const handleStorageChange = (event) => {
  if (event.key === "Ki-Admin-React-Theme-layout-option") {
    layout.value = event.newValue || "ltr";
  }
  if (event.key === "Ki-Admin-React-Theme-sidebar-option") {
    sidebarOption.value = event.newValue || "vertical-sidebar";
  }
};

// --- Lifecycle ---
onMounted(() => {
  // Get nav reference
  navRef.value = document.querySelector(".main-nav");

  // Listen for layout changes in other tabs or scripts
  window.addEventListener("storage", handleStorageChange);

  // Optional: Also check every 200ms (if the app changes localStorage in same tab)
  const syncInterval = setInterval(() => {
    const currentLayout = getLayout();
    if (currentLayout !== layout.value) layout.value = currentLayout;

    const currentSidebar = getSidebarOption();
    if (currentSidebar !== sidebarOption.value) sidebarOption.value = currentSidebar;
  }, 200);

  // Cleanup
  onBeforeUnmount(() => {
    clearInterval(syncInterval);
    window.removeEventListener("storage", handleStorageChange);
  });
});

// --- Computed ---
const isRTL = computed(() => layout.value === "rtl");

// --- Scroll Function ---
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
    // RTL Mode
    if (direction === "right") {
      newOffset = Math.max(scrollPositionRef.value - size, -maxOffset);
    } else {
      newOffset = Math.min(scrollPositionRef.value + size, 0);
    }
    nav.style.marginRight = `${newOffset}px`;
  } else {
    // LTR Mode
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
    <!-- Previous Button -->
    <span
        class="menu-previous"
        @click="scrollNav(isRTL.value ? 'right' : 'left')"
        :style="{
        transform: isRTL.value ? 'rotate(180deg)' : 'none',
        float: isRTL.value ? 'right' : 'left'
      }"
    >
      <PhCaretDoubleLeft :size="32" />
    </span>

    <!-- Next Button -->
    <span
        class="menu-next"
        @click="scrollNav(isRTL.value ? 'left' : 'right')"
        :style="{
        transform: isRTL.value ? 'rotate(180deg)' : 'none',
        float: isRTL.value ? 'left' : 'right'
      }"
    >
      <PhCaretDoubleRight size="24" />
    </span>
  </div>
</template>
