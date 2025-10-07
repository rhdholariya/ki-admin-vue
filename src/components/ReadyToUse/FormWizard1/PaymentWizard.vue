<script setup>
import {ref} from "vue";
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
    BTab, BFormFloatingLabel, BFormCheckbox,
} from "bootstrap-vue-next";
import {
    PhUserCircle,
    PhInfo,
    PhCreditCard,
    PhChecks,
} from "@phosphor-icons/vue";

const activeTab = ref("account");
const paymentType = ref("card");
</script>

<template>
    <b-card>
        <b-card-header>
            <h5>Payment Method Wizards</h5>
        </b-card-header>

        <b-card-body>
            <div class="form-wizard">
                <b-row>
                    <!-- Left Sidebar Tabs -->
                    <b-col xl="3" class="mb-3">
                        <b-tabs
                            v-model="activeTab"
                            class="flex-column navstpes"
                            nav-class="tab-light-primary"
                            active-nav-item-class="active"
                            fill
                            pills
                        >
                            <b-tab title="Create Account" id="account" class="mb-3">
                                <template #title>
                                    <div class=" d-flex align-items-center">
                                        <PhUserCircle size="40" weight="bold"/>
                                        <span class="ms-3 fw-normal">Create Account</span>
                                    </div>
                                </template>
                            </b-tab>

                            <b-tab title="Personal Info" id="info">
                                <template #title>
                                    <div class="d-flex align-items-center">
                                        <PhInfo size="40" weight="bold"/>
                                        <span class="ms-3 fw-normal">Personal Info</span>
                                    </div>
                                </template>
                            </b-tab>

                            <b-tab title="Payment Method" id="payment">
                                <template #title>
                                    <div class="d-flex align-items-center">
                                        <PhCreditCard size="40" weight="bold"/>
                                        <span class="ms-3 fw-normal">Payment Method</span>
                                    </div>
                                </template>
                            </b-tab>

                            <b-tab title="Confirm Order" id="confirm">
                                <template #title>
                                    <div class="d-flex align-items-center">
                                        <PhChecks size="40" weight="bold"/>
                                        <span class="ms-3 fw-normal">Confirm Order</span>
                                    </div>
                                </template>
                            </b-tab>
                        </b-tabs>
                    </b-col>

                    <!-- Right Content -->
                    <b-col xl="9">
                        <!-- Create Account -->
                        <div v-if="activeTab === 'account'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col cols="12" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Username
                                            </b-form-floating-label
                                            >
                                            <b-form-input placeholder="James"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Email Address
                                            </b-form-floating-label
                                            >
                                            <b-form-input type="email" placeholder="@gmail.com"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Password
                                            </b-form-floating-label
                                            >
                                            <b-form-input type="password" placeholder="******"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Confirm Password
                                            </b-form-floating-label
                                            >
                                            <b-form-input type="password" placeholder="******"/>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </div>

                        <!-- Personal Info -->
                        <div v-if="activeTab === 'info'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col cols="12" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Contact Number
                                            </b-form-floating-label
                                            >
                                            <b-form-input placeholder="+91"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Address
                                            </b-form-floating-label
                                            >
                                            <b-form-input placeholder="156/A ..."/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >Address 2
                                            </b-form-floating-label
                                            >
                                            <b-form-input placeholder="Apartment, studio, or floor"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >City
                                            </b-form-floating-label
                                            >
                                            <b-form-input placeholder="UK"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="4" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500"
                                            >State
                                            </b-form-floating-label
                                            >
                                            <b-form-select>
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                            </b-form-select>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="2" class="mb-3">
                                        <b-form-group>
                                            <b-form-floating-label class="form-label f-w-500">Zip
                                            </b-form-floating-label>
                                            <b-form-input maxlength="5" placeholder="xxxxx"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12" class="mb-3">
                                        <b-form-checkbox>Check me out</b-form-checkbox>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </div>

                        <!-- Payment Method -->
                        <div v-if="activeTab === 'payment'">
                            <b-row>
                                <b-col cols="12">
                                    <b-card class="shadow-none" no-body>
                                        <b-card-body class="select-content">
                                            <b-form-checkbox
                                                v-model="paymentType"
                                                value="card"
                                                type="radio"
                                                name="paymentType"
                                                label="Credit / Debit Card"
                                                class="check-box f-w-500"
                                            />
                                            <b-form class="app-form mt-3">
                                                <b-row>
                                                    <b-col cols="12" class="mb-3">
                                                        <b-form-group>
                                                            <b-form-floating-label class="form-label f-w-500"
                                                            >Cardholder Name
                                                            </b-form-floating-label
                                                            >
                                                            <b-form-input placeholder="Olaf"/>
                                                        </b-form-group>
                                                    </b-col>

                                                    <b-col md="6" class="mb-3">
                                                        <b-form-group>
                                                            <b-form-floating-label class="form-label f-w-500"
                                                            >Card Number
                                                            </b-form-floating-label
                                                            >
                                                            <b-form-input
                                                                placeholder="xxxx-xxxx-xxxx-xxx"
                                                            />
                                                        </b-form-group>
                                                    </b-col>

                                                    <b-col md="3" class="mb-3">
                                                        <b-form-group>
                                                            <b-form-floating-label class="form-label f-w-500"
                                                            >Expiration Date
                                                            </b-form-floating-label
                                                            >
                                                            <b-form-input placeholder="MM/YY"/>
                                                        </b-form-group>
                                                    </b-col>

                                                    <b-col md="3" class="mb-3">
                                                        <b-form-group>
                                                            <b-form-floating-label class="form-label f-w-500"
                                                            >CVC Code
                                                            </b-form-floating-label
                                                            >
                                                            <b-form-input placeholder="xxx"/>
                                                        </b-form-group>
                                                    </b-col>

                                                    <b-col cols="12" class="mt-2">
                                                        <div class="text-end">
                                                            <b-button variant="primary">Submit</b-button>
                                                        </div>
                                                    </b-col>
                                                </b-row>
                                            </b-form>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col md="6">
                                    <b-card class="shadow-none" no-body>
                                        <b-card-body class="select-content">
                                            <b-form-checkbox
                                                v-model="paymentType"
                                                value="visa"
                                                type="radio"
                                                name="paymentType"
                                                class="radio-mark form-check"
                                            >
                                                <div class="d-flex align-items-center mg-s-25">
                                                    <img
                                                        src="/images/checkbox-radio/logo1.png"
                                                        alt=""
                                                        class="w-30 h-30"
                                                    />
                                                    <div class="ms-2">
                                                        <div class="fs-6 f-w-500">Visa Card</div>
                                                        <div class="text-secondary">
                                                            Select Visa card payment method
                                                        </div>
                                                    </div>
                                                </div>

                                            </b-form-checkbox>
                                        </b-card-body>
                                    </b-card>
                                </b-col>

                                <b-col md="6">
                                    <b-card class="shadow-none" no-body>
                                        <b-card-body class="select-content">
                                            <b-form-checkbox
                                                v-model="paymentType"
                                                value="paypal"
                                                type="radio"
                                                name="paymentType"
                                                class="radio-mark form-check"
                                            >

                                                <div class="d-flex align-items-center mg-s-25">
                                                    <img
                                                        src="/images/checkbox-radio/logo3.png"
                                                        alt=""
                                                        class="w-30 h-30"
                                                    />
                                                    <div class="ms-2">
                                                        <div class="fs-6 f-w-500">PayPal</div>
                                                        <div class="text-secondary">
                                                            Select PayPal payment method
                                                        </div>
                                                    </div>
                                                </div>

                                            </b-form-checkbox>
                                        </b-card-body>
                                    </b-card>
                                </b-col>
                            </b-row>
                        </div>

                        <!-- Confirm -->
                        <div v-if="activeTab === 'confirm'">
                            <div class="completed-contents">
                                <div class="completbox text-center">
                                    <img src="/images/form/done.png" alt=""/>
                                    <h6 class="mb-0 mt-3">Thank You!</h6>
                                    <p>
                                        Successfully completed your order process! Confirmation will
                                        be sent to your email.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-card-body>
    </b-card>
</template>


