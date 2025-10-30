<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhHandHeart} from "@phosphor-icons/vue";
import PaymentWizard from "@/components/ReadyToUse/FormWizard1/PaymentWizard.vue";
import AccountWizard from "@/components/ReadyToUse/FormWizard1/AccountWizard.vue";
import BusinessWizard from "@/components/ReadyToUse/FormWizard1/BusinessWizard.vue";



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
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col cols="12">
                        <PaymentWizard />
                        <AccountWizard />
                        <BusinessWizard />
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
