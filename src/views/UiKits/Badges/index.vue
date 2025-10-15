<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import BasicBadge from "@/components/UiKits/Badge/BasicBadge.vue";
import IconBadge from "@/components/UiKits/Badge/IconBadge.vue";
import RadiusBadge from "@/components/UiKits/Badge/RadiusBadge.vue";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

// Breadcrumb data
const breadcrumbItems = {
    title: "Badges",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Badges", active: true},
    ],
};
</script>

<template>
    <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>
                <BasicBadge/>
                <IconBadge />
                <RadiusBadge />
            </b-row>
        </b-container>
    </main>
    </AppLayout>
</template>
