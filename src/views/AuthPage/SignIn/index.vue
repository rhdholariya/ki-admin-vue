<script setup>
import { reactive, ref, h } from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BForm,
    BFormInput,
    BButton,
    BFormCheckbox,
    BFormFloatingLabel
} from "bootstrap-vue-next";
import { RouterLink, useRouter } from "vue-router";
import { PhFacebookLogo, PhGoogleLogo, PhTwitterLogo } from "@phosphor-icons/vue";

// Router for redirect after submit
const router = useRouter();

// Reactive form data
const formData = reactive({
    username: "",
    password: "",
    remember: false
});

// Input fields
const inputFields = [
    {
        id: "username",
        label: "Username",
        placeholder: "Enter your username",
        type: "text"
    },
    {
        id: "password",
        label: "Password",
        placeholder: "Enter your password",
        type: "password",
        forgotLink: "/auth-pages/password-reset"
    }
];

// Social buttons
const socialButtons = [
    { icon: h(PhFacebookLogo, { size: 18, weight: "bold",  }), className: "btn-light-white" },
    { icon: h(PhGoogleLogo, { size: 18, weight: "bold",  }), className: "btn-light-white" },
    { icon: h(PhTwitterLogo, { size: 18, weight: "bold",  }), className: "btn-light-white" }
];

// Submission state
const isSubmitting = ref(false);

// Handle form submit
const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;

    // Simulate API call and redirect
    setTimeout(() => {
        isSubmitting.value = false;
        router.push("/dashboard/ecommerce");
    }, 1500);
};
</script>

<template>
    <div class="app-wrapper d-block sign-in-bg">
        <div class="main-container">
            <b-container>
                <b-row class="main-content-box">
                    <!-- Left Image Section -->
                    <b-col lg="7" class="image-contentbox d-none d-lg-block">
                        <div class="form-container">
                            <div class="signup-content mt-4">
                <span>
                  <img src="/images/logo/1.png" alt="Logo" class="img-fluid" />
                </span>
                            </div>
                            <div class="signup-bg-img">
                                <img src="/images/login/01.png" alt="Background" class="img-fluid" />
                            </div>
                        </div>
                    </b-col>

                    <!-- Form Section -->
                    <b-col lg="5" class="form-content-box">
                        <div class="form-container">
                            <b-form class="app-form" @submit.prevent="handleSubmit">
                                <b-row>
                                    <b-col cols="12">
                                        <div class="mb-5 text-center text-lg-start">
                                            <h2 class="text-white fw-bold">
                                                Welcome To <span class="text-dark fw-bold">ki-admin!</span>
                                            </h2>
                                            <p>Sign in with your credentials</p>
                                        </div>
                                    </b-col>

                                    <!-- Input Fields -->
                                    <b-col
                                        cols="12"
                                        v-for="field in inputFields"
                                        :key="field.id"
                                    >
                                        <div class="form-floating mb-3">
                                            <b-form-input
                                                :id="field.id"
                                                :type="field.type"
                                                :placeholder="field.placeholder"
                                                v-model="formData[field.id]"
                                                required
                                            />
                                            <label :for="field.id">{{ field.label }}</label>
                                        </div>

                                        <div
                                            v-if="field.forgotLink"
                                            class="mb-3 text-end"
                                        >
                                            <RouterLink
                                                :to="field.forgotLink"
                                                class="text-dark-50 f-w-500 text-decoration-underline"
                                            >
                                                Forgot Password?
                                            </RouterLink>
                                        </div>
                                    </b-col>

                                    <!-- Remember Checkbox -->
                                    <b-col cols="12">
                                        <b-form-checkbox
                                            id="remember"
                                            v-model="formData.remember"
                                            class="d-flex align-items-center gap-2 mb-3"
                                        >
                                            <span class="text-white mt-2 f-s-16">Remember me</span>
                                        </b-form-checkbox>
                                    </b-col>

                                    <!-- Sign In Button -->
                                    <b-col cols="12" class="mb-3">
                                        <b-button type="submit" class="w-100" variant="primary">
                                            <template v-if="isSubmitting">
                                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            </template>
                                            <template v-else>Sign In</template>
                                        </b-button>
                                    </b-col>

                                    <!-- Sign Up Link -->
                                    <b-col cols="12">
                                        <div class="text-center text-lg-start f-s-14 f-w-500">
                                            Don't Have An Account yet?
                                            <RouterLink
                                                to="/auth-pages/sign-up"
                                                class="text-white-800 f-w-500 f-s-14 text-decoration-underline"
                                            >
                                                Sign up
                                            </RouterLink>
                                        </div>
                                    </b-col>

                                    <!-- Divider -->
                                    <div class="app-divider-v light justify-content-center py-lg-5 py-3">
                                        <p>OR</p>
                                    </div>

                                    <!-- Social Buttons -->
                                    <b-col cols="12">
                                        <div class="d-flex gap-3 justify-content-center text-center">
                                            <b-button
                                                v-for="(btn, idx) in socialButtons"
                                                :key="idx"
                                                type="button"
                                                variant=""
                                                class="icon-btn w-45 h-45 b-r-15 btn-light-white btn btn-btn-light-white"
                                            >
                                                <component :is="btn.icon" size="20" weight="bold" />
                                            </b-button>
                                        </div>
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

<style scoped>
/* Keep your original styling intact */
</style>
