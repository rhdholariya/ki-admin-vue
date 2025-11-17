<script setup>


import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";
import { BContainer, BRow, BCol, BCard, BCardBody, BCardHeader} from 'bootstrap-vue-next';
const leftColumnVideos = [
  {
    title: "Ratio Video 1x1",
    ratioClass: "ratio ratio-1x1",
    src: "https://www.youtube.com/embed/BcKOz6kAgg0",
  },
  {
    title: "Ratio Video 4x3",
    ratioClass: "ratio ratio-4x3",
    src: "https://www.youtube.com/embed/BcKOz6kAgg0",
  },
]


const rightColumnVideos = [
  {
    title: "Ratio Video 16x9",
    ratioClass: "ratio ratio-16x9",
    src: "https://www.youtube.com/embed/PIa17rsNSEE",
  },
  {
    title: "Custom ratios 50%",
    ratioClass: "ratio",
    customStyle: {
      "--bs-aspect-ratio": "50%",
    },
    src: "https://www.youtube.com/embed/EwzynNhx4Y8",
  },
  {
    title: "Ratio Video 21x9",
    ratioClass: "ratio ratio-21x9",
    src: "https://www.youtube.com/embed/Ep5kNwmDRlg",
  },
]
// Breadcrumb data
const breadcrumbItems = {
  title: "Video Embed",
  items: [
    {label: " Advance UI ", icon: PhBriefcase},
    {label: "Video Embed", active: true},
  ],
};
</script>
<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>

          <b-col md="6">
            <b-card v-for="(video, index) in leftColumnVideos" :key="'left-' + index" class="mb-4" no-body>
              <b-card-header>
                <h5>{{ video.title }}</h5>
              </b-card-header>
              <b-card-body>
                <div :class="video.ratioClass" :style="video.customStyle">
                  <div>
                    <iframe
                        class="w-100 h-100"
                        :src="video.src"
                        :title="`YouTube video player ${index}`"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>


          <b-col md="6">
            <b-card v-for="(video, index) in rightColumnVideos" :key="'right-' + index" class="mb-4" no-body>
              <b-card-header>
                <h5>{{ video.title }}</h5>
              </b-card-header>
              <b-card-body>
                <div :class="video.ratioClass" :style="video.customStyle">
                  <div>
                    <iframe
                        class="w-100 h-100"
                        :src="video.src"
                        :title="`YouTube video player ${index + leftColumnVideos.length}`"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>