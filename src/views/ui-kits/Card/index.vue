<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicCard from "@/components/ui-kits/Card/BasicCard.vue";
import CardVariant from "@/components/ui-kits/Card/CardVariant.vue";
import CardStyle from "@/components/ui-kits/Card/CardStyle.vue";
 import CardTab from "@/components/ui-kits/Card/CardTab.vue";
import AppLayout from "@/views/AppLayout.vue";

// Breadcrumb data
const breadcrumbItems = {
    title: "Card",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Card", active: true},
    ],
};
</script>

<template>
    <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>
                <BasicCard/>
                <CardVariant/>
                <CardStyle />
                <CardTab />
            </b-row>
        </b-container>
    </main>
    </AppLayout>
</template>
