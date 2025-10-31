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
    BButton,

} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";

const writeText = ref("");
const customTextarea = ref("");
const customOutput = ref("");

function handleCustomTextareaSubmit() {
    customOutput.value = customTextarea.value;
}

const breadcrumbItems = {
    title: "Textarea",
    items: [
        {label: "Forms elements ", icon: PhCardholder},
        {label: "Textarea", active: true},
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
                        <b-card no-body>
                            <b-card-header>
                                <h5>Basic Textarea</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-row>
                                    <b-col md="6">
                                        <b-form-group label="Simple Textarea mb-3" label-for="textareaexample">
                                            <b-form-textarea
                                                id="textareaexample"
                                                placeholder="Some text..."
                                                rows="2"
                                            ></b-form-textarea>
                                        </b-form-group>
                                    </b-col>

                                    <b-col md="6">
                                        <b-form-group>
                                            <b-floating-label label="Address" label-for="floatingTextarea2">
                                                <b-form-textarea
                                                    id="floatingTextarea2"
                                                    placeholder="Type Your Address"
                                                    style="height: 100px"
                                                ></b-form-textarea>
                                            </b-floating-label>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col md="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Textarea Formatter</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form-group class="mb-3">
                                    <b-form-textarea
                                        placeholder="Write some text.."
                                        v-model="writeText"
                                    ></b-form-textarea>
                                </b-form-group>

                                <div class="form-control h-40">
                                    {{ writeText }}
                                </div>
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
                                    <b-form-group label-for="myTextarea" class="mb-3">
                                        <b-form-textarea
                                            id="myTextarea"
                                            placeholder="Write some text..."
                                            v-model="customTextarea"
                                        ></b-form-textarea>
                                    </b-form-group>

                                    <div class="mb-3">
                                        <b-button type="submit" variant="primary">
                                            Submit Code
                                        </b-button>
                                    </div>

                                    <div class="form-control h-40">
                                        {{ customOutput }}
                                    </div>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>


