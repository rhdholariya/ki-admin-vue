<script setup>
import {ref} from 'vue'
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BForm,
    BFormInput,
    BFormSelect,
    BInputGroup,
    BInputGroupText,
    BButton,
    BSpinner, BFormCheckbox, BFormGroup
} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";
import VerticalForm from "@/components/FormsElements/DefaultForms/VerticalForm.vue";
import HorizontalForm from "@/components/FormsElements/DefaultForms/HorizontalForm.vue";
import FormWithGrid from "@/components/FormsElements/DefaultForms/FormWithGrid.vue";
import FormWithGutter from "@/components/FormsElements/DefaultForms/FormWithGutter.vue";


const loading = ref(false)
const username = ref('')
const preference = ref('1')
const rememberMe = ref(false)

const handleSubmit = async () => {
    loading.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
    loading.value = false
}

// Breadcrumb data
const breadcrumbItems = {
    title: "Form Validation",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Form Validation", active: true},
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>

                    <vertical-form/>
                    <horizontal-form/>
                    <form-with-grid />
                    <form-with-gutter />


                    <b-col cols="12">
                        <b-card>
                            <b-card-header>
                                <h5>Inline Forms</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form @submit.prevent="handleSubmit" class="app-form inline-form">
                                    <b-row class="row-cols-lg-auto g-2 align-items-center">
                                        <b-col cols="12">
                                            <label for="username">Username</label>
                                            <b-input-group>
                                                <b-input-group-text>@</b-input-group-text>
                                                <b-form-input
                                                    id="username"
                                                    type="text"
                                                    placeholder="Username"
                                                    v-model="username"
                                                />
                                            </b-input-group>
                                        </b-col>

                                        <b-col cols="12" class="form-preference-width">
                                            <label for="preference">Preference</label>
                                            <b-form-select id="preference" v-model="preference">
                                                <option>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </b-form-select>
                                        </b-col>

                                        <b-col cols="12" class="form-check-width d-flex align-items-center">
                                            <b-form-group>
                                                <b-form-checkbox
                                                    id="formCheck9"
                                                    type="checkbox"
                                                    v-model="rememberMe"
                                                >
                                                    Remember me
                                                </b-form-checkbox>
                                            </b-form-group>
                                        </b-col>

                                        <b-col cols="12" class="text-end">
                                            <b-button type="submit" variant="primary">
                                                <template v-if="loading">
                                                    <b-spinner small/>
                                                </template>
                                                <template v-else>Submit</template>
                                            </b-button>
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
