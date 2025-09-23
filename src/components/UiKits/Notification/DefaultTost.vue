<script setup>
import { ref } from "vue";
import { BCard, BCardBody, BButton, BCol, BRow , BAlert} from "bootstrap-vue-next";

// Toast visibility states
const showDefault = ref(true);
const showCustom = ref(true);
const showPrimary = ref(true);

// Close handlers
const closeDefault = () => (showDefault.value = false);
const closeCustom = () => (showCustom.value = false);

</script>

<template>
    <b-col cols="12">
        <b-card>
            <template #header>
                <div class="code-header">
                    <h5>Bootstrap Toasts</h5>
                </div>
            </template>

            <b-card-body>
                <b-row>
                    <!-- Default Toast -->
                    <b-col lg="4" class="mb-4 mb-lg-0" v-if="showDefault">
                        <div
                            aria-atomic="true"
                            aria-live="assertive"
                            class="toast d-block b-1-primary bg-light-primary"
                            role="alert"
                        >
                            <div class="toast-header b-b-1-primary bg-light-primary">
                                <img
                                    alt=""
                                    class="rounded me-2 h-30 w-30 b-r-4"
                                    src="/images/logo/3.png"
                                />
                                <strong class="me-auto">ki-admin</strong>
                                <div class="b-r-8 text-primary">
                                    <b-button size="sm" variant="close" @click="closeDefault"  />
                                </div>
                            </div>
                            <div class="toast-body border-primary border-opacity-25">
                                Hello, world! This is a toast message.
                            </div>
                        </div>
                    </b-col>

                    <!-- Custom Content Toast -->
                    <b-col lg="4" class="mb-4 mb-lg-0" v-if="showCustom">

                        <div
                            aria-atomic="true"
                            aria-live="assertive"
                            class="toast custom-content-toast d-block"
                            role="alert"
                        >
                            <div class="toast-body">
                                Hello, world! This is a toast message.
                                <div class="mt-2 pt-2 border-top">
                                    <b-button variant="primary" size="sm">Take action</b-button>
                                    <b-button variant="secondary" class="ms-2" size="sm" @click="closeCustom">
                                        Close
                                    </b-button>
                                </div>
                            </div>
                        </div>
                    </b-col>

                    <!-- Color Schemes Toasts -->
                    <b-col lg="4" class="mb-4 mb-lg-0">

                            <b-alert show dismissible class="bg-primary">
                                Hello, world! This is a toast message.
                            </b-alert>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </b-col>
</template>
