<script setup>
import { ref } from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BFormRadio,
    BFormCheckbox,
    BRow
} from 'bootstrap-vue-next'


import {
    paymentMethods,
    managers,
    services
} from '@/data/formelements/Checkbox/CheckboxData.js'
import {PhAppWindow, PhCode, PhGridNine} from "@phosphor-icons/vue";

const selectedPayment = ref('Credit Card')
const selectedManagers = ref([])
const selectedService = ref('Consulting')
</script>
<template>
    <div>
        <b-row>
            <b-col md="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <h5>Payment Methods</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="form-selectgroup">
                            <div
                                v-for="(method, index) in paymentMethods"
                                :key="index"
                                class="select-item"
                            >
                                <label class=" d-flex align-items-center justify-content-between ms-0">
                                <b-form-radio
                                    name="paymentMethod"
                                    :id="`payment${index}`"
                                    :value="method"
                                    v-model="selectedPayment"
                                    class=""
                                >
                  <span class="d-flex align-items-center">
                    <img
                        :src="`/images/checkbox-radio/logo${index + 1}.png`"
                        class="w-30 h-30 b-r-16"
                        alt=""
                    />
                    <span class="ms-2">
                      <span class="fs-6">{{ method }}</span>
                      <span class="d-block text-secondary">
                        Select {{ method }} payment method
                      </span>
                    </span>
                  </span>
                                </b-form-radio>
                                </label>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col md="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <h5>Project Manager</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="form-selectgroup">
                            <div
                                v-for="(manager, index) in managers"
                                :key="index"
                                class="select-item"
                            >
                                <label class="form-check-label d-flex  align-items-center justify-content-between ms-0">
                                    <b-form-checkbox
                                        :id="`manager${index}`"
                                        :value="manager.name"
                                        v-model="selectedManagers"
                                        class=""
                                    />
                                    <span class="d-flex align-items-center">
                    <span class="bg-secondary h-30 w-30 d-flex-center b-r-50 position-relative">
                      <img
                          :src="`/images/avatar/${manager.img}`"
                          alt=""
                          class="img-fluid b-r-50"
                      />
                      <span class="position-absolute top-0 end-0 bg-success border border-light rounded-circle"></span>
                    </span>
                    <span class="">
                      <span class="fs-6">{{ manager.name }}</span>
                      <span class="d-block text-secondary">{{ manager.role }}</span>
                    </span>
                  </span>
                                </label>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col md="6" xl="4">
                <b-card class="equal-card" no-body>
                    <b-card-header>
                        <h5>Custom Select Group</h5>
                    </b-card-header>
                    <b-card-body>
                        <b-row>
                            <b-col
                                v-for="(service, index) in services"
                                :key="index"
                                cols="12"
                                class="mb-3"
                            >
                                <b-card class="shadow-none border" no-body>
                                    <b-card-body class="custom-selection address-content position-relative">

                                        <div class="position-absolute" >
                                            <b-form-radio
                                                name="service"
                                                :value="service.name"
                                                v-model="selectedService"
                                                class=""
                                            />
                                        </div>


                                        <div class="ps-4">
                                            <div class="mb-2">
                                                <span class="fs-6 fw-semibold">{{ service.name }}</span>
                                            </div>
                                            <div class="d-flex align-items-start">

                                                <PhCode
                                                    v-if="service.name === 'Web Development'"
                                                    :size="50"
                                                    weight="bold"
                                                    class="text-primary me-3 icon-bg"
                                                />
                                                <PhAppWindow
                                                    v-else-if="service.name === 'App Development'"
                                                    :size="50"
                                                    weight="bold"
                                                    class="text-primary me-3 icon-bg"
                                                />
                                                <PhGridNine
                                                    v-else
                                                    :size="50"
                                                    weight="bold"
                                                    class="text-primary me-3 icon-bg"
                                                />
                                                <p class="text-muted mb-0">{{ service.description }}</p>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

