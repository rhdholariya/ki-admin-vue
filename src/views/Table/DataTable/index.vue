<script setup>
import {BContainer,} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhTable,} from "@phosphor-icons/vue";
import DataTables from "@/components/Table/DataTable/DataTable.vue";
import RowBorderTable from "@/components/Table/DataTable/RowBorderTable.vue";
import ButtonsDatatable from "@/components/Table/DataTable/ButtonsDatatable.vue";
import CallbackDatatable from "@/components/Table/DataTable/CallbackDatatable.vue";
const breadcrumbItems = {
    title: "Data Table",
    items: [
        {label: " Table", icon: PhTable},
        {label: "Data Table", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <DataTables />
                <RowBorderTable />
                <ButtonsDatatable />
                <CallbackDatatable />
            </b-container>
        </main>
    </AppLayout>
</template>
