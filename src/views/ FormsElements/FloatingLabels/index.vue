<script setup>
import { reactive } from 'vue'
import {
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BContainer,
    BFormInput,
    BFormTextarea,
    BFormSelect,
    BInputGroup,
    BInputGroupText,
    BRow,
    BFormGroup
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import { PhCardholder } from "@phosphor-icons/vue";

// Reactive form state
const form = reactive({
    name: '',
    password: '',
    email: '',
    comment: '',
    message: '',
    username: '',
    select: '2',
    selectDisabled: '2',
    emailValue: 'test@example.com'
});

// Breadcrumb
const breadcrumbItems = {
    title: "Floating Labels",
    items: [
        { label: "Form element", icon: PhCardholder },
        { label: "Floating Labels", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems" />

            <b-container fluid>
                <b-row>
                    <!-- Custom Labels -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Custom Labels</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <b-form-group label="Name" class="mb-3">
                                        <b-form-input
                                            v-model="form.name"
                                            placeholder="Enter Name"
                                            required
                                        />
                                    </b-form-group>
                                    <b-form-group label="Password">
                                        <b-form-input
                                            v-model="form.password"
                                            type="password"
                                            placeholder="Enter Password"
                                            required
                                        />
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Basic Labels -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Basic Labels</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <b-form-group label="Email address" class="mb-3">
                                        <b-form-input
                                            v-model="form.email"
                                            type="email"
                                            placeholder="Enter Email"
                                        />
                                    </b-form-group>
                                    <b-form-group label="Password">
                                        <b-form-input
                                            v-model="form.password"
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Textareas -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Textareas</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <b-form-group label="Comments" class="mb-3">
                                        <b-form-textarea
                                            v-model="form.comment"
                                            placeholder="Type a comment"
                                            rows="3"
                                        />
                                    </b-form-group>
                                    <b-form-group label="Message">
                                        <b-form-textarea
                                            v-model="form.message"
                                            placeholder="Type a message"
                                            rows="3"
                                        />
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Input Groups -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Input Groups</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-input-group class="mb-3">
                                    <b-input-group-text>@</b-input-group-text>
                                    <b-form-group label="Username" class="mb-0">
                                        <b-form-input
                                            v-model="form.username"
                                            placeholder="Username"
                                        />
                                    </b-form-group>
                                </b-input-group>

                                <b-input-group>
                                    <b-input-group-text>@</b-input-group-text>
                                    <b-form-group label="Email Address" class="mb-0">
                                        <b-form-input
                                            v-model="form.email"
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                    </b-form-group>
                                </b-input-group>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Readonly -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Readonly Inputs</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form>
                                    <b-form-group label="Empty input" class="mb-3">
                                        <b-form-input
                                            readonly
                                            plaintext
                                            placeholder="name@example.com"
                                        />
                                    </b-form-group>
                                    <b-form-group label="Input with value">
                                        <b-form-input
                                            readonly
                                            plaintext
                                            value="name@example.com"
                                        />
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Input Value & Invalid -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Input Value</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form>
                                    <b-form-group label="Input with value" class="mb-3">
                                        <b-form-input
                                            v-model="form.emailValue"
                                            type="email"
                                        />
                                    </b-form-group>
                                    <b-form-group label="Invalid input">
                                        <b-form-input
                                            v-model="form.emailValue"
                                            type="email"
                                            :state="false"
                                        />
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Select -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Select Inputs</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form>
                                    <b-form-group label="Works with selects" class="mb-3">
                                        <b-form-select v-model="form.select">
                                            <option value="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </b-form-select>
                                    </b-form-group>
                                    <b-form-group label="Disabled select">
                                        <b-form-select v-model="form.selectDisabled" disabled>
                                            <option value="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </b-form-select>
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Layout -->
                    <b-col md="6">
                        <b-card class="mb-4">
                            <b-card-header>
                                <h5>Form Layout</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form>
                                    <b-row class="g-2">
                                        <b-col md="6">
                                            <b-form-group label="Email address">
                                                <b-form-input
                                                    type="email"
                                                    value="mdo@example.com"
                                                />
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group label="Works with selects">
                                                <b-form-select value="2">
                                                    <option>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </b-form-select>
                                            </b-form-group>
                                        </b-col>
                                        <b-col cols="12">
                                            <b-form-group label="Password">
                                                <b-form-input
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>

                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
