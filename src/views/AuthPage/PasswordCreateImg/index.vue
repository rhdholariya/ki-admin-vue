<script setup>
import {reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import {BContainer, BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BSpinner} from 'bootstrap-vue-next';
import {RouterLink} from 'vue-router';

const router = useRouter();
const isSubmitting = ref(false);

const passwords = reactive({
    newPassword: '',
    confirmPassword: ''
});

const passwordFields = [
    {
        id: 'newPassword',
        label: 'New Password',
        placeholder: 'Enter Your Password',
        type: 'password',
    },
    {
        id: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: 'Enter Your Password',
        type: 'password',
    }
];

const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;

    setTimeout(() => {
        isSubmitting.value = false;
        router.push('/dashboard/ecommerce');
    }, 1000);
};
</script>

<template>
    <div>
        <main class="w-100 p-0">
            <b-container fluid>
                <b-row>
                    <b-col cols="12" class="p-0">
                        <div class="login-form-container">

                            <!-- Logo -->
                            <div class="mb-4 text-center">
                                <RouterLink to="/dashboard/ecommerce" class="logo">
                                    <img src="/images/logo/3.png" alt="logo"/>
                                </RouterLink>
                            </div>

                            <div class="form_container">
                                <b-form class="app-form" @submit="handleSubmit">


                                    <div class="mb-3 text-center">
                                        <h3>Create Password</h3>
                                        <p class="f-s-12 text-secondary">
                                            Your new password must be different from previous used password
                                        </p>
                                    </div>

                                    <b-col cols="12" v-for="field in passwordFields" :key="field.id">
                                        <b-form-group :label="field.label" :label-for="field.id" class="mb-3">
                                            <b-form-input
                                                :id="field.id"
                                                :type="field.type"
                                                :placeholder="field.placeholder"
                                                v-model="passwords[field.id]"
                                                required
                                            />
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12">
                                        <b-button type="submit" variant="primary" class="w-100  mb-3">
                                            <template v-if="isSubmitting">
                                                <b-spinner small type="border"/>
                                            </template>
                                            <template v-else>
                                                Reset Password
                                            </template>
                                        </b-button>
                                    </b-col>

                                </b-form>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </div>
</template>
