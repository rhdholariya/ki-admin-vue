<script setup>
import {BContainer, BRow, BCol} from "bootstrap-vue-next";

const emit = defineEmits(["image-click"]);

const img = (src) => `/images/gallary/${src}`;

const galleryItems = [
  {
    cols: {sm: 6, lg: 4},
    items: [
      {src: "01.jpg", caption: "Simple Image"},
      {src: "02.jpg", caption: "Image With Bottom Description"},
    ],
  },
  {
    cols: {lg: 4},
    nested: true,
    items: [
      {cols: {xs: 6, sm: 3, lg: 6}, src: "03.jpg", caption: "Right Description"},
      {cols: {xs: 6, sm: 3, lg: 6}, src: "04.jpg", caption: "Right Description"},
      {cols: {xs: 6, sm: 3, lg: 6}, src: "05.jpg", caption: "Top Description"},
      {cols: {xs: 6, sm: 3, lg: 6}, src: "06.jpg", caption: "Simple Image"},
    ],
  },
  {
    cols: {lg: 6},
    nested: true,
    items: [
      {cols: {xs: 6, lg: 4}, src: "07.jpg", caption: "Right Description"},
      {cols: {xs: 6, lg: 4}, src: "08.jpg", caption: "Right Description"},
      {cols: {xs: 6, lg: 4}, src: "14.jpg", caption: "Right Description"},
      {cols: {lg: 6}, src: "10.jpg", caption: "Right Description"},
      {cols: {lg: 6}, src: "11.jpg", caption: "Right Description"},
    ],
  },
  {cols: {xs: 6, lg: 3}, src: "16.jpg", caption: "Right Description"},
  {cols: {xs: 6, lg: 3}, src: "12.jpg", caption: "Right Description"},
  {cols: {sm: 6, lg: 4}, src: "15.jpg", caption: "Right Description"},
  {cols: {sm: 6, lg: 4}, src: "13.jpg", caption: "Right Description"},
  {cols: {sm: 6, lg: 4}, src: "09.jpg", caption: "Right Description"},
];


const safeCols = (cols) => (cols ? cols : {});


const getGlobalIndex = (sectionIndex, itemIndex = null) => {
  let count = 0;
  for (let i = 0; i < sectionIndex; i++) {
    const section = galleryItems[i];
    if (section.items) count += section.items.length;
    else count += 1;
  }
  if (itemIndex !== null) count += itemIndex;
  return count;
};


const handleImageClick = (globalIndex) => {
  emit("image-click", globalIndex + 1);
};
</script>

<template>
  <b-container fluid>
    <b-row>
      <b-col xs="12" class="gallery-grid-container">
        <b-row class="gallery-img">
          <template v-for="(section, sectionIndex) in galleryItems" :key="sectionIndex">

            <!-- Nested Section -->
            <b-col v-if="section.nested" v-bind="safeCols(section.cols)">
              <b-row>
                <b-col
                    v-for="(item, itemIndex) in section.items"
                    :key="itemIndex"
                    v-bind="safeCols(item.cols)"
                >
                  <div
                      class="imagebox"
                      @click="handleImageClick(getGlobalIndex(sectionIndex, itemIndex))"
                  >
                    <img
                        :src="img(item.src)"
                        alt="image"
                        class="img-fluid"
                        style="cursor:pointer"
                    />
                    <div class="caption-content">
                      <p>{{ item.caption }}</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-col>

            <!-- Section with multiple images -->
            <template v-else-if="section.items">
              <b-col
                  v-for="(item, itemIndex) in section.items"
                  :key="itemIndex"
                  v-bind="safeCols(section.cols)"
              >
                <div
                    class="imagebox"
                    @click="handleImageClick(getGlobalIndex(sectionIndex, itemIndex))"
                >
                  <img
                      :src="img(item.src)"
                      alt="image"
                      class="img-fluid"
                      style="cursor:pointer"
                  />
                  <div class="caption-content">
                    <p>{{ item.caption }}</p>
                  </div>
                </div>
              </b-col>
            </template>

            <!-- Single Image Section -->
            <b-col v-else v-bind="safeCols(section.cols)">
              <div
                  class="imagebox"
                  @click="handleImageClick(getGlobalIndex(sectionIndex))"
              >
                <img
                    :src="img(section.src)"
                    alt="image"
                    class="img-fluid"
                    style="cursor:pointer"
                />
                <div class="caption-content">
                  <p>{{ section.caption }}</p>
                </div>
              </div>
            </b-col>

          </template>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
