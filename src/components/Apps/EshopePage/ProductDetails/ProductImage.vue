<template>
  <BCol md="6" xxl="3" class="order-md-2 order-xxl-1">
    <BCard no-body>
      <BCardBody>
        <BRow class="g-2 my-2">
          <BCol cols="12">
            <div class="product-image-box">
              <img
                  src="/images/ecommerce/25.jpg"
                  class="img-fluid rounded"
                  alt="image"
              />
            </div>
          </BCol>

          <BCol cols="3" v-for="(img, index) in thumbnails" :key="index">
            <div class="product-image-box">
              <img
                  :src="img"
                  class="img-fluid rounded"
                  alt="image"
              />
            </div>
          </BCol>
        </BRow>

        <div class="mt-4">
          <h6 class="text-danger f-s-18">
            <b>Only 2 left in stock.</b>
          </h6>

          <p class="mb-0 f-s-15 text-secondary">
            Sold by
            <a href="#" class="link-primary text-decoration-underline">
              Regaltos PVT.LTD
            </a>
            and quality checked by
            <a href="#" class="link-primary text-decoration-underline">
              Spruko Tchnologies
            </a>
          </p>

          <div class="app-divider-v dotted p-2 m-0"></div>

          <ul class="offer-details-list">
            <li class="f-w-500" v-for="(offer, idx) in offers" :key="idx">
              <IconTag size="18" class="text-primary me-1" />
              <b class="text-dark">{{ offer.title }}</b>
              {{ offer.details }}
            </li>
          </ul>
        </div>
      </BCardBody>
    </BCard>
  </BCol>
</template>

<script setup>
import { BCard, BCardBody, BCol, BRow } from "bootstrap-vue-next";
import { IconTag } from "@tabler/icons-vue";

// Thumbnail images
const thumbnails = [
  "/images/ecommerce/25.jpg",
  "/images/ecommerce/26.jpg",
  "/images/ecommerce/27.jpg",
  "/images/ecommerce/28.jpg",
];


const offers = [
  {
    title: "Bank Offer",
    details:
        " 10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above",
  },
  {
    title: "Bank Offer",
    details:
        " Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above",
  },
];
</script>

