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
    BTab,
    BFormFloatingLabel
} from "bootstrap-vue-next"


import {PhUserCircle, PhInfo, PhCreditCard, PhChecks} from '@phosphor-icons/vue'

const activeTab = ref('step1')

</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Create Account Wizard</h5>
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
                    >
                    <b-tab key="step1" active>
                        <template #title>
                            <div class="d-flex align-items-center">
                                <PhUserCircle class="w-40 h-40 " weight="bold"/>
                                <div class="ms-2 d-flex flex-column">
                                    <span class="f-w-500 f-s-16">Personal info</span>
                                    <span class="f-s-14 text-secondary">Enter step 1 details</span>
                                </div>
                            </div>
                        </template>

                        <b-form class="app-form">
                            <b-row>
                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Cardholder Name
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Enter Cardholder Name"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Last Name
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Enter Last Name"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Phone Number
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Enter Phone Number"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Email Address
                                        </b-form-floating-label>
                                        <b-form-input type="email" placeholder="Enter Email"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Country
                                        </b-form-floating-label>
                                        <b-form-select :options="[
                                       { text: 'Select Country', value: '', disabled: true, selected: true },
                                       { text: 'UK', value: 'UK' },
                                       { text: 'US', value: 'US' },
                                       { text: 'Italy', value: 'Italy' }
                                     ]"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Language
                                        </b-form-floating-label>
                                        <b-form-select :options="[
                                      { text: 'Select Language', value: '', disabled: true, selected: true },
                                      { text: 'English', value: 'English' },
                                      { text: 'Italian', value: 'Italian' },
                                      { text: 'Spanish', value: 'Spanish' }
                                    ]"/>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <div class="text-end">
                                <b-button @click="activeTab = 'step2'" variant="primary">Next</b-button>
                            </div>
                        </b-form>
                    </b-tab>


                    <b-tab key="step2">
                        <template #title>
                            <div class="d-flex align-items-center">
                                <PhCreditCard class="w-40 h-40" weight="bold"/>
                                <div class="ms-2 d-flex flex-column">
                                    <span class="f-w-500 f-s-16">Billing Information</span>
                                    <span class="f-s-14 text-secondary">Enter step 2 details</span>
                                </div>
                            </div>
                        </template>

                        <b-form class="app-form">
                            <b-row>
                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Username
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Enter Username"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Credit/Debit Card Number
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Enter Card Number"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">ZIP Code
                                        </b-form-floating-label>
                                        <b-form-input placeholder="ZIP Code"/>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <div class="text-end">
                                <b-button variant="primary" class="me-2" @click="activeTab = 'step1'">Previous
                                </b-button>
                                <b-button @click="activeTab = 'step3'">Next</b-button>
                            </div>
                        </b-form>
                    </b-tab>


                    <b-tab key="step3">
                        <template #title>
                            <div class="d-flex align-items-center">
                                <PhInfo class="w-40 h-40" weight="bold"/>
                                <div class="ms-2 d-flex flex-column">
                                    <span class="f-w-500 f-s-16">Review Order</span>
                                    <span class="f-s-14 text-secondary">Enter step 3 details</span>
                                </div>
                            </div>
                        </template>

                        <b-form class="app-form">
                            <b-row>
                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Product Name
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Enter Product Name"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Quantity
                                        </b-form-floating-label>
                                        <b-form-input type="number" placeholder="Quantity"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Price per Unit
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Price per Unit"/>
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" class="mb-3">
                                    <b-form-group>
                                        <b-form-floating-label class="form-label f-w-500">Billing Address
                                        </b-form-floating-label>
                                        <b-form-input placeholder="Billing Address"/>
                                    </b-form-group>
                                </b-col>
                            </b-row>

                            <div class="text-end">
                                <b-button variant="primary" class="me-2" @click="activeTab = 'step2'">Previous
                                </b-button>
                                <b-button @click="activeTab = 'step4'">Next</b-button>
                            </div>
                        </b-form>
                    </b-tab>


                    <b-tab key="step4">
                        <template #title>
                            <div class="d-flex align-items-center">
                                <PhChecks class="w-40 h-40" weight="bold"/>
                                <div class="ms-2 d-flex flex-column">
                                    <span class="f-w-500 f-s-16">Order Confirmation</span>
                                    <span class="f-s-14 text-secondary">Enter step 4 details</span>
                                </div>
                            </div>
                        </template>

                        <div class="text-center">
                            <img src="/images/form/done.png" alt="Completed"/>
                            <h6 class="mt-3 mb-0">Thank You!</h6>
                            <p class="mb-0">Your booking is completed.</p>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </b-card-body>
    </b-card>
</template>
