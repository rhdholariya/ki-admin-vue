<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import BasicButtons from "@/components/UiKits/Button/BasicButtons.vue";
import SmartButton from "@/components/UiKits/Button/SmartButton.vue";
import BlockSizeRadiousButton from "@/components/UiKits/Button/BlockSizeRadiousButton.vue";
import AppLayout from "@/views/AppLayout.vue";
import ButtonGroup from "@/components/UiKits/Button/ButtonGroup.vue";



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
        <b-container fluid>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
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
