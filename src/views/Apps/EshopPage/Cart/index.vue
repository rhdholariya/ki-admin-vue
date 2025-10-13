<template>
  <AppLayout>
    <main>
        <BContainer fluid>
          <Breadcrumb :breadcrumb="breadcrumbItems"/>
          <b-row>
            <b-col lg="8">
              <b-card no-body>
                <b-card-body class="p-0">
                  <div class="orders-details-datatable app-scroll table-responsive">
                    <b-table
                        class="table-bottom-border table-striped text-center align-middle mb-0"
                        :items="products"
                        :fields="tableFields"
                    >
                      <template #cell(product)="data">
                        <div class="d-flex align-items-center gap-2">
                      <span
                          class="b-1-light bg-primary-200 p-1 h-45 w-45 d-flex-center b-r-12 flex-shrink-0 overflow-hidden box-list-img">
                        <img
                            :alt="data.item.name"
                            :src="data.item.image"
                            class="img-fluid"
                            :style="{
                            height: '45px',
                            width: '45px',
                            objectFit: 'cover'
                          }"
                        />
                      </span>
                          <div>
                            <p class="mb-1 fw-bold">{{ data.item.name }}</p>
                            <p class="mb-0 small">Color: {{ data.item.color }}</p>
                            <p class="mb-0 small">Size: {{ data.item.size }}</p>
                          </div>
                        </div>
                      </template>

                      <template #cell(price)="data">
                        ${{ data.item.price.toFixed(2) }}
                      </template>

                      <template #cell(quantity)="data">
                        <div class="d-flex align-items-center justify-content-center">
                          <b-button
                              variant="danger"
                              class="h-35 w-35 d-flex-center b-r-6 p-0"
                              @click="updateQuantity(data.item.id, -1)"
                          >
                            -
                          </b-button>
                          <b-form-input
                              v-model.number="data.item.quantity"
                              type="number"
                              class="h-35 w-55 ms-1 me-1 border b-r-6 text-center"
                              style="width: 100px;"
                              min="0"
                          />
                          <b-button
                              variant="primary"
                              class="h-35 w-35 d-flex-center b-r-6 p-0"
                              @click="updateQuantity(data.item.id, 1)"
                          >
                            +
                          </b-button>
                        </div>
                      </template>

                      <template #cell(total)="data">
                        ${{ (data.item.price * data.item.quantity).toFixed(2) }}
                      </template>

                      <template #cell(action)="data">
                        <b-button
                            variant="outline-primary"
                            class="icon-btn b-r-4"
                        >
                          <IconHeart :size="18"/>
                        </b-button>
                        <b-button
                            variant="outline-danger"
                            class="icon-btn b-r-4 delete-btn"
                            @click="handleDelete(data.item.id)"
                        >
                          <PhTrash :size="18"/>
                        </b-button>
                      </template>
                    </b-table>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col lg="4">
              <b-row>
                <b-col cols="12">
                  <b-card no-body>
                    <b-card-header>
                      <h5>Price Details</h5>
                    </b-card-header>
                    <b-card-body>
                      <div class="cart-datatable table-responsive">
                        <b-table
                            class="table-bottom-border table-striped text-center align-middle mb-0 table"
                            :items="priceDetails"
                            :fields="priceFields"
                        >
                          <template #cell(value)="data">
                        <span v-if="data.item.id === 'subTotal'" id="cart-sub">
                          ${{ data.item.value.toFixed(2) }}
                        </span>
                            <span v-else-if="data.item.id === 'discount'" id="cart-discount">
                          - ${{ data.item.value.toFixed(2) }}
                        </span>
                            <span v-else-if="data.item.id === 'shipping'" id="cart-shipping">
                          ${{ data.item.value.toFixed(2) }}
                        </span>
                            <span v-else-if="data.item.id === 'tax'" id="cart-tax">
                          ${{ data.item.value.toFixed(2) }}
                        </span>
                            <span v-else-if="data.item.id === 'total'" id="cart-total">
                          ${{ data.item.value.toFixed(2) }}
                        </span>
                          </template>
                        </b-table>
                      </div>
                    </b-card-body>
                  </b-card>
                </b-col>

                <b-col md="6" xl="12">
                  <b-card class="scratch-card position-relative" no-body>
                    <b-card-body>
                  <span>
                    <i class="ph-duotone ph-gift f-s-35"></i>
                  </span>
                      <h4>Extra 10% off</h4>
                      <div class="scratch-code-box d-flex align-items-center justify-content-between">
                        <h6 class="mb-0">WIN190EGHY018</h6>
                        <div class="flex-shrink-0">
                          <b-button @click="copyCode" id="copyBtn">Copy</b-button>
                        </div>
                      </div>
                      <div class="mt-3">
                        <p class="mb-0">
                          Valid till 4 May 2024. <span>T&amp;C Apply</span>
                        </p>
                      </div>
                      <div class="scratch-overlay"></div>
                    </b-card-body>
                  </b-card>
                </b-col>

                <b-col md="6" xl="12">
                  <b-card class="gift-card">
                    <b-card-body>
                      <div class="d-flex align-items-center gap-2">
                        <img
                            src="/images/ecommerce/01.gif"
                            alt="Gift"
                            class="w-35 h-35"
                        />
                        <h6 class="text-dark fw-bold fs-6 m-0">
                          Buying for a loved one?
                        </h6>
                      </div>
                      <div>
                        <p class="text-secondary mt-2">
                          Gift wrap and personalized message on card, Only for
                          <span class="text-dark fw-medium">
                        <b>$10.50 USD</b>
                      </span>
                        </p>
                        <div class="cart-gift text-end mt-4">
                          <b-button color="primary">Add Gift</b-button>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </BContainer>
    </main>
  </AppLayout>
</template>

<script setup>
import {ref, computed} from 'vue'
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BTable,
  BButton,
  BFormInput
} from 'bootstrap-vue-next'


import {IconHeart} from '@tabler/icons-vue'
import AppLayout from "@/views/AppLayout.vue";
import {PhStack, PhTrash} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";

const products = ref([
  {
    id: 1,
    name: "Man's Shoes",
    price: 519.1,
    image: "/images/header/cart/02.png",
    color: "Black",
    size: "Large",
    quantity: 1,
  },
  {
    id: 2,
    name: "Backpacks",
    price: 600.5,
    image: "/images/header/cart/01.png",
    color: "Pink",
    size: "Medium",
    quantity: 1,
  },
  {
    id: 3,
    name: "Watch",
    price: 300.99,
    image: "/images/header/cart/05.png",
    color: "Blue",
    size: "Medium",
    quantity: 1,
  },
  {
    id: 4,
    name: "Jackets for Woman",
    price: 600.5,
    image: "/images/header/cart/03.png",
    color: "Black",
    size: "XL",
    quantity: 1,
  },
  {
    id: 5,
    name: "Airpods Pro",
    price: 600.5,
    image: "/images/header/cart/06.png",
    color: "Black",
    size: "-",
    quantity: 1,
  },
  {
    id: 6,
    name: "Women's Watch",
    price: 519.1,
    image: "/images/header/cart/02.png",
    color: "Golden",
    size: "Small",
    quantity: 1,
  },
])

const tableFields = [
  {key: 'product', label: 'Product Name'},
  {key: 'price', label: 'Price'},
  {key: 'quantity', label: 'Quantity'},
  {key: 'total', label: 'Total'},
  {key: 'action', label: 'Action'}
]


const subTotal = computed(() =>
    products.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const discount = 53
const shipping = 65
const tax = computed(() => subTotal.value * 0.125)
const total = computed(() => subTotal.value - discount + shipping + tax.value)


const priceDetails = computed(() => [
  {id: 'subTotal', label: 'Sub Total :', value: subTotal.value, isTotal: true},
  {id: 'discount', label: 'Discount:', value: discount, isTotal: false},
  {id: 'shipping', label: 'Shipping Charge :', value: shipping, isTotal: false},
  {id: 'tax', label: 'Estimated Tax (12.5%) :', value: tax.value, isTotal: false},
  {id: 'total', label: 'Total (USD) :', value: total.value, isTotal: true}
])

const priceFields = [
  {key: 'label', label: ''},
  {key: 'value', label: ''}
]

// Methods
const updateQuantity = (id, amount) => {
  const product = products.value.find(p => p.id === id)
  if (product) {
    product.quantity = Math.max(0, product.quantity + amount)
  }
}

const handleChange = (id, event) => {
  const value = parseInt(event.target.value)
  if (!isNaN(value) && value >= 0) {
    const product = products.value.find(p => p.id === id)
    if (product) {
      product.quantity = value
    }
  }
}

const handleDelete = (id) => {
  products.value = products.value.filter(p => p.id !== id)
}

const breadcrumbItems = computed(() => ({
  title: "Cart",
  items: [
    { label: "Apps", icon: PhStack },
    { label: " E-shop"},
    { label: " Cart" , active: true }
  ],
}));
</script>

