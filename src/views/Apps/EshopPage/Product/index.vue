<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BButton,
  BForm,
  BFormInput
} from 'bootstrap-vue-next'

import {
  IconAlignJustified,
  IconEye,
  IconHeart,
  IconListTree,
  IconSearch,
  IconShoppingCartBolt,
  IconStarFilled
} from '@tabler/icons-vue'

import ProductFilter from "@/components/Apps/EshopePage/Product/ProductFilter.vue"
import { products as productData } from "@/data/app/EshopPage/Product/Eshopproduct.js"
import AppLayout from "@/views/AppLayout.vue"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhStack} from "@phosphor-icons/vue";

// Reactive states
const layout = ref("col-xxl-3")
const isListView = ref(false)
const searchQuery = ref("")
const isSidebarOpen = ref(false)

// Methods
const handleViewChange = (newLayout) => {
  layout.value = newLayout
  isListView.value = false
}

const handleGridLayout = () => {
  layout.value = "col-sm-6"
  isListView.value = true
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Computed filtered products
const products = computed(() => {
  if (!searchQuery.value) return productData
  return productData.filter(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const breadcrumbItems = {
  title: "Product",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "E-shop" },
    { label: "Product", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <BContainer fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row>
          <b-col cols="12">
            <b-card no-body>
              <b-card-body>
                <div class="product-header d-flex justify-content-between gap-3 align-items-center">
                  <div class="d-flex align-items-center">
                    <!-- Sidebar toggle -->
                    <a
                        class="me-3 toggle-btn d-inline-block d-lg-none"
                        role="button"
                        @click="toggleSidebar"
                    >
                      <IconAlignJustified class="f-s-24" />
                    </a>
                    <!-- Search -->
                    <b-form class="app-form app-icon-form d-inline-block" @submit.prevent>
                      <div class="position-relative">
                        <b-form-input
                            v-model="searchQuery"
                            type="search"
                            class="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <IconSearch :size="18" class="text-dark position-absolute" style="right:10px; top:50%; transform:translateY(-50%)"/>
                      </div>
                    </b-form>
                  </div>
                  <!-- Layout buttons -->
                  <div>
                    <b-button variant="secondary" class="me-2" @click="handleViewChange('col-xxl-3')">IV</b-button>
                    <b-button variant="secondary" class="me-2" @click="handleViewChange('col-md-4')">III</b-button>
                    <b-button variant="secondary" class="d-none" @click="handleViewChange('col-sm-6')">II</b-button>
                    <b-button variant="secondary" class="me-2" @click="handleViewChange('col-12')">I</b-button>
                    <b-button variant="primary" @click="handleGridLayout">
                      <IconListTree :size="22"/>
                    </b-button>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Filter Sidebar -->
          <b-col :class="[ 'product-box productbox', { 'd-none d-lg-block': !isSidebarOpen } ]" xxl="3" lg="4">
            <b-card no-body>
              <b-card-header><h5>Filters</h5></b-card-header>
              <b-card-body class="p-0">
                <ProductFilter />
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Products -->
          <b-col xxl="9" lg="8">
            <div class="product-wrapper-grid">
              <b-row :class="{ 'list-view': isListView }">
                <b-col
                    v-for="product in products"
                    :key="product.id"
                    xs="12"
                    :class="layout"
                >
                  <b-card class="overflow-hidden" no-body>
                    <b-card-body class="p-0">
                      <div class="product-content-box">
                        <div class="product-grid">
                          <div class="product-image">
                            <a href="#" class="image">
                              <img :src="product.image1" alt="" class="pic-1"/>
                              <img :src="product.image2" alt="" class="images_box"/>
                            </a>
                            <ul class="product-links">
                              <li>
                                <RouterLink to="/apps/e-shop/wishlist" target="_blank" class="bg-danger h-40 w-40 d-flex-center b-r-20">
                                  <IconHeart :size="18" class="text-white"/>
                                </RouterLink>
                              </li>
                              <li>
                                <RouterLink to="/apps/e-shop/cart" target="_blank" class="bg-primary h-40 w-40 d-flex-center b-r-20">
                                  <IconShoppingCartBolt :size="18" class="text-white"/>
                                </RouterLink>
                              </li>
                              <li>
                                <RouterLink to="/apps/e-shop/product-details" target="_blank" class="bg-success h-40 w-40 d-flex-center b-r-20">
                                  <IconEye :size="18" class="text-white"/>
                                </RouterLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="p-3">
                          <div class="d-flex justify-content-between align-items-center">
                            <RouterLink to="/apps/e-shop/product-details" class="m-0 f-s-20 f-w-500">
                              {{ product.title }}
                            </RouterLink>
                            <p class="text-warning m-0">
                              {{ product.rating }} <IconStarFilled :size="14" class="text-warning"/>
                            </p>
                          </div>
                          <p class="text-secondary">{{ product.description }}</p>
                          <div class="pricing-box">
                            <h6>
                              ${{ product.price }}
                              <span>(<del>${{ product.originalPrice }}</del>)</span>
                              <span class="text-success ms-2">{{ product.discount }}</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </BContainer>
    </main>
  </AppLayout>
</template>
