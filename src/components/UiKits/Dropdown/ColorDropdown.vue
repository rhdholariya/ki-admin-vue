<script setup>
import { reactive } from "vue";
import { PhUserPlus, PhCirclesThree, PhChatCircle, PhGear, PhDotsThree } from "@phosphor-icons/vue";
import {BCard, BCardBody, BCol, BRow, BButton, BCardHeader} from "bootstrap-vue-next";

const dropdowns = [
    { menuClass: "menu-primary" },
    { menuClass: "menu-secondary" },
    { menuClass: "menu-success" },
    { menuClass: "menu-danger" },
    { menuClass: "menu-warning" },
    { menuClass: "menu-info" },
    { menuClass: "menu-light" },
    { menuClass: "menu-dark" },
];

const dropdownItems = [
    { label: "Action", icon: PhUserPlus },
    { label: "Another action", icon: PhCirclesThree },
    { label: "Something else here", icon: PhChatCircle },
    { divider: true },
    { label: "Settings", icon: PhGear },
];

const openDropdowns = reactive(dropdowns.map(() => true)); // default all open

const toggleDropdown = (index) => {
    openDropdowns[index] = !openDropdowns[index];
};
</script>

<template>
    <b-col lg="12">
        <b-card no-body>
            <b-card-header>
                <h5>Color Dropdown Menu</h5>
            </b-card-header>
            <b-card-body>
                <b-row>
                    <b-col md="6" xl="4"
                        v-for="(dropdown, dIndex) in dropdowns"
                        :key="dIndex"
                    >
                        <div class="app-dropdown">
                            <b-button
                                variant="link"
                                aria-expanded="false"
                                class="btn border-0 icon-btn"
                                type="button"
                                @click="toggleDropdown(dIndex)"
                            >
                                <PhDotsThree size="20" />
                            </b-button>
                            <ul
                                :class="[
                              'dropdown-menu',
                               dropdown.menuClass,
                               openDropdowns[dIndex] ? 'show' : ''
                             ]"
                            >
                                <template v-for="(item, iIndex) in dropdownItems" :key="iIndex">
                                    <li v-if="item.divider" class="dropdown-divider"></li>
                                    <li
                                        v-else
                                        class="dropdown-item d-flex justify-content-between text-white"
                                    >
                                        <span>{{ item.label }}</span>
                                        <component :is="item.icon" size="18" class="text-white" />
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
</template>
