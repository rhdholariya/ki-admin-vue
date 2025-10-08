<script setup>
import {ref} from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BForm,
    BFormInput,
    BFormTextarea,
    BFormSelect,
    BButton,
    BInputGroup,
    BInputGroupText,
    BRow,
    BCol, BFormGroup, BFormRadio,
} from 'bootstrap-vue-next'
import {PhCheck, PhImage, PhX} from '@phosphor-icons/vue'


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
// Refs
const imagePreview = ref(null)
const imgPreviewRef = ref(null)

// Handle image upload
const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = () => (imagePreview.value = reader.result)
        reader.readAsDataURL(file)
    }
}

// Form fields
const fields = [
    {label: 'Surname', type: 'text', placeholder: 'Enter Surname', col: {md: 4}},
    {label: 'Student Name', type: 'text', placeholder: 'Enter Name', col: {md: 4}},
    {label: 'Parent Name', type: 'text', placeholder: 'Enter Parent Name', col: {md: 4}},
    {label: 'Date of Birth', type: 'date', placeholder: '', col: {md: 6, xl: 3}},
    {label: 'Gender', type: 'select', options: ['Select Gender', 'Male', 'Female'], col: {md: 6, xl: 3}},
    {label: 'Email Address', type: 'email-group', placeholder: 'Email Address', col: {xl: 6}},
    {label: 'Father Contact', type: 'text', placeholder: 'xxx-xxxx-xxx', col: {md: 6}},
    {label: 'Mother Contact', type: 'text', placeholder: 'xxx-xxxx-xxx', col: {md: 6}},
    {label: 'Address', type: 'textarea', placeholder: 'Enter Your Address', col: {xl: 6}},
    {label: 'City', type: 'text', placeholder: 'Enter Your City', col: {md: 6, xl: 3}},
    {label: 'Zip', type: 'text', placeholder: 'xxxxx', maxLength: 5, col: {md: 6, xl: 3}},
]
</script>
<template>
    <b-card no-body>
        <b-card-header>
            <h5>Student Details Form</h5>
        </b-card-header>

        <b-card-body>
            <b-form class="app-form">
                <b-row class="justify-content-center">
                    <!-- Image Upload Section -->
                    <b-col cols="12" class="text-center mb-3">
                        <div class="d-flex justify-content-center mb-3">
                            <div class="avatar-upload">
                                <div class="avatar-edit">
                                    <b-form-input
                                        type="file"
                                        id="imageUpload"
                                        accept=".png, .jpg, .jpeg"
                                        @change="handleImageUpload"
                                        hidden
                                    />
                                    <label for="imageUpload" class="m-0">
                                        <PhImage size="16"/>
                                    </label>
                                </div>

                                <div class="avatar-preview">
                                    <div
                                        ref="imgPreviewRef"
                                        :style="{ backgroundImage: imagePreview ? `url('${imagePreview}')` : '' }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </b-col>

                    <!-- Dynamic Form Fields -->
                    <b-col
                        v-for="(field, index) in fields"
                        :key="index"
                        v-bind="field.col"
                        class="mb-3"
                    >
                        <label class="form-label">{{ field.label }}</label>

                        <!-- Select -->
                        <b-form-select v-if="field.type === 'select'">
                            <option
                                v-for="(option, i) in field.options"
                                :key="i"
                                :value="option"
                            >
                                {{ option }}
                            </option>
                        </b-form-select>

                        <!-- Textarea -->
                        <b-form-textarea
                            v-else-if="field.type === 'textarea'"
                            :placeholder="field.placeholder"
                            rows="1"
                        ></b-form-textarea>

                        <!-- Email Input Group -->
                        <b-input-group v-else-if="field.type === 'email-group'">
                            <b-input-group-text>@</b-input-group-text>
                            <b-form-input
                                type="email"
                                :placeholder="field.placeholder"
                            ></b-form-input>
                        </b-input-group>

                        <!-- Default Input -->
                        <b-form-input
                            v-else
                            :type="field.type"
                            :placeholder="field.placeholder"
                            :maxlength="field.maxLength"
                        ></b-form-input>
                    </b-col>


                </b-row>
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
                <b-row>
                    <!-- Buttons -->
                    <b-col cols="12" class="text-end">
                        <b-button variant="primary" type="submit" class="me-2">Add</b-button>
                        <b-button variant="secondary" type="reset">Reset</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card-body>
    </b-card>
</template>



