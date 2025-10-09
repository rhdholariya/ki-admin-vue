<script setup>
import { ref } from 'vue'
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
import ProductFilter from "@/components/Apps/EshopePage/Product/ProductFilter.vue";
import {products} from "@/data/app/EshopPage/Product/Eshopproduct.js";
import AppLayout from "@/views/AppLayout.vue";



const layout = ref("col-xxl-3")
const isListView = ref(false)

const handleGridLayout = () => {
  isListView.value = true
  layout.value = "col-sm-6"
}

const handleViewChange = (newLayout) => {
  isListView.value = false
  layout.value = newLayout
}
</script>



<template>
<AppLayout>
  <main>
    <BContainer fluid>
      <b-row>
        <b-col cols="12">
          <BCard no-body>
            <BCardBody>
              <div class="product-header d-flex justify-content-between gap-3 align-items-center">
                <div class="d-flex align-items-center">
                  <a
                      class="me-3 toggle-btn d-inline-block d-lg-none"
                      role="button"
                  >
                    <IconAlignJustified class="f-s-24" />
                  </a>
                  <BForm
                      class="app-form app-icon-form d-inline-block"
                      @submit.prevent
                  >
                    <div class="position-relative">
                      <BFormInput
                          type="search"
                          class="form-control"
                          placeholder="Search..."
                          aria-label="Search"
                      />
                      <IconSearch :size="18" class="text-dark" />
                    </div>
                  </BForm>
                </div>
                <div>
                  <BButton
                      variant="secondary"
                      class="product-view4 d-inline-block me-2"
                      @click="handleViewChange('col-xxl-3')"
                  >
                    IV
                  </BButton>

                  <BButton
                      variant="secondary"
                      class="product-view3 me-2"
                      @click="handleViewChange('col-md-4')"
                  >
                    III
                  </BButton>
                  <BButton
                      variant="secondary"
                      class="product-view2 d-none"
                      @click="handleViewChange('col-sm-6')"
                  >
                    II
                  </BButton>
                  <BButton
                      variant="secondary"
                      class="product-view"
                      @click="handleViewChange('col-12')"
                  >
                    I
                  </BButton>
                  <BButton
                      variant="primary"
                      class="grid-layout-view"
                      @click="handleGridLayout"
                  >
                    <IconListTree :size="22" />
                  </BButton>
                </div>
              </div>
            </BCardBody>
          </BCard>
        </b-col>

        <BCol xxl="3" lg="4" class="product-box productbox">
          <BCard no-body>
            <BCardHeader>
              <h5>Filters</h5>
            </BCardHeader>
            <BCardBody class="p-0">
              <ProductFilter />
            </BCardBody>
          </BCard>
        </BCol>

        <BCol xxl="9" lg="8">
          <div class="product-wrapper-grid">
            <BRow :class="{ 'list-view': isListView }">
              <BCol
                  v-for="product in products"
                  :key="product.id"
                  xs="12"
                  :class="layout"
              >
                <BCard class="overflow-hidden" no-body>
                  <BCardBody class="p-0">
                    <div class="product-content-box">
                      <div class="product-grid">
                        <div class="product-image">
                          <a href="#" class="image">
                            <img
                                class="pic-1"
                                :src="product.image1"
                                alt=""
                            />
                            <img
                                class="images_box"
                                :src="product.image2"
                                alt=""
                            />
                          </a>
                          <ul class="product-links">
                            <li>
                              <RouterLink
                                  target="_blank"
                                  to="/apps/e-shop/wishlist"
                                  class="bg-danger h-40 w-40 d-flex-center b-r-20"
                              >
                                <IconHeart
                                    :size="18"
                                    class="text-white"
                                />
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink
                                  target="_blank"
                                  to="/apps/e-shop/cart"
                                  class="bg-primary h-40 w-40 d-flex-center b-r-20"
                              >
                                <IconShoppingCartBolt
                                    :size="18"
                                    class="text-white"
                                />
                              </RouterLink>
                            </li>
                            <li>
                              <RouterLink
                                  target="_blank"
                                  to="/apps/e-shop/product-details"
                                  class="bg-success h-40 w-40 d-flex-center b-r-20"
                              >
                                <IconEye :size="18" class="text-white" />
                              </RouterLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="p-3">
                        <div class="d-flex justify-content-between align-items-center">
                          <RouterLink
                              to="/apps/e-shop/product-details"
                              class="m-0 f-s-20 f-w-500"
                          >
                            {{ product.title }}
                          </RouterLink>
                          <p class="text-warning m-0">
                            {{ product.rating }}
                            <span class="text-warning">
                              <IconStarFilled :size="14" />
                            </span>
                          </p>
                        </div>
                        <p class="text-secondary">
                          {{ product.description }}
                        </p>
                        <div class="pricing-box">
                          <h6>
                            ${{ product.price }}
                            <span>
                              (<del>${{ product.originalPrice }}</del>)
                            </span>
                            <span class="text-success ms-2">
                              {{ product.discount }}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </div>
        </BCol>
      </b-row>
    </BContainer>
  </main>
</AppLayout>

</template>



