<script setup>
import { BCard, BRow, BCol, BCardBody, BTooltip } from "bootstrap-vue-next";
import { PhHeart } from "@phosphor-icons/vue";
import { ref } from "vue";

const avatarImages = [
    "/images/avatar/4.png",
    "/images/avatar/1.png",
    "/images/avatar/2.png",
    "/images/avatar/3.png",
];


const listItems = ["An item", "A second item", "A third item", "A Fourth item"];

const tooltipData = ref([
    { name: "Sabrina Torres" },
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Mike Johnson" },
    { name: "5 More" }
]);
</script>

<template>
    <b-row>
        <b-col md="6" xxl="4">
            <b-card img-src="/images/blog-app/06.jpg" img-top class="hover-effect" no-body>
                <b-card-body>
                    <h5 class="mb-2">Card Title</h5>
                    <p>This is a wider card with supporting text below as a natural lead-in to.</p>
                    <small class="text-body-secondary">Last updated 3 min's ago</small>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col md="6" xxl="4">
            <b-card no-body class="hover-effect">
                <b-card-body>
                    <h5 class="mb-2">Card Title</h5>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <small class="text-body-secondary">Last updated 3 min's ago</small>
                </b-card-body>
                <img src="/images/blog-app/02.jpg" alt="Card image">
            </b-card>
        </b-col>
        <b-col xxl="4">
            <b-row>
                <b-col md="6" xxl="12">
                    <b-card no-body class="hover-effect">
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
                                        >
                                            <b-tooltip :target="`avatar-tooltip-${i}`" placement="top">
                                                {{ tooltipData[i]?.name || 'User' }}
                                            </b-tooltip>
                                            <img
                                                :id="`avatar-tooltip-${i}`"
                                                :src="src"
                                                class="img-fluid b-r-50 overflow-hidden"
                                                :alt="`Avatar ${i + 1}`"
                                            />
                                        </li>
                                        <li
                                            class="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                                        >
                                            <!-- Vue Bootstrap Tooltip for counter -->
                                            <b-tooltip target="more-tooltip" placement="top">
                                                {{ tooltipData[4]?.name }}
                                            </b-tooltip>
                                            <span id="more-tooltip">5+</span>
                                        </li>
                                    </ul>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card>
                </b-col>

                <b-col md="6" xxl="12">
                    <b-card no-body class="hover-effect">
                        <div class="card-header">Featured</div>
                        <ul class="list-group list-group-flush">
                            <li
                                class="list-group-item"
                                v-for="(item, index) in listItems"
                                :key="index"
                            >
                                {{ item }}
                            </li>
                        </ul>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>