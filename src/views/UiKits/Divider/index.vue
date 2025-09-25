<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import BasicDivider from "@/components/UiKits/Divider/BasicDivider.vue";





// Breadcrumb data
const breadcrumbItems = {
    title: "divider",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "divider", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-container fluid>
                <b-row>
                    <BasicDivider />
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
