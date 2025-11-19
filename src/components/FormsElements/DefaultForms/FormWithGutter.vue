<script setup>
import { ref } from 'vue'
import {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BForm,
    BFormInput,
    BFormSelect,
    BButton,
    BSpinner,
    BFormCheckbox,
    BFormGroup
} from 'bootstrap-vue-next'

import { PhUser, PhEnvelope, PhPhone, PhLock } from '@phosphor-icons/vue'

// reactive states
const firstName = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')
const state = ref('')
const remember = ref(false)
const loadingGutter = ref(false)

const iconFirstName = ref('')
const iconEmail = ref('')
const iconPhone = ref('')
const iconPassword = ref('')
const iconState = ref('')
const iconRemember = ref(false)
const loadingGutterIcon = ref(false)

// form submit handlers
const handleDefaultSubmit = async () => {
    loadingGutter.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loadingGutter.value = false
}

const handleIconSubmit = async () => {
    loadingGutterIcon.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loadingGutterIcon.value = false
}
</script>

<template>
    <div>
        <b-row>
            <!-- Form With Gutters -->
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <h5>Form With Gutters</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleDefaultSubmit" class="app-form">
                            <b-row class="g-1">
                                <b-col md="6">
                                    <b-form-group label="First Name" label-for="firstName" class="mb-3">
                                        <b-form-input
                                            id="firstName"
                                            v-model="firstName"
                                            placeholder="Your Name"

                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col md="6">
                                    <b-form-group label="Email address" label-for="email" class="mb-3">
                                        <b-form-input
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            placeholder="Your Email"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12">
                                    <b-form-group label="Phone Number" label-for="phone" class="mb-3">
                                        <b-form-input
                                            id="phone"
                                            v-model="phone"
                                            placeholder="Your Phone Number"
                                            class="contact-input "
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col md="8">
                                    <b-form-group label="Password" label-for="password" class="mb-3">
                                        <b-form-input
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            placeholder="Your Password"

                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col md="4">
                                    <b-form-group label="State" label-for="state" class="mb-3">
                                        <b-form-select id="state" v-model="state">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12">
                                    <b-form-checkbox
                                        id="formCheck6"
                                        v-model="remember"
                                        class="mb-3"
                                    >
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>

                                <b-col cols="12" class="text-end">
                                    <b-button type="submit" variant="primary">
                                        <template v-if="loadingGutter">
                                            <b-spinner small />
                                        </template>
                                        <template v-else>Submit</template>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>

            <!-- Form With Gutters With Icon -->
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <h5>Form With Gutters With Icon</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleIconSubmit" class="app-form">
                            <b-row class="g-1">
                                <b-col md="6">
                                    <b-form-group label="First Name" label-for="iconFirstName" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhUser size="20" weight="bold" />
                                            <b-form-input
                                                id="iconFirstName"
                                                v-model="iconFirstName"
                                                placeholder="Your Name"
                                                class="pa-s-34"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6">
                                    <b-form-group label="Email address" label-for="iconEmail" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhEnvelope size="20" weight="bold" />
                                            <b-form-input
                                                id="iconEmail"
                                                v-model="iconEmail"
                                                type="email"
                                                placeholder="Your Email"
                                                class="pa-s-34"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12">
                                    <b-form-group label="Phone Number" label-for="iconPhone" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhPhone size="20" weight="bold" />
                                            <b-form-input
                                                id="iconPhone"
                                                v-model="iconPhone"
                                                placeholder="Your Phone Number"
                                                class="pa-s-34 contact-input"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col md="8">
                                    <b-form-group label="Password" label-for="iconPassword" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhLock size="20" weight="bold" />
                                            <b-form-input
                                                id="iconPassword"
                                                v-model="iconPassword"
                                                type="password"
                                                placeholder="Your Password"
                                                class="pa-s-34"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col md="4">
                                    <b-form-group label="State" label-for="iconState" class="mb-3">
                                        <b-form-select id="iconState" v-model="iconState">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12">
                                    <b-form-checkbox
                                        id="formCheck7"
                                        v-model="iconRemember"
                                        class="mb-3"
                                    >
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>

                                <b-col cols="12" class="text-end">
                                    <b-button type="submit" variant="light">
                                        <template v-if="loadingGutterIcon">
                                            <b-spinner small />
                                        </template>
                                        <template v-else>Submit</template>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
