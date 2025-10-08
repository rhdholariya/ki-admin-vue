<script setup>
import { ref } from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BFormTextarea,
    BButton,
    BInputGroup,
    BAccordion,
    BAccordionItem
} from 'bootstrap-vue-next'
import {
    PhUserCircle,
    PhDisc,
    PhUserPlus,
    PhCurrencyDollar,
    PhCreditCard
} from '@phosphor-icons/vue'

// Reactive state
const activeTab = ref('tab-1')
const accountType = ref('existing')
const selectedRole = ref('manager')
const selectedFinancingRole = ref('marketing')

// Steps data
const steps = [
    { id: 'tab-1', title: 'About', subtitle: 'Step 1', icon: PhUserCircle },
    { id: 'tab-2', title: 'Account', subtitle: 'Step 2', icon: PhDisc },
    { id: 'tab-3', title: 'Ownership', subtitle: 'Step 3', icon: PhUserPlus },
    { id: 'tab-4', title: 'Financing', subtitle: 'Step 4', icon: PhCurrencyDollar },
    { id: 'tab-5', title: 'Finish', subtitle: 'Step 5', icon: PhDisc }
]

// Form fields
const formFields = [
    { label: 'First Name', id: 'firstName', name: 'firstName', type: 'text' },
    { label: 'Last Name', id: 'lastName', name: 'lastName', type: 'text' },
    { label: 'Date of Birth', id: 'dob', name: 'dob', type: 'date' },
    { label: 'Email Address', id: 'email', name: 'email', type: 'email', placeholder: 'Enter Your Email', required: true },
    { label: 'Contact', id: 'contact', name: 'contact', type: 'text', placeholder: 'Enter Your Contact', isGrouped: true },
    { label: 'Address', id: 'address', name: 'address', type: 'textarea', placeholder: 'Enter Your Address', rows: 3 }
]

const accountFormFields = [
    { label: 'Email', id: 'email', name: 'email', type: 'email', placeholder: 'Enter your email', required: true },
    { label: 'Password*', id: 'password', name: 'password', type: 'password', placeholder: 'Enter your password', required: true },
    { label: 'Confirm Password*', id: 'confirmPassword', name: 'confirmPassword', type: 'password', placeholder: 'Re-enter your password', required: true }
]

const accountOptions = [
    { label: 'I already have an account.', value: 'existing' },
    { label: "I'm a newbie", value: 'newbie' }
]

const ownershipRoles = [
    { value: 'manager', label: 'Manager', image: '/images/form/15.png' },
    { value: 'employee', label: 'Employee', image: '/images/form/13.png' },
    { value: 'director', label: 'Director', image: '/images/form/14.png' }
]

const financingOptions = [
    { value: 'marketing', label: 'Marketing', img: '/images/form/16.png', desc: 'Identifying a company’s target market.' },
    { value: 'finance', label: 'Finance', img: '/images/form/17.png', desc: 'Researching the business’s target market and customer base.' },
    { value: 'it-support', label: 'IT Support', img: '/images/form/18.png', desc: 'Creating digital and/or print content to generate brand.' }
]

const accordionRadios = [
    {
        title: 'Buy Inventory',
        options: [
            { value: 'yes-inventory', label: 'YES', img: '/images/form/yes.png' },
            { value: 'no-inventory', label: 'NO', img: '/images/form/no.png' }
        ]
    },
    {
        title: 'Do you have existing business financing?',
        options: [
            { value: 'yes-financing', label: 'YES', img: '/images/form/yes.png' },
            { value: 'no-financing', label: 'NO', img: '/images/form/no.png' }
        ]
    }
]
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Financial Wizard</h5>
        </b-card-header>
        <b-card-body>
            <!-- Tabs Navigation -->
            <b-row>
                <b-col cols="12">
                    <div class="tabs-step mb-4">
                        <div v-for="step in steps"
                             :key="step.id"
                             :class="['tab d-flex', { current: activeTab === step.id }]"
                             role="button"
                             @click="activeTab = step.id"
                        >
                            <div class="step">
                                <component :is="step.icon" size="20" weight="bold" />
                            </div>
                            <div class="px-2">
                                <h6 class="mb-0">{{ step.title }}</h6>
                                <span class="text-secondary">{{ step.subtitle }}</span>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>

            <!-- Tab Contents -->
            <b-row>
                <b-col cols="12">
                    <div class="tab-contents-list">
                        <!-- Tab 1: About -->
                        <div v-if="activeTab === 'tab-1'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col v-for="field in formFields" :key="field.id" :md="field.id === 'address' ? 12 : 6" :xl="['dob', 'email', 'contact'].includes(field.id) ? 4 : 6">
                                        <b-form-group :label="field.label" class="mb-3">
                                            <b-input-group v-if="field.isGrouped">
                                                <span class="input-group-text">+91</span>
                                                <b-form-input
                                                    :type="field.type"
                                                    :id="field.id"
                                                    :name="field.name"
                                                    :placeholder="field.placeholder"
                                                    :required="field.required"
                                                />
                                            </b-input-group>
                                            <b-form-textarea v-else-if="field.type === 'textarea'" :id="field.id" :name="field.name" :rows="field.rows" :placeholder="field.placeholder"/>
                                            <b-form-input v-else :type="field.type" :id="field.id" :name="field.name" :placeholder="field.placeholder" :required="field.required"/>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </div>

                        <!-- Tab 2: Account -->
                        <div v-if="activeTab === 'tab-2'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col cols="12"><h6 class="tab-heading mb-3">Do you have an account?</h6></b-col>

                                    <b-col v-for="option in accountOptions" :key="option.value" md="6" xl="4">
                                        <b-card class="shadow-none">
                                            <b-card-body class="select-content">
                                                <b-form-radio :id="option.value" v-model="accountType" :name="'accountType'" :value="option.value" :label="option.label"/>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col v-for="field in accountFormFields" :key="field.id" :md="field.id === 'email' ? 12 : 6" cols="12">
                                        <b-form-group :label="field.label" class="mb-3">
                                            <b-form-input :type="field.type" :id="field.id" :name="field.name" :placeholder="field.placeholder" :required="field.required"/>
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12" class="text-end">
                                        <b-button type="submit" variant="primary">Sign in</b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </div>

                        <!-- Tab 3: Ownership -->
                        <div v-if="activeTab === 'tab-3'">
                            <b-form class="app-form">
                                <b-row>
                                    <b-col v-for="role in ownershipRoles" :key="role.value" lg="4">
                                        <b-card class="shadow-none">
                                            <b-card-body class="select-content">
                                                <b-form-radio :id="role.value" v-model="selectedRole" :name="'ownershipRole'" :value="role.value">
                                                    <template #label>
                                                        <span class="d-flex align-items-center">
                                                            <img :src="role.image" :alt="role.label" class="me-2" style="width: 30px; height: 30px;" />
                                                            <span class="fs-6 tab-heading">{{ role.label }}</span>
                                                        </span>
                                                    </template>
                                                </b-form-radio>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col md="6"><b-form-group label="Username" class="mb-3"><b-form-input type="text" id="username" name="username" required/></b-form-group></b-col>
                                    <b-col md="6"><b-form-group label="Password*" class="mb-3"><b-form-input type="password" id="password" name="password" required/></b-form-group></b-col>
                                    <b-col cols="12" class="text-end"><b-button variant="primary" type="submit">Submit</b-button></b-col>
                                </b-row>
                            </b-form>
                        </div>

                        <!-- Tab 4: Financing -->
                        <div v-if="activeTab === 'tab-4'">
                            <b-form class="app-form">
                                <b-row class="custome-radio-list">
                                    <b-col v-for="opt in financingOptions" :key="opt.value" md="6" xl="4">
                                        <b-card class="shadow-none">
                                            <b-card-body class="address-content">
                                                <b-form-radio :id="opt.value" v-model="selectedFinancingRole" :name="'financingRole'" :value="opt.value">
                                                    <template #label>
                                                        <div class="text-center">
                                                            <img :src="opt.img" :alt="opt.label" style="width: 50px; height: 50px;" />
                                                            <h6 class="tab-heading mt-2">{{ opt.label }}</h6>
                                                            <p class="text-muted mb-0">{{ opt.desc }}</p>
                                                        </div>
                                                    </template>
                                                </b-form-radio>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>
                                </b-row>

                                <b-accordion flush class="mt-4">
                                    <b-accordion-item v-for="section in accordionRadios" :key="section.title" :title="section.title">
                                        <b-row class="custome-radio-list">
                                            <b-col v-for="opt in section.options" :key="opt.value" md="6" xl="4">
                                                <b-card class="shadow-none">
                                                    <b-card-body class="address-content text-center">
                                                        <b-form-radio :id="opt.value" :name="`radio-${section.title}`" :value="opt.value">
                                                            <template #label>
                                                                <img :src="opt.img" :alt="opt.label" style="width: 40px; height: 40px;" />
                                                                <p class="mb-1">{{ opt.label }}</p>
                                                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                            </template>
                                                        </b-form-radio>
                                                    </b-card-body>
                                                </b-card>
                                            </b-col>
                                        </b-row>
                                    </b-accordion-item>

                                    <b-accordion-item title="Existing Balance">
                                        <b-form-group class="mb-3">
                                            <b-row>
                                                <b-col sm="2"><label class="col-form-label">Business</label></b-col>
                                                <b-col sm="10"><b-form-input type="text"/></b-col>
                                            </b-row>
                                        </b-form-group>

                                        <b-form-group class="mb-3">
                                            <b-row>
                                                <b-col sm="2"><label class="col-form-label">Current Balance</label></b-col>
                                                <b-col sm="10">
                                                    <b-input-group>
                                                        <span class="input-group-text"><PhCreditCard size="20" weight="fill" class="text-info" /></span>
                                                        <b-form-input type="text"/>
                                                    </b-input-group>
                                                </b-col>
                                            </b-row>
                                        </b-form-group>

                                        <div class="text-end"><b-button type="submit" variant="primary">Submit</b-button></div>
                                    </b-accordion-item>
                                </b-accordion>
                            </b-form>
                        </div>

                        <!-- Tab 5: Finish -->
                        <div v-if="activeTab === 'tab-5'" class="text-center">
                            <div class="completed-contents">
                                <div class="completbox">
                                    <img src="/images/form/done.png" alt="Completed" />
                                    <h6 class="mb-0 mt-3">Thank You !</h6>
                                    <p class="text-muted">Your booking is completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>
