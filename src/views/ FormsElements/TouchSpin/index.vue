<script setup>
import { ref } from 'vue';
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import TouchSpinCard from '@/components/FormsElements/TouchSpin/TouchSpinCard.vue';
import {PhCardholder} from "@phosphor-icons/vue";


// Counts and colors
const countsA = ref([25, 25, 25]);
const colorsA = ['light-primary', 'light-secondary', 'light-success'];
const updateCountA = (i, d) => (countsA.value[i] += d);

const countsB = ref([25, 25, 25]);
const updateCountB = (i, d) => (countsB.value[i] += d);

const countsC = ref([25, 25, 25]);
const colorsC = ['primary', 'secondary', 'success'];
const updateCountC = (i, d) => (countsC.value[i] += d);

const countsD = ref([25, 25, 25]);
const colorsD = ['primary', 'secondary', 'success'];
const updateCountD = (i, d) => (countsD.value[i] += d);

const countsG = ref([25, 25, 25]);
const updateCountG = (i, d) => (countsG.value[i] += d);

const countsE = ref([25, 25, 25]);
const updateCountE = (i, d) => (countsE.value[i] += d);

const countF = ref([25]);
const updateCountF = (i, d) => (countF.value[i] += d);

const countH = ref([25]);
const updateCountH = (i, d) => (countH.value[i] += d);

const countDrop = ref([25]);
const updateCountDrop = (i, d) => (countDrop.value[i] += d);

const count3 = ref([25]);
const updateCount3 = (i, d) => (count3.value[i] += d);

// Dropdown
const dropdownOpen = ref(false);
const toggleDropdown = () => (dropdownOpen.value = !dropdownOpen.value);

// Breadcrumb data
const breadcrumbItems = {
    title: "Form Validation",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Form Validation", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col xl="3">
                        <TouchSpinCard
                            title="Basic Touchspin"
                            :counts="countsA"
                            :colors="colorsA"
                            variant="button"
                            :update-count="updateCountA"
                        />
                    </b-col>

                    <b-col xl="3">
                        <TouchSpinCard
                            title="Basic Touchspin - Card B"
                            :counts="countsB"
                            :colors="colorsA"
                            variant="anchor"
                            :update-count="updateCountB"
                        />
                    </b-col>

                    <b-col xl="3">
                        <TouchSpinCard
                            title="Basic Touchspin - Card C"
                            :counts="countsC"
                            :colors="colorsC"
                            variant="custom"
                            :update-count="updateCountC"
                        />
                    </b-col>

                    <b-col xl="3">
                        <TouchSpinCard
                            title="Basic Touchspin - Card D"
                            :counts="countsD"
                            :colors="colorsD"
                            variant="custom"
                            :update-count="updateCountD"
                        />
                    </b-col>

                    <b-col xxl="6" xl="6" lg="12">
                        <TouchSpinCard
                            title="Custom Round Touchspin"
                            :counts="countsG"
                            :colors="['primary', 'secondary', 'success']"
                            variant="round"
                            :update-count="updateCountG"
                        />
                    </b-col>

                    <b-col xxl="6" xl="6" lg="12">
                        <TouchSpinCard
                            title="Custom Round Touchspin E"
                            :counts="countsE"
                            :colors="['primary', 'secondary', 'success']"
                            variant="round-alt"
                            :update-count="updateCountE"
                        />
                    </b-col>

                    <b-col lg="6">
                        <TouchSpinCard
                            title="Default Touchspin"
                            :counts="countF"
                            :colors="['primary']"
                            variant="default"
                            :update-count="updateCountF"
                        />
                    </b-col>

                    <b-col lg="6">
                        <TouchSpinCard
                            title="Horizontal Touchspin"
                            :counts="countH"
                            :colors="['primary']"
                            variant="horizontal"
                            :update-count="updateCountH"
                        />
                    </b-col>

                    <b-col lg="6">
                        <TouchSpinCard
                            title="Touchspin With Dropdown"
                            :counts="countDrop"
                            :colors="['primary']"
                            variant="with-dropdown"
                            :with-dropdown="true"
                            :dropdown-open="dropdownOpen"
                            :toggle-dropdown="toggleDropdown"
                            :update-count="updateCountDrop"
                        />
                    </b-col>

                    <b-col lg="6">
                        <TouchSpinCard
                            title="Touchspin With Postfix & Prefix"
                            :counts="count3"
                            :colors="['primary']"
                            variant="prefix-postfix"
                            :update-count="updateCount3"
                        />
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
