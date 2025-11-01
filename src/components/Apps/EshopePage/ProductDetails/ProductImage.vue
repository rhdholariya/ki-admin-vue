<script setup>
import { BCard, BCardBody, BCol, BRow } from 'bootstrap-vue-next'
import { IconTag } from '@tabler/icons-vue'

// Thumbnail images
const thumbnails = [
  '/images/ecommerce/25.jpg',
  '/images/ecommerce/26.jpg',
  '/images/ecommerce/27.jpg',
  '/images/ecommerce/28.jpg'
]

// Offers list
const offers = [
  {
    title: 'Bank Offer',
    details: '10% Instant Discount on ICICI Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above'
  },
  {
    title: 'Bank Offer',
    details: 'Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above'
  }
]
</script>

<template>
  <b-col md="6" xxl="3" class="order-md-2 order-xxl-1">
    <b-card no-body>
      <b-card-body>
        <b-row class="g-2 my-2">
          <!-- Main Image -->
          <b-col cols="12">
            <div class="product-image-box">
              <img
                  src="/images/ecommerce/25.jpg"
                  class="img-fluid rounded"
                  alt="Main product image"
              />
            </div>
          </b-col>

          <!-- Thumbnails -->
          <b-col
              v-for="(img, index) in thumbnails"
              :key="index"
              cols="3"
          >
            <div class="product-image-box">
              <img
                  :src="img"
                  class="img-fluid rounded"
                  alt="Thumbnail image"
              />
            </div>
          </b-col>
        </b-row>

        <!-- Stock Info -->
        <div class="mt-4">
          <h6 class="text-danger f-s-18">
            <strong>Only 2 left in stock.</strong>
          </h6>

          <p class="mb-0 f-s-15 text-secondary">
            Sold by
            <a href="#" class="link-primary text-decoration-underline">
              Regaltos PVT. LTD
            </a>
            and quality checked by
            <a href="#" class="link-primary text-decoration-underline">
              Spruko Technologies
            </a>
          </p>

          <div class="app-divider-v dotted p-2 m-0"></div>

          <!-- Offer List -->
          <ul class="offer-details-list list-unstyled">
            <li
                v-for="(offer, idx) in offers"
                :key="idx"
                class="f-w-500 d-flex align-items-start mb-2"
            >
              <IconTag size="18" class="text-primary me-2 mt-1"/>
              <span>
                <b class="text-dark">{{ offer.title }}:</b>
                {{ offer.details }}
              </span>
            </li>
          </ul>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
