<script setup>
import {reactive, ref, h} from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BForm,
    BFormInput,
    BButton,
    BFormCheckbox,
    BFormGroup,
    BFormText
} from "bootstrap-vue-next";
import {RouterLink, useRouter} from "vue-router";
import {PhFacebookLogo, PhGoogleLogo, PhGithubLogo} from "@phosphor-icons/vue";


const router = useRouter();


const formData = reactive({
    email: "",
    password: "",
    remember: false
});

const fields = [
    {label: "Email address", type: "text", name: "email", id: "email"},
    {label: "Password", type: "password", name: "password", id: "password"}
];

const socialButtons = [
    {icon: h(PhFacebookLogo, {size: 18, weight: "bold", color: "white"}), variant: "primary"},
    {icon: h(PhGoogleLogo, {size: 18, weight: "bold", color: "white"}), variant: "danger"},
    {icon: h(PhGithubLogo, {size: 18, weight: "bold", color: "white"}), variant: "dark"}
];

const isSubmitting = ref(false);


const handleSubmit = () => {
    isSubmitting.value = true;

    setTimeout(() => {
        isSubmitting.value = false;
        router.push("/dashboard/ecommerce");
    }, 1500);
};
</script>

<template>
    <b-container fluid>
        <b-row>
            <b-col xs="12" class="p-0">
                <div class="login-form-container">


                    <div class="mb-4 text-center">
                        <RouterLink class="logo" to="/dashboard/ecommerce">
                            <img src="/images/logo/3.png" alt="logo"/>
                        </RouterLink>
                    </div>

                    <div class="form_container">

                        <b-form class="app-form" @submit.prevent="handleSubmit">


                            <div class="mb-3 text-center">
                                <h3 class="text-primary-dark">Login to your Account</h3>
                                <p class="f-s-12 text-secondary">
                                    Get started with our app, just create an account and enjoy the experience.
                                </p>
                            </div>

                            <b-form-group
                                v-for="field in fields"
                                :key="field.id"
                                class="mb-3"
                                :label="field.label"
                                :for="field.id"
                            >
                                <b-form-input
                                    :id="field.id"
                                    :type="field.type"
                                    v-model="formData[field.name]"
                                    required
                                />
                                <b-form-text v-if="field.name === 'email'">
                                    We'll never share your email with anyone else.
                                </b-form-text>
                            </b-form-group>

                            <b-form-checkbox
                                id="remember"
                                v-model="formData.remember"
                                class="mb-3"
                            >
                                Remember me
                            </b-form-checkbox>

                            <b-button type="submit" class="w-100 mb-3" variant="primary">
                                <template v-if="isSubmitting">
                                    <span class="spinner-border spinner-border-sm" role="status"
                                          aria-hidden="true"></span>
                                </template>
                                <template v-else>Continue</template>
                            </b-button>


                            <div class="app-divider-v justify-content-center">
                                <p>OR</p>
                            </div>


                            <div class="text-center mb-3">
                                <b-button
                                    v-for="(btn, idx) in socialButtons"
                                    :key="idx"
                                    :variant="btn.variant"
                                    class="icon-btn b-r-5 m-1 d-inline-flex align-items-center justify-content-center"
                                >
                                    <component :is="btn.icon"/>
                                </b-button>
                            </div>


                            <div class="text-center">
                                <RouterLink
                                    to="/other-pages/terms-condition"
                                    class="text-secondary text-decoration-underline"
                                >
                                    Terms of use & Conditions
                                </RouterLink>
                            </div>
                        </b-form>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

