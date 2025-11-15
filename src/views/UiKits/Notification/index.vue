<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import {PhBriefcase} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import DefaultTost from "@/components/UiKits/Notification/DefaultTost.vue";
import NotificationVariants from "@/components/UiKits/Notification/NotificationVariants.vue";
import "toastify-js/src/toastify.css";

const breadcrumbItems = {
    title: "Notification",
    items: [
        {label: "Ui-kits", icon: PhBriefcase},
        {label: "Notification", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <DefaultTost/>
                    <NotificationVariants/>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
