<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import {PhBriefcase} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import CustomWrapperPage from "@/components/UiKits/Wrapper/CustomWrapperPage.vue";
import ContentOverlayWrapper from "@/components/UiKits/Wrapper/ContentOverlayWrapper.vue";


// Breadcrumb data
const breadcrumbItems = {
    title: "Wrapper",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Wrapper", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row class="overlay-page">
                    <CustomWrapperPage />
                  <ContentOverlayWrapper />
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
