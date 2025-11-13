<script setup>
import { ref, onMounted } from "vue";
import { BCol, BCard, BCardBody, BCardHeader } from "bootstrap-vue-next";
import { PhAnchorSimple } from "@phosphor-icons/vue";

const handleListItems = ref([
    { color: "primary", text: "A simple primary list group item", id: 1 },
    { color: "secondary", text: "A simple secondary list group item", id: 2 },
    { color: "success", text: "A simple success list group item", id: 3 },
    { color: "danger", text: "A simple danger list group item", id: 4 },
    { color: "warning", text: "A simple warning list group item", id: 5 },
    { color: "info", text: "A simple info list group item", id: 6 },
    { color: "dark", text: "A simple dark list group item", id: 7 },
]);

const dragStartIndex = ref(null);

const onDragStart = (index) => {
    dragStartIndex.value = index;
};

const onDragOver = (event) => {
    event.preventDefault();
};

const onDrop = (dropIndex) => {
    if (dragStartIndex.value === null || dragStartIndex.value === dropIndex) return;

    const items = [...handleListItems.value];
    const draggedItem = items[dragStartIndex.value];


    items.splice(dragStartIndex.value, 1);

    items.splice(dropIndex, 0, draggedItem);

    handleListItems.value = items;
    dragStartIndex.value = null;
};
</script>

<template>
    <b-col xxl="6">
        <b-card class="equal-card" no-body>
            <b-card-header>
                <h5>Draggable Handle List</h5>
            </b-card-header>
            <b-card-body>
                <ul class="list-group handle-list-group">
                    <li
                        v-for="(item, index) in handleListItems"
                        :key="item.id"
                        :class="`list-group-item text-light-${item.color}`"
                        draggable="true"
                        @dragstart="onDragStart(index)"
                        @dragover="onDragOver"
                        @drop="onDrop(index)"
                    >
                        <PhAnchorSimple
                            size="18"
                            weight="bold"
                            class="list-handle"
                            @mousedown.stop
                        />
                        {{ item.text }}
                    </li>
                </ul>
            </b-card-body>
        </b-card>
    </b-col>
</template>