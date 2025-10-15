<script setup>
import { ref} from "vue";
import { BButton,
    BCard,
    BCardHeader,
    BCardBody,
    BCol,
    BContainer,
    BForm,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BFormTextarea,
    BFormCheckbox,
    BInputGroup,
    BInputGroupText,
    BSpinner,
    BRow} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";


const loadingBasic = ref(false)
const loadingRounded = ref(false)
const loadingHtml = ref(false)


const cityOptions = [
    { value: '0', text: 'Select Your City' },
    { value: '1', text: 'UK' },
    { value: '2', text: 'US' },
    { value: '3', text: 'Italy' }
]

const handleBasicSubmit = async () => {
    loadingBasic.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loadingBasic.value = false
}

const handleRoundedSubmit = async () => {
    loadingRounded.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loadingRounded.value = false
}

const handleHtmlSubmit = async () => {
    loadingHtml.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loadingHtml.value = false
}




const breadcrumbItems = {
    title: "Base Inputs",
    items: [
        {label: "Form element", icon: PhCardholder},
        {label: "Base Inputs", active: true},
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
                                <h5>Basic Form Controls</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form" @submit.prevent="handleBasicSubmit">
                                    <b-form-group class="mb-3" label="Username" label-for="username">
                                        <b-form-input
                                            id="username"
                                            type="text"
                                            placeholder="Enter Your Username"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="Password" label-for="password">
                                        <b-form-input
                                            id="password"
                                            type="password"
                                            placeholder="Enter Your Password"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="City" label-for="citySelect">
                                        <b-form-select id="citySelect" :options="cityOptions" />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="Content" label-for="phone">
                                        <b-input-group>
                                            <b-input-group-text>+91</b-input-group-text>
                                            <b-form-input placeholder="xxx-xxxxx-xxx" />
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="Address" label-for="address">
                                        <b-form-textarea
                                            id="address"
                                            rows="3"
                                            placeholder="Enter Your Address"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="readonly">
                                        <b-form-input
                                            type="text"
                                            placeholder="Only Readable input ..."
                                            readonly
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3">
                                        <b-form-checkbox>Default checkbox</b-form-checkbox>
                                    </b-form-group>

                                    <b-button variant="primary" type="submit" :disabled="loadingBasic">
                                        <b-spinner v-if="loadingBasic" small />
                                        <span v-else>Submit</span>
                                    </b-button>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col md="6">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Rounded Form Control</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form" @submit.prevent="handleRoundedSubmit">
                                    <b-form-group class="mb-3" label="Username" label-for="roundedUsername">
                                        <b-form-input
                                            id="roundedUsername"
                                            type="text"
                                            placeholder="Enter Your Username"
                                            class="rounded-pill"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="Password" label-for="roundedPassword">
                                        <b-form-input
                                            id="roundedPassword"
                                            type="password"
                                            placeholder="Enter Your Password"
                                            class="rounded-pill"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="City" label-for="roundedCity">
                                        <b-form-select
                                            id="roundedCity"
                                            :options="cityOptions"
                                            class="rounded-pill"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="Content" label-for="roundedPhone">
                                        <b-input-group class="rounded-pill overflow-hidden">
                                            <b-input-group-text>+91</b-input-group-text>
                                            <b-form-input placeholder="xxx-xxxxx-xxx" />
                                        </b-input-group>
                                    </b-form-group>

                                    <b-form-group class="mb-3" label="Address" label-for="roundedTextarea">
                                        <b-form-textarea
                                            id="roundedTextarea"
                                            rows="3"
                                            placeholder="Enter Your Address"
                                            class="rounded"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3" label-for="roundedReadonly">
                                        <b-form-input
                                            type="text"
                                            placeholder="Only Readable input ..."
                                            readonly
                                            class="rounded"
                                        />
                                    </b-form-group>

                                    <b-form-group class="mb-3">
                                        <b-form-checkbox class="rounded">Default checkbox</b-form-checkbox>
                                    </b-form-group>

                                    <b-button variant="primary" type="submit" :disabled="loadingRounded">
                                        <b-spinner v-if="loadingRounded" small />
                                        <span v-else>Submit</span>
                                    </b-button>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col cols="12">
                        <b-card class="mb-4" no-body>
                            <b-card-header>
                                <h5>Input Sizing</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form">
                                    <b-form-group class="mb-3">
                                        <b-form-input
                                            size="lg"
                                            placeholder=".form-control-lg"
                                        />
                                    </b-form-group>
                                    <b-form-group class="mb-3">
                                        <b-form-input placeholder="Default input" />
                                    </b-form-group>
                                    <b-form-group class="mb-3">
                                        <b-form-input
                                            size="sm"
                                            placeholder=".form-control-sm"
                                        />
                                    </b-form-group>
                                </b-form>
                            </b-card-body>
                        </b-card>
                    </b-col>


                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Basic HTML Input Control</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-form class="app-form" @submit.prevent="handleHtmlSubmit">
                                    <b-row>
                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Default Input" label-for="defaultInput">
                                                <b-form-input id="defaultInput" placeholder="Default Input" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Static Text" label-for="staticText">
                                                <div class="form-control-plaintext">Hello !... This is static text</div>
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Email" label-for="emailInput">
                                                <b-form-input
                                                    id="emailInput"
                                                    type="email"
                                                    placeholder="Email Input"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Password" label-for="passwordInput">
                                                <b-form-input
                                                    id="passwordInput"
                                                    type="password"
                                                    placeholder="Password Input"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="URL" label-for="urlInput">
                                                <b-form-input
                                                    id="urlInput"
                                                    type="url"
                                                    placeholder="URL Input"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Telephone" label-for="telInput">
                                                <b-form-input
                                                    id="telInput"
                                                    type="tel"
                                                    placeholder="+91 (999)-999-999"
                                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Number" label-for="numberInput">
                                                <b-form-input
                                                    id="numberInput"
                                                    type="number"
                                                    placeholder="Enter Number"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="6">
                                            <b-form-group class="mb-3" label="Maximum Length" label-for="maxLengthInput">
                                                <b-form-input
                                                    id="maxLengthInput"
                                                    maxlength="6"
                                                    placeholder="Enter Your Zip code"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="4">
                                            <b-form-group class="mb-3" label="Date & Time" label-for="dateTimeInput">
                                                <b-form-input id="dateTimeInput" type="datetime-local" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="4">
                                            <b-form-group class="mb-3" label="Date" label-for="dateInput">
                                                <b-form-input id="dateInput" type="date" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="4">
                                            <b-form-group class="mb-3" label="Time" label-for="timeInput">
                                                <b-form-input id="timeInput" type="time" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="5">
                                            <b-form-group class="mb-3" label="Month" label-for="monthInput">
                                                <b-form-input id="monthInput" type="month" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="5">
                                            <b-form-group class="mb-3" label="Week" label-for="weekInput">
                                                <b-form-input id="weekInput" type="week" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col md="2">
                                            <b-form-group class="mb-3" label="Color" label-for="colorInput">
                                                <b-form-input
                                                    id="colorInput"
                                                    type="color"
                                                    value="#4fc9da"
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col cols="12">
                                            <b-form-group class="mb-3" label="File" label-for="fileInput">
                                                <b-form-input id="fileInput" type="file" />
                                            </b-form-group>
                                        </b-col>

                                        <b-col cols="12">
                                            <b-form-group class="mb-3" label="Search" label-for="searchInput">
                                                <b-form-input
                                                    id="searchInput"
                                                    type="search"
                                                    placeholder="Search..."
                                                />
                                            </b-form-group>
                                        </b-col>

                                        <b-col cols="12">
                                            <b-form-group class="mb-3" label="Textarea" label-for="textareaInput">
                                                <b-form-textarea
                                                    id="textareaInput"
                                                    rows="5"
                                                    placeholder="Default textarea"
                                                />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>

                                    <div class="text-end">
                                        <b-button variant="primary" type="submit" :disabled="loadingHtml">
                                            <b-spinner v-if="loadingHtml" small />
                                            <span v-else>Submit</span>
                                        </b-button>
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
