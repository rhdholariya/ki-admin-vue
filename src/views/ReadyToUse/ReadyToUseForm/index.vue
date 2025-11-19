<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhHandHeart} from "@phosphor-icons/vue";
import AppointmentForm from "@/components/ReadyToUse/ReadyToUseForm/AppointmentForm.vue";
import PaymentForm from "@/components/ReadyToUse/ReadyToUseForm/PaymentForm.vue";
import DepartmentForm from "@/components/ReadyToUse/ReadyToUseForm/DepartmentForm.vue";
import StudentForm from "@/components/ReadyToUse/ReadyToUseForm/StudentForm.vue";


const breadcrumbItems = {
    title: "Ready To Use Form",
    items: [
        {label: "Ready To Use", icon: PhHandHeart},
        {label: "Ready To Use Form", active: true},
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
                       <AppointmentForm />
                        <PaymentForm />
                        <DepartmentForm />
                        <StudentForm />
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
