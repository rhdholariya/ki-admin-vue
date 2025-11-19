<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { BContainer, BRow, BCol, BForm, BFormInput, BButton, BFormGroup } from 'bootstrap-vue-next';

const router = useRouter();

const formValues = reactive({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
});

const fields = [
    { id: 'currentPassword', label: 'Current Password', placeholder: 'Enter Your Password', type: 'password' },
    { id: 'newPassword', label: 'New Password', placeholder: 'Enter Your Password', type: 'password' },
    { id: 'confirmPassword', label: 'Confirm Password', placeholder: 'Enter Your Password', type: 'password' },
];

const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard/ecommerce');
};
</script>

<template>
    <b-container fluid>
        <b-row>
            <b-col xs="12" class="p-0">
                <div class="login-form-container">

                    <div class="mb-4 text-center">
                        <router-link to="/dashboard/ecommerce" class="logo">
                            <img src="/images/logo/3.png" alt="logo" />
                        </router-link>
                    </div>

                    <div class="form_container">
                        <b-form class="app-form" @submit="handleSubmit">

                            <!-- Header -->
                            <div class="mb-3 text-center">
                                <h3 class="text-primary-dark">Reset Your Password</h3>
                                <p class="f-s-12 text-secondary">
                                    Create a new password and sign in to admin
                                </p>
                            </div>

                            <b-col
                                cols="12"
                                v-for="field in fields"
                                :key="field.id"
                            >
                                <b-form-group class="mb-3">
                                    <label :for="field.id" class="form-label">{{ field.label }}</label>
                                    <b-form-input
                                        :id="field.id"
                                        :type="field.type"
                                        :placeholder="field.placeholder"
                                        v-model="formValues[field.id]"
                                        required
                                    />
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-button type="submit" variant="primary" class="w-100">
                                    Reset Password
                                </b-button>
                            </b-col>
                        </b-form>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
