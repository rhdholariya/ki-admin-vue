<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {
    BContainer,
    BRow,
    BCol,
    BForm,
    BFormInput,
    BButton,
} from "bootstrap-vue-next";

const router = useRouter();

const formValues = reactive({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
});

const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/auth-pages/sign-in");
};
</script>

<template>
    <div class="app-wrapper d-block sign-in-bg">
        <div class="main-container">
            <b-container>
                <b-row class="main-content-box">
                    <b-col lg="7" class="image-contentbox d-none d-lg-block">
                        <div class="form-container">
                            <div class="signup-content mt-4">
                <span>
                  <img
                      src="/images/logo/1.png"
                      alt="Logo"
                      class="img-fluid"
                  />
                </span>
                            </div>
                            <div class="signup-bg-img">
                                <img
                                    src="/images/login/03.png"
                                    alt="Background"
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                    </b-col>

                    <b-col lg="5" class="form-content-box">
                        <div class="form-container">
                            <b-form class="app-form" @submit="handleSubmit">
                                <b-row>
                                    <b-col cols="12">
                                        <div class="mb-5 text-center text-lg-start">
                                            <h2 class="text-white fw-bold">
                                                Reset Your <span class="text-dark fw-bold">Password</span>
                                            </h2>
                                            <p>Create a new password and sign in to admin</p>
                                        </div>
                                    </b-col>

                                    <b-col cols="12">
                                        <div class="mb-3">
                                            <b-form-input
                                                type="password"
                                                placeholder="Current Password"
                                                v-model="formValues.currentPassword"
                                                required
                                                class="form-control"
                                            />
                                        </div>
                                    </b-col>

                                    <b-col lg="6">
                                        <div class="mb-3">
                                            <b-form-input
                                                type="password"
                                                placeholder="New Password"
                                                v-model="formValues.newPassword"
                                                required
                                            />
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="mb-3">
                                            <b-form-input
                                                type="password"
                                                placeholder="Confirm Password"
                                                v-model="formValues.confirmPassword"
                                                required
                                            />
                                        </div>
                                    </b-col>

                                    <b-col cols="12" class="mt-3">
                                        <b-button type="submit" variant="primary" size="lg" class="w-100">
                                            Reset Password
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
