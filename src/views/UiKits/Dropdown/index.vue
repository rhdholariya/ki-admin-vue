<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import SolidDropdown from "@/components/UiKits/Dropdown/SolidDropdown.vue";
import AppLayout from "@/views/AppLayout.vue";
import OutlineDropdown from "@/components/UiKits/Dropdown/OutlineDropdown.vue";
import ColorDropdown from "@/components/UiKits/Dropdown/ColorDropdown.vue";
import BasicDropdown from "@/components/UiKits/Dropdown/BasicDropdown.vue";
// import DropupVariation from "@/components/UiKits/Dropdown/DropupVariation.vue";


// Breadcrumb data
const breadcrumbItems = {
    title: "Dropdown",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Dropdown", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <BasicDropdown />
                    <SolidDropdown />
                    <OutlineDropdown/>
<!--                    <DropupVariation />-->
                    <ColorDropdown/>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
