<script setup>
import { ref } from "vue";
import {
  PhShoppingBagOpen, PhShoppingCart,
  PhShoppingCartSimple, PhTrash , PhStar
} from "@phosphor-icons/vue";


const cartItems = ref([
  {
    id: 1,
    name: "Backpacks",
    count: 3,
    showIcon: true,
    size: "M",
    color: "Pink",
    price: 600.5,
    qty: 1,
    img: "/public/images/header/cart/01.png",
  },
  {
    id: 2,
    count: 4,
    showIcon: true,
    name: "Women's Watch",
    size: "S",
    color: "Rose Gold",
    price: 519.1,
    qty: 2,
    img: "/public/images/header/cart/05.png",
  },
  {
    id: 3,
    count: 5,
    showIcon: true,
    name: "Sandals",
    size: "8",
    color: "White",
    price: 390,
    qty: 2,
    img: "/public/images/header/cart/04.png",
  },
  {
    id: 4,
    count: 3,
    showIcon: true,
    name: "jackets",
    size: "XL",
    color: "Blue",
    price: 300,
    qty: 2,
    img: "/public/images/header/cart/03.png",
  },
  {
    id: 5,
    count: 3,
    showIcon: true,
    name: "Shoes",
    size: "9",
    color: "White",
    price: 450,
    qty: 2,
    img: "/public/images/header/cart/02.png",
  },
]);


const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const totalPrice = () => {
  return cartItems.value
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
};
</script>

<template>
  <!-- Cart Toggle Button -->
  <a
      href="#"
      role="button"
      class="d-block head-icon position-relative bg-light-dark rounded-circle f-s-22 p-2"
      data-bs-toggle="offcanvas"
      data-bs-target="#cartcanvasRight"
      aria-controls="cartcanvasRight"
  >
    <PhShoppingCartSimple size="22" weight="regular" />
    <span
        class="position-absolute translate-middle badge rounded-pill bg-danger badge-notification"
    >
      {{ cartItems.length }}
    </span>
  </a>

  <!-- Offcanvas Sidebar -->
  <div
      class="cart-offcanvas offcanvas offcanvas-end"
      tabindex="-1"
      id="cartcanvasRight"
      aria-labelledby="cartcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <div class="offcanvas-title h5" id="cartcanvasRightLabel">Shopping Cart</div>
      <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
      ></button>
    </div>

    <div class="offcanvas-body p-0">
      <div class="head-container">
        <div v-if="cartItems.length > 0">
          <!-- Cart Items -->
          <div
              v-for="item in cartItems"
              :key="item.id"
              class="head-box d-flex align-items-start mb-3"
          >
            <span class="b-1-light bg-light-primary h-45 w-45 d-flex-center b-r-6">
              <img :src="item.img" :alt="item.name" class="img-fluid p-1" />
            </span>

            <div class="flex-grow-1 ms-2">
              <a class="mb-0 f-w-600 f-s-16 d-flex align-items-center" href="product_details.html" target="_blank">
                {{ item.name }}
                <span v-if="item.showIcon" class="f-w-600">
                  ({{ item.count }}
                  <PhStar size="12" weight="fill" class="text-warning"/>)
                </span>
              </a>
              <div>
                <span class="text-dark">
                  <span class="text-secondary f-w-400">size</span> :
                  {{ item.size }}
                </span>
                <span class="text-dark ms-2">
                  <span class="text-secondary f-w-400">color</span> :
                  {{ item.color }}
                </span>
              </div>
            </div>

            <div class="text-end">
              <!-- Trash Icon -->
              <PhTrash
                  size="18"
                  weight="regular"
                  class="text-danger close-btn"
                  role="button"
                  @click="removeItem(item.id)"
              />
              <p class=" mb-0">
                ${{ item.price.toFixed(2) }} × {{ item.qty }}
              </p>
            </div>
          </div>
        </div>

        <!-- Empty Cart -->
        <div v-else class="hidden-massage py-4 px-3 text-center">
          <PhShoppingBagOpen size="50" weight="duotone" class="text-primary" />
          <h6 class="mb-0">Your Cart is Empty</h6>
          <p class="text-secondary mb-0">Add some items :)</p>
          <a class="btn btn-light-primary btn-xs mt-2" href="product_details.html">
            Shop Now
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div v-if="cartItems.length > 0" class="offcanvas-footer">
      <div class="head-box-footer p-3">
        <div class="mb-4">
          <h6 class="text-muted f-w-600">
            Total
            <span class="float-end text-primary">${{ totalPrice() }}</span>
          </h6>
        </div>
        <div class="header-cart-btn d-flex justify-content-between">
          <a class="btn btn-primary" href="./cart.html" target="_blank">
            <Eye size="18" /> View Cart
          </a>
          <a class="btn btn-success" href="./checkout.html" target="_blank">
            Checkout <PhShoppingCart size="18" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
