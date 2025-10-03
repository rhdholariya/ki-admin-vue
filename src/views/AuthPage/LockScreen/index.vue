<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { BContainer, BRow, BCol, BForm, BFormGroup, BFormInput, BButton } from "bootstrap-vue-next";

const router = useRouter();
const isSubmitting = ref(false);

const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;

    // Simulate API call
    setTimeout(() => {
        isSubmitting.value = false;
        router.push("/"); // Navigate to home
    }, 1000);
};
</script>

<template>
    <div class="sign-in-bg">
        <div class="main-container">
            <b-container>
                <b-row class="main-content-box">

                    <!-- Left Image Box -->
                    <b-col lg="7" class="image-contentbox d-none d-lg-block">
                        <div class="form-container">
                            <div class="signup-content mt-4">
                                <span>
                                    <img src="/images/logo/1.png" alt="Logo" class="img-fluid" />
                                </span>
                            </div>
                            <div class="signup-bg-img">
                                <img src="/images/login/06.png" alt="Background" class="img-fluid" />
                            </div>
                        </div>
                    </b-col>

                    <!-- Form Box -->
                    <b-col lg="5" class="form-content-box">
                        <div class="form-container">
                            <b-form class="app-form" @submit="handleSubmit">

                                <b-row>

                                    <!-- User Avatar -->
                                    <b-col cols="12">
                                        <div class="mb-3 user-screen text-center">
                                            <div class="w-90 h-90 b-r-15 d-flex-center overflow-hidden text-bg-primary">
                                                <img src="/images/avatar/14.png" alt="avatar" class="img-fluid" />
                                            </div>
                                        </div>
                                    </b-col>

                                    <!-- Header -->
                                    <b-col cols="12">
                                        <div class="mb-5 text-center text-lg-start">
                                            <h2 class="text-white fw-semibold">
                                                Lock <span class="text-dark fw-semibold">Screen</span>
                                            </h2>
                                            <p>Hello, enter your password to unlock the screen</p>
                                        </div>
                                    </b-col>

                                    <!-- Password Input -->
                                    <b-col cols="12">
                                        <b-form-group
                                            label="Password"
                                            label-for="password"
                                            class="mb-3"
                                        >
                                            <b-form-input
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Enter Your Password"
                                                required
                                                class="form-control"
                                            />
                                            <p class="text-white f-s-14 mt-2 f-w-400">
                                                Enter Your Password to View your Screen
                                            </p>
                                        </b-form-group>
                                    </b-col>

                                    <!-- Remember Me -->
                                    <b-col cols="12">
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" id="rememberMe" name="rememberMe" class="form-check-input w-15 h-15"/>
                                            <label for="rememberMe" class="text-white f-s-16 form-check-label">Remember me</label>
                                        </div>
                                    </b-col>

                                    <!-- Submit Button -->
                                    <b-col cols="12" class="mt-3">
                                        <b-button type="submit" class="w-100 mb-3" variant="primary">
                                            <template v-if="isSubmitting">
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            </template>
                                            <template v-else>
                                                Unlock
                                            </template>
                                        </b-button>
                                    </b-col>

                                </b-row>

                            </b-form>
                        </div>
                    </b-col>

                </b-row>
            </b-container>
        </div>
    </div>
</template>
