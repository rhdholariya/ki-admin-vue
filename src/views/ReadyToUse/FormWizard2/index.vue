<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhHandHeart} from "@phosphor-icons/vue";
import Checkout from "@/components/ReadyToUse/FormWizard2/Checkout.vue";
import Financial from "@/components/ReadyToUse/FormWizard2/Financial.vue";
import Booking from "@/components/ReadyToUse/FormWizard2/Booking.vue";




// Breadcrumb data
const breadcrumbItems = {
    title: "form wizards 1",
    items: [
        {label: "Ready To Use", icon: PhHandHeart},
        {label: "form wizards 1", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col cols="12">
                        <Checkout />
                        <Financial />
                        <Booking />
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
