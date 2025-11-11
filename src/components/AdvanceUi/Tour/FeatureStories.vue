<script setup>
import {ref, nextTick} from "vue";
import {BCard, BCardHeader, BCardBody, BCol} from "bootstrap-vue-next";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import FsLightbox from "fslightbox-vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
            {src: "/images/profile-app/21.jpg", caption: "Simple image example"},
            {src: "/images/profile-app/23.jpg", caption: "Simple image example"},
            {src: "/images/profile-app/24.jpg", caption: "Simple image example"},
            {src: "/images/profile-app/22.jpg", caption: "+3", isExtra: true},
        ],
    },
    {
        videos: [
            {thumbnail: "/images/profile-app/26.jpg", src: "/images/profile-app/video.mp4"},
            {thumbnail: "/images/profile-app/25.jpg", src: "/images/profile-app/video.mp4"},
        ],
    },
];

const imageLightbox = ref({
    isOpen: false,
    currentSlide: 1,
    sources: [
        ...stories.map(story => story.storyImg),
        "/images/profile-app/20.jpg",
        "/images/profile-app/21.jpg",
        "/images/profile-app/23.jpg",
        "/images/profile-app/24.jpg",
    ]
});

const videoLightbox = ref({
    isOpen: false,
    source: ""
});


const openVideoLightbox = async (videoSrc) => {
    videoLightbox.value.source = videoSrc;
    videoLightbox.value.isOpen = false;
    await nextTick();
    videoLightbox.value.isOpen = true;
};

const openImageLightbox = async (slideNumber) => {
    imageLightbox.value.currentSlide = slideNumber;
    imageLightbox.value.isOpen = false;
    await nextTick();
    imageLightbox.value.isOpen = true;
};

const getStorySlideNumber = (index) => index + 1;
const getPostImageSlideNumber = (index) => stories.length + index + 1;

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 0,
    loop: false,
    navigation: true,
    pagination: {clickable: true},
    autoplay: {delay: 1000, disableOnInteraction: false},
    breakpoints: {
        992: {slidesPerView: 4},
        768: {slidesPerView: 2},
        576: {slidesPerView: 1}
    }
};
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
                        v-bind="swiperOptions"
                        class="story-slider app-arrow m-0"
                    >
                        <SwiperSlide v-for="(story, index) in stories" :key="story.id">
                            <div class="story position-relative" @click="openImageLightbox(getStorySlideNumber(index))">
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

            <b-card id="post" no-body class="mt-4">
                <b-card-header>
                    <h5>Post</h5>
                </b-card-header>

                <b-card-body>
                    <b-col xl="12" v-for="(post, index) in posts" :key="index">
                        <div v-if="post.images" class="photos-container">
                            <div class="left-main-img img-box" @click="openImageLightbox(getPostImageSlideNumber(0))">
                                <img :src="post.mainImg" alt="image" class="img-fluid"/>
                                <div class="transparent-box2">
                                    <div class="captions">Simple image example</div>
                                </div>
                            </div>

                            <div class="sub">
                                <div
                                    v-for="(img, i) in post.images"
                                    :key="i"
                                    class="img-box"
                                    @click="openImageLightbox(getPostImageSlideNumber(i + 1))"
                                >
                                    <img :src="img.src" alt="image" class="img-fluid"/>
                                    <div v-if="!img.isExtra" class="transparent-box2">
                                        <div class="captions">{{ img.caption }}</div>
                                    </div>
                                    <div v-else class="transparent-box">
                                        <div class="caption">{{ img.caption }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="post.videos" class="photos-container mt-3">
                            <div
                                v-for="(vid, i) in post.videos"
                                :key="i"
                                class="img-box"
                                @click="openVideoLightbox(vid.src)"
                            >
                                <img :src="vid.thumbnail" alt="video" class="img-fluid"/>
                                <div class="transparent-box">
                                    <div class="caption">
                                        <i class="fa-solid fa-play-circle fa-fw"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-card-body>
            </b-card>
        </div>

        <FsLightbox
            :toggler="imageLightbox.isOpen"
            :sources="imageLightbox.sources"
            :slide="imageLightbox.currentSlide"
        />

        <FsLightbox
            :toggler="videoLightbox.isOpen"
            :sources="[videoLightbox.source]"
            type="video"
        />
    </b-col>
</template>