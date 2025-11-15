<script setup>
import {ref, nextTick} from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BListGroup,
  BListGroupItem,
  BBadge,
  BForm,
  BProgress, BImg
} from "bootstrap-vue-next";
import FsLightbox from "fslightbox-vue";
import {RouterLink} from "vue-router";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
    friends,
    posts,
    profileMessages,
    profileProjects,
    timelineData
} from "@/data/app/Profile/ProfileAppData.js";

import {
    IconBrandHipchat,
    IconMoodSmileBeam,
    IconPencilPlus,
    IconHeart,
    IconSend
} from "@tabler/icons-vue";

import FileUploader from "@/components/Apps/Profile/FileUploader.vue";

const props = defineProps({
    data: String
});

const lightboxToggler = ref(false);
const currentSlide = ref(1);
const videoLightboxToggler = ref(false);
const currentVideo = ref("");

const stories = [
    {imgSrc: "/images/profile-app/11.jpg", avatar: "/images/avatar/1.png", bgColor: "bg-primary"},
    {imgSrc: "/images/profile-app/12.jpg", avatar: "/images/avatar/08.png", bgColor: "bg-danger"},
    {imgSrc: "/images/profile-app/13.jpg", avatar: "/images/avatar/2.png", bgColor: "bg-secondary"},
    {imgSrc: "/images/profile-app/14.jpg", avatar: "/images/avatar/3.png", bgColor: "bg-dark"},
    {imgSrc: "/images/profile-app/15.jpg", avatar: "/images/avatar/07.png", bgColor: "bg-warning"},
    {imgSrc: "/images/profile-app/16.jpg", avatar: "/images/avatar/4.png", bgColor: "bg-info"}
];

const postImages = [
    "/images/profile-app/20.jpg",
    "/images/profile-app/21.jpg",
    "/images/profile-app/23.jpg",
    "/images/profile-app/24.jpg",
    "/images/profile-app/22.jpg",
    "/images/blog-app/03.jpg",
    "/images/blog-app/04.jpg",
    "/images/blog-app/10.jpg"
];

const videoSources = [
    {thumbnail: "/images/profile-app/26.jpg", video: "/images/profile-app/video.mp4", type: "video/mp4"},
    {thumbnail: "/images/profile-app/25.jpg", video: "/images/profile-app/video.mp4", type: "video/mp4"}
];

const allLightboxSources = [...stories.map((s) => s.imgSrc), ...postImages];


const handleVideoClick = async (videoUrl) => {
    currentVideo.value = videoUrl;
    videoLightboxToggler.value = false;
    await nextTick();
    videoLightboxToggler.value = true;
};

const handleImageClick = async (slideNumber) => {
    currentSlide.value = slideNumber;
    lightboxToggler.value = false;
    await nextTick();
    lightboxToggler.value = true;
};

const getStoryIndex = (index) => index;
const getPostImageIndex = (index) => stories.length + index;

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    autoplay: {delay: 1000},
    pagination: {clickable: true},
    navigation: false,
    dots: false,
    breakpoints: {
        1366: {slidesPerView: 4},
        768: {slidesPerView: 3},
        480: {slidesPerView: 1}
    }
};
</script>

<template>
    <div class="col-lg-5 col-xxl-6 col-box-5">
        <div class="content-wrapper">
            <div :class="['tabs-content', props.data === '1' && 'active']">
                <b-card no-body>
                    <b-card-header><h5>Featured Stories</h5></b-card-header>
                    <b-card-body>
                        <swiper v-bind="swiperOptions" class="story-container app-arrow">
                            <swiper-slide
                                v-for="(story, idx) in stories"
                                :key="idx"
                            >
                                <div @click="handleImageClick(getStoryIndex(idx) + 1)" class="story">
                                    <b-img :src="story.imgSrc" alt="story" class="rounded img-fluid"/>
                                    <div
                                        :class="['h-50 w-50 d-flex-center b-r-50 overflow-hidden story-icon', story.bgColor]"
                                    >
                                        <b-img :src="story.avatar" alt="avatar" class="img-fluid"/>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-card-body>
                </b-card>

                <b-card no-body class="mt-4">
                    <b-card-header><h5>Post</h5></b-card-header>
                    <b-card-body>
                        <div class="photos-container">
                            <div class="left-main-img img-box" @click="handleImageClick(getPostImageIndex(0) + 1)">
                                <b-img src="/images/profile-app/20.jpg" alt="Main Post"/>
                                <div class="transparent-box2">
                                    <div class="captions">Simple image example</div>
                                </div>
                            </div>

                            <div class="sub">
                                <div
                                    v-for="(img, idx) in postImages.slice(1, 5)"
                                    :key="idx"
                                    class="img-box"
                                    @click="handleImageClick(getPostImageIndex(idx + 1) + 1)"
                                >
                                    <b-img :src="img" :alt="`Post ${idx + 2}`"/>
                                    <div v-if="idx < 3" class="transparent-box2">
                                        <div class="captions">Simple image example</div>
                                    </div>
                                    <div v-else class="transparent-box">
                                        <div class="caption">+{{ postImages.length - 4 }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="photos-container mt-3">
                            <div
                                v-for="(video, idx) in videoSources"
                                :key="`video-${idx}`"
                                :class="['img-box', idx === 0 ? 'left-main-img' : 'right-main-img']"
                                @click="handleVideoClick(video.video)"
                            >
                                <b-img :src="video.thumbnail" :alt="`Video ${idx + 1}`"/>
                                <div class="transparent-box">
                                    <div class="caption">
                                        <i class="fa-solid fa-play-circle fa-fw"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </div>

            <div :class="['tabs-content', props.data === '2' && 'active']">
                <b-card no-body>
                    <b-card-header><h5>Activity</h5></b-card-header>
                    <b-card-body>
                        <ul class="app-timeline-box">
                            <li v-for="(item, index) in timelineData" :key="index" class="timeline-section">
                                <div class="timeline-icon">
                                    <span :class="[item.iconBg, 'h-35 w-35 d-flex-center b-r-50']">{{
                                            item.icon
                                        }}</span>
                                </div>
                                <div class="timeline-content">
                                    <div v-if="item.name" class="f-s-16">
                                        <span class="text-primary">{{ item.name }}</span>
                                        <span class="text-secondary ms-2">{{ item.description }}</span>
                                    </div>
                                    <p v-else class="f-s-16 text-info mb-0">{{ item.description }}</p>

                                    <div
                                        v-if="item.images"
                                        class="app-timeline-info-text timeline-border-box mt-3"
                                    >
                                        <b-row>
                                            <b-col
                                                v-for="(img, imgIdx) in item.images"
                                                :key="imgIdx"
                                                sm="4"
                                            >
                                                <div @click="handleImageClick(getPostImageIndex(imgIdx) + 1)">
                                                    <b-img :src="img" class="img-fluid rounded timeline-img"/>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div v-if="item.content" class="timeline-border-box mt-3"
                                         v-html="item.content"></div>
                                    <p class="f-w-500 text-end mt-2 mb-0">
                                        <i class="ph ph-clock me-1 align-middle"></i>{{ item.time }}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </b-card-body>
                </b-card>
            </div>

            <div :class="['tabs-content', props.data === '3' && 'active']">
                <b-row>
                    <b-col cols="12" class="mb-3">
                        <div v-for="project in profileProjects" :key="project.id" class="col-12 mb-4">
                            <b-card no-body>
                                <b-card-header class="d-flex align-items-center">
                                    <div class="h-40 w-40 d-flex-center b-r-50 overflow-hidden">
                                        <b-img :src="project.logo" alt="" class="img-fluid"/>
                                    </div>
                                    <router-link
                                        to="/apps/projects-page/projects-details"
                                        target="_blank"
                                        class="flex-grow-1 px-3"
                                    >
                                        <h6 class="m-0 text-dark f-w-600">{{ project.title }}</h6>
                                        <div class="text-muted f-s-14 f-w-500">{{ project.subtitle }}</div>
                                    </router-link>
                                </b-card-header>
                                <b-card-body>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h6 class="f-s-14 f-w-500">Start: <span
                                                class="text-success">{{ project.startDate }}</span></h6>
                                            <h6 class="f-s-14 f-w-500">End: <span class="text-danger">{{
                                                    project.endDate
                                                }}</span></h6>
                                        </div>
                                        <div class="text-end">
                                            <p class="text-secondary f-w-500 mb-0">Pricing</p>
                                            <h6 class="f-w-600">{{ project.pricing }}</h6>
                                        </div>
                                    </div>
                                    <p class="text-muted f-s-14">{{ project.description }}</p>
                                    <div class="text-end mb-2">
                                        <b-badge
                                            :class="`bg-light-${project.status === 'Completed' ? 'success' : 'primary'}`">
                                            {{ project.status }}
                                        </b-badge>
                                    </div>
                                    <b-progress
                                        :value="project.progress"
                                        :variant="project.progress === 100 ? 'success' : 'primary'"
                                    >
                                        {{ project.progress }}%
                                    </b-progress>
                                </b-card-body>
                            </b-card>
                        </div>
                    </b-col>

                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header><h5>Client Messages</h5></b-card-header>
                            <b-card-body>
                                <b-list-group>
                                    <b-list-group-item v-for="msg in profileMessages" :key="msg.id">
                                        <div
                                            class="d-flex align-items-center justify-content-between position-relative">
                                            <div
                                                :class="['rounded-circle d-flex-center position-absolute avatar-size h-35 w-35', 'bg-' + msg.color]"
                                            >
                                                {{ msg.initials }}
                                            </div>
                                            <div class="ms-5">
                                                <h6 class="mb-0">{{ msg.name }}</h6>
                                                <p class="text-muted mb-0">{{ msg.message }}</p>
                                            </div>
                                            <i class="ti ti-star fs-5"></i>
                                        </div>
                                    </b-list-group-item>
                                </b-list-group>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </div>

            <div :class="['tabs-content', props.data === '4' && 'active']">
                <div v-for="post in posts" :key="post.id" class="mb-4">
                    <b-card no-body>
                        <b-card-body>
                            <div class="d-flex align-items-center mb-3">
                                <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-danger">
                                    <b-img :src="post.user.avatar" alt="avatar" class="img-fluid"/>
                                </div>
                                <div class="flex-grow-1 ps-2">
                                    <div class="f-w-500">{{ post.user.name }}</div>
                                    <div class="text-muted f-s-12">{{ post.user.time }}</div>
                                </div>
                            </div>
                            <p class="text-muted">{{ post.postContent }}</p>
                            <div class="post-icon d-flex align-items-center">
                                <icon-heart size="24" class="me-2"/>
                                <icon-brand-hipchat size="24" class="me-2"/>
                                <icon-send size="24" class="me-2"/>
                                <p class="m-0">{{ post.likes }} Likes</p>
                            </div>

                            <div v-for="comment in post.comments" :key="comment.id" class="mt-3">
                                <div class="d-flex align-items-center">
                                    <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-primary">
                                        <b-img :src="comment.avatar" alt="avatar" class="img-fluid"/>
                                    </div>
                                    <div class="flex-grow-1 ps-2">
                                        <div class="f-w-600">{{ comment.name }}</div>
                                        <div class="text-muted f-s-12">{{ comment.time }}</div>
                                    </div>
                                </div>
                                <p class="mt-2 mb-0">{{ comment.comment }}</p>
                            </div>
                        </b-card-body>
                    </b-card>
                </div>

                <b-card no-body>
                    <b-card-body>
                        <file-uploader/>
                        <b-form class="app-form mt-3">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Type a message..."/>
                                <span class="input-group-text text-light-primary b-1-secondary">
                  <icon-mood-smile-beam size="20"/>
                </span>
                                <span class="input-group-text text-light-primary b-1-secondary">
                  <icon-pencil-plus size="20"/>
                </span>
                            </div>
                        </b-form>
                        <div class="text-end mt-2">
                            <b-button variant="primary"><i class="ti ti-photo-plus"></i> Post</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </div>

            <div :class="['tabs-content', props.data === '5' && 'active']">
                <b-row class="profile-friend-box">
                    <b-col
                        v-for="friend in friends"
                        :key="friend.id"
                        xxl="6"
                        class="box-col"
                    >
                        <b-card no-body class="friend-list-card">
                            <b-card-body>
                                <div class="d-flex align-items-center position-relative">
                                    <div
                                        class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-dark position-absolute">
                                        <b-img :src="friend.avatar" alt="avatar" class="img-fluid"/>
                                    </div>
                                    <div class="flex-grow-1 ms-5">
                                        <div class="fw-medium">{{ friend.name }}</div>
                                        <div class="text-muted f-s-12">{{ friend.job }}</div>
                                    </div>
                                    <router-link
                                        :to="friend.chatLink"
                                        target="_blank"
                                        class="btn btn-light-success icon-btn b-r-22"
                                    >
                                        <icon-brand-hipchat size="20"/>
                                    </router-link>
                                </div>
                                <div class="mt-4">
                                    <p class="mb-0">{{ friend.description }}</p>
                                    <div class="app-divider-v dashed m-0 py-3"></div>
                                    <p class="f-s-16 text-secondary mb-0">
                                        <span class="text-dark f-w-500">{{ friend.followers }}</span> Follower
                                        <span class="text-dark f-w-500">{{ friend.following }}</span> Following
                                    </p>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col sm="12">
                        <b-card no-body>
                            <b-card-header><h5>Friend Requests</h5></b-card-header>
                            <b-card-body>
                                <ul class="friend-list">
                                    <li
                                        v-for="friend in friends"
                                        :key="friend.id"
                                        class="d-flex align-items-center position-relative mt-3"
                                    >
                                        <div
                                            class="h-50 w-50 d-flex-center b-r-50 overflow-hidden position-absolute"
                                            :class="`bg-${friend.job === 'Web Developer' ? 'danger' : 'primary'}`"
                                        >
                                            <b-img :src="friend.avatar" alt="avatar" class="img-fluid"/>
                                        </div>
                                        <div class="flex-grow-1 ms-5">
                                            <h6 class="mb-0 fw-medium text-ellipsis">@{{
                                                    friend.name.split(' ')[0]
                                                }}</h6>
                                            <p class="text-muted mb-0">{{ friend.job }}</p>
                                        </div>
                                        <b-button variant="primary" class="me-2">
                                            <i class="ti ti-user-check me-2"></i> Follow
                                        </b-button>
                                        <b-button variant="danger">
                                            <i class="ti ti-user-x me-2"></i> Remove
                                        </b-button>
                                    </li>
                                </ul>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </div>

            <fs-lightbox
                :toggler="videoLightboxToggler"
                :sources="[currentVideo]"
                type="video"
            />
            <fs-lightbox
                :toggler="lightboxToggler"
                :sources="allLightboxSources"
                :slide="currentSlide"
            />
        </div>
    </div>
</template>
