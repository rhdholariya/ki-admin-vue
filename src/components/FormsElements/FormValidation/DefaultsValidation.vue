<script setup>
import { ref } from 'vue'
import {
    BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormCheckbox,
    BInputGroup,
    BInputGroupText,
    BSpinner
} from 'bootstrap-vue-next'

const loading = ref(false)
const isChecked = ref(false)

const formData = ref({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: ''
})


const handleSubmit = (e) => {
    e.preventDefault()
    loading.value = true

    setTimeout(() => {
        loading.value = false
    }, 1500)
}
</script>

<template>
    <b-col cols="12">
        <b-card no-body>
            <b-card-header>
                <h5>Browser Defaults</h5>
                <p class="text-secondary">
                    Not interested in custom validation feedback messages or writing JavaScript to change
                    form behaviors? All good, you can use the browser defaults. Try submitting the form
                    below. Depending on your browser and OS, you’ll see a slightly different style of
                    feedback. While these feedback styles cannot be styled with CSS, you can still customize
                    the feedback text through JavaScript.
                </p>
            </b-card-header>

            <b-card-body>
                <b-form class="row g-3 app-form" @submit="handleSubmit">
                    <b-col md="4">
                        <b-form-group label="First name" label-for="firstName">
                            <b-form-input
                                id="firstName"
                                v-model="formData.firstName"
                                type="text"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="4">
                        <b-form-group label="Last name" label-for="lastName">
                            <b-form-input
                                id="lastName"
                                v-model="formData.lastName"
                                type="text"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="4">
                        <b-form-group label="Username" label-for="username">
                            <b-input-group>
                                <b-input-group-text>@</b-input-group-text>
                                <b-form-input
                                    id="username"
                                    v-model="formData.username"
                                    type="text"
                                    required
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <b-col md="6">
                        <b-form-group label="City" label-for="city">
                            <b-form-input
                                id="city"
                                v-model="formData.city"
                                type="text"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="3">
                        <b-form-group label="State" label-for="state">
                            <b-form-select
                                id="state"
                                v-model="formData.state"
                                required
                            >
                                <option disabled value="">Choose...</option>
                                <option>New York</option>
                                <option>California</option>
                                <option>Texas</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>


                    <b-col md="3">
                        <b-form-group label="Zip" label-for="zip">
                            <b-form-input
                                id="zip"
                                v-model="formData.zip"
                                type="text"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <b-col md="12">
                        <b-form-group>
                            <b-form-checkbox
                                v-model="isChecked"
                                name="termsAgreed"
                                required
                            >
                                Agree to terms and conditions
                            </b-form-checkbox>
                        </b-form-group>
                    </b-col>

                    <b-col md="12" class="text-end">
                        <b-button type="submit" variant="primary">
                            <template v-if="loading">
                                <b-spinner small />
                            </template>
                            <template v-else>
                                Submit form
                            </template>
                        </b-button>
                    </b-col>
                </b-form>
            </b-card-body>
        </b-card>
    </b-col>
</template>
