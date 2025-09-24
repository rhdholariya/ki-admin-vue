<script setup>

import {onMounted} from "vue";
import { BCard, BCardHeader, BCardBody , BCol} from "bootstrap-vue-next";
import {Swiper, SwiperSlide} from "swiper/vue";


import "swiper/css";             // core Swiper styles
import "swiper/css/navigation";  // navigation module styles
import "swiper/css/pagination";  // pagination module styles
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

// Install Swiper modules


// Stories data
const stories = [
  {id: 1, storyImg: '/images/profile-app/11.jpg', avatarImg: '/images/avatar/1.png', bgClass: 'bg-primary'},
  {id: 2, storyImg: '/images/profile-app/12.jpg', avatarImg: '/images/avatar/08.png', bgClass: 'bg-danger'},
  {id: 3, storyImg: '/images/profile-app/13.jpg', avatarImg: '/images/avatar/2.png', bgClass: 'bg-secondary'},
  {id: 4, storyImg: '/images/profile-app/14.jpg', avatarImg: '/images/avatar/3.png', bgClass: 'bg-dark'},
  {id: 5, storyImg: '/images/profile-app/15.jpg', avatarImg: '/images/avatar/07.png', bgClass: 'bg-warning'},
  {id: 6, storyImg: '/images/profile-app/16.jpg', avatarImg: '/images/avatar/4.png', bgClass: 'bg-info'},
  {id: 7, storyImg: '/images/profile-app/17.jpg', avatarImg: '/images/avatar/5.png', bgClass: 'bg-light'},
  {id: 8, storyImg: '/images/profile-app/18.jpg', avatarImg: '/images/avatar/6.png', bgClass: 'bg-success'},
];
const posts = [
  {
    mainImg: "/images/profile-app/20.jpg",
    images: [
      { src: "/images/profile-app/21.jpg", caption: "Simple image example" },
      { src: "/images/profile-app/23.jpg", caption: "Simple image example" },
      { src: "/images/profile-app/24.jpg", caption: "Simple image example" },
      { src: "/images/profile-app/22.jpg", caption: "+3", isExtra: true },
    ],
  },
  {
    videos: [
      { thumbnail: "/images/profile-app/26.jpg", src: "/images/profile-app/video.mp4" },
      { thumbnail: "/images/profile-app/25.jpg", src: "/images/profile-app/video.mp4" },
    ],
  },
];

onMounted(() => {
  GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
  });
});
</script>
<template>
  <b-col lg="5" xxl="6" class="col-box-5">
    <div class="content-wrapper">
      <b-card id="featured-Stories" no-body>
        <b-card-header>
          <h5>Featured Stories</h5>
        </b-card-header>

        <b-card-body class="story-container">
          <Swiper
              :slides-per-view="4"
              :space-between="20"
              :loop="false"
              navigation
              :pagination="{ clickable: true }"
              :autoplay="{ delay: 100, disableOnInteraction: false }"
              :breakpoints="{
                  992: { slidesPerView: 4 },
                  768: { slidesPerView: 2 },
                  576: { slidesPerView: 1 }
                }"
              class="story-slider app-arrow m-0"
          >
            <SwiperSlide v-for="story in stories" :key="story.id">
              <div class="story position-relative">
                <img :src="story.storyImg" alt="story" class="rounded img-fluid"/>
                <div
                    class="h-45 w-45 d-flex-center b-r-50 overflow-hidden story-icon bg-primary"
                    :class="story.bgClass"
                >
                  <img :src="story.avatarImg" alt="avatar" class="img-fluid"/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </b-card-body>
      </b-card>
    </div>
    <b-card id="post" no-body>
      <b-card-header>
        <h5>Post</h5>
      </b-card-header>

      <b-card-body>
        <b-col xl="12" v-for="(post, index) in posts" :key="index">
          <!-- Images gallery -->
          <div v-if="post.images" class="photos-container">
            <div class="left-main-img img-box">
              <a
                  class="glightbox"
                  :href="post.mainImg"
                  data-glightbox="type: image; zoomable: true;"
              >
                <img :src="post.mainImg" alt="image" class="img-fluid" />
                <div class="transparent-box2">
                  <div class="captions">Simple image example</div>
                </div>
              </a>
            </div>

            <div class="sub">
              <div
                  v-for="(img, i) in post.images"
                  :key="i"
                  class="img-box"
              >
                <a class="glightbox" :href="img.src" data-glightbox="type: image">
                  <img :src="img.src" alt="image" class="img-fluid" />
                  <div class="transparent-box2" v-if="!img.isExtra">
                    <div class="captions">{{ img.caption }}</div>
                  </div>
                  <div class="transparent-box" v-else>
                    <div class="caption">{{ img.caption }}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Videos gallery -->
          <div v-if="post.videos" class="photos-container">
            <div
                v-for="(vid, i) in post.videos"
                :key="i"
                class="img-box"
            >
              <a class="glightbox" :href="vid.src" data-glightbox="type: video">
                <img :src="vid.thumbnail" alt="video" class="img-fluid" />
                <div class="transparent-box">
                  <div class="caption">
                    <i class="fa-solid fa-play-circle fa-fw"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </b-col>
      </b-card-body>
    </b-card>
  </b-col>
</template>