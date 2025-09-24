<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicOutlineTab from "@/components/UiKits/Tab/BasicOutlineTab.vue";
import LightTab from "@/components/UiKits/Tab/LightTab.vue";
import BackgroundTab from "@/components/UiKits/Tab/BackgroundTab.vue";
import VerticalTab from "@/components/UiKits/Tab/VerticalTab.vue";
import VerticalRightTab from "@/components/UiKits/Tab/VerticalRightTab.vue";
import BottomTab from "@/components/UiKits/Tab/BottomTab.vue";
import JustifyTab from "@/components/UiKits/Tab/JustifyTab.vue";
import ImageTab from "@/components/UiKits/Tab/ImageTab.vue";
import AppLayout from "@/views/AppLayout.vue";


// Breadcrumb data
const breadcrumbItems = {
    title: "Tabs",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Tabs", active: true},
    ],
};
</script>

<template>
    <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>
                <BasicOutlineTab/>
                <LightTab />
                <BackgroundTab />
                <VerticalTab />
                <VerticalRightTab />
                <BottomTab />
                <JustifyTab />
                <ImageTab />
            </b-row>
        </b-container>

    </main>
    </AppLayout>
</template>
