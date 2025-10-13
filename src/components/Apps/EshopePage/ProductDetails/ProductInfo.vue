<template>
  <b-col xxl="6" class="order-xxl-2">
    <b-card no-body>
      <b-card-body>
        <div class="product-details-contentbox">
          <!-- Product title -->
          <h4>Trendy & Stylish Loafers For Men</h4>

          <!-- Ratings -->
          <div class="mt-2 d-flex align-items-center gap-1">
            <IconStarFilled
                v-for="n in 3"
                :key="'filled-' + n"
                size="20"
                class="text-warning"
            />
            <IconStarFilled
                v-for="n in 2"
                :key="'muted-' + n"
                size="20"
                class="text-muted"
            />
            <h6 class="mb-0 ms-2 text-secondary">
              (<span class="fw-bold">4.50k</span> Review)
            </h6>
          </div>

          <!-- Price -->
          <div class="mt-4">
            <h3>
              $26.00 <span class="text-muted fs-6">(54% OFF)</span>
            </h3>
          </div>

          <hr class="my-4" />

          <!-- Sizes & Colors -->
          <div class="product-detailbox">
            <!-- Sizes -->
            <div class="mb-4">
              <h5>Size:</h5>
              <div class="form-selectgroup d-flex flex-wrap gap-2">
                <label
                    v-for="size in sizes"
                    :key="size"
                    class="select-items"
                >
                  <input
                      type="checkbox"
                      class="select-input"
                      :checked="selectedSizes.includes(size)"
                      @change="toggleSize(size)"
                  />
                  <span class="select-box">
                    <span class="selectitem">{{ size }}</span>
                  </span>
                </label>
              </div>
            </div>

            <!-- Colors -->
            <div>
              <h5>Color:</h5>
              <div class="d-flex flex-wrap">
                <label
                    v-for="color in colors"
                    :key="color"
                    class="check-box"
                >
                  <input
                      type="radio"
                      name="color-radio"
                      :value="color"
                      v-model="selectedColor"
                  />
                  <span :class="`radiomark check-${color} ms-2`"></span>
                </label>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="mt-4">
            <h5>Description:</h5>
            <p class="mt-2">
              A product description is a piece of writing that conveys the
              features and benefits of a product, ranging from basic facts to
              stories that make a product compelling to an ideal buyer.
            </p>
            <p>
              Aside from educating and enticing potential customers, the best
              descriptions can help you differentiate your product and brand
              from your competitors by putting forward your most salient
              features and benefits.
            </p>
          </div>

          <!-- Rating Summary -->
          <div class="mt-4">
            <div class="d-flex align-items-center">
              <IconStarFilled size="30" class="text-warning me-2" />
              <div>
                <h5 class="mb-0">3.2 out of 5</h5>
                <p class="mb-0 text-muted">Based on (20,435) ratings</p>
              </div>
            </div>

            <div class="mt-3">
              <div
                  v-for="(rating, index) in ratingData"
                  :key="index"
                  class="d-flex align-items-center gap-2 mb-2"
              >
                <span class="fw-bold">{{ rating.star }}</span>
                <IconStarFilled size="12" class="text-warning" />
                <b-progress
                    :value="rating.percent"
                    :variant="rating.color"
                    class="flex-grow-1"
                    height="8px"
                />
                <span class="text-muted">
                  ({{ rating.count.toLocaleString() }})
                </span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="product-details-btn text-end mt-4">
            <router-link to="/apps/e-shop/cart" class="btn btn-primary me-2">
              Add To Cart
            </router-link>
            <router-link to="/apps/e-shop/checkout" class="btn btn-success me-2">
              Buy Now
            </router-link>
            <router-link to="/apps/e-shop/wishlist" class="btn btn-danger">
              Add to Wishlist
            </router-link>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>

<script setup>
import { ref } from "vue";
import { BCard, BCardBody, BCol, BProgress } from "bootstrap-vue-next";
import { IconStarFilled } from "@tabler/icons-vue";
import { RouterLink } from "vue-router";

const ratingData = [
  { star: 5, count: 4567, percent: 74, color: "primary" },
  { star: 4, count: 2765, percent: 65, color: "secondary" },
  { star: 3, count: 1682, percent: 40, color: "success" },
  { star: 2, count: 2380, percent: 25, color: "warning" },
  { star: 1, count: 19211, percent: 10, color: "danger" },
];

const sizes = [6, 7, 25, 30, 40];
const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const selectedSizes = ref([6]);
const selectedColor = ref("primary");

function toggleSize(size) {
  if (selectedSizes.value.includes(size)) {
    selectedSizes.value = selectedSizes.value.filter((s) => s !== size);
  } else {
    selectedSizes.value.push(size);
  }
}
</script>
