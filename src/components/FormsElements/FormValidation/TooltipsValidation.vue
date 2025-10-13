<script setup>
import { ref } from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BSpinner,
    BFormInvalidFeedback,
    BFormValidFeedback,
    BFormCheckbox,
} from 'bootstrap-vue-next'

const loading = ref(false)
const submitted = ref(false)

const formData = ref({
    userName: '',
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    zipCode: ''
})

const errors = ref({
    userName: '',
    email: '',
    password: '',
    address: '',
    address2: '',
    city: '',
    zipCode: ''
})


const validateField = (field) => {
    switch (field) {
        case 'userName':
            errors.value.userName = formData.value.userName ? '' : 'Invalid User Name. Please use alphanumeric characters.'
            break
        case 'email':
            errors.value.email = /\S+@\S+\.\S+/.test(formData.value.email) ? '' : 'Invalid Email. Please enter a valid email address.'
            break
        case 'password':
            errors.value.password = formData.value.password.length <= 8 ? '' : 'Invalid Password. It should have a maximum of 8 characters.'
            break
        case 'address':
            errors.value.address = formData.value.address ? '' : 'Invalid Address. Please enter a valid address.'
            break
        case 'address2':
            errors.value.address2 = formData.value.address2 ? '' : 'Invalid Address. Please enter a valid address.'
            break
        case 'city':
            errors.value.city = formData.value.city ? '' : 'Invalid City. Please enter a valid city name.'
            break
        case 'zipCode':
            errors.value.zipCode = /^\d{5}$/.test(formData.value.zipCode) ? '' : 'Invalid Zip Code. Please enter a 5-digit ZIP code.'
            break
        default:
            break
    }
}

const validate = () => {
    Object.keys(formData.value).forEach(key => validateField(key))
    return Object.values(errors.value).every(err => err === '')
}

const handleSubmit = (e) => {
    e.preventDefault()
    submitted.value = true
    if (validate()) {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            Object.keys(formData.value).forEach(key => formData.value[key] = '')
            submitted.value = false
        }, 1500)
    }
}
</script>

<template>
    <b-col xs="12">
        <b-card no-body>
            <b-card-header>
                <h5>Tooltips With Space</h5>
                <p class="text-secondary">
                    Feedback messages now take up space instead of floating as tooltips.
                    Valid fields show green "Looks good!" messages.
                </p>
            </b-card-header>

            <b-card-body>
                <b-form class="needs-validation app-form row g-3" @submit="handleSubmit" novalidate>

                    <!-- User Name -->
                    <b-col md="6">
                        <b-form-group label="User Name">
                            <b-form-input
                                v-model="formData.userName"
                                :state="errors.userName ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.userName }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.userName && !errors.userName">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Email -->
                    <b-col md="6">
                        <b-form-group label="Email">
                            <b-form-input
                                type="email"
                                v-model="formData.email"
                                :state="errors.email ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.email }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.email && !errors.email">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Password -->
                    <b-col md="6">
                        <b-form-group label="Password">
                            <b-form-input
                                type="password"
                                v-model="formData.password"
                                :state="errors.password ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.password }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.password && !errors.password">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Address -->
                    <b-col md="6">
                        <b-form-group label="Address">
                            <b-form-input
                                placeholder="1234 Main St"
                                v-model="formData.address"
                                :state="errors.address ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.address }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.address && !errors.address">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Address 2 -->
                    <b-col md="6">
                        <b-form-group label="Address 2">
                            <b-form-input
                                placeholder="Apartment, studio, or floor"
                                v-model="formData.address2"
                                :state="errors.address2 ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.address2 }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.address2 && !errors.address2">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- City -->
                    <b-col md="6">
                        <b-form-group label="City">
                            <b-form-input
                                v-model="formData.city"
                                :state="errors.city ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.city }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.city && !errors.city">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Zip Code -->
                    <b-col md="6">
                        <b-form-group label="Zip Code">
                            <b-form-input
                                v-model="formData.zipCode"
                                :state="errors.zipCode ? false : null"

                            />
                            <b-form-invalid-feedback>{{ errors.zipCode }}</b-form-invalid-feedback>
                            <b-form-valid-feedback v-if="formData.zipCode && !errors.zipCode">Looks good!</b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Checkbox -->
                    <b-col cols="12">
                        <b-form-checkbox v-model="formData.termsAgreed">
                            Agree to terms
                        </b-form-checkbox>
                    </b-col>

                    <!-- Submit Button -->
                    <b-col cols="12">
                        <b-button type="submit" variant="primary" class="mt-2">
                            <b-spinner v-if="loading" small></b-spinner>
                            <span v-else>Submit</span>
                        </b-button>
                    </b-col>
                </b-form>
            </b-card-body>
        </b-card>
    </b-col>
</template>
