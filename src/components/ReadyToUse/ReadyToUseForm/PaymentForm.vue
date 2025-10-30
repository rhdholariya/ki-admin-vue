<script setup>
import { ref, watch } from "vue";
import {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BCol,
    BTabs,
    BTab,
} from "bootstrap-vue-next";
import PaymentDataForm from "./PaymentDataForm.vue";

const activeTab = ref("card");
const refreshTrigger = ref(0);

watch(activeTab, () => {
    refreshTrigger.value++;
});

function handleTabChange(tab) {
    activeTab.value = tab;
}
</script>

<template>
    <b-card no-body>
        <b-card-header>
            <h5>Payment Information Form</h5>
        </b-card-header>

        <b-card-body>
            <b-row>

                <b-col xl="3" lg="4" class="mb-3">
                    <b-tabs
                        v-model="activeTab"
                        pills
                        vertical
                        fill
                        nav-class="step-status"
                        active-nav-item-class="active"
                        @update:modelValue="handleTabChange"
                    >
                        <b-tab title="Credit / Debit Card" id="card">
                            <template #title>
                                <div class="d-flex align-items-center">
                                    <img
                                        src="/images/checkbox-radio/logo1.png"
                                        class="me-2 w-35 h-35"
                                        alt="Card"
                                    />
                                    <span>Credit / Debit Card</span>
                                </div>
                            </template>
                        </b-tab>

                        <b-tab title="Visa Card" id="visa">
                            <template #title>
                                <div class="d-flex align-items-center">
                                    <img
                                        src="/images/checkbox-radio/logo2.png"
                                        class="me-2 w-35 h-35"
                                        alt="Visa"
                                    />
                                    <span>Visa Card</span>
                                </div>
                            </template>
                        </b-tab>

                        <b-tab title="Paypal" id="paypal">
                            <template #title>
                                <div class="d-flex align-items-center">
                                    <img
                                        src="/images/checkbox-radio/logo3.png"
                                        class="me-2 w-35 h-35"
                                        alt="PayPal"
                                    />
                                    <span>Paypal</span>
                                </div>
                            </template>
                        </b-tab>
                    </b-tabs>
                </b-col>


                <b-col xl="9" lg="8">

                    <PaymentDataForm :key="refreshTrigger" />
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>
