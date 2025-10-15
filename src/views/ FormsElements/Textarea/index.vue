<script setup>
import {ref} from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BForm,
    BFormGroup,
    BFormTextarea,
    BButton
} from "bootstrap-vue-next";
import {PhBriefcase} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

const writeText = ref("");
const customTextarea = ref("");
const customOutput = ref("");

function handleCustomTextareaSubmit() {
    customOutput.value = customTextarea.value;
}

const breadcrumbItems = {
    title: "Textarea ",
    items: [
        {label: "Form element ", icon: PhBriefcase},
        {label: "Textarea ", active: true},
    ],
};
</script>
<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>
            <b-container fluid>
                <b-row>
                    <b-col md="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Basic Textarea</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col md="6">
                                        <b-form-group label="Simple Textarea" label-for="textareaexample">
                                            <b-form-textarea
                                                id="textareaexample"
                                                placeholder="Some text..."
                                                rows="2"
                                            />
                                        </b-form-group>
                                    </b-col>
                                    <b-col md="6">
                                        <b-form-group label="Floating Textarea">
                                            <div class="form-floating">
                                                <b-form-textarea
                                                    id="floatingTextarea2"
                                                    placeholder="Type Your Address"
                                                />
                                                <label for="floatingTextarea2">Address</label>
                                            </div>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="12">
                        <b-card no-body="">
                            <b-card-header>
                                <h5>Textarea Formatter</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form-group>
                                    <div class="mb-3">
                                        <b-form-textarea
                                            id="write-textarea"
                                            placeholder="Write some text.."
                                            v-model="writeText"
                                        />
                                    </div>
                                    <div class="form-control h-40" id="code-output">
                                        {{ writeText }}
                                    </div>
                                </b-form-group>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Custom Textarea Formatter</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form @submit.prevent="handleCustomTextareaSubmit">
                                    <b-form-group>
                                        <div class="mb-3">
                                            <b-form-textarea
                                                id="myTextarea"
                                                placeholder="Write some text..."
                                                v-model="customTextarea"
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <b-button id="submitBtn" type="submit" variant="primary">
                                                Submit Code
                                            </b-button>
                                        </div>
                                        <div class="form-control h-40" id="output">
                                            {{ customOutput }}
                                        </div>
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>