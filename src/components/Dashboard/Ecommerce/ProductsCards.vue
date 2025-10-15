<script setup>
import {ref, onMounted, onUnmounted, reactive} from 'vue'
import {
  BCard,
  BCardBody,
} from 'bootstrap-vue-next'
import FsLightbox from 'fslightbox-vue'
import AiCommerceCard from "@/components/Widget/AiCommerceCard.vue";
import TotalRevenueCard from "@/components/Widget/TotalRevenueCard.vue";



const productImages = [
  {
    id: 1,
    src: '/images/dashboard/ecommerce-dashboard/product/product-01.jpg',
    alt: 'Product image 1',
    rounded: true,
    ribbon: null
  },
  {
    id: 2,
    src: '/images/dashboard/ecommerce-dashboard/product/product-02.jpg',
    alt: 'Product image 2',
    rounded: false,
    ribbon: 'Sale'
  },
  {
    id: 3,
    src: "/images/dashboard/ecommerce-dashboard/product/product-03.jpg",
    alt: "Product 3",
  },
  {
    id: 4,
    src: "/images/dashboard/ecommerce-dashboard/product/product-04.jpg",
    alt: "Product 4",
  },
  {
    id: 5,
    src: "/images/dashboard/ecommerce-dashboard/product/product-05.jpg",
    alt: "Product 5",
  },
  {
    id: 6,
    src: "/images/dashboard/ecommerce-dashboard/product/product-06.jpg",
    alt: "Product 6",
    rounded: true,
  },
  // Add more product images as needed
]

const tagOptions = reactive([
  { label: 'New Arrivals', checked: true },
  { label: 'Best Sellers', checked: false },
  { label: 'Trending', checked: true },
  { label: 'Exclusive', checked: false },
  { label: 'On Sale', checked: true },
  { label: 'Free Shipping', checked: false },
])


const lightboxToggler = ref(false)
const lightboxSources = ref([])

const openLightbox = (src) => {
  lightboxSources.value = [src]
  lightboxToggler.value = !lightboxToggler.value
}

onMounted(() => {

})

onUnmounted(() => {

})
</script>


<template>
  <div class="row">
    <!-- AiCommerce Card -->
    <div class="col-sm-6 col-md-4 col-xxl-2 order-3-md">
      <AiCommerceCard />
    </div>

    <!-- Revenue Chart Card -->
    <div class="col-md-6 col-lg-4">
      <TotalRevenueCard />
    </div>

    <!-- Product Gallery Card -->
    <div class="col-md-8 col-xxl-6">
      <BCard class="ecommerce-product-box" no-body>
        <BCardBody>
          <div class="row">
            <!-- Product Images -->
            <div class="col-sm-5">
              <div class="row g-2 h-100">
                <div
                    v-for="image in productImages"
                    :key="image.id"
                    :class="`col-${image.id === 1 || image.id === 2 ? '6' : '3'} ${
                    image.id === 2 ? 'position-relative' : ''
                  }`"
                >
                  <div v-if="image.ribbon" class="box-ribbon box-right">
                    <div class="ribbonbox ribbon-danger">
                      {{ image.ribbon }}
                    </div>
                  </div>
                  <a
                      href="#"
                      class="brand-img-box"
                      @click.prevent="openLightbox(image.src)"
                  >
                    <img
                        :src="image.src"
                        :class="`w-100 ${image.rounded ? 'rounded' : ''}`"
                        :alt="image.alt"
                    />
                  </a>
                </div>
              </div>
            </div>

            <!-- Product Details -->
            <div class="col-sm-7">
              <div class="my-3">
                <h3 class="text-dark-800 f-w-700 txt-ellipsis-1">
                  $58,902.90
                  <span class="f-s-16 f-w-500 text-secondary">
                    Last week
                  </span>
                </h3>
                <div class="custom-progress-container">
                  <div class="progress-bar"></div>
                  <div class="progress-bar"></div>
                  <div class="progress-bar"></div>
                  <div class="progress-bar"></div>
                </div>
              </div>

              <h6>Choose tags</h6>
              <div class="form-selectgroup products-tags-list my-3">
                <div class="form-selectgroup products-tags-list my-3">
                  <label
                      v-for="(tag, index) in tagOptions"
                      :key="index"
                      class="select-items"
                  >
                    <input
                        type="checkbox"
                        class="select-input"
                        :checked="tag.checked"
                        @change="updateCheckbox(index, $event)"
                    />
                    <span class="select-box">
                    <span class="selectitem">○ {{ tag.label }}</span>
                  </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </BCardBody>
      </BCard>
    </div>

    <!-- FsLightbox -->
    <FsLightbox
        :toggler="lightboxToggler"
        :sources="lightboxSources"
        :type="'image'"
    />
  </div>
</template>

