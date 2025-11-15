<script setup>
import {
  BCard,
  BCardBody,
  BContainer,
  BRow,
  BCol
} from "bootstrap-vue-next";
import { PhStack } from "@phosphor-icons/vue";
import CheckoutProducts from "@/components/Apps/EshopePage/Checkout/CheckoutProducts.vue";
import CheckoutTabs from "@/components/Apps/EshopePage/Checkout/CheckoutTabs.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

const breadcrumbItems = {
  title: "Checkout",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "E-shop" },
    { label: "Checkout", active: true },
  ],
};

</script>

<template>
 <AppLayout>
   <main>
    <b-container fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <b-row>
        <b-col lg="8">
          <CheckoutTabs />
        </b-col>

        <b-col lg="4">
          <b-card>
            <b-card-body>
              <CheckoutProducts />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
   </main>
 </AppLayout>

</template>