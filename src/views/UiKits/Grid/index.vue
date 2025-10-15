<script setup>
import {BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import OptionGrid from "@/components/UiKits/Grid/OptionGrid.vue";
import NestingGrid from "@/components/UiKits/Grid/NestingGrid.vue";
import ColumGrid from "@/components/UiKits/Grid/ColumGrid.vue";



// Breadcrumb data
const breadcrumbItems = {
    title: "Grid",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Grid", active: true},
    ],
};
</script>
<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <OptionGrid />
                <ColumGrid/>
                <NestingGrid/>
            </b-container>
        </main>
    </AppLayout>
</template>
