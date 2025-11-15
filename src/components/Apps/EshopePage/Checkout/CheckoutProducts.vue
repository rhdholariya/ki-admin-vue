<script setup>
import { ref, computed } from "vue";
import {
  BButton,
  BImg,
  BTable,
  BBadge,
  BInputGroup,
  BFormInput,
  BInputGroupText,
} from "bootstrap-vue-next";
import { IconGift, IconStarFilled, IconX } from "@tabler/icons-vue";

const promoCode = ref("");
const cartItems = ref([
  {
    id: 1,
    image: "/images/ecommerce/23.jpg",
    name: "Jacket",
    description: "Sky & stylist",
    size: "Medium",
    items: 2,
    price: 500,
    rating: 3,
  },
  {
    id: 2,
    image: "/images/ecommerce/25.jpg",
    name: "Shoes",
    description: "Trendy & stylist shoes",
    size: "33",
    items: 1,
    price: 350,
    rating: 2,
  },
  {
    id: 3,
    image: "/images/ecommerce/13.jpg",
    name: "Watch",
    description: "Designer golden watch",
    color: "Golden",
    items: 2,
    price: 890,
    rating: 3,
  },
]);

// 💰 Computed totals
const subtotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.items, 0)
);
const estimatedTax = 5.0;
const shippingHandling = 10.0;
const total = computed(() => subtotal.value + estimatedTax + shippingHandling);

// 🗑 Remove item
const handleRemove = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};
</script>

<template>
  <div>
    <div v-for="item in cartItems" :key="item.id" class="checkout-cart-box">
      <div class="cart-images d-flex-center flex-shrink-0">
        <a href="#">
          <b-img :src="item.image" :alt="item.name" width="80" fluid />
        </a>
      </div>

      <div class="ms-2 flex-grow-1">
        <h6 class="mb-1">
          {{ item.name }}
          <span class="text-muted">({{ item.description }})</span>
        </h6>

        <div class="mb-2">
          <IconStarFilled
              v-for="index in 5"
              :key="index"
              size="14"
              :class="index <= item.rating ? 'text-warning' : 'text-secondary'"
          />
        </div>
        <p class="mb-1">
          <span class="fw-semibold">
            {{ item.size ? "Size" : "Color" }}
          </span>
          : {{ item.size || item.color }}
        </p>

        <p class="mb-0">
          <span class="fw-semibold">Items</span>: {{ item.items }}
        </p>
      </div>

      <div class="cart-price-box">
        <b-button variant="link" @click="handleRemove(item.id)" class="p-0 mb-2">
          <IconX size="18" class="text-secondary" />
        </b-button>
        <h5 class="mb-0">${{ item.price.toFixed(2) }}</h5>
      </div>
    </div>

    <div class="pricing-details mt-4">
      <div class="mb-3">
        <b-input-group>
          <b-form-input
              v-model="promoCode"
              placeholder="Enter promo code / Gift Certificate"
          />
          <b-input-group-text class="bg-dark text-white">
            <IconGift size="18" />
          </b-input-group-text>
        </b-input-group>
      </div>

      <b-table borderless class="mb-0">
        <tbody>
        <tr>
          <td>Subtotal</td>
          <td class="text-end">${{ subtotal.toFixed(2) }}</td>
        </tr>
        <tr>
          <td>Estimated Tax</td>
          <td class="text-end">${{ estimatedTax.toFixed(2) }}</td>
        </tr>
        <tr>
          <td>Estimated Shipping & Handling</td>
          <td class="text-end">${{ shippingHandling.toFixed(2) }}</td>
        </tr>
        <tr>
          <td>Delivery Charges</td>
          <td class="text-end">-</td>
        </tr>
        <tr>
          <td>Coupon Discount</td>
          <td class="text-end">
            <b-badge variant="success">Apply</b-badge>
          </td>
        </tr>
        </tbody>
      </b-table>

      <b-table class="mb-0 mt-3">
        <tbody>
        <tr>
          <td class="fs-6 text-dark">Total</td>
          <td class="text-end text-success">${{ total.toFixed(2) }}</td>
        </tr>
        </tbody>
      </b-table>

      <b-button variant="primary" class="w-100 mt-3 rounded-1" id="next">
        Buy Order
      </b-button>
    </div>
  </div>
</template>
