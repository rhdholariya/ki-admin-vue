<script setup>
import { ref, reactive } from "vue";

import {
    BCard,
    BCardBody,
    BCardHeader,
    BCol,
    BContainer,
    BRow,

} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import { PhCardholder} from "@phosphor-icons/vue";

const basicSwitch1 = ref(false);
const basicSwitch2 = ref(false);
const switch001 = ref(true);
const switch002 = ref(false);
const switch003 = ref(true);
const switch004 = ref(false);
const switch005 = ref(true);
const switch006 = ref(false);

const switchStates = reactive({
    primary: true,
    secondary: true,
    success: true,
    danger: true,
    warning: true,
    info: true,
    dark: true,
});

const switchStates2 = reactive({
    primaryCheck: true,
    secondaryCheck: true,
    successCheck: true,
    dangerCheck: true,
    warningCheck: true,
    infoCheck: true,
    darkCheck: true,
});
const breadcrumbItems = {
    title: "switch",
    items: [
        {label: "Forms elements ", icon: PhCardholder},
        {label: "switch", active: true},
    ],
};
</script>
<template>
    <AppLayout>
    <main>
        <b-container fluid>
            <Breadcrumb :breadcrumb="breadcrumbItems" />
            <b-row>
                <b-col sm="12">
                    <b-card no-body>
                        <b-card-header><h5>Basic Switch</h5></b-card-header>
                        <b-card-body class="main-switch">
                            <div class="form-check form-switch d-flex">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="basic-switch-1"
                                    v-model="basicSwitch1"
                                />
                                <label class="form-check-label ms-2" for="basic-switch-1">
                                    Bootstrap Switch
                                </label>
                            </div>
                            <div class="form-check form-switch d-flex">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="basic-switch-2"
                                    v-model="basicSwitch2"
                                    disabled
                                />
                                <label class="form-check-label ms-2" for="basic-switch-2">
                                    Bootstrap Disabled
                                </label>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col sm="6" xxl="4">
                    <b-card class="equal-card">
                        <b-card-header><h5>Switch Sizing</h5></b-card-header>
                        <b-card-body class="main-switch main-switch-color">
                            <div class="switch-primary my-3">
                                <input
                                    type="checkbox"
                                    id="check-001"
                                    class="toggle"
                                    v-model="switch001"
                                />
                                <label for="check-001" class="text-dark">Large Size</label>
                            </div>
                            <div class="switch-secondary my-3">
                                <input
                                    type="checkbox"
                                    id="check-002"
                                    class="toggle"
                                    v-model="switch002"
                                />
                                <label for="check-002">Large Unchecked</label>
                            </div>
                            <div class="swich-size my-3">
                                <input
                                    type="checkbox"
                                    id="check-003"
                                    class="toggle"
                                    v-model="switch003"
                                />
                                <label for="check-003">Large Size</label>
                            </div>
                            <div class="switch-danger swich-size my-3">
                                <input
                                    type="checkbox"
                                    id="check-004"
                                    class="toggle"
                                    v-model="switch004"
                                />
                                <label for="check-004">Normal Unchecked</label>
                            </div>
                            <div class="switch-warning swich-size2 my-3">
                                <input
                                    type="checkbox"
                                    id="check-005"
                                    class="toggle"
                                    v-model="switch005"
                                />
                                <label for="check-005">Small Size</label>
                            </div>
                            <div class="switch-info swich-size2 my-3">
                                <input
                                    type="checkbox"
                                    id="check-006"
                                    class="toggle"
                                    v-model="switch006"
                                />
                                <label for="check-006">Small Size Unchecked</label>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col sm="6" xxl="4">
                    <b-card no-body>
                        <b-card-header><h5>Switch Variants</h5></b-card-header>
                        <b-card-body class="main-switch main-switch-color switch-unchecked switch_border">
                            <div
                                v-for="(value, color) in switchStates"
                                :key="color"
                                class="my-3"
                                :class="`switch-${color}  switch-unchecked-${color} switch-border-${color}`"
                            >
                                <input
                                    type="checkbox"
                                    :id="color"
                                    class="toggle"
                                    v-model="switchStates[color]"
                                    :class="'switch-' + color"
                                />
                                <label :for="color">{{ color }}</label>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col sm="6" xxl="4">
                    <b-card no-body>
                        <b-card-header><h5>Switch Outline</h5></b-card-header>
                        <b-card-body class="switch_border main-switch switch-unchecked">
                            <div
                                v-for="(value, color) in switchStates"
                                :key="id"
                                :class="`switch-border-${color} switch-${color} switch-unchecked-${color} my-3`"
                            >
                                <input
                                    type="checkbox"
                                    :id="`${color}Check`"
                                    class="toggle"
                                    v-model="switchStates2[`${color}Check`]"
                                />
                                <label :for="`${color}Check`">{{ color }}</label>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </main>
    </AppLayout>
</template>