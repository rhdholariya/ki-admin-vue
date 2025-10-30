<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import BasicBackground from "@/components/UiKits/Background/BasicBackground.vue";





// Breadcrumb data
const breadcrumbItems = {
    title: "Background",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Background", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>

                <b-row>
                    <BasicBackground />
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
