<script setup>
import { BRow, BContainer, BCol } from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import DefaultTost from "@/components/UiKits/Notification/DefaultTost.vue";
import NotificationVariants from "@/components/UiKits/Notification/NotificationVariants.vue";
import "toastify-js/src/toastify.css";
// Breadcrumb data
const breadcrumbItems = {
    title: "Notification",
    items: [
        { label: "Ui-kits", icon: PhBriefcase },
        { label: "Notification", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <!-- Breadcrumb -->
            <Breadcrumb :breadcrumb="breadcrumbItems" />

            <!-- Notifications -->
             <b-container fluid>
                 <b-row>
                <!-- Default Toasts -->
                <DefaultTost />
                <!-- Notification Variants -->
                <NotificationVariants />
                 </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
