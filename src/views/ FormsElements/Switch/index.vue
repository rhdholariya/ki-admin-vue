<script setup>
import { ref } from 'vue'
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BFormGroup, BFormCheckbox} from "bootstrap-vue-next";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";
import AppLayout from "@/views/AppLayout.vue";
import {PhCardholder} from "@phosphor-icons/vue";


const basicSwitch1 = ref(false)
const basicSwitch2 = ref(false)
const switch001 = ref(true)
const switch002 = ref(false)
const switch003 = ref(true)
const switch004 = ref(false)
const switch005 = ref(true)
const switch006 = ref(false)

const switchStates = ref({
    check5: true,
    check6: true,
    check7: true,
    check8: true,
    check9: true,
    check10: true,
    check01: true
})

const switchStates2 = ref({
    check02: true,
    check03: true,
    check04: true,
    check05: true,
    check06: true,
    check07: true,
    check08: true
})

const labels = {
    check5: 'Primary',
    check6: 'Secondary',
    check7: 'Success',
    check8: 'Danger',
    check9: 'Warning',
    check10: 'Info',
    check01: 'Dark'
}

const labels2 = {
    check02: 'Primary',
    check03: 'Secondary',
    check04: 'Success',
    check05: 'Danger',
    check06: 'Warning',
    check07: 'Info',
    check08: 'Dark'
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
            <Breadcrumb :breadcrumb="breadcrumbItems"/>

            <b-container fluid>

                <b-row>
                    <!-- Basic Switch -->
                    <b-col cols="12">
                        <b-card no-body>
                            <b-card-header>
                                <h5>Basic Switch</h5>
                            </b-card-header>
                            <b-card-body class="main-switch">
                                <div class="d-flex align-items-center mb-3">
                                    <b-form-checkbox
                                        switch
                                        id="basic-switch-1"
                                        v-model="basicSwitch1"
                                    />
                                    <label>Bootstrap Switch</label>
                                </div>
                                <div class="d-flex align-items-center">
                                    <b-form-checkbox
                                        switch
                                        id="basic-switch-2"
                                        v-model="basicSwitch2"
                                        disabled
                                    />
                                    <label class="text-secondary">Bootstrap Disabled</label>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Switch Sizing -->
                    <b-col sm="6" xxl="4">
                        <b-card class="equal-card">
                            <b-card-header>
                                <h5>Switch Sizing</h5>
                            </b-card-header>
                            <b-card-body class="main-switch main-switch-color">
                                <b-form-group class="switch-primary my-3">
                                    <b-form-checkbox
                                        id="check-001"
                                        class="toggle "
                                        switch
                                        v-model="switch001"
                                    >
                                       <label > Large Size</label>
                                    </b-form-checkbox>
                                </b-form-group>

                                <b-form-group class="switch-secondary my-3">
                                    <b-form-checkbox
                                        id="check-002"
                                        class="toggle"
                                        v-model="switch002"
                                    >
                                        Large Unchecked
                                    </b-form-checkbox>
                                </b-form-group>

                                <b-form-group class="swich-size my-3">
                                    <b-form-checkbox
                                        id="check-003"
                                        class="toggle"
                                        v-model="switch003"
                                    >
                                        Large Size
                                    </b-form-checkbox>
                                </b-form-group>

                                <b-form-group class="switch-danger swich-size my-3">
                                    <b-form-checkbox
                                        id="check-004"
                                        class="toggle"
                                        v-model="switch004"
                                    >
                                        Normal Unchecked
                                    </b-form-checkbox>
                                </b-form-group>

                                <b-form-group class="switch-warning swich-size2 my-3">
                                    <b-form-checkbox
                                        id="check-005"
                                        class="toggle"
                                        v-model="switch005"
                                    >
                                        Small Size
                                    </b-form-checkbox>
                                </b-form-group>

                                <b-form-group class="switch-info swich-size2 my-3">
                                    <b-form-checkbox
                                        id="check-006"
                                        class="toggle"
                                        v-model="switch006"
                                    >
                                        Small Size Unchecked
                                    </b-form-checkbox>
                                </b-form-group>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Switch Variants -->
                    <b-col sm="6" xxl="4">
                        <b-card>
                            <b-card-header>
                                <h5>Switch Variants</h5>
                            </b-card-header>
                            <b-card-body class="main-switch main-switch-color switch-unchecked switch_border">
                                <b-form-group
                                    v-for="(value, id) in switchStates"
                                    :key="id"
                                    :class="`switch-${id} switch-unchecked-${id} switch-border-${id} my-3`"
                                >
                                    <b-form-checkbox
                                        :id="id"
                                        class="toggle"
                                        v-model="switchStates[id]"
                                    >
                                        {{ labels[id] }}
                                    </b-form-checkbox>
                                </b-form-group>
                            </b-card-body>
                        </b-card>
                    </b-col>

                    <!-- Switch Outline -->
                    <b-col sm="6" xxl="4">
                        <b-card>
                            <b-card-header>
                                <h5>Switch Outline</h5>
                            </b-card-header>
                            <b-card-body class="switch_border main-switch switch-unchecked">
                                <b-form-group
                                    v-for="(value, id) in switchStates2"
                                    :key="id"
                                    :class="`switch-border-${id} switch-${id} switch-unchecked-${id} my-3`"
                                >
                                    <b-form-checkbox
                                        :id="id"
                                        class="toggle"
                                        v-model="switchStates2[id]"
                                    >
                                        {{ labels2[id] }}
                                    </b-form-checkbox>
                                </b-form-group>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </main>
    </AppLayout>
</template>
