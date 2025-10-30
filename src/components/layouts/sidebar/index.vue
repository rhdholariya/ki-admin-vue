<script setup>
import { ref, defineProps, defineEmits } from "vue";
import AppLogo from "@/components/layouts/sidebar/AppLogo.vue";
import HorizontalNav from "@/components/layouts/sidebar/HorizontalNav.vue";
import MenuItem from "@/components/layouts/sidebar/MenuItem.vue";
import SimpleBar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import { MenuList } from "@/data/sidebar/sidebar.js";

const props = defineProps({
  sidebarOpen: Boolean
});
const sidebarOpen = props.sidebarOpen;
const emit = defineEmits(["update:sidebarOpen"]);

const menuList = ref(MenuList);

const toggleSidebar = () => {
  emit("update:sidebarOpen", !props.sidebarOpen);
};
</script>

<template>
  <nav :class="['vertical-sidebar', props.sidebarOpen ? 'semi-nav' : '']">
    <AppLogo :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar" />

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
    <HorizontalNav />
  </nav>
</template>
