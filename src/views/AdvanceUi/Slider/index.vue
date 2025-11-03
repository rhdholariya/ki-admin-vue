<script setup>
import { ref } from "vue"
import AppLayout from "@/views/AppLayout.vue"
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BButton } from "bootstrap-vue-next"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";

const slides = ref([1, 2, 3])

const handleAddSlide = () => {
  slides.value.push(slides.value.length + 1)
}

const handleRemoveSlide = () => {
  if (slides.value.length > 1) {
    slides.value.pop()
  }
}

// Slider configs
const multipleItems = {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 16,
  navigation: true,
  breakpoints: {
    991: { slidesPerView: 2 },
    567: { slidesPerView: 1 }
  }
}

const centerItems = {
  modules: [Navigation],
  slidesPerView: 2,
  centeredSlides: true,
  navigation: true,
  breakpoints: {
    768: { slidesPerView: 2 },
    567: { slidesPerView: 1, navigation: false }
  }
}

const responsiveItems = {
  modules: [Pagination],
  slidesPerView: 2,
  spaceBetween: 16,
  pagination: { clickable: true },
  breakpoints: {
    991: { slidesPerView: 2 },
    576: { slidesPerView: 1 }
  }
}

const variableItems = {
  modules: [Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
  pagination: { clickable: true }
}

const addRemoveSettings = {
  modules: [Pagination],
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: { clickable: true },
  autoHeight: true
}

// Sample image arrays
const multipleImages = [
  '/images/slick/09.jpg',
  '/images/slick/23.jpg',
  '/images/slick/25.jpg',
  '/images/slick/24.jpg',
  '/images/slick/26.jpg',
  '/images/slick/27.jpg'
]

const centerImages = [
  '/images/slick/04.jpg',
  '/images/slick/03.jpg',
  '/images/slick/04.jpg',
  '/images/slick/05.jpg',
  '/images/slick/06.jpg',
  '/images/slick/07.jpg'
]

const responsiveImages = [
  '/images/slick/10.jpg',
  '/images/slick/23.jpg',
  '/images/slick/05.jpg',
  '/images/slick/25.jpg',
  '/images/slick/06.jpg',
  '/images/slick/03.jpg'
]

// CSS classes for variable width slides
const variableWidthImages = [
  { src: "/images/slick/32.jpg", width: 175 },
  { src: "/images/slick/29.jpg", width: 250 },
  { src: "/images/slick/30.jpg", width: 225 },
  { src: "/images/slick/31.jpg", width: 200 },
  { src: "/images/slick/11.jpg", width: 350 },
  { src: "/images/slick/33.jpg", width: 275 },
]


// Breadcrumb data
const breadcrumbItems = {
  title: "slider",
  items: [
    {label: "Advance UI", icon: PhBriefcase},
    {label: "slider", active: true},
  ],
};

</script>

<template>
  <AppLayout>
    <main>

      <b-container fluid>

        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-row class="app-swiper-sliders">

          <!-- Multiple Items -->
          <b-col lg="6">
            <BCard class="" no-body>
              <BCardHeader><h5>Multiple Items</h5></BCardHeader>
              <BCardBody>
                <Swiper v-bind="multipleItems" class="app-arrow">
                  <SwiperSlide v-for="(src, i) in multipleImages" :key="i">
                    <img :src="src" class="img-fluid rounded w-100" :alt="`image-${i}`" />
                  </SwiperSlide>
                </Swiper>
              </BCardBody>
            </BCard>
          </b-col>

          <!-- Center Mode -->
          <b-col lg="6">
            <BCard class="" no-body>
              <BCardHeader><h5>Center Mode</h5></BCardHeader>
              <BCardBody>
                <Swiper v-bind="centerItems" class="app-arrow center-mode">
                  <SwiperSlide v-for="(src, i) in centerImages" :key="i">
                    <img :src="src" class="img-fluid rounded w-100" :alt="`image-${i}`" />
                  </SwiperSlide>
                </Swiper>
              </BCardBody>
            </BCard>
          </b-col>

          <!-- Responsive Display -->
          <b-col lg="6">
            <b-card class="" no-body>
              <b-card-header><h5>Responsive Display</h5></b-card-header>
              <BCardBody>
                <Swiper v-bind="responsiveItems" class="app-arrow">
                  <SwiperSlide v-for="(src, i) in responsiveImages" :key="i">
                    <img :src="src" class="img-fluid rounded w-100" :alt="`image-${i}`" />
                  </SwiperSlide>
                </Swiper>
              </BCardBody>
            </b-card>
          </b-col>

          <!-- Variable Width -->
          <b-col lg="6">
            <b-card class="" no-body>
              <b-card-header><h5>Variable Width</h5></b-card-header>
              <b-card-body>
                <Swiper v-bind="variableItems" class="app-arrow variable-width">
                  <SwiperSlide
                      v-for="(img, i) in variableWidthImages"
                      :key="i"
                      :style="{ width: img.width + 'px' }"
                  >
                    <img
                        :src="img.src"
                        class="img-fluid rounded"
                        :alt="`Slide ${i + 1}`"
                        style="height: 220px; object-fit: cover;"
                    />
                  </SwiperSlide>
                </Swiper>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Add & Remove -->
          <b-col lg="6">
            <b-card class="" no-body>
              <b-card-header><h5>Add & Remove</h5></b-card-header>
              <b-card-body>
                <Swiper v-bind="addRemoveSettings" class="app-arrow">
                  <SwiperSlide v-for="(slide, i) in slides" :key="i">
                    <img src="/images/slick/12.jpg" class="img-fluid rounded w-100" :alt="`Slide ${slide}`" />
                  </SwiperSlide>
                </Swiper>
                <div class="text-center add-remove-btn mt-4">
                  <b-button variant="light-primary" class="me-2" @click="handleAddSlide">Add Slide</b-button>
                  <b-button variant="light-danger" @click="handleRemoveSlide">Remove Slide</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>

  </AppLayout>
</template>

