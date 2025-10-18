<script setup>
import { reactive } from "vue";
import { PhBriefcase } from "@phosphor-icons/vue";
import { BCard, BCardHeader, BCardBody, BRow, BCol, BForm, BFormGroup, BFormInput, BFormSelect, BFormTextarea, BContainer } from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";


const form = reactive({
    name: "",
    password: "",
    email: "",
    comment: "",
    message: "",
    username: "",
    select: "2",
});

const breadcrumbItems = {
    title: "Floating Labels",
    items: [
        {label: "Forms elements ", icon: PhBriefcase},
        {label: "Floating Labels", active: true},
    ],
};
</script>

<template>
    <AppLayout>
    <main>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>

        <b-container fluid>

            <b-row>
                <!-- Custom Floating Labels -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Custom Floating Labels</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <b-row>
                                    <b-col cols="12">
                                        <b-form-group class="floating-form mb-3">
                                            <b-form-input
                                                type="text"
                                                v-model="form.name"
                                                required
                                                placeholder=" "
                                            />
                                            <label class="form-label">Name</label>
                                        </b-form-group>
                                    </b-col>

                                    <b-col cols="12">
                                        <b-form-group class="floating-form">
                                            <b-form-input
                                                type="password"
                                                v-model="form.password"
                                                required
                                                placeholder=" "
                                            />
                                            <label class="form-label">Password</label>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Basic Floating Labels -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Basic Floating Label</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div class="form-floating mb-3">
                                    <b-form-input
                                        type="email"
                                        id="floatingInput"
                                        placeholder="Email address"
                                        v-model="form.email"
                                    />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating">
                                    <b-form-input
                                        type="password"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        v-model="form.password"
                                    />
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Textarea Floating Labels -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Textareas Floating Labels</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div class="form-floating mb-3">
                                    <b-form-textarea
                                        v-model="form.comment"
                                        placeholder="Type a comment here"
                                    />
                                    <label>Comments</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <b-form-textarea
                                        v-model="form.message"
                                        placeholder="Type a message here"
                                    />
                                    <label>Message</label>
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Input Groups Floating Labels -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Input Groups Floating Labels</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div class="input-group mb-3">
                                    <span class="input-group-text b-r-left">@</span>
                                    <div class="form-floating">
                                        <b-form-input
                                            v-model="form.username"
                                            id="floatingInputGroup1"
                                            placeholder="Username"
                                            class="b-r-right"
                                        />
                                        <label for="floatingInputGroup1">Username</label>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text b-r-left">@</span>
                                    <div class="form-floating">
                                        <b-form-input
                                            type="email"
                                            v-model="form.email"
                                            placeholder="Email Address"
                                            class="b-r-right"
                                        />
                                        <label for="floatingInputGroup2">Email Address</label>
                                    </div>
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Readonly Floating Labels -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Readonly Floating Labels</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div class="form-floating mb-3">
                                    <b-form-input
                                        readonly
                                        plaintext
                                        id="floatingEmptyPlaintextInput"
                                        placeholder="name@example.com"
                                    />
                                    <label for="floatingEmptyPlaintextInput">Empty input</label>
                                </div>
                                <div class="form-floating">
                                    <b-form-input
                                        readonly
                                        plaintext
                                        id="floatingPlaintextInput"
                                        class="form-control-plaintext"
                                        placeholder="name@example.com"
                                        value="name@example.com"
                                    />
                                    <label for="floatingPlaintextInput">Input with value </label>


                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Floating Input Value -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Floating Input Value</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <div class="form-floating mb-3">
                                    <b-form-input
                                        id="floatingInputValue"
                                        placeholder="name@example.com"
                                        value="test@example.com"
                                    />
                                    <label for="floatingInputValue">Input with value</label>
                                </div>
                                <div class="form-floating floating-invalid">
                                    <b-form-input
                                        id="floatingInputInvalid"
                                        placeholder="name@example.com"
                                        value="test@example.com"
                                        class="is-invalid pe-4 text-dark"
                                    />
                                    <label for="floatingInputInvalid">Invalid input</label>

                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Select Floating Labels -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Select Floating Labels</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form floating-select">
                                <div class="form-floating mb-3">
                                    <b-form-select v-model="form.select" id="floatingSelect">
                                        <option value="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                    <label for="floatingSelect">Works with selects</label>
                                </div>
                                <div class="form-floating">
                                    <b-form-select id="floatingSelectDisabled" value="2" disabled>
                                        <option value="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </b-form-select>
                                </div>
                            </b-form>
                        </b-card-body>
                    </b-card>
                </b-col>

                <!-- Floating labels Layout -->
                <b-col md="6">
                    <b-card no-body>
                        <b-card-header>
                            <h5>Floating labels Layout</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-form class="app-form">
                                <b-row class="g-2">
                                    <b-col md="6">
                                        <div class="form-floating">
                                            <b-form-input
                                                type="email"
                                                placeholder="name@example.com"
                                                value="mdo@example.com"
                                            />
                                            <label>Email address</label>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div class="form-floating">
                                            <b-form-select value="2">
                                                <option>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </b-form-select>
                                            <label>Works with selects</label>
                                        </div>
                                    </b-col>
                                    <b-col cols="12">
                                        <div class="form-floating">
                                            <b-form-input
                                                type="password"
                                                placeholder="Password"
                                            />
                                            <label>Password</label>
                                        </div>
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
