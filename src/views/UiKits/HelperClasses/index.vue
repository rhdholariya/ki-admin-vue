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
    title: "Helper Classes",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Helper Classes", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
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
