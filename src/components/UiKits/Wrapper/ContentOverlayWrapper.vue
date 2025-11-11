<script setup>
import {BCard, BCardHeader, BCardBody, BRow, BCol} from "bootstrap-vue-next";

const overlayItems = [
    {
        title: 'Left Overlay',
        description:
            'This overlay could be static, appearing on the page load, or dynamic, appearing based on user interaction.',
        image: '/images/wrapper/content-overlay.jpg',
        position: 'left',
    },
    {
        title: 'Right Overlay',
        description:
            "It seems like you're referring to a technique or feature related to displaying application content.",
        image: '/images/wrapper/content-overlay-2.jpg',
        position: 'right',
    },
    {
        title: 'Top Overlay',
        description:
            'To create an overlay that appears over the main content when you hover using HTML, CSS, or more complex behaviors.',
        image: '/images/wrapper/content-overlay-3.jpg',
        position: 'top',
    },
    {
        title: 'Bottom Overlay',
        description:
            'Bottom overlay related content typically refers to additional information below the main content of a webpage.',
        image: '/images/wrapper/content-overlay-4.jpg',
        position: 'bottom',
    },
]

const imageWrapper = [
    {image: '/images/wrapper/overlay-1.jpg'},
    {image: '/images/wrapper/overlay-2.jpg', position: 'bottom'},
    {image: '/images/wrapper/overlay-3.jpg', position: 'top'},
    {image: '/images/wrapper/overlay-4.jpg', position: 'top'},
]
</script>

<template>
    <b-col cols="12">
        <b-card no-body>
            <b-card-header>
                <h5>Content Overlay</h5>
            </b-card-header>
            <b-card-body>
                <b-row>
                    <b-col
                        v-for="(item, index) in overlayItems"
                        :key="index"
                        cols="6"
                        sm="6"
                        lg="3"
                    >
                        <div :class="`content-overlay content-overlay-${item.position} position-relative`">
                            <img :src="item.image" :alt="item.title" class="img-fluid"/>
                            <div class="content-overlay-text">
                                <h5 class="mb-2">{{ item.title }}</h5>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>

    <b-col cols="12">
        <b-card no-body>
            <b-card-header>
                <h5>Basic Overlay</h5>
            </b-card-header>
            <b-card-body>
                <b-row>
                    <b-col
                        v-for="(item, index) in imageWrapper"
                        :key="index"
                        cols="6"
                        sm="6"
                        lg="3"
                    >
                        <div
                            :class="`wraper ${item.position ? `wrapper-${item.position}` : ''} position-relative`"
                        >
                            <img
                                :src="item.image"
                                :alt="`Overlay ${index + 1}`"
                                class="img-fluid"
                            />
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
</template>
