<script setup>
import { ref } from "vue";
import { BCard, BCardBody, BCardImg, BCol, BRow } from "bootstrap-vue-next";
import { IconHeart } from "@tabler/icons-vue";

const cardItems = ref([
    {
        id: 1,
        title: "Entire apartment",
        description: "Nice 24sqm flat, 2min to city center. Excellent center light",
        image: "/images/draggable/01.jpg",
    },
    {
        id: 2,
        title: "The Art of Minimalism",
        description: "The guide offers practical tips on decluttering spaces",
        image: "/images/draggable/02.jpg",
    },
    {
        id: 3,
        title: "Color and Texture",
        description: "It emphasizes the psychological effects of planning",
        image: "/images/draggable/03.jpg",
    },
    {
        id: 4,
        title: "Luxurious Living",
        description: "It emphasizes the importance of strategic planning.",
        image: "/images/draggable/04.jpg",
    },
]);

const dragStartIndex = ref(null);
const dragOverIndex = ref(null);

const onDragStart = (index) => {
    dragStartIndex.value = index;
};

const onDragOver = (event, index) => {
    event.preventDefault();
    dragOverIndex.value = index;
};

const onDragLeave = () => {
    dragOverIndex.value = null;
};

const onDrop = (dropIndex) => {
    if (dragStartIndex.value === null || dragStartIndex.value === dropIndex) {
        dragOverIndex.value = null;
        return;
    }

    const items = [...cardItems.value];
    const draggedItem = items[dragStartIndex.value];

    items.splice(dragStartIndex.value, 1);
    items.splice(dropIndex, 0, draggedItem);

    cardItems.value = items;
    dragStartIndex.value = null;
    dragOverIndex.value = null;
};
</script>

<template>
    <b-row class="draggable-card-responsive">
        <b-col
            v-for="(item, index) in cardItems"
            :key="item.id"
            xs="6"
            sm="6"
            lg="3"
            class="mb-3"
            draggable="true"
            @dragstart="onDragStart(index)"
            @dragover="onDragOver($event, index)"
            @dragleave="onDragLeave"
            @drop="onDrop(index)"
            :class="{ 'blue-background-class': dragOverIndex === index }"
        >
            <b-card class="draggable-card" no-body>
                <b-card-body>
                    <div class="draggable-card-img position-relative">
                        <b-card-img :src="item.image" variant="top" />
                        <div class="draggable-card-icon position-absolute top-0 end-0 m-2">
              <span class="bg-white h-45 w-45 d-flex justify-content-center align-items-center rounded-circle">
                <IconHeart size="18" class="text-danger" />
              </span>
                        </div>
                    </div>
                    <div class="draggable-card-content pt-3">
                        <h6 class="mb-2 fw-500">{{ item.title }}</h6>
                        <p class="text-secondary">{{ item.description }}</p>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>