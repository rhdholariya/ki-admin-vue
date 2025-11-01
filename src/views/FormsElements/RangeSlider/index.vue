<script setup>
import { ref } from "vue";
import NoUiSlider from "nouislider-vue3";
import "nouislider/dist/nouislider.css";

import {
    BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BButton
} from "bootstrap-vue-next";

import AppLayout from "@/views/AppLayout.vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import { PhCardholder } from "@phosphor-icons/vue";

// breadcrumb data
const breadcrumbItems = {
    title: "Range Slider",
    items: [
        { label: "Forms elements", icon: PhCardholder },
        { label: "Range slider", active: true },
    ],
};

// slider refs
const slider1 = ref(20);
const slider2 = ref(20);
const isLocked = ref(false);

// live update handlers
function updateSlider1(values, handle) {
    slider1.value = Number(values[handle]);
    if (isLocked.value) slider2.value = slider1.value;
}
function updateSlider2(values, handle) {
    slider2.value = Number(values[handle]);
    if (isLocked.value) slider1.value = slider2.value;
}

// lock toggle
function toggleLock() {
    isLocked.value = !isLocked.value;
    if (isLocked.value) slider2.value = slider1.value;
}
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems" />

                <BRow>
                    <BCol cols="12">
                        <BCard>
                            <BCardHeader><h5>Value Slider (Live Update)</h5></BCardHeader>
                            <BCardBody>

                                <!-- ✅ Slider 1 -->
                                <div class="mb-4">
                                    <label class="form-label">Slider 1</label>

                                    <NoUiSlider
                                        v-model="slider1"
                                        :start="[slider1]"
                                        :range="{ min: 0, max: 100 }"
                                        :connect="[true, false]"
                                        class="slider-round"
                                        @update="updateSlider1"
                                    />

                                    <div class="mt-2 fw-bold">Value: {{ Math.round(slider1) }}</div>
                                </div>

                                <!-- ✅ Slider 2 with lock button -->
                                <div class="mb-4 position-relative">
                                    <label class="form-label">Slider 2</label>

                                    <NoUiSlider
                                        v-model="slider2"
                                        :start="[slider2]"
                                        :range="{ min: 0, max: 100 }"
                                        :connect="[true, false]"
                                        class="slider-round"
                                        @update="updateSlider2"
                                    />

                                    <div class="mt-2 fw-bold">Value: {{ Math.round(slider2) }}</div>

                                    <BButton
                                        variant="primary"
                                        class="position-absolute top-0 end-0 mt-2 me-2"
                                        @click="toggleLock"
                                    >
                                        {{ isLocked ? "Unlock" : "Lock" }}
                                    </BButton>
                                </div>

                            </BCardBody>
                        </BCard>
                    </BCol>
                </BRow>
            </b-container>
        </main>
    </AppLayout>
</template>

<style>
.slider-round .noUi-handle {
    border-radius: 50% !important;
}
</style>
