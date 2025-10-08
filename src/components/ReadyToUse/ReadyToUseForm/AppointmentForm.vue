<script setup>
import {ref} from 'vue';
import {PhCheck, PhX} from '@phosphor-icons/vue';
import {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BFormSelect,
    BFormRadio,
    BInputGroup,
    BInputGroupText,
    BButton
} from 'bootstrap-vue-next';

const form = ref({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    contact: '',
    gender: '',
    appointmentType: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    message: '',
    hasApplied: ''
});

const handleSubmit = () => {
    console.log('Form submitted:', form.value);
};

const handleReset = () => {
    form.value = {
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        contact: '',
        gender: '',
        appointmentType: '',
        doctor: '',
        appointmentDate: '',
        appointmentTime: '',
        message: '',
        hasApplied: ''
    };
};
</script>
<template>
    <b-card no-body>
        <b-card-header>
            <h5>Book Appointment Form</h5>
        </b-card-header>
        <b-card-body>
            <b-form @submit.prevent="handleSubmit" @reset.prevent="handleReset" class="app-form">

                <!-- First & Last Name -->
                <b-row>
                    <b-col md="6" class="mb-3">
                        <b-form-group label="First Name" label-for="firstName">
                            <b-form-input
                                id="firstName"
                                v-model="form.firstName"
                                placeholder="Enter Your First Name"
                                required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="6" class="mb-3">
                        <b-form-group label="Last Name" label-for="lastName">
                            <b-form-input
                                id="lastName"
                                v-model="form.lastName"
                                placeholder="Enter Your Last Name"
                                required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- DOB, Email, Contact -->
                <b-row>
                    <b-col md="4" class="mb-3">
                        <b-form-group label="Date of Birth" label-for="dob">
                            <b-form-input
                                type="date"
                                id="dob"
                                v-model="form.dob"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" class="mb-3">
                        <b-form-group label="Email Address" label-for="email">
                            <b-form-input
                                type="email"
                                id="email"
                                v-model="form.email"
                                placeholder="Enter Your Email"
                                required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" class="mb-3">
                        <b-form-group label="Contact" label-for="contact">
                            <b-input-group>
                                <b-input-group-text>+91</b-input-group-text>
                                <b-form-input
                                    id="contact"
                                    v-model="form.contact"
                                    placeholder="Enter Your Contact"
                                    required
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Gender & Appointment Type -->
                <b-row>
                    <b-col md="6" class="mb-3" xl="4">
                        <b-form-group label="Gender" label-for="gender">
                            <b-form-select id="gender" v-model="form.gender">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" class="mb-3" xl="8">
                        <b-form-group label="Appointment Type" label-for="appointmentType">
                            <b-form-select id="appointmentType" v-model="form.appointmentType">
                                <option value="">Select Your Appointment</option>
                                <option value="medical">Medical Examination</option>
                                <option value="doctorCheck">Doctor Check</option>
                                <option value="result">Result Analysis</option>
                                <option value="checkup">Check Up</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Doctor & Appointment Date/Time -->
                <b-row>
                    <b-col md="4" class="mb-3">
                        <b-form-group label="Doctor" label-for="doctor">
                            <b-form-select id="doctor" v-model="form.doctor">
                                <option value="">Select Your Doctor</option>
                                <option value="1">Dr.Cedric Kelly</option>
                                <option value="2">Dr.Haley Kennedy</option>
                                <option value="3">Dr.Angelica Ramos</option>
                                <option value="4">Dr.Timothy Mooney</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" class="mb-3">
                        <b-form-group label="Appointment Date" label-for="appointmentDate">
                            <b-form-input type="date" id="appointmentDate" v-model="form.appointmentDate" required/>
                        </b-form-group>
                    </b-col>
                    <b-col md="4" class="mb-3">
                        <b-form-group label="Appointment Time" label-for="appointmentTime">
                            <b-form-input type="time" id="appointmentTime" v-model="form.appointmentTime" required/>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Message -->
                <b-row>
                    <b-col md="12" class="mb-3">
                        <b-form-group label="Message" label-for="message">
                            <b-form-textarea
                                id="message"
                                v-model="form.message"
                                rows="3"
                                placeholder="Enter Your Message"
                            />
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Applied Before -->
                <b-row>
                    <b-col md="12" class="mb-3">
                        <b-form-group label="Have you ever applied to our facility before?">
                            <div class="d-flex gap-2">
                                <label
                                    class="d-flex align-items-center border rounded-2 px-3 py-2"
                                    :class="form.hasApplied === 'yes' ? 'border-primary text-primary fw-semibold' : 'border-light text-secondary'"
                                >
                                    <b-form-radio
                                        name="hasApplied"
                                        value="yes"
                                        v-model="form.hasApplied"
                                        class="d-none"
                                    />
                                    <PhCheck size="16" class="me-1" weight="bold"/>
                                    Yes
                                </label>
                                <label
                                    class="d-flex align-items-center border rounded-2 px-3 py-2"
                                    :class="form.hasApplied === 'no' ? 'border-primary text-primary fw-semibold' : 'border-light text-secondary'"
                                >
                                    <b-form-radio
                                        name="hasApplied"
                                        value="no"
                                        v-model="form.hasApplied"
                                        class="d-none"
                                    />
                                    <PhX size="16" class="me-1" weight="bold"/>
                                    No
                                </label>
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Buttons -->
                <b-row>
                    <b-col md="12" class="text-end mb-3">
                        <b-button type="submit" variant="primary" class="me-2">Submit</b-button>
                        <b-button type="reset" variant="secondary">Reset</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card-body>
    </b-card>
</template>


