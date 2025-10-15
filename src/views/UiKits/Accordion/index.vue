<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import SimpleAccordion from "@/components/UiKits/Accordion/SimpleAccordion.vue";
import AppLayout from "@/views/AppLayout.vue";
import OutlineAccordion from "@/components/UiKits/Accordion/OutlineAccordion.vue";
import IconAccordion from "@/components/UiKits/Accordion/IconAccordion.vue";
import NestedAccordion from "@/components/UiKits/Accordion/NestedAccordion.vue";


// Breadcrumb data
const breadcrumbItems = {
    title: "Accordion",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Accordion", active: true},
    ],
};
</script>

<template>
    <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>
                <SimpleAccordion />
                <OutlineAccordion />
                <IconAccordion />
                <NestedAccordion />
            </b-row>
        </b-container>
    </main>
        </AppLayout>
</template>
