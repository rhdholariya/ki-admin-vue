<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicBadge from "@/components/ui-kits/Badge/BasicBadge.vue";
import IconBadge from "@/components/ui-kits/Badge/IconBadge.vue";
import RadiusBadge from "@/components/ui-kits/Badge/RadiusBadge.vue";

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
</template>
