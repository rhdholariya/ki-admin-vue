<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";
import TooltipsValidation from "@/components/FormsElements/FormValidation/TooltipsValidation.vue";
import CustomValidation from "@/components/FormsElements/FormValidation/CustomValidation.vue";
import DefaultsValidation from "@/components/FormsElements/FormValidation/DefaultsValidation.vue";
import SupportedValidation from "@/components/FormsElements/FormValidation/SupportedValidation.vue";


// Breadcrumb data
const breadcrumbItems = {
    title: "Form Validation",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Form Validation", active: true},
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
                        <TooltipsValidation/>
                        <CustomValidation/>
                        <DefaultsValidation/>
                        <SupportedValidation/>
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
