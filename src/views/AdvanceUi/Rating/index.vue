<script setup>
import { ref } from "vue";
import {
  BCard,
  BCardHeader,
  BCardBody,
  BContainer,
  BRow,
  BCol,
} from "bootstrap-vue-next";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faStar,
  faAngry,
  faFrown,
  faMeh,
  faSmile,
  faLaugh,
} from "@fortawesome/free-solid-svg-icons";


// Local rating components (converted already)
import SquareRating from "@/components/AdvanceUi/Rating/SquareRating.vue";
import PillRating from "@/components/AdvanceUi/Rating/PillRating.vue";
import RatingBar from "@/components/AdvanceUi/Rating/RatingBar.vue";
import ReversedRating from "@/components/AdvanceUi/Rating/ReversedRating.vue";
import HorizontalRating from "@/components/AdvanceUi/Rating/HorizontalRating.vue";
import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import {PhBriefcase} from "@phosphor-icons/vue";

const sliderValue = ref(5);
const activeRating = ref(0);

const emojiContainerRef = ref(null);
const sliderInputRef = ref(null);

const emojis = ["😠", "😒", "😧", "😦", "😑", "😀", "😆", "😍", "🤩", "💙"];
const textValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const emojiIcons = [faAngry, faFrown, faMeh, faSmile, faLaugh];
const colorArray = ["#F03161", "#74788D", "#F03161", "#FC9314", "#05BF81"];

const handleSliderChange = (e) => {
  sliderValue.value = parseInt(e.target.value);
};

const updateRating = (index) => {
  activeRating.value = index;
};

// Breadcrumb data
const breadcrumbItems = {
  title: "Rating",
  items: [
    {label: "Advance UI", icon: PhBriefcase},
    {label: "Rating", active: true},
  ],
};
</script>

<template>
  <AppLayout>
    <main>
  <b-container fluid>
    <Breadcrumb :breadcrumb="breadcrumbItems"/>
    <b-row>
      <!-- Controlled -->
      <b-col md="3" xl="3">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>Controlled</h5></b-card-header>
          <b-card-body>
            <div class="rating">
              <template v-for="value in [5, 4, 3, 2, 1]" :key="value">
                <input type="radio" :id="`star${value}`" name="rating" :value="value" class="d-none" />
                <label class="star" :for="`star${value}`">
                  <FontAwesomeIcon :icon="faStar" />
                </label>
              </template>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Read Only -->
      <b-col md="3" xl="3">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>Read Only</h5></b-card-header>
          <b-card-body>
            <div class="rating">
              <FontAwesomeIcon v-for="i in [1, 2, 3]" :key="`filled-${i}`" :icon="faStar" class="f-s-20 star-filled" />
              <FontAwesomeIcon v-for="i in [4, 5]" :key="`warning-${i}`" :icon="faStar" class="f-s-20 text-warning" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Custom SVG -->
      <b-col md="3" xl="3">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>Custom SVG</h5></b-card-header>
          <b-card-body>
            <div class="rating">
              <template v-for="value in [5, 4, 3, 2, 1]" :key="`star${value + 5}`">
                <input type="radio" :id="`star${value + 5}`" name="ratings3" :value="value" class="d-none" />
                <label class="star" :for="`star${value + 5}`">
                  <FontAwesomeIcon :icon="faStar" class="f-s-20" />
                </label>
              </template>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Full Star -->
      <b-col md="6" xxl="3">
        <b-card no-body>
          <b-card-header><h5>Full Star</h5></b-card-header>
          <b-card-body>
            <div class="rating">
              <template v-for="value in [16,17,18,19,20]" :key="value">
                <input type="radio" :id="`star${value}`" name="ratings" :value="value" checked class="d-none" />
                <label class="star" :for="`star${value}`">
                  <FontAwesomeIcon :icon="faStar" />
                </label>
              </template>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- 10 stars -->
      <b-col md="6" xxl="4">
        <b-card no-body>
          <b-card-header><h5>10 stars</h5></b-card-header>
          <b-card-body>
            <div class="rating">
              <template v-for="(_, index) in 10" :key="index">
                <input
                    type="radio"
                    :id="`star${21 + index}`"
                    name="ratings4"
                    :value="21 + index"
                    :checked="index === 0"
                    class="d-none"
                />
                <label class="star" :for="`star${21 + index}`">
                  <FontAwesomeIcon :icon="faStar" />
                </label>
              </template>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Square Rating -->
      <b-col md="6" xxl="4">
        <b-card no-body>
          <b-card-header><h5>Square Rating</h5></b-card-header>
          <b-card-body>
            <div class="boxs box-blue box-example-square d-flex-center">
              <SquareRating :initial="1" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Pill Rating -->
      <b-col md="6" xxl="4">
        <b-card no-body>
          <b-card-header><h5>Pill Rating</h5></b-card-header>
          <b-card-body>
            <div class="boxs box-green box-example-pill d-flex-center">
              <PillRating initial="C" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- 1/10 Rating -->
      <b-col md="6" xxl="4">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>1/10 Rating</h5></b-card-header>
          <b-card-body>
            <div class="boxs box-orange box-example-1to10 h-75">
              <RatingBar :initial="7" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Reversed Rating -->
      <b-col md="6" xxl="4">
        <b-card no-body>
          <b-card-header><h5>Reversed Rating</h5></b-card-header>
          <b-card-body>
            <div class="boxs box-green box-large box-example-reversed p-4">
              <ReversedRating />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Hover Feedback -->
      <b-col md="6" xxl="4">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>Hover Feedback</h5></b-card-header>
          <b-card-body>
            <div class="stars_rating" id="stars_rating">
              <div class="stars">
                <div v-for="i in 5" :key="`hover-${i}`" class="stars1" :class="{ rated: i <= 3 }">★</div>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Horizontal Rating -->
      <b-col md="6" xxl="4">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>Horizontal Rating</h5></b-card-header>
          <b-card-body>
            <div class="boxs box-orange box-large box-example-horizontal">
              <HorizontalRating :max="10" :initial="7" />
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Emoji Rating -->
      <b-col md="6" xxl="4">
        <b-card class="equal-card" no-body>
          <b-card-header><h5>Emoji-Rating</h5></b-card-header>
          <b-card-body>
            <div class="feedback-container">
              <div class="emoji-container" ref="emojiContainerRef">
                <FontAwesomeIcon
                    v-for="(icon, index) in emojiIcons"
                    :key="`emoji-${index}`"
                    :icon="icon"
                    class="fa-3x far"
                    :style="{
                    transform: `translateX(-${activeRating * 47}px)`,
                    color: index === activeRating ? colorArray[index] : 'black'
                  }"
                />
              </div>
              <div class="rating-container mt-4">
                <FontAwesomeIcon
                    v-for="index in 5"
                    :key="`rating-${index}`"
                    :icon="faStar"
                    class="emoji-star"
                    :class="{ active: index - 1 <= activeRating }"
                    @click="updateRating(index - 1)"
                />
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Emoji Progress -->
      <BCol md="6" xxl="4">
        <BCard class="equal-card">
          <BCardHeader><h5>Emoji Progress</h5></BCardHeader>
          <BCardBody>
            <div class="rate-1">
              <div class="emoji">{{ emojis[sliderValue] }}</div>
              <div class="emoji-slider">
                <input
                    ref="sliderInputRef"
                    class="accent"
                    type="range"
                    min="0"
                    max="9"
                    step="1"
                    v-model="sliderValue"
                    @input="handleSliderChange"
                />
              </div>
              <label class="text">{{ textValues[sliderValue] }}</label>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </b-row>
  </b-container>
    </main>
  </AppLayout>
</template>
