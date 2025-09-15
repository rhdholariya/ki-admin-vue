<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicButtons from "@/components/ui-kits/Button/BasicButtons.vue";
import SmartButton from "@/components/ui-kits/Button/SmartButton.vue";



// Breadcrumb data
const breadcrumbItems = {
    title: "Button",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Button", active: true},
    ],
};
</script>

<template>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>
                <BasicButtons/>
                <SmartButton />
            </b-row>
        </b-container>
    </main>
</template>
