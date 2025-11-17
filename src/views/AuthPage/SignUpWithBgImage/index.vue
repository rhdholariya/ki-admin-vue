<script setup>
import {reactive, h} from "vue";
import {useRouter} from "vue-router";
import {
  BContainer,
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BFormCheckbox, BImg  // Added missing import
} from "bootstrap-vue-next";
import {RouterLink} from "vue-router";

import {
    PhFacebookLogo,
    PhGoogleLogo,
    PhGithubLogo
} from "@phosphor-icons/vue";

const router = useRouter();

const formValues = reactive({
    username: "",
    email: "",
    password: "",
    remember: false,
});

const fields = [
    {label: "Username", type: "text", placeholder: "Enter Your Username", controlId: "username", model: "username"},
    {label: "Email", type: "email", placeholder: "Enter Your Email", controlId: "email", model: "email"},
    {label: "Password", type: "password", placeholder: "Enter Your Password", controlId: "password", model: "password"},
];

const socialButtons = [
    {icon: h(PhFacebookLogo, {size: 18, weight: "bold", color: "white"}), variant: "primary",},
    {icon: h(PhGoogleLogo, {size: 18, weight: "bold", color: "white"}), variant: "danger",},
    {icon: h(PhGithubLogo, {size: 18, weight: "bold", color: "white"}), variant: "dark",},
];

const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard/ecommerce");
};
</script>

<template>
    <div class="app-wrapper d-block">
        <main class="w-100 p-0">
            <b-container fluid>
                <b-row>
                    <b-col xs="12" class="p-0">
                        <div class="login-form-container">

                            <div class="mb-4 text-center">
                                <RouterLink class="logo" to="/dashboard/ecommerce">
                                    <b-img src="/images/logo/3.png" alt="logo"/>
                                </RouterLink>
                            </div>

                            <div class="form_container">
                                <b-form class="app-form p-3" @submit="handleSubmit">
                                    <div class="mb-3 text-center">
                                        <h3>Create Account</h3>
                                        <p class="f-s-12 text-secondary">Get started for Free Today.</p>
                                    </div>

                                    <b-form-group v-for="field in fields" :key="field.controlId" class="mb-3">
                                        <label :for="field.controlId">{{ field.label }}</label>
                                        <b-form-input
                                            :id="field.controlId"
                                            :type="field.type"
                                            :placeholder="field.placeholder"
                                            v-model="formValues[field.model]"
                                            required
                                        />
                                    </b-form-group>

                                    <!-- Fixed: Using BFormCheckbox instead of native input -->
                                    <b-form-checkbox
                                        id="remember"
                                        v-model="formValues.remember"
                                        class="mb-3"
                                    >
                                        Remember me
                                    </b-form-checkbox>

                                    <b-button type="submit" variant="primary" class="w-100">Submit</b-button>

                                    <div class="app-divider-v justify-content-center my-3"><p>OR</p></div>

                                    <div class="text-center mb-3">
                                        <b-button
                                            v-for="(btn, idx) in socialButtons"
                                            :key="idx"
                                            :variant="btn.variant"
                                            class="icon-btn b-r-5 m-1 d-inline-flex align-items-center justify-content-center"
                                        >
                                            <span><component :is="btn.icon"/></span>
                                            {{ btn.label }}
                                        </b-button>
                                    </div>

                                    <div class="text-center">
                                        <RouterLink to="/other-pages/terms-condition"
                                                    class="text-secondary text-decoration-underline">
                                            Terms of use & Conditions
                                        </RouterLink>
                                    </div>
                                </b-form>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </div>
</template>