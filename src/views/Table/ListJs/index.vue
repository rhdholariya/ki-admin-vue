<script setup>
import {
    BContainer, BRow,

} from "bootstrap-vue-next";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {
    PhTable

} from "@phosphor-icons/vue";
import EmployeeTable from "@/components/Table/ListJs/EmployeeTable.vue";
import ListTable from "@/components/Table/ListJs/ListTable.vue";
import TablesLists from "@/components/Table/ListJs/TablesLists.vue";



// Breadcrumb data
const breadcrumbItems = {
    title: "List Js",
    items: [
        {label: " Table", icon: PhTable},
        {label: "List Js", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                     <EmployeeTable />
                     <ListTable />
                     <TablesLists />
                 </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
