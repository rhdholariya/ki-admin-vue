<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import BasicDivider from "@/components/UiKits/Divider/BasicDivider.vue";

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
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>

                <b-row>
                    <BasicDivider />
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
