<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhHandHeart} from "@phosphor-icons/vue";
import Checkout from "@/components/ReadyToUse/FormWizard2/Checkout.vue";
import Financial from "@/components/ReadyToUse/FormWizard2/Financial.vue";
import Booking from "@/components/ReadyToUse/FormWizard2/Booking.vue";

const breadcrumbItems = {
    title: "form wizards 2",
    items: [
        {label: "Ready To Use", icon: PhHandHeart},
        {label: "form wizards 2", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col cols="12">
                        <Checkout />
                    </b-col>
                    <b-col cols="12">
                        <Financial />
                    </b-col>
                    <b-col cols="12">
                        <Booking />
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
