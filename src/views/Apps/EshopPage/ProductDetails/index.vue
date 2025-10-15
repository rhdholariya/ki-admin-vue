<script setup>
import { BContainer, BRow } from "bootstrap-vue-next";
import { PhStack } from "@phosphor-icons/vue";

import ProductImage from "@/components/Apps/EshopePage/ProductDetails/ProductImage.vue";
import ProductInfo from "@/components/Apps/EshopePage/ProductDetails/ProductInfo.vue";
import ProductReturns from "@/components/Apps/EshopePage/ProductDetails/ProductReturns.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {computed} from "vue";

const breadcrumbItems = computed(() => ({
  title: "Product Details",
  items: [
    { label: "Apps", icon: PhStack },
    { label: " E-shop"},
    { label: " Product Details" , active: true }
  ],
}));
</script>
<template>
<AppLayout>
  <main>
    <BContainer fluid>
      <Breadcrumb :breadcrumb="breadcrumbItems"/>
      <BRow>
        <ProductImage />
        <ProductInfo />
        <ProductReturns />
      </BRow>
    </BContainer>

  </main>
</AppLayout>
</template>