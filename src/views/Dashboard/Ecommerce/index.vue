<script setup>

import AppLayout from "@/views/AppLayout.vue";
import EcommerceCards from "@/components/Dashboard/Ecommerce/EcommerceCards.vue";
import SalesCards from "@/components/Dashboard/Ecommerce/SalesCards.vue";
import ProductsCards from "@/components/Dashboard/Ecommerce/ProductsCards.vue";
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <div class="row">
          <EcommerceCards/>
          <SalesCards/>
          <ProductsCards/>
        </div>
      </b-container>
    </main>
  </AppLayout>
</template>