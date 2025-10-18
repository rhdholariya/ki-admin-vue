<script setup>
import { ref } from 'vue'
import {
    BButton,
    BCard,
    BCardBody,
    BCol,
    BForm,
    BFormGroup,
    BFormTextarea,
    BFormCheckbox,
    BFormRadio,
    BFormSelect,
    BFormInput
} from 'bootstrap-vue-next'


const formData = ref({
    textarea: '',
    checkbox: false,
    radio: '',
    select: '',
    file: null
})


const showValidation = ref(true)

const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null
    formData.value.file = file
}

const validateForm = () => {

    return formData.value.textarea.trim() !== '' &&
        formData.value.checkbox &&
        formData.value.radio !== '' &&
        formData.value.select !== '' &&
        formData.value.file !== null
}

const handleSubmit = () => {
    if (validateForm()) {
        console.log('Form submitted:', formData.value)
        alert('Form submitted successfully!')

        formData.value = {
            textarea: '',
            checkbox: false,
            radio: '',
            select: '',
            file: null
        }
    }
}


const isTextareaValid = () => formData.value.textarea.trim() !== ''

const isSelectValid = () => formData.value.select !== ''
const isFileValid = () => formData.value.file !== null
</script>

<template>
    <b-col cols="12">
        <b-card no-body>
            <B-card-header>
                <h5>Supported Elements</h5>
                <p class="text-secondary">
                    Validation errors shown by default without requiring form submission.
                </p>
            </B-card-header>

            <b-card-body>
                <b-form
                    :class="{ 'was-validated': showValidation }"
                    novalidate
                    @submit.prevent="handleSubmit"
                >

                    <b-form-group
                        class="mb-3"
                        label="Textarea"
                        label-for="validationTextarea"
                    >
                        <b-form-textarea
                            id="validationTextarea"
                            v-model="formData.textarea"
                            :state="showValidation ? isTextareaValid() : null"
                            required
                        />
                        <div
                            v-if="showValidation && !isTextareaValid()"
                            class="invalid-feedback"
                        >
                            Please enter a message in the textarea.
                        </div>
                    </b-form-group>


                    <b-form-group class="mb-3">
                        <b-form-checkbox
                            id="validationFormCheck1"
                            v-model="formData.checkbox"
                            :state="formData.checkbox"
                            required
                        >
                            <span :class="{ 'text-danger': !formData.checkbox, 'text-success': formData.checkbox }">
                                Check this checkbox
                            </span>
                        </b-form-checkbox>
                    </b-form-group>


                    <b-form-group class="mb-3">
                        <b-form-radio
                            id="validationFormCheck3"
                            v-model="formData.radio"
                            value="yes"
                            :state="formData.radio"
                            required
                        >
                            <span :class="{ 'text-danger': !formData.radio, 'text-success': formData.radio }">
                                Or toggle this other radio
                            </span>
                        </b-form-radio>
                    </b-form-group>

                    <b-form-group class="mb-3" label="Select" label-for="validationSelect">
                        <b-form-select
                            id="validationSelect"
                            v-model="formData.select"
                            :state="showValidation ? isSelectValid() : null"
                            required
                        >
                            <option value="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </b-form-select>
                        <div
                            v-if="showValidation && !isSelectValid()"
                            class="invalid-feedback"
                        >
                            Example invalid select feedback
                        </div>
                    </b-form-group>


                    <b-form-group class="mb-3" label="File Input" label-for="validationFile">
                        <b-form-input
                            id="validationFile"
                            type="file"
                            :state="showValidation ? isFileValid() : null"
                            required
                            @change="handleFileChange"
                        />
                        <div
                            v-if="showValidation && !isFileValid()"
                            class="invalid-feedback"
                        >
                            Example invalid form file feedback
                        </div>
                    </b-form-group>


                    <div class="text-end">
                        <b-button
                            variant="primary"
                            type="submit"
                        >
                            Submit Form
                        </b-button>
                    </div>
                </b-form>
            </b-card-body>
        </b-card>
    </b-col>
</template>