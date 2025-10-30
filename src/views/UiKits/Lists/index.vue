<script setup>
import {BContainer, BRow} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import BasicLists from "@/components/UiKits/Lists/BasicLists.vue";
import CustomLists from "@/components/UiKits/Lists/CustomLists.vue";
import ListVariants from "@/components/UiKits/Lists/ListVariants.vue";



// Breadcrumb data
const breadcrumbItems = {
    title: "List",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "List", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-row class="list-item">
                <BasicLists />
                <ListVariants/>
                <CustomLists/>
            </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
