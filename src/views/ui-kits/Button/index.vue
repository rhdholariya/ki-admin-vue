<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicButtons from "@/components/ui-kits/Button/BasicButtons.vue";
import SmartButton from "@/components/ui-kits/Button/SmartButton.vue";
import BlockSizeRadiousButton from "@/components/ui-kits/Button/BlockSizeRadiousButton.vue";
import AppLayout from "@/views/AppLayout.vue";
import ButtonGroup from "@/components/ui-kits/Button/ButtonGroup.vue";



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
    <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>
                <BasicButtons/>
                <SmartButton />
                <BlockSizeRadiousButton/>
                <ButtonGroup />
            </b-row>
        </b-container>
    </main>
    </AppLayout>
</template>
