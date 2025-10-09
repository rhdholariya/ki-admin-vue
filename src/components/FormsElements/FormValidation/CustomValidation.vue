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
    BFormSelect,
    BFormCheckbox,
    BButton,
    BSpinner,
    BFormInvalidFeedback,
    BFormValidFeedback,
} from 'bootstrap-vue-next'

const loading = ref(false)

const formData = ref({
    firstName: 'Mark',
    lastName: 'Otto',
    username: '',
    city: '',
    state: '',
    zip: '',
    termsAgreed: false
})

const errors = ref({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    termsAgreed: ''
})

// Track if user has interacted with field
const touched = ref({
    firstName: false,
    lastName: false,
    username: false,
    city: false,
    state: false,
    zip: false,
    termsAgreed: false
})

const handleChange = (field, value) => {
    formData.value[field] = value
    touched.value[field] = true
    validateField(field)
}

const validateField = (field) => {
    switch (field) {
        case 'firstName':
            errors.value.firstName = formData.value.firstName ? '' : 'Please provide first name.'
            break
        case 'lastName':
            errors.value.lastName = formData.value.lastName ? '' : 'Please provide last name.'
            break
        case 'username':
            errors.value.username = formData.value.username ? '' : 'Please choose a username.'
            break
        case 'city':
            errors.value.city = formData.value.city ? '' : 'Please provide a valid city.'
            break
        case 'state':
            errors.value.state = formData.value.state ? '' : 'Please select a state.'
            break
        case 'zip':
            errors.value.zip = formData.value.zip ? '' : 'Please provide a valid zip.'
            break
        case 'termsAgreed':
            errors.value.termsAgreed = formData.value.termsAgreed ? '' : 'You must agree before submitting.'
            break
    }
}

const validate = () => {
    Object.keys(formData.value).forEach((key) => {
        touched.value[key] = true
        validateField(key)
    })
    return Object.values(errors.value).every(err => err === '')
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
        loading.value = true
        setTimeout(() => {
            loading.value = false
            Object.keys(formData.value).forEach(key => {
                formData.value[key] = typeof formData.value[key] === 'boolean' ? false : ''
                touched.value[key] = false
            })
        }, 1500)
    }
}
</script>

<template>
    <b-col xs="12">
        <b-card no-body>
            <b-card-header>
                <h5>Custom Styles</h5>
                <p class="text-secondary">
                    Validation messages now take space and show green "Looks good!" for valid fields and red messages for invalid fields.
                </p>
            </b-card-header>

            <b-card-body>
                <b-form @submit="handleSubmit" novalidate class="row g-3 app-form">

                    <!-- First Name -->
                    <b-col md="4">
                        <b-form-group label="First Name">
                            <b-form-input
                                type="text"
                                v-model="formData.firstName"
                                :state="touched.firstName ? (errors.firstName ? false : true) : null"

                            />
                            <b-form-invalid-feedback v-if="touched.firstName && errors.firstName">
                                {{ errors.firstName }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback v-else-if="touched.firstName && !errors.firstName">
                                Looks good!
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Last Name -->
                    <b-col md="4">
                        <b-form-group label="Last Name">
                            <b-form-input
                                type="text"
                                v-model="formData.lastName"
                                :state="touched.lastName ? (errors.lastName ? false : true) : null"

                            />
                            <b-form-invalid-feedback v-if="touched.lastName && errors.lastName">
                                {{ errors.lastName }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback v-else-if="touched.lastName && !errors.lastName">
                                Looks good!
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Username -->
                    <b-col md="4">
                        <b-form-group label="Username">
                            <b-form-input
                                type="text"
                                v-model="formData.username"
                                :state="touched.username ? (errors.username ? false : true) : null"

                            />
                            <b-form-invalid-feedback v-if="touched.username && errors.username">
                                {{ errors.username }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback v-else-if="touched.username && !errors.username">
                                Looks good!
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- City -->
                    <b-col md="6">
                        <b-form-group label="City">
                            <b-form-input
                                type="text"
                                v-model="formData.city"
                                :state="touched.city ? (errors.city ? false : true) : null"

                            />
                            <b-form-invalid-feedback v-if="touched.city && errors.city">
                                {{ errors.city }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback v-else-if="touched.city && !errors.city">
                                Looks good!
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- State -->
                    <b-col md="3">
                        <b-form-group label="State">
                            <b-form-select
                                v-model="formData.state"
                                :state="touched.state ? (errors.state ? false : true) : null"
                                @change="handleChange('state', $event)"
                            >
                                <option value="">Choose...</option>
                                <option value="NY">New York</option>
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                            </b-form-select>
                            <b-form-invalid-feedback v-if="touched.state && errors.state">
                                {{ errors.state }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback v-else-if="touched.state && !errors.state">
                                Looks good!
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Zip -->
                    <b-col md="3">
                        <b-form-group label="Zip">
                            <b-form-input
                                type="text"
                                v-model="formData.zip"
                                :state="touched.zip ? (errors.zip ? false : true) : null"

                            />
                            <b-form-invalid-feedback v-if="touched.zip && errors.zip">
                                {{ errors.zip }}
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback v-else-if="touched.zip && !errors.zip">
                                Looks good!
                            </b-form-valid-feedback>
                        </b-form-group>
                    </b-col>

                    <!-- Terms -->
                    <b-col md="12" class="mt-3">
                        <b-form-checkbox
                            v-model="formData.termsAgreed"
                            :state="touched.termsAgreed ? (errors.termsAgreed ? false : true) : null"

                        >
                            Agree to terms and conditions
                        </b-form-checkbox>
                        <b-form-invalid-feedback v-if="touched.termsAgreed && errors.termsAgreed">
                            {{ errors.termsAgreed }}
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback v-else-if="touched.termsAgreed && !errors.termsAgreed">
                            Looks good!
                        </b-form-valid-feedback>
                    </b-col>

                    <!-- Submit -->
                    <b-col md="12">
                        <b-button type="submit" variant="primary">
                            <b-spinner v-if="loading" small></b-spinner>
                            <span v-else>Submit form</span>
                        </b-button>
                    </b-col>

                </b-form>
            </b-card-body>
        </b-card>
    </b-col>
</template>
