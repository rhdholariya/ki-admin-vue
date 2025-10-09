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
    BInputGroup,
    BInputGroupText
} from 'bootstrap-vue-next'

const loading = ref(false)
const isChecked = ref(false)

const handleCheckboxChange = (val) => {
    isChecked.value = val
}

const handleSubmit = (e) => {
    e.preventDefault()
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1500)
}
</script>

<template>
    <b-col xs="12">
        <b-card>
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
                <b-form class="row g-3 app-form" @submit="handleSubmit" novalidate>

                    <!-- First Name -->
                    <b-col md="4">
                        <b-form-group label="First name">
                            <b-form-input
                                type="text"
                                name="firstName"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <!-- Last Name -->
                    <b-col md="4">
                        <b-form-group label="Last name">
                            <b-form-input
                                type="text"
                                name="lastName"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <!-- Username -->
                    <b-col md="4">
                        <b-form-group label="Username">
                            <b-input-group>
                                <b-input-group-text>@</b-input-group-text>
                                <b-form-input
                                    type="text"
                                    name="username"
                                    required
                                />
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <!-- City -->
                    <b-col md="6">
                        <b-form-group label="City">
                            <b-form-input
                                type="text"
                                name="city"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <!-- State -->
                    <b-col md="3">
                        <b-form-group label="State">
                            <b-form-select
                                name="state"
                                required
                                :options="[
                  { value: '', text: 'Choose...', disabled: true },
                  { value: 'NY', text: 'New York' },
                  { value: 'CA', text: 'California' },
                  { value: 'TX', text: 'Texas' }
                ]"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>

                    <!-- Zip -->
                    <b-col md="3">
                        <b-form-group label="Zip">
                            <b-form-input
                                type="text"
                                name="zip"
                                required
                            />
                        </b-form-group>
                    </b-col>

                    <!-- Terms Checkbox -->
                    <b-col cols="12">
                        <b-form-checkbox
                            v-model="isChecked"
                            required
                        >
                            Agree to terms and conditions
                        </b-form-checkbox>
                    </b-col>

                    <!-- Submit -->
                    <b-col cols="12" class="text-end">
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
