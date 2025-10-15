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
    <BContainer fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <BRow>
        <BCol lg="8">
          <CheckoutTabs />
        </BCol>

        <BCol lg="4">
          <BCard>
            <BCardBody>
              <CheckoutProducts />
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
   </main>
 </AppLayout>

</template>