<script setup>
import {BRow, BContainer, BCol} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
    import {PhHandHeart} from "@phosphor-icons/vue";
import PatientsTable from "@/components/ReadyToUse/ReadyToUseTables/PatientsTable.vue";
import StudentsTable from "@/components/ReadyToUse/ReadyToUseTables/StudentsTable.vue";
import PaymentTable from "@/components/ReadyToUse/ReadyToUseTables/PaymentTable.vue";
import JobTable from "@/components/ReadyToUse/ReadyToUseTables/JobTable.vue";
import TicketTable from "@/components/ReadyToUse/ReadyToUseTables/TicketTable.vue";




// Breadcrumb data
const breadcrumbItems = {
    title: "Ready to use table",
    items: [
        {label: "Ready To Use", icon: PhHandHeart},
        {label: "Ready to use table", active: true},
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
                       <PatientsTable />
                        <StudentsTable />
                        <PaymentTable />
                        <JobTable />
                        <TicketTable />
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
