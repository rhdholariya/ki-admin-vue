<script setup>
import {ref} from "vue";
import {
  BContainer,
  BRow,
  BCol,
  BForm,
  BFormInput,
  BButton,
  BFormCheckbox, BImg
} from "bootstrap-vue-next";
import {RouterLink} from "vue-router";
import {PhFacebookLogo, PhGoogleLogo, PhTwitterLogo} from "@phosphor-icons/vue";

const formData = ref({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
});

const inputFields = [
    {id: "username", label: "Username", placeholder: "Enter Your Username", type: "text"},
    {id: "email", label: "Email", placeholder: "Enter Your Email", type: "email"},
    {id: "password", label: "Password", placeholder: "Enter Your Password", type: "password"},
    {id: "confirmPassword", label: "Confirm Password", placeholder: "Enter Your Password", type: "password"}
];

const socialButtons = [
    {icon: PhFacebookLogo, className: "btn-light-white"},
    {icon: PhGoogleLogo, className: "btn-light-white"},
    {icon: PhTwitterLogo, className: "btn-light-white"}
];

const handleSubmit = (e) => {
    e.preventDefault();

};
</script>

<template>
    <div class="app-wrapper d-block sign-in-bg">
        <div class="main-container">
            <b-container class="main-container">
                <b-row class="main-content-box">

                    <b-col lg="7" class="image-contentbox d-none d-lg-block">
                        <div class="form-container">
                            <div class="signup-content mt-4">
                                <span>
                                    <b-img src="/images/logo/1.png" alt="Logo" class="img-fluid"/>
                                </span>
                            </div>
                            <div class="signup-bg-img">
                                <b-img src="/images/login/02.png" alt="Background" class="img-fluid"/>
                            </div>
                        </div>
                    </b-col>


                    <b-col lg="5" class="form-content-box">
                        <div class="form-container">
                            <b-form class="app-form" @submit="handleSubmit">
                                <b-row>
                                    <b-col cols="12">
                                        <div class="mb-5 text-center text-lg-start">
                                            <h2 class="text-white fw-bold">
                                                Create <span class="text-dark">Account</span>
                                            </h2>
                                            <p>Get Started For Free Today!</p>
                                        </div>
                                    </b-col>


                                    <b-col cols="12" v-for="field in inputFields.slice(0,2)" :key="field.id">
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
                                    </b-col>


                                    <b-row>
                                        <b-col md="6" xs="12" v-for="field in inputFields.slice(2)" :key="field.id">
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
                                        </b-col>
                                    </b-row>


                                    <b-col cols="12">
                                        <b-form-checkbox
                                            id="checkDefault"
                                            class="d-flex align-items-center gap-2 mb-3"
                                        >
                                            <label class="text-white mt-2 f-s-16">Accept Terms & Conditions</label>
                                        </b-form-checkbox>
                                    </b-col>


                                    <b-col xs="12">
                                        <RouterLink
                                            to="/dashboard/ecommerce"
                                            class="btn btn-primary w-100 mb-3"
                                        >
                                            Sign Up
                                        </RouterLink>
                                    </b-col>


                                    <b-col cols="12">
                                        <div class="text-center text-lg-start f-s-14 f-w-500">
                                            Already Have An Account?
                                            <RouterLink
                                                to="/auth-pages/sign-in"
                                                class="link-white text-decoration-underline"
                                            >
                                                Sign in
                                            </RouterLink>
                                        </div>
                                    </b-col>


                                    <div class="app-divider-v light justify-content-center py-lg-5 py-3">
                                        <p>OR</p>
                                    </div>


                                    <b-col cols="12">
                                        <div class="d-flex gap-3 justify-content-center text-center">
                                            <b-button
                                                v-for="(btn, idx) in socialButtons"
                                                :key="idx"
                                                type="button"
                                                variant=""
                                                class="icon-btn w-45 h-45 b-r-15 btn-light-white btn btn-btn-light-white"
                                            >
                                                <component :is="btn.icon" size="20" weight="bold" class="icon"/>
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


