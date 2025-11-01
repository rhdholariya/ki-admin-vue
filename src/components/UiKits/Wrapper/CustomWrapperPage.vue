<script setup>
import {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BButton
} from "bootstrap-vue-next";
import { PhMagnifyingGlass, PhLink } from "@phosphor-icons/vue";

// Data arrays
const overlayItems = [
    {
        title: "Custome Overlay",
        subtitle: "overlay design",
        image: "/images/wrapper/custome-overlay.jpg"
    }
];

const overlayCards = [
    {
        title: "Custome Overlay",
        description:
            "CSS gradients allow us to display smooth transitions between two or more colors.",
        image: "/images/wrapper/custome-overlay-1.jpg",
        link: "#"
    }
];

const overlayDesign = [
    {
        title: "Custome Overlay",
        subtitle: "Overlay Design",
        image: "/images/wrapper/custome-overlay-2.jpg"
    }
];

const overlayStyle = [
    {
        title: "Custome Overlay",
        subtitle: "Overlay Design",
        image: "/images/wrapper/custome-overlay-3.jpg"
    }
];
</script>

<template>
    <b-col cols="12">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Custome Overlay</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-row>
                                <!-- Overlay Items -->
                                <b-col
                                    v-for="(item, index) in overlayItems"
                                    :key="'overlay-' + index"
                                    xs="6"
                                    sm="6"
                                    lg="3"
                                >
                                    <div class="custome-wrapper position-relative">
                                        <img
                                            :alt="item.title"
                                            :src="item.image"
                                            class="img-fluid rounded"
                                        />
                                        <div
                                            class="custome-wrapper-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
                                        >
                                            <h5>{{ item.title }}</h5>
                                            <span>{{ item.subtitle }}</span>
                                        </div>
                                        <ul class="icon">
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-outline-light h-35 w-35 d-flex align-items-center justify-content-center rounded-circle border"
                                                >
                                                    <PhMagnifyingGlass size="18" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    class="text-outline-light h-35 w-35 d-flex align-items-center justify-content-center rounded-circle border"
                                                >
                                                    <PhLink size="18" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </b-col>

                                <!-- Overlay Cards -->
                                <b-col
                                    v-for="(card, index) in overlayCards"
                                    :key="'overlay-card-' + index"
                                    xs="6"
                                    sm="6"
                                    lg="3"
                                >
                                    <div
                                        class="custome-wrapper-2 position-relative overflow-hidden rounded"
                                    >
                                        <img
                                            :alt="card.title"
                                            :src="card.image"
                                            class="img-fluid"
                                        />
                                        <div class="custome-wrapper-2-content">
                                            <h5>{{ card.title }}</h5>
                                            <p class="mb-3">{{ card.description }}</p>
                                            <b-button
                                                size="sm"
                                                variant="success"
                                                :href="card.link"
                                                class="rounded"
                                            >
                                                Check Now
                                            </b-button>
                                        </div>
                                    </div>
                                </b-col>

                                <!-- Overlay Design -->
                                <b-col
                                    v-for="(item, index) in overlayDesign"
                                    :key="'overlay-design-' + index"
                                    xs="6"
                                    sm="6"
                                    lg="3"
                                >
                                    <div
                                        class="custome-wrapper-3 position-relative overflow-hidden rounded"
                                    >
                                        <img
                                            :alt="item.title"
                                            :src="item.image"
                                            class="img-fluid"
                                        />
                                        <div class="custome-wrapper-content-3">
                                            <h5 class="mb-1">{{ item.title }}</h5>
                                            <span>{{ item.subtitle }}</span>
                                        </div>
                                    </div>
                                </b-col>

                                <!-- Overlay Style -->
                                <b-col
                                    v-for="(item, index) in overlayStyle"
                                    :key="'overlay-style-' + index"
                                    xs="6"
                                    sm="6"
                                    lg="3"
                                >
                                    <div
                                        class="custome-wrapper-4 position-relative overflow-hidden rounded"
                                    >
                                        <img
                                            :alt="item.title"
                                            :src="item.image"
                                            class="img-fluid"
                                        />
                                        <div class="custome-wrapper-content-4">
                                            <h5 class="mb-1">{{ item.title }}</h5>
                                            <span>{{ item.subtitle }}</span>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-card>
                </b-col>
</template>
