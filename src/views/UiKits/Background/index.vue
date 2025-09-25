<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import BasicBackground from "@/components/UiKits/Background/BasicBackground.vue";





// Breadcrumb data
const breadcrumbItems = {
    title: "Divider",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Divider", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-container fluid>
                <b-row>
                    <BasicBackground />
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
