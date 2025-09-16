<script setup>
import { PhHeart } from "@phosphor-icons/vue";
import {BCard} from "bootstrap-vue-next";

const avatarImages = [
    "/images/avatar/4.png",
    "/images/avatar/1.png",
    "/images/avatar/2.png",
    "/images/avatar/3.png",
];
const avatarBgClasses = [
    "text-bg-danger",
    "text-bg-success",
    "text-bg-warning",
    "text-bg-info",
];

const listItems = ["An item", "A second item", "A third item", "A Fourth item"];
</script>

<template>
    <div class="row">
        <!-- Top Image Card -->
        <div class="col-md-6 col-xxl-4">
            <b-card img-src="/images/blog-app/06.jpg" img-top class="hover-effect">


                    <h5 class="mb-2">Card Title</h5>
                    <p>This is a wider card with supporting text below as a natural lead-in to.</p>
                    <small class="text-body-secondary">Last updated 3 min's ago</small>

            </b-card>
        </div>

        <!-- Bottom Image Card -->
        <div class="col-md-6 col-xxl-4">
            <b-card img-src="/images/blog-app/02.jpg" img-bottom class="hover-effect">
                <h5 class="mb-2">Card Title</h5>
                <p>This is a wider card with supporting text below as a natural lead-in to additional This content.</p>
                <small class="text-body-secondary">Last updated 3 min's ago</small>
            </b-card>
        </div>

        <!-- Profile Card -->
        <div class="col-xxl-4">
            <div class="row">
                <div class="col-md-6 col-xxl-12">
                    <b-card class="card hover-effect">
                        <div class="card-header">
                            <h6 class="mb-0 mt-2 f-w-600">My Profile</h6>
                        </div>
                        <div class="p-3">
                            <p>
                                I am a keen, hard working, reliable and excellent time keeper.
                                I am a bright and receptive person
                            </p>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col-6">
                                    <PhHeart size="16" weight="fill" class="text-danger f-s-16 me-2" />
                                    <span>60 likes</span>
                                </div>
                                <div class="col-6">
                                    <ul class="avatar-group float-end">
                                        <li
                                            v-for="(src, i) in avatarImages"
                                            :key="i"
                                            class="h-25 w-25 d-flex-center b-r-50 b-2-light position-relative"
                                            :class="avatarBgClasses[i]"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Sabrina Torres"
                                        >
                                            <img :src="src" class="img-fluid b-r-50 overflow-hidden" />
                                        </li>
                                        <li
                                            class="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="5 More"
                                        >
                                            5+
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </b-card>
                </div>

                <!-- Featured List Card -->
                <div class="col-md-6 col-xxl-12 mt-3 mt-md-0">
                    <div class="card hover-effect">
                        <div class="card-header">Featured</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{ listItems[0] }}</li>
                            <li class="list-group-item">{{ listItems[1] }}</li>
                            <li class="list-group-item">{{ listItems[2] }}</li>
                            <li class="list-group-item">{{ listItems[3] }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Left / Content Right Card -->
        <div class="col-xl-6">
            <div class="card hover-effect mb-3">
                <div class="row g-0">
                    <div class="col-md-6 col-xl-4">
                        <img src="/images/blog-app/08.jpg" class="img-fluid" alt="..." />
                    </div>
                    <div class="col-md-6 col-xl-8">
                        <div class="p-3">
                            <h5>Card Title</h5>
                            <p>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                            <small class="text-body-secondary">Last updated 3 min's ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
