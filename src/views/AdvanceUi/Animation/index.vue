<script setup>
import { ref, onMounted, nextTick } from 'vue';
import AppLayout from "@/views/AppLayout.vue";
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BButton } from 'bootstrap-vue-next';
import {PhBell, PhCaretDoubleRight, PhDownload,  PhBriefcase , PhTrash , PhUpload} from '@phosphor-icons/vue';
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AnimateUse from '@/components/AdvanceUi/Animation/AnimateUse.vue';
import { animationCategories } from '@/data/advanceui/animation/Animation.js';
import Masonry from 'masonry-layout';




const handleMouseEnter = (e) => {
  const target = e.target;
  const ani = target.dataset.ani;
  if (ani) {
    target.classList.add('animate__animated', `animate__${ani}`, 'animate__faster');
    setTimeout(() => {
      target.classList.remove('animate__animated', `animate__${ani}`, 'animate__faster');
    }, 1000);
  }
};

onMounted(async () => {
  await nextTick();
  new Masonry('.animation-blocks', {
    percentPosition: true,
    itemSelector: '.animation-card',
  });
});
// Breadcrumb data
const breadcrumbItems = {
  title: "Animation",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Animation", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col xl="12">
            <b-card no-body>
              <b-card-header>
                <h5>Where can use? some example ..!</h5>
              </b-card-header>
              <b-card-body>
                <b-row>
                  <b-col xs="12">
                    <div class="d-flex flex-wrap gap-3">
                      <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                        <img
                            src="/images/avatar/2.png"
                            alt=""
                            class="img-fluid animate__pulse animate__animated animate__infinite animate__faster"
                        />
                      </div>
                      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                    <img src="/images/avatar/1.png" alt="" class="img-fluid b-r-50" />
                    <span class="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle animate__animated animate__zoomIn animate__infinite animate__fast"></span>
                  </span>
                      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                    <img src="/images/avatar/6.png" alt="" class="img-fluid b-r-50" />
                    <span class="position-absolute top-10 start-40 translate-middle d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 f-s-10">
                      <ChatCircle size="10" class="animate__animated animate__heartBeat animate__infinite animate__fast" />
                    </span>
                  </span>
                      <span class="text-outline-primary h-45 w-45 d-flex-center b-r-50">
                    <PhBell  size="24" class="animate__animated animate__rubberBand animate__infinite animate__fast" />
                  </span>
                      <b-button variant="success" size="lg">
                        Submit
                        <PhCaretDoubleRight  size="24" class="animate__animated animate__fadeOutRight animate__infinite animate__fast" />
                      </b-button>
                      <b-button variant="danger" size="lg">
                        <PhTrash  size="24" class="animate__animated animate__bounceIn animate__infinite animate__fast" />
                        Delete
                      </b-button>
                      <b-button variant="primary" size="lg">
                        <PhDownload  size="24" class="animate__animated animate__bounceInDown animate__infinite animate__slow" />
                        Download
                      </b-button>
                      <b-button variant="warning" size="lg">
                        Upload
                        <PhUpload   size="24" class="animate__animated animate__fadeOutRight animate__infinite animate__fast" />
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>

          <b-col xl="12">
            <div class="animation-blocks">
              <b-card
                  v-for="(category, index) in animationCategories"
                  :key="index"
                  class="cheatsheet-card animation-card mb-3"
              >
                <div class="card-header p-0">
                  <a
                      href="#"
                      class="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                  >
                    {{ category.name }}
                  </a>
                </div>
                <!-- 👇 force all collapses open with `show` -->
                <div class="collapse card-body show px-4">
                  <ul>
                    <li>
                      <div class="d-flex flex-wrap gap-3">
                        <a
                            v-for="(ani, aniIndex) in category.animations"
                            :key="aniIndex"
                            href="#"
                            class="btn btn-light-primary"
                            :data-ani="ani"
                            @mouseenter="handleMouseEnter"
                        >
                          {{ ani }}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </b-card>
            </div>
          </b-col>

          <AnimateUse />
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>