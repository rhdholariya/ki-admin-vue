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
  BFormFile
} from 'bootstrap-vue-next'

// Form data
const formData = ref({
  textarea: '',
  checkbox: false,
  radio: '',
  select: '',
  file: null
})

const showValidation = ref(true)

// Handle file input
const handleFileChange = (event) => {
  const target = event.target
  formData.value.file = target.files && target.files[0] ? target.files[0] : null
}

// Validation helpers
const isTextareaValid = () =>
    String(formData.value.textarea).trim() !== '';
const isSelectValid = () => formData.value.select !== ''
const isFileValid = () => formData.value.file !== null

// Validate full form
const validateForm = () => {
  return (
      String(formData.value.textarea).trim() !== '' &&
      formData.value.checkbox &&
      formData.value.radio !== '' &&
      formData.value.select !== '' &&
      formData.value.file !== null
  );
};

const handleSubmit = () => {
  if (validateForm()) {
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
</script>

<template>
  <b-col cols="12">
    <b-card no-body>
      <b-card-body>
        <b-form
            :class="{ 'was-validated': showValidation }"
            novalidate
            @submit.prevent="handleSubmit"
        >
          <!-- Textarea -->
          <b-form-group label="Textarea" label-for="validationTextarea">
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

          <!-- Checkbox -->
          <b-form-group>
            <b-form-checkbox
                v-model="formData.checkbox"
                :state="formData.checkbox"
                required
            >
              <span
                  :class="{
                  'text-danger': !formData.checkbox,
                  'text-success': formData.checkbox
                }"
              >
                Check this checkbox
              </span>
            </b-form-checkbox>
          </b-form-group>

          <!-- Radio -->
          <b-form-group>
            <b-form-radio
                v-model="formData.radio"
                value="yes"
                :state="formData.radio !== ''"
                required
            >
              <span
                  :class="{
                  'text-danger': !formData.radio,
                  'text-success': formData.radio
                }"
              >
                Or toggle this other radio
              </span>
            </b-form-radio>
          </b-form-group>

          <!-- Select -->
          <b-form-group label="Select" label-for="validationSelect">
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

          <!-- File -->
          <b-form-group label="File Input" label-for="validationFile">
            <b-form-file
                id="validationFile"
                :state="showValidation ? isFileValid() : null"
                @change="handleFileChange"
                required
            />
            <div
                v-if="showValidation && !isFileValid()"
                class="invalid-feedback"
            >
              Example invalid form file feedback
            </div>
          </b-form-group>

          <div class="text-end">
            <b-button variant="primary" type="submit">
              Submit Form
            </b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </b-col>
</template>
