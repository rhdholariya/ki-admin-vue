<script setup>
import { ref } from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BImg
} from "bootstrap-vue-next";
import { PhStack } from "@phosphor-icons/vue";
import { IconHeart, IconHeartFilled, IconStarFilled } from "@tabler/icons-vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { whishListData } from "@/data/app/EshopPage/Wishlist/WishListData.js";
import AppLayout from "@/views/AppLayout.vue";

const heartStatus = ref(new Array(whishListData.length).fill(false));

const handleIconClick = (index) => {
  // Safer for reactivity tracking
  const updated = [...heartStatus.value];
  updated[index] = !updated[index];
  heartStatus.value = updated;
};

const breadcrumbItems = {
  title: "Wishlist",
  items: [
    { label: "Apps", icon: PhStack },
    { label: "E-shop" },
    { label: "Wishlist", active: true },
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />
        <b-row class="wishlist-container">
          <b-col
              v-for="(product, index) in whishListData"
              :key="product.id || index"
              sm="6"
              lg="4"
              xl="3"
              class="mb-4"
          >
            <b-card class="overflow-hidden" no-body>
              <b-card-body class="p-0">
                <div class="product-content-box">
                  <div class="product-grid">
                    <div class="product-image">
                      <a
                          :href="product.productLink"
                          target="_blank"
                          class="image"
                      >
                        <b-img
                            class="pic-1"
                            :src="product.image1"
                            :alt="product.name"
                            fluid
                        />
                        <b-img
                            class="images_box"
                            :src="product.image2"
                            :alt="product.name"
                            fluid
                        />
                      </a>
                    </div>
                  </div>

                  <div class="p-3">
                    <div class="d-flex justify-content-between align-items-center">
                      <a
                          :href="product.productLink"
                          class="m-0 f-s-20 f-w-500"
                      >
                        {{ product.name }}
                      </a>
                      <p class="text-warning mb-0">
                        {{ product.rating }}
                        <span><IconStarFilled size="18" /></span>
                      </p>
                    </div>
                    <p class="text-secondary mb-2">{{ product.description }}</p>
                    <div class="pricing-box">
                      <h6 class="mb-0">
                        {{ product.price }}
                        <span>(<del>{{ product.originalPrice }}</del>)</span>
                        <span class="text-success ms-2">{{ product.discount }}</span>
                      </h6>
                    </div>
                  </div>

                  <span
                      class="bg-danger h-45 w-45 d-flex-center b-r-50 wishlist-like-icon"
                      @click="handleIconClick(index)"
                      role="button"
                      aria-label="Toggle Heart Icon"
                  >
                    <IconHeartFilled
                        v-if="heartStatus[index]"
                        size="18"
                        class="heart-icon text-danger-dark"
                    />
                    <IconHeart
                        v-else
                        size="18"
                        class="heart-icon text-danger-dark"
                    />
                  </span>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>
