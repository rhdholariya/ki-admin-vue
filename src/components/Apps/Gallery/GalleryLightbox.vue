<script setup>
import { BContainer, BRow, BCol } from "bootstrap-vue-next";

// Define emits only
const emit = defineEmits(['image-click']);

const img = (src) => `/images/gallary/${src}`;

// Gallery items structure
const galleryItems = [
  {
    cols: { sm: 6, lg: 4 },
    items: [
      { src: "01.jpg", caption: "Simple Image" },
      { src: "02.jpg", caption: "Image With Bottom Description" },
    ],
  },
  {
    cols: { lg: 4 },
    nested: true,
    items: [
      { cols: { xs: 6, sm: 3, lg: 6 }, src: "03.jpg", caption: "Image With Right Description" },
      { cols: { xs: 6, sm: 3, lg: 6 }, src: "04.jpg", caption: "Image With Right Description" },
      { cols: { xs: 6, sm: 3, lg: 6 }, src: "05.jpg", caption: "Image With Top Description" },
      { cols: { xs: 6, sm: 3, lg: 6 }, src: "06.jpg", caption: "Simple Image" },
    ],
  },
  {
    cols: { lg: 6 },
    nested: true,
    items: [
      { cols: { xs: 6, lg: 4 }, src: "07.jpg", caption: "Image With Right Description" },
      { cols: { xs: 6, lg: 4 }, src: "08.jpg", caption: "Image With Right Description" },
      { cols: { xs: 6, lg: 4 }, src: "14.jpg", caption: "Image With Right Description" },
      { cols: { lg: 6 }, src: "10.jpg", caption: "Image With Right Description" },
      { cols: { lg: 6 }, src: "11.jpg", caption: "Image With Right Description" },
    ],
  },
  { cols: { xs: 6, lg: 3 }, src: "16.jpg", caption: "Image With Right Description" },
  { cols: { xs: 6, lg: 3 }, src: "12.jpg", caption: "Image With Right Description" },
  { cols: { sm: 6, lg: 4 }, src: "15.jpg", caption: "Image With Right Description" },
  { cols: { sm: 6, lg: 4 }, src: "13.jpg", caption: "Image With Right Description" },
  { cols: { sm: 6, lg: 4 }, src: "09.jpg", caption: "Image With Right Description" },
];

// Pre-calculate all global indices
const calculateGlobalIndices = () => {
  const indices = [];
  let globalIndex = 0;

  galleryItems.forEach((section) => {
    if (section.nested && section.items) {
      // For nested sections, each item gets its own index
      section.items.forEach(() => {
        indices.push(globalIndex++);
      });
    } else if (section.items) {
      // For multiple items sections
      section.items.forEach(() => {
        indices.push(globalIndex++);
      });
    } else {
      // For single items
      indices.push(globalIndex++);
    }
  });

  return indices;
};

const globalIndices = calculateGlobalIndices();

// Function to get global index for any item
const getGlobalIndex = (sectionIndex, itemIndex = null) => {
  let count = 0;

  // Count all items before current section
  for (let i = 0; i < sectionIndex; i++) {
    const section = galleryItems[i];
    if (section.items) {
      count += section.items.length;
    } else {
      count += 1;
    }
  }

  // Add current item index
  if (itemIndex !== null) {
    count += itemIndex;
  } else {
    // If no itemIndex provided, it's a single item section
    // count is already correct
  }

  return count;
};

// Handle image click
const handleImageClick = (globalIndex) => {
  console.log('Clicked image index:', globalIndex); // For debugging
  emit('image-click', globalIndex + 1); // +1 because FsLightbox uses 1-based indexing
};
</script>

<template>
  <BContainer fluid>
    <BRow>
      <BCol xs="12" class="gallery-grid-container">
        <BRow class="gallery-img">
          <template v-for="(section, sectionIndex) in galleryItems" :key="sectionIndex">

            <!-- Nested Section -->
            <BCol v-if="section.nested" v-bind="section.cols">
              <BRow>
                <BCol
                    v-for="(item, itemIndex) in section.items"
                    :key="itemIndex"
                    v-bind="item.cols"
                >
                  <div
                      class="imagebox"
                      @click="handleImageClick(getGlobalIndex(sectionIndex, itemIndex))"
                  >
                    <img alt="image" class="img-fluid" :src="img(item.src)" style="cursor:pointer"/>
                    <div class="caption-content">
                      <p>{{ item.caption }}</p>
                    </div>
                  </div>
                </BCol>
              </BRow>
            </BCol>

            <!-- Multiple Items Section (non-nested) -->
            <template v-else-if="section.items">
              <BCol
                  v-for="(item, itemIndex) in section.items"
                  :key="itemIndex"
                  v-bind="section.cols"
              >
                <div
                    class="imagebox"
                    @click="handleImageClick(getGlobalIndex(sectionIndex, itemIndex))"
                >
                  <img alt="image" class="img-fluid" :src="img(item.src)" style="cursor:pointer"/>
                  <div class="caption-content">
                    <p>{{ item.caption }}</p>
                  </div>
                </div>
              </BCol>
            </template>

            <!-- Single Item Section -->
            <BCol v-else v-bind="section.cols">
              <div
                  class="imagebox"
                  @click="handleImageClick(getGlobalIndex(sectionIndex))"
              >
                <img alt="image" class="img-fluid" :src="img(section.src)" style="cursor:pointer"/>
                <div class="caption-content">
                  <p>{{ section.caption }}</p>
                </div>
              </div>
            </BCol>

          </template>
        </BRow>
      </BCol>
    </BRow>
  </BContainer>
</template>