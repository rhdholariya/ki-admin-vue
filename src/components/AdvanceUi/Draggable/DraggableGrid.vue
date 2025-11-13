<script setup>
import { ref } from "vue";
import { BCol, BCard, BCardBody, BCardHeader } from "bootstrap-vue-next";

const gridItems = ref(Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    label: `Grid-${i + 1}`
})));

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

    const items = [...gridItems.value];
    const draggedItem = items[dragStartIndex.value];

    items.splice(dragStartIndex.value, 1);
    items.splice(dropIndex, 0, draggedItem);

    gridItems.value = items;
    dragStartIndex.value = null;
    dragOverIndex.value = null;
};
</script>

<template>
    <b-col xxl="6">
        <b-card class="equal-card" no-body>
            <b-card-header>
                <h5>Draggable Grid</h5>
            </b-card-header>
            <b-card-body>
                <ul class="grid-box-list">
                    <li
                        v-for="(item, index) in gridItems"
                        :key="item.id"
                        draggable="true"
                        @dragstart="onDragStart(index)"
                        @dragover="onDragOver($event, index)"
                        @dragleave="onDragLeave"
                        @drop="onDrop(index)"
                        :class="{ 'highlight': dragOverIndex === index }"
                    >
                        <div class="grid-box">
                            <h6>{{ item.label }}</h6>
                        </div>
                    </li>
                </ul>
            </b-card-body>
        </b-card>
    </b-col>
</template>