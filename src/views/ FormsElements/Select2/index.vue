<script setup>
import { ref } from 'vue'
import {BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BForm, BFormSelect, BFormSelectOption } from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";
import Select2Basic from '@/components/FormsElements/Select2/Select2Basic.vue'
import CustomSelect from '@/components/FormsElements/Select2/MultiSelect.vue'



const colourOptions = [
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
    { value: 'white', label: 'White' },
]

const colorSelects = [
    { label: 'Select Primary', id: 'primary', className: 'select_primary' },
    { label: 'Select Success', id: 'success', className: 'select_success mt-4' },
    { label: 'Select Secondary', id: 'secondary', className: 'select_secondary mt-4' },
    { label: 'Select Danger', id: 'danger', className: 'select_danger mt-4' },
    { label: 'Select Warning', id: 'warning', className: 'select_warning mt-4' },
    { label: 'Select Info', id: 'info', className: 'select_info mt-4' },
    { label: 'Select Dark', id: 'dark', className: 'select_dark mt-4' },
]

const default1 = ref('1')
const default2 = ref('1')
const default3 = ref('1')
const multiSelect = ref(['1'])
const menuSizeSelect = ref('1')
const smallSelect = ref('1')
const defaultSelect = ref('1')
const largeSelect = ref('1')


const breadcrumbItems = {
    title: "Select2",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Select2", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>
                    <b-col cols="12">
                        <b-card>
                            <b-card-header>
                                <h5>Select2 With Color Tags</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row class="app-form">
                                    <b-col
                                        v-for="(item, index) in colorSelects"
                                        :key="index"
                                        xl="6"
                                        :class="item.className"
                                    >
                                        <CustomSelect
                                            :label="item.label"
                                            :id="item.id"
                                            :options="colourOptions"
                                            :defaultValue="[{ value: 'orange', label: 'Orange' }]"
                                        />
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <Select2Basic />

                    <b-col cols="12">
                        <b-card>
                            <b-card-header>
                                <h5>Default Select</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row class="main-select">
                                    <b-col md="6" xl="4">
                                        <b-form class="app-form my-3">
                                            <b-form-select v-model="default1">
                                                <b-form-select-option disabled>Select your Status</b-form-select-option>
                                                <b-form-select-option value="1">Declined Payment</b-form-select-option>
                                                <b-form-select-option value="2">Delivery Error</b-form-select-option>
                                                <b-form-select-option value="3">Wrong Amount</b-form-select-option>
                                            </b-form-select>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form my-3">
                                            <b-form-select v-model="default2" class="rounded-pill">
                                                <b-form-select-option disabled>Search for services</b-form-select-option>
                                                <b-form-select-option value="1">Information Architecture</b-form-select-option>
                                                <b-form-select-option value="2">UI/UX Design</b-form-select-option>
                                                <b-form-select-option value="3">Back End Development</b-form-select-option>
                                            </b-form-select>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form my-3">
                                            <b-form-select disabled v-model="default3">
                                                <b-form-select-option disabled>Open this select menu (Disabled)</b-form-select-option>
                                                <b-form-select-option value="1">One</b-form-select-option>
                                                <b-form-select-option value="2">Two</b-form-select-option>
                                                <b-form-select-option value="3">Three</b-form-select-option>
                                            </b-form-select>
                                        </b-form>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col cols="12">
                        <b-card>
                            <b-card-header>
                                <h5>Menu Size</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row class="main-select">
                                    <b-col md="6">
                                        <b-form class="app-form">
                                            <b-form-select v-model="multiSelect" multiple>
                                                <b-form-select-option disabled>Open this select menu (multiple select option)</b-form-select-option>
                                                <b-form-select-option value="1">One</b-form-select-option>
                                                <b-form-select-option value="2">Two</b-form-select-option>
                                                <b-form-select-option value="3">Three</b-form-select-option>
                                            </b-form-select>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6">
                                        <b-form class="app-form">
                                            <b-form-select v-model="menuSizeSelect" :size="3">
                                                <b-form-select-option disabled>Open this select menu (select menu size)</b-form-select-option>
                                                <b-form-select-option value="1">One</b-form-select-option>
                                                <b-form-select-option value="2">Two</b-form-select-option>
                                                <b-form-select-option value="3">Three</b-form-select-option>
                                                <b-form-select-option value="4">Four</b-form-select-option>
                                                <b-form-select-option value="5">Five</b-form-select-option>
                                            </b-form-select>
                                        </b-form>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col cols="12">
                        <b-card>
                            <b-card-header>
                                <h5>Select Size</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row class="app-form">
                                    <b-col md="6" xl="4" class="mb-3">
                                        <b-form-select v-model="smallSelect" size="sm">
                                            <b-form-select-option disabled>Open this select menu</b-form-select-option>
                                            <b-form-select-option value="1">One</b-form-select-option>
                                            <b-form-select-option value="2">Two</b-form-select-option>
                                            <b-form-select-option value="3">Three</b-form-select-option>
                                        </b-form-select>
                                    </b-col>

                                    <b-col md="6" xl="4" class="mb-3">
                                        <b-form-select v-model="defaultSelect">
                                            <b-form-select-option disabled>Open this select menu</b-form-select-option>
                                            <b-form-select-option value="1">One</b-form-select-option>
                                            <b-form-select-option value="2">Two</b-form-select-option>
                                            <b-form-select-option value="3">Three</b-form-select-option>
                                        </b-form-select>
                                    </b-col>

                                    <b-col md="6" xl="4" class="mb-3">
                                        <b-form-select v-model="largeSelect" size="lg">
                                            <b-form-select-option disabled>Open this select menu</b-form-select-option>
                                            <b-form-select-option value="1">One</b-form-select-option>
                                            <b-form-select-option value="2">Two</b-form-select-option>
                                            <b-form-select-option value="3">Three</b-form-select-option>
                                        </b-form-select>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
