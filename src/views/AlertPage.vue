<script setup>
import {BRow, BContainer} from "bootstrap-vue-next";
import { PhBriefcase } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import BasicAlert from "@/components/Alert/BasicAlert.vue";
import OutlineAlert from "@/components/Alert/OutlineAlert.vue";
import LightLinkAlert from "@/components/Alert/LightLinkAlert.vue";
import IconAlert from "@/components/Alert/IconAlert.vue";
import LeftBorderAlert from "@/components/Alert/LeftBorderAlert.vue";
import LableIconAlert from "@/components/Alert/LableIconAlert.vue";
import CustomIconAlert from "@/components/Alert/CustomIconAlert.vue";
import AlertContent from "@/components/Alert/AlertContent.vue";
import LiveAlert from "@/components/Alert/LiveAlert.vue";

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
  <main>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>

    <b-container fluid>
      <b-row>
          <BasicAlert />
        <!-- Basic Alerts -->

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
</template>
