<script setup>
import { ref, nextTick, onMounted } from "vue";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhBriefcase } from "@phosphor-icons/vue";
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardHeader,
  BCardBody,
  BCarousel,
  BCarouselSlide,
} from "bootstrap-vue-next";

// Breadcrumb data
const breadcrumbItems = {
  title: "Bootstrap Vue Slider",
  items: [
    { label: "Advance UI", icon: PhBriefcase },
    { label: "Bootstrap Vue Slider", active: true },
  ],
};

// render flag for safe DOM
const showCarousel = ref(false);

onMounted(async () => {
  await nextTick();
  showCarousel.value = true; // render carousel after DOM is stable
});
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems" />

        <!-- Render carousels only after DOM is ready -->
        <b-row v-if="showCarousel">
          <!-- Simple Slider -->
          <b-col md="6" xl="4">
            <b-card no-body>
              <b-card-header>
                <h5 class="text-center mt-2">Simple Slider</h5>
              </b-card-header>
              <b-card-body>
                <b-carousel controls :indicators="false">
                  <b-carousel-slide img-src="/images/bootstrapslider/01.jpg" />
                  <b-carousel-slide img-src="/images/bootstrapslider/07.jpg" />
                  <b-carousel-slide img-src="/images/bootstrapslider/08.jpg" />
                </b-carousel>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Indicator Slider -->
          <b-col md="6" xl="4">
            <b-card no-body>
              <b-card-header>
                <h5 class="text-center mt-2">Indicator Slider</h5>
              </b-card-header>
              <b-card-body>
                <b-carousel controls indicators>
                  <b-carousel-slide img-src="/images/bootstrapslider/02.jpg" />
                  <b-carousel-slide img-src="/images/bootstrapslider/07.jpg" />
                  <b-carousel-slide img-src="/images/bootstrapslider/08.jpg" />
                </b-carousel>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Slider With Captions -->
          <b-col md="6" xl="4">
            <b-card no-body>
              <b-card-header>
                <h5 class="text-center mt-2">Slider With Captions</h5>
              </b-card-header>
              <b-card-body>
                <b-carousel controls indicators>
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/01.jpg"
                      caption="First slide label"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                  />
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/07.jpg"
                      caption="Second slide label"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/08.jpg"
                      caption="Third slide label"
                      text="Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                  />
                </b-carousel>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Fade Slider -->
          <b-col md="6" xl="4">
            <b-card no-body>
              <b-card-header>
                <h5 class="text-center mt-2">Fade Slider</h5>
              </b-card-header>
              <b-card-body>
                <b-carousel controls indicators fade>
                  <b-carousel-slide img-src="/images/bootstrapslider/04.jpg" />
                  <b-carousel-slide img-src="/images/bootstrapslider/07.jpg" />
                  <b-carousel-slide img-src="/images/bootstrapslider/08.jpg" />
                </b-carousel>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Fade Slider without indicator -->
          <b-col md="6" xl="4">
            <b-card no-body>
              <b-card-header>
                <h5 class="text-center mt-2">Fade Slider Without Indicator</h5>
              </b-card-header>
              <b-card-body>
                <b-carousel fade :controls="false" :indicators="false">
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/04.jpg"
                      :interval="1000"
                  />
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/07.jpg"
                      :interval="500"
                  />
                  <b-carousel-slide img-src="/images/bootstrapslider/08.jpg" />
                </b-carousel>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- No transition animation -->
          <b-col md="6" xl="4">
            <b-card no-body>
              <b-card-header>
                <h5 class="text-center mt-2">No Transition Animation</h5>
              </b-card-header>
              <b-card-body>
                <b-carousel :slide="false" controls indicators>
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/04.jpg"
                      :interval="1000"
                  />
                  <b-carousel-slide
                      img-src="/images/bootstrapslider/07.jpg"
                      :interval="500"
                  />
                  <b-carousel-slide img-src="/images/bootstrapslider/08.jpg" />
                </b-carousel>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>

        <!-- optional fallback if carousel not mounted -->
        <div v-else class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </b-container>
    </main>
  </AppLayout>
</template>

