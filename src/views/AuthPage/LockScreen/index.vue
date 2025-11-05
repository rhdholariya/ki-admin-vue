<script setup>
import {ref, reactive} from "vue";
import {useRouter} from "vue-router";
import {BContainer, BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BFormCheckbox, BSpinner} from "bootstrap-vue-next";

const router = useRouter();
const isSubmitting = ref(false);

const form = reactive({
    password: '',
    rememberMe: false
});

const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;

    setTimeout(() => {
        isSubmitting.value = false;
        router.push("/");
    }, 1000);
};
</script>

<template>
    <div class="sign-in-bg">
        <div class="main-container">
            <b-container>
                <b-row class="main-content-box">

                    <b-col lg="7" class="image-contentbox d-none d-lg-block">
                        <div class="form-container">
                            <div class="signup-content mt-4">
                                <span>
                                    <img src="/images/logo/1.png" alt="Logo" class="img-fluid"/>
                                </span>
                            </div>
                            <div class="signup-bg-img">
                                <img src="/images/login/06.png" alt="Background" class="img-fluid"/>
                            </div>
                        </div>
                    </b-col>

                    <b-col lg="5" class="form-content-box">
                        <div class="form-container">
                            <b-form class="app-form" @submit="handleSubmit">

                                <b-row>

                                    <b-col cols="12">
                                        <div class="mb-3 user-screen text-center">
                                            <div class="w-90 h-90 b-r-15 d-flex-center overflow-hidden text-bg-primary">
                                                <img src="/images/avatar/14.png" alt="avatar" class="img-fluid"/>
                                            </div>
                                        </div>
                                    </b-col>

                                    <b-col cols="12">
                                        <div class="mb-5 text-center text-lg-start">
                                            <h2 class="text-white fw-semibold">
                                                Lock <span class="text-dark fw-semibold">Screen</span>
                                            </h2>
                                            <p>Hello, enter your password to unlock the screen</p>
                                        </div>
                                    </b-col>

                                    <b-col cols="12">
                                        <b-form-group
                                            label="Password"
                                            label-for="password"
                                            class="mb-3"
                                        >
                                            <b-form-input
                                                id="password"
                                                v-model="form.password"
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

                                    <b-col cols="12">
                                        <b-form-checkbox
                                            id="rememberMe"
                                            v-model="form.rememberMe"
                                            class="mb-3"
                                        >
                                            <span class="text-white f-s-16">Remember me</span>
                                        </b-form-checkbox>
                                    </b-col>

                                    <b-col cols="12" class="mt-3">
                                        <b-button
                                            type="submit"
                                            class="w-100 mb-3"
                                            variant="primary"
                                            :disabled="isSubmitting"
                                        >
                                            <template v-if="isSubmitting">
                                                <!-- Use Bootstrap-Vue spinner -->
                                                <b-spinner small type="border" />
                                                Unlocking...
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