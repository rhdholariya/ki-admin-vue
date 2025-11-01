<script setup>
import { ref } from "vue";
import {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormInvalidFeedback,
    BRow,
    BCol,
    BButton,
    BCardHeader,
    BCardBody
} from "bootstrap-vue-next";

const step = ref(1);

const formData = ref({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    dob: "",
    section: "",
    position: "",
    officeAddress: "",
});

const errors = ref({});

const handleChange = (field, value) => {
    formData.value[field] = value;

    // Remove error for this specific field when user starts typing
    if (errors.value[field]) {
        delete errors.value[field];
    }
};


const validateStep = () => {
    const currentErrors = {};

    if (step.value === 1) {
        if (!formData.value.firstName) currentErrors.firstName = 'First name is required';
        if (!formData.value.lastName) currentErrors.lastName = 'Last name is required';
        if (!formData.value.email) currentErrors.email = 'Email is required';
    } else if (step.value === 2) {
        if (!formData.value.section) currentErrors.section = 'Section is required';
        if (!formData.value.position) currentErrors.position = 'Position is required';
        if (!formData.value.officeAddress) currentErrors.officeAddress = 'Office address is required';
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
        if (validateStep()) {
            alert("Form submitted successfully!");
            window.location.reload();
        }
    }
};
</script>

<template>
    <b-card class="p-0" no-body>
        <b-card-header>
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Vertical Wizard With Number</h5>
            </div>
        </b-card-header>

        <b-card-body>
            <div class="form-wizard">
                <b-row>
                    <b-col cols="3">
                        <div class="form-wizard-header">
                            <ul class="vertica-wizard-steps list-unstyled">
                                <li
                                    v-for="s in 3"
                                    :key="s"
                                    :class="[{ activated: step >= s, active: step === s }]"
                                >
                                    <span class="wizard-steps circle-steps">{{ s }}</span>
                                </li>
                            </ul>
                        </div>
                    </b-col>

                    <b-col cols="9">
                        <b-form class="app-form" @submit.prevent="handleSubmit">
                            <!-- Step 1 -->
                            <template v-if="step === 1">
                                <b-row>
                                    <b-col md="6">
                                        <b-form-group label="First Name*" label-for="firstName" class="mb-3">
                                            <b-form-input
                                                id="firstName"
                                                type="text"
                                                placeholder="Enter Your First Name"
                                                :value="formData.firstName"
                                                @input="handleChange('firstName', $event.target.value)"
                                                :state="errors.firstName ? false : null"
                                            />
                                            <b-form-invalid-feedback>{{ errors.firstName }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Last Name*" label-for="lastName" class="mb-3">
                                            <b-form-input
                                                id="lastName"
                                                type="text"
                                                placeholder="Enter Your Last Name"
                                                :value="formData.lastName"
                                                @input="handleChange('lastName', $event.target.value)"
                                                :state="errors.lastName ? false : null"
                                            />
                                            <b-form-invalid-feedback>{{ errors.lastName }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-group label="Email*" label-for="email" class="mb-3">
                                            <b-form-input
                                                id="email"
                                                type="email"
                                                placeholder="Enter Your Email"
                                                :value="formData.email"
                                                @input="handleChange('email', $event.target.value)"
                                                :state="errors.email ? false : null"
                                            />
                                            <b-form-invalid-feedback>{{ errors.email }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6" xl="7">
                                        <b-form-group label="Contact" label-for="contact" class="mb-3">
                                            <b-form-input
                                                id="contact"
                                                type="text"
                                                placeholder="Enter Your Contact Number"
                                                :value="formData.contact"
                                                @input="handleChange('contact', $event.target.value)"
                                            />
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6" xl="5">
                                        <b-form-group label="Date of Birth" label-for="dob" class="mb-3">
                                            <b-form-input
                                                id="dob"
                                                type="date"
                                                placeholder="Select Your DOB"
                                                :value="formData.dob"
                                                @input="handleChange('dob', $event.target.value)"
                                            />
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12" class="text-end">
                                        <b-button variant="primary" @click="handleNext" class="next-btn btn-lg">
                                            Next
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </template>

                            <!-- Step 2 -->
                            <template v-else-if="step === 2">
                                <b-row>
                                    <b-col md="6">
                                        <b-form-group label="Section*" label-for="section" class="mb-3">
                                            <b-form-input
                                                id="section"
                                                type="text"
                                                placeholder="Enter Your Section"
                                                :value="formData.section"
                                                @input="handleChange('section', $event.target.value)"
                                                :state="errors.section ? false : null"
                                            />
                                            <b-form-invalid-feedback>{{ errors.section }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Position*" label-for="position" class="mb-3">
                                            <b-form-input
                                                id="position"
                                                type="text"
                                                placeholder="Enter Your Position"
                                                :value="formData.position"
                                                @input="handleChange('position', $event.target.value)"
                                                :state="errors.position ? false : null"
                                            />
                                            <b-form-invalid-feedback>{{ errors.position }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-form-group label="Office Address*" label-for="officeAddress" class="mb-3">
                                            <b-form-textarea
                                                id="officeAddress"
                                                placeholder="Enter Your Office Address"
                                                :value="formData.officeAddress"
                                                @input="handleChange('officeAddress', $event.target.value)"
                                                :state="errors.officeAddress? false : null"
                                                rows="3"
                                            />
                                            <b-form-invalid-feedback>{{ errors.officeAddress }}</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="12" class="text-end">
                                        <b-button variant="secondary" @click="handlePrev" class="pre-btn btn-lg me-2">
                                            Previous
                                        </b-button>
                                        <b-button variant="primary" @click="handleNext" class="next-btn btn-lg">
                                            Next
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </template>

                            <!-- Step 3 -->
                            <template v-else-if="step === 3">
                                <b-row>
                                    <b-col cols="12">
                                        <h6>Check your Details and Submit</h6>
                                        <p class="f-w-500">Section :</p>
                                        <p>- {{ formData.section }}</p>
                                        <p class="f-w-500">Position :</p>
                                        <p>- {{ formData.position }}</p>
                                        <p class="f-w-500">Office Address :</p>
                                        <p>{{ formData.officeAddress }}</p>
                                    </b-col>
                                    <b-col cols="12" class="text-end">
                                        <b-button variant="secondary" @click="handlePrev" class="pre-btn btn-lg me-2">
                                            Previous
                                        </b-button>
                                        <b-button type="submit" variant="primary" class="btn-lg">
                                            Submit
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </template>
                        </b-form>
                    </b-col>
                </b-row>
            </div>
        </b-card-body>
    </b-card>
</template>

