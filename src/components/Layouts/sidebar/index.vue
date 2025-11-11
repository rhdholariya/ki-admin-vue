<script setup>
import { ref, computed, defineProps, defineEmits, onMounted, onUnmounted } from "vue";
import AppLogo from "@/components/Layouts/sidebar/AppLogo.vue";
import HorizontalNav from "@/components/Layouts/sidebar/HorizontalNav.vue";
import MenuItem from "@/components/Layouts/sidebar/MenuItem.vue";
import SimpleBar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import { MenuList } from "@/data/sidebar/sidebar.js";

const props = defineProps({
  sidebarOpen: Boolean
});

const emit = defineEmits(["update:sidebarOpen"]);

const menuList = ref(MenuList);
const sidebarOption = ref("vertical-sidebar");

const getSidebarOption = () => {
  if (typeof window === "undefined") return "vertical-sidebar";
  return localStorage.getItem("Ki-Admin-React-Theme-sidebar-option") || "vertical-sidebar";
};

const updateSidebarOption = () => {
  sidebarOption.value = getSidebarOption();
};

const handleStorageChange = (e) => {
  if (e.key === "Ki-Admin-React-Theme-sidebar-option") {
    updateSidebarOption();
  }
};

onMounted(() => {
  updateSidebarOption();
  window.addEventListener("storage", handleStorageChange);

  window.addEventListener("sidebar-option-changed", updateSidebarOption);
});

onUnmounted(() => {
  window.removeEventListener("storage", handleStorageChange);
  window.removeEventListener("sidebar-option-changed", updateSidebarOption);
});

const sidebarClass = computed(() => {
  const baseClass = sidebarOption.value;
  return props.sidebarOpen ? `${baseClass} semi-nav` : baseClass;
});

const toggleSidebar = () => {
  updateSidebarOption();
  emit("update:sidebarOpen", !props.sidebarOpen);
};
</script>

<template>
  <nav :class="sidebarClass">
    <AppLogo :sidebarOpen="props.sidebarOpen" @toggle-sidebar="toggleSidebar"/>

    <SimpleBar class="app-nav simplebar-scrollable-y">
      <ul class="main-nav p-0 mt-2">
        <MenuItem
            v-for="(opt, index) in menuList"
            :key="index"
            :title="opt.title"
            :type="opt.type"
            :path="opt.path"
            :name="opt.name"
            :iconClass="opt.iconClass"
            :badgeCount="opt.badgeCount"
            :links="opt.children"
            :collapseId="opt.collapseId"
        />
      </ul>
    </SimpleBar>
    <HorizontalNav/>
  </nav>
</template>