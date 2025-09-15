<script setup>
import { ref, computed } from 'vue'
import { BButton, BOffcanvas } from 'bootstrap-vue-next'

import {
  PhShoppingCartSimple,
  PhTrash,
  PhStar,
  PhShoppingBagOpen,
  PhX
} from '@phosphor-icons/vue'

// Offcanvas visibility
const showCart = ref(false)

// Cart items data
const cartItems = ref([
  {
    id: 1,
    name: "Backpacks",
    rating: 3,
    size: "M",
    color: "Pink",
    price: 600.50,
    quantity: 1,
    image: "../images/header/cart/01.png"
  },
  {
    id: 2,
    name: "Women's Watch",
    rating: 4,
    size: "S",
    color: "Rose Gold",
    price: 519.10,
    quantity: 2,
    image: "../images/header/cart/05.png"
  },
  {
    id: 3,
    name: "Sandals",
    rating: 5,
    size: "8",
    color: "White",
    price: 390.00,
    quantity: 2,
    image: "../images/header/cart/04.png"
  },
  {
    id: 4,
    name: "Jackets",
    rating: 3,
    size: "XL",
    color: "Blue",
    price: 300.00,
    quantity: 2,
    image: "../images/header/cart/03.png"
  },
  {
    id: 5,
    name: "Shoes",
    rating: 3,
    size: "9",
    color: "White",
    price: 450.00,
    quantity: 1,
    image: "../images/header/cart/02.png"
  }
])

// Compute total
const total = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
)

// Remove item by id
function removeItem(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}

// Toggle offcanvas
function toggleCart() {
  showCart.value = !showCart.value
}
</script>

<template>
  <div>
    <!-- Cart Toggle Button -->
    <b-button variant="light-secondary" class="position-relative rounded-circle p-2" @click="toggleCart">
      <PhShoppingCartSimple size="22" />
      <span class="position-absolute translate-middle badge rounded-pill bg-danger badge-notification">
        {{ cartItems.length }}
      </span>
    </b-button>

    <!-- Cart Offcanvas -->
    <b-offcanvas v-model="showCart" placement="end" class="cart-offcanvas">
      <template #header class="justify-content-between">
        <h5 class="offcanvas-title">Cart</h5>
        <b-button aria-label="Close" class="btn-close" type="button" @click="toggleCart"></b-button>
      </template>

      <div class="offcanvas-body app-scroll p-0">
          <div v-if="cartItems.length" class="head-container">
            <div v-for="item in cartItems" :key="item.id" class="head-box d-flex align-items-center p-3 border-bottom">
              <span class="b-1-light bg-light-primary h-45 w-45 d-flex-center b-r-6">
                <img :src="item.image" alt="cart item" class="img-fluid p-1" />
              </span>
              <div class="flex-grow-1 ms-2">
                <a :href="'product_details.html'" target="_blank" class="mb-0 f-w-600 f-s-16 text-dark">
                  {{ item.name }} ({{ item.rating }}<PhStar size="12" class="text-warning" />)
                </a>
                <div class="text-dark">
                  <span class="text-secondary f-w-400">size</span>: {{ item.size }}
                  <span class="text-secondary f-w-400 ms-2">color</span>: {{ item.color }}
                </div>
              </div>
              <div class="text-end">
                <PhTrash size="18" class="text-danger cursor-pointer" @click="removeItem(item.id)" />
                <p class="text-muted f-w-500 mb-0">${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
              </div>
            </div>
          </div>

          <!-- Empty Cart Message -->
          <div v-else class="text-center py-4 px-3">
            <PhShoppingBagOpen size="50" class="text-primary" />
            <h6 class="mb-2">Your Cart is Empty</h6>
            <p class="text-secondary mb-2">Add some items :)</p>
            <b-button variant="light-primary" size="sm" href="product_details.html">Shop Now</b-button>
          </div>
      </div>

      <template #footer>
        <div class="p-3">
          <h6 class="text-muted f-w-600">Total <span class="float-end text-primary">${{ total }}</span></h6>
          <div class="d-flex gap-2 mt-3">
            <b-button variant="primary" href="cart.html" target="_blank">
              <i class="ti ti-eye"></i> View Cart
            </b-button>
            <b-button variant="success" href="checkout.html" target="_blank">
              Checkout <i class="ti ti-shopping-cart"></i>
            </b-button>
          </div>
        </div>
      </template>
    </b-offcanvas>
  </div>
</template>
