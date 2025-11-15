<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import SolidDropdown from "@/components/UiKits/Dropdown/SolidDropdown.vue";
import AppLayout from "@/views/AppLayout.vue";
import OutlineDropdown from "@/components/UiKits/Dropdown/OutlineDropdown.vue";
import ColorDropdown from "@/components/UiKits/Dropdown/ColorDropdown.vue";
import BasicDropdown from "@/components/UiKits/Dropdown/BasicDropdown.vue";

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
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <BasicDropdown />
                    <SolidDropdown />
                    <OutlineDropdown/>
                    <ColorDropdown/>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
