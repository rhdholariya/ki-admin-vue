<script setup>

import AppLayout from "@/views/AppLayout.vue";
import {BContainer} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";
import ScrollpyNav from "@/components/AdvanceUi/Scrollpy/ScrollpyNav.vue";
import ScrollpyNested from "@/components/AdvanceUi/Scrollpy/ScrollpyNested.vue";
import ScrollpyGroup from "@/components/AdvanceUi/Scrollpy/ScrollpyGroup.vue";
import ScrollpyAnchors from "@/components/AdvanceUi/Scrollpy/ScrollpyAnchors.vue";

// Breadcrumb data
const breadcrumbItems = {
  title: "Scrollpy",
  items: [
    {label: "Advance UI", icon: PhBriefcase},
    {label: "Scrollpy", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>

        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <ScrollpyNav />
        <ScrollpyNested />
        <ScrollpyGroup />
        <ScrollpyAnchors />
      </b-container>
    </main>
  </AppLayout>

</template>