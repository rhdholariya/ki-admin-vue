<script setup>
import {reactive, ref} from 'vue';
import {BContainer, BRow, BCol, BFormInput, BButton} from 'bootstrap-vue-next';
import {RouterLink} from 'vue-router';

const OTP_LENGTH = 5;
const otp = reactive(Array(OTP_LENGTH).fill(''));
const inputRefs = Array.from({length: OTP_LENGTH}, () => ref(null));


const digitValidate = (index) => {
    otp[index] = otp[index].replace(/[^0-9]/g, '');

    if (otp[index] && index < OTP_LENGTH - 1) {
        inputRefs[index + 1].value?.focus();
    } else if (!otp[index] && index > 0) {
        inputRefs[index - 1].value?.focus();
    }
};

const handleSubmit = () => {
    for (let i = 0; i < OTP_LENGTH; i++) {
        otp[i] = '';
    }

    // Focus first input
    inputRefs[0].value?.focus();
};
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
                                    <img alt="#" src="/images/logo/3.png"/>
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
                                                    :key="index"
                                                    v-model="otp[index]"
                                                    type="text"
                                                    maxlength="1"
                                                    class="form-control h-60 w-60 text-center"
                                                    :ref="el => inputRefs[index].value = el"
                                                    @input="digitValidate(index)"
                                                />
                                            </div>
                                        </b-col>

                                        <b-col cols="12">
                                            <p>
                                                Didn’t receive a code?
                                                <RouterLink to="#">
                                                    <span class="link-primary text-decoration-underline">Resend!</span>
                                                </RouterLink>
                                            </p>
                                        </b-col>

                                        <b-col cols="12">
                                            <div class="mb-3">
                                                <b-button type="submit" variant="primary" class="w-100">
                                                    Verify
                                                </b-button>
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
