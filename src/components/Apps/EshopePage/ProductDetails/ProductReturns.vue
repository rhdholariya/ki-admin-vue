<script setup>
import { BCol, BCard, BCardBody, BTable, BImg, BButton } from "bootstrap-vue-next";
import { RouterLink } from "vue-router";

const productReviews = [
  {
    name: "Elyssa Moen",
    initials: "EM",
    review:
        "I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.",
    avatar: null,
  },
  {
    name: "Mark",
    avatar: "/images/avatar/16.png",
    review: '"This Top is not only stylish but also incredibly warm."',
    images: ["/images/ecommerce/01.jpg", "/images/ecommerce/02.jpg"],
  },
];

const productList = [
  {
    title: "Sports shoes",
    sku: "#AB9875",
    price: "$450",
    image: "/images/dashboard/ecommerce-dashboard/product/product-01.jpg",
  },
  {
    title: "Smartwatch",
    sku: "#AB8394",
    price: "$920",
    image: "/images/dashboard/ecommerce-dashboard/product/product-02.jpg",
  },
  {
    title: "T-shirt",
    sku: "#AB3804",
    price: "$100",
    image: "/images/dashboard/ecommerce-dashboard/product/product-06.jpg",
  },
  {
    title: "Airpods",
    sku: "#AB2903",
    price: "$10,900",
    image: "/images/dashboard/ecommerce-dashboard/product/product-05.jpg",
  },
];
</script>


<template>
  <b-col md="6" xxl="3" class="order-md-1 order-xxl-3">
    <b-card no-body>
      <b-card-body>
        <div class="product-details-contentbox">
          <!-- Returns Section -->
          <section>
            <h5>Returns:</h5>
            <p class="text-muted">
              Returns is a scheme provided by respective sellers directly under this policy...
            </p>
          </section>

          <!-- Reviews -->
          <div class="mt-4">
            <div v-for="(review, idx) in productReviews" :key="idx" class="mb-3">
              <div class="d-flex align-items-center justify-content-between position-relative">
                <div
                    v-if="review.avatar"
                    class="h-35 w-35 d-flex-center b-r-50 overflow-hidden text-bg-secondary position-absolute"
                >
                  <b-img :src="review.avatar" alt="avatar" fluid />
                </div>
                <span
                    v-else
                    class="bg-danger h-35 w-35 d-flex-center b-r-50 position-absolute text-white"
                >
              {{ review.initials }}
            </span>

                <span class="fs-6 fw-medium text-secondary ms-5">{{ review.name }}</span>
                <i class="ti ti-star fs-5"></i>
              </div>

              <p class="text-muted mt-2 mb-0">{{ review.review }}</p>

              <div v-if="review.images" class="mt-3 text-end">
                <router-link
                    v-for="(img, i) in review.images"
                    :key="i"
                    to="/apps/e-shop/product"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <b-img :src="img" alt="" class="w-40 b-r-5 me-1" />
                </router-link>
              </div>

              <div v-if="idx !== productReviews.length - 1" class="app-divider-v dotted py-3"></div>
            </div>
          </div>

          <!-- Products -->
          <section class="mt-4">
            <h5>Products:</h5>
            <b-table responsive class="table-bottom-border align-middle products-data-table mt-3">
              <tbody>
              <tr v-for="(product, idx) in productList" :key="idx">
                <td>
                  <div class="position-relative">
                    <b-img
                        :src="product.image"
                        :alt="product.title"
                        class="w-45 h-45 position-absolute rounded"
                    />
                    <div class="mg-s-40">
                      <h6 class="text-dark fw-semibold text-truncate">{{ product.title }}</h6>
                      <p class="text-secondary mb-0">{{ product.sku }}</p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <h6 class="text-success">{{ product.price }}</h6>
                </td>
              </tr>
              </tbody>
            </b-table>

            <b-button variant="primary" class="w-100" href="/apps/e-shop/product" target="_blank">
              View All Products
            </b-button>
          </section>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>



