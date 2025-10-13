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
    BFormGroup,
    BButton,
    BSpinner,
    BFormCheckbox
} from 'bootstrap-vue-next'

import {
    PhUser, PhEnvelope, PhLock, PhArticle
} from '@phosphor-icons/vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')
const state = ref('')
const zipCode = ref('')
const agreeTerms = ref(false)
const loadingDefault = ref(false)

const iconFullName = ref('')
const iconEmail = ref('')
const iconPassword = ref('')
const iconPhone = ref('')
const iconState = ref('')
const iconZipCode = ref('')
const iconAgreeTerms = ref(false)
const loadingDefaultIcon = ref(false)

const handleDefaultSubmit = async () => {
    loadingDefault.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loadingDefault.value = false
}

const handleIconSubmit = async () => {
    loadingDefaultIcon.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loadingDefaultIcon.value = false
}
</script>

<template>
    <div>
        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <h5>Vertical Form</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleDefaultSubmit" class="app-form">
                            <b-row>
                                <b-col sm="12">
                                    <b-form-group label="Full Name" label-for="fullName" class="mb-3">
                                        <b-form-input
                                            id="fullName"
                                            v-model="fullName"
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col sm="12">
                                    <b-form-group label="Email Address" label-for="email" class="mb-3">
                                        <b-form-input
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            placeholder="Your Email"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="Password" label-for="password" class="mb-3">
                                        <b-form-input
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            placeholder="Type password"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="Phone Number" label-for="phone" class="mb-3">
                                        <b-form-input
                                            id="phone"
                                            v-model="phone"
                                            type="tel"
                                            placeholder="123-45-678"
                                            class="contact-input"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="State" label-for="state" class="mb-3">
                                        <b-form-select id="state" v-model="state">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="Zip Code" label-for="zipCode" class="mb-3">
                                        <b-form-input
                                            id="zipCode"
                                            v-model="zipCode"
                                            type="text"
                                            placeholder="Type a code"
                                        />
                                    </b-form-group>
                                </b-col>

                                <b-col sm="12">
                                    <b-form-group>
                                        <b-form-checkbox id="formCheck3"
                                                         v-model="agreeTerms"
                                                         class="mb-3">Agree to terms and conditions
                                        </b-form-checkbox>
                                    </b-form-group>

                                </b-col>

                                <b-col sm="12" class="text-end">
                                    <b-button type="submit" variant="success">
                                        <template v-if="loadingDefault">
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
                <b-card no-body>
                    <b-card-header>
                        <h5>Vertical Form With Icon</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent="handleIconSubmit" class="app-form">
                            <b-row>
                                <b-col sm="12">
                                    <b-form-group label="Full Name" label-for="iconFullName" class="mb-3">
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
                                    </b-form-group>
                                </b-col>

                                <b-col sm="12">
                                    <b-form-group label="Email Address" label-for="iconEmail" class="mb-3">
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
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="Password" label-for="iconPassword" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhLock :size="20" weight="bold"/>
                                            <b-form-input
                                                id="iconPassword"
                                                v-model="iconPassword"
                                                type="password"
                                                placeholder="Type password"
                                                class="pa-s-34"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="Phone Number" label-for="iconPhone" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <Phone size="20" weight="bold"/>
                                            <b-form-input
                                                id="iconPhone"
                                                v-model="iconPhone"
                                                type="tel"
                                                placeholder="123-45-678"
                                                class="pa-s-34 contact-input"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="State" label-for="iconState" class="mb-3">
                                        <b-form-select id="iconState" v-model="iconState">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>

                                <b-col sm="6">
                                    <b-form-group label="Zip Code" label-for="iconZipCode" class="mb-3">
                                        <div class="icon-form d-flex align-items-center gap-2">
                                            <PhArticle size="20" weight="bold"/>
                                            <b-form-input
                                                id="iconZipCode"
                                                v-model="iconZipCode"
                                                type="text"
                                                placeholder="Type a code"
                                                class="pa-s-34"
                                            />
                                        </div>
                                    </b-form-group>
                                </b-col>

                                <b-col sm="12">
                                    <b-form-group>
                                        <b-form-checkbox id="formCheck5"
                                                         v-model="iconAgreeTerms"
                                                         class="mb-3">Agree to terms and conditions
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>

                                <b-col sm="12" class="text-end">
                                    <b-button type="submit" variant="primary">
                                        <template v-if="loadingDefaultIcon">
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
