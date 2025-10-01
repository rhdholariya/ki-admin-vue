<script setup>
import { ref, nextTick } from "vue";
import { BContainer, BRow, BCol, BForm, BFormInput, BButton } from "bootstrap-vue-next";
import { RouterLink } from "vue-router";

const OTP_LENGTH = 5;
const otp = ref(Array(OTP_LENGTH).fill(""));
const inputRefs = ref([]);
const isSubmitting = ref(false);

// Save references for each input
const setInputRef = (el, index) => {
    if (el) inputRefs.value[index] = el;
};

// Handle input change and move focus forward
const handleChange = async (value, index) => {
    const sanitized = value.replace(/[^0-9]/g, "").slice(0, 1);
    otp.value[index] = sanitized;

    if (sanitized && index < OTP_LENGTH - 1) {
        await nextTick();
        inputRefs.value[index + 1]?.focus();
    }
};

// Handle backspace to move focus backward
const handleKeyDown = async (e, index) => {
    if (e.key === "Backspace" && !otp.value[index] && index > 0) {
        await nextTick();
        inputRefs.value[index - 1]?.focus();
    }
};

// Handle form submit
const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;
    const code = otp.value.join("");
    console.log("OTP Entered:", code);
};


const handleReset = () => {
    otp.value = Array(OTP_LENGTH).fill("");
    nextTick(() => inputRefs.value[0]?.focus());
};
</script>

<template>
    <div class="sign-in-bg">
        <div class="app-wrapper d-block">
            <div class="main-container">
                <b-container>
                    <div class="sign-in-content-bg">
                        <b-row class="main-content-box">

                            <!-- Left Image Section -->
                            <b-col lg="7" class="image-contentbox d-none d-lg-block">
                                <div class="form-container">
                                    <div class="signup-content mt-4">
                    <span>
                      <img alt="logo" class="img-fluid" src="/images/logo/1.png" />
                    </span>
                                    </div>
                                    <div class="signup-bg-img">
                                        <img alt="background" class="img-fluid" src="/images/login/04.png" />
                                    </div>
                                </div>
                            </b-col>

                            <!-- OTP Form Section -->
                            <b-col lg="5" class="form-content-box">
                                <div class="form-container">
                                    <b-form class="app-form" @submit="handleSubmit">
                                        <b-row>
                                            <b-col cols="12">
                                                <div class="mb-5 text-center text-lg-start">
                                                    <h2 class="text-white">Verify <span class="text-dark">OTP</span></h2>
                                                    <p>Enter the 5 digit code sent to the registered email Id</p>
                                                </div>
                                            </b-col>

                                            <b-col cols="12">
                                                <div class="d-flex gap-2 mb-3">
                                                    <b-form-input
                                                        v-for="(digit, index) in otp"
                                                        :key="index"
                                                        type="text"
                                                        maxlength="1"
                                                        class="h-60 w-60 text-center"
                                                        v-model="otp[index]"
                                                        @input="(e) => handleChange(e.target.value, index)"
                                                        @keydown="(e) => handleKeyDown(e, index)"
                                                        :ref="(el) => setInputRef(el, index)"
                                                    />
                                                </div>
                                            </b-col>

                                            <b-col cols="12" class="mb-3">
                                                <p class="text-white">
                                                    Didn't receive a code?
                                                    <RouterLink to="#">
                                                        <span class="link-white text-decoration-underline">Resend!</span>
                                                    </RouterLink>
                                                </p>
                                            </b-col>

                                            <b-col cols="12" class="mt-2">
                                                <b-button
                                                    type="button"
                                                    variant="primary"
                                                    class="btn-lg w-100"
                                                    @click="handleReset"
                                                >
                                                    Verify
                                                </b-button>
                                            </b-col>

                                        </b-row>
                                    </b-form>
                                </div>
                            </b-col>

                        </b-row>
                    </div>
                </b-container>
            </div>
        </div>
    </div>
</template>
