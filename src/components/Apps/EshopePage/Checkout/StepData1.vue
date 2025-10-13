<script setup>
import {
  BForm,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BFormCheckbox,
  BFormText,
  BInputGroup,
  BInputGroupText,
  BButton
} from "bootstrap-vue-next";
import { PhPhoneCall } from "@phosphor-icons/vue";
</script>

<template>
  <b-form class="app-form">
    <b-row>
      <b-col md="6">
        <b-form-group label="First Name" class="mb-3">
          <b-form-input type="text" name="firstName" />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Last Name" class="mb-3">
          <b-form-input type="text" name="lastName" />
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group label="Email address" class="mb-3">
          <b-form-input type="email" name="email" />
          <b-form-text>
            We'll never share your email with anyone else.
          </b-form-text>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Contact" class="mb-3">
          <b-input-group>
            <b-form-input
                type="text"
                name="contact"
                aria-label="Contact number"
            />
            <b-input-group-text>
              <PhPhoneCall class="me-2 fs-5" />
            </b-input-group-text>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Telephone" class="mb-3">
          <b-form-input
              type="tel"
              name="telephone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </b-form-group>
      </b-col>
      <b-col md="8">
        <b-form-group label="City" class="mb-3">
          <b-form-input type="text" name="city" />
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label="State" class="mb-3">
          <b-form-select name="state">
            <option>Choose...</option>
            <option>...</option>
          </b-form-select>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group class="mb-3">
          <b-form-checkbox
              id="rememberMe"
              name="rememberMe"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <div class="text-end">
          <b-button variant="primary" class="rounded">
            Submit
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-form>
</template>