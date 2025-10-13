<script setup>
import {ref} from "vue";
import {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormInvalidFeedback,
    BRow,
    BCol,
    BButton
} from "bootstrap-vue-next";
import {PhUsersThree, PhPhoneCall, PhInfo} from "@phosphor-icons/vue";

const step = ref(1);

const formData = ref({
    name: "",
    aboutSelf: "",
    email: "",
    password: "",
    confirmPassword: "",
    facebookUrl: "",
    twitterUrl: "",
    githubUrl: "",
});

const errors = ref({});

const handleChange = (field, value) => {
    formData.value[field] = value;


    if (errors.value[field]) {
        delete errors.value[field];
    }
};


const validateStep = () => {
    const currentErrors = {};

    if (step.value === 1) {
        if (!formData.value.name) currentErrors.name = 'Name is required';
        if (!formData.value.aboutSelf) currentErrors.aboutSelf = 'About Self is required';
    } else if (step.value === 2) {
        if (!formData.value.email) currentErrors.email = 'Email is required';
        if (!formData.value.password) currentErrors.password = 'Password is required';
        if (formData.value.password !== formData.value.confirmPassword) {
            currentErrors.confirmPassword = 'Passwords do not match';
        }
    }

    errors.value = currentErrors;
    return Object.keys(currentErrors).length === 0;
};

const handleNext = () => {
    if (validateStep()) step.value++;
};

const handlePrev = () => {
    step.value--;
};

const handleSubmit = () => {
    if (validateStep()) {
        alert("Form submitted successfully!");
        console.log("Form Data:", formData.value);

        // Reset form instead of page reload
        formData.value = {
            name: "",
            aboutSelf: "",
            email: "",
            password: "",
            confirmPassword: "",
            facebookUrl: "",
            twitterUrl: "",
            githubUrl: "",
        };
        errors.value = {};
        step.value = 1;
    }
};
</script>

<template>
    <b-card class="equal-card p-4">
        <h5 class="mb-4 text-muted">Vertical Wizard With Icon</h5>
        <div class="form-wizard">
            <b-row>

                <b-col md="3">
                    <div class="form-wizard-header">
                        <ul class="vertica-wizard-steps list-unstyled mb-0">
                            <li class="position-relative" :class="{ 'activated': step >= 1, 'active': step === 1 }">
                                <span
                                    class="wizard-steps circle-steps d-flex align-items-center justify-content-center">
                                    <PhUsersThree :size="20" weight="bold"/>
                                </span>
                            </li>
                            <li class="position-relative" :class="{ 'activated': step >= 2, 'active': step === 2 }">
                                <span
                                    class="wizard-steps circle-steps d-flex align-items-center justify-content-center">
                                    <PhPhoneCall :size="20" weight="bold"/>
                                </span>
                            </li>
                            <li class="position-relative" :class="{ 'activated': step >= 3, 'active': step === 3 }">
                                <span
                                    class="wizard-steps circle-steps d-flex align-items-center justify-content-center">
                                    <PhInfo :size="20" weight="bold"/>
                                </span>
                            </li>
                        </ul>
                    </div>
                </b-col>


                <b-col md="9">
                    <b-form class="app-form" @submit.prevent="handleSubmit">
                        <!-- Step 1 -->
                        <template v-if="step === 1">
                            <b-form-group label="Name*" label-for="name" class="mb-3">
                                <b-form-input
                                    id="name"
                                    type="text"
                                    placeholder="Johnson"
                                    :value="formData.name"
                                    @input="handleChange('name', $event.target.value)"
                                    :state="errors.name? false : null"
                                />
                                <b-form-invalid-feedback>{{ errors.name }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="About Self*" label-for="aboutSelf" class="mb-3">
                                <b-form-textarea
                                    id="aboutSelf"
                                    placeholder="Type About Self"
                                    :value="formData.aboutSelf"
                                    @input="handleChange('aboutSelf', $event.target.value)"
                                    :state="errors.aboutSelf ? false : null"
                                    rows="3"
                                />
                                <b-form-invalid-feedback>{{ errors.aboutSelf }}</b-form-invalid-feedback>
                            </b-form-group>
                            <div class="text-end">
                                <b-button @click="handleNext" class="next-btn btn-lg" variant="primary">
                                    Next
                                </b-button>
                            </div>
                        </template>


                        <template v-else-if="step === 2">
                            <b-form-group label="Email*" label-for="email" class="mb-3">
                                <b-form-input
                                    id="email"
                                    type="email"
                                    placeholder="StevenSHarmon@rhyta.com"
                                    :value="formData.email"
                                    @input="handleChange('email', $event.target.value)"
                                    :state="errors.email ? false : null"
                                />
                                <b-form-invalid-feedback>{{ errors.email }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="Password*" label-for="password" class="mb-3">
                                <b-form-input
                                    id="password"
                                    type="password"
                                    placeholder="*****"
                                    :value="formData.password"
                                    @input="handleChange('password', $event.target.value)"
                                    :state="errors.password ? false : null"
                                />
                                <b-form-invalid-feedback>{{ errors.password }}</b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group label="Confirm Password*" label-for="confirmPassword" class="mb-3">
                                <b-form-input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="*****"
                                    :value="formData.confirmPassword"
                                    @input="handleChange('confirmPassword', $event.target.value)"
                                    :state="errors.confirmPassword ? false : null"
                                />
                                <b-form-invalid-feedback>{{ errors.confirmPassword }}</b-form-invalid-feedback>
                            </b-form-group>
                            <div class="text-end mb-3">
                                <b-button @click="handlePrev" class="pre-btn btn-lg me-2" variant="secondary">
                                    Previous
                                </b-button>
                                <b-button @click="handleNext" class="next-btn btn-lg" variant="primary">
                                    Next
                                </b-button>
                            </div>
                        </template>


                        <template v-else-if="step === 3">
                            <b-form-group label="Facebook Url" label-for="facebookUrl" class="mb-3">
                                <b-form-input
                                    id="facebookUrl"
                                    type="url"
                                    placeholder="https://"
                                    :value="formData.facebookUrl"
                                    @input="handleChange('facebookUrl', $event.target.value)"
                                />
                            </b-form-group>
                            <b-form-group label="Twitter Url" label-for="twitterUrl" class="mb-3">
                                <b-form-input
                                    id="twitterUrl"
                                    type="url"
                                    placeholder="https://"
                                    :value="formData.twitterUrl"
                                    @input="handleChange('twitterUrl', $event.target.value)"
                                />
                            </b-form-group>
                            <b-form-group label="Github Url" label-for="githubUrl" class="mb-3">
                                <b-form-input
                                    id="githubUrl"
                                    type="url"
                                    placeholder="https://"
                                    :value="formData.githubUrl"
                                    @input="handleChange('githubUrl', $event.target.value)"
                                />
                            </b-form-group>
                            <div class="text-end mb-3">
                                <b-button @click="handlePrev" class="pre-btn btn-lg me-2" variant="secondary">
                                    Previous
                                </b-button>
                                <b-button type="submit" class="btn-lg" variant="success">
                                    Submit
                                </b-button>
                            </div>
                        </template>
                    </b-form>
                </b-col>
            </b-row>
        </div>
    </b-card>
</template>

