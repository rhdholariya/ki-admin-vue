<script setup>
import { ref, reactive } from "vue"
import {BContainer, BRow, BCol, BFormInput, BButton, BImg} from "bootstrap-vue-next"
import { RouterLink } from "vue-router"

const OTP_LENGTH = 5
const otp = reactive(Array(OTP_LENGTH).fill(""))
const activeIndex = ref(0)

const handleChange = (value, index) => {
    const sanitized = value.replace(/[^0-9]/g, "").slice(0, 1)
    otp[index] = sanitized


    if (sanitized && index < OTP_LENGTH - 1) {
        activeIndex.value = index + 1
    }
}


const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
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
    const data = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, OTP_LENGTH)

    data.split("").forEach((n, i) => {
        otp[i] = n
    })

    const next = data.length < OTP_LENGTH ? data.length : OTP_LENGTH - 1
    activeIndex.value = next
}

// submit
const handleSubmit = () => {
    alert("OTP: " + otp.join(""))
    otp.fill("")
    activeIndex.value = 0
}
</script>

<template>
    <div class="app-wrapper d-block">
        <div class="w-100 p-0">
            <b-container fluid>
                <b-row>
                    <b-col cols="12" class="p-0">
                        <div class="login-form-container">
                            <div class="mb-4 text-center">
                                <RouterLink to="/dashboard/ecommerce" class="logo">
                                    <b-img alt="#" src="/images/logo/3.png"/>
                                </RouterLink>
                            </div>

                            <div class="form_container">
                                <form class="app-form rounded-control" @submit.prevent="handleSubmit">
                                    <b-row>
                                        <b-col cols="12">
                                            <div class="mb-5 text-center">
                                                <h2 class="text-primary">Verify OTP</h2>
                                                <p>Enter the 5 digit code sent to the registered email Id</p>
                                            </div>
                                        </b-col>

                                        <b-col cols="12">
                                            <div class="verification-box d-flex gap-3 justify-content-center mb-3">
                                                <b-form-input
                                                    v-for="(digit, index) in otp"
                                                    :key="`otp-${index}-${activeIndex}`"
                                                    v-model="otp[index]"
                                                    maxlength="1"
                                                    class="form-control h-60 w-60 text-center"
                                                    inputmode="numeric"
                                                    pattern="[0-9]*"
                                                    :autofocus="activeIndex === index"
                                                    @input="(e) => handleChange(e.target.value, index)"
                                                    @keydown="(e) => handleKeyDown(e, index)"
                                                    @paste="index === 0 && handlePaste($event)"
                                                    @focus="activeIndex = index"
                                                />
                                            </div>
                                        </b-col>

                                        <b-col cols="12">
                                            <p>Didn’t receive a code?
                                                <RouterLink to="#">
                                                    <span class="link-primary text-decoration-underline">Resend!</span>
                                                </RouterLink>
                                            </p>
                                        </b-col>

                                        <b-col cols="12">
                                            <div class="mb-3">
                                                <b-button type="submit" variant="primary" class="w-100">Verify</b-button>
                                            </div>
                                        </b-col>

                                    </b-row>
                                </form>
                            </div>

                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
