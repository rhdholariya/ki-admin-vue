<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import HelperColor from "@/components/UiKits/HelperClasses/HelperColor.vue";
import HelperTextFont from "@/components/UiKits/HelperClasses/HelperTextFont.vue";
import HelperPaddingMargin from "@/components/UiKits/HelperClasses/HelperPaddingMargin.vue";
import HelperRadiusBorder from "@/components/UiKits/HelperClasses/HelperRadiusBorder.vue";




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
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-container fluid>
            <b-row>
                <HelperColor />
                <HelperTextFont />
                <HelperPaddingMargin />
                <HelperRadiusBorder/>
            </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
