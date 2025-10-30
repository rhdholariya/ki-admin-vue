<script setup>
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BFormGroup,
    BFormInput, BForm
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";

const breadcrumbItems = {
    title: "Input Masks",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Input Masks", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col md="12">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Date Formatting Input Masks</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Simple Date:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="date (dd/mm/yyyy)"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3 form-label" label="Date & Month:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="date & month (dd/mm)"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Formatting Date:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="formatting date (yyyy.mm.dd)"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Formatting Delimiter:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="delimiter (yyyy-mm-dd)"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col md="12">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Time Formatting Input Masks</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Simple Time:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="hh:mm:ss"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Minutes & Seconds:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="mm:ss"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6" xl="4">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Hours & Minutes:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="hh:mm"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col md="12">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Custom Formatting Input Masks</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col md="6">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Simple Contact:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="xxx-xxx-xxxx"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Formatting Contact:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="(xxx)(xxx)(xxxx)"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Credit Card Number Formatting:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="xxxx xxxx xxxx xxxx"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>

                                    <b-col md="6">
                                        <b-form class="app-form">
                                            <b-form-group class="mb-3" label="Price:">
                                                <b-form-input
                                                    type="text"
                                                    placeholder="Enter amount"
                                                ></b-form-input>
                                            </b-form-group>
                                        </b-form>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>

                <!-- Info Card -->
                <b-row>
                    <b-col md="12">
                        <b-card class="mb-4" no-body>
                            <b-card-body>
                                <p>
                                    This example shows formatted input fields using Bootstrap Vue 3 form controls.
                                    For advanced input masking, you can explore external libraries like
                                    <a
                                        href="https://nosir.github.io/cleave.js/"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="text-decoration-underline link-primary"
                                    >
                                        cleave.js
                                    </a>
                                    or
                                    <a
                                        href="https://github.com/nosir/cleave.js"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="text-decoration-underline link-primary"
                                    >
                                        GitHub
                                    </a>.
                                </p>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
