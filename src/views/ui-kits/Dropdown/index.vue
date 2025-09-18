<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import SolidDropdown from "@/components/ui-kits/Dropdown/SolidDropdown.vue";
import AppLayout from "@/views/AppLayout.vue";
import OutlineDropdown from "@/components/ui-kits/Dropdown/OutlineDropdown.vue";


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
                    <SolidDropdown />
                    <OutlineDropdown/>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
