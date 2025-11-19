<script setup>
import { ref, watch } from "vue"
import {BContainer, BRow, BCol, BForm, BFormInput, BButton, BImg} from "bootstrap-vue-next"
import { RouterLink } from "vue-router"

const OTP_LENGTH = 5
const otp = ref(Array(OTP_LENGTH).fill(""))
const activeIndex = ref(0)
const isSubmitting = ref(false)

watch(activeIndex, () => {
})

const handleChange = (value, index) => {
    const sanitized = value.replace(/[^0-9]/g, "").slice(0, 1)
    otp.value[index] = sanitized

    if (sanitized && index < OTP_LENGTH - 1) {
        activeIndex.value = index + 1
    }
}

const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp.value[index] && index > 0) {
        activeIndex.value = index - 1
    }

    if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault()
        activeIndex.value = index - 1
    }

    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
        e.preventDefault()
        activeIndex.value = index + 1
    }
}

const handlePaste = (e) => {
    e.preventDefault()
    const pasteData = e.clipboardData.getData('text').replace(/[^0-9]/g, "").slice(0, OTP_LENGTH)

    if (pasteData.length > 0) {
        const newOtp = [...otp.value]
        pasteData.split('').forEach((char, index) => {
            if (index < OTP_LENGTH) newOtp[index] = char
        })
        otp.value = newOtp

        const nextEmptyIndex = newOtp.findIndex((val, idx) => !val && idx >= pasteData.length)
        const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : Math.min(pasteData.length, OTP_LENGTH - 1)
        activeIndex.value = focusIndex
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    isSubmitting.value = true
    console.log('OTP:', otp.value.join(''))
}
</script>

<template>
    <div class="sign-in-bg">
        <div class="app-wrapper d-block">
            <div class="main-container">
                <b-container>
                    <div class="sign-in-content-bg">
                        <b-row class="main-content-box">

                            <b-col lg="7" class="image-contentbox d-none d-lg-block">
                                <div class="form-container">
                                    <div class="signup-content mt-4">
                                        <span><b-img alt="logo" class="img-fluid" src="/images/logo/1.png"/></span>
                                    </div>
                                    <div class="signup-bg-img">
                                        <b-img alt="background" class="img-fluid" src="/images/login/04.png"/>
                                    </div>
                                </div>
                            </b-col>

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
                                                <div class="d-flex gap-2 mb-3 ">
                                                    <b-form-input
                                                        v-for="(digit, index) in otp"
                                                        :key="`otp-${index}-${activeIndex}`"
                                                        v-model="otp[index]"
                                                        type="text"
                                                        inputmode="numeric"
                                                        pattern="[0-9]*"
                                                        maxlength="1"
                                                        class="h-60 w-60 text-center otp-input"
                                                        :autofocus="activeIndex === index"
                                                        @input="(e) => handleChange(e.target.value, index)"
                                                        @keydown="(e) => handleKeyDown(e, index)"
                                                        @paste="handlePaste"
                                                        @focus="activeIndex = index"
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
                                                    type="submit"
                                                    variant="primary"
                                                    class="btn-lg w-100"
                                                    :disabled="isSubmitting || otp.some(digit => !digit)"
                                                >
                                                    {{ isSubmitting ? 'Verifying...' : 'Verify' }}
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