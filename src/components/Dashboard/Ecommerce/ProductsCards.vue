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

]

const tagOptions = reactive([
  { label: 'New Arrivals', checked: true },
  { label: 'Best Sellers', checked: false },
  { label: 'Trending', checked: true },
  { label: 'Exclusive', checked: false },
  { label: 'On Sale', checked: true },
  { label: 'Free Shipping', checked: false },
])


const lightboxToggler = ref(false);
const currentSlide = ref(1);


const productLightboxSources = productImages.map(img => img.src);

const openLightbox = (index) => {
  currentSlide.value = index + 1;
  lightboxToggler.value = !lightboxToggler.value;
};

onMounted(() => {

})

onUnmounted(() => {

})

const updateCheckbox = (index, event) => {
  tagOptions[index].checked = event.target.checked
}
</script>


<template>


    <div class="col-sm-6 col-md-4 col-xxl-2 order-3-md">
      <AiCommerceCard />
    </div>


    <div class="col-md-6 col-lg-4">
      <TotalRevenueCard />
    </div>


    <div class="col-md-8 col-xxl-6">
      <BCard class="ecommerce-product-box" no-body>
        <BCardBody>
          <div class="row">

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
                      class="brand-img-box"
                      @click.prevent="openLightbox(image.id - 1)"
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
        :sources="productLightboxSources"
        :slide="currentSlide"
    />
</template>

