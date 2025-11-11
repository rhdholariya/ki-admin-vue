<script setup>
import {ref} from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BButton,
    BTabs,
    BTab, BFormCheckbox
} from 'bootstrap-vue-next'

import {PhUserCirclePlus, PhUserSwitch, PhCreditCard} from '@phosphor-icons/vue'

const activeTab = ref('details')
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Business Account Wizards</h5>
        </b-card-header>

        <b-card-body>
            <div class="form-wizard">
                <b-tabs
                    v-model="activeTab"
                    pills
                    fill
                    content-class="mt-3"
                    active-nav-item-class="active"
                    class="custom-navstpes mb-3"
                    nav-class="tab-light-primary"

                >
                    <b-tab key="details" active>
                        <template #title>
                            <div class="d-flex align-items-center justify-content-center">
                                <PhUserCirclePlus size="40" class="me-2"/>
                                <span class="f-s-18 f-w-500">Create account</span>
                            </div>
                        </template>

                        <b-form class="app-form">
                            <b-row>
                                <b-col cols="12" class="mb-3">
                                    <b-form-group label="Username" label-class="f-w-500">
                                        <b-form-input placeholder="James"/>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" class="mb-3">
                                    <b-form-group label="Email Address" label-class="f-w-500">
                                        <b-form-input type="email" placeholder="@gmail.com"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group label="Password" label-class="f-w-500">
                                        <b-form-input type="password" placeholder="******"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group label="Confirm Password" label-class="f-w-500">
                                        <b-form-input type="password" placeholder="******"/>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>

                    <b-tab key="personal">
                        <template #title>
                            <div class="d-flex align-items-center justify-content-center">
                                <PhUserSwitch size="40" class="me-2" weight="duotone"/>
                                <span class="f-s-18 f-w-500">Personal account</span>
                            </div>
                        </template>

                        <b-form class="app-form">
                            <b-row>
                                <b-col cols="12" class="mb-3">
                                    <b-form-group label="Contact Number" label-class="f-w-500">
                                        <b-form-input placeholder="+91"/>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" class="mb-3">
                                    <b-form-group label="Address" label-class="f-w-500">
                                        <b-form-input placeholder="156/A ..."/>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" class="mb-3">
                                    <b-form-group label="Address 2" label-class="f-w-500">
                                        <b-form-input placeholder="Apartment, studio, or floor"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group label="City" label-class="f-w-500">
                                        <b-form-input placeholder="UK"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="4" class="mb-3">
                                    <b-form-group label="State" label-class="f-w-500">
                                        <b-form-select>
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </b-form-select>
                                    </b-form-group>
                                </b-col>

                                <b-col md="2" class="mb-3">
                                    <b-form-group label="Zip" label-class="f-w-500">
                                        <b-form-input placeholder="xxxxx" maxlength="5"/>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" class="mb-3">
                                    <b-form-checkbox>Check me out</b-form-checkbox>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>

                    <b-tab key="payment">
                        <template #title>
                            <div class="d-flex align-items-center justify-content-center">
                                <PhCreditCard size="40" class="me-2" weight="duotone"/>
                                <span class="f-s-18 f-w-500">Payment method</span>
                            </div>
                        </template>

                        <b-form class="app-form">
                            <b-row>
                                <b-col cols="12">
                                    <b-form-checkbox type="radio" label="" class="mb-3">
                                        Credit / Debit Card
                                    </b-form-checkbox>
                                    <b-form-group label="Cardholder Name" label-class="f-w-500">
                                        <b-form-input placeholder="Olaf" class="mb-3"/>
                                    </b-form-group>

                                    <b-form-group label="Card Number" label-class="f-w-500">
                                        <b-form-input placeholder="xxxx-xxxx-xxxx-xxxx" class="mb-3"/>
                                    </b-form-group>

                                    <b-form-group label="Expiration Date" label-class="f-w-500">
                                        <b-form-input placeholder="MM/YY" class="mb-3"/>
                                    </b-form-group>

                                    <b-form-group label="CVC code" label-class="f-w-500">
                                        <b-form-input placeholder="xxx" class="mb-3"/>
                                    </b-form-group>
                                </b-col>

                                <b-col cols="12" class="text-end">
                                    <b-button variant="primary">Submit</b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>
                </b-tabs>
            </div>
        </b-card-body>
    </b-card>
</template>
