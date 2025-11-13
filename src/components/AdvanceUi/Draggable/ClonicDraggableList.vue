<script setup>
import {ref} from "vue";
import {BCol, BCard, BCardBody, BCardHeader, BRow} from "bootstrap-vue-next";
import {PhDotsThreeVertical} from "@phosphor-icons/vue";

const clonicMenuItemsLeft = ref([
    {label: "A", title: "Clonic Menu List 1", id: 1},
    {label: "B", title: "Clonic Menu List 2", id: 2},
    {label: "C", title: "Clonic Menu List 3", id: 3},
    {label: "D", title: "Clonic Menu List 4", id: 4},
    {label: "E", title: "Clonic Menu List 5", id: 5},
]);

const clonicMenuItemsRight = ref([
    {label: "A", title: "Clonic Menu List 6", id: 6},
    {label: "B", title: "Clonic Menu List 7", id: 7},
    {label: "C", title: "Clonic Menu List 8", id: 8},
    {label: "D", title: "Clonic Menu List 9", id: 9},
    {label: "E", title: "Clonic Menu List 10", id: 10},
]);

const onDragStart = (event, item, fromLeft) => {
    event.dataTransfer.setData('application/json', JSON.stringify({
        item,
        fromLeft
    }));
};

const onDrop = (event, toLeft) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData('application/json'));

    if (data.fromLeft === toLeft) return; // Don't move within same list

    if (toLeft) {
        clonicMenuItemsLeft.value.push(data.item);
        clonicMenuItemsRight.value = clonicMenuItemsRight.value.filter(i => i.id !== data.item.id);
    } else {
        clonicMenuItemsRight.value.push(data.item);
        clonicMenuItemsLeft.value = clonicMenuItemsLeft.value.filter(i => i.id !== data.item.id);
    }
};

const onDragOver = (event) => {
    event.preventDefault();
};
</script>

<template>
    <b-col xxl="6">
        <b-card class="equal-card" no-body>
            <b-card-header>
                <h5>Draggable Clonic List</h5>
            </b-card-header>

            <b-card-body>
                <b-row>
                    <b-col cols="6" class="box-layout-draggable">
                        <ul
                            class="clonic-menu-list"
                            @drop="onDrop($event, true)"
                            @dragover="onDragOver"
                        >
                            <li
                                v-for="(item, index) in clonicMenuItemsLeft"
                                :key="item.id"
                                draggable="true"
                                @dragstart="onDragStart($event, item, true)"
                            >
                                <div class="clonic-menu-item">
                  <span class="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                    {{ item.label }}
                  </span>
                                    <div class="clonic-menu-content">
                                        <h6 class="mb-0">{{ item.title }}</h6>
                                    </div>
                                    <span>
                    <PhDotsThreeVertical :size="32"/>
                  </span>
                                </div>
                            </li>
                        </ul>
                    </b-col>

                    <b-col cols="6" class="box-layout-draggable">
                        <ul
                            class="clonic-menu-list"
                            @drop="onDrop($event, false)"
                            @dragover="onDragOver"
                        >
                            <li
                                v-for="(item, index) in clonicMenuItemsRight"
                                :key="item.id"
                                draggable="true"
                                @dragstart="onDragStart($event, item, false)"
                            >
                                <div class="clonic-menu-item">
                  <span class="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                    {{ item.label }}
                  </span>
                                    <div class="clonic-menu-content">
                                        <h6 class="mb-0">{{ item.title }}</h6>
                                    </div>
                                    <span>
                    <PhDotsThreeVertical :size="32"/>
                  </span>
                                </div>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
</template>