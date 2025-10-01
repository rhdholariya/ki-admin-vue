<template>
    <b-container class="py-5">
        <b-row class="justify-content-center">
            <b-col cols="12" md="6">
                <b-card class="p-4">
                    <h2 class="text-center mb-3">Verify <span class="text-dark">OTP</span></h2>
                    <p class="text-center">Enter the 5 digit code sent to the registered email Id</p>

                    <b-form @submit.prevent="verifyOtp">
                        <b-row class="justify-content-center mb-3">
                            <b-col v-for="(digit, index) in otp" :key="index" cols="2">
                                <b-form-input
                                    v-model="otp[index]"
                                    type="text"
                                    maxlength="1"
                                    class="h-60 w-60 text-center"
                                    @input="onInput(index)"
                                    @keydown.backspace="onBackspace(index, $event)"
                                ></b-form-input>
                            </b-col>
                        </b-row>

                        <p class="text-center mb-3">
                            Did not receive a code?
                            <a href="#" class="text-decoration-underline">Resend!</a>
                        </p>

                        <b-button type="submit" variant="primary" block>Verify</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { BContainer, BRow, BCol, BCard, BForm, BFormInput, BButton } from 'bootstrap-vue-next';

const OTP_LENGTH = 5;
const otp = ref(Array(OTP_LENGTH).fill(''));
const inputRefs = ref([]);

const onInput = async (index) => {
    // Keep only numbers
    otp.value[index] = otp.value[index].replace(/[^0-9]/g, '');

    // Move to next input if not last and has value
    if (otp.value[index] && index < OTP_LENGTH - 1) {
        await nextTick();
        inputRefs.value[index + 1].focus();
    }
};

const onBackspace = async (index, event) => {
    if (!otp.value[index] && index > 0) {
        await nextTick();
        inputRefs.value[index - 1].focus();
    }
};

const verifyOtp = () => {
    const otpCode = otp.value.join('');
    alert(`OTP Entered: ${otpCode}`);
};
</script>

<style scoped>
.h-60 {
    height: 60px;
}
.w-60 {
    width: 60px;
}
</style>
