<script setup>
import { ref } from "vue";
import { BCard, BCardHeader, BCardBody, BButton, BCol, BRow } from "bootstrap-vue-next";

const showDefault = ref(true);
const showCustom = ref(true);
const showColor = ref(true);
const showPlacement = ref(false);

const closeDefault = () => (showDefault.value = false);
const closeCustom = () => (showCustom.value = false);
const closeColor = () => (showColor.value = false);
const handleShowPlacement = () => (showPlacement.value = true);
const handleClosePlacement = () => (showPlacement.value = false);
</script>

<template>
    <b-row>
        <b-col cols="12">
            <b-card no-body>
                <b-card-header>
                    <div class="code-header">
                        <h5>Bootstrap Toasts</h5>
                    </div>
                </b-card-header>
                <b-card-body>
                    <b-row>
                        <b-col lg="4" v-if="showDefault" class="mb-4 mb-lg-0">
                            <div class="toast d-block b-1-primary bg-light-primary" role="alert">
                                <div class="toast-header b-b-1-primary bg-light-primary d-flex align-items-center">
                                    <img alt="" class="rounded me-2 h-30 w-30 b-r-4" src="/images/logo/3.png" />
                                    <strong class="me-auto">ki-admin</strong>
                                    <b-button size="sm" variant="close" @click="closeDefault" />
                                </div>
                                <div class="toast-body border-primary border-opacity-25">
                                    Hello, world! This is a toast message.
                                </div>
                            </div>
                        </b-col>

                        <b-col lg="4" v-if="showCustom" class="mb-4 mb-lg-0">
                            <div class="toast custom-content-toast d-block" role="alert">
                                <div class="toast-body">
                                    Hello, world! This is a toast message.
                                    <div class="mt-2 pt-2 border-top">
                                        <b-button variant="primary" size="sm">Take action</b-button>
                                        <b-button variant="secondary" size="sm" class="ms-2" @click="closeCustom">
                                            Close
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </b-col>

                        <b-col lg="4" v-if="showColor" class="mb-4 mb-lg-0">
                            <div class="toast d-block bg-primary text-white" role="alert">
                                <div class="toast-header bg-primary text-white">
                                    <strong class="me-auto">Primary</strong>
                                    <b-button size="sm" variant="close" @click="closeColor" />
                                </div>
                                <div class="toast-body border-white border-opacity-25">
                                    Hello, world! This is a toast message.
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col cols="12" class="mt-4">
            <b-card no-body>
                <b-card-header>
                    <h5>Placement Toasts</h5>
                </b-card-header>
                <b-card-body>
                    <b-button variant="light-primary" @click="handleShowPlacement">
                        Show Toast
                    </b-button>

                    <div class="mt-3" v-if="showPlacement">
                        <div class="toast d-block mt-3" role="alert">
                            <div class="toast-header bg-light-primary border-primary border-opacity-25 p-2 d-flex align-items-center">
                                <strong class="me-auto">Toast Header</strong>
                                <b-button size="sm" variant="close" @click="handleClosePlacement" />
                            </div>
                            <div class="toast-body">
                                Some text inside the toast body
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
