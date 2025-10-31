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
  termsAgreed: false,
})

const errors = ref({
  firstName: '',
  lastName: '',
  username: '',
  city: '',
  state: '',
  zip: '',
  termsAgreed: '',
})

const touched = ref({
  firstName: false,
  lastName: false,
  username: false,
  city: false,
  state: false,
  zip: false,
  termsAgreed: false,
})

const handleChange = (field, value) => {
  formData.value[field] = value
  touched.value[field] = true
  validateField(field)
}

const validateField = (field) => {
  const value = formData.value[field]

  if (field === 'firstName') {
    errors.value.firstName = value ? '' : 'Please provide first name.'
  } else if (field === 'lastName') {
    errors.value.lastName = value ? '' : 'Please provide last name.'
  } else if (field === 'username') {
    errors.value.username = value ? '' : 'Please choose a username.'
  } else if (field === 'city') {
    errors.value.city = value ? '' : 'Please provide a valid city.'
  } else if (field === 'state') {
    errors.value.state = value ? '' : 'Please select a state.'
  } else if (field === 'zip') {
    errors.value.zip = value ? '' : 'Please provide a valid zip.'
  } else if (field === 'termsAgreed') {
    errors.value.termsAgreed = value ? '' : 'You must agree before submitting.'
  }
}

const validateForm = () => {
  Object.keys(formData.value).forEach((key) => {
    touched.value[key] = true
    validateField(key)
  })
  return Object.values(errors.value).every((err) => err === '')
}

const handleSubmit = (e) => {
  e.preventDefault()

  if (validateForm()) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      formData.value = {
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        termsAgreed: false,
      }
      Object.keys(touched.value).forEach((key) => (touched.value[key] = false))
      Object.keys(errors.value).forEach((key) => (errors.value[key] = ''))
      alert('Form submitted successfully!')
    }, 1500)
  }
}

const getFieldState = (field) => {
  if (!touched.value[field]) return null
  return !errors.value[field]
}
</script>

<template>
  <b-col cols="12">
    <b-card no-body>
      <b-card-header>
        <h5 class="mb-2">Custom Styles</h5>
        <p class="text-secondary mb-0">
          Validation messages now take space and show green "Looks good!" for valid fields and red messages for invalid fields.
        </p>
      </b-card-header>

      <b-card-body>
        <b-form @submit="handleSubmit" novalidate class="row g-3">
          <!-- First Name -->
          <b-col md="4">
            <b-form-group label="First Name">
              <b-form-input
                  v-model="formData.firstName"
                  :state="getFieldState('firstName')"
                  @blur="handleChange('firstName', formData.firstName)"
              />
              <b-form-invalid-feedback v-if="touched.firstName && errors.firstName">
                {{ errors.firstName }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.firstName && !errors.firstName">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- Last Name -->
          <b-col md="4">
            <b-form-group label="Last Name">
              <b-form-input
                  v-model="formData.lastName"
                  :state="getFieldState('lastName')"
                  @blur="handleChange('lastName', formData.lastName)"
              />
              <b-form-invalid-feedback v-if="touched.lastName && errors.lastName">
                {{ errors.lastName }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.lastName && !errors.lastName">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- Username -->
          <b-col md="4">
            <b-form-group label="Username">
              <b-form-input
                  v-model="formData.username"
                  :state="getFieldState('username')"
                  @blur="handleChange('username', formData.username)"
              />
              <b-form-invalid-feedback v-if="touched.username && errors.username">
                {{ errors.username }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.username && !errors.username">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- City -->
          <b-col md="6">
            <b-form-group label="City">
              <b-form-input
                  v-model="formData.city"
                  :state="getFieldState('city')"
                  @blur="handleChange('city', formData.city)"
              />
              <b-form-invalid-feedback v-if="touched.city && errors.city">
                {{ errors.city }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.city && !errors.city">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- State -->
          <b-col md="3">
            <b-form-group label="State">
              <b-form-select
                  v-model="formData.state"
                  :state="getFieldState('state')"
                  @change="handleChange('state', formData.state)"
              >
                <option value="">Choose...</option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="IL">Illinois</option>
              </b-form-select>
              <b-form-invalid-feedback v-if="touched.state && errors.state">
                {{ errors.state }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.state && !errors.state">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- Zip -->
          <b-col md="3">
            <b-form-group label="Zip">
              <b-form-input
                  v-model="formData.zip"
                  maxlength="5"
                  :state="getFieldState('zip')"
                  @blur="handleChange('zip', formData.zip)"
              />
              <b-form-invalid-feedback v-if="touched.zip && errors.zip">
                {{ errors.zip }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.zip && !errors.zip">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- Terms Agreement -->
          <b-col cols="12" class="mt-2">
            <b-form-group>
              <b-form-checkbox
                  v-model="formData.termsAgreed"
                  :state="getFieldState('termsAgreed')"
                  @change="handleChange('termsAgreed', formData.termsAgreed)"
              >
                Agree to terms and conditions
              </b-form-checkbox>
              <b-form-invalid-feedback v-if="touched.termsAgreed && errors.termsAgreed">
                {{ errors.termsAgreed }}
              </b-form-invalid-feedback>
              <b-form-valid-feedback v-if="touched.termsAgreed && !errors.termsAgreed">
                Looks good!
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>

          <!-- Submit Button -->
          <b-col cols="12">
            <b-button
                type="submit"
                variant="primary"
                :disabled="loading"
                class="px-4"
            >
              <b-spinner v-if="loading" small class="me-2" />
              <span>{{ loading ? 'Submitting...' : 'Submit Form' }}</span>
            </b-button>
          </b-col>
        </b-form>
      </b-card-body>
    </b-card>
  </b-col>
</template>
