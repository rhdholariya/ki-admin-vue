<script setup>
import {PhBriefcase} from "@phosphor-icons/vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
} from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import {
    PhTextAlignCenter,
    PhTextAlignLeft,
    PhTextAlignRight,
    PhAlignCenterHorizontal,
    PhAlignCenterVertical
} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";

// === Items for text alignment
const items = [
    { className: "top-center", icon: PhTextAlignCenter, label: "top-center" },
    { className: "center", icon: PhTextAlignCenter, label: "center" },
    { className: "bottom-center", icon: PhTextAlignCenter, label: "bottom-center" },
    { className: "left-center", icon: PhTextAlignLeft, label: "left-center" },
    { className: "right-center", icon: PhTextAlignRight, label: "right-center" },
    { className: "top-left", icon: PhTextAlignLeft, label: "top-left" },
    { className: "top-right", icon: PhTextAlignRight, label: "top-right" },
    { className: "bottom-left", icon: PhTextAlignLeft, label: "bottom-left" },
    { className: "bottom-right", icon: PhTextAlignRight, label: "bottom-right" },
    { className: "center-horizontal", icon: PhAlignCenterHorizontal, label: "center-horizontal" },
    { className: "center-vertical", icon: PhAlignCenterVertical, label: "center-vertical" }
];

// === Image alignment positions
const imagePositions = [
    { className: "image-top-left", label: "image-top-left" },
    { className: "image-center", label: "image-center" },
    { className: "image-bottom-right", label: "image-bottom-right" },
    { className: "image-top-right", label: "image-top-right" },
    { className: "image-bottom-left", label: "image-bottom-left" }
];

// Breadcrumb
const breadcrumbItems = {
    title: "Alignment",
    items: [
        {label: "Ui Kits", icon: PhBriefcase},
        {label: "Alignment", active: true}
    ]
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
    <b-container fluid>
        <!-- Text Alignment Section -->
        <b-col cols="12">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Text Alignment</h5>
                </b-card-header>

                <b-card-body>
                    <b-row class="center-thing-responsive">
                        <b-col
                            v-for="(item, index) in items"
                            :key="index"
                            xs="4"
                            md="3"
                            xxl="2"
                        >
                            <div class="center-thing mt-3">
                                <div :class="item.className">
                                    <component
                                        :is="item.icon"
                                        :size="50"
                                        weight="light"
                                        class="text-primary"
                                    />
                                </div>
                            </div>
                            <p class="f-s-16 text-center m-2">{{ item.label }}</p>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>

        <!-- Image Alignment Section -->
        <b-col cols="12">
            <b-card no-body>
                <b-card-header class="code-header">
                    <h5>Image Alignment</h5>
                </b-card-header>

                <b-card-body>
                    <b-col xl="12">
                        <b-row>
                            <b-col
                                v-for="(position, index) in imagePositions"
                                :key="index"
                                xl="3"
                                class="mb-3"
                            >
                                <div class="image-center-thing">
                                    <div :class="position.className">
                                        <img
                                            src="/images/placeholder/05.png"
                                            alt=""
                                            class="rounded"
                                        />
                                    </div>
                                </div>
                                <p class="f-s-16 text-center m-2">{{ position.label }}</p>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-card-body>
            </b-card>
        </b-col>
    </b-container>
        </main>
    </AppLayout>
</template>
