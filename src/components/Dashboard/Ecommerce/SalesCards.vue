<script setup>
import { BBadge, BCol } from 'bootstrap-vue-next'
import SaleOfferCard from '@/components/Widget/SaleOfferCard.vue'
import TotalEarningCard from '@/components/Widget/TotalEarningCard.vue'

const recentPurchases = [
  { id: 1, name: 'Wireless Headphones', brand: 'SoundMax', image: '/images/dashboard/ecommerce-dashboard/product/02.png', price: '$129.99' },
  { id: 2, name: 'Smart Watch', brand: 'TechGear', image: '/images/dashboard/ecommerce-dashboard/product/03.png', price: '$199.99' },
  { id: 3, name: 'Smart Watch', brand: 'TechWear', image: '/images/dashboard/ecommerce-dashboard/product/01.png', price: '$199' }
]

const topBrands = [
  { id: 1, name: 'Nike', category: 'Sportswear', image: '/images/dashboard/ecommerce-dashboard/product/04.png', rating: '4.8', ratingColor: 'success' },
  { id: 2, name: 'Apple', category: 'Electronics', image: '/images/dashboard/ecommerce-dashboard/product/06.png', rating: '4.9', ratingColor: 'success' },
  { id: 3, name: 'TrekVibe', category: "Bag's", image: '/images/dashboard/ecommerce-dashboard/product/07.png', rating: '74.30%', ratingColor: 'light-danger' }
]
</script>

<template>
  <!-- Earning Card -->
  <BCol sm="5" lg="4" xxl="3">
    <TotalEarningCard />
  </BCol>

  <!-- Recent Purchases -->
  <BCol sm="6" lg="4" xxl="3">
    <ul class="box-list mb-4">
      <li class="b-s-4-primary"><h5>Recent Purchases</h5></li>
      <li
          v-for="item in recentPurchases"
          :key="item.id"
          class="d-flex align-items-center justify-between gap-2"
      >
        <div class="b-1-light bg-primary-200 p-1 h-40 w-40 d-flex-center b-r-12 flex-shrink-0 overflow-hidden box-list-img">
          <img :alt="item.name" class="img-fluid" :src="item.image" />
        </div>
        <div class="mg-s-45 flex-grow-1">
          <h6 class="mb-0 text-dark-800 f-w-500 txt-ellipsis-1">{{ item.name }}</h6>
          <p class="text-secondary-800 mb-0">{{ item.brand }}</p>
        </div>
        <BBadge bg="light-primary">{{ item.price }}</BBadge>
      </li>
    </ul>
  </BCol>

  <!-- Top Brands -->
  <BCol sm="6" lg="4" xxl="3">
    <ul class="list-box top-brand-list mb-4">
      <li class="b-s-4-primary"><h5>Top Brands</h5></li>
      <li
          v-for="brand in topBrands"
          :key="brand.id"
          class="d-flex align-items-center"
      >
        <div class="b-1-light bg-primary-200 p-1 h-40 w-40 d-flex-center b-r-12 flex-shrink-0 overflow-hidden box-list-img">
          <img :alt="brand.name" class="img-fluid" :src="brand.image" />
        </div>
        <div class="flex-grow-1 mg-s-45">
          <h6 class="mb-0 f-w-500 text-dark-800 txt-ellipsis-1">{{ brand.name }}</h6>
          <p class="text-secondary-800 mb-0">{{ brand.category }}</p>
        </div>
        <div class="text-end">
          <BBadge :bg="brand.ratingColor">{{ brand.rating }}</BBadge>
        </div>
      </li>
    </ul>
  </BCol>

  <!-- Offer Card -->
  <BCol sm="6" lg="4" xxl="3">
    <SaleOfferCard />
  </BCol>
</template>
