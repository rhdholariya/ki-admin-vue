<script setup>
import { ref } from "vue";
import {
    BCard,
    BTab,
    BTabs,
    BCol,
    BRow, BCardBody,
} from "bootstrap-vue-next";

import {
    PhClockCounterClockwise,
    PhDisc,
    PhKeyboard,
    PhStar,
    PhLifebuoy,
    PhFileX,
} from "@phosphor-icons/vue";

const activeTab1 = ref("description");
const activeTab2 = ref("features");
</script>

<template>
    <b-row>
        <!-- First Card (Image Left) -->
        <b-col xl="6">
            <b-card no-body class="hover-effect mb-3">
                <b-row no-gutters>
                    <b-col md="6" xl="4">
                        <img src="/images/blog-app/08.jpg" class="img-fluid" alt="..." />
                    </b-col>
                    <b-col md="6" xl="8">
                        <b-card-body>
                            <h5>Card Title</h5>
                            <p>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                            <small class="text-body-secondary">Last updated 3 min's ago</small>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </b-col>

        <!-- First Tab Card -->
        <b-col xl="6">
            <b-card class="hover-effect equal-card tab-card">
                <b-tabs
                    v-model="activeTab1"
                    content-class="mt-3"
                    nav-class="tab-light-primary"
                    active-nav-item-class="active"
                    fill
                >
                    <!-- Description -->
                    <b-tab key="description" active title-link-class="d-flex align-items-center">
                        <template #title>
                            <PhLifebuoy size="18" weight="duotone" class="me-1" /> Description
                        </template>
                        <p>
                            The idea is to use <code>:target</code> pseudoclass to show tabs,
                            use anchors with fragment identifiers to switch between them.
                        </p>
                    </b-tab>

                    <!-- How it Works -->
                    <b-tab key="howworks" title-link-class="d-flex align-items-center">
                        <template #title>
                            <PhKeyboard size="18" weight="duotone" class="me-1" /> How It Works
                        </template>
                        <ol>
                            <li>Show only the last tab.</li>
                            <li>
                                If <code>:target</code> matches a tab, show it and hide all
                                following siblings.
                            </li>
                            <li>Matches a tab, show it and hide all following siblings.</li>
                        </ol>
                    </b-tab>

                    <!-- Drawbacks -->
                    <b-tab key="drawbacks" title-link-class="d-flex align-items-center">
                        <template #title>
                            <PhFileX size="18" weight="duotone" class="me-1" /> Drawbacks
                        </template>
                        <p>
                            The idea is to use <code>:target</code> pseudoclass to show tabs,
                            use anchors with fragment identifiers to switch between them.
                        </p>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-col>

        <!-- Middle Card (Image Right) -->
        <b-col xl="6">
            <b-card no-body class="hover-effect mb-3">
                <b-row no-gutters>
                    <b-col md="6" xl="8">
                        <b-card-body>
                            <h5>Card Title</h5>
                            <p>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                            <small class="text-body-secondary">Last updated 3 min's ago</small>
                        </b-card-body>
                    </b-col>
                    <b-col md="6" xl="4">
                        <img src="/images/blog-app/09.jpg" class="img-fluid" alt="..." />
                    </b-col>
                </b-row>
            </b-card>
        </b-col>

        <!-- Second Tab Card -->
        <b-col xl="6">
            <b-card class="hover-effect equal-card tab-card">
                <b-tabs
                    v-model="activeTab2"
                    content-class="mt-3"
                    nav-class="tab-primary bg-primary p-1"
                    active-nav-item-class="active"
                    fill
                >
                    <!-- Features -->
                    <b-tab key="features" active title-link-class="d-flex align-items-center">
                        <template #title>
                            <PhDisc size="18" weight="duotone" class="me-1" /> Features
                        </template>
                        <p>
                            The idea is to use <code>:target</code> pseudoclass to show tabs,
                            use anchors with fragment identifiers to switch between them.
                        </p>
                    </b-tab>

                    <!-- History -->
                    <b-tab key="history" title-link-class="d-flex align-items-center">
                        <template #title>
                            <PhClockCounterClockwise size="18" weight="duotone" class="me-1" />
                            History
                        </template>
                        <ol>
                            <li>Show only the last tab.</li>
                            <li>
                                If <code>:target</code> matches a tab, show it and hide all
                                following siblings.
                            </li>
                            <li>Matches a tab, show it and hide all following siblings.</li>
                        </ol>
                    </b-tab>

                    <!-- Reviews -->
                    <b-tab key="reviews" title-link-class="d-flex align-items-center">
                        <template #title>
                            <PhStar size="18" weight="duotone" class="me-1" /> Reviews
                        </template>
                        <p>
                            The idea is to use <code>:target</code> pseudoclass to show tabs,
                            use anchors with fragment identifiers to switch between them.
                        </p>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-col>
    </b-row>
</template>
