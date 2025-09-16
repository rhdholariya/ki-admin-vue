<script setup>
import { BCard, BRow, BCol } from "bootstrap-vue-next";
import { PhHeart } from "@phosphor-icons/vue";

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
    <b-row>
        <!-- Top Image Card -->
        <b-col md="6" xxl="4">
            <BCard img-src="/images/blog-app/06.jpg" img-top class="hover-effect">
                <h5 class="mb-2">Card Title</h5>
                <p>This is a wider card with supporting text below as a natural lead-in to.</p>
                <small class="text-body-secondary">Last updated 3 min's ago</small>
            </BCard>
        </b-col>

        <!-- Bottom Image Card -->
        <b-col md="6" xxl="4">
            <BCard img-src="/images/blog-app/02.jpg" img-bottom class="hover-effect">
                <h5 class="mb-2">Card Title</h5>
                <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <small class="text-body-secondary">Last updated 3 min's ago</small>
            </BCard>
        </b-col>

        <!-- Profile + Featured Cards -->
        <b-col xxl="4">
            <b-row>
                <!-- Profile Card -->
                <b-col md="6" xxl="12">
                    <div class="card hover-effect">
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
                            <b-row>
                                <b-col class="d-flex align-items-center">
                                    <PhHeart size="16" weight="fill" class="text-danger f-s-16 me-2" />
                                    <span>60 likes</span>
                                </b-col>
                                <b-col cols="6">
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
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-col>

                <!-- Featured List Card -->
                <b-col md="6" xxl="12" >
                    <div class="card hover-effect">
                        <div class="card-header">Featured</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" v-for="(item, index) in listItems" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>
