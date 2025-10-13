<script setup>
import { ref } from "vue";
import {
  BRow,
  BCol,
  BImg,
  BAlert,
  BAccordion,
  BAccordionItem,
} from "bootstrap-vue-next";
import { PhGift } from "@phosphor-icons/vue";

const show = ref(true);
</script>

<template>
  <div v-if="show">
    <b-row>
      <b-col md="3" xl="4">
        <b-row>
          <b-col cols="12" class="mb-3">
            <b-img
                src="/images/ecommerce/23.jpg"
                alt="product-img"
                fluid
                class="rounded"
            />
          </b-col>
          <b-col cols="6" class="mb-3">
            <b-img
                src="/images/ecommerce/25.jpg"
                alt="product-img"
                fluid
                class="rounded"
            />
          </b-col>
          <b-col cols="6" class="mb-3 mt-sm-0">
            <b-img
                src="/images/ecommerce/13.jpg"
                alt="product-img"
                fluid
                class="rounded"
            />
          </b-col>
        </b-row>
      </b-col>

      <b-col md="9" xl="8">
        <b-row>
          <b-col md="12">
            <div class="mb-3">
              <h6 class="mb-0">Estimated Delivery Date: 27 Dec 2024</h6>
              <p class="text-muted">Items dispatched by MQ Store</p>
            </div>
            <b-alert
                variant="success"
                class="alert-light-border-success d-flex align-items-center justify-content-between"
                :show="show"
                dismissible
                @dismissed="show = false"
            >
              <div class="d-flex align-items-center">
                <PhGift class="me-2" size="18" />
                <p class="mb-0">
                  Gift wrap and personalized message on card, Only for $10.50 USD
                </p>
              </div>
              <b-button-close @click="show = false" />
            </b-alert>
          </b-col>

          <b-col cols="12">
            <h6>Product details</h6>
            <b-accordion
                class="app-accordion accordion-flush accordion-secondary app-accordion-plus"
                :model-value="0"
            >
              <b-accordion-item :value="0">
                <template #title>
                  Tom & Jerry Printed T-Shirt
                </template>
                <template #default>
                  <p><span class="text-muted fw-semibold">size</span> : medium</p>
                  <p><span class="text-muted fw-semibold">color</span> : Green</p>
                  <p><span class="text-muted fw-semibold">Items</span> : 2</p>
                  <p><span class="text-muted fw-semibold">Rating</span> : 3+</p>
                </template>
              </b-accordion-item>

              <b-accordion-item :value="1">
                <template #title>
                  Swatch Watch Irony
                </template>
                <template #default>
                  <p><span class="text-muted fw-semibold">color</span> : Dark</p>
                  <p><span class="text-muted fw-semibold">Items</span> : 2</p>
                  <p><span class="text-muted fw-semibold">Rating</span> : 4+</p>
                </template>
              </b-accordion-item>

              <b-accordion-item :value="2">
                <template #title>
                  Nike Air Max 1
                </template>
                <template #default>
                  <p><span class="text-muted fw-semibold">size</span> : large</p>
                  <p><span class="text-muted fw-semibold">color</span> : White</p>
                  <p><span class="text-muted fw-semibold">Items</span> : 1</p>
                  <p><span class="text-muted fw-semibold">Rating</span> : 5+</p>
                </template>
              </b-accordion-item>
            </b-accordion>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
