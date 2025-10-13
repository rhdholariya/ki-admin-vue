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

import {
    PhUser,
    PhEnvelope,
    PhLock,
    PhPhone
} from '@phosphor-icons/vue'

// form states
const firstName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const state = ref('')
const rememberMe = ref(false)
const loadingGrid = ref(false)

// icon form states
const iconFirstName = ref('')
const iconEmail = ref('')
const iconPassword = ref('')
const iconPhone = ref('')
const iconState = ref('')
const iconRememberMe = ref(false)
const loadingGridIcon = ref(false)

const handleDefaultSubmit = async () => {
    loadingGrid.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loadingGrid.value = false
}

const handleIconSubmit = async () => {
    loadingGridIcon.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loadingGridIcon.value = false
}
</script>

<template>
    <div>
        <b-row>
            <!-- Form With Grid -->
            <b-col lg="6">
                <b-card no-body class="equal-card">
                    <b-card-header>
                        <h5>Form With Grid</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleDefaultSubmit" class="app-form">
                            <b-row>
                                <b-col md="6">
                                    <b-form-group label="First Name" label-for="firstName" class="mb-3">
                                        <b-form-input
                                            id="firstName"
                                            v-model="firstName"
                                            type="text"
                                            placeholder="First Name"
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
                                            type="text"
                                            placeholder="Your Phone Number"
                                            class="contact-input"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col md="8">
                                    <b-form-group label="Password" label-for="password" class="mb-3">
                                        <b-form-input
                                            id="password"
                                            v-model="password"
                                            type="text"
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
                                    <b-form-checkbox id="rememberMe" v-model="rememberMe" class="mb-3">
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>

                                <b-col cols="12" class="text-end">
                                    <b-button type="submit" variant="secondary">
                                        <template v-if="loadingGrid">
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

            <!-- Form With Grid With Icon -->
            <b-col lg="6">
                <b-card no-body class="equal-card">
                    <b-card-header>
                        <h5>Form With Grid With Icon</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleIconSubmit" class="app-form">
                            <b-row>
                                <b-col md="6">
                                    <b-form-group label="First Name" label-for="iconFirstName" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhUser size="20" weight="bold" />
                                            <b-form-input
                                                id="iconFirstName"
                                                v-model="iconFirstName"
                                                type="text"
                                                placeholder="First Name"
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
                                                type="text"
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
                                                type="text"
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
                                    <b-form-checkbox id="iconRememberMe" v-model="iconRememberMe" class="mb-3">
                                        Remember me
                                    </b-form-checkbox>
                                </b-col>

                                <b-col cols="12" class="text-end">
                                    <b-button type="submit" variant="dark">
                                        <template v-if="loadingGridIcon">
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
