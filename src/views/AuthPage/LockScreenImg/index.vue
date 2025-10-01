<script setup>
import { ref } from "vue";
import { BContainer, BRow, BCol, BForm, BFormGroup, BFormInput, BFormCheckbox, BButton, BSpinner } from "bootstrap-vue-next";
import { RouterLink } from "vue-router";

const isSubmitting = ref(false);

const handleSubmit = (e) => {
    e.preventDefault();
    isSubmitting.value = true;

};
</script>

<template>
    <b-container fluid>
        <b-row>
            <b-col xs="12" class="p-0">
                <div class="login-form-container">

                    <!-- Logo -->
                    <div class="mb-4">
                        <RouterLink to="/" class="logo">
                            <img src="/images/logo/3.png" alt="logo" />
                        </RouterLink>
                    </div>

                    <!-- Form -->
                    <div class="form_container">
                        <b-form @submit="handleSubmit" class="app-form p-3">
                            <b-row>

                                <!-- Header -->

                                    <div class="mb-3 text-center">
                                        <h3 class="text-primary-dark">Lock Screen</h3>
                                        <p>Hello, enter your password to unlock the screen</p>
                                    </div>


                                <!-- User Avatar -->

                                    <div class="user-container mb-3 text-center">
                                        <div class="h-80 w-80 d-flex-center b-r-16 overflow-hidden text-bg-primary mx-auto">
                                            <img src="/images/avatar/6.png" alt="" class="img-fluid" />
                                        </div>
                                        <h5 class="f-w-600 mt-2">Sunny Airey</h5>
                                        <p class="text-secondary">Enter Your Password to View your Screen</p>
                                    </div>


                                <!-- Password -->

                                    <b-form-group label="Password" label-for="password">
                                        <b-form-input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Enter Your Password"
                                            required
                                        />
                                    </b-form-group>


                                <!-- Remember Me -->

                                    <b-form-group>
                                        <b-form-checkbox id="rememberMe" name="rememberMe">
                                            Remember me
                                        </b-form-checkbox>
                                    </b-form-group>


                                <!-- Submit Button -->
                                <b-button type="submit" variant="primary" class="w-100 mb-3">
                                        <template v-if="isSubmitting">
                                            <b-spinner small type="border" />
                                        </template>
                                        <template v-else>
                                            Unlock
                                        </template>
                                    </b-button>
                            </b-row>
                        </b-form>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
