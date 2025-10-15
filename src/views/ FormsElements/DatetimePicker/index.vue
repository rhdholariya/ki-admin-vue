<script setup>
import {ref} from 'vue';
import {BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BForm} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.min.css';
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";

const date = ref(null);
const time = ref(null);
const dateTime = ref(null);
const range = ref([]);
const multipleDates = ref([]);
const humanDates = ref(null);
const weekNumbers = ref(null);
const timeWithLimits = ref(null);
const hourTime = ref(null);
const inlineDate = ref(null);
// Breadcrumb data
const breadcrumbItems = {
    title: "Datetimepicker",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Datetimepicker", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>
                <b-row>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Basic</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="date"
                                        :config="{ dateFormat: 'Y-m-d' }"
                                        placeholder="YYYY-MM-DD"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Time Picker</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="time"
                                        :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                                        placeholder="12:00"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Datetime Picker</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="dateTime"
                                        :config="{ dateFormat: 'Y-m-d' }"
                                        placeholder="YYYY-MM-DD"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Range Picker</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="range"
                                        :config="{ mode: 'range', dateFormat: 'Y-m-d' }"
                                        placeholder="YYYY-MM-DD to YYYY-MM-DD"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Human-friendly Dates</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="humanDates"
                                        :config="{ dateFormat: 'm-d-Y' }"
                                        placeholder="MM-DD-YYYY"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Multiple Dates</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="multipleDates"
                                        :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
                                        placeholder="YYYY-MM-DD"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Week Numbers</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="weekNumbers"
                                        :config="{ weekNumbers: true, dateFormat: 'Y-m-d' }"
                                        placeholder="YYYY-MM-DD"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Time Picker with Limits</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="timeWithLimits"
                                        :config="{
                                             enableTime: true,
                                             noCalendar: true,
                                             dateFormat: 'H:i',
                                             minTime: '08:00',
                                             maxTime: '18:00'
                                           }"
                                        placeholder="08:00 to 18:00"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>24 Hour Time Picker</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control"
                                        v-model="hourTime"
                                        :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                                        placeholder="HH:mm"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Inline</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <flat-pickr
                                        class="form-control mb-2"
                                        v-model="inlineDate"
                                        :config="{ inline: true, dateFormat: 'Y-m-d' }"
                                        placeholder="YYYY-MM-DD"
                                    />
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
