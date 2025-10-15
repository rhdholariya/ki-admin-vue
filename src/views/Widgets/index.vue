<script setup>

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhSquaresFour} from "@phosphor-icons/vue";
import { BCol , BRow } from "bootstrap-vue-next";
import ProfitOverviewCard from "@/components/Widget/ProfitOverviewCard.vue";
import YearlyEarningCard from "@/components/Widget/YearlyEarningCard.vue";
import ProjectDetailsCard from "@/components/Widget/ProjectDetailsCard.vue";
import AiCommerceCard from "@/components/Widget/AiCommerceCard.vue";
import ProjectMeetingCard from "@/components/Widget/ProjectMeetingCard.vue";
import TotalRevenueCard from "@/components/Widget/TotalRevenueCard.vue";
import SaleOfferCard from "@/components/Widget/SaleOfferCard.vue";
import TotalEarningCard from "@/components/Widget/TotalEarningCard.vue";

const breadcrumbItems = {
  title: "Widgets",
  items: [
    {label: "Widgets", icon: PhSquaresFour},
  ],

};
</script>

<template>
  <AppLayout>
    <main>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
<b-row>
      <b-Col sm="6" lg="4" xxl="3">
        <ProfitOverviewCard />
      </b-Col>
      <b-Col sm="6" lg="4" xxl="3">
        <YearlyEarningCard />
      </b-Col>
      <b-Col sm="7" lg="6" xxl="4">
        <ProjectDetailsCard isWidgetPage />
      </b-Col>
      <b-Col sm="5" lg="4" xxl="2">
        <AiCommerceCard isWidgetPage />
      </b-Col>
      <b-Col sm="6" lg="4" xxl="3">
        <ProjectMeetingCard />
      </b-Col>
      <b-Col md="6" xxl="3" >
        <TotalRevenueCard />
      </b-Col>
      <b-Col sm="6" lg="4" xxl="3">
        <SaleOfferCard />
      </b-Col>
      <b-Col sm="6" lg="4" xxl="3">
        <TotalEarningCard />
      </b-Col>
</b-row>
    </main>
  </AppLayout>
</template>