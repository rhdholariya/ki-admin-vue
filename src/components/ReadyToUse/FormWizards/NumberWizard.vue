<script setup>
import { ref } from "vue";
import {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BRow,
    BCol,
    BButton,
    BInputGroup,
    BInputGroupText, BCardHeader, BCardBody
} from "bootstrap-vue-next";


const step = ref(1);

const formData = ref({
    fname: "",
    lname: "",
    contactNum: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
    confirmPassword: ""
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
        if (!formData.value.fname) currentErrors.fname = "First name is required";
        if (!formData.value.lname) currentErrors.lname = "Last name is required";
        if (!formData.value.contactNum) currentErrors.contactNum = "Contact number is required";
    } else if (step.value === 2) {
        if (!formData.value.address) currentErrors.address = "Address is required";
        if (!formData.value.city) currentErrors.city = "City is required";
        if (!formData.value.state) currentErrors.state = "State is required";
        if (!formData.value.zip || formData.value.zip.length !== 5)
            currentErrors.zip = "Zip must be 5 digits";
    } else if (step.value === 3) {
        if (!formData.value.email) currentErrors.email = "Email is required";
        if (!formData.value.password) currentErrors.password = "Password is required";
        if (formData.value.password !== formData.value.confirmPassword)
            currentErrors.confirmPassword = "Passwords must match";
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
        alert("Form submitted!");
    }
};
</script>

<template>
    <b-card class="p-0" no-body>
        <b-card-header>
            <div class="code-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Wizard With Number</h5>
            </div>
        </b-card-header>

        <b-card-body>

        <div class="form-wizard">
        <div class="form-wizard-header mb-4">
            <ul class="form-wizard-steps d-flex gap-3 list-unstyled">
                <li :class="[{ activated: step >= 1, active: step === 1, 'fw-bold': step === 1 }]">
                    <span class="wizard-steps">1</span>
                </li>
                <li :class="[{ activated: step >= 2, active: step === 2, 'fw-bold': step === 2 }]">
                    <span class="wizard-steps">2</span>
                </li>
                <li :class="[{ activated: step >= 3, active: step === 3, 'fw-bold': step === 3 }]">
                    <span class="wizard-steps">3</span>
                </li>
            </ul>
        </div>


        <b-form class="app-form" @submit.prevent="handleSubmit">
            <b-row>

                <template v-if="step === 1">
                    <b-col md="6">
                        <b-form-group label="First Name*" label-for="fname" class="mb-3">
                            <b-form-input
                                id="fname"
                                type="text"
                                placeholder="Martin"
                                :value="formData.fname"
                                @input="handleChange('fname', $event.target.value)"
                                :state="errors.fname ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.fname }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group label="Last Name*" label-for="lname" class="mb-3">
                            <b-form-input
                                id="lname"
                                type="text"
                                placeholder="Payne"
                                :value="formData.lname"
                                @input="handleChange('lname', $event.target.value)"
                                :state="errors.lname ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.lname }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="12">
                        <b-form-group label="Contact*" label-for="contactNum" class="mb-3">
                            <b-input-group>
                                <b-input-group-text>+91</b-input-group-text>
                                <b-form-input
                                    id="contactNum"
                                    type="text"
                                    placeholder="**********"
                                    :value="formData.contactNum"
                                    @input="handleChange('contactNum', $event.target.value)"
                                    :state="errors.contactNum ? false : null"
                                />
                                <b-form-invalid-feedback>{{ errors.contactNum }}</b-form-invalid-feedback>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </template>


                <template v-else-if="step === 2">
                    <b-col md="12">
                        <b-form-group label="Address" label-for="address" class="mb-3">
                            <b-form-input
                                id="address"
                                type="text"
                                placeholder="2107 Deer Ridge Drive"
                                :value="formData.address"
                                @input="handleChange('address', $event.target.value)"
                                :state="errors.address ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.address }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="4">
                        <b-form-group label="City" label-for="city" class="mb-3">
                            <b-form-input
                                id="city"
                                type="text"
                                placeholder="US"
                                :value="formData.city"
                                @input="handleChange('city', $event.target.value)"
                                :state="errors.city ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.city }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="4">
                        <b-form-group label="State" label-for="state" class="mb-3">
                            <b-form-input
                                id="state"
                                type="text"
                                placeholder="Enter State"
                                :value="formData.state"
                                @input="handleChange('state', $event.target.value)"
                                :state="errors.state ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.state }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="4">
                        <b-form-group label="Zip" label-for="zip" class="mb-3">
                            <b-form-input
                                id="zip"
                                type="text"
                                placeholder="Enter Zip"
                                maxlength="5"
                                :value="formData.zip"
                                @input="handleChange('zip', $event.target.value)"
                                :state="errors.zip ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.zip }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                </template>

                <!-- Step 3 -->
                <template v-else-if="step === 3">
                    <b-col md="12">
                        <b-form-group label="Email*" label-for="email" class="mb-3">
                            <b-form-input
                                id="email"
                                type="email"
                                placeholder="example@domain.com"
                                :value="formData.email"
                                @input="handleChange('email', $event.target.value)"
                                :state="errors.email ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.email }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group label="Password*" label-for="password" class="mb-3">
                            <b-form-input
                                id="password"
                                type="password"
                                placeholder="******"
                                :value="formData.password"
                                @input="handleChange('password', $event.target.value)"
                                :state="errors.password ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.password }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group label="Confirm Password*" label-for="confirmPassword" class="mb-3">
                            <b-form-input
                                id="confirmPassword"
                                type="password"
                                placeholder="******"
                                :value="formData.confirmPassword"
                                @input="handleChange('confirmPassword', $event.target.value)"
                                :state="errors.confirmPassword ? false : null"
                            />
                            <b-form-invalid-feedback>{{ errors.confirmPassword }}</b-form-invalid-feedback>
                        </b-form-group>
                    </b-col>
                </template>
            </b-row>

            <div class="d-flex justify-content-end gap-2">
                <b-button v-if="step > 1" variant="secondary" @click="handlePrev">Previous</b-button>
                <b-button v-if="step < 3" variant="primary" @click="handleNext">Next</b-button>
                <b-button v-else variant="success" type="submit">Submit</b-button>
            </div>
        </b-form>
        </div>
        </b-card-body>
    </b-card>
</template>