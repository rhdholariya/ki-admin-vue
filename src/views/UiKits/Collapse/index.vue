<script setup>
import { ref } from 'vue';
import {
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BButton,
    BCollapse
} from "bootstrap-vue-next";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import { PhBriefcase } from "@phosphor-icons/vue";

// Collapse state
const showBasic = ref(false);
const showHorizontal = ref(false);
const showFirst = ref(false);
const showSecond = ref(false);


// Toggle both first and second
const toggleBoth = () => {
    showFirst.value = !showFirst.value;
    showSecond.value = !showSecond.value;
};

// --- Breadcrumb ---
const breadcrumbItems = {
    title: "Collapse",
    items: [
        { label: "Ui Kits", icon: PhBriefcase },
        { label: "Collapse", active: true },
    ],
};
</script>

<template>
    <AppLayout>
        <main>
            <b-container fluid>
                <Breadcrumb :breadcrumb="breadcrumbItems" />

                <b-row>
                    <!-- Basic Collapse -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Basic Collapse</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-button @click="showBasic = !showBasic" variant="primary">
                                    Toggle Collapse
                                </b-button>
                                <b-collapse v-model="showBasic">
                                    <b-card-body class="mt-3 dashed-1-secondary rounded">
                                        Some placeholder content for the basic collapse.
                                    </b-card-body>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Horizontal Collapse -->
                    <b-col cols="12" class="mt-3">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Horizontal Collapse</h5>
                            </b-card-header>
                            <b-card-body>
                                <b-button @click="showHorizontal = !showHorizontal">
                                    Toggle Width Collapse
                                </b-button>
                                <b-collapse v-model="showHorizontal">
                                    <b-card-body
                                        class="mt-3 dashed-1-secondary rounded"
                                        style="width: 280px;"
                                    >
                                        Horizontal collapse content.
                                    </b-card-body>
                                </b-collapse>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Multiple Collapses -->
                    <b-col cols="12" class="mt-3">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Multiple Toggles and Targets</h5>
                            </b-card-header>
                            <b-card-body>
                                <div class="d-inline-flex flex-wrap gap-1 mb-3">
                                    <b-button variant="primary" @click="showFirst = !showFirst">
                                        Toggle First Element
                                    </b-button>
                                    <b-button variant="primary" @click="showSecond = !showSecond">
                                        Toggle Second Element
                                    </b-button>
                                    <b-button variant="primary" @click="toggleBoth">
                                        Toggle Both Elements
                                    </b-button>
                                </div>

                                <b-row>
                                    <b-col cols="12" sm="6">
                                        <b-collapse v-model="showFirst">
                                            <b-card-body class="mt-3 dashed-1-secondary rounded">
                                                First collapse content.
                                            </b-card-body>
                                        </b-collapse>
                                    </b-col>
                                    <b-col cols="12" sm="6">
                                        <b-collapse v-model="showSecond">
                                            <b-card-body class="mt-3 dashed-1-secondary rounded">
                                                Second collapse content.
                                            </b-card-body>
                                        </b-collapse>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
