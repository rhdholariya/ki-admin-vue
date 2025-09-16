<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicAlert from "@/components/ui-kits/Alert/BasicAlert.vue";
import OutlineAlert from "@/components/ui-kits/Alert/OutlineAlert.vue";
import LightLinkAlert from "@/components/ui-kits/Alert/LightLinkAlert.vue";
import IconAlert from "@/components/ui-kits/Alert/IconAlert.vue";
import LeftBorderAlert from "@/components/ui-kits/Alert/LeftBorderAlert.vue";
import LableIconAlert from "@/components/ui-kits/Alert/LableIconAlert.vue";
import CustomIconAlert from "@/components/ui-kits/Alert/CustomIconAlert.vue";
import AlertContent from "@/components/ui-kits/Alert/AlertContent.vue";
import LiveAlert from "@/components/ui-kits/Alert/LiveAlert.vue";
import AppLayout from "@/views/AppLayout.vue";

// Breadcrumb data
const breadcrumbItems = {
  title: "Alert",
  items: [
    {label: "Ui-kits", icon: PhBriefcase},
    {label: "Alert", active: true},
  ],
};
</script>

<template>
      <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>
            <b-row>

                <!-- Basic Alerts -->
                <BasicAlert/>
                <!-- Outline Alerts -->
                <OutlineAlert />

                <!-- Light Alerts -->
                <LightLinkAlert />

                <!-- Alerts With Icons -->
                <IconAlert />

                <!-- Alerts With Left Border -->
                <LeftBorderAlert />

                <!-- Alerts With Label Icons -->
                <LableIconAlert />

                <!-- Alerts With custom Icons -->
                <CustomIconAlert />

                <!-- Alerts With AlertContent -->
                <AlertContent />

                <!-- Alerts With LiveAlert -->
                <LiveAlert />
            </b-row>
        </b-container>
    </main>
      </AppLayout>
</template>
