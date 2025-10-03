<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { BContainer, BRow, BCol, BForm, BFormInput, BButton } from 'bootstrap-vue-next';

const router = useRouter();
const isSubmitting = ref(false);

// Reactive form values
const formValues = reactive({
    newPassword: '',
    confirmPassword: ''
});

// Fields definition
const fields = [
    {
        id: 'newPassword',
        label: 'New Password',
        placeholder: 'Enter Your Password',
    },
    {
        id: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Enter Your Password',
    }
];

// Handle input change
const handleChange = (id, value) => {
    formValues[id] = value;
};

// Handle form submit
const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;

    // Simulate API call
    setTimeout(() => {
        isSubmitting.value = false;
        router.push('/dashboard/ecommerce'); // Navigate after submit
    }, 1000);
};
</script>

<template>
    <div class="app-wrapper d-block sign-in-bg">
        <div class="main-container">
            <b-container>
                <b-row class="main-content-box">

                    <!-- Left Image Box -->
                    <b-col lg="7" class="image-contentbox d-none d-lg-block">
                        <div class="form-container">
                            <div class="signup-content mt-4">
                <span>
                  <img src="/images/logo/1.png" alt="" class="img-fluid" />
                </span>
                            </div>
                            <div class="signup-bg-img">
                                <img src="/images/login/05.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </b-col>

                    <!-- Form Box -->
                    <b-col lg="5" class="form-content-box">
                        <div class="form-container">
                            <b-form class="app-form" @submit="handleSubmit">

                                <!-- Header -->
                                <b-col cols="12">
                                    <div class="mb-5 text-center text-lg-start">
                                        <h2 class="text-white fw-bold">
                                            Create <span class="text-dark fw-bold">Password</span>
                                        </h2>
                                        <p>Your new password must be different from previous used password</p>
                                    </div>
                                </b-col>

                                <!-- Password Fields -->
                                <b-row>
                                <b-col
                                    xl="6"
                                    v-for="field in fields"
                                    :key="field.id"
                                >
                                    <div class="form-floating mb-3">
                                        <b-form-input
                                            :id="field.id"
                                            type="password"
                                            :placeholder="field.placeholder"
                                            v-model="formValues[field.id]"
                                            required
                                        />
                                        <label :for="field.id">{{ field.label }}</label>
                                    </div>
                                </b-col>
                                </b-row>

                                <!-- Submit Button -->
                                <b-col cols="12" class="mt-3">
                                    <b-button type="submit" class="w-100" variant="primary">
                                        <template v-if="isSubmitting">
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </template>
                                        <template v-else>
                                            Create Password
                                        </template>
                                    </b-button>
                                </b-col>

                            </b-form>
                        </div>
                    </b-col>

                </b-row>
            </b-container>
        </div>
    </div>
</template>
