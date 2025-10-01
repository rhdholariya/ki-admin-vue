<script setup>
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
  BProgress
} from "bootstrap-vue-next";

import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// data imports (mock same as React version)
import {
  friends,
  posts,
  profileMessages,
  profileProjects,
  timelineData
} from "@/data/app/Profile/ProfileAppData.js";

// icon imports
import {
  IconBrandHipchat,
  IconMoodSmileBeam,
  IconPencilPlus,
  IconHeart,
  IconSend
} from "@tabler/icons-vue";

// components
import FileUploader from "@/components/Apps/Profile/FileUploader.vue";

// props
const props = defineProps({
  data: String
});



// stories data
const stories = [
  { imgSrc: "/images/profile-app/11.jpg", avatar: "/images/avatar/1.png", bgColor: "bg-primary" },
  { imgSrc: "/images/profile-app/12.jpg", avatar: "/images/avatar/08.png", bgColor: "bg-danger" },
  { imgSrc: "/images/profile-app/13.jpg", avatar: "/images/avatar/2.png", bgColor: "bg-secondary" },
  { imgSrc: "/images/profile-app/14.jpg", avatar: "/images/avatar/3.png", bgColor: "bg-dark" },
  { imgSrc: "/images/profile-app/15.jpg", avatar: "/images/avatar/07.png", bgColor: "bg-warning" },
  { imgSrc: "/images/profile-app/16.jpg", avatar: "/images/avatar/4.png", bgColor: "bg-info" }
];

const swiperOptions = {
  modules: [Autoplay, Navigation, Pagination],
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  autoplay: { delay: 3000 },
  breakpoints: {
    1366: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 1 }
  }
};


</script>

<template>
  <div class="col-lg-5 col-xxl-6 col-box-5">
    <div class="content-wrapper">
      <!-- Tab 1: Featured Stories -->
      <div :class="[props.data === '1' ? 'active' : '', 'tabs-content']">
        <div class="profile-content">
          <b-card id="featured-Stories" no-body>
            <b-card-header>
              <h5>Featured Stories</h5>
            </b-card-header>
            <b-card-body>
              <Swiper v-bind="swiperOptions" class="story-container app-arrow">
                <SwiperSlide v-for="(story, idx) in stories" :key="idx">
                  <a :href="story.imgSrc" class="glightbox story" data-glightbox="type: image; zoomable: true;">
                    <img :src="story.imgSrc" class="rounded img-fluid" alt="story" />
                    <div :class="['h-50 w-50 d-flex-center b-r-50 overflow-hidden story-icon', story.bgColor]">
                      <img :src="story.avatar" alt="avatar" class="img-fluid" />
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </b-card-body>
          </b-card>
          <b-card id="post">
            <b-card-header>
              <h5>Post</h5>
            </b-card-header>
            <b-card-body>
              <div class="col-12">
                <div class="photos-container">
                  <div class="left-main-img img-box">
                    <a
                        href="/images/profile-app/20.jpg"
                        class="glightbox"
                        data-glightbox="type: image; zoomable: true;"
                    >
                      <img src="/images/profile-app/20.jpg" alt="image" />
                      <div class="transparent-box2">
                        <div class="captions">Simple image example</div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <div class="sub">
                      <div class="img-box">
                        <a
                            href="/images/profile-app/21.jpg"
                            class="glightbox"
                            data-glightbox="type: image"
                        >
                          <img src="/images/profile-app/21.jpg" alt="image" />
                          <div class="transparent-box2">
                            <div class="captions">
                              Simple image example
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="img-box">
                        <a
                            href="/images/profile-app/23.jpg"
                            class="glightbox"
                            data-glightbox="type: image"
                        >
                          <img src="/images/profile-app/23.jpg" alt="image" />
                          <div class="transparent-box2">
                            <div class="captions">
                              Simple image example
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="img-box">
                        <a
                            href="/images/profile-app/24.jpg"
                            class="glightbox"
                            data-glightbox="type: image"
                        >
                          <img src="/images/profile-app/24.jpg" alt="image" />
                          <div class="transparent-box2">
                            <div class="captions">
                              Simple image example
                            </div>
                          </div>
                        </a>
                      </div>
                      <div id="multi-link" class="img-box">
                        <a
                            href="/images/profile-app/22.jpg"
                            class="glightbox"
                            data-glightbox="type: image"
                        >
                          <img src="/images/profile-app/22.jpg" alt="image" />
                          <div class="transparent-box">
                            <div class="caption">+3</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                      id="more-img"
                      class="extra-images-container hide-element"
                  >
                    <a
                        href="/images/blog-app/03.jpg"
                        class="glightbox"
                        data-glightbox="type: image"
                    >
                      <img src="/images/blog-app/03.jpg" alt="image" />
                    </a>
                    <a
                        href="/images/blog-app/04.jpg"
                        class="glightbox"
                        data-glightbox="type: image"
                    >
                      <img src="/images/blog-app/04.jpg" alt="image" />
                    </a>
                    <a
                        href="/images/blog-app/10.jpg"
                        class="glightbox"
                        data-glightbox="type: image"
                    >
                      <img src="/images/blog-app/10.jpg" alt="image" />
                    </a>
                  </div>
                </div>

                <div class="photos-container">
                  <div class="left-main-img img-box">
                    <a
                        href="/images/profile-app/video.mp4"
                        class="glightbox"
                    >
                      <img src="/images/profile-app/26.jpg" alt="image" />
                      <div class="transparent-box">
                        <div class="caption">
                          <i class="fa-solid fa-play-circle fa-fw"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="right-main-img img-box">
                    <a
                        href="/images/profile-app/video.mp4"
                        class="glightbox"
                    >
                      <img src="/images/profile-app/25.jpg" alt="image" />
                      <div class="transparent-box">
                        <div class="caption">
                          <i class="fa-solid fa-play-circle fa-fw"></i>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
      <!-- Tab 2: Activity -->
      <div :class="[props.data === '2' ? 'active' : '', 'tabs-content']">
        <b-card no-body>
          <b-card-header><h5>Activity</h5></b-card-header>
          <b-card-body>
            <ul class="app-timeline-box">
              <li v-for="(item, index) in timelineData" :key="index" class="timeline-section">
                <div class="timeline-icon">
                <span :class="[item.iconBg, 'h-35 w-35 d-flex-center b-r-50']">
  {{ item.icon }}
</span>
                </div>
                <div class="timeline-content">
                  <div v-if="item.name" class="f-s-16">
                    <span class="text-primary">{{ item.name }}</span>
                    <span class="text-secondary ms-2">{{ item.description }}</span>
                  </div>
                  <p v-else class="f-s-16 text-info mb-0">{{ item.description }}</p>

                  <div v-if="item.images" class="app-timeline-info-text timeline-border-box mt-3">
                    <b-row>
                      <b-col v-for="(img, imgIdx) in item.images" :key="imgIdx" sm="4">
                        <a :href="img" class="glightbox img-hover-zoom" data-glightbox="type: image; zoomable: true;">
                          <img :src="img" class="img-fluid rounded timeline-img" />
                        </a>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-if="item.content" class="timeline-border-box mt-3" v-html="item.content"></div>
                  <div v-if="item.actions" class="mt-3" v-html="item.actions"></div>
                  <p class="f-w-500 text-end mt-2 mb-0">
                    <i class="ph ph-clock me-1 align-middle"></i>{{ item.time }}
                  </p>
                </div>
              </li>
            </ul>
          </b-card-body>
        </b-card>
      </div>

      <!-- Tab 3: Projects & Messages -->
      <div :class="[props.data === '3' ? 'active' : '', 'tabs-content']">
        <b-row>
          <b-col cols="12" class="mb-3">
            <div v-for="project in profileProjects" :key="project.id" class="col-12 mb-4">
              <b-card class="hover-effect" no-body>
                <b-card-header class="d-flex align-items-center">
                  <div class="h-40 w-40 d-flex-center b-r-50 overflow-hidden">
                    <img :src="project.logo" alt="" class="img-fluid" />
                  </div>
                  <RouterLink to="/apps/projects-page/projects-details" target="_blank" class="flex-grow-1 px-3">
                    <h6 class="m-0 text-dark f-w-600">{{ project.title }}</h6>
                    <div class="text-muted f-s-14 f-w-500">{{ project.subtitle }}</div>
                  </RouterLink>
                </b-card-header>
                <b-card-body>
                  <div class="d-flex">
                    <div>
                      <h6 class="text-dark f-s-14 f-w-500">
                        Start Date: <span class="text-success">{{ project.startDate }}</span>
                      </h6>
                      <h6 class="text-dark f-s-14 f-w-500">
                        End Date: <span class="text-danger">{{ project.endDate }}</span>
                      </h6>
                    </div>
                    <div class="flex-grow-1 text-end">
                      <p class="f-w-500 text-secondary">Pricing</p>
                      <h6 class="f-w-600">{{ project.pricing }}</h6>
                    </div>
                  </div>
                  <p class="text-muted f-s-14 text-secondary txt-ellipsis-2">{{ project.description }}</p>
                  <div class="text-end mb-2">
                    <b-badge :class="['bg-light-' + (project.status === 'Completed' ? 'success' : 'primary')]">
                      {{ project.status }}
                    </b-badge>
                  </div>
                  <b-progress :value="project.progress" :variant="project.progress === 100 ? 'success' : 'primary'">
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
                  <b-list-group-item v-for="message in profileMessages" :key="message.id">
                    <div class="d-flex align-items-center justify-content-between position-relative">
                      <div
                          class="rounded-circle d-flex justify-content-center align-items-center position-absolute"
                          :class="'bg-' + message.color"
                          style="width:35px; height:35px;"
                      >
                        {{ message.initials }}
                      </div>
                      <div class="mg-s-40">
                        <h6 class="mb-0">{{ message.name }}</h6>
                        <p class="text-muted">{{ message.message }}</p>
                      </div>
                      <div><i class="ti ti-star fs-5"></i></div>
                    </div>
                  </b-list-group-item>
                </b-list-group>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>

      <!-- Tab 4: Posts -->
      <div :class="[props.data === '4' ? 'active' : '', 'tabs-content']">
        <div v-for="post in posts" :key="post.id" class="col-12 mb-4">
          <b-card>
            <b-card-body>
              <div class="d-flex align-items-center mb-3">
                <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-danger">
                  <img :src="post.user.avatar" alt="avatar" class="img-fluid" />
                </div>
                <div class="flex-grow-1 ps-2 pe-2">
                  <div class="f-w-500">{{ post.user.name }}</div>
                  <div class="text-muted f-s-12">{{ post.user.time }}</div>
                </div>
              </div>
              <div class="post-div mb-3">
                <p class="text-muted">{{ post.postContent }}</p>
                <div class="post-icon d-flex align-items-center">
                  <IconHeart size="24" class="me-2" />
                  <IconBrandHipchat size="24" class="me-2" />
                  <IconSend size="24" class="me-2" />
                  <p class="m-0">{{ post.likes }} Likes</p>
                </div>
              </div>
              <div v-for="comment in post.comments" :key="comment.id" class="Comment-box mb-3">
                <div class="d-flex align-items-center">
                  <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-primary">
                    <img :src="comment.avatar" alt="avatar" class="img-fluid" />
                  </div>
                  <div class="flex-grow-1 ps-2 pe-2">
                    <div class="f-w-600">{{ comment.name }}</div>
                    <div class="text-muted f-s-12">{{ comment.time }}</div>
                  </div>
                </div>
                <div class="mt-2"><p>{{ comment.comment }}</p></div>
              </div>
            </b-card-body>
          </b-card>
        </div>

        <b-card>
          <b-card-body>
            <FileUploader />
            <b-form class="app-form mt-3">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Type a message..." />
                <span class="input-group-text text-light-primary b-1-secondary"><IconMoodSmileBeam size="20" /></span>
                <span class="input-group-text text-light-primary b-1-secondary"><IconPencilPlus size="20" /></span>
              </div>
            </b-form>
            <div class="float-end">
              <b-button variant="primary" class="mt-2"><i class="ti ti-photo-plus"></i> Post</b-button>
            </div>
          </b-card-body>
        </b-card>
      </div>

      <!-- Tab 5: Friends -->
      <div :class="[props.data === '5' ? 'active' : '', 'tabs-content']">
        <b-row class="profile-friend-box">
          <b-col v-for="friend in friends" :key="friend.id" xxl="6" class="box-col">
            <b-card class="friend-list-card">
              <b-card-body>
                <div class="d-flex align-items-center position-relative">
                  <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden bg-dark position-absolute">
                    <img :src="friend.avatar" alt="avatar" class="img-fluid" />
                  </div>
                  <div class="flex-grow-1 ms-5">
                    <div class="fw-medium">{{ friend.name }}</div>
                    <div class="text-muted f-s-12">{{ friend.job }}</div>
                  </div>
                  <RouterLink :to="friend.chatLink" target="_blank" class="btn btn-light-success icon-btn b-r-22">
                    <IconBrandHipchat size="20" />
                  </RouterLink>
                </div>
                <div class="mt-4 friend-list-content">
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
            <b-card class="equal-card">
              <b-card-header><h5>Friends Requests</h5></b-card-header>
              <b-card-body>
                <ul class="friend-list">
                  <li v-for="friend in friends" :key="friend.id" class="d-flex align-items-center position-relative mt-3">
                    <div class="h-50 w-50 d-flex-center b-r-50 overflow-hidden position-absolute"
                         :class="'bg-' + (friend.job === 'Web Developer' ? 'danger' : 'primary')">
                      <img :src="friend.avatar" alt="avatar" class="img-fluid" />
                    </div>
                    <div class="flex-grow-1 ms-5">
                      <h6 class="mb-0 fw-medium text-ellipsis">@{{ friend.name.split(' ')[0] }}</h6>
                      <p class="text-muted mb-0">{{ friend.job }}</p>
                    </div>
                    <b-button variant="primary" class="me-2"><i class="ti ti-user-check me-2"></i> Follow</b-button>
                    <b-button variant="danger"><i class="ti ti-user-x me-2"></i> Remove</b-button>
                  </li>
                </ul>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
