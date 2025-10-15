<script setup>
import { ref, onMounted } from 'vue';
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BForm, BRow } from "bootstrap-vue-next";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import Typeahead from 'vue-bootstrap-typeahead';
import 'vue-bootstrap-typeahead/dist/VueBootstrapTypeahead.css';
import { PhCardholder } from "@phosphor-icons/vue";

const states = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
    'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
    'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
    'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
    'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
    'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
    'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
    'Wisconsin','Wyoming'
];

const countriesData = ref([]);
const remoteData = ref([]);

// Load JSON data on mount (Prefetch & Remote)
onMounted(async () => {
    try {
        // const countries = (await import('../_components/countries.json')).default;
        // const remote = (await import('../_components/post_1960.json')).default;
        countriesData.value = countries;
        remoteData.value = remote.map(item => item.value);
    } catch (err) {
        console.error("Error loading JSON data:", err);
    }
});

// Breadcrumb data
const breadcrumbItems = {
    title: "Form Validation",
    items: [
        { label: "Form element", icon: PhCardholder },
        { label: "Form Validation", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <BContainer fluid>
                <BRow class="app-typeahead typeahead-demo">

                    <!-- The Basics -->
                    <BCol md="6">
                        <BCard>
                            <BCardHeader><h5>The Basics</h5></BCardHeader>
                            <BCardBody>
                                <BForm>
                                    <Typeahead :data="states" placeholder="States"/>
                                </BForm>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <!-- Bloodhound -->
                    <BCol md="6">
                        <BCard>
                            <BCardHeader><h5>Bloodhound</h5></BCardHeader>
                            <BCardBody>
                                <BForm>
                                    <Typeahead :data="states" placeholder="States of USA"/>
                                </BForm>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <!-- Prefetch -->
                    <BCol md="6">
                        <BCard>
                            <BCardHeader><h5>Prefetch</h5></BCardHeader>
                            <BCardBody>
                                <BForm>
                                    <Typeahead :data="countriesData" placeholder="Countries"/>
                                </BForm>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <!-- Remote Typeahead -->
                    <BCol md="6">
                        <BCard>
                            <BCardHeader><h5>Remote Typeahead</h5></BCardHeader>
                            <BCardBody>
                                <BForm>
                                    <Typeahead :data="remoteData" placeholder="Oscar winners for Best Picture"/>
                                </BForm>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <!-- Custom Templates -->
                    <BCol md="6">
                        <BCard>
                            <BCardHeader><h5>Custom Templates</h5></BCardHeader>
                            <BCardBody>
                                <BForm>
                                    <Typeahead
                                        :data="remoteData"
                                        placeholder="Oscar winners for Best Picture"
                                        :no-result-text="`<div class='empty-message'><i class='ti ti-mood-sad me-2'></i> sorry! Data is not available</div>`"
                                    />
                                </BForm>
                            </BCardBody>
                        </BCard>
                    </BCol>

                    <!-- Scrollable Dropdown Menu -->
                    <BCol md="6">
                        <BCard>
                            <BCardHeader><h5>Scrollable Dropdown Menu</h5></BCardHeader>
                            <BCardBody>
                                <BForm>
                                    <Typeahead :data="countriesData" placeholder="Countries"/>
                                </BForm>
                            </BCardBody>
                        </BCard>
                    </BCol>

                </BRow>
            </BContainer>
        </main>
    </AppLayout>
</template>
