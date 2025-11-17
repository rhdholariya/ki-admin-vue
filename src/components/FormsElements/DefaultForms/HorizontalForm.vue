<script setup>
import {ref} from 'vue'
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
    BFormCheckbox, BFormGroup
} from 'bootstrap-vue-next'

import {
    PhUser,
    PhEnvelope,
    PhLock,
    PhPhone,
    PhArticle
} from '@phosphor-icons/vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const state = ref('')
const zipCode = ref('')
const agreeTerms = ref(false)
const loadingHorizontal = ref(false)

const iconFullName = ref('')
const iconEmail = ref('')
const iconPassword = ref('')
const iconPhone = ref('')
const iconState = ref('')
const iconZipCode = ref('')
const iconAgreeTerms = ref(false)
const loadingHorizontalIcon = ref(false)

const handleDefaultSubmit = async () => {
    loadingHorizontal.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loadingHorizontal.value = false
}

const handleIconSubmit = async () => {
    loadingHorizontalIcon.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loadingHorizontalIcon.value = false
}
</script>

<template>
    <div>
        <b-row>
            <b-col lg="6">
                <b-card no-body class="equal-card">
                    <b-card-header>
                        <h5>Horizontal Form</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleDefaultSubmit" class="app-form">
                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="fullName" class="form-label">Full Name</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-input
                                        id="fullName"
                                        v-model="fullName"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="email" class="form-label">Email Address</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-input
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="password" class="form-label">Password</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-input
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        placeholder="Type password"
                                    />
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="phone" class="form-label">Phone Number</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-input
                                        id="phone"
                                        v-model="phone"
                                        type="tel"
                                        placeholder="123-45-678"
                                        class="contact-input"
                                    />
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="state" class="form-label">State</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-select id="state" v-model="state">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </b-form-select>
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="zipCode" class="form-label">Zip Code</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-input
                                        id="zipCode"
                                        v-model="zipCode"
                                        type="text"
                                        placeholder="Type a code"
                                        class="mb-3"
                                    />
                                    <b-form-group>
                                        <b-form-checkbox id="formCheck2"
                                                         v-model="agreeTerms"
                                        >Agree to terms and conditions
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col class="text-end">
                                    <b-button type="submit" variant="warning">
                                        <template v-if="loadingHorizontal">
                                            <b-spinner small/>
                                        </template>
                                        <template v-else>Submit</template>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body class="equal-card">
                    <b-card-header>
                        <h5>Horizontal Form With Icon</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleIconSubmit" class="app-form">
                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="iconFullName" class="form-label">Full Name</label>
                                </b-col>
                                <b-col md="9">
                                    <div class="icon-form d-flex align-items-center gap-2">
                                        <PhUser size="20" weight="bold"/>
                                        <b-form-input
                                            id="iconFullName"
                                            v-model="iconFullName"
                                            type="text"
                                            placeholder="Your Name"
                                            class="pa-s-34"
                                        />
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="iconEmail" class="form-label">Email Address</label>
                                </b-col>
                                <b-col md="9">
                                    <div class="icon-form d-flex align-items-center gap-2">
                                        <PhEnvelope size="20" weight="bold"/>
                                        <b-form-input
                                            id="iconEmail"
                                            v-model="iconEmail"
                                            type="email"
                                            placeholder="Your Email"
                                            class="pa-s-34"
                                        />
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="iconPassword" class="form-label">Password</label>
                                </b-col>
                                <b-col md="9">
                                    <div class="icon-form d-flex align-items-center gap-2">
                                        <PhLock size="20" weight="bold"/>
                                        <b-form-input
                                            id="iconPassword"
                                            v-model="iconPassword"
                                            type="password"
                                            placeholder="Type password"
                                            class="pa-s-34"
                                        />
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="iconPhone" class="form-label">Phone Number</label>
                                </b-col>
                                <b-col md="9">
                                    <div class="icon-form d-flex align-items-center gap-2">
                                        <PhPhone size="20" weight="bold"/>
                                        <b-form-input
                                            id="iconPhone"
                                            v-model="iconPhone"
                                            type="tel"
                                            placeholder="123-45-678"
                                            class="pa-s-34 contact-input"
                                        />
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="iconState" class="form-label">State</label>
                                </b-col>
                                <b-col md="9">
                                    <b-form-select id="iconState" v-model="iconState">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </b-form-select>
                                </b-col>
                            </b-row>

                            <b-row class="mb-3" align-v="center">
                                <b-col md="3">
                                    <label for="iconZipCode" class="form-label">Zip Code</label>
                                </b-col>
                                <b-col md="9">
                                    <div class="icon-form d-flex align-items-center gap-2 mb-3">
                                        <PhArticle size="20" weight="bold"/>

                                        <b-form-input
                                            id="iconZipCode"
                                            v-model="iconZipCode"
                                            type="text"
                                            placeholder="Type a code"
                                            class="pa-s-34"
                                        />
                                    </div>
                                    <b-form-group>
                                        <b-form-checkbox id="formCheck1"
                                                         v-model="iconAgreeTerms"
                                                         class="me-2"> Agree to terms and conditions
                                        </b-form-checkbox>


                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col class="text-end">
                                    <b-button type="submit" variant="info">
                                        <template v-if="loadingHorizontalIcon">
                                            <b-spinner small/>
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
