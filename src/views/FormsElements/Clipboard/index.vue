<script setup>
import {ref} from "vue";
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BFormInput,
    BFormTextarea,
    BButton,
} from "bootstrap-vue-next";
import {PhBriefcase, PhCopySimple, PhScissors} from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";

const textInput = ref("");
const textArea = ref("");
const highlightedText = ref("i am going to copy");
const paragraphText = ref(
    "I'd be happy to help you copy a paragraph, but I need a bit more context or the text..."
);
const pasteArea = ref("");
const copyText = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error("Failed to copy:", err);
    }
};
const cutText = (field) => {
    if (field === "input") {
        copyText(textInput.value);
        textInput.value = "";
    } else if (field === "textarea") {
        copyText(textArea.value);
        textArea.value = "";
    }
};

const breadcrumbItems = {
    title: "Clipboard ",
    items: [
        {label: " Forms elements ", icon: PhBriefcase},
        {label: "Clipboard ", active: true},
    ],
};
</script>
<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems"/>
                <b-row>
                    <b-col lg="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Copy to Text Input</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <b-form-input
                                        v-model="textInput"
                                        placeholder="Some text to be copied"
                                    />
                                    <div class="col-sm-12 mt-4">
                                        <b-button variant="primary" class="me-1" @click="copyText(textInput)">
                                            <PhCopySimple :size="18"/>
                                            <span>Copy Input</span>
                                        </b-button>
                                        <b-button variant="danger" @click="cutText('input')">
                                            <PhScissors :size="18"/>
                                            <span>Cut Input</span>
                                        </b-button>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col lg="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Copy to Textarea</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <b-form-textarea
                                        v-model="textArea"
                                        placeholder="Enter Your Text"
                                        rows="3"
                                    />
                                    <div class="col-sm-12 mt-4">
                                        <b-button variant="info" class="me-1" @click="copyText(textArea)">
                                            <PhCopySimple :size="18"/>
                                            <span>Copy Input</span>
                                        </b-button>
                                        <b-button variant="warning" @click="cutText('textarea')">
                                            <PhScissors :size="18"/>
                                            <span>Cut Input</span>
                                        </b-button>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col lg="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Copy to Highlighted Text</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <p class="form-control copytext mb-3">
                                        For text that you can
                                        <span class="text-bg-primary px-2 b-r-5">
                  {{ highlightedText }}
                </span>
                                    </p>
                                    <b-button variant="success" @click="copyText(highlightedText)">
                                        <PhCopySimple :size="18"/>
                                        Copy Text
                                    </b-button>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col lg="6">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Copy to Paragraph</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="bg-light-secondary pa-25 copy-clipboard b-r-10">
                                    <p class="form-control copytext">
                                        {{ paragraphText }}
                                    </p>
                                    <b-button variant="dark" class="mt-3" @click="copyText(paragraphText)">
                                        <PhCopySimple :size="18"/>
                                        Copy Paragraph
                                    </b-button>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <b-col lg="12">
                        <b-card class="app-form" no-body>
                            <b-card-header>
                                <h5>Paste</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form-textarea
                                    v-model="pasteArea"
                                    placeholder="Paste your copied content here"
                                    rows="5"
                                />
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
