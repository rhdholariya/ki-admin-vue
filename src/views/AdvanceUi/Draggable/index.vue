<script setup>

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";
import DraggableList from "@/components/AdvanceUi/Draggable/DraggableList.vue";
import ClonicDraggableList from "@/components/AdvanceUi/Draggable/ClonicDraggableList.vue";
import { BRow } from "bootstrap-vue-next";
import HandleDraggableList from "@/components/AdvanceUi/Draggable/HandleDraggableList.vue";
import DraggableGrid from "@/components/AdvanceUi/Draggable/DraggableGrid.vue";
import DraggableCardList from "@/components/AdvanceUi/Draggable/DraggableCardList.vue";

const breadcrumbItems = {
  title: "Draggable",
  items: [
    { label: "Advance UI", icon: PhBriefcase },
    { label: "Draggable", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <!-- Breadcrumb -->
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-row class="share-list-responsive">
       <DraggableList />
         <ClonicDraggableList />
        <HandleDraggableList />
          <DraggableGrid />
      </b-row>
      <DraggableCardList />
    </main>
  </AppLayout>
</template>